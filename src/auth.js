// Email-link sign-in through Supabase. PKCE keeps the hash free for the app's own routes.
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

export const sb = SUPABASE_URL && SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { flowType: "pkce" } })
  : null;

export const auth = { user: null, ready: false };

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
