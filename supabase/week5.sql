-- Week 5: let people delete their own account. Run once in the Supabase SQL editor.
-- Deleting the auth user removes their profile, progress, quiz scores, skipped stages, reports,
-- reviews, applications and assignments (all set to "on delete cascade" in schema.sql and week4.sql).
-- Audit-log entries are kept for accountability but no longer point to the person.
create or replace function public.delete_my_account() returns void
language plpgsql security definer set search_path = public, auth
as $$
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  update public.audit_log set actor_id = null where actor_id = auth.uid();
  delete from auth.users where id = auth.uid();
end $$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
