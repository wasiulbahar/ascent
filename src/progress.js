// Which works a learner has ticked off. Saved to their account when signed in,
// otherwise kept in this browser and moved into the account at the next sign-in.
import { sb, auth } from "./auth.js?v=3";

const LOCAL = "ascent-progress";
const key = (path, work) => `${path}:${work}`;
export const progress = { done: new Set() };

const readLocal = () => { try { return new Set(JSON.parse(localStorage.getItem(LOCAL) || "[]")); } catch { return new Set(); } };
const writeLocal = s => { try { localStorage.setItem(LOCAL, JSON.stringify([...s])); } catch { /* storage blocked: ticks last this visit only */ } };

export async function loadProgress() {
  const local = readLocal();
  if (sb && auth.user) {
    const { data, error } = await sb.from("progress").select("path,work_id");
    if (!error) {
      progress.done = new Set(data.map(r => key(r.path, r.work_id)));
      const missing = [...local].filter(k => !progress.done.has(k));
      if (missing.length) {
        const rows = missing.map(k => { const [path, work_id] = k.split(":"); return { user_id: auth.user.id, path, work_id }; });
        const { error: upErr } = await sb.from("progress").upsert(rows);
        if (!upErr) { missing.forEach(k => progress.done.add(k)); writeLocal(new Set()); }
      } else writeLocal(new Set());
      return;
    }
  }
  progress.done = local;
}

export const isDone = (path, work) => progress.done.has(key(path, work));

export async function setDone(path, work, on) {
  const k = key(path, work);
  on ? progress.done.add(k) : progress.done.delete(k);
  if (sb && auth.user) {
    const row = { user_id: auth.user.id, path, work_id: work };
    const { error } = on ? await sb.from("progress").upsert(row) : await sb.from("progress").delete().match(row);
    if (error) { on ? progress.done.delete(k) : progress.done.add(k); throw error; }
  } else writeLocal(progress.done);
}
