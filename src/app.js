// Ascent app: hash router and screens. Content comes from paths/*.md (parsed by content.js).
import { parsePath, norm } from "./content.js?v=11";
import { PATHS, AREAS } from "./paths.js?v=11";
import { sb, auth, initAuth, sendLink, signOut, loadProfile, isStaff, isReviewer } from "./auth.js?v=11";
import { useHelpers, adminView, reviewView, openReport } from "./admin.js?v=11";
import { loadProgress, isDone, setDone, best, isSkipped, recordAttempt, skipStage } from "./progress.js?v=11";
import { pathStatuses, PASS_MARK } from "./status.js?v=11";

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const C = c => `background:var(--${c});color:var(--${c}-ink)`;
const STAGE_COLORS = ["mint", "lilac", "peach", "sky", "butter", "rose"];
const ACCESS = { free: ["free", "Free"], "free-and-paid": ["mixed", "Free + paid"], paid: ["paid", "Paid"] };
const VERB = { read: "Read", listen: "Listen", watch: "Watch", course: "Course" };
const GET_TITLE = { read: "Read it", listen: "Listen to it", watch: "Watch it", course: "Take the course" };
const DONE_VERB = { read: "Read", listen: "Listened", watch: "Watched", course: "Done" };

const IC = {
  home: '<path d="M3 11l9-8 9 8v10H3z"/>', user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  read: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/>',
  listen: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/>',
  watch: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M10 9l4 2-4 2z"/>',
  course: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
  chev: '<path d="M9 6l6 6-6 6"/>', logo: '<path d="M3 20l6-8 4 4 8-11"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  check: '<path d="M5 12l5 5L20 7"/>', play: '<path d="M7 4v16l13-8z"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
  tree: '<circle cx="12" cy="4.5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7v9.5M12 12H5v4.5M12 12h7v4.5"/>',
  link: '<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>',
  branch: '<path d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
  atom: '<circle cx="12" cy="12" r="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>', bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>', eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>', quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
};
const ico = (k, cls = "i") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${IC[k] || IC.read}</svg>`;

function toast(m) { const t = $("#toast"); t.textContent = m; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => (t.hidden = true), 2600); }

// --- content -----------------------------------------------------------------
const cache = new Map();
async function getPath(slug) {
  if (!cache.has(slug)) {
    cache.set(slug, fetch(`paths/${slug}.md?v=11`).then(r => { if (!r.ok) throw new Error("This path could not be loaded."); return r.text(); }).then(parsePath));
  }
  return cache.get(slug);
}

// Facts marked [verify] never reach learners: a list item carrying one is left out, other markers are removed.
const scrub = s => s.split("\n").filter(l => !(/^\s*-\s/.test(l) && /\[verify/.test(l))).join("\n").replace(/\s*\[verify(?::[^\]]*)?\]/g, "");
function md(s, { linkPaths = false, here = "" } = {}) {
  const box = document.createElement("div"); box.innerHTML = marked.parse(scrub(s || ""));
  box.querySelectorAll("p").forEach(p => { const n = p.nextElementSibling; if (p.textContent.trim() === "Trivia" && n?.tagName === "UL") { p.textContent = "Did you know?"; p.className = "trivia-h"; n.className = "trivia"; } });
  box.querySelectorAll("h3").forEach(h => { const n = h.nextElementSibling; if (/life in dates|timeline/i.test(h.textContent) && n?.tagName === "UL") n.className = "timeline"; });
  box.querySelectorAll("img").forEach(im => { im.loading = "lazy"; im.decoding = "async"; });
  box.querySelectorAll("table").forEach(t => { const w = document.createElement("div"); w.className = "tablewrap"; t.replaceWith(w); w.append(t); });
  if (linkPaths) box.querySelectorAll("li, td").forEach(el => el.innerHTML = linkPathNames(el.innerHTML, here));
  return box.innerHTML;
}
const inline = s => marked.parseInline(scrub(s || ""));
// Any subject that has its own path becomes a link to it.
function linkPathNames(html, here) {
  for (const p of PATHS) {
    if (p.slug === here) continue;
    const re = new RegExp(`\\b${p.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (re.test(html.replace(/<[^>]*>/g, "")) && !html.includes(`#/path/${p.slug}"`)) html = html.replace(re, m => `<a class="pathlink" href="#/path/${p.slug}">${m}</a>`);
  }
  return html;
}
const accessBadge = a => ACCESS[a.key] ? `<span class="acc ${ACCESS[a.key][0]}">${ACCESS[a.key][1]}</span>` : "";
const stageColor = s => STAGE_COLORS[s.index % STAGE_COLORS.length];
const doneCount = (slug, works) => works.filter(w => isDone(slug, w.id)).length;
const nextWork = (slug, p) => p.works.find(w => !isDone(slug, w.id));
const bar = (n, total) => `<div class="bar"><i style="width:${total ? (n / total) * 100 : 0}%"></i></div>`;
const statuses = (slug, p) => pathStatuses(p, { isDone: id => isDone(slug, id), best: id => best(slug, id), isSkipped: n => isSkipped(slug, n) });
const CHIP = { passed: ["ok", "Passed"], notfinished: ["warn", "Not finished"], failed: ["warn", "Not finished yet"], locked: ["lock", "Locked"], open: ["", ""] };
const chip = st => CHIP[st.state][1] ? `<span class="chip ${CHIP[st.state][0]}">${CHIP[st.state][1]}</span>` : "";
const pct = x => `${Math.round(x * 100)}%`;

// --- screens -----------------------------------------------------------------
async function homeView() {
  const paths = await Promise.all(PATHS.map(async m => ({ ...m, data: await getPath(m.slug).catch(() => null) })));
  const started = paths.filter(p => p.data && doneCount(p.slug, p.data.works) > 0 && nextWork(p.slug, p.data));
  const cont = started[0];
  const nx = cont && nextWork(cont.slug, cont.data);
  return `<div class="stack">
    <div><p class="muted" style="font-weight:700">${auth.user ? "Welcome back" : "Welcome"}</p><h1>${cont ? "Ready for your next work?" : "What do you want to understand?"}</h1></div>
    ${cont ? `<a class="hero continue" href="#/path/${cont.slug}/work/${nx.id}" style="${C(stageColor(nx.stage))}">
      <small style="font-weight:700">${esc(cont.title)} · Stage ${nx.stage.num}: ${esc(nx.stage.name)}</small><h2>${esc(nx.title)}</h2>
      <span>${esc([VERB[nx.type], nx.creator, nx.length].filter(Boolean).join(" · "))}</span><span class="btn" style="justify-self:start">${ico("play")}Continue</span></a>` : ""}
    ${!auth.user && sb ? `<div class="hero" style="${C("lilac")}"><h2>Save your progress</h2><p>Sign in with your email to keep your place on every device. No password needed.</p><a class="btn" href="#/signin" style="justify-self:start">${ico("mail")}Sign in with email</a></div>` : ""}
    <section><p class="label">Choose an area</p>
      <div class="grid">${AREAS.map(a => { const k = a.disciplines.reduce((n, d) => n + d.paths.length, 0);
        return `<a class="card" href="#/area/${a.slug}" style="${C(a.color)}">${ico(a.icon)}
        <div style="display:grid;gap:6px"><h2>${esc(a.title)}</h2><small>${esc(a.blurb)}</small><small>${k ? `${k} path${k > 1 ? "s" : ""} ready` : "Coming soon"}</small></div></a>`; }).join("")}</div>
    </section>
    ${footer()}
  </div>`;
}
const footer = () => `<footer class="foot"><a href="#/privacy">Privacy</a><button class="linkbtn" type="button" data-feedback>Send feedback</button><button class="linkbtn" type="button" data-welcome>How Ascent works</button></footer>`;

function privacyView() {
  return `<div class="stack prose"><div class="crumbs"><a href="#/">Home</a>›<span>Privacy</span></div><h1>Your privacy</h1>
    <p>Ascent keeps only what it needs to remember your progress. It doesn't show adverts, and nothing about you is sold or shared with anyone.</p>
    <h2>What's stored</h2><ul>
      <li><b>Your email address</b>, so you can sign in with a link. There are no passwords.</li>
      <li><b>Your progress:</b> the works you tick off, your quiz scores, and stages you continue past.</li>
      <li><b>What you choose to send:</b> problem reports, feedback and, if you review paths, your name, affiliation and comments.</li></ul>
    <h2>Who can see it</h2><ul>
      <li>You can see everything about yourself.</li>
      <li>Ascent's editors can see progress and quiz results, to improve the paths (for example, where people get stuck).</li>
      <li>If you endorse a path as a reviewer, learners see your name and affiliation. They never see your email.</li></ul>
    <h2>Where it's kept</h2><p>Accounts and progress are stored with Supabase, a database service. Texts and images load from this site; fonts load from Google Fonts. If you're not signed in, your progress stays only in this browser.</p>
    <h2>Deleting your account</h2><p>You can delete your account at any time from your <a href="#/account">account page</a>. That permanently removes your email, progress, scores, reports and reviews. Editors' records of decisions stay, without your name attached.</p>
    <h2>Questions</h2><p>Use <button class="linkbtn" type="button" data-feedback>Send feedback</button> and we'll reply.</p>
  </div>`;
}

// --- welcome cards, shown once on a first visit ---------------------------------------
const WELCOME = [
  ["Welcome to Ascent", "Pick a subject, and Ascent guides you from works anyone can enjoy all the way to the level of a university seminar."],
  ["One step at a time", "Every work is a short lesson: a story to start, the work itself, a guide to understand it, and a quick quiz."],
  ["Go as deep as you like", "Pass a stage's quizzes to open the next one. Experts check each path before it's marked as endorsed."],
];
const welcome = { n: 0 };
function openWelcome() {
  welcome.n = 0;
  $("#layer").innerHTML = `<div class="scrim" data-close data-welcomedone></div><div class="full enter" style="${C("lilac")}" role="dialog" aria-modal="true" aria-label="Welcome to Ascent">
    <div class="segs">${WELCOME.map((_, k) => `<i class="${k === 0 ? "on" : ""}"></i>`).join("")}</div>
    <div class="fullhead"><small style="font-weight:700">Ascent</small><button class="close" type="button" data-close data-welcomedone aria-label="Close">${ico("x")}</button></div>
    <div class="cardslot">${welcomeCard()}</div></div>`;
}
function welcomeCard() {
  const [h, p] = WELCOME[welcome.n], last = welcome.n === WELCOME.length - 1;
  return `<div class="story"><span class="medal small">${ico(["logo", "play", "trophy"][welcome.n])}</span><h2>${h}</h2><div class="storytxt"><p>${p}</p></div></div>
    <div class="row" style="flex-direction:column">${last ? `<button class="btn" type="button" data-close data-welcomedone>Let's start</button>${!auth.user && sb ? `<a class="btn ghost" href="#/signin" data-close data-welcomedone>Sign in to save progress</a>` : ""}`
      : `<button class="btn" type="button" data-wnext>Next</button>`}</div>`;
}

async function areaView(slug) {
  const a = AREAS.find(x => x.slug === slug); if (!a) return notFound();
  const metas = Object.fromEntries(await Promise.all(a.disciplines.flatMap(d => d.paths).map(async s => [s, { meta: PATHS.find(p => p.slug === s), p: await getPath(s).catch(() => null) }])));
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<span>${esc(a.title)}</span></div>
    <div class="hero" style="${C(a.color)}">${ico(a.icon)}<h1>${esc(a.title)}</h1><p>${esc(a.blurb)}</p></div>
    ${a.disciplines.map(d => `<section><p class="label">${esc(d.title)}</p>
      ${d.paths.length ? `<div class="grid">${d.paths.map(s => { const { meta, p } = metas[s]; const n = p ? doneCount(s, p.works) : 0, t = p?.works.length || 0;
        return `<a class="card" href="#/path/${s}" style="${C(meta.color)}">${ico(meta.icon)}<div style="display:grid;gap:6px"><h2>${esc(meta.title)}</h2>${p ? `${bar(n, t)}<small>${p.stages.length} stages · ${n} of ${t} works done</small>` : "<small>Not available</small>"}</div></a>`; }).join("")}</div>`
      : `<p class="soon">Paths in ${esc(d.title.toLowerCase())} are being written.</p>`}</section>`).join("")}
  </div>`;
}

async function pathView(slug) {
  const meta = PATHS.find(p => p.slug === slug); if (!meta) return notFound();
  const p = await getPath(slug);
  const sections = p.blocks.filter(b => b.type === "section" && b.kind !== "internal");
  const about = sections.find(s => s.kind === "about"), goals = sections.find(s => s.kind === "goals");
  const rest = sections.filter(s => s !== about && s !== goals);
  const n = doneCount(slug, p.works), nx = nextWork(slug, p), sts = statuses(slug, p);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›${(a => a ? `<a href="#/area/${a.slug}">${esc(a.title)}</a>›` : "")(AREAS.find(a => a.disciplines.some(d => d.paths.includes(slug))))}<span>${esc(p.title)}</span></div>
    <div style="display:grid;gap:12px"><h1>${esc(p.title)}</h1><p class="lede">${inline(p.lede)}</p>
      <div class="pills"><span class="pill draft" id="trust">Draft · not yet endorsed</span><span class="pill">${n} of ${p.works.length} works done</span><span class="pill">${p.stages.length} stages</span></div>
      <div class="row"><a class="btn" href="#/path/${slug}/work/${(nx || p.works[0]).id}">${ico("play")}${n ? (nx ? `Continue: ${esc(nx.title)}` : "Review the path") : "Start the path"}</a><a class="btn ghost" href="#/path/${slug}/map">${ico("tree")}Open the map</a></div></div>
    ${about ? `<section class="section about"><h2>${esc(about.title)}</h2><div class="txt${/!\[/.test(about.body) ? " with-img" : ""}">${md(about.body)}</div></section>` : ""}
    <section><p class="label">Stages</p>
      <div class="stages">${p.stages.map(s => { const st = sts[s.index];
        return `<a class="card stage-card${st.state === "locked" ? " locked" : ""}" href="#/path/${slug}/stage/${s.num}" style="${C(stageColor(s))}">
        <span class="row" style="justify-content:space-between;align-items:center"><small>Stage ${s.num} · ${esc(s.level || "")}</small>${chip(st)}</span>
        <div style="display:grid;gap:6px"><h3>${esc(s.name)}</h3><small>${inline(s.intent || "")}</small><div class="dots">${s.works.map(w => `<i class="${isDone(slug, w.id) ? "on" : ""}"></i>`).join("")}</div></div></a>`; }).join("")}</div>
    </section>
    ${goals ? `<section class="section goals"><h2>${esc(goals.title)}</h2><div class="txt">${md(goals.body)}</div></section>` : ""}
    ${rest.map(s => `<section class="section"><h2>${esc(s.title)}</h2><div class="txt">${md(s.body, { linkPaths: s.kind === "branches", here: slug })}</div></section>`).join("")}
  </div>`;
}

async function stageView(slug, num) {
  const p = await getPath(slug); const s = p.stages[num - 1]; if (!s) return notFound();
  const color = stageColor(s), d = doneCount(slug, s.works), st = statuses(slug, p)[s.index];
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Stage ${s.num}</span></div>
    <div class="hero" style="${C(color)}"><span class="row" style="justify-content:space-between;align-items:center"><small style="font-weight:700">Stage ${s.num} · Level: ${esc(s.level || "")} · ${d} of ${s.works.length} done</small>${chip(st)}</span><h1>${esc(s.name)}</h1><p>${inline(s.intent || "")}</p>${bar(d, s.works.length)}</div>
    ${stageBox(slug, p, s, st)}
    ${s.intro ? `<div class="txt">${md(s.intro)}</div>` : ""}
    <section><p class="label">Works in this stage</p><div class="worklist">${s.works.map(w => `<a class="work${isDone(slug, w.id) ? " isdone" : ""}" href="#/path/${slug}/work/${w.id}">
      <span class="ic" style="${C(color)}">${ico(w.type)}</span><span><b>${esc(w.title)}${accessBadge(w.access)}</b><span>${esc([VERB[w.type], w.creator, w.length].filter(Boolean).join(" · "))}</span></span>
      ${isDone(slug, w.id) ? `<span class="tick" title="${DONE_VERB[w.type]}">${ico("check")}</span>` : ico("chev")}</a>`).join("")}</div></section>
    ${s.extras.map(x => `<section class="layer"><span class="tag" style="${C(color)}">${esc(x.title)}</span><div class="txt">${md(x.body)}</div></section>`).join("")}
    <a class="btn ghost" href="#/path/${slug}/map" style="justify-self:start">${ico("tree")}See it on the map</a>
  </div>`;
}

// What the learner needs to know about passing this stage, and the continue-anyway choice.
const confirming = new Set();
function stageBox(slug, p, s, st) {
  const quizLine = st.quizzes ? `Quizzes taken: ${st.taken} of ${st.quizzes} · score so far ${st.taken ? pct(st.pct) : "–"} · pass mark ${pct(PASS_MARK)}` : "This stage has no quizzes: tick every work to pass it.";
  const prev = p.stages[s.index - 1];
  if (st.state === "passed") return `<div class="status ok"><b>Stage passed${st.quizzes ? ` with ${pct(st.pct)}` : ""}.</b> ${p.stages[s.index + 1] ? `Stage ${s.num + 1} is open.` : "You've finished the path's stages."}</div>`;
  if (st.state === "locked") return `<div class="status lock"><b>Locked.</b> Finish Stage ${prev.num} first, or choose to continue anyway on its page. You can still look around.</div>`;
  if (st.state === "notfinished") return `<div class="status warn"><b>Not finished.</b> You continued past this stage without passing it. Come back and raise your quiz score to ${pct(PASS_MARK)} to complete it. ${quizLine}.</div>`;
  if (st.state === "failed") {
    const weak = s.works.filter(w => w.quiz.length && best(slug, w.id) && best(slug, w.id).score / best(slug, w.id).total < PASS_MARK);
    return `<div class="status warn"><b>You haven't finished this stage properly yet.</b> Your score across its quizzes is ${pct(st.pct)}; the pass mark is ${pct(PASS_MARK)}.
      ${weak.length ? `<span>Retry these: ${weak.map(w => `<a href="#/path/${slug}/work/${w.id}">${esc(w.title)}</a>`).join(", ")}.</span>` : ""}
      ${p.stages[s.index + 1] ? (confirming.has(`${slug}:${s.num}`)
        ? `<span><b>Are you sure?</b> Later stages build on this one. Stage ${s.num} will stay marked "Not finished", and the Mastery certificate stays locked until you pass it.</span>
           <span class="row"><button class="btn small" type="button" data-skip="${s.num}" data-confirm="1">Yes, continue anyway</button><button class="btn small ghost" type="button" data-skip="${s.num}" data-confirm="0">Stay and retry</button></span>`
        : `<span class="row"><button class="btn small ghost" type="button" data-skip="${s.num}">Continue anyway</button></span>`) : ""}</div>`;
  }
  return `<div class="status"><b>To pass this stage:</b> score ${pct(PASS_MARK)} or more across its quizzes. ${quizLine}</div>`;
}

// --- a work is a short lesson: a path of steps, each on its own screen ----------------
// Visited steps are a per-browser convenience; ticks and quiz scores are the real record.
const VISITED = "ascent-visited";
const visited = () => { try { return new Set(JSON.parse(localStorage.getItem(VISITED) || "[]")); } catch { return new Set(); } };
const markVisited = k => { try { const s = visited(); s.add(k); localStorage.setItem(VISITED, JSON.stringify([...s])); } catch { /* storage blocked */ } };
const layerOf = (w, name) => w.layers.find(l => l.name === name);

function lessonSteps(slug, w) {
  const v = visited(), k = s => `${slug}:${w.id}:${s}`, b = best(slug, w.id);
  const steps = [];
  if (layerOf(w, "Introduction")) steps.push({ id: "story", title: "The story", sub: "Who made it, and why it matters", icon: "play", done: v.has(k("story")) });
  steps.push({ id: "get", title: GET_TITLE[w.type] || "Get it", sub: w.length ? `${w.length} · where to find it` : "Where to find it", icon: w.type, done: isDone(slug, w.id) });
  if (layerOf(w, "Understand")) steps.push({ id: "understand", title: "Understand", sub: "Context and a guide", icon: "eye", done: v.has(k("understand")) });
  if (layerOf(w, "Analyse")) steps.push({ id: "analyse", title: "Analyse", sub: "Themes and debates", icon: "layers", done: v.has(k("analyse")) });
  if (w.quiz.length) steps.push({ id: "quiz", title: "Quiz", sub: `${w.quiz.length} questions${b ? ` · best ${b.score} of ${b.total}` : ""}`, icon: "quiz", done: !!b && b.score / b.total >= PASS_MARK });
  if (layerOf(w, "Scholar")) steps.push({ id: "scholar", title: "Go deeper", sub: "Optional: scholarship and an essay question", icon: "course", done: v.has(k("scholar")), optional: true });
  return steps;
}

async function workView(slug, id) {
  const p = await getPath(slug); const w = p.works.find(x => x.id === id); if (!w) return notFound();
  const s = w.stage, i = p.works.indexOf(w), next = p.works[i + 1];
  const steps = lessonSteps(slug, w), nextStep = steps.find(x => !x.done && !x.optional);
  const facts = [VERB[w.type], w.creator, w.year, w.length].filter(Boolean).join(" · ");
  const color = stageColor(s);
  return `<div class="stack lesson">
    <div class="crumbs"><a href="#/path/${slug}">${esc(p.title)}</a>›<a href="#/path/${slug}/stage/${s.num}">Stage ${s.num}</a></div>
    <div class="hero" style="${C(color)}"><span class="blob">${ico(w.type)}</span><small style="font-weight:700">${esc(facts)}</small><h1>${esc(w.title)}${accessBadge(w.access)}</h1></div>
    ${statuses(slug, p)[s.index].state === "locked" ? `<div class="status lock"><b>This work is in a locked stage.</b> You can explore it, but Stage ${s.num} opens properly once Stage ${s.num - 1} is passed.</div>` : ""}
    <ol class="steps" aria-label="Lesson steps">${steps.map((st, k) => {
      const href = st.id === "story" ? "" : `#/path/${slug}/work/${w.id}/${st.id}`, cur = st === nextStep;
      const inner = `<span class="node-c${st.done ? " done" : ""}${cur ? " cur" : ""}" style="${st.done || cur ? C(color) : ""}">${ico(st.done ? "check" : st.icon)}</span><span class="st-t"><b>${esc(st.title)}</b><small>${esc(st.sub)}</small>${cur ? `<span class="go-pill">${k === 0 ? "Start" : "Next"}</span>` : ""}</span>`;
      return `<li class="step s${k % 2}${st.optional ? " opt" : ""}">${st.id === "story" ? `<button type="button" data-story="${w.id}">${inner}</button>` : `<a href="${href}">${inner}</a>`}</li>`; }).join("")}</ol>
    ${next ? `<a class="nextwork" href="#/path/${slug}/work/${next.id}"><small>Next work</small><b>${esc(next.title)}</b>${ico("chev")}</a>` : ""}
    <button class="linkbtn" type="button" data-report="${w.id}">Report a problem with this work</button>
  </div>`;
}

async function stepView(slug, id, step) {
  const p = await getPath(slug); const w = p.works.find(x => x.id === id); if (!w) return notFound();
  const steps = lessonSteps(slug, w), k = steps.findIndex(x => x.id === step); if (k < 0) return notFound();
  if (["understand", "analyse", "scholar"].includes(step)) markVisited(`${slug}:${w.id}:${step}`);
  const after = steps.slice(k + 1).find(x => x.id !== "story");
  const back = `#/path/${slug}/work/${w.id}`, color = stageColor(w.stage);
  const head = `<div class="stephead"><a class="close" href="${back}" aria-label="Back to the lesson">${ico("x")}</a>
    <div class="stepbar">${steps.map((x, j) => `<i class="${j <= k ? "on" : ""}" style="${j <= k ? `background:var(--${color}-ink)` : ""}"></i>`).join("")}</div></div>`;
  const foot = (after ? `<a class="btn wide" href="#/path/${slug}/work/${w.id}/${after.id}">Continue: ${esc(after.title)}</a>` : `<a class="btn wide" href="${back}">Back to the lesson</a>`)
    + `<button class="linkbtn" type="button" data-report="${w.id}">Report a problem</button>`;
  if (step === "quiz") return `<div class="stack steppage">${head}<div class="quizrun" data-quizrun="${w.id}"></div></div>`;
  if (step === "get") {
    const done = isDone(slug, w.id);
    return `<div class="stack steppage">${head}<p class="kick" style="color:var(--${color}-ink)">${esc(steps[k].title)}</p><h1>${esc(w.title)}</h1>
      <div class="getcard">${[["Length", esc(w.length)], ["Edition", w.edition && inline(w.edition)], ["Where to get it", w.access.note && `${accessBadge(w.access)} ${inline(w.access.note)}`], ["Note", w.note && inline(w.note)]].filter(([, v]) => v).map(([t, v]) => `<div><small>${t}</small><p>${v}</p></div>`).join("")}</div>
      <p class="muted">Take your time with it. Come back and tick it off when you've finished.</p>
      <button class="btn wide ${done ? "ghost " : ""}donebtn" type="button" data-done="${w.id}" aria-pressed="${done}">${done ? ico("check") + DONE_VERB[w.type] : `I've finished it: mark as ${DONE_VERB[w.type].toLowerCase()}`}</button>
      ${foot}</div>`;
  }
  const name = { understand: "Understand", analyse: "Analyse", scholar: "Scholar" }[step];
  return `<div class="stack steppage">${head}<p class="kick" style="color:var(--${color}-ink)">${esc(steps[k].title)}</p><h1>${esc(w.title)}</h1>
    <div class="txt">${md(layerOf(w, name).body)}</div>${foot}</div>`;
}

// --- the map: depth gauge, stages, works, side branches and bridges ---------------
const mapOpen = new Map(); // slug -> Set of open stage numbers
function parseBranches(p) {
  const sec = p.blocks.find(b => b.type === "section" && /side branches/i.test(b.title));
  if (!sec) return [];
  return sec.body.split("\n").filter(l => /^\|/.test(l) && !/^\|\s*-/.test(l)).slice(1).map(l => {
    const [name, after, works] = l.split("|").slice(1).map(c => c.trim());
    return { name, after: +(after.match(/\d+/)?.[0] || 0), works };
  });
}
function parseBridges(p) {
  const sec = p.blocks.find(b => b.type === "section" && /bridges/i.test(b.title));
  if (!sec) return [];
  return sec.body.split("\n").map(l => l.match(/^- \*\*(.+?):\*\*\s*(.*)$/)).filter(Boolean).map(m => ({ name: m[1], text: m[2] }));
}
async function mapView(slug) {
  const p = await getPath(slug), meta = PATHS.find(x => x.slug === slug);
  const branches = parseBranches(p), bridges = parseBridges(p);
  const nx = nextWork(slug, p), here = nx ? nx.stage.index : p.stages.length - 1;
  if (!mapOpen.has(slug)) mapOpen.set(slug, new Set([here + 1]));
  const open = mapOpen.get(slug), n = doneCount(slug, p.works), sts = statuses(slug, p);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Map</span></div>
    <div><h1>Your map</h1><p class="muted">How deep you've gone, what's left, and the side roads you can take.</p></div>
    <div class="mapgrid">
      <aside class="stack" style="gap:14px">
        <div class="gauge"><p class="label" style="margin:0">How deep you are</p><h2>${esc(p.stages[here].level || "")}</h2>
          <div class="levels">${p.stages.map((s, i) => `<i class="${i < here ? "on" : i === here ? "here" : ""}"></i>`).join("")}</div>
          <div class="lvlnames">${p.stages.map(s => `<span>${esc(s.level || "")}</span>`).join("")}</div>
          <div class="mstats"><div style="${C("mint")}"><b>${n}</b><span>works done</span></div><div style="${C("lilac")}"><b>${p.works.length - n}</b><span>left on the path</span></div><div style="${C("peach")}"><b>${branches.length}</b><span>side branches</span></div></div>
        </div>
        <div class="legend"><span><i style="background:var(--mint-ink)"></i>Done</span><span><i style="background:var(--lilac-ink)"></i>You are here</span><span><i class="dash"></i>Side branch</span></div>
        <div class="row"><button class="btn small ghost" type="button" data-expand="all">Expand all</button><button class="btn small ghost" type="button" data-expand="none">Collapse all</button></div>
      </aside>
      <ul class="tree" aria-label="Path map"><li><span class="node root" style="${C(meta.color)}"><span class="ni">${ico(meta.icon)}</span><span><b>${esc(p.title)}</b><small>${p.stages.length} stages · ${p.works.length} works</small></span></span>
        <ul>${p.stages.map(s => { const ex = open.has(s.num), d = doneCount(slug, s.works), st = sts[s.index];
          const side = branches.filter(b => b.after === s.num);
          return `<li><button class="node${st.state === "locked" ? " lockd" : ""}" type="button" style="${C(stageColor(s))}" data-toggle="${s.num}" aria-expanded="${ex}">
            <span class="ni">${ico(st.state === "passed" ? "check" : st.state === "locked" ? "lock" : "spark")}</span><span><b>Stage ${s.num}: ${esc(s.name)}</b><small>${CHIP[st.state][1] ? CHIP[st.state][1] + " · " : ""}${d} of ${s.works.length} done · ${esc(s.level || "")}${side.length ? ` · ${side.length} side branch${side.length > 1 ? "es" : ""}` : ""}</small></span>${ico("chev", "i chev")}</button>
            ${ex ? `<ul>${s.works.map(w => { const dn = isDone(slug, w.id), at = w === nx;
              return `<li><a class="node wn${dn ? " done" : ""}${at ? " here" : ""}" href="#/path/${slug}/work/${w.id}"><span class="ni" style="${C(stageColor(s))}">${ico(dn ? "check" : w.type)}</span><span><b>${esc(w.title)}</b><small>${esc([w.creator, w.length].filter(Boolean).join(" · "))}${at ? " · you are here" : ""}</small></span></a></li>`; }).join("")}
              ${side.map(b => `<li class="br"><span class="node branch" style="color:var(--${stageColor(s)}-ink)"><span class="ni" style="${C(stageColor(s))}">${ico("branch")}</span><span><b>${linkPathNames(esc(b.name), slug)}</b><small>Side branch · ${inline(b.works)}</small></span></span></li>`).join("")}</ul>` : ""}</li>`; }).join("")}
          ${bridges.length ? `<li class="br"><span class="node branch" style="color:var(--muted)"><span class="ni">${ico("link")}</span><span><b>Bridges to other subjects</b><small>Where this path connects</small></span></span>
            <ul>${bridges.map(b => `<li class="br"><span class="node branch" style="color:var(--sky-ink)"><span class="ni" style="${C("sky")}">${ico("link")}</span><span><b>${linkPathNames(esc(b.name), slug)}</b><small>${inline(b.text)}</small></span></span></li>`).join("")}</ul></li>` : ""}
        </ul></li></ul>
    </div>
  </div>`;
}

// --- quiz: one question at a time, check, then a feedback bar ---------------------------
async function mountQuizRun(slug) {
  const box = $("[data-quizrun]"); if (!box) return;
  const p = await getPath(slug); const w = p.works.find(x => x.id === box.dataset.quizrun);
  runQuiz(box, { slug, p, w });
}
function runQuiz(box, ctx) {
  const { slug, p, w } = ctx, qs = w.quiz, color = stageColor(w.stage);
  let i = 0, right = 0;
  const show = () => {
    const q = qs[i];
    box.innerHTML = `<div class="qprog"><i style="width:${(i / qs.length) * 100}%;background:var(--${color}-ink)"></i></div>
      <div class="qcard"><span class="kind">${q.kind === "mc" ? "Choose the answer" : "Fill in the blank"} · ${i + 1} of ${qs.length}</span>
        <h2 class="qt">${q.kind === "mc" ? inline(q.q) : inline(q.q).replace(/_{3,}|<strong>_<\/strong>|<em>_<\/em>/, '<input type="text" id="blank" aria-label="Your answer" autocomplete="off" spellcheck="false">')}</h2>
        ${q.kind === "mc" ? `<div class="opts">${q.opts.map((o, k) => `<button type="button" data-opt="${k}">${inline(o.text)}</button>`).join("")}</div>` : ""}</div>
      <div class="qfoot"><button class="btn wide" type="button" data-check disabled>Check</button></div>`;
    const check = box.querySelector("[data-check]");
    let pick = null;
    box.querySelectorAll("[data-opt]").forEach(b => b.addEventListener("click", () => {
      box.querySelectorAll("[data-opt]").forEach(x => x.classList.remove("picked")); b.classList.add("picked"); pick = +b.dataset.opt; check.disabled = false; }));
    const inp = box.querySelector("#blank");
    if (inp) { inp.addEventListener("input", () => (check.disabled = !inp.value.trim())); inp.addEventListener("keydown", e => { if (e.key === "Enter" && inp.value.trim()) check.click(); }); setTimeout(() => inp.focus(), 50); }
    check.addEventListener("click", () => {
      const ok = q.kind === "mc" ? q.opts[pick].ok : q.answers.includes(norm(inp.value));
      if (ok) right++;
      const shown = q.kind === "mc" ? inline(q.opts.find(o => o.ok).text) : esc(q.shown);
      box.querySelectorAll("[data-opt]").forEach((b, k) => { b.disabled = true; if (q.opts[k].ok) b.classList.add("right"); else if (k === pick) b.classList.add("wrong"); });
      if (inp) { inp.disabled = true; inp.classList.add(ok ? "right" : "wrong"); }
      box.querySelector(".qfoot").outerHTML = `<div class="qfoot fb ${ok ? "ok" : "no"}"><div><b>${ok ? "Right!" : "Not quite."}</b> ${ok ? "" : `The answer is “${shown}”. `}${inline(q.why)}</div>
        <button class="btn wide" type="button" data-nextq>${i + 1 < qs.length ? "Continue" : "See your result"}</button></div>`;
      const nx = box.querySelector("[data-nextq]"); nx.focus();
      nx.addEventListener("click", () => { i++; i < qs.length ? show() : finish(); });
    });
  };
  const finish = async () => {
    const before = statuses(slug, p)[w.stage.index].state;
    box.innerHTML = `<div class="qprog"><i style="width:100%;background:var(--${color}-ink)"></i></div><p class="status">Saving your result…</p>`;
    let pass;
    try { pass = await recordAttempt(slug, w.id, right, qs.length); }
    catch (err) { box.innerHTML = `<p class="status warn">${right} of ${qs.length} right, but your score couldn't be saved: ${esc(err.message)}</p>`; return; }
    if (pass && !isDone(slug, w.id)) await setDone(slug, w.id, true).catch(() => {});
    const after = statuses(slug, p)[w.stage.index], i2 = p.works.indexOf(w), nextW = p.works[i2 + 1];
    box.innerHTML = `<div class="qresult ${pass ? "pass" : "fail"}" style="${pass ? C(color) : ""}">
      <span class="medal small">${ico(pass ? "check" : "quiz")}</span>
      <h1>${right} of ${qs.length}</h1><p>${pass ? "Passed, and ticked off. Well done." : `You haven't finished this work properly yet. The pass mark is ${pct(PASS_MARK)}.`}</p></div>
      <div class="stack" style="gap:10px">
        ${pass ? (nextW ? `<a class="btn wide" href="#/path/${slug}/work/${nextW.id}">Next work: ${esc(nextW.title)}</a>` : "") : `<button class="btn wide" type="button" data-retryquiz>Try again</button>`}
        ${!pass && after.state === "failed" ? `<a class="btn wide ghost" href="#/path/${slug}/stage/${w.stage.num}">See your options for this stage</a>` : ""}
        <a class="btn wide ghost" href="#/path/${slug}/work/${w.id}">Back to the lesson</a></div>`;
    box.querySelector("[data-retryquiz]")?.addEventListener("click", () => runQuiz(box, ctx));
    if (after.state === "passed" && before !== "passed") celebrate(slug, p, w.stage, after);
  };
  show();
}

// --- celebration when a stage is passed ---------------------------------------------
function celebrate(slug, p, s, st) {
  const nx = p.stages[s.index + 1];
  $("#layer").innerHTML = `<div class="scrim"></div><div class="full celebrate enter" style="${C(stageColor(s))}" role="dialog" aria-modal="true" aria-label="Stage passed"><canvas id="confetti"></canvas>
    <div class="medal">${ico("check")}</div><small style="font-weight:700">Badge earned${nx ? ` · you're now at ${esc(nx.level || "the next level")}` : ""}</small><h1>${esc(s.name)} passed</h1>
    <p>${st.quizzes ? `You scored ${pct(st.pct)} across the stage's quizzes.` : "You finished every work in this stage."}${nx ? ` Stage ${nx.num}, ${esc(nx.name)}, is now open.` : " That was the last stage."}</p>
    <div style="display:grid;gap:10px;width:100%">${nx ? `<a class="btn" href="#/path/${slug}/stage/${nx.num}" data-close>Go to Stage ${nx.num}</a>` : ""}<a class="btn ghost" href="#/collection" data-close>See my badges</a><button class="btn ghost" type="button" data-close>Keep reading</button></div>
  </div>`;
  confetti();
}
function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = $("#confetti"); if (!cv) return;
  const x = cv.getContext("2d"), r = cv.getBoundingClientRect(); cv.width = r.width; cv.height = r.height;
  const cs = getComputedStyle(document.documentElement), cols = ["--mint-ink", "--peach-ink", "--sky-ink", "--rose-ink", "--butter-ink", "--lilac-ink"].map(v => cs.getPropertyValue(v).trim());
  const P = Array.from({ length: 110 }, () => ({ x: Math.random() * r.width, y: -20 - Math.random() * r.height * 0.5, vy: 2 + Math.random() * 3, vx: -1.5 + Math.random() * 3, s: 5 + Math.random() * 6, a: Math.random() * 6, c: cols[Math.floor(Math.random() * cols.length)] }));
  let f = 0;
  (function tick() {
    if (!document.body.contains(cv)) return;
    x.clearRect(0, 0, cv.width, cv.height);
    P.forEach(q => { q.x += q.vx; q.y += q.vy; q.a += 0.1; x.save(); x.translate(q.x, q.y); x.rotate(q.a); x.fillStyle = q.c; x.fillRect(-q.s / 2, -q.s / 4, q.s, q.s / 2); x.restore(); });
    if (++f < 170) requestAnimationFrame(tick); else x.clearRect(0, 0, cv.width, cv.height);
  })();
}

// --- collection: badges and collected works across all paths ------------------------
async function collectionView() {
  const all = await Promise.all(PATHS.map(async m => ({ ...m, p: await getPath(m.slug).catch(() => null) })));
  const rows = all.filter(x => x.p).map(x => ({ ...x, sts: statuses(x.slug, x.p) }));
  const passedCount = rows.reduce((a, r) => a + r.sts.filter(s => s.state === "passed").length, 0);
  const worksDone = rows.reduce((a, r) => a + doneCount(r.slug, r.p.works), 0);
  const unfinished = rows.flatMap(r => r.p.stages.filter((s, i) => r.sts[i].state === "notfinished").map(s => ({ r, s })));
  const anyQuiz = rows.some(r => r.p.works.some(w => best(r.slug, w.id)?.score / best(r.slug, w.id)?.total >= PASS_MARK));
  return `<div class="stack">
    <div><h1>Your collection</h1><p class="muted">${passedCount} stage badge${passedCount === 1 ? "" : "s"} · ${worksDone} work${worksDone === 1 ? "" : "s"} collected</p></div>
    ${!auth.user && sb ? `<p class="notice">You're not signed in, so this collection lives in this browser only. <a href="#/signin">Sign in</a> to keep it on every device.</p>` : ""}
    ${unfinished.length ? `<div class="status warn"><b>Not finished.</b> You continued past ${unfinished.length === 1 ? "this stage" : "these stages"}: ${unfinished.map(({ r, s }) => `<a href="#/path/${r.slug}/stage/${s.num}">${esc(r.title)}, Stage ${s.num}</a>`).join(", ")}. Pass ${unfinished.length === 1 ? "it" : "them"} to complete the badge${unfinished.length === 1 ? "" : "s"}.</div>` : ""}
    <section><p class="label">Special badges</p><div class="badges">
      <div class="bdg${anyQuiz ? "" : " off"}"><div class="m" style="${C("butter")}">${ico("spark")}</div>First quiz passed</div>
      ${rows.map(r => { const all3 = r.sts.every(s => s.state === "passed"); return `<div class="bdg${all3 ? "" : " off"}"><div class="m" style="${C(r.color)}">${ico(r.icon)}</div>${esc(r.title)}: every stage passed</div>`; }).join("")}
    </div></section>
    ${rows.map(r => `<section class="section"><div class="row" style="justify-content:space-between;align-items:baseline"><h2>${esc(r.title)}</h2><a href="#/path/${r.slug}" class="muted" style="font-weight:700">Open the path ›</a></div>
      <p class="label" style="margin:0">Stage badges</p>
      <div class="badges">${r.p.stages.map((s, i) => { const st = r.sts[i].state; return `<a class="bdg ${st === "passed" ? "" : st === "notfinished" ? "warn" : "off"}" href="#/path/${r.slug}/stage/${s.num}"><div class="m" style="${C(stageColor(s))}">${ico(st === "passed" ? "check" : "spark")}</div>${esc(s.name)}${st === "notfinished" ? "<small>Not finished</small>" : ""}</a>`; }).join("")}</div>
      <p class="label" style="margin:0">Works collected · ${doneCount(r.slug, r.p.works)} of ${r.p.works.length}</p>
      <div class="stamps">${r.p.works.map(w => isDone(r.slug, w.id) ? `<a class="stamp" href="#/path/${r.slug}/work/${w.id}" style="${C(stageColor(w.stage))}" title="${esc(w.title)}">${ico(w.type)}</a>` : `<span class="stamp off" title="${esc(w.title)}"></span>`).join("")}</div>
    </section>`).join("")}
  </div>`;
}

// --- story cards: the Introduction layer told one card at a time --------------------
function storyCards(w) {
  const body = scrub(w.layers.find(l => l.name === "Introduction")?.body || "");
  const lines = body.split("\n");
  let image = "", trivia = [], text = [], inTrivia = false;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^!\[/.test(l)) { image = l + (lines[i + 1]?.startsWith("*") ? "\n" + lines[++i] : ""); continue; }
    if (l.trim() === "**Trivia**") { inTrivia = true; continue; }
    if (inTrivia && /^- /.test(l)) { trivia.push(l.slice(2)); continue; }
    if (!inTrivia) text.push(l);
  }
  const cards = [{ kicker: `${VERB[w.type]} · ${w.creator || w.stage.name}`, title: w.title, html: md(image) + md(text.join("\n")) }];
  trivia.forEach(t => cards.push({ kicker: "Did you know?", title: "", html: `<p>${inline(t)}</p>` }));
  cards.push({ kicker: "Your turn", title: w.length ? `${w.length}` : "Over to you", html: `<p>${w.access.note ? inline(w.access.note) : "Enjoy it, then come back."}</p>`, last: true });
  return cards;
}
const story = { w: null, n: 0, cards: [], slug: "" };
async function openStory(slug, id) {
  const p = await getPath(slug); const w = p.works.find(x => x.id === id); if (!w) return;
  Object.assign(story, { w, slug, n: 0, cards: storyCards(w) });
  drawStory(0);
}
const storyCard = () => {
  const { w, n, cards, slug } = story, c = cards[n], done = isDone(slug, w.id);
  return `<div class="story">${c.last ? "" : `<div class="tapzones"><button type="button" data-step="-1" aria-label="Previous card"></button><button type="button" data-step="1" aria-label="Next card"></button></div>`}
      <span class="kicker">${esc(c.kicker)}</span>${c.title ? `<h2>${esc(c.title)}</h2>` : ""}<div class="storytxt">${c.html}</div></div>
    ${c.last ? `<div class="row" style="flex-direction:column">${w.quiz.length ? `<a class="btn" href="#/path/${slug}/work/${w.id}/quiz">Take the quiz</a>` : ""}
        <a class="btn ghost" href="#/path/${slug}/work/${w.id}/get">${esc(GET_TITLE[w.type] || "Get it")}: where to find it</a>
        <button class="btn ghost donebtn" type="button" data-done="${w.id}" aria-pressed="${done}">${done ? ico("check") + DONE_VERB[w.type] : `Mark as ${DONE_VERB[w.type].toLowerCase()}`}</button></div>`
      : `<p class="hint">Tap the right side, or press →, to continue</p>`}`;
};
// dir: 0 opens the cards (one fade), 1 or -1 slides the next or previous card in; the frame stays put.
function drawStory(dir) {
  const { w, n, cards, slug } = story;
  if (n === cards.length - 1) markVisited(`${slug}:${w.id}:story`);
  const frame = $("#layer .full");
  if (dir === 0 || !frame) {
    $("#layer").innerHTML = `<div class="scrim" data-close></div><div class="full enter" style="${C(stageColor(w.stage))}" role="dialog" aria-modal="true" aria-label="${esc(w.title)}">
      <div class="segs">${cards.map((_, k) => `<i class="${k <= n ? "on" : ""}"></i>`).join("")}</div>
      <div class="fullhead"><small style="font-weight:700">${esc(w.title)}</small><button class="close" type="button" data-close aria-label="Close">${ico("x")}</button></div>
      <div class="cardslot">${storyCard()}</div></div>`;
    return;
  }
  frame.querySelectorAll(".segs i").forEach((s, k) => s.classList.toggle("on", k <= n));
  const slot = frame.querySelector(".cardslot");
  slot.innerHTML = storyCard();
  slot.classList.remove("in-next", "in-prev"); void slot.offsetWidth;
  slot.classList.add(dir > 0 ? "in-next" : "in-prev");
}
const closeLayer = () => { clearInterval(upnext.timer); $("#layer").innerHTML = ""; };

// --- up next: offered after a work is ticked off ----------------------------------
const upnext = { timer: null };
async function offerNext(slug) {
  const p = await getPath(slug), nx = nextWork(slug, p);
  if (!nx) { toast(`You've ticked off every work in ${p.title}.`); return; }
  let sec = 5;
  const draw = () => {
    $("#layer").innerHTML = `<div class="scrim" data-close></div><div class="sheet enter" role="dialog" aria-modal="true" aria-label="Up next"><div class="grab"></div>
      <div class="row" style="align-items:center;flex-wrap:nowrap"><svg class="countdown" viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="24" stroke="var(--line)"/><circle cx="28" cy="28" r="24" stroke="var(--lilac-ink)" stroke-dasharray="${150.8 * sec / 5} 150.8" transform="rotate(-90 28 28)"/><text x="28" y="34" text-anchor="middle">${sec}</text></svg>
        <div><small class="muted" style="font-weight:700">Up next</small><h2>${esc(nx.title)}</h2><span class="muted">${esc([nx.creator, nx.length].filter(Boolean).join(" · "))}</span></div></div>
      <a class="btn" href="#/path/${slug}/work/${nx.id}" data-close>${ico("play")}Start now</a><button class="btn ghost" type="button" data-close>Not now</button></div>`;
    $("#layer .sheet").classList.toggle("enter", sec === 5);
  };
  draw();
  // ponytail: autoplay-style countdown the learner can always cancel; tune the 5 s after the pilot
  upnext.timer = setInterval(() => { if (!$("#layer .sheet")) return clearInterval(upnext.timer); if (--sec <= 0) { clearInterval(upnext.timer); closeLayer(); location.hash = `#/path/${slug}/work/${nx.id}`; } else draw(); }, 1000);
}

// --- sign-in and account ------------------------------------------------------------
function signinView() {
  if (!sb) return `<div class="stack signin"><h1>Sign in</h1><p class="notice">Accounts aren't switched on yet. Add the Supabase project URL and anon key to <code>src/config.js</code>.</p></div>`;
  if (auth.user) return accountView();
  return `<div class="stack signin"><h1>Sign in</h1><p class="muted">We'll email you a link. Open it on this device and you're in. No password needed.</p>
    <form id="signin" class="stack" style="gap:14px" novalidate>
      <div class="field"><label for="email">Email address</label><input id="email" type="email" autocomplete="email" placeholder="name@example.com" required></div>
      <p class="err" id="err" hidden></p>
      <button class="btn" type="submit">${ico("mail")}Email me a sign-in link</button>
    </form></div>`;
}
const ROLE_TEXT = {
  learner: "Learner",
  reviewer: "Reviewer: you can review the paths assigned to you under Review.",
  editor: "Editor: you can use the Admin dashboard and review any path.",
  admin: "Admin: you can use the Admin dashboard, manage roles and review any path.",
};
async function accountView() {
  if (!auth.user) return signinView();
  await loadProfile();
  const pr = auth.profile, role = auth.role;
  const roleLine = !pr ? `<p class="notice">Your profile wasn't created. This happens if you signed up before the database was set up: ask the admin to add it.</p>`
    : `<p><b>Role:</b> ${esc(ROLE_TEXT[role] || role)}</p>`;
  let apply = "";
  if (pr && role === "learner") {
    const [{ data: st }, { data: mine }] = await Promise.all([sb.from("settings").select("value").eq("key", "reviewer_applications").maybeSingle(), sb.from("applications").select("status,created_at").eq("user_id", auth.user.id).order("created_at", { ascending: false }).limit(1)]);
    const last = mine?.[0];
    if (last?.status === "pending") apply = `<p class="status">Your application to review is waiting for a decision.</p>`;
    else if (st?.value === "open") apply = `<form id="applyform" class="stack section" style="gap:12px" novalidate><h2>Apply to review paths</h2><p class="muted">Experts check and endorse paths in their field. Tell us about yours.</p>
      <div class="field"><label for="afield">Your field</label><input id="afield" placeholder="For example: Russian literature"></div>
      <div class="field"><label for="aev">Evidence</label><textarea id="aev" rows="3" placeholder="Your role, institution, ORCID or publications"></textarea></div>
      <p class="err" id="aerr" hidden></p><button class="btn" type="submit">Send my application</button></form>`;
  }
  return `<div class="stack signin"><h1>Your account</h1><p>Signed in as <b>${esc(auth.user.email)}</b>.</p>${roleLine}
    ${pr ? `<form id="profileform" class="stack section" style="gap:12px" novalidate><h2>Your name</h2><p class="muted">${isReviewer() ? "Learners see your name and affiliation on the paths you endorse." : "Used if you ever review paths."}</p>
      <div class="field"><label for="pname">Name</label><input id="pname" value="${esc(pr.display_name || "")}" autocomplete="name"></div>
      ${"affiliation" in pr ? `<div class="field"><label for="paff">Affiliation</label><input id="paff" value="${esc(pr.affiliation || "")}" placeholder="For example: Lecturer in musicology, University of Dhaka"></div>` : ""}
      <button class="btn ghost" type="submit">Save</button></form>` : ""}
    ${apply}
    <button class="btn ghost" id="signout" type="button">Sign out</button>
    <details class="danger"><summary>Delete my account</summary><p>This permanently deletes your email, progress, quiz scores, reports and reviews. It can't be undone.</p>
      <button class="btn small" type="button" data-deleteme>Yes, delete my account</button></details>
    ${footer()}</div>`;
}
const notFound = () => `<div class="stack"><h1>Page not found</h1><p><a href="#/">Go to the home page</a></p></div>`;

// Endorsement badge on a path page, from the public endorsements_for() function (week4.sql).
async function fillTrust(slug) {
  const el = $("#trust"); if (!el || !sb) return;
  const p = await getPath(slug), v = +(p.fm.version || 1);
  const [{ data: ends, error }, { data: st }] = await Promise.all([sb.rpc("endorsements_for", { p: slug }), sb.from("path_status").select("status").eq("path", slug).maybeSingle()]);
  if (error) return; // database update not installed yet: keep the draft label
  const cur = (ends || []).filter(e => e.version === v);
  if (st?.status === "verified" || cur.length) {
    el.className = "pill endorsed";
    el.textContent = `${st?.status === "verified" ? "Verified · " : ""}Endorsed by ${cur.length} expert${cur.length === 1 ? "" : "s"}`;
    if (cur.length) el.insertAdjacentHTML("afterend", `<details class="endorsers"><summary>Who endorsed it</summary><ul>${cur.map(e => `<li><b>${esc(e.name)}</b>${e.affiliation ? `, ${esc(e.affiliation)}` : ""}</li>`).join("")}</ul></details>`);
  } else if (st?.status && st.status !== "draft") el.textContent = { "editor-reviewed": "Editor reviewed · awaiting experts", "in-review": "In expert review" }[st.status] || el.textContent;
}

// --- router --------------------------------------------------------------------
const ROUTES = [
  [/^#?\/?$/, () => homeView(), "home"],
  [/^#\/area\/([\w-]+)$/, m => areaView(m[1]), "home"],
  [/^#\/path\/([\w-]+)$/, m => pathView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/map$/, m => mapView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/stage\/(\d+)$/, m => stageView(m[1], +m[2]), "home"],
  [/^#\/path\/([\w-]+)\/work\/([\w-]+)$/, m => workView(m[1], m[2]), "home"],
  [/^#\/path\/([\w-]+)\/work\/([\w-]+)\/(get|understand|analyse|quiz|scholar)$/, m => stepView(m[1], m[2], m[3]), "home"],
  [/^#\/collection$/, () => collectionView(), "collection"],
  [/^#\/admin(?:\/(\w+))?$/, m => adminView(m[1]), "admin"],
  [/^#\/review(?:\/([\w-]+))?$/, m => reviewView(m[1]), "review"],
  [/^#\/privacy$/, () => privacyView(), "home"],
  [/^#\/signin$/, () => signinView(), "account"],
  [/^#\/account$/, () => accountView(), "account"],
];

function renderNav(tab) {
  const items = [["#/", "Home", "home", "home"], ["#/collection", "Collection", "trophy", "collection"]];
  if (isReviewer()) items.push(["#/review", "Review", "eye", "review"]);
  if (isStaff()) items.push(["#/admin", "Admin", "layers", "admin"]);
  items.push([auth.user ? "#/account" : "#/signin", auth.user ? "Account" : "Sign in", "user", "account"]);
  $("#tabs").innerHTML = `<a class="brand side-brand" href="#/">${ico("logo")}Ascent</a>` +
    items.map(([h, l, i, t]) => `<a href="${h}" ${t === tab ? 'aria-current="page"' : ""}>${ico(i)}${l}</a>`).join("");
  $("#who").textContent = auth.user?.email || "";
}

let lastRoute = null, routeSeq = 0;
async function route({ keepScroll = false } = {}) {
  const hash = location.hash || "#/", mySeq = ++routeSeq;
  const hit = ROUTES.map(([re, fn, tab]) => [hash.match(re), fn, tab]).find(([m]) => m);
  const [m, fn, tab] = hit || [null, notFound, "home"];
  renderNav(tab);
  const view = $("#view"), y = scrollY;
  let html;
  try { html = await fn(m || []); }
  catch (e) { html = `<p class="status">${esc(e.message)} Refresh the page to try again.</p>`; }
  if (mySeq !== routeSeq) return; // a newer page was asked for while this one loaded: don't overwrite it
  view.innerHTML = html;
  if (hash !== lastRoute) { view.classList.remove("enter"); void view.offsetWidth; view.classList.add("enter"); window.scrollTo(0, 0); lastRoute = hash; }
  else if (keepScroll) window.scrollTo(0, y);
  if (/\/work\/[\w-]+\/quiz$/.test(hash)) mountQuizRun(m[1]);
  if (/^#\/path\/[\w-]+$/.test(hash)) fillTrust(m[1]);
}
const refresh = () => route({ keepScroll: true });

document.addEventListener("submit", async e => {
  if (e.target.id === "profileform") {
    e.preventDefault();
    const row = { display_name: $("#pname").value.trim() || null };
    if ($("#paff")) row.affiliation = $("#paff").value.trim() || null;
    const { error } = await sb.from("profiles").update(row).eq("id", auth.user.id);
    toast(error ? `Couldn't save: ${error.message}` : "Saved"); if (!error) await loadProfile();
    return;
  }
  if (e.target.id === "applyform") {
    e.preventDefault();
    const field = $("#afield").value.trim(), evidence = $("#aev").value.trim(), err = $("#aerr");
    if (!field || !evidence) { err.textContent = "Fill in both your field and your evidence."; err.hidden = false; return; }
    const { error } = await sb.from("applications").insert({ user_id: auth.user.id, field, evidence });
    if (error) { err.textContent = `Couldn't send: ${error.message}`; err.hidden = false; return; }
    toast("Application sent"); refresh(); return;
  }
  if (e.target.id !== "signin") return;
  e.preventDefault();
  const email = $("#email").value.trim(), err = $("#err"), btn = e.target.querySelector("button");
  if (!/^\S+@\S+\.\S+$/.test(email)) { err.textContent = "Enter a valid email address."; err.hidden = false; return; }
  err.hidden = true; btn.disabled = true; btn.textContent = "Sending…";
  const error = await sendLink(email);
  if (error) {
    err.textContent = /rate limit/i.test(error.message)
      ? "Too many sign-in emails have been sent in the last hour. Please try again later. If you already have a link from earlier, use that one."
      : `Couldn't send the link: ${error.message}. Try again in a few minutes.`;
    err.hidden = false; btn.disabled = false; btn.innerHTML = `${ico("mail")}Email me a sign-in link`; return; }
  $("#view").innerHTML = `<div class="stack signin"><h1>Check your email</h1><p>We sent a sign-in link to <b>${esc(email)}</b>. Open it on this device to finish signing in.</p><p class="muted">No email after a few minutes? Check your spam folder, or <a href="#/signin">try again</a>.</p></div>`;
});

document.addEventListener("click", async e => {
  const t = e.target.closest("button, a, [data-close]"); if (!t) return;
  const d = t.dataset, slug = (location.hash.match(/#\/path\/([\w-]+)/) || [])[1];
  if (t.classList.contains("skip")) { e.preventDefault(); $("#view").focus(); return; }
  if (t.id === "signout") { await signOut(); toast("Signed out"); location.hash = "#/"; return; }
  if ("welcomedone" in d) { try { localStorage.setItem("ascent-welcomed", "1"); } catch { /* storage blocked */ } }
  if ("welcome" in d) { openWelcome(); return; }
  if ("wnext" in d) { welcome.n++; const f = $("#layer .full"); f.querySelectorAll(".segs i").forEach((s, k) => s.classList.toggle("on", k <= welcome.n));
    const slot = f.querySelector(".cardslot"); slot.innerHTML = welcomeCard(); slot.classList.remove("in-next"); void slot.offsetWidth; slot.classList.add("in-next"); return; }
  if ("feedback" in d) { openReport("app", null); return; }
  if ("deleteme" in d) {
    t.disabled = true; t.textContent = "Deleting…";
    const { error } = await sb.rpc("delete_my_account");
    if (error) { toast(`Couldn't delete: ${error.message}`); t.disabled = false; t.textContent = "Yes, delete my account"; return; }
    try { ["ascent-progress", "ascent-attempts", "ascent-skips", "ascent-visited"].forEach(k => localStorage.removeItem(k)); } catch { /* storage blocked */ }
    await signOut(); toast("Your account has been deleted"); location.hash = "#/"; return;
  }
  if (d.done) {
    const was = isDone(slug, d.done);
    try { await setDone(slug, d.done, !was); } catch (err) { toast(`Couldn't save: ${err.message}`); return; }
    if ($("#layer .full")) closeLayer();
    await refresh();
    if (was) { toast("Unticked"); return; }
    // a work with a quiz isn't over yet: the lesson continues; otherwise offer the next work
    const w = (await getPath(slug)).works.find(x => x.id === d.done);
    w.quiz.length ? toast(`${DONE_VERB[w.type]}: ticked off. The quiz is next.`) : offerNext(slug);
    return;
  }
  if (d.skip) {
    const k = `${slug}:${d.skip}`;
    if (d.confirm === "1") {
      try { await skipStage(slug, +d.skip); } catch (err) { toast(`Couldn't save: ${err.message}`); return; }
      confirming.delete(k); toast(`Stage ${+d.skip + 1} is open. Stage ${d.skip} stays marked Not finished.`);
    } else if (d.confirm === "0") confirming.delete(k);
    else confirming.add(k);
    refresh(); return;
  }
  if (d.report) { openReport(slug, d.report); return; }
  if (d.story) { openStory(slug, d.story); return; }
  if (d.step) { const n = story.n + +d.step; if (n >= 0 && n < story.cards.length) { story.n = n; drawStory(+d.step); } return; }
  if ("close" in d) { closeLayer(); return; }
  if (d.toggle) { const set = mapOpen.get(slug); set.has(+d.toggle) ? set.delete(+d.toggle) : set.add(+d.toggle); refresh(); return; }
  if (d.expand) { const p = await getPath(slug); mapOpen.set(slug, new Set(d.expand === "all" ? p.stages.map(s => s.num) : [])); refresh(); return; }
});
document.addEventListener("keydown", e => {
  if (!$("#layer").innerHTML) return;
  if (e.key === "Escape") closeLayer();
  if ($("#layer .full") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) $(`[data-step="${e.key === "ArrowRight" ? 1 : -1}"]`)?.click();
});

window.addEventListener("hashchange", () => { closeLayer(); route(); $("#view").focus({ preventScroll: true }); });
// installable app and offline reading (sw.js), over https or on this computer
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) navigator.serviceWorker.register("sw.js").catch(() => {});
const showOnline = () => ($("#offline").hidden = navigator.onLine);
addEventListener("online", showOnline); addEventListener("offline", showOnline); showOnline();
useHelpers({ esc, C, ico, inline, getPath, toast, refresh: () => refresh() });
await initAuth(async () => { await Promise.all([loadProgress(), loadProfile()]); route({ keepScroll: true }); });
await Promise.all([loadProgress(), loadProfile()]);
route();
try { if (!localStorage.getItem("ascent-welcomed") && !location.hash.startsWith("#/path/")) openWelcome(); } catch { /* storage blocked: skip the welcome */ }
