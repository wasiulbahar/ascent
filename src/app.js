// Ascent app: hash router and screens. Content comes from paths/*.md (parsed by content.js).
import { parsePath, blankOk } from "./content.js?v=19";
import { PATHS, DOMAINS } from "./paths.js?v=19";
import { loadTax, children, routes, search, nameOf, pathsFor, TYPE_LABEL, codesFor, MAP_TYPE, loadPoi, poisUnder, searchPoi, poiDetail, POI_LABEL } from "./taxonomy.js?v=19";
import { sb, auth, initAuth, sendLink, signOut, loadProfile, isStaff, isReviewer } from "./auth.js?v=19";
import { useHelpers, adminView, reviewView, openReport } from "./admin.js?v=19";
import { loadProgress, isDone, setDone, best, isSkipped, recordAttempt, skipStage } from "./progress.js?v=19";
import { pathStatuses, PASS_MARK, placementId, MASTERY_MARK, masteryId, masteryState } from "./status.js?v=19";

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
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>', gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>', scale: '<path d="M12 4v16M7 20h10M5 8h14M5 8l-3 6a3 3 0 0 0 6 0zM19 8l-3 6a3 3 0 0 0 6 0z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>', building: '<path d="M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2M2 21h20"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>', briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/>',
  sigma: '<path d="M18 5H6l6 7-6 7h12"/>', leaf: '<path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l8-8"/>', atom: '<circle cx="12" cy="12" r="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
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
    cache.set(slug, fetch(`paths/${slug}.md?v=19`).then(r => { if (!r.ok) throw new Error("This path could not be loaded."); return r.text(); }).then(parsePath));
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
const accOf = slug => ({ isDone: id => isDone(slug, id), best: id => best(slug, id), isSkipped: n => isSkipped(slug, n) });
const statuses = (slug, p) => pathStatuses(p, accOf(slug));
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
    <form id="homesearch" role="search" class="row" style="flex-wrap:nowrap"><input type="search" id="homeq" class="bigsearch" placeholder="Search paths, works, fields, people, events…" aria-label="Search everything" autocomplete="off"><button class="btn" type="submit">${ico("search")}<span class="sr-only">Search</span></button></form>
    ${cont ? `<a class="hero continue" href="#/path/${cont.slug}/work/${nx.id}" style="${C(stageColor(nx.stage))}">
      <small style="font-weight:700">${esc(cont.title)} · Stage ${nx.stage.num}: ${esc(nx.stage.name)}</small><h2>${esc(nx.title)}</h2>
      <span>${esc([VERB[nx.type], nx.creator, nx.length].filter(Boolean).join(" · "))}</span><span class="btn" style="justify-self:start">${ico("play")}Continue</span></a>` : ""}
    ${!auth.user && sb ? `<div class="hero" style="${C("lilac")}"><h2>Save your progress</h2><p>Sign in with your email to keep your place on every device. No password needed.</p><a class="btn" href="#/signin" style="justify-self:start">${ico("mail")}Sign in with email</a></div>` : ""}
    ${!cont && prefs() ? `<section><p class="label">Picked for you</p><div class="grid">${picksFor(prefs()).map(m => `<a class="card" href="#/path/${m.slug}" style="${C(m.color)}">${ico(m.icon)}<div style="display:grid;gap:6px"><h2>${esc(m.title)}</h2><small>${prefs().level ? "Start, or take the placement test" : "Start with Stage 1"}</small></div></a>`).join("")}</div></section>` : ""}
    <section><p class="label">Choose a domain</p>
      <div class="grid">${DOMAINS.map(a => { const k = PATHS.filter(p => p.doms.includes(a.slug)).length;
        return `<a class="card" href="#/area/${a.slug}" style="${C(a.color)}">${ico(a.icon)}
        <div style="display:grid;gap:6px"><h2>${esc(a.title)}</h2><small>${esc(a.blurb)}</small><small>${k ? `${k} path${k > 1 ? "s" : ""} ready` : "Coming soon"}</small></div></a>`; }).join("")}</div>
    </section>
    <a class="hero maplink" href="#/atlas" style="${C("sky")}"><span class="row" style="align-items:center;gap:12px;flex-wrap:nowrap">${ico("tree")}<span><b>See the map of all knowledge</b><br><small>Every area, discipline and subfield, and where the paths are</small></span></span></a>
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

// --- welcome tour, shown once on a first visit (replay: footer or account page) ----------
// Five cards: how it works, the climb, interests, level, and picked paths. Choices are kept
// in this browser (ascent-prefs) to pick paths for the home page.
const LEVELS = ["New to all of this", "I know a little", "I've studied some of it"];
const tour = { n: 0, areas: new Set(), level: 0 };
const TOUR_N = 5;
function prefs() { try { return JSON.parse(localStorage.getItem("ascent-prefs") || "null"); } catch { return null; } }
function savePrefs() { try { localStorage.setItem("ascent-prefs", JSON.stringify({ areas: [...tour.areas], level: tour.level })); localStorage.setItem("ascent-welcomed", "1"); } catch { /* storage blocked */ } }
// up to n live paths in the chosen areas (all areas if none chosen, or if those have none yet)
function picksFor(pr, n = 3) {
  // take turns between the chosen areas, so every choice is represented
  const from = ds => { const ls = ds.map(d => PATHS.filter(p => p.doms.includes(d.slug)).map(p => p.slug)), out = [];
    for (let r = 0; ls.some(l => l[r]); r++) ls.forEach(l => l[r] && !out.includes(l[r]) && out.push(l[r])); return out; };
  let s = from(DOMAINS.filter(a => pr?.areas?.includes(a.slug)));
  if (!s.length) s = from(DOMAINS);
  return s.slice(0, n).map(x => PATHS.find(p => p.slug === x)).filter(Boolean);
}
function openWelcome() {
  const pr = prefs();
  Object.assign(tour, { n: 0, areas: new Set(pr?.areas || []), level: pr?.level || 0 });
  $("#layer").innerHTML = `<div class="scrim" data-close data-welcomedone></div><div class="full enter" style="${C("lilac")}" role="dialog" aria-modal="true" aria-label="Welcome to Ascent">
    <div class="segs">${Array.from({ length: TOUR_N }, (_, k) => `<i class="${k === 0 ? "on" : ""}"></i>`).join("")}</div>
    <div class="fullhead"><small style="font-weight:700">Ascent</small><button class="close" type="button" data-close data-welcomedone aria-label="Close">${ico("x")}</button></div>
    <div class="cardslot">${tourCard()}</div></div>`;
}
function drawTour(dir) {
  const f = $("#layer .full"); if (!f) return;
  f.querySelectorAll(".segs i").forEach((s, k) => s.classList.toggle("on", k <= tour.n));
  const slot = f.querySelector(".cardslot"); slot.innerHTML = tourCard();
  slot.classList.remove("in-next", "in-prev"); void slot.offsetWidth; slot.classList.add(dir > 0 ? "in-next" : "in-prev");
  slot.querySelector("h2")?.focus({ preventScroll: true });
}
function tourCard() {
  const n = tour.n, back = n ? `<button class="btn ghost" type="button" data-tstep="-1">Back</button>` : `<button class="btn ghost" type="button" data-close data-welcomedone>Skip</button>`;
  const nav = label => `<div class="row tournav">${back}<button class="btn" type="button" data-tstep="1">${label}</button></div>`;
  const card = (icon, h, p, body) => `<div class="story"><span class="medal small">${ico(icon)}</span><h2 tabindex="-1">${h}</h2><p class="lede">${p}</p>${body}</div>`;
  if (n === 0) return card("logo", "Welcome to Ascent", "Guided paths that take you from curious beginner to someone who really knows a subject.",
    `<ol class="tsteps">${["Pick a path", "Read, watch or listen, one work at a time", "Pass a short quiz after each work", "Earn stage badges, all the way to mastery"].map(s => `<li>${s}</li>`).join("")}</ol>`) + nav("Show me how");
  if (n === 1) return card("trophy", "Every path is a climb", "Six stages, from First Encounters to Expert. Each work is a short lesson: a story, the work itself, a guide, and a quiz.",
    `<div class="climb" aria-hidden="true">${[1, 2, 3, 4, 5, 6].map(k => `<i style="height:${12 + k * 13}%"${k < 3 ? ' class="on"' : ""}></i>`).join("")}</div>
     <p class="muted">Score 70% across a stage's quizzes to pass it. Fall short? Retry, or continue anyway. Already know some? A placement test lets you skip ahead.</p>`) + nav("Got it");
  if (n === 2) return card("globe", "What are you curious about?", "Pick as many as you like.",
    `<div class="picks">${DOMAINS.map(a => `<button type="button" class="pick${tour.areas.has(a.slug) ? " on" : ""}" aria-pressed="${tour.areas.has(a.slug)}" data-tarea="${a.slug}">${ico(a.icon)}${esc(a.short)}</button>`).join("")}</div>`)
    + nav(tour.areas.size ? "Next" : "Show me everything");
  if (n === 3) return card("spark", "Where are you starting from?", "There's no wrong answer, and you can change it later.",
    `<div class="levels" role="radiogroup" aria-label="Your level">${LEVELS.map((l, k) => `<button type="button" role="radio" class="level${tour.level === k ? " on" : ""}" aria-checked="${tour.level === k}" data-tlevel="${k}">${l}</button>`).join("")}</div>`) + nav("Show my paths");
  const picks = picksFor({ areas: [...tour.areas] });
  return card("check", "Your first climb", tour.level ? "Picked for you. Start a path, or take its placement test to skip what you know." : "Picked for you. Start with Stage 1: every path begins with works anyone can enjoy.",
    `<div class="tpicks">${picks.map(m => `<div class="tpick"><span class="ni" style="${C(m.color)}">${ico(m.icon)}</span><span><b>${esc(m.title)}</b>
      <span class="row"><a href="#/path/${m.slug}" data-close>Start</a>${tour.level ? `<a href="#/path/${m.slug}/placement" data-close>Placement test</a>` : ""}</span></span></div>`).join("")}</div>
     <p class="badgeline">${ico("trophy")}Badge earned: Explorer</p>`)
    + `<div class="row tournav" style="flex-direction:column"><a class="btn" href="#/atlas" data-close>${ico("tree")}See the map of all knowledge</a>${!auth.user && sb ? `<a class="btn ghost" href="#/signin" data-close>Sign in to save progress</a>` : `<button class="btn ghost" type="button" data-close>Close</button>`}</div>`;
}

// --- map of knowledge: 17 domains, their fields as a graph, and cross-cutting collections ---
// Data and rules: src/taxonomy.js. A field with several homes appears under each of them,
// but it is one entity with one page (#/field/<id>).
const atlas = { open: new Set(), q: "", view: "domains", live: {}, t: null };
const domSlug = id => id.replace(/^d:/, "");
async function liveStats() {
  atlas.live = Object.fromEntries(await Promise.all(PATHS.map(async m => {
    const p = await getPath(m.slug).catch(() => null);
    return [m.slug, { m, stages: p?.stages.length || 0, passed: p ? statuses(m.slug, p).filter(s => s.state === "passed").length : 0, started: p ? doneCount(m.slug, p.works) > 0 : false, mastered: p ? mastery(m.slug, p).passed : false }];
  })));
}
const pathNode = s => { const L = atlas.live[s]; if (!L) return "";
  return `<a class="node" href="#/path/${s}" style="${C(L.m.color)}"><span class="ni">${ico(L.m.icon)}</span><span><b>${esc(L.m.title)}</b><small>${L.mastered ? "Mastery earned" : L.passed ? `${L.passed} of ${L.stages} stages passed` : L.started ? "Started" : "Path ready to start"}</small></span></a>`; };
async function atlasView() {
  const [t, p] = await Promise.all([loadTax(), loadPoi().catch(() => null), liveStats()]); atlas.t = t; atlas.p = p;
  const E = Object.values(t.entities), fields = E.filter(e => ["discipline", "subdiscipline", "specialisation"].includes(e.t)).length;
  const L = Object.values(atlas.live), passed = L.reduce((n, x) => n + x.passed, 0), total = L.reduce((n, x) => n + x.stages, 0);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<span>Map of knowledge</span></div>
    <div style="display:grid;gap:8px"><h1>Map of knowledge</h1><p class="lede">Every field Ascent will cover, in ${t.domains.length} domains. Lit-up paths are ready to start; the rest are being written. Many fields belong to more than one domain.</p></div>
    <div class="stats">${[["Domains", t.domains.length], ["Fields", fields], ["Methods and topics", E.length - fields], ["Points of interest", p ? p.items.length.toLocaleString("en") : "–"], ["Paths ready", PATHS.length], ["Paths you've started", L.filter(x => x.started).length], ["Stages you've passed", `${passed} of ${total}`]]
      .map(([k, v]) => `<div class="stat"><small>${k}</small><b>${v}</b></div>`).join("")}</div>
    <div class="row atlasbar"><input type="search" id="atlasq" placeholder="Find a subject, such as genetics" aria-label="Find a subject" value="${esc(atlas.q)}" autocomplete="off"></div>
    <div class="row seg" role="group" aria-label="Browse by">${[["domains", "By domain"], ["collections", "Across domains"]].map(([v, l]) => `<button type="button" class="btn small ${atlas.view === v ? "" : "ghost"}" data-atlasview="${v}" aria-pressed="${atlas.view === v}">${l}</button>`).join("")}</div>
    <div id="atlasbody">${atlasBody()}</div>
    <p class="muted">Source: the Universal Academic Knowledge Base, version 1.1 (draft, 21 November 2026). Every field is marked <b>Proposed</b> until reviewed.</p>
  </div>`;
}
function atlasBody() {
  const t = atlas.t, q = atlas.q.trim();
  if (q) {
    const ids = search(t, q);
    return ids.length ? `<p class="label">${ids.length === 40 ? "First 40 matches" : `${ids.length} match${ids.length > 1 ? "es" : ""}`}</p><ul class="results">${ids.map(id => { const e = t.entities[id], r = routes(t, id)[0];
      return `<li><a href="#/field/${id}"><b>${markQ(e.n, q)}</b><small>${TYPE_LABEL[e.t] || e.t}${r.length > 1 ? " · " + r.slice(0, -1).map(x => esc(nameOf(t, x))).join(" › ") : ""}${pathsFor(id).length ? " · path ready" : ""}</small></a></li>`; }).join("")}</ul>`
      + poiResults(q) : poiResults(q) || `<p class="muted">Nothing matches “${esc(q)}” yet. Try a broader word.</p>`;
  }
  if (atlas.view === "collections") return `<ul class="tree atlas">${t.collections.map(c => { const ex = atlas.open.has(c.id);
    return `<li><button class="node" type="button" style="${C("lilac")}" data-atlas="${c.id}" aria-expanded="${ex}"><span class="ni">${ico("layers")}</span><span><b>${esc(c.n)}</b><small>${c.members.length} items</small></span>${ico("chev", "i chev")}</button>
      ${ex ? `<div class="subs">${c.members.map(m => `<a href="#/field/${m}">${esc(nameOf(t, m))}</a>`).join("")}</div>` : ""}</li>`; }).join("")}</ul>`;
  return `<ul class="tree atlas">${DOMAINS.map(D => { const id = "d:" + D.slug, ex = atlas.open.has(id), ds = children(atlas.t, id), np = PATHS.filter(p => p.doms.includes(D.slug)).length;
    return `<li><button class="node" type="button" style="${C(D.color)}" data-atlas="${id}" aria-expanded="${ex}"><span class="ni">${ico(D.icon)}</span>
      <span><b>${esc(D.title)}</b><small>${ds.length} disciplines · ${np ? `${np} path${np > 1 ? "s" : ""} ready` : "paths coming"}</small></span>${ico("chev", "i chev")}</button>
      ${ex ? `<ul>${ds.map(f => fieldRow(f)).join("")}</ul>` : ""}</li>`; }).join("")}</ul>`;
}
// a discipline (or field) row: its branches as links, their own branches folded into a count
function fieldRow(id) {
  const t = atlas.t, kids = children(t, id), ex = atlas.open.has(id), homes = (t.ups[id] || []).length, ps = pathsFor(id);
  return `<li><div class="disc${ps.length ? "" : " soon"}">
    <span class="row" style="align-items:center;gap:8px"><a href="#/field/${id}"><b>${esc(nameOf(t, id))}</b></a>${homes > 1 ? `<small class="also">also in ${homes - 1} other place${homes > 2 ? "s" : ""}</small>` : ""}</span>
    ${kids.length ? `<div class="subs">${kids.slice(0, ex ? kids.length : 12).map(k => { const n = (t.downs[k] || []).length; return `<a href="#/field/${k}">${esc(nameOf(t, k))}${n ? ` <i>${n}</i>` : ""}</a>`; }).join("")}
      ${kids.length > 12 ? `<button class="linkbtn" type="button" data-atlas="${id}" aria-expanded="${ex}">${ex ? "Show fewer" : `Show all ${kids.length}`}</button>` : ""}</div>` : ""}</div>
    ${ps.length ? `<ul>${ps.map(p => `<li>${pathNode(p.slug)}</li>`).join("")}</ul>` : ""}</li>`;
}
const poiResults = q => { const r = atlas.p ? searchPoi(atlas.p, q) : []; return r.length ? `<p class="label" style="margin-top:14px">Points of interest</p><ul class="results">${r.map(it =>
  `<li><a href="#/poi/${it.id}"><b>${markQ(it.n, q)}</b><small>${esc(POI_LABEL[it.ty] || it.ty)} · studied in ${it.h.slice(0, 2).map(h => esc(nameOf(atlas.t, h))).join(", ")}</small></a></li>`).join("")}</ul>` : ""; };
const markQ = (s, q) => { const i = s.toLowerCase().indexOf(q.toLowerCase()); return i < 0 ? esc(s) : esc(s.slice(0, i)) + `<mark>${esc(s.slice(i, i + q.length))}</mark>` + esc(s.slice(i + q.length)); };

// --- one field: where it sits (every home), its branches, collections, paths and source ----
async function fieldView(id) {
  const [t] = await Promise.all([loadTax(), liveStats()]); atlas.t = t;
  const e = t.entities[id]; if (!e) return notFound();
  const kids = children(t, id), cols = t.inCol[id] || [], ps = pathsFor(id), rs = routes(t, id);
  const link = x => t.dom[x] ? `<a href="#/area/${domSlug(x)}">${esc(nameOf(t, x))}</a>` : x === id ? `<span>${esc(e.n)}</span>` : `<a href="#/field/${x}">${esc(nameOf(t, x))}</a>`;
  const ed = (t.ups[id] || []).filter(u => u.src === "editorial");
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/atlas">Map</a>›<span>${esc(e.n)}</span></div>
    <div style="display:grid;gap:10px"><h1>${esc(e.n)}</h1>
      <div class="pills"><span class="pill">${TYPE_LABEL[e.t] || e.t}</span><span class="pill draft">Proposed</span>${e.src === "editorial" ? '<span class="pill">Ascent addition</span>' : ""}${e.a ? `<span class="pill">Also called ${e.a.map(esc).join(", ")}</span>` : ""}</div></div>
    ${ps.length ? `<section><p class="label">Learn it</p><div class="row">${ps.map(p => pathNode(p.slug)).join("")}</div></section>` : ""}
    <section class="section"><h2>Where it sits</h2>${rs.length > 1 ? `<p class="muted">${esc(e.n)} belongs to more than one field, so it appears in ${rs.length} places on the map.</p>` : ""}
      <ul class="homes">${rs.map(r => `<li>${r.map(link).join(" › ")}</li>`).join("")}</ul></section>
    ${kids.length ? `<section class="section"><h2>Branches (${kids.length})</h2><div class="subs">${kids.map(k => { const n = (t.downs[k] || []).length; return `<a href="#/field/${k}">${esc(nameOf(t, k))}${n ? ` <i>${n}</i>` : ""}</a>`; }).join("")}</div></section>` : ""}
    ${cols.length ? `<section class="section"><h2>Also part of</h2><div class="subs">${cols.map(c => `<span>${esc(c.n)}</span>`).join("")}</div></section>` : ""}
    <section class="section" id="poisec"><p class="muted">Loading points of interest…</p></section>
    ${(c => c.codes.length ? `<section class="section"><h2>Classification codes</h2>
      <p class="muted">How official classifications file this subject${c.via ? `, through ${esc(nameOf(t, c.via))}` : ""}. Every code still needs checking against the official documents.</p>
      <ul class="codes">${c.codes.map(([s, code, typ]) => `<li><b>${s === "OECD_FORD" ? "OECD research field" : "UNESCO education field"} ${esc(code)}</b> ${esc(t.schemes[s].codes[code])} <small>(${MAP_TYPE[typ] || typ})</small></li>`).join("")}</ul></section>` : "")(codesFor(t, id))}
    <section class="section"><h2>Source and status</h2>
      <p>${e.src === "editorial" ? `Added by Ascent's editors: ${esc(e.note || "")}` : `From the Universal Academic Knowledge Base, version 1.1 (draft, 21 November 2026).`}</p>
      ${ed.map(u => `<p>Its link to ${esc(nameOf(t, u.p))} was added by Ascent's editors: ${esc(u.note || "")}</p>`).join("")}
      <p class="muted">Status: proposed. Fields stay proposed until subject experts review them. <button class="linkbtn" type="button" data-feedback>Suggest a correction</button></p></section>
  </div>`;
}

// --- points of interest on a field page: filter by type, search, load more ---------------
const poiv = { field: null, type: "", q: "", n: 30, list: [] };
function poiSection() {
  const L = poiv.list, counts = {};
  for (const it of L) counts[it.ty] = (counts[it.ty] || 0) + 1;
  const q = poiv.q.trim().toLowerCase();
  const shown = L.filter(it => (!poiv.type || it.ty === poiv.type) && (!q || it.n.toLowerCase().includes(q)));
  return `<h2>Points of interest (${L.length})</h2>
    <p class="muted">People, events, works, places and ideas studied in this field and its branches, from Wikipedia's list of vital articles. Placements are proposed by list section and still need review.</p>
    <div class="row seg" role="group" aria-label="Filter by type"><button type="button" class="btn small ${poiv.type ? "ghost" : ""}" data-poitype="" aria-pressed="${!poiv.type}">All</button>${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([k, n]) => `<button type="button" class="btn small ${poiv.type === k ? "" : "ghost"}" data-poitype="${k}" aria-pressed="${poiv.type === k}">${esc(POI_LABEL[k] || k)} (${n})</button>`).join("")}</div>
    <input type="search" id="poiq" placeholder="Find a point of interest" aria-label="Find a point of interest" value="${esc(poiv.q)}" autocomplete="off">
    ${shown.length ? `<div class="subs">${shown.slice(0, poiv.n).map(it => `<a href="#/poi/${it.id}">${esc(it.n)}</a>`).join("")}</div>
      ${shown.length > poiv.n ? `<button class="btn small ghost" type="button" data-poimore>Show more (${shown.length - poiv.n} left)</button>` : ""}` : `<p class="muted">Nothing matches.</p>`}`;
}
const redrawPoi = () => { const s = $("#poisec"); if (s) s.innerHTML = poiSection(); };

// --- one point of interest ------------------------------------------------------------------
async function poiView(id) {
  const [t, p] = await Promise.all([loadTax(), loadPoi()]);
  const it = p.byId[id]; if (!it) return notFound();
  const d = await poiDetail(id).catch(() => null) || {};
  const wiki = `https://en.wikipedia.org/wiki/${encodeURIComponent((d.w || it.n).replace(/ /g, "_"))}`;
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/atlas">Map</a>›<span>${esc(it.n)}</span></div>
    <div style="display:grid;gap:10px"><h1>${esc(it.n)}</h1>
      <div class="pills"><span class="pill">${esc(POI_LABEL[it.ty] || it.ty)}</span><span class="pill draft">Proposed</span>${it.rv ? '<span class="pill">Needs review</span>' : ""}</div>
      ${d.d ? `<p class="lede">${esc(d.d.charAt(0).toUpperCase() + d.d.slice(1))}.</p><p class="muted" style="margin:0">Short description from Wikidata.</p>` : ""}</div>
    <section class="section"><h2>Studied in</h2><p class="muted">A point of interest isn't a discipline: it's something several fields study. These are its proposed homes.</p>
      <ul class="homes">${it.h.map(h => { const r = routes(t, h)[0]; return `<li>${r.map(x => t.dom[x] ? `<a href="#/area/${x.slice(2)}">${esc(nameOf(t, x))}</a>` : `<a href="#/field/${x}">${esc(nameOf(t, x))}</a>`).join(" › ")}${pathsFor(h).length ? " · path ready" : ""}</li>`; }).join("")}</ul></section>
    <section class="section"><h2>Read more</h2><div class="row"><a class="btn small ghost" href="${wiki}" target="_blank" rel="noopener">Wikipedia article</a>${d.q ? `<a class="btn small ghost" href="https://www.wikidata.org/wiki/${esc(d.q)}" target="_blank" rel="noopener">Wikidata ${esc(d.q)}</a>` : ""}</div></section>
    <section class="section"><h2>Source and status</h2>
      <p>Listed in Wikipedia's <a href="${esc(p.meta.url)}" target="_blank" rel="noopener">Vital articles, Level 4</a>${(d.src || []).map(([s, tr]) => `, under ${esc(s)}${tr ? ` › ${esc(tr)}` : ""}`).join(";")} (list revision of ${esc((p.meta.revisions[(d.src || [[""]])[0][0]] || [])[1] || "")}).</p>
      <p>Its homes were proposed from that list section, not checked article by article${it.rv ? ", and its section is broad, so it's in the review queue" : ""}. ${esc(p.meta.licence)}</p>
      <p class="muted">Status: proposed. <button class="linkbtn" type="button" data-feedback>Suggest a correction</button></p></section>
  </div>`;
}
async function mountPoiSection(id) {
  const box = $("#poisec"); if (!box) return;
  const [t, p] = await Promise.all([loadTax(), loadPoi()]);
  if (poiv.field !== id) Object.assign(poiv, { field: id, type: "", q: "", n: 30 });
  poiv.list = poisUnder(t, p, id);
  if (poiv.list.length) box.innerHTML = poiSection(); else box.remove();
}

// --- search everything: paths, works, people who made them, stages, fields, points of interest ---
const srch = { data: null, q: "" };
async function searchData() {
  if (srch.data) return srch.data;
  const [t, p, paths] = await Promise.all([loadTax(), loadPoi().catch(() => null), Promise.all(PATHS.map(async m => ({ m, p: await getPath(m.slug).catch(() => null) })))]);
  return srch.data = { t, p, paths: paths.filter(x => x.p) };
}
function searchResults(q) {
  const D = srch.data; q = q.trim(); const l = q.toLowerCase();
  if (l.length < 2) return `<p class="muted">Type at least two letters. You can search paths, works, authors, fields and people, events or ideas.</p>`;
  const has = s => (s || "").toLowerCase().includes(l);
  const paths = D.paths.filter(x => has(x.m.title));
  const works = D.paths.flatMap(x => x.p.works.filter(w => has(w.title) || has(w.creator)).map(w => ({ x, w }))).slice(0, 25);
  const stages = D.paths.flatMap(x => x.p.stages.filter(s => has(s.name) || has(s.intent)).map(s => ({ x, s }))).slice(0, 10);
  const fields = search(D.t, q, 20), pois = D.p ? searchPoi(D.p, q, 25) : [];
  const group = (title, items) => items.length ? `<section><p class="label">${title} (${items.length})</p><ul class="results">${items.join("")}</ul></section>` : "";
  const out = group("Paths", paths.map(x => `<li><a href="#/path/${x.m.slug}"><b>${markQ(x.m.title, q)}</b><small>${x.p.stages.length} stages · ${x.p.works.length} works</small></a></li>`))
    + group("Works in the paths", works.map(({ x, w }) => `<li><a href="#/path/${x.m.slug}/work/${w.id}"><b>${markQ(w.title, q)}</b><small>${w.creator ? markQ(w.creator, q) + " · " : ""}${esc(x.m.title)}, Stage ${w.stage.num}</small></a></li>`))
    + group("Stages", stages.map(({ x, s }) => `<li><a href="#/path/${x.m.slug}/stage/${s.num}"><b>${markQ(s.name, q)}</b><small>${esc(x.m.title)}, Stage ${s.num}</small></a></li>`))
    + group("Fields of knowledge", fields.map(id => { const e = D.t.entities[id], r = routes(D.t, id)[0];
        return `<li><a href="#/field/${id}"><b>${markQ(e.n, q)}</b><small>${TYPE_LABEL[e.t] || e.t}${r.length > 1 ? " · " + r.slice(0, -1).map(x => esc(nameOf(D.t, x))).join(" › ") : ""}</small></a></li>`; }))
    + group("People, events, works and ideas", pois.map(it => `<li><a href="#/poi/${it.id}"><b>${markQ(it.n, q)}</b><small>${esc(POI_LABEL[it.ty] || it.ty)} · studied in ${it.h.slice(0, 2).map(h => esc(nameOf(D.t, h))).join(", ")}</small></a></li>`));
  return out || `<p class="muted">Nothing matches “${esc(q)}”. Try a shorter or different word.</p>`;
}
async function searchView(q = "") {
  srch.q = decodeURIComponent(q || "");
  await searchData();
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<span>Search</span></div><h1>Search</h1>
    <input type="search" id="searchq" class="bigsearch" placeholder="Search paths, works, fields, people, events…" aria-label="Search everything" value="${esc(srch.q)}" autocomplete="off">
    <div id="searchres" class="stack" aria-live="polite">${searchResults(srch.q)}</div>
  </div>`;
}

// --- settings: appearance, the welcome tour, and resetting progress ------------------------
const THEMES = [["system", "Match my device"], ["light", "Light"], ["dark", "Dark"]];
const getTheme = () => { try { return localStorage.getItem("ascent-theme") || "system"; } catch { return "system"; } };
function setTheme(v) {
  try { localStorage.setItem("ascent-theme", v); } catch { /* storage blocked: this visit only */ }
  if (v === "system") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = v;
}
const resetting = { path: null };
function settingsView() {
  const th = getTheme(), r = resetting.path;
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<span>Settings</span></div><h1>Settings</h1>
    <section class="section"><h2>Appearance</h2>
      <div class="levels" role="radiogroup" aria-label="Theme">${THEMES.map(([v, l]) => `<button type="button" role="radio" class="level${th === v ? " on" : ""}" aria-checked="${th === v}" data-theme-set="${v}">${l}</button>`).join("")}</div></section>
    <section class="section"><h2>Getting started</h2><p>Take the short tour again, and pick new interests for your home page.</p>
      <button class="btn ghost" type="button" data-welcome style="justify-self:start">Replay the welcome tour</button></section>
    <section class="section"><h2>Reset progress</h2>
      <p>Start a path again from the beginning: this clears its ticked works, quiz scores and stages you continued past. Badges and certificates for that path go too. ${auth.user ? "Your account and other paths aren't affected." : "You're not signed in, so this clears the progress kept in this browser."}</p>
      <div class="field"><label for="resetpath">What to reset</label><select id="resetpath"><option value="">Every path</option>${PATHS.map(p => `<option value="${p.slug}">${esc(p.title)}</option>`).join("")}</select></div>
      ${r === null ? `<button class="btn ghost" type="button" data-reset="ask" style="justify-self:start">Reset progress</button>`
        : `<div class="status warn"><b>Are you sure?</b> This clears ${r ? `your progress on ${esc(PATHS.find(p => p.slug === r)?.title || r)}` : "your progress on every path"}. It can't be undone.
          <span class="row"><button class="btn small" type="button" data-reset="yes">Yes, reset</button><button class="btn small ghost" type="button" data-reset="no">Cancel</button></span></div>`}
    </section>
    ${auth.user ? `<section class="section"><h2>Account</h2><p>Your name, sign-out and account deletion are on your <a href="#/account">account page</a>.</p></section>` : ""}
  </div>`;
}
async function resetProgress(path) {
  if (sb && auth.user) {
    const { error } = await sb.rpc("reset_my_progress", { p_path: path || null });
    if (error) return toast(/function|schema cache/i.test(error.message) ? "Reset isn't switched on yet: the site's admin needs to run week6.sql." : `Couldn't reset: ${error.message}`);
  }
  try {
    const key = { "ascent-progress": s => s.split(":")[0], "ascent-skips": s => s.split(":")[0] };
    for (const [k, f] of Object.entries(key)) localStorage.setItem(k, JSON.stringify(path ? JSON.parse(localStorage.getItem(k) || "[]").filter(s => f(s) !== path) : []));
    localStorage.setItem("ascent-attempts", JSON.stringify(path ? JSON.parse(localStorage.getItem("ascent-attempts") || "[]").filter(a => a.path !== path) : []));
  } catch { /* storage blocked */ }
  await loadProgress();
  toast(path ? `Progress on ${PATHS.find(p => p.slug === path)?.title} has been reset` : "All your progress has been reset");
}

// --- one domain: its paths, then all its disciplines --------------------------------------
async function domainView(slug) {
  const D = DOMAINS.find(x => x.slug === slug); if (!D) return notFound();
  const [t] = await Promise.all([loadTax(), liveStats()]); atlas.t = t;
  const ps = PATHS.filter(p => p.doms.includes(slug)), ds = children(t, "d:" + slug);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<span>${esc(D.title)}</span></div>
    <div class="hero" style="${C(D.color)}">${ico(D.icon)}<h1>${esc(D.title)}</h1><p>${esc(D.blurb)}</p></div>
    <section><p class="label">Paths</p>${ps.length ? `<div class="grid">${await Promise.all(ps.map(async m => { const p = await getPath(m.slug).catch(() => null), n = p ? doneCount(m.slug, p.works) : 0, tot = p?.works.length || 0;
      return `<a class="card" href="#/path/${m.slug}" style="${C(m.color)}">${ico(m.icon)}<div style="display:grid;gap:6px"><h2>${esc(m.title)}</h2>${p ? `${bar(n, tot)}<small>${p.stages.length} stages · ${n} of ${tot} works done</small>` : "<small>Not available</small>"}</div></a>`; })).then(a => a.join(""))}</div>`
      : `<p class="soon">Paths in this domain are being written. Explore its fields below in the meantime.</p>`}</section>
    <section><p class="label">Fields in this domain (${ds.length})</p><ul class="tree atlas">${ds.map(f => fieldRow(f)).join("")}</ul></section>
    <a class="btn ghost" href="#/atlas" style="justify-self:start">${ico("tree")}See the whole map</a>
  </div>`;
}

async function pathView(slug) {
  const meta = PATHS.find(p => p.slug === slug); if (!meta) return notFound();
  const p = await getPath(slug);
  const sections = p.blocks.filter(b => b.type === "section" && b.kind !== "internal");
  const about = sections.find(s => s.kind === "about"), goals = sections.find(s => s.kind === "goals");
  const prereq = sections.find(s => /^Before you start/i.test(s.title)); // science paths: what you need, before the climb
  const rest = sections.filter(s => s !== about && s !== goals && s !== prereq);
  const n = doneCount(slug, p.works), nx = nextWork(slug, p), sts = statuses(slug, p);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›${(a => a ? `<a href="#/area/${a.slug}">${esc(a.title)}</a>›` : "")(DOMAINS.find(a => a.slug === meta.doms[0]))}<span>${esc(p.title)}</span></div>
    <div style="display:grid;gap:12px"><h1>${esc(p.title)}</h1><p class="lede">${inline(p.lede)}</p>
      <div class="pills"><span class="pill draft" id="trust">Draft · not yet endorsed</span><span class="pill">${n} of ${p.works.length} works done</span><span class="pill">${p.stages.length} stages</span></div>
      <div class="row"><a class="btn" href="#/path/${slug}/work/${(nx || p.works[0]).id}">${ico("play")}${n ? (nx ? `Continue: ${esc(nx.title)}` : "Review the path") : "Start the path"}</a><a class="btn ghost" href="#/path/${slug}/map">${ico("tree")}Open the map</a>${sts[0]?.state !== "passed" ? `<a class="btn ghost" href="#/path/${slug}/placement">${ico("quiz")}Already know some? Take the placement test</a>` : ""}</div></div>
    ${about ? `<section class="section about"><h2>${esc(about.title)}</h2><div class="txt${/!\[/.test(about.body) ? " with-img" : ""}">${md(about.body)}</div></section>` : ""}
    ${prereq ? `<section class="section prereq"><h2>${esc(prereq.title)}</h2><div class="txt">${md(prereq.body)}</div></section>` : ""}
    <section><p class="label">Stages</p>
      <div class="stages">${p.stages.map(s => { const st = sts[s.index];
        return `<a class="card stage-card${st.state === "locked" ? " locked" : ""}" href="#/path/${slug}/stage/${s.num}" style="${C(stageColor(s))}">
        <span class="row" style="justify-content:space-between;align-items:center"><small><span class="stepno" aria-hidden="true">${s.num}</span>Stage ${s.num} of ${p.stages.length} · ${esc(s.level || "")}</small>${chip(st)}</span>
        <div style="display:grid;gap:6px"><h3>${esc(s.name)}</h3><small>${inline(s.intent || "")}</small><div class="dots">${s.works.map(w => `<i class="${isDone(slug, w.id) ? "on" : ""}"></i>`).join("")}</div></div></a>`; }).join("")}</div>
      ${(m => `<a class="card mastery-card${m.ready ? "" : " locked"}" href="#/path/${slug}/${m.passed ? "certificate" : "mastery"}" style="${C(meta.color)}">
        <span class="row" style="justify-content:space-between;align-items:center"><small>Final · Mastery</small>${m.passed ? '<span class="chip ok">Earned</span>' : ""}</span>
        <div style="display:grid;gap:6px"><h3>${ico("trophy")} Mastery check</h3><small>${m.passed ? "Certificate earned: see it" : m.ready ? `Ready: take the grand quiz (${pct(MASTERY_MARK)} to pass)` : `Pass all ${p.stages.length} stages to unlock: ${m.left} to go`}</small></div></a>`)(mastery(slug, p))}
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
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
async function mountQuizRun(slug) {
  const box = $("[data-quizrun]"); if (!box) return;
  const p = await getPath(slug); const w = p.works.find(x => x.id === box.dataset.quizrun);
  runQuiz(box, { slug, p, w });
}
function runQuiz(box, ctx) {
  const { slug, p, w } = ctx, qs = w.quiz, color = stageColor(w.stage);
  let i = 0, right = 0;
  const show = () => {
    const q = qs[i], opts = q.kind === "mc" ? shuffle(q.opts) : []; // options are written correct-first, so shuffle them
    box.innerHTML = `<div class="qprog"><i style="width:${(i / qs.length) * 100}%;background:var(--${color}-ink)"></i></div>
      <div class="qcard"><span class="kind">${q.kind === "mc" ? "Choose the answer" : "Fill in the blank"} · ${i + 1} of ${qs.length}</span>${q.from ? `<span class="from">About: ${esc(q.from)}</span>` : ""}
        <h2 class="qt">${q.kind === "mc" ? inline(q.q) : inline(q.q).replace(/_{3,}|<strong>_<\/strong>|<em>_<\/em>/, '<input type="text" id="blank" aria-label="Your answer" autocomplete="off" spellcheck="false">')}</h2>
        ${q.kind === "mc" ? `<div class="opts">${opts.map((o, k) => `<button type="button" data-opt="${k}">${inline(o.text)}</button>`).join("")}</div>` : ""}</div>
      <div class="qfoot"><button class="btn wide" type="button" data-check disabled>Check</button></div>`;
    const check = box.querySelector("[data-check]");
    let pick = null;
    box.querySelectorAll("[data-opt]").forEach(b => b.addEventListener("click", () => {
      box.querySelectorAll("[data-opt]").forEach(x => x.classList.remove("picked")); b.classList.add("picked"); pick = +b.dataset.opt; check.disabled = false; }));
    const inp = box.querySelector("#blank");
    if (inp) { inp.addEventListener("input", () => (check.disabled = !inp.value.trim())); inp.addEventListener("keydown", e => { if (e.key === "Enter" && inp.value.trim()) check.click(); }); setTimeout(() => inp.focus(), 50); }
    check.addEventListener("click", () => {
      const ok = q.kind === "mc" ? opts[pick].ok : blankOk(q, inp.value);
      if (ok) right++;
      const shown = q.kind === "mc" ? inline(q.opts.find(o => o.ok).text) : esc(q.shown);
      box.querySelectorAll("[data-opt]").forEach((b, k) => { b.disabled = true; if (opts[k].ok) b.classList.add("right"); else if (k === pick) b.classList.add("wrong"); });
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
    try { pass = await recordAttempt(slug, w.id, right, qs.length, ctx.mark); }
    catch (err) { box.innerHTML = `<p class="status warn">${right} of ${qs.length} right, but your score couldn't be saved: ${esc(err.message)}</p>`; return; }
    if (ctx.onDone) return ctx.onDone(pass, right);
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

// --- placement test: 4 questions per stage, in order; 3 of 4 passes the stage -------
// Stops at the first stage not passed. Passed sections are saved as quiz attempts
// (work id "placement-s<N>"), which status.js counts as passing that stage.
const PLACE_Q = 4;
// Questions about how to use the path ("How does the path suggest using it?", "What does it
// cost?") only make sense inside a lesson, so placement and mastery quizzes leave them out.
const LESSON_ONLY = /\b((how|why|when|where|which) (does|part does|book does) the path|the path (suggests?|places?|says|include)|does the path|according to the path|in this path|the task|the exercise|does (it|the \w+) cost|best way to use)\b/i;
function placementSample(s, n = PLACE_Q) {
  // round-robin over the stage's works so the questions cover as many works as possible;
  // each question remembers its work, so "Who presents it?" says what "it" is
  const pools = shuffle(s.works.filter(w => w.quiz.length)).map(w => shuffle(w.quiz.filter(q => !LESSON_ONLY.test(q.q))).map(q => ({ ...q, from: w.title }))), out = [];
  for (let r = 0; out.length < n && pools.some(q => q[r]); r++) pools.forEach(q => q[r] && out.length < n && out.push(q[r]));
  return out;
}
async function placementView(slug) {
  const meta = PATHS.find(p => p.slug === slug); if (!meta) return notFound();
  const p = await getPath(slug);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Placement test</span></div>
    <div data-placement="${slug}"><div class="hero" style="${C(meta.color)}"><h1>Placement test</h1>
      <p>Already know some ${esc(p.title.toLowerCase())}? Answer ${PLACE_Q} questions for each stage, starting with Stage 1. Get ${Math.ceil(PLACE_Q * PASS_MARK)} of ${PLACE_Q} right and that stage counts as passed, so you can skip ahead. The test stops at the first stage you don't pass, and you can take it again any time.</p>
      <button class="btn" type="button" data-placestart>${ico("play")}Start</button></div></div></div>`;
}
async function mountPlacement(slug) {
  const root = $("[data-placement]"); if (!root) return;
  const p = await getPath(slug);
  const startAt = Math.max(0, statuses(slug, p).findIndex(st => st.state !== "passed"));
  const runStage = i => {
    const s = p.stages[i], qs = placementSample(s);
    if (!qs.length) return result(i);
    root.innerHTML = `<p class="label">Placement test · Stage ${s.num} of ${p.stages.length}: ${esc(s.name)}</p><div class="quizrun"></div>`;
    runQuiz(root.querySelector(".quizrun"), { slug, p, w: { id: placementId(s.num), quiz: qs, stage: s },
      onDone: pass => pass && i + 1 < p.stages.length ? runStage(i + 1) : result(pass ? i + 1 : i) });
  };
  const result = n => {
    const s = p.stages[n];
    root.innerHTML = `<div class="qresult${n ? " pass" : ""}" style="${n ? C(stageColor(p.stages[n - 1])) : ""}">
      <span class="medal small">${ico(n ? "check" : "quiz")}</span>
      <h1>${s ? `Start at Stage ${s.num}` : "All stages passed"}</h1>
      <p>${n ? `You placed out of ${n === 1 ? "Stage 1" : `Stages 1 to ${n}`}.` : "Stage 1 is the right place to begin."} ${s ? `Stage ${s.num}, ${esc(s.name)}, is waiting for you.` : "You can still read any work you like."}</p></div>
      <div class="stack" style="gap:10px">${s ? `<a class="btn wide" href="#/path/${slug}/stage/${s.num}">Go to Stage ${s.num}</a>` : ""}<a class="btn wide ghost" href="#/path/${slug}">Back to the path</a></div>`;
  };
  if (startAt >= p.stages.length) return result(p.stages.length);
  root.querySelector("[data-placestart]")?.addEventListener("click", () => runStage(startAt));
}

// --- mastery: the grand quiz (40 questions across every stage, 80%) and the certificate ----
// Saved as a quiz attempt with work id "mastery"; status.js masteryState() decides.
const MASTERY_Q = 40;
const mastery = (slug, p) => masteryState(p, accOf(slug));
function masterySample(p) {
  // spread the questions across the stages, in order, so the quiz climbs like the path
  const per = p.stages.map((s, i) => Math.floor(MASTERY_Q / p.stages.length) + (i < MASTERY_Q % p.stages.length ? 1 : 0));
  return p.stages.flatMap((s, i) => placementSample(s, per[i]));
}
async function masteryView(slug) {
  const meta = PATHS.find(x => x.slug === slug); if (!meta) return notFound();
  const p = await getPath(slug), m = mastery(slug, p), b = m.best;
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Mastery check</span></div>
    <div data-mastery="${slug}"><div class="hero" style="${C(meta.color)}"><span class="medal small">${ico("trophy")}</span><h1>Mastery check: ${esc(p.title)}</h1>
      <p>The grand quiz: ${MASTERY_Q} questions from all ${p.stages.length} stages, getting harder as it goes. Score ${pct(MASTERY_MARK)} to earn your certificate. You can retake it as often as you like.</p>
      ${b ? `<p><b>Your best so far: ${b.score} of ${b.total} (${pct(b.score / b.total)}).</b></p>` : ""}
      ${m.passed ? `<a class="btn" href="#/path/${slug}/certificate">${ico("trophy")}See your certificate</a><button class="btn ghost" type="button" data-masterystart>Take it again</button>`
        : m.ready ? `<button class="btn" type="button" data-masterystart>${ico("play")}Start the grand quiz</button>`
        : `<div class="status lock"><b>Pass every stage first.</b> Still to do: ${m.leftStages.map(s => `<a href="#/path/${slug}/stage/${s.num}">Stage ${s.num}, ${esc(s.name)}</a>`).join("; ")}. Already know them? <a href="#/path/${slug}/placement">Take the placement test</a>.</div>`}
    </div></div>
    <p class="muted">The written parts of the mastery check (the source analysis and capstone essay) will be added when reviewer marking opens. Until then, the certificate records the grand quiz.</p>
  </div>`;
}
async function mountMastery(slug) {
  const root = $("[data-mastery]"); if (!root) return;
  const p = await getPath(slug), color = PATHS.find(x => x.slug === slug).color;
  root.addEventListener("click", e => {
    if (!e.target.closest("[data-masterystart]") || !mastery(slug, p).ready) return;
    root.innerHTML = `<p class="label">Grand quiz · ${esc(p.title)}</p><div class="quizrun"></div>`;
    const qs = masterySample(p), total = qs.length;
    runQuiz(root.querySelector(".quizrun"), { slug, p, w: { id: masteryId, quiz: qs, stage: p.stages[p.stages.length - 1] }, mark: MASTERY_MARK,
      onDone: (pass, right) => {
        const need = Math.ceil(total * MASTERY_MARK);
        root.innerHTML = `<div class="qresult ${pass ? "pass" : "fail"}" style="${pass ? C(color) : ""}"><span class="medal small">${ico(pass ? "trophy" : "quiz")}</span>
          <h1>${right} of ${total}</h1><p>${pass ? "You passed the grand quiz." : `Not yet: you need ${need}. Look back at the stages where you missed questions, then try again.`}</p></div>
          <div class="stack" style="gap:10px">${pass ? `<a class="btn wide" href="#/path/${slug}/certificate">See your certificate</a>` : `<button class="btn wide" type="button" data-masterystart>Try again</button>`}
          <a class="btn wide ghost" href="#/path/${slug}">Back to the path</a></div>`;
        if (pass) celebrateMastery(slug, p, color);
      } });
  });
}
function celebrateMastery(slug, p, color) {
  $("#layer").innerHTML = `<div class="scrim"></div><div class="full celebrate enter" style="${C(color)}" role="dialog" aria-modal="true" aria-label="Mastery earned"><canvas id="confetti"></canvas>
    <div class="medal">${ico("trophy")}</div><small style="font-weight:700">Mastery badge earned</small><h1>${esc(p.title)}: mastery</h1>
    <p>You've passed every stage and the grand quiz. Your certificate is ready.</p>
    <div style="display:grid;gap:10px;width:100%"><a class="btn" href="#/path/${slug}/certificate" data-close>See your certificate</a><button class="btn ghost" type="button" data-close>Close</button></div></div>`;
  confetti();
}
const certName = () => { try { return localStorage.getItem("ascent-certname") || auth.profile?.display_name || ""; } catch { return auth.profile?.display_name || ""; } };
const certDate = at => (at ? new Date(at) : new Date()).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
async function certView(slug) {
  const meta = PATHS.find(x => x.slug === slug); if (!meta) return notFound();
  const p = await getPath(slug), m = mastery(slug, p);
  if (!m.passed) return `<div class="stack"><div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Certificate</span></div>
    <h1>No certificate yet</h1><p>Pass every stage and the grand quiz to earn it.</p><a class="btn" href="#/path/${slug}/mastery" style="justify-self:start">Go to the mastery check</a></div>`;
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Certificate</span></div>
    <div class="cert" style="${C(meta.color)}" data-cert="${slug}" data-score="${m.best.score}" data-total="${m.best.total}" data-date="${esc(certDate(m.best.at))}">${certInner(p.title, certName(), m.best, certDate(m.best.at), meta.icon)}</div>
    <div class="field"><label for="certname">Name on the certificate</label><input id="certname" value="${esc(certName())}" autocomplete="name" maxlength="60"></div>
    <div class="row"><button class="btn" type="button" data-certimg>${ico("trophy")}Download as an image</button>${navigator.share ? `<button class="btn ghost" type="button" data-certshare>Share</button>` : ""}</div>
    <p class="muted">The image is made on your device. Ascent doesn't yet offer a verification link; that comes with the written parts of the mastery check.</p>
  </div>`;
}
function certInner(title, name, b, date, icon) {
  return `<span class="medal small">${ico(icon)}</span><small>Ascent · Certificate of mastery</small><h1>${esc(title)}</h1>
    <p>This certifies that</p><h2 class="certname">${esc(name) || "Your name"}</h2>
    <p>passed every stage of the ${esc(title)} path and its grand quiz, scoring ${b.score} of ${b.total}.</p><small>${esc(date)}</small>`;
}
// the certificate as a PNG, drawn on a canvas with the page's own colours
function certCanvas(card) {
  const cs = getComputedStyle(card), W = 1200, H = 800, cv = document.createElement("canvas"); cv.width = W; cv.height = H;
  const x = cv.getContext("2d"), ink = cs.color, bg = cs.backgroundColor, font = getComputedStyle(document.body).fontFamily;
  x.fillStyle = bg; x.fillRect(0, 0, W, H); x.strokeStyle = ink; x.lineWidth = 6; x.strokeRect(30, 30, W - 60, H - 60); x.lineWidth = 2; x.strokeRect(48, 48, W - 96, H - 96);
  x.fillStyle = ink; x.textAlign = "center";
  const t = (s, y, size, w = 700) => { x.font = `${w} ${size}px ${font}`; x.fillText(s, W / 2, y, W - 160); };
  const d = card.dataset, name = $("#certname")?.value.trim() || "Your name", title = card.querySelector("h1").textContent;
  t("ASCENT · CERTIFICATE OF MASTERY", 150, 26); t(title, 260, 84); t("This certifies that", 350, 30, 400); t(name, 440, 64);
  t(`passed every stage of the ${title} path and its grand quiz,`, 530, 30, 400); t(`scoring ${d.score} of ${d.total}.`, 575, 30, 400);
  t(d.date, 670, 28); t("wasiulbahar.com/ascent", 715, 22, 400);
  return cv;
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
      <div class="bdg${prefs() ? "" : " off"}"><div class="m" style="${C("lilac")}">${ico("globe")}</div>Explorer: took the tour</div>
      <div class="bdg${anyQuiz ? "" : " off"}"><div class="m" style="${C("butter")}">${ico("spark")}</div>First quiz passed</div>
      ${rows.map(r => { const all3 = r.sts.every(s => s.state === "passed"); return `<div class="bdg${all3 ? "" : " off"}"><div class="m" style="${C(r.color)}">${ico(r.icon)}</div>${esc(r.title)}: every stage passed</div>`; }).join("")}
      ${rows.map(r => `<div class="bdg${mastery(r.slug, r.p).passed ? "" : " off"}"><div class="m" style="${C(r.color)}">${ico("trophy")}</div>${esc(r.title)}: mastery</div>`).join("")}
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
  return `<div class="story"><div class="tapzones${c.last ? " backonly" : ""}">${n ? `<button type="button" data-step="-1" aria-label="Previous card"></button>` : "<span></span>"}${c.last ? "" : `<button type="button" data-step="1" aria-label="Next card"></button>`}</div>
      <span class="kicker">${esc(c.kicker)}</span>${c.title ? `<h2>${esc(c.title)}</h2>` : ""}<div class="storytxt">${c.html}</div></div>
    ${c.last ? `<div class="row" style="flex-direction:column">${w.quiz.length ? `<a class="btn" href="#/path/${slug}/work/${w.id}/quiz">Take the quiz</a>` : ""}
        <a class="btn ghost" href="#/path/${slug}/work/${w.id}/get">${esc(GET_TITLE[w.type] || "Get it")}: where to find it</a>
        <button class="btn ghost donebtn" type="button" data-done="${w.id}" aria-pressed="${done}">${done ? ico("check") + DONE_VERB[w.type] : `Mark as ${DONE_VERB[w.type].toLowerCase()}`}</button>
        ${cards.length > 1 ? `<button class="linkbtn" type="button" data-step="-1">← Back to the previous card</button>` : ""}</div>`
      : `<p class="hint">Tap the right side, or press →, to continue. Tap the left side, or press ←, to go back</p>`}`;
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
    <button class="btn ghost" type="button" data-welcome>Replay the welcome tour</button>
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
  [/^#\/area\/([\w-]+)$/, m => domainView(m[1]), "home"],
  [/^#\/field\/([\w-]+)$/, m => fieldView(m[1]), "atlas"],
  [/^#\/poi\/([\w-]+)$/, m => poiView(m[1]), "atlas"],
  [/^#\/path\/([\w-]+)$/, m => pathView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/map$/, m => mapView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/stage\/(\d+)$/, m => stageView(m[1], +m[2]), "home"],
  [/^#\/path\/([\w-]+)\/work\/([\w-]+)$/, m => workView(m[1], m[2]), "home"],
  [/^#\/path\/([\w-]+)\/work\/([\w-]+)\/(get|understand|analyse|quiz|scholar)$/, m => stepView(m[1], m[2], m[3]), "home"],
  [/^#\/path\/([\w-]+)\/placement$/, m => placementView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/mastery$/, m => masteryView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/certificate$/, m => certView(m[1]), "home"],
  [/^#\/atlas$/, () => atlasView(), "atlas"],
  [/^#\/collection$/, () => collectionView(), "collection"],
  [/^#\/settings$/, () => settingsView(), "settings"],
  [/^#\/search(?:\?q=(.*))?$/, m => searchView(m[1]), "home"],
  [/^#\/admin(?:\/(\w+))?$/, m => adminView(m[1]), "admin"],
  [/^#\/review(?:\/([\w-]+))?$/, m => reviewView(m[1]), "review"],
  [/^#\/privacy$/, () => privacyView(), "home"],
  [/^#\/signin$/, () => signinView(), "account"],
  [/^#\/account$/, () => accountView(), "account"],
];

function renderNav(tab) {
  const items = [["#/", "Home", "home", "home"], ["#/atlas", "Map", "tree", "atlas"], ["#/collection", "Collection", "trophy", "collection"], ["#/settings", "Settings", "gear", "settings"]];
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
  if (/\/placement$/.test(hash)) mountPlacement(m[1]);
  if (/\/mastery$/.test(hash)) mountMastery(m[1]);
  if (/^#\/field\//.test(hash)) mountPoiSection(m[1]);
}
const refresh = () => route({ keepScroll: true });

document.addEventListener("submit", async e => {
  if (e.target.id === "homesearch") { e.preventDefault(); location.hash = `#/search?q=${encodeURIComponent($("#homeq").value.trim())}`; return; }
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
  if (d.tstep) { const n = tour.n + +d.tstep; if (n < 0 || n >= TOUR_N) return; if (n === TOUR_N - 1) savePrefs(); tour.n = n; drawTour(+d.tstep); return; }
  if (d.tarea) { tour.areas.has(d.tarea) ? tour.areas.delete(d.tarea) : tour.areas.add(d.tarea); const on = tour.areas.has(d.tarea);
    t.classList.toggle("on", on); t.setAttribute("aria-pressed", on); $("#layer [data-tstep='1']").textContent = tour.areas.size ? "Next" : "Show me everything"; return; }
  if (d.tlevel) { tour.level = +d.tlevel; document.querySelectorAll("#layer [data-tlevel]").forEach(b => { const on = +b.dataset.tlevel === tour.level; b.classList.toggle("on", on); b.setAttribute("aria-checked", on); }); return; }
  if (d.atlas) { atlas.open.has(d.atlas) ? atlas.open.delete(d.atlas) : atlas.open.add(d.atlas); const body = $("#atlasbody");
    if (body) { body.innerHTML = atlasBody(); } else { await refresh(); } $(`[data-atlas="${d.atlas}"]`)?.focus(); return; }
  if (d.themeSet) { setTheme(d.themeSet); refresh(); return; }
  if (d.reset) {
    if (d.reset === "ask") resetting.path = $("#resetpath").value;
    else if (d.reset === "yes") { const p = resetting.path; resetting.path = null; await resetProgress(p); }
    else resetting.path = null;
    refresh(); return;
  }
  if ("poitype" in d) { poiv.type = d.poitype; poiv.n = 30; redrawPoi(); $(`[data-poitype="${d.poitype}"]`)?.focus(); return; }
  if ("poimore" in d) { poiv.n += 60; redrawPoi(); return; }
  if (d.atlasview) { atlas.view = d.atlasview; atlas.open.clear(); refresh(); return; }
  if ("certimg" in d || "certshare" in d) {
    const card = $("[data-cert]"), cv = certCanvas(card), file = `ascent-${card.dataset.cert}-certificate.png`;
    if ("certimg" in d) { const a = document.createElement("a"); a.href = cv.toDataURL("image/png"); a.download = file; a.click(); return; }
    cv.toBlob(async b => { const f = new File([b], file, { type: "image/png" });
      try { await navigator.share(navigator.canShare?.({ files: [f] }) ? { files: [f], title: "My Ascent certificate" } : { title: "Ascent", url: "https://wasiulbahar.com/ascent/" }); } catch { /* share cancelled */ } });
    return;
  }
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
  if ($("#layer .full") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { const k = e.key === "ArrowRight" ? 1 : -1; ($(`[data-step="${k}"]`) || $(`[data-tstep="${k}"]`))?.click(); }
});

document.addEventListener("input", e => {
  if (e.target.id === "atlasq") { atlas.q = e.target.value; $("#atlasbody").innerHTML = atlasBody(); }
  if (e.target.id === "searchq") { srch.q = e.target.value; $("#searchres").innerHTML = searchResults(srch.q); history.replaceState(null, "", `#/search?q=${encodeURIComponent(srch.q)}`); lastRoute = location.hash; }
  if (e.target.id === "poiq") { poiv.q = e.target.value; poiv.n = 30; const pos = e.target.selectionStart; redrawPoi(); const i = $("#poiq"); i.focus(); i.setSelectionRange(pos, pos); }
  if (e.target.id === "certname") { const v = e.target.value.trim(); $(".certname").textContent = v || "Your name"; try { localStorage.setItem("ascent-certname", v); } catch { /* storage blocked */ } }
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
