-- Week 8: daily review. Keeps each learner's spaced-repetition schedule (which questions come
-- back, and when) so it follows them across devices. Run once in the Supabase SQL editor.
create table if not exists public.review_state (
  user_id uuid not null references auth.users on delete cascade,
  key text not null,          -- path:work:question
  box int not null check (box between 1 and 5),
  due date not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table public.review_state enable row level security;
drop policy if exists "own review state" on public.review_state;
create policy "own review state" on public.review_state for all using (user_id = auth.uid()) with check (user_id = auth.uid());
grant select, insert, update, delete on public.review_state to authenticated;

-- "Reset progress" also clears the review schedule for the path(s) being reset.
create or replace function public.reset_my_progress(p_path text default null) returns void
language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  delete from public.progress      where user_id = auth.uid() and (p_path is null or path = p_path);
  delete from public.quiz_attempts where user_id = auth.uid() and (p_path is null or path = p_path);
  delete from public.stage_skips   where user_id = auth.uid() and (p_path is null or path = p_path);
  delete from public.review_state  where user_id = auth.uid() and (p_path is null or key like p_path || ':%');
end $$;
revoke all on function public.reset_my_progress(text) from public, anon;
grant execute on function public.reset_my_progress(text) to authenticated;
