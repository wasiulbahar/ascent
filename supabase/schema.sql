-- Ascent database. Run once in the Supabase SQL editor (Project > SQL editor > New query).
-- Every table has row-level security: learners see only their own rows; editors and admins see what they manage.

-- People and their role ---------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text,
  display_name text,
  role text not null default 'learner' check (role in ('learner', 'reviewer', 'editor', 'admin')),
  created_at timestamptz not null default now()
);

-- Role lookup used by the policies. security definer avoids the profiles policy calling itself.
create function public.my_role() returns text
language sql stable security definer set search_path = public
as $$ select role from public.profiles where id = auth.uid() $$;

create function public.is_staff() returns boolean
language sql stable security definer set search_path = public
as $$ select coalesce(public.my_role() in ('editor', 'admin'), false) $$;

-- New sign-ups get a learner profile automatically.
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public
as $$ begin insert into public.profiles (id, email) values (new.id, new.email); return new; end $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
create policy "read own profile, staff read all" on public.profiles for select using (id = auth.uid() or public.is_staff());
create policy "update own profile" on public.profiles for update using (id = auth.uid());
-- people may change only their display name, never their role
revoke update on public.profiles from authenticated;
grant update (display_name) on public.profiles to authenticated;

-- Admins change roles through this function (used by the admin dashboard), which checks the caller.
create function public.set_role(target uuid, new_role text) returns void
language plpgsql security definer set search_path = public
as $$
begin
  if public.my_role() <> 'admin' then raise exception 'Only admins can change roles'; end if;
  if new_role not in ('learner', 'reviewer', 'editor', 'admin') then raise exception 'Unknown role %', new_role; end if;
  update public.profiles set role = new_role where id = target;
  insert into public.audit_log (actor_id, action, target, detail) values (auth.uid(), 'set_role', target::text, jsonb_build_object('role', new_role));
end $$;

-- Learning progress ---------------------------------------------------------------
create table public.progress (
  user_id uuid not null references auth.users on delete cascade,
  path text not null,
  work_id text not null,
  done_at timestamptz not null default now(),
  primary key (user_id, path, work_id)
);
alter table public.progress enable row level security;
create policy "own progress" on public.progress for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "staff read progress" on public.progress for select using (public.is_staff());

create table public.quiz_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  path text not null,
  work_id text not null,
  score int not null,
  total int not null,
  passed boolean not null,
  created_at timestamptz not null default now()
);
alter table public.quiz_attempts enable row level security;
create policy "own attempts" on public.quiz_attempts for select using (user_id = auth.uid() or public.is_staff());
create policy "record own attempts" on public.quiz_attempts for insert with check (user_id = auth.uid());

-- Stages a learner chose to continue past without passing ("Not finished").
create table public.stage_skips (
  user_id uuid not null references auth.users on delete cascade,
  path text not null,
  stage int not null,
  created_at timestamptz not null default now(),
  primary key (user_id, path, stage)
);
alter table public.stage_skips enable row level security;
create policy "own skips" on public.stage_skips for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Problems reported by learners or reviewers ---------------------------------------
create table public.flags (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  path text not null,
  work_id text,
  category text not null,
  note text,
  status text not null default 'open' check (status in ('open', 'consulting', 'resolved', 'dismissed')),
  resolution text,
  created_at timestamptz not null default now()
);
alter table public.flags enable row level security;
create policy "report a problem" on public.flags for insert with check (user_id = auth.uid());
create policy "see own reports, staff see all" on public.flags for select using (user_id = auth.uid() or public.is_staff());
create policy "staff handle reports" on public.flags for update using (public.is_staff());

-- Expert review ---------------------------------------------------------------------
-- An endorsement covers one version of a path; editing the path asks reviewers to re-confirm.
create table public.endorsements (
  id bigint generated always as identity primary key,
  reviewer_id uuid not null references auth.users on delete cascade,
  path text not null,
  version int not null,
  decision text not null check (decision in ('endorse', 'suggest', 'flag')),
  comment text,
  no_conflict boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.endorsements enable row level security;
create policy "reviewers record decisions" on public.endorsements for insert
  with check (reviewer_id = auth.uid() and public.my_role() in ('reviewer', 'editor', 'admin'));
create policy "reviewers see own, staff see all" on public.endorsements for select using (reviewer_id = auth.uid() or public.is_staff());

create table public.applications (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  field text not null,
  evidence text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'declined')),
  created_at timestamptz not null default now()
);
alter table public.applications enable row level security;
create policy "apply" on public.applications for insert with check (user_id = auth.uid());
create policy "see own application, staff see all" on public.applications for select using (user_id = auth.uid() or public.is_staff());
create policy "admins decide" on public.applications for update using (public.my_role() = 'admin');

-- Every editorial decision, for accountability.
create table public.audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users,
  action text not null,
  target text,
  detail jsonb,
  created_at timestamptz not null default now()
);
alter table public.audit_log enable row level security;
create policy "staff write log" on public.audit_log for insert with check (public.is_staff() and actor_id = auth.uid());
create policy "staff read log" on public.audit_log for select using (public.is_staff());

-- Site settings, such as whether reviewer applications are invite-only or open.
create table public.settings (key text primary key, value jsonb not null);
alter table public.settings enable row level security;
create policy "everyone reads settings" on public.settings for select using (true);
create policy "admins change settings" on public.settings for all using (public.my_role() = 'admin') with check (public.my_role() = 'admin');
insert into public.settings (key, value) values ('reviewer_applications', '"invite"');

-- Table privileges. Newer Supabase projects don't grant these automatically.
-- Row-level security above still decides which rows each person can touch.
grant usage on schema public to anon, authenticated;
grant select on public.settings to anon, authenticated;
grant insert, update, delete on public.settings to authenticated;
grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.progress, public.stage_skips to authenticated;
grant select, insert on public.quiz_attempts, public.flags, public.endorsements, public.applications, public.audit_log to authenticated;
grant update on public.flags, public.applications to authenticated;
grant usage on all sequences in schema public to authenticated;
grant execute on function public.my_role(), public.is_staff(), public.set_role(uuid, text) to authenticated;

-- After your first sign-in, make yourself admin (replace the email):
-- update public.profiles set role = 'admin' where email = 'you@example.com';
