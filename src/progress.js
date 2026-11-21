// A learner's record: ticked works, best quiz scores, and stages they continued past.
// Saved to their account when signed in; otherwise kept in this browser and moved into
// the account at the next sign-in.
import { sb, auth } from "./auth.js?v=19";
import { PASS_MARK } from "./status.js?v=19";

const LOCAL = { done: "ascent-progress", attempts: "ascent-attempts", skips: "ascent-skips" };
const key = (...parts) => parts.join(":");
export const progress = { done: new Set(), best: new Map(), skips: new Set() };

const read = k => { try { return JSON.parse(localStorage.getItem(k) || "[]"); } catch { return []; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked: kept for this visit only */ } };
const clearLocal = () => Object.values(LOCAL).forEach(k => write(k, []));

function keepBest(path, work, score, total, at = null) {
  const k = key(path, work), cur = progress.best.get(k);
  if (!cur || score / total > cur.score / cur.total) progress.best.set(k, { score, total, at });
}

export async function loadProgress() {
  const local = { done: read(LOCAL.done), attempts: read(LOCAL.attempts), skips: read(LOCAL.skips) };
  progress.done = new Set(); progress.best = new Map(); progress.skips = new Set();
  if (sb && auth.user) {
    const [d, a, s] = await Promise.all([
      sb.from("progress").select("path,work_id"),
      sb.from("quiz_attempts").select("path,work_id,score,total,created_at"),
      sb.from("stage_skips").select("path,stage"),
    ]);
    if (!d.error && !a.error && !s.error) {
      d.data.forEach(r => progress.done.add(key(r.path, r.work_id)));
      a.data.forEach(r => keepBest(r.path, r.work_id, r.score, r.total, r.created_at));
      s.data.forEach(r => progress.skips.add(key(r.path, r.stage)));
      // move anything done while signed out into the account
      const uid = auth.user.id;
      const ups = [];
      const newDone = local.done.filter(k => !progress.done.has(k));
      if (newDone.length) ups.push(sb.from("progress").upsert(newDone.map(k => { const [path, work_id] = k.split(":"); return { user_id: uid, path, work_id }; })));
      if (local.attempts.length) ups.push(sb.from("quiz_attempts").insert(local.attempts.map(({ at, ...r }) => ({ ...r, user_id: uid }))));
      const newSkips = local.skips.filter(k => !progress.skips.has(k));
      if (newSkips.length) ups.push(sb.from("stage_skips").upsert(newSkips.map(k => { const [path, stage] = k.split(":"); return { user_id: uid, path, stage: +stage }; })));
      const results = await Promise.all(ups);
      if (results.every(r => !r.error)) {
        newDone.forEach(k => progress.done.add(k));
        local.attempts.forEach(r => keepBest(r.path, r.work_id, r.score, r.total, r.at));
        newSkips.forEach(k => progress.skips.add(k));
        clearLocal();
      }
      return;
    }
  }
  local.done.forEach(k => progress.done.add(k));
  local.attempts.forEach(r => keepBest(r.path, r.work_id, r.score, r.total, r.at));
  local.skips.forEach(k => progress.skips.add(k));
}

const signedIn = () => sb && auth.user;

export const isDone = (path, work) => progress.done.has(key(path, work));
export const best = (path, work) => progress.best.get(key(path, work)) || null;
export const isSkipped = (path, stage) => progress.skips.has(key(path, stage));

export async function setDone(path, work, on) {
  const k = key(path, work);
  on ? progress.done.add(k) : progress.done.delete(k);
  if (signedIn()) {
    const row = { user_id: auth.user.id, path, work_id: work };
    const { error } = on ? await sb.from("progress").upsert(row) : await sb.from("progress").delete().match(row);
    if (error) { on ? progress.done.delete(k) : progress.done.add(k); throw error; }
  } else write(LOCAL.done, [...progress.done]);
}

export async function recordAttempt(path, work, score, total, mark = PASS_MARK) {
  const passed = score / total >= mark, at = new Date().toISOString();
  const row = { path, work_id: work, score, total, passed };
  if (signedIn()) {
    const { error } = await sb.from("quiz_attempts").insert({ ...row, user_id: auth.user.id });
    if (error) throw error;
  } else write(LOCAL.attempts, [...read(LOCAL.attempts), { ...row, at }]);
  keepBest(path, work, score, total, at);
  return passed;
}

export async function skipStage(path, stage) {
  const k = key(path, stage);
  if (signedIn()) {
    const { error } = await sb.from("stage_skips").upsert({ user_id: auth.user.id, path, stage });
    if (error) throw error;
  } else write(LOCAL.skips, [...progress.skips, k]);
  progress.skips.add(k);
}
