-- Week 9: classroom mode. A teacher creates a class for one path; learners join with a code and
-- agree to share their progress on that path (only that path) with the teacher. Run once in Supabase.

create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users on delete cascade,
  name text not null check (length(name) between 1 and 80),
  path text not null,
  join_code text not null unique default upper(substr(md5(random()::text || clock_timestamp()::text), 1, 6)),
  created_at timestamptz not null default now()
);
create table if not exists public.class_members (
  class_id uuid not null references public.classes on delete cascade,
  user_id uuid not null references auth.users on delete cascade,
  display_name text,
  joined_at timestamptz not null default now(),
  primary key (class_id, user_id)
);
alter table public.classes enable row level security;
alter table public.class_members enable row level security;

create or replace function public.is_class_member(cid uuid) returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.class_members where class_id = cid and user_id = auth.uid()) $$;

drop policy if exists "owners and members read classes" on public.classes;
create policy "owners and members read classes" on public.classes for select using (owner_id = auth.uid() or public.is_class_member(id));
drop policy if exists "anyone signed in creates a class" on public.classes;
create policy "anyone signed in creates a class" on public.classes for insert with check (owner_id = auth.uid());
drop policy if exists "owners change or delete" on public.classes;
create policy "owners change or delete" on public.classes for update using (owner_id = auth.uid());
drop policy if exists "owners delete" on public.classes;
create policy "owners delete" on public.classes for delete using (owner_id = auth.uid());

drop policy if exists "members and owners read members" on public.class_members;
create policy "members and owners read members" on public.class_members for select
  using (user_id = auth.uid() or exists (select 1 from public.classes c where c.id = class_id and c.owner_id = auth.uid()));
drop policy if exists "members leave, owners remove" on public.class_members;
create policy "members leave, owners remove" on public.class_members for delete
  using (user_id = auth.uid() or exists (select 1 from public.classes c where c.id = class_id and c.owner_id = auth.uid()));

grant select, insert, update, delete on public.classes to authenticated;
grant select, delete on public.class_members to authenticated;

-- Joining goes through a function, because a learner can't read a class before joining it.
create or replace function public.join_class(code text) returns uuid
language plpgsql security definer set search_path = public
as $$
declare cid uuid; nm text;
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  select id into cid from public.classes where join_code = upper(trim(code));
  if cid is null then raise exception 'No class has that code'; end if;
  select coalesce(display_name, split_part(email, '@', 1)) into nm from public.profiles where id = auth.uid();
  insert into public.class_members (class_id, user_id, display_name) values (cid, auth.uid(), nm)
  on conflict (class_id, user_id) do nothing;
  return cid;
end $$;
revoke all on function public.join_class(text) from public, anon;
grant execute on function public.join_class(text) to authenticated;

-- The teacher's view: members' ticks, best quiz scores and stage skips on the class's path only.
create or replace function public.class_progress(cid uuid)
returns table (user_id uuid, display_name text, kind text, work_id text, score int, total int, stage int)
language plpgsql stable security definer set search_path = public
as $$
declare p text;
begin
  select path into p from public.classes where id = cid and owner_id = auth.uid();
  if p is null then raise exception 'Only the class owner can see its progress'; end if;
  return query
    select m.user_id, m.display_name, 'member'::text, null::text, null::int, null::int, null::int from public.class_members m where m.class_id = cid
    union all
    select m.user_id, m.display_name, 'done', g.work_id, null, null, null
      from public.class_members m join public.progress g on g.user_id = m.user_id and g.path = p where m.class_id = cid
    union all
    select m.user_id, m.display_name, 'quiz', a.work_id, max(a.score), max(a.total), null
      from public.class_members m join public.quiz_attempts a on a.user_id = m.user_id and a.path = p where m.class_id = cid
      group by m.user_id, m.display_name, a.work_id
    union all
    select m.user_id, m.display_name, 'skip', null, null, null, s.stage
      from public.class_members m join public.stage_skips s on s.user_id = m.user_id and s.path = p where m.class_id = cid;
end $$;
revoke all on function public.class_progress(uuid) from public, anon;
grant execute on function public.class_progress(uuid) to authenticated;
