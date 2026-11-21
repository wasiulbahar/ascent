-- Week 4: admin dashboard and reviewer portal. Run once in the Supabase SQL editor, after schema.sql.

-- Public credit for reviewers: a name and an affiliation they can edit themselves.
alter table public.profiles add column if not exists affiliation text;
grant update (display_name, affiliation) on public.profiles to authenticated;

-- Reviewers can comment on a single work, not only the whole path (null work_id = the whole path).
alter table public.endorsements add column if not exists work_id text;

-- Which reviewer is asked to review which path.
create table if not exists public.review_assignments (
  reviewer_id uuid not null references auth.users on delete cascade,
  path text not null,
  created_at timestamptz not null default now(),
  primary key (reviewer_id, path)
);
alter table public.review_assignments enable row level security;
create policy "staff manage assignments" on public.review_assignments for all using (public.is_staff()) with check (public.is_staff());
create policy "reviewers see own assignments" on public.review_assignments for select using (reviewer_id = auth.uid());
grant select, insert, delete on public.review_assignments to authenticated;

-- Where each path stands in the review pipeline. Everyone can read it; staff change it.
create table if not exists public.path_status (
  path text primary key,
  status text not null default 'draft' check (status in ('draft', 'editor-reviewed', 'in-review', 'verified')),
  updated_at timestamptz not null default now()
);
alter table public.path_status enable row level security;
create policy "everyone reads path status" on public.path_status for select using (true);
create policy "staff set path status" on public.path_status for all using (public.is_staff()) with check (public.is_staff());
grant select on public.path_status to anon, authenticated;
grant insert, update on public.path_status to authenticated;

-- Staff need to read skipped stages for learner insights.
create policy "staff read skips" on public.stage_skips for select using (public.is_staff());

-- Public endorsement badge: who endorsed a path, without exposing anyone's email.
create or replace function public.endorsements_for(p text)
returns table (name text, affiliation text, version int, created_at timestamptz)
language sql stable security definer set search_path = public
as $$
  select coalesce(nullif(pr.display_name, ''), 'An Ascent reviewer'), pr.affiliation, e.version, max(e.created_at)
  from public.endorsements e join public.profiles pr on pr.id = e.reviewer_id
  where e.path = p and e.decision = 'endorse' and e.work_id is null
  group by pr.display_name, pr.affiliation, e.version, e.reviewer_id
$$;
grant execute on function public.endorsements_for(text) to anon, authenticated;
