// Email-link sign-in through Supabase. PKCE keeps the hash free for the app's own routes.
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

export const sb = SUPABASE_URL && SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { flowType: "pkce" } })
  : null;

export const auth = { user: null, ready: false, role: null, profile: null };

// The signed-in person's profile: role decides which tabs they see (the database enforces the rest).
export async function loadProfile() {
  auth.role = null; auth.profile = null;
  if (!sb || !auth.user) return;
  let { data, error } = await sb.from("profiles").select("role,display_name,affiliation").eq("id", auth.user.id).maybeSingle();
  if (error) ({ data } = await sb.from("profiles").select("role,display_name").eq("id", auth.user.id).maybeSingle()); // before week4.sql adds affiliation
  auth.profile = data || null;
  auth.role = data?.role || "learner";
}
export const isStaff = () => ["editor", "admin"].includes(auth.role);
export const isReviewer = () => ["reviewer", "editor", "admin"].includes(auth.role);

export async function initAuth(onChange) {
  if (!sb) { auth.ready = true; return; }
  // Run onChange after the callback: Supabase calls made inside it wait on its own lock and hang.
  sb.auth.onAuthStateChange((_event, session) => { auth.user = session?.user || null; setTimeout(onChange, 0); });
  const { data } = await sb.auth.getSession();
  auth.user = data.session?.user || null;
  auth.ready = true;
  // drop the one-time ?code= from the address bar once the session is set
  if (location.search.includes("code=")) history.replaceState(null, "", location.pathname + location.hash);
}

export async function sendLink(email) {
  const { error } = await sb.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: location.origin + location.pathname, shouldCreateUser: true },
  });
  return error;
}

export const signOut = () => sb.auth.signOut();
