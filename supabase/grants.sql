-- Run this once in the Supabase SQL editor if you already ran schema.sql before these lines were added.
-- It lets the app use the tables; row-level security still decides which rows each person can touch.
grant usage on schema public to anon, authenticated;
grant select on public.settings to anon, authenticated;
grant insert, update, delete on public.settings to authenticated;
grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.progress, public.stage_skips to authenticated;
grant select, insert on public.quiz_attempts, public.flags, public.endorsements, public.applications, public.audit_log to authenticated;
grant update on public.flags, public.applications to authenticated;
grant usage on all sequences in schema public to authenticated;
grant execute on function public.my_role(), public.is_staff(), public.set_role(uuid, text) to authenticated;
