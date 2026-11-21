-- Week 6: "Reset progress" in Settings.
-- Learners can't delete quiz attempts directly (the table only allows reading and adding rows),
-- so this function deletes the signed-in person's own progress, quiz attempts and stage skips,
-- for one path or for every path. It never touches anyone else's rows.
-- Run once in the Supabase SQL editor.
create or replace function public.reset_my_progress(p_path text default null) returns void
language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  delete from public.progress      where user_id = auth.uid() and (p_path is null or path = p_path);
  delete from public.quiz_attempts where user_id = auth.uid() and (p_path is null or path = p_path);
  delete from public.stage_skips   where user_id = auth.uid() and (p_path is null or path = p_path);
end $$;
revoke all on function public.reset_my_progress(text) from public, anon;
grant execute on function public.reset_my_progress(text) to authenticated;
