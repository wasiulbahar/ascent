// Admin dashboard, reviewer portal and "Report a problem". The database's row-level security decides
// what each person can read or change; these screens only show what it allows.
import { sb, auth, isStaff, isReviewer } from "./auth.js?v=26";
import { PATHS } from "./paths.js?v=26";
import { loadTax, loadPoi, search, nameOf, resetTax } from "./taxonomy.js?v=26";

let H; // helpers handed over by app.js: esc, C, ico, inline, getPath, toast, refresh
export const useHelpers = h => (H = h);

const q = async p => { const { data, error } = await p; if (error) throw error; return data; };
const day = iso => new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
const log = (action, target, detail = {}) => sb.from("audit_log").insert({ actor_id: auth.user.id, action, target, detail });
const needSql = e => `<div class="status warn"><b>Part of the database isn't set up yet.</b> Run <code>supabase/week4.sql</code> in the Supabase SQL editor, then refresh this page.<small>${H.esc(e.message || e)}</small></div>`;
const signinFirst = what => `<div class="stack"><h1>${what}</h1><p class="notice">Sign in to open ${what.toLowerCase()}. <a href="#/signin">Sign in</a></p></div>`;
const STATUS_TEXT = { draft: "Draft", "editor-reviewed": "Editor reviewed", "in-review": "In expert review", verified: "Verified" };
const ROLES = ["learner", "reviewer", "editor", "admin"];
const verifyCount = w => w.layers.reduce((n, l) => n + (l.body.match(/\[verify/g) || []).length, 0);

// --- admin -----------------------------------------------------------------------
const TABS = [["overview", "Overview"], ["paths", "Paths"], ["reports", "Reports"], ["people", "People"], ["applications", "Applications"], ["insights", "Insights"], ["map", "Map editor"], ["essays", "Essays"], ["log", "Log"]];
export async function adminView(tab = "overview") {
  if (!auth.user) return signinFirst("Admin");
  if (!isStaff()) return `<div class="stack"><h1>Admin</h1><p class="notice">Your account doesn't have admin access.</p></div>`;
  const nav = `<nav class="subtabs" aria-label="Admin sections">${TABS.map(([t, l]) => `<a href="#/admin/${t}" ${t === tab ? 'aria-current="page"' : ""}>${l}</a>`).join("")}</nav>`;
  let body; try { body = await (ADMIN[tab] || ADMIN.overview)(); } catch (e) { body = needSql(e); }
  return `<div class="stack admin"><h1>Admin</h1>${nav}${body}</div>`;
}

const people = () => q(sb.from("profiles").select("id,email,display_name,role,created_at"));
const byId = list => Object.fromEntries(list.map(p => [p.id, p]));
const who = p => p ? H.esc(p.display_name || p.email || "Unknown") : "Unknown";

// learner overview for the pilot: activity, who's stuck (started, quiet for 14+ days), survey answers
async function learnerOverview(prog, att, surveys, P) {
  const DAY = 864e5, now = Date.now(), last = new Map(), byUser = new Map();
  for (const r of [...prog.map(x => ({ ...x, at: x.done_at })), ...att.map(x => ({ ...x, at: x.created_at }))]) {
    const k = `${r.user_id}|${r.path}`, t = Date.parse(r.at) || 0;
    if (!last.has(k) || t > last.get(k)) last.set(k, t);
    if (!byUser.has(r.user_id) || t > byUser.get(r.user_id)) byUser.set(r.user_id, t);
  }
  const active = d => [...byUser.values()].filter(t => now - t < d * DAY).length;
  const stuck = [];
  for (const [k, t] of last) {
    if (now - t < 14 * DAY) continue;
    const [uid, slug] = k.split("|"), m = PATHS.find(x => x.slug === slug); if (!m) continue;
    const p = await H.getPath(slug).catch(() => null); if (!p) continue;
    const done = new Set(prog.filter(r => r.user_id === uid && r.path === slug).map(r => r.work_id));
    const next = p.works.find(w => !done.has(w.id)); if (!next) continue;
    stuck.push({ who: who(P[uid]), path: m.title, stage: next.stage?.num ?? "?", work: next.title, days: Math.floor((now - t) / DAY) });
  }
  stuck.sort((a, b) => b.days - a.days);
  const latest = [...new Map([...surveys].reverse().map(s => [s.user_id, s])).values()].map(s => { try { return { ...JSON.parse(s.note), u: s.user_id }; } catch { return null; } }).filter(Boolean);
  const nums = k => latest.map(a => a[k]).filter(x => x !== null && x !== undefined && x !== "").map(Number);
  const u = nums("useful"), n = nums("nps");
  const avg = u.length ? (u.reduce((x, y) => x + y, 0) / u.length).toFixed(1) : "–";
  const nps = n.length ? Math.round(((n.filter(x => x >= 9).length - n.filter(x => x <= 6).length) / n.length) * 100) : "–";
  return `<section class="section"><h2>Learners at a glance</h2>
    <div class="row" style="gap:24px;flex-wrap:wrap"><p><b>${byUser.size}</b><br><small class="muted">have started a path</small></p><p><b>${active(7)}</b><br><small class="muted">active in the last 7 days</small></p><p><b>${active(30)}</b><br><small class="muted">active in the last 30 days</small></p><p><b>${latest.length}</b><br><small class="muted">survey answers</small></p></div></section>
  <section class="section"><h2>Who's stuck (${stuck.length})</h2><p class="muted">Started a path, not finished it, and nothing ticked or attempted for 14 days or more.</p>
    ${stuck.length ? `<div class="tablewrap"><table class="classtable"><thead><tr><th scope="col">Learner</th><th scope="col">Path</th><th scope="col">Stopped at</th><th scope="col">Quiet for</th></tr></thead><tbody>${stuck.slice(0, 50).map(s => `<tr><th scope="row">${s.who}</th><td>${H.esc(s.path)}</td><td>Stage ${s.stage}: ${H.esc(s.work)}</td><td>${s.days} days</td></tr>`).join("")}</tbody></table></div>` : `<p class="soon">Nobody is stuck right now.</p>`}</section>
  <section class="section"><h2>Pilot survey</h2>${latest.length ? `<p>Average usefulness <b>${avg}</b> of 5 · Net promoter score <b>${nps}</b> (from −100 to 100)</p>
    <ul>${latest.slice(0, 30).map(a => `<li>${who(P[a.u])}${a.path ? ` · ${H.esc(PATHS.find(p => p.slug === a.path)?.title || a.path)}` : ""}${a.good ? `<br><small>Liked: ${H.esc(a.good)}</small>` : ""}${a.bad ? `<br><small>Confusing: ${H.esc(a.bad)}</small>` : ""}</li>`).join("")}</ul>` : `<p class="soon">No survey answers yet. Learners find it under Settings › Pilot survey.</p>`}</section>`;
}

const KIND_TEXT = { add_field: "New branch", rename: "Rename", add_link: "New home", remove_link: "Home removed", deprecate: "Deprecated", merge: "Merged", approve_field: "Field approved", poi_homes: "Point of interest moved", approve_poi: "Point of interest approved" };
const mapEd = { q: "", field: null };
const txHits = t => mapEd.q.trim().length < 2 ? "" : search(t, mapEd.q, 8).map(id => `<li><button class="linkbtn" type="button" data-tx-pick="${id}">${H.esc(t.entities[id].n)}</button> <small class="muted">${id}</small></li>`).join("");
async function txSave(kind, target, payload, note) {
  const staff = isStaff();
  const row = { kind, target, payload, note: note || null, actor_id: auth.user.id, status: staff ? "approved" : "proposed", ...(staff ? { decided_by: auth.user.id, decided_at: new Date().toISOString() } : {}) };
  const { error } = await sb.from("tax_changes").insert(row);
  if (error) return H.toast(/relation|does not exist|schema cache/i.test(error.message) ? "Run supabase/week7.sql first" : `Couldn't save: ${error.message}`);
  resetTax(); H.toast(staff ? "Saved and applied" : "Proposed for an editor to approve"); H.refresh();
}
const RUBRIC = [["understanding", "Understanding of the works"], ["evidence", "Use of evidence"], ["argument", "Argument"], ["writing", "Clear writing"]];
async function essaysPanel() {
  const rows = await q(sb.from("submissions").select("id,created_at,path,ref,body,status,marks,feedback,user_id").order("created_at", { ascending: true }).limit(200));
  const todo = rows.filter(r => r.status === "submitted" && r.user_id !== auth.user.id), done = rows.filter(r => r.status !== "submitted").slice(-20).reverse();
  const label = async r => { const m = PATHS.find(x => x.slug === r.path); const p = m && await H.getPath(r.path).catch(() => null);
    return `${H.esc(m?.title || r.path)} · ${r.ref === "capstone" ? "Capstone essay" : `Scholar challenge, Stage ${H.esc(r.ref.replace("stage-", ""))}${p ? `: ${H.esc(p.stages[+r.ref.replace("stage-", "") - 1]?.name || "")}` : ""}`}`; };
  const items = await Promise.all(todo.map(async r => `<li class="section"><b>${await label(r)}</b> <small class="muted">· submitted ${day(r.created_at)} · ${r.body.trim().split(/\s+/).length} words</small>
    <details><summary>Read the essay</summary><div class="txt essay">${H.esc(r.body).replace(/\n\n+/g, "</p><p>").replace(/^/, "<p>")}</p></div></details>
    <div class="row">${RUBRIC.map(([k, l]) => `<label class="field" style="min-width:140px">${l}<select id="m-${k}-${r.id}">${[1, 2, 3, 4].map(n => `<option ${n === 3 ? "selected" : ""}>${n}</option>`).join("")}</select></label>`).join("")}</div>
    <div class="field"><label for="m-fb-${r.id}">Feedback for the learner</label><textarea id="m-fb-${r.id}" rows="3"></textarea></div>
    <span class="row"><button class="btn small" type="button" data-mark="${r.id}" data-to="passed">Pass</button><button class="btn small ghost" type="button" data-mark="${r.id}" data-to="revise">Ask for a revision</button></span></li>`));
  return `<section class="stack"><h2>Essays to mark (${todo.length})</h2><p class="muted">Score each part from 1 (weak) to 4 (excellent), write a few lines of feedback, then pass the essay or ask for a revision. You can't mark your own.</p>
    ${items.length ? `<ul class="results">${items.join("")}</ul>` : `<p class="muted">Nothing waiting.</p>`}
    ${done.length ? `<h3>Recently marked</h3><ul class="results">${(await Promise.all(done.map(async r => `<li>${await label(r)} <small class="muted">· ${r.status === "passed" ? "passed" : "revision asked"}</small></li>`))).join("")}</ul>` : ""}</section>`;
}
async function markEssay(id, to) {
  const marks = Object.fromEntries(RUBRIC.map(([k]) => [k, +document.querySelector(`#m-${k}-${id}`).value]));
  const feedback = document.querySelector(`#m-fb-${id}`).value.trim();
  if (!feedback) return H.toast("Write a little feedback first");
  const { error } = await sb.from("submissions").update({ status: to, marks, feedback, marked_by: auth.user.id, marked_at: new Date().toISOString() }).eq("id", id);
  if (error) return H.toast(`Couldn't save: ${error.message}`);
  log("mark_essay", String(id), { status: to, marks }); H.toast(to === "passed" ? "Passed" : "Sent back for revision"); H.refresh();
}
const ADMIN = {
  // ponytail: counts are computed in the browser from whole tables; move them into SQL views once there are thousands of rows
  async overview() {
    const since = new Date(Date.now() - 7 * 864e5).toISOString();
    const [ppl, prog, att, flags] = await Promise.all([people(), q(sb.from("progress").select("user_id,done_at")), q(sb.from("quiz_attempts").select("user_id,created_at,passed")), q(sb.from("flags").select("status").neq("category", "survey"))]);
    const active = new Set([...prog.filter(r => r.done_at >= since), ...att.filter(r => r.created_at >= since)].map(r => r.user_id)).size;
    const passRate = att.length ? Math.round(att.filter(a => a.passed).length / att.length * 100) + "% passed" : "none yet";
    const tile = (n, l, c) => `<div class="tile" style="${H.C(c)}"><b>${n}</b><span>${l}</span></div>`;
    return `<div class="tiles">${tile(ppl.length, "people signed up", "lilac")}${tile(active, "active in the last 7 days", "mint")}${tile(prog.length, "works ticked off", "sky")}${tile(att.length, `quizzes taken · ${passRate}`, "butter")}${tile(flags.filter(f => f.status === "open").length, "open reports", "rose")}</div>
      <p class="muted">Roles: ${ROLES.map(r => `${ppl.filter(p => p.role === r).length} ${r}${ppl.filter(p => p.role === r).length === 1 ? "" : "s"}`).join(" · ")}</p>`;
  },

  async paths() {
    const [st, ends, asg, ppl] = await Promise.all([q(sb.from("path_status").select("*")), q(sb.from("endorsements").select("reviewer_id,path,version,decision,work_id")), q(sb.from("review_assignments").select("*")), people()]);
    const P = byId(ppl), reviewers = ppl.filter(p => p.role !== "learner");
    const rows = await Promise.all(PATHS.map(async m => {
      const p = await H.getPath(m.slug), v = +(p.fm.version || 1), status = st.find(s => s.path === m.slug)?.status || "draft";
      const mine = ends.filter(e => e.path === m.slug);
      const endorsed = new Set(mine.filter(e => e.decision === "endorse" && !e.work_id && e.version === v).map(e => e.reviewer_id)).size;
      const notes = mine.filter(e => e.decision !== "endorse").length;
      const assigned = asg.filter(a => a.path === m.slug);
      return `<section class="section"><div class="row" style="justify-content:space-between;align-items:baseline"><h2>${H.esc(m.title)}</h2><span class="muted">Version ${v} · ${p.works.length} works · ${p.works.reduce((n, w) => n + verifyCount(w), 0)} facts to check</span></div>
        <div class="row" style="align-items:center"><label class="muted" for="st-${m.slug}">Status</label>
          <select id="st-${m.slug}" data-pathstatus="${m.slug}">${Object.entries(STATUS_TEXT).map(([k, l]) => `<option value="${k}" ${k === status ? "selected" : ""}>${l}</option>`).join("")}</select>
          <span class="chip ok">${endorsed} endorsement${endorsed === 1 ? "" : "s"} on this version</span><span class="chip">${notes} suggestion${notes === 1 ? "" : "s"} and flags</span></div>
        <div class="row" style="align-items:center"><span class="muted">Reviewers:</span>${assigned.map(a => `<span class="chip">${who(P[a.reviewer_id])} <button type="button" class="x" data-unassign="${m.slug}|${a.reviewer_id}" aria-label="Remove">×</button></span>`).join("") || `<span class="muted">none yet</span>`}
          <select data-assign="${m.slug}" aria-label="Assign a reviewer to ${H.esc(m.title)}"><option value="">Assign a reviewer…</option>${reviewers.filter(r => !assigned.some(a => a.reviewer_id === r.id)).map(r => `<option value="${r.id}">${who(r)} (${r.role})</option>`).join("")}</select></div>
        ${mine.filter(e => e.decision !== "endorse").length ? `<a href="#/review/${m.slug}" class="muted" style="font-weight:700">See reviewers' notes ›</a>` : ""}</section>`;
    }));
    return `<p class="muted">Only people with the reviewer, editor or admin role can be assigned. Give someone the reviewer role under People.</p>${rows.join("")}`;
  },

  async reports() {
    const [flags, ppl] = await Promise.all([q(sb.from("flags").select("*").neq("category", "survey").order("created_at", { ascending: false })), people()]);
    const P = byId(ppl);
    if (!flags.length) return `<p class="soon">No reports yet. Learners report problems with the "Report a problem" button on every lesson.</p>`;
    const titles = Object.fromEntries((await Promise.all(PATHS.map(async m => (await H.getPath(m.slug)).works.map(w => [`${m.slug}:${w.id}`, w.title])))).flat());
    return `<div class="list">${flags.map(f => `<div class="item ${f.status}">
      <div class="row" style="justify-content:space-between"><b>${H.esc(f.category)} · ${H.esc(f.path === "app" ? "App feedback" : PATHS.find(m => m.slug === f.path)?.title || f.path)}${f.work_id ? ` › ${H.esc(titles[`${f.path}:${f.work_id}`] || f.work_id)}` : ""}</b><span class="chip ${f.status === "open" ? "warn" : f.status === "resolved" ? "ok" : ""}">${H.esc(f.status)}</span></div>
      ${f.note ? `<p>${H.esc(f.note)}</p>` : ""}<small class="muted">From ${who(P[f.user_id])} · ${day(f.created_at)}${f.resolution ? ` · Decision: ${H.esc(f.resolution)}` : ""}</small>
      ${f.status === "open" || f.status === "consulting" ? `<div class="row"><input type="text" id="res-${f.id}" placeholder="What did you decide? (optional)" aria-label="Decision note">
        <button class="btn small" type="button" data-flag="${f.id}" data-to="resolved">Resolve</button><button class="btn small ghost" type="button" data-flag="${f.id}" data-to="consulting">Consult the expert</button><button class="btn small ghost" type="button" data-flag="${f.id}" data-to="dismissed">Dismiss</button></div>` : ""}
    </div>`).join("")}</div>`;
  },

  async people() {
    const ppl = (await people()).sort((a, b) => b.created_at.localeCompare(a.created_at));
    return `<input type="search" id="peoplesearch" placeholder="Search by email or name" aria-label="Search people">
      <div class="tablewrap"><table class="ptable"><thead><tr><th>Person</th><th>Role</th><th>Joined</th></tr></thead><tbody>
      ${ppl.map(p => `<tr data-find="${H.esc(((p.email || "") + " " + (p.display_name || "")).toLowerCase())}"><td><b>${H.esc(p.display_name || "No name yet")}</b><br><small class="muted">${H.esc(p.email || "")}</small></td>
        <td>${p.id === auth.user.id ? `<span class="chip">${p.role} (you)</span>` : `<select data-role="${p.id}" aria-label="Role for ${H.esc(p.email || "")}">${ROLES.map(r => `<option ${r === p.role ? "selected" : ""}>${r}</option>`).join("")}</select>`}</td>
        <td>${day(p.created_at)}</td></tr>`).join("")}</tbody></table></div>`;
  },

  async applications() {
    const [apps, setting, ppl] = await Promise.all([q(sb.from("applications").select("*").order("created_at", { ascending: false })), q(sb.from("settings").select("value").eq("key", "reviewer_applications").maybeSingle()), people()]);
    const P = byId(ppl), mode = setting?.value || "invite";
    return `<div class="section"><h2>Who can apply to review</h2><p class="muted">Invite only: you add reviewers yourself under People. Open: anyone signed in can apply from their account page, and you approve or decline here.</p>
      <div class="switch" role="group" aria-label="Reviewer applications"><button type="button" data-setmode="invite" aria-pressed="${mode === "invite"}">Invite only</button><button type="button" data-setmode="open" aria-pressed="${mode === "open"}">Open</button></div></div>
      ${apps.length ? `<div class="list">${apps.map(a => `<div class="item ${a.status}"><div class="row" style="justify-content:space-between"><b>${who(P[a.user_id])} · ${H.esc(a.field)}</b><span class="chip">${a.status}</span></div>
        <p>${H.esc(a.evidence)}</p><small class="muted">${H.esc(P[a.user_id]?.email || "")} · ${day(a.created_at)}</small>
        ${a.status === "pending" ? `<div class="row"><button class="btn small" type="button" data-app="${a.id}" data-user="${a.user_id}" data-decide="approved">Approve as reviewer</button><button class="btn small ghost" type="button" data-app="${a.id}" data-user="${a.user_id}" data-decide="declined">Decline</button></div>` : ""}</div>`).join("")}</div>`
      : `<p class="soon">No applications yet.</p>`}`;
  },

  async insights() {
    const [prog, att, skips, surveys, ppl] = await Promise.all([q(sb.from("progress").select("user_id,path,work_id,done_at")), q(sb.from("quiz_attempts").select("user_id,path,work_id,passed,created_at")), q(sb.from("stage_skips").select("path,stage")),
      q(sb.from("flags").select("user_id,note,created_at").eq("category", "survey").order("created_at", { ascending: false })), people()]);
    const top = await learnerOverview(prog, att, surveys, byId(ppl));
    const blocks = await Promise.all(PATHS.map(async m => {
      const p = await H.getPath(m.slug), pr = prog.filter(r => r.path === m.slug), at = att.filter(r => r.path === m.slug);
      const started = new Set([...pr, ...at].map(r => r.user_id)).size;
      if (!started) return `<section class="section"><h2>${H.esc(m.title)}</h2><p class="muted">Nobody has started this path yet.</p></section>`;
      const reached = p.stages.map(s => new Set(pr.filter(r => s.works.some(w => w.id === r.work_id)).map(r => r.user_id)).size);
      const fails = p.works.map(w => ({ w, n: at.filter(a => a.work_id === w.id && !a.passed).length, t: at.filter(a => a.work_id === w.id).length })).filter(x => x.n).sort((a, b) => b.n - a.n).slice(0, 5);
      const sk = skips.filter(s => s.path === m.slug);
      // placement test: where each taker landed (first stage whose placement section they never passed)
      const pl = at.filter(a => a.work_id.startsWith("placement-s")), takers = [...new Set(pl.map(a => a.user_id))];
      const landed = takers.map(u => { let n = 1; while (pl.some(a => a.user_id === u && a.passed && a.work_id === `placement-s${n}`)) n++; return n; });
      const landCounts = [...new Set(landed)].sort((a, b) => a - b).map(n => `${n > p.stages.length ? "placed out of every stage" : `Stage ${n}`} (${landed.filter(x => x === n).length})`);
      return `<section class="section"><h2>${H.esc(m.title)}</h2><p class="muted">${started} ${started === 1 ? "person has" : "people have"} started.</p>
        <p class="label" style="margin:0">How far people get (ticked at least one work in the stage)</p>
        <div class="bars">${p.stages.map((s, i) => `<div class="hbar"><span>Stage ${s.num}</span><div class="track"><i style="width:${(reached[i] / started) * 100}%"></i></div><em>${reached[i]}</em></div>`).join("")}</div>
        ${fails.length ? `<p class="label" style="margin:0">Quizzes failed most often</p><ul>${fails.map(f => `<li>${H.esc(f.w.title)}: ${f.n} of ${f.t} attempts failed</li>`).join("")}</ul>` : ""}
        ${takers.length ? `<p class="muted">Placement test: ${takers.length} ${takers.length === 1 ? "person" : "people"} took it. Where they started: ${landCounts.join(", ")}.</p>` : ""}
        ${sk.length ? `<p class="muted">Stages continued past without passing: ${p.stages.map(s => [s, sk.filter(x => x.stage === s.num).length]).filter(([, n]) => n).map(([s, n]) => `Stage ${s.num} (${n})`).join(", ")}</p>` : ""}</section>`;
    }));
    return top + blocks.join("");
  },

  // the map editor: change log, the review queue for points of interest, and field actions
  async map() {
    const [t, p, rows] = await Promise.all([loadTax(), loadPoi(), q(sb.from("tax_changes").select("*").order("id", { ascending: false }).limit(200))]);
    const pend = rows.filter(r => r.status === "proposed"), queue = p.items.filter(i => i.rv && !i.ok);
    const f = mapEd.field && t.entities[mapEd.field], fname = id => H.esc(nameOf(t, id));
    const rowText = r => `<b>${H.esc(KIND_TEXT[r.kind] || r.kind)}</b> · ${H.esc(t.entities[r.target]?.n || p.byId[r.target]?.n || r.target)}${r.payload?.name ? ` → “${H.esc(r.payload.name)}”` : ""}${r.payload?.parent ? ` · ${fname(r.payload.parent)}` : ""}${r.payload?.into ? ` → ${fname(r.payload.into)}` : ""}${r.payload?.homes ? ` → ${r.payload.homes.map(fname).join(", ")}` : ""}${r.note ? ` <small>(${H.esc(r.note)})</small>` : ""}`;
    return `<p class="muted">Changes here are applied on top of the published map for every visitor as soon as they're approved. Everything is logged.</p>
    ${pend.length ? `<section class="section"><h2>Waiting for a decision (${pend.length})</h2><ul class="results">${pend.map(r => `<li class="row" style="justify-content:space-between;align-items:center">${rowText(r)}<span class="row"><button class="btn small" type="button" data-tx-decide="${r.id}" data-to="approved">Approve</button><button class="btn small ghost" type="button" data-tx-decide="${r.id}" data-to="rejected">Reject</button></span></li>`).join("")}</ul></section>` : ""}
    <section class="section"><h2>Edit a field</h2>
      <div class="row"><input type="search" id="tx-find" placeholder="Find a field, such as genetics" aria-label="Find a field" autocomplete="off" value="${H.esc(mapEd.q)}"></div>
      <ul class="results" id="tx-hits">${txHits(t)}</ul>
      ${f ? `<div class="stack" style="gap:10px"><h3>${H.esc(f.n)} <small class="muted">(${f.t}, ${f.s})</small></h3>
        <p class="muted">Homes: ${(t.ups[mapEd.field] || []).map(u => fname(u.p)).join(", ") || "none"}</p>
        <div class="field"><label for="tx-note">Reason (shown in the log)</label><input id="tx-note" placeholder="Why this change?"></div>
        <div class="row"><button class="btn small" type="button" data-tx="approve_field">Approve as reviewed</button></div>
        <div class="row"><input id="tx-name" placeholder="New name" aria-label="New name"><button class="btn small ghost" type="button" data-tx="rename">Rename</button></div>
        <div class="row"><input id="tx-parent" placeholder="Field id for a new home, e.g. statistics" aria-label="New home"><button class="btn small ghost" type="button" data-tx="add_link">Add home</button></div>
        <div class="row"><select id="tx-unlink" aria-label="Home to remove">${(t.ups[mapEd.field] || []).map(u => `<option value="${H.esc(u.p)}">${fname(u.p)}</option>`).join("")}</select><button class="btn small ghost" type="button" data-tx="remove_link">Remove home</button></div>
        <div class="row"><input id="tx-into" placeholder="Field id to merge into" aria-label="Merge into"><button class="btn small ghost" type="button" data-tx="merge">Merge</button><button class="btn small ghost" type="button" data-tx="deprecate">Deprecate</button></div>
        <div class="row"><input id="tx-child" placeholder="Name of a new branch" aria-label="New branch"><select id="tx-ctype" aria-label="Branch type"><option value="subdiscipline">Field</option><option value="specialisation">Specialisation</option><option value="topic">Topic</option><option value="method">Method</option></select><button class="btn small ghost" type="button" data-tx="add_field">Add branch</button></div>
      </div>` : ""}</section>
    <section class="section"><h2>Points of interest to review (${queue.length})</h2>
      <p class="muted">Placed only by their Wikipedia list section. Approve the homes, or replace them with field ids separated by commas.</p>
      <ul class="results">${queue.slice(0, 25).map(i => `<li><div class="stack" style="gap:6px"><a href="#/poi/${i.id}"><b>${H.esc(i.n)}</b></a><small>${H.esc(i.ty)} · now in ${i.h.map(fname).join(", ")}</small>
        <span class="row"><button class="btn small" type="button" data-tx-poi="${i.id}" data-act="approve_poi">Approve</button><input id="homes-${i.id}" placeholder="New homes, e.g. physics, history-of-science" aria-label="New homes for ${H.esc(i.n)}"><button class="btn small ghost" type="button" data-tx-poi="${i.id}" data-act="poi_homes">Move</button></span></div></li>`).join("")}</ul>
      ${queue.length > 25 ? `<p class="muted">Showing 25 of ${queue.length}. Approved or moved items leave the queue.</p>` : ""}</section>
    <section class="section"><h2>Change log</h2>${rows.length ? `<ul class="results">${rows.slice(0, 60).map(r => `<li>${rowText(r)} <small class="muted">· ${r.status} · ${day(r.created_at)}</small></li>`).join("")}</ul>` : `<p class="muted">No changes yet.</p>`}</section>`;
  },

  // essays waiting for marking (reviewers see the same list on their portal)
  async essays() { return essaysPanel(); },

  async log() {
    const [rows, ppl] = await Promise.all([q(sb.from("audit_log").select("*").order("created_at", { ascending: false }).limit(100)), people()]);
    const P = byId(ppl);
    if (!rows.length) return `<p class="soon">Nothing logged yet. Role changes, decisions on reports and applications, and path status changes appear here.</p>`;
    return `<div class="list">${rows.map(r => `<div class="item"><b>${H.esc(r.action.replace(/_/g, " "))}</b> · ${H.esc(r.target || "")} ${r.detail && Object.keys(r.detail).length ? `<small class="muted">${H.esc(JSON.stringify(r.detail))}</small>` : ""}<br><small class="muted">${who(P[r.actor_id])} · ${new Date(r.created_at).toLocaleString()}</small></div>`).join("")}</div>`;
  },
};

// --- reviewer portal -----------------------------------------------------------------------
export async function reviewView(slug) {
  if (!auth.user) return signinFirst("Review");
  if (!isReviewer()) return `<div class="stack"><h1>Review</h1><p class="notice">Reviewing is by invitation. If applications are open, you can apply from your <a href="#/account">account page</a>.</p></div>`;
  try {
    const asg = await q(sb.from("review_assignments").select("path").eq("reviewer_id", auth.user.id));
    const mine = isStaff() ? PATHS.map(m => m.slug) : asg.map(a => a.path);
    const nameNote = auth.profile?.display_name ? "" : `<p class="notice">Add your name and affiliation on your <a href="#/account">account page</a>. Learners see them on the paths you endorse.</p>`;
    if (!slug) {
      if (!mine.length) return `<div class="stack"><h1>Review</h1>${nameNote}<p class="soon">No paths are assigned to you yet. The editors will let you know when one is ready.</p></div>`;
      const cards = await Promise.all(mine.map(async s => { const m = PATHS.find(x => x.slug === s); if (!m) return ""; const p = await H.getPath(s);
        return `<a class="card" href="#/review/${s}" style="${H.C(m.color)}">${H.ico(m.icon)}<div style="display:grid;gap:6px"><h2>${H.esc(m.title)}</h2><small>Version ${p.fm.version || 1} · ${p.works.length} works</small></div></a>`; }));
      return `<div class="stack"><h1>Review</h1><p class="muted">Each review takes about 10 minutes a stage. You check a ready draft; you never write a path from scratch.</p>${nameNote}<div class="grid">${cards.join("")}</div>${await essaysPanel().catch(() => "")}</div>`;
    }
    if (!mine.includes(slug)) return `<div class="stack"><h1>Review</h1><p class="notice">This path isn't assigned to you.</p></div>`;
    const p = await H.getPath(slug), m = PATHS.find(x => x.slug === slug), v = +(p.fm.version || 1);
    const myNotes = await q(sb.from("endorsements").select("*").eq("path", slug).eq("reviewer_id", auth.user.id).order("created_at", { ascending: false }));
    const all = isStaff() ? await q(sb.from("endorsements").select("*").eq("path", slug).order("created_at", { ascending: false })) : myNotes;
    const ppl = isStaff() ? byId(await people()) : {};
    const pathEnd = myNotes.find(e => !e.work_id && e.decision === "endorse");
    const DEC = { endorse: ["ok", "Endorsed"], suggest: ["", "Suggestion"], flag: ["warn", "Flagged"] };
    return `<div class="stack review">
      <div class="crumbs"><a href="#/review">Review</a>›<span>${H.esc(m.title)}</span></div>
      <div class="hero" style="${H.C(m.color)}"><small style="font-weight:700">Version ${v} · ${p.works.length} works</small><h1>${H.esc(m.title)}</h1>
        <p>Read each work's layers in the lesson, then record your view below. Facts marked for checking are listed so you can confirm or correct them.</p></div>
      ${nameNote}
      ${pathEnd && pathEnd.version !== v ? `<div class="status warn"><b>The path changed since you endorsed it.</b> You endorsed version ${pathEnd.version}; it is now version ${v}. Please look over the changes and endorse again.</div>` : ""}
      ${p.stages.map(s => `<section class="section"><h2>Stage ${s.num}: ${H.esc(s.name)}</h2>${s.works.map(w => {
        const notes = all.filter(e => e.work_id === w.id), vc = verifyCount(w);
        return `<div class="item"><div class="row" style="justify-content:space-between"><a href="#/path/${slug}/work/${w.id}" style="font-weight:700">${H.esc(w.title)}</a>${vc ? `<span class="chip warn">${vc} fact${vc > 1 ? "s" : ""} to check</span>` : ""}</div>
          ${notes.map(e => `<small class="note"><span class="chip ${DEC[e.decision][0]}">${DEC[e.decision][1]}</span> ${isStaff() ? who(ppl[e.reviewer_id]) + " · " : ""}v${e.version}${e.comment ? `: ${H.esc(e.comment)}` : ""}</small>`).join("")}
          <textarea id="c-${w.id}" rows="2" placeholder="Comment (optional for endorse, needed for suggest or flag)" aria-label="Comment on ${H.esc(w.title)}"></textarea>
          <div class="row"><button class="btn small" type="button" data-rv="${w.id}" data-decision="endorse">Endorse</button><button class="btn small ghost" type="button" data-rv="${w.id}" data-decision="suggest">Suggest a change</button><button class="btn small ghost" type="button" data-rv="${w.id}" data-decision="flag">Flag a problem</button></div></div>`; }).join("")}</section>`).join("")}
      <section class="section goals"><h2>Endorse the whole path</h2>
        <p>Your endorsement covers version ${v}. If the path is edited, you'll be asked to re-confirm only what changed.${pathEnd && pathEnd.version === v ? ` <b>You endorsed this version on ${day(pathEnd.created_at)}.</b>` : ""}</p>
        <label class="row" style="align-items:center"><input type="checkbox" id="coi"> I have no conflict of interest: none of these works are mine or my publisher's.</label>
        <textarea id="c-path" rows="2" placeholder="A short public comment (optional)" aria-label="Comment on the whole path"></textarea>
        <button class="btn" type="button" data-rv="" data-decision="endorse" data-whole="1">Endorse version ${v}</button></section>
    </div>`;
  } catch (e) { return `<div class="stack"><h1>Review</h1>${needSql(e)}</div>`; }
}

// --- report a problem (learners) ----------------------------------------------------------
const CATEGORIES = ["Factual error", "Wrong order", "Too hard at this point", "Broken or unavailable link", "Other"];
const FEEDBACK = ["Something I liked", "Something confusing", "Something broken", "An idea"];
// slug "app" turns the sheet into general feedback about Ascent itself
export function openReport(slug, workId) {
  const fb = slug === "app", title = fb ? "Send feedback" : "Report a problem";
  const body = auth.user
    ? `<form id="reportform" class="stack" style="gap:12px" novalidate data-path="${slug}" data-work="${workId || ""}">
        <div class="field"><label for="cat">${fb ? "What's it about?" : "What kind of problem?"}</label><select id="cat">${(fb ? FEEDBACK : CATEGORIES).map(c => `<option>${c}</option>`).join("")}</select></div>
        <div class="field"><label for="note">${fb ? "Tell us more" : "What should we know?"}</label><textarea id="note" rows="4" placeholder="${fb ? "For example: I loved the story cards, but the quiz button was hard to find." : "For example: the date in the second fact looks wrong."}"></textarea></div>
        <p class="err" id="rerr" hidden></p>
        <button class="btn" type="submit">Send to the editors</button><button class="btn ghost" type="button" data-close>Cancel</button></form>`
    : `<p>Sign in so the editors can follow up with you.</p><a class="btn" href="#/signin" data-close>Sign in</a><button class="btn ghost" type="button" data-close>Cancel</button>`;
  document.querySelector("#layer").innerHTML = `<div class="scrim" data-close></div><div class="sheet enter" role="dialog" aria-modal="true" aria-label="${title}"><div class="grab"></div><h2>${title}</h2>${body}</div>`;
}

// --- events for all of the above ------------------------------------------------------------
async function act(fn, ok) {
  try { const r = await fn(); if (r?.error) throw r.error; if (ok) H.toast(ok); }
  catch (e) { H.toast(`Couldn't save: ${e.message}`); }
  H.refresh();
}
document.addEventListener("change", e => {
  const t = e.target, d = t.dataset;
  if (d.pathstatus) act(async () => { await q(sb.from("path_status").upsert({ path: d.pathstatus, status: t.value, updated_at: new Date().toISOString() })); return log("path_status", d.pathstatus, { status: t.value }); }, `Status set to ${STATUS_TEXT[t.value]}`);
  if (d.assign && t.value) act(async () => { await q(sb.from("review_assignments").insert({ reviewer_id: t.value, path: d.assign })); return log("assign_reviewer", d.assign, { reviewer: t.value }); }, "Reviewer assigned");
  if (d.role) act(() => sb.rpc("set_role", { target: d.role, new_role: t.value }), `Role changed to ${t.value}`);
});
document.addEventListener("input", e => {
  if (e.target.id !== "peoplesearch") return;
  const s = e.target.value.trim().toLowerCase();
  document.querySelectorAll("tr[data-find]").forEach(r => (r.hidden = s && !r.dataset.find.includes(s)));
});
document.addEventListener("click", e => {
  const t = e.target.closest("button"); if (!t) return;
  const d = t.dataset;
  if (d.unassign) { const [path, id] = d.unassign.split("|"); act(async () => { await q(sb.from("review_assignments").delete().match({ path, reviewer_id: id })); return log("unassign_reviewer", path, { reviewer: id }); }, "Reviewer removed"); }
  if (d.flag) { const resolution = document.getElementById(`res-${d.flag}`)?.value.trim() || null;
    act(async () => { await q(sb.from("flags").update({ status: d.to, resolution }).eq("id", d.flag)); return log("report_" + d.to, `report ${d.flag}`, resolution ? { resolution } : {}); }, `Report marked ${d.to}`); }
  if (d.setmode) act(async () => { await q(sb.from("settings").upsert({ key: "reviewer_applications", value: d.setmode })); return log("applications_mode", d.setmode); }, d.setmode === "open" ? "Applications are open" : "Back to invite only");
  if (d.decide) act(async () => {
    if (d.decide === "approved") await q(sb.rpc("set_role", { target: d.user, new_role: "reviewer" }));
    await q(sb.from("applications").update({ status: d.decide }).eq("id", d.app));
    return log("application_" + d.decide, d.user);
  }, d.decide === "approved" ? "Approved: they're now a reviewer" : "Application declined");
  if ("rv" in d && d.decision) {
    const slug = location.hash.split("/")[2], whole = d.whole === "1", work = d.rv || null;
    const comment = document.getElementById(whole ? "c-path" : `c-${work}`)?.value.trim() || null;
    if (d.decision !== "endorse" && !comment) { H.toast("Add a comment so the editors know what to change"); return; }
    if (whole && !document.getElementById("coi")?.checked) { H.toast("Tick the conflict-of-interest box first"); return; }
    act(async () => { const p = await H.getPath(slug);
      return sb.from("endorsements").insert({ reviewer_id: auth.user.id, path: slug, version: +(p.fm.version || 1), decision: d.decision, comment, work_id: work, no_conflict: whole }); },
      whole ? "Thank you: the path is endorsed" : { endorse: "Endorsed", suggest: "Suggestion sent", flag: "Problem flagged" }[d.decision]);
  }
});
document.addEventListener("submit", async e => {
  if (e.target.id !== "reportform") return;
  e.preventDefault();
  const f = e.target, note = f.querySelector("#note").value.trim(), err = f.querySelector("#rerr");
  if (!note) { err.textContent = "Tell us a little about the problem first."; err.hidden = false; return; }
  const { error } = await sb.from("flags").insert({ user_id: auth.user.id, path: f.dataset.path, work_id: f.dataset.work || null, category: f.querySelector("#cat").value, note });
  if (error) { err.textContent = `Couldn't send: ${error.message}`; err.hidden = false; return; }
  document.querySelector("#layer").innerHTML = "";
  H.toast("Sent to the editors. Thank you.");
});

// map editor and essay marking: clicks and typing
document.addEventListener("input", async e => {
  if (e.target.id !== "tx-find") return;
  mapEd.q = e.target.value; const t = await loadTax(); const ul = document.querySelector("#tx-hits"); if (ul) ul.innerHTML = txHits(t);
});
document.addEventListener("click", async e => {
  const b = e.target.closest("[data-tx], [data-tx-pick], [data-tx-poi], [data-tx-decide], [data-mark]"); if (!b) return;
  const v = id => document.querySelector(id)?.value.trim() || "", d = b.dataset, t = await loadTax();
  if (d.txPick) { mapEd.field = d.txPick; H.refresh(); return; }
  if (d.txDecide) {
    const { error } = await sb.from("tax_changes").update({ status: d.to, decided_by: auth.user.id, decided_at: new Date().toISOString() }).eq("id", +d.txDecide);
    if (error) return H.toast(`Couldn't save: ${error.message}`);
    resetTax(); H.toast(d.to === "approved" ? "Approved and applied" : "Rejected"); H.refresh(); return;
  }
  if (d.txPoi) {
    if (d.act === "approve_poi") return txSave("approve_poi", d.txPoi, {}, "");
    const homes = v(`#homes-${d.txPoi}`).split(",").map(s => s.trim()).filter(Boolean);
    const bad = homes.filter(h => !t.entities[h]);
    if (!homes.length || bad.length) return H.toast(bad.length ? `Unknown field ids: ${bad.join(", ")}` : "Type at least one field id");
    return txSave("poi_homes", d.txPoi, { homes }, "");
  }
  if (d.tx) {
    const id = mapEd.field, note = v("#tx-note"), known = x => t.entities[x] || t.dom[x];
    if (d.tx === "approve_field") return txSave("approve_field", id, {}, note);
    if (d.tx === "rename") return v("#tx-name") ? txSave("rename", id, { name: v("#tx-name") }, note) : H.toast("Type the new name");
    if (d.tx === "add_link") return known(v("#tx-parent")) ? txSave("add_link", id, { parent: v("#tx-parent") }, note) : H.toast("That field id isn't on the map");
    if (d.tx === "remove_link") return (t.ups[id] || []).length > 1 ? txSave("remove_link", id, { parent: v("#tx-unlink") }, note) : H.toast("A field needs at least one home");
    if (d.tx === "merge") return t.entities[v("#tx-into")] && v("#tx-into") !== id ? txSave("merge", id, { into: v("#tx-into") }, note) : H.toast("Type the id of the field to merge into");
    if (d.tx === "deprecate") return note ? txSave("deprecate", id, {}, note) : H.toast("Give a reason for deprecating it");
    if (d.tx === "add_field") {
      const name = v("#tx-child"), nid = name.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      if (!name) return H.toast("Type the branch's name");
      if (t.entities[nid]) return H.toast(`${name} is already on the map`);
      return txSave("add_field", nid, { name, parent: id, type: v("#tx-ctype") }, note);
    }
  }
  if (d.mark) return markEssay(+d.mark, d.to);
});
