-- Week 7: the map editor (change log for the taxonomy and points of interest), essay submissions
-- with reviewer marking, and verified certificates. Run once in the Supabase SQL editor.

create or replace function public.is_reviewer() returns boolean
language sql stable security definer set search_path = public
as $$ select coalesce(public.my_role() in ('reviewer', 'editor', 'admin'), false) $$;

-- 1. Map editor: every edit to the map is a row; the app applies approved rows on top of the
--    published map files. Reviewers and staff propose; staff (editors, admins) decide.
create table if not exists public.tax_changes (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  actor_id uuid references auth.users on delete set null,
  kind text not null check (kind in ('add_field', 'rename', 'add_link', 'remove_link', 'deprecate', 'merge', 'approve_field', 'poi_homes', 'approve_poi')),
  target text not null,                 -- field id, or point-of-interest id
  payload jsonb not null default '{}',  -- e.g. {"name": "..."} or {"parent": "..."} or {"homes": [...]}
  note text,                            -- why: shown in the change log
  status text not null default 'proposed' check (status in ('proposed', 'approved', 'rejected')),
  decided_by uuid references auth.users on delete set null,
  decided_at timestamptz
);
alter table public.tax_changes enable row level security;
drop policy if exists "anyone reads approved changes" on public.tax_changes;
create policy "anyone reads approved changes" on public.tax_changes for select using (status = 'approved' or public.is_reviewer());
drop policy if exists "reviewers propose" on public.tax_changes;
create policy "reviewers propose" on public.tax_changes for insert with check (public.is_reviewer() and actor_id = auth.uid() and (status = 'proposed' or public.is_staff()));
drop policy if exists "staff decide" on public.tax_changes;
create policy "staff decide" on public.tax_changes for update using (public.is_staff());
grant select on public.tax_changes to anon, authenticated;
grant insert, update on public.tax_changes to authenticated;

-- 2. Essays: Scholar challenges (per work) and the capstone (per path), marked by reviewers.
create table if not exists public.submissions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  user_id uuid not null references auth.users on delete cascade,
  path text not null,
  ref text not null,                    -- a work id, or 'capstone'
  body text not null check (length(body) between 50 and 40000),
  status text not null default 'submitted' check (status in ('submitted', 'passed', 'revise')),
  marks jsonb,                          -- {"understanding": 1-4, "evidence": 1-4, "argument": 1-4, "writing": 1-4}
  feedback text,
  marked_by uuid references auth.users on delete set null,
  marked_at timestamptz
);
alter table public.submissions enable row level security;
drop policy if exists "own submissions" on public.submissions;
create policy "own submissions" on public.submissions for select using (user_id = auth.uid() or public.is_reviewer());
drop policy if exists "submit own" on public.submissions;
create policy "submit own" on public.submissions for insert with check (user_id = auth.uid() and status = 'submitted' and marks is null);
drop policy if exists "reviewers mark" on public.submissions;
create policy "reviewers mark" on public.submissions for update using (public.is_reviewer() and user_id <> auth.uid());
grant select, insert on public.submissions to authenticated;
grant update (status, marks, feedback, marked_by, marked_at) on public.submissions to authenticated;

-- 3. Verified certificates. Issued only when the database itself shows a passed grand quiz;
--    "full mastery" also needs a passed capstone essay. Anyone can check one by its id,
--    but nobody can list them.
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  path text not null,
  name text not null check (length(name) between 1 and 60),
  score int not null, total int not null,
  level text not null check (level in ('grand quiz', 'full mastery')),
  issued_at timestamptz not null default now(),
  unique (user_id, path, level)
);
alter table public.certificates enable row level security;
drop policy if exists "own certificates" on public.certificates;
create policy "own certificates" on public.certificates for select using (user_id = auth.uid());
grant select on public.certificates to authenticated;

create or replace function public.issue_certificate(p_path text, p_name text) returns uuid
language plpgsql security definer set search_path = public
as $$
declare best record; lvl text; cid uuid;
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  select score, total into best from public.quiz_attempts
   where user_id = auth.uid() and path = p_path and work_id = 'mastery' and score * 10 >= total * 8
   order by score::float / total desc limit 1;
  if not found then raise exception 'No passed grand quiz for this path yet'; end if;
  lvl := case when exists (select 1 from public.submissions where user_id = auth.uid() and path = p_path and ref = 'capstone' and status = 'passed')
              then 'full mastery' else 'grand quiz' end;
  insert into public.certificates (user_id, path, name, score, total, level)
  values (auth.uid(), p_path, left(trim(p_name), 60), best.score, best.total, lvl)
  on conflict (user_id, path, level) do update set name = excluded.name, score = excluded.score, total = excluded.total
  returning id into cid;
  return cid;
end $$;
revoke all on function public.issue_certificate(text, text) from public, anon;
grant execute on function public.issue_certificate(text, text) to authenticated;

create or replace function public.verify_certificate(cid uuid)
returns table (name text, path text, score int, total int, level text, issued_at timestamptz)
language sql stable security definer set search_path = public
as $$ select name, path, score, total, level, issued_at from public.certificates where id = cid $$;
grant execute on function public.verify_certificate(uuid) to anon, authenticated;
