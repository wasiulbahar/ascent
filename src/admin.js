// Admin dashboard, reviewer portal and "Report a problem". The database's row-level security decides
// what each person can read or change; these screens only show what it allows.
import { sb, auth, isStaff, isReviewer } from "./auth.js?v=7";
import { PATHS } from "./paths.js?v=7";

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
const TABS = [["overview", "Overview"], ["paths", "Paths"], ["reports", "Reports"], ["people", "People"], ["applications", "Applications"], ["insights", "Insights"], ["log", "Log"]];
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

const ADMIN = {
  // ponytail: counts are computed in the browser from whole tables; move them into SQL views once there are thousands of rows
  async overview() {
    const since = new Date(Date.now() - 7 * 864e5).toISOString();
    const [ppl, prog, att, flags] = await Promise.all([people(), q(sb.from("progress").select("user_id,done_at")), q(sb.from("quiz_attempts").select("user_id,created_at,passed")), q(sb.from("flags").select("status"))]);
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
    const [flags, ppl] = await Promise.all([q(sb.from("flags").select("*").order("created_at", { ascending: false })), people()]);
    const P = byId(ppl);
    if (!flags.length) return `<p class="soon">No reports yet. Learners report problems with the "Report a problem" button on every lesson.</p>`;
    const titles = Object.fromEntries((await Promise.all(PATHS.map(async m => (await H.getPath(m.slug)).works.map(w => [`${m.slug}:${w.id}`, w.title])))).flat());
    return `<div class="list">${flags.map(f => `<div class="item ${f.status}">
      <div class="row" style="justify-content:space-between"><b>${H.esc(f.category)} · ${H.esc(PATHS.find(m => m.slug === f.path)?.title || f.path)}${f.work_id ? ` › ${H.esc(titles[`${f.path}:${f.work_id}`] || f.work_id)}` : ""}</b><span class="chip ${f.status === "open" ? "warn" : f.status === "resolved" ? "ok" : ""}">${H.esc(f.status)}</span></div>
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
    const [prog, att, skips] = await Promise.all([q(sb.from("progress").select("user_id,path,work_id")), q(sb.from("quiz_attempts").select("user_id,path,work_id,passed")), q(sb.from("stage_skips").select("path,stage"))]);
    const blocks = await Promise.all(PATHS.map(async m => {
      const p = await H.getPath(m.slug), pr = prog.filter(r => r.path === m.slug), at = att.filter(r => r.path === m.slug);
      const started = new Set([...pr, ...at].map(r => r.user_id)).size;
      if (!started) return `<section class="section"><h2>${H.esc(m.title)}</h2><p class="muted">Nobody has started this path yet.</p></section>`;
      const reached = p.stages.map(s => new Set(pr.filter(r => s.works.some(w => w.id === r.work_id)).map(r => r.user_id)).size);
      const fails = p.works.map(w => ({ w, n: at.filter(a => a.work_id === w.id && !a.passed).length, t: at.filter(a => a.work_id === w.id).length })).filter(x => x.n).sort((a, b) => b.n - a.n).slice(0, 5);
      const sk = skips.filter(s => s.path === m.slug);
      return `<section class="section"><h2>${H.esc(m.title)}</h2><p class="muted">${started} ${started === 1 ? "person has" : "people have"} started.</p>
        <p class="label" style="margin:0">How far people get (ticked at least one work in the stage)</p>
        <div class="bars">${p.stages.map((s, i) => `<div class="hbar"><span>Stage ${s.num}</span><div class="track"><i style="width:${(reached[i] / started) * 100}%"></i></div><em>${reached[i]}</em></div>`).join("")}</div>
        ${fails.length ? `<p class="label" style="margin:0">Quizzes failed most often</p><ul>${fails.map(f => `<li>${H.esc(f.w.title)}: ${f.n} of ${f.t} attempts failed</li>`).join("")}</ul>` : ""}
        ${sk.length ? `<p class="muted">Stages continued past without passing: ${p.stages.map(s => [s, sk.filter(x => x.stage === s.num).length]).filter(([, n]) => n).map(([s, n]) => `Stage ${s.num} (${n})`).join(", ")}</p>` : ""}</section>`;
    }));
    return blocks.join("");
  },

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
      return `<div class="stack"><h1>Review</h1><p class="muted">Each review takes about 10 minutes a stage. You check a ready draft; you never write a path from scratch.</p>${nameNote}<div class="grid">${cards.join("")}</div></div>`;
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
export function openReport(slug, workId) {
  const body = auth.user
    ? `<form id="reportform" class="stack" style="gap:12px" novalidate data-path="${slug}" data-work="${workId || ""}">
        <div class="field"><label for="cat">What kind of problem?</label><select id="cat">${CATEGORIES.map(c => `<option>${c}</option>`).join("")}</select></div>
        <div class="field"><label for="note">What should we know?</label><textarea id="note" rows="4" placeholder="For example: the date in the second fact looks wrong."></textarea></div>
        <p class="err" id="rerr" hidden></p>
        <button class="btn" type="submit">Send to the editors</button><button class="btn ghost" type="button" data-close>Cancel</button></form>`
    : `<p>Sign in so the editors can follow up with you.</p><a class="btn" href="#/signin" data-close>Sign in</a><button class="btn ghost" type="button" data-close>Cancel</button>`;
  document.querySelector("#layer").innerHTML = `<div class="scrim" data-close></div><div class="sheet enter" role="dialog" aria-modal="true" aria-label="Report a problem"><div class="grab"></div><h2>Report a problem</h2>${body}</div>`;
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
