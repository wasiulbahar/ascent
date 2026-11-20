// Ascent app: hash router and screens. Content comes from paths/*.md (parsed by content.js).
import { parsePath, norm, PASS_MARK } from "./content.js?v=3";
import { PATHS } from "./paths.js?v=3";
import { sb, auth, initAuth, sendLink, signOut } from "./auth.js?v=3";
import { loadProgress, isDone, setDone } from "./progress.js?v=3";

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const C = c => `background:var(--${c});color:var(--${c}-ink)`;
const STAGE_COLORS = ["mint", "lilac", "peach", "sky", "butter", "rose"];
const ACCESS = { free: ["free", "Free"], "free-and-paid": ["mixed", "Free + paid"], paid: ["paid", "Paid"] };
const VERB = { read: "Read", listen: "Listen", watch: "Watch", course: "Course" };
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
};
const ico = (k, cls = "i") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${IC[k] || IC.read}</svg>`;

function toast(m) { const t = $("#toast"); t.textContent = m; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => (t.hidden = true), 2600); }

// --- content -----------------------------------------------------------------
const cache = new Map();
async function getPath(slug) {
  if (!cache.has(slug)) {
    cache.set(slug, fetch(`paths/${slug}.md?v=3`).then(r => { if (!r.ok) throw new Error("This path could not be loaded."); return r.text(); }).then(parsePath));
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
    <section><p class="label">Paths</p>
      <div class="grid">${paths.map(p => { const n = p.data ? doneCount(p.slug, p.data.works) : 0, t = p.data?.works.length || 0;
        return `<a class="card" href="#/path/${p.slug}" style="${C(p.color)}">${ico(p.icon)}
        <div style="display:grid;gap:6px"><small>${esc(p.domain)}</small><h2>${esc(p.title)}</h2>${p.data ? `${bar(n, t)}<small>${n} of ${t} works done</small>` : "<small>Not available</small>"}</div></a>`; }).join("")}</div>
    </section>
  </div>`;
}

async function pathView(slug) {
  const meta = PATHS.find(p => p.slug === slug); if (!meta) return notFound();
  const p = await getPath(slug);
  const sections = p.blocks.filter(b => b.type === "section" && b.kind !== "internal");
  const about = sections.find(s => s.kind === "about"), goals = sections.find(s => s.kind === "goals");
  const rest = sections.filter(s => s !== about && s !== goals);
  const n = doneCount(slug, p.works), nx = nextWork(slug, p);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<span>${esc(p.title)}</span></div>
    <div style="display:grid;gap:12px"><h1>${esc(p.title)}</h1><p class="lede">${inline(p.lede)}</p>
      <div class="pills"><span class="pill draft">Draft · not yet endorsed</span><span class="pill">${n} of ${p.works.length} works done</span><span class="pill">${p.stages.length} stages</span></div>
      <div class="row"><a class="btn" href="#/path/${slug}/work/${(nx || p.works[0]).id}">${ico("play")}${n ? (nx ? `Continue: ${esc(nx.title)}` : "Review the path") : "Start the path"}</a><a class="btn ghost" href="#/path/${slug}/map">${ico("tree")}Open the map</a></div></div>
    ${about ? `<section class="section about"><h2>${esc(about.title)}</h2><div class="txt${/!\[/.test(about.body) ? " with-img" : ""}">${md(about.body)}</div></section>` : ""}
    <section><p class="label">Stages</p>
      <div class="stages">${p.stages.map(s => { const d = doneCount(slug, s.works);
        return `<a class="card stage-card" href="#/path/${slug}/stage/${s.num}" style="${C(stageColor(s))}">
        <small>Stage ${s.num} · ${esc(s.level || "")}${d === s.works.length ? " · complete" : ""}</small>
        <div style="display:grid;gap:6px"><h3>${esc(s.name)}</h3><small>${inline(s.intent || "")}</small><div class="dots">${s.works.map(w => `<i class="${isDone(slug, w.id) ? "on" : ""}"></i>`).join("")}</div></div></a>`; }).join("")}</div>
    </section>
    ${goals ? `<section class="section goals"><h2>${esc(goals.title)}</h2><div class="txt">${md(goals.body)}</div></section>` : ""}
    ${rest.map(s => `<section class="section"><h2>${esc(s.title)}</h2><div class="txt">${md(s.body, { linkPaths: s.kind === "branches", here: slug })}</div></section>`).join("")}
  </div>`;
}

async function stageView(slug, num) {
  const p = await getPath(slug); const s = p.stages[num - 1]; if (!s) return notFound();
  const color = stageColor(s), d = doneCount(slug, s.works);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Stage ${s.num}</span></div>
    <div class="hero" style="${C(color)}"><small style="font-weight:700">Stage ${s.num} · Level: ${esc(s.level || "")} · ${d} of ${s.works.length} done</small><h1>${esc(s.name)}</h1><p>${inline(s.intent || "")}</p>${bar(d, s.works.length)}</div>
    ${s.intro ? `<div class="txt">${md(s.intro)}</div>` : ""}
    <section><p class="label">Works in this stage</p><div class="worklist">${s.works.map(w => `<a class="work${isDone(slug, w.id) ? " isdone" : ""}" href="#/path/${slug}/work/${w.id}">
      <span class="ic" style="${C(color)}">${ico(w.type)}</span><span><b>${esc(w.title)}${accessBadge(w.access)}</b><span>${esc([VERB[w.type], w.creator, w.length].filter(Boolean).join(" · "))}</span></span>
      ${isDone(slug, w.id) ? `<span class="tick" title="${DONE_VERB[w.type]}">${ico("check")}</span>` : ico("chev")}</a>`).join("")}</div></section>
    ${s.extras.map(x => `<section class="layer"><span class="tag" style="${C(color)}">${esc(x.title)}</span><div class="txt">${md(x.body)}</div></section>`).join("")}
    ${s.gate ? `<p class="muted">To pass this stage: ${esc(s.gate)}</p>` : ""}
    <a class="btn ghost" href="#/path/${slug}/map" style="justify-self:start">${ico("tree")}See it on the map</a>
  </div>`;
}

const LAYER_COLOR = { Introduction: "mint", Understand: "sky", Analyse: "lilac", Scholar: "butter", Quiz: "peach" };
async function workView(slug, id) {
  const p = await getPath(slug); const w = p.works.find(x => x.id === id); if (!w) return notFound();
  const s = w.stage, i = p.works.indexOf(w), prev = p.works[i - 1], next = p.works[i + 1];
  const facts = [VERB[w.type], w.creator, w.year, w.length].filter(Boolean).join(" · ");
  const done = isDone(slug, w.id), hasStory = w.layers.some(l => l.name === "Introduction");
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<a href="#/path/${slug}/stage/${s.num}">Stage ${s.num}</a></div>
    <div class="hero" style="${C(stageColor(s))}"><small style="font-weight:700">${esc(facts)}</small><h1>${esc(w.title)}${accessBadge(w.access)}</h1>
      ${w.edition ? `<p><b>Edition:</b> ${inline(w.edition)}</p>` : ""}${w.access.note ? `<p><b>Where to get it:</b> ${inline(w.access.note)}</p>` : ""}
      <div class="row">${hasStory ? `<button class="btn" type="button" data-story="${w.id}">${ico("play")}Start with the story</button>` : ""}
        <button class="btn ghost donebtn" type="button" data-done="${w.id}" aria-pressed="${done}">${done ? ico("check") : ""}${done ? DONE_VERB[w.type] : `Mark as ${DONE_VERB[w.type].toLowerCase()}`}</button></div></div>
    ${w.layers.map(l => l.name === "Quiz" ? `<section class="layer" id="quiz"><span class="tag" style="${C("peach")}">Quiz</span><div class="quiz" data-quiz="${w.id}"></div></section>`
      : `<section class="layer"><span class="tag" style="${C(LAYER_COLOR[l.name])}">${l.name}</span><div class="txt">${md(l.body)}</div></section>`).join("")}
    <nav class="pager">${prev ? `<a href="#/path/${slug}/work/${prev.id}">‹ ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="#/path/${slug}/work/${next.id}">${esc(next.title)} ›</a>` : ""}</nav>
  </div>`;
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
  const open = mapOpen.get(slug), n = doneCount(slug, p.works);
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
        <ul>${p.stages.map(s => { const ex = open.has(s.num), d = doneCount(slug, s.works), full = d === s.works.length;
          const side = branches.filter(b => b.after === s.num);
          return `<li><button class="node" type="button" style="${C(stageColor(s))}" data-toggle="${s.num}" aria-expanded="${ex}">
            <span class="ni">${ico(full ? "check" : "spark")}</span><span><b>Stage ${s.num}: ${esc(s.name)}</b><small>${d} of ${s.works.length} done · ${esc(s.level || "")}${side.length ? ` · ${side.length} side branch${side.length > 1 ? "es" : ""}` : ""}</small></span>${ico("chev", "i chev")}</button>
            ${ex ? `<ul>${s.works.map(w => { const dn = isDone(slug, w.id), at = w === nx;
              return `<li><a class="node wn${dn ? " done" : ""}${at ? " here" : ""}" href="#/path/${slug}/work/${w.id}"><span class="ni" style="${C(stageColor(s))}">${ico(dn ? "check" : w.type)}</span><span><b>${esc(w.title)}</b><small>${esc([w.creator, w.length].filter(Boolean).join(" · "))}${at ? " · you are here" : ""}</small></span></a></li>`; }).join("")}
              ${side.map(b => `<li class="br"><span class="node branch" style="color:var(--${stageColor(s)}-ink)"><span class="ni" style="${C(stageColor(s))}">${ico("branch")}</span><span><b>${linkPathNames(esc(b.name), slug)}</b><small>Side branch · ${inline(b.works)}</small></span></span></li>`).join("")}</ul>` : ""}</li>`; }).join("")}
          ${bridges.length ? `<li class="br"><span class="node branch" style="color:var(--muted)"><span class="ni">${ico("link")}</span><span><b>Bridges to other subjects</b><small>Where this path connects</small></span></span>
            <ul>${bridges.map(b => `<li class="br"><span class="node branch" style="color:var(--sky-ink)"><span class="ni" style="${C("sky")}">${ico("link")}</span><span><b>${linkPathNames(esc(b.name), slug)}</b><small>${inline(b.text)}</small></span></span></li>`).join("")}</ul></li>` : ""}
        </ul></li></ul>
    </div>
  </div>`;
}

// --- quiz ------------------------------------------------------------------------
function mountQuizzes(slug) {
  document.querySelectorAll("[data-quiz]").forEach(async box => {
    const p = await getPath(slug); renderQuiz(box, p.works.find(x => x.id === box.dataset.quiz).quiz);
  });
}
function renderQuiz(box, qs) {
  box.innerHTML = ""; let right = 0, done = 0;
  const score = document.createElement("div"); score.className = "score";
  const update = () => {
    if (done < qs.length) { score.className = "score"; score.textContent = `${done} of ${qs.length} answered · pass mark ${PASS_MARK * 100}%`; return; }
    const pass = right / qs.length >= PASS_MARK;
    score.className = "score " + (pass ? "pass" : "fail");
    score.innerHTML = pass ? `${right} of ${qs.length} right. Passed.`
      : `${right} of ${qs.length} right. You haven't finished this work properly yet. <button class="btn small ghost" type="button">Retry</button>`;
    score.querySelector("button")?.addEventListener("click", () => renderQuiz(box, qs));
  };
  for (const q of qs) {
    const d = document.createElement("div"); d.className = "qq";
    const fb = document.createElement("div"); fb.className = "fb"; fb.hidden = true;
    const answer = (ok, shown) => { done++; if (ok) right++; fb.hidden = false; fb.className = "fb " + (ok ? "ok" : "no"); fb.innerHTML = (ok ? "Right. " : `Not quite. The answer is ${shown}. `) + inline(q.why); update(); };
    if (q.kind === "mc") {
      d.innerHTML = `<span class="kind">Multiple choice</span><div class="qt">${inline(q.q)}</div><div class="opts"></div>`;
      const opts = d.querySelector(".opts");
      q.opts.forEach(o => { const b = document.createElement("button"); b.type = "button"; b.innerHTML = inline(o.text); opts.append(b);
        b.addEventListener("click", () => { opts.querySelectorAll("button").forEach((x, k) => { x.disabled = true; if (q.opts[k].ok) x.classList.add("right"); });
          if (!o.ok) b.classList.add("wrong"); answer(o.ok, `“${inline(q.opts.find(x => x.ok)?.text || "")}”`); }); });
    } else {
      d.innerHTML = `<span class="kind">Fill in the blank</span><div class="qt">${inline(q.q).replace(/_{3,}|<strong>_<\/strong>|<em>_<\/em>/, '<input type="text" aria-label="Your answer" autocomplete="off">')}<button type="button" class="go">Check</button></div>`;
      const inp = d.querySelector("input"), go = d.querySelector(".go");
      const check = () => { if (!inp.value.trim()) { inp.focus(); return; } const ok = q.answers.includes(norm(inp.value)); inp.disabled = go.disabled = true; answer(ok, `“${esc(q.shown)}”`); };
      go.addEventListener("click", check); inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    }
    d.append(fb); box.append(d);
  }
  box.append(score); update();
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
  drawStory(true);
}
function drawStory(fresh = false) {
  const { w, n, cards, slug } = story, c = cards[n], done = isDone(slug, w.id);
  $("#layer").innerHTML = `<div class="scrim" data-close></div><div class="full${fresh ? " enter" : ""}" style="${C(stageColor(w.stage))}" role="dialog" aria-modal="true" aria-label="${esc(w.title)}">
    <div class="segs">${cards.map((_, k) => `<i class="${k <= n ? "on" : ""}"></i>`).join("")}</div>
    <div class="fullhead"><small style="font-weight:700">${esc(w.title)}</small><button class="close" type="button" data-close aria-label="Close">${ico("x")}</button></div>
    <div class="story">${c.last ? "" : `<div class="tapzones"><button type="button" data-step="-1" aria-label="Previous card"></button><button type="button" data-step="1" aria-label="Next card"></button></div>`}
      <span class="kicker">${esc(c.kicker)}</span>${c.title ? `<h2>${esc(c.title)}</h2>` : ""}<div class="storytxt">${c.html}</div></div>
    ${c.last ? `<div class="row" style="flex-direction:column">${w.quiz.length ? `<button class="btn" type="button" data-toquiz>Take the quiz</button>` : ""}
        <button class="btn ghost donebtn" type="button" data-done="${w.id}" aria-pressed="${done}">${done ? ico("check") + DONE_VERB[w.type] : `Mark as ${DONE_VERB[w.type].toLowerCase()}`}</button></div>`
      : `<p class="hint">Tap the right side, or press →, to continue</p>`}
  </div>`;
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
  reviewer: "Reviewer: the review portal arrives in week 5.",
  editor: "Editor: the editor tools arrive in week 5.",
  admin: "Admin: the admin dashboard arrives in week 5.",
};
async function accountView() {
  if (!auth.user) return signinView();
  const { data, error } = await sb.from("profiles").select("role").eq("id", auth.user.id).maybeSingle();
  const role = data?.role;
  const roleLine = error ? `<p class="err">Couldn't read your role: ${esc(error.message)}</p>`
    : role ? `<p><b>Role:</b> ${esc(ROLE_TEXT[role] || role)}</p>`
    : `<p class="notice">Your profile wasn't created. This happens if you signed up before the database was set up: ask the admin to add it.</p>`;
  return `<div class="stack signin"><h1>Your account</h1><p>Signed in as <b>${esc(auth.user.email)}</b>.</p>${roleLine}
    <button class="btn ghost" id="signout" type="button">Sign out</button></div>`;
}
const notFound = () => `<div class="stack"><h1>Page not found</h1><p><a href="#/">Go to the home page</a></p></div>`;

// --- router --------------------------------------------------------------------
const ROUTES = [
  [/^#?\/?$/, () => homeView(), "home"],
  [/^#\/path\/([\w-]+)$/, m => pathView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/map$/, m => mapView(m[1]), "home"],
  [/^#\/path\/([\w-]+)\/stage\/(\d+)$/, m => stageView(m[1], +m[2]), "home"],
  [/^#\/path\/([\w-]+)\/work\/([\w-]+)$/, m => workView(m[1], m[2]), "home"],
  [/^#\/signin$/, () => signinView(), "account"],
  [/^#\/account$/, () => accountView(), "account"],
];

function renderNav(tab) {
  const items = [["#/", "Home", "home", "home"], [auth.user ? "#/account" : "#/signin", auth.user ? "Account" : "Sign in", "user", "account"]];
  $("#tabs").innerHTML = `<a class="brand side-brand" href="#/">${ico("logo")}Ascent</a>` +
    items.map(([h, l, i, t]) => `<a href="${h}" ${t === tab ? 'aria-current="page"' : ""}>${ico(i)}${l}</a>`).join("");
  $("#who").textContent = auth.user?.email || "";
}

let lastRoute = null;
async function route({ keepScroll = false } = {}) {
  const hash = location.hash || "#/";
  const hit = ROUTES.map(([re, fn, tab]) => [hash.match(re), fn, tab]).find(([m]) => m);
  const [m, fn, tab] = hit || [null, notFound, "home"];
  renderNav(tab);
  const view = $("#view"), y = scrollY;
  try { view.innerHTML = await fn(m || []); }
  catch (e) { view.innerHTML = `<p class="status">${esc(e.message)} Refresh the page to try again.</p>`; }
  if (hash !== lastRoute) { view.classList.remove("enter"); void view.offsetWidth; view.classList.add("enter"); window.scrollTo(0, 0); lastRoute = hash; }
  else if (keepScroll) window.scrollTo(0, y);
  if (/\/work\//.test(hash)) mountQuizzes(m[1]);
}
const refresh = () => route({ keepScroll: true });

document.addEventListener("submit", async e => {
  if (e.target.id !== "signin") return;
  e.preventDefault();
  const email = $("#email").value.trim(), err = $("#err"), btn = e.target.querySelector("button");
  if (!/^\S+@\S+\.\S+$/.test(email)) { err.textContent = "Enter a valid email address."; err.hidden = false; return; }
  err.hidden = true; btn.disabled = true; btn.textContent = "Sending…";
  const error = await sendLink(email);
  if (error) { err.textContent = `Couldn't send the link: ${error.message}. Try again in a minute.`; err.hidden = false; btn.disabled = false; btn.innerHTML = `${ico("mail")}Email me a sign-in link`; return; }
  $("#view").innerHTML = `<div class="stack signin"><h1>Check your email</h1><p>We sent a sign-in link to <b>${esc(email)}</b>. Open it on this device to finish signing in.</p><p class="muted">No email after a few minutes? Check your spam folder, or <a href="#/signin">try again</a>.</p></div>`;
});

document.addEventListener("click", async e => {
  const t = e.target.closest("button, a, [data-close]"); if (!t) return;
  const d = t.dataset, slug = (location.hash.match(/#\/path\/([\w-]+)/) || [])[1];
  if (t.id === "signout") { await signOut(); toast("Signed out"); location.hash = "#/"; return; }
  if (d.done) {
    const was = isDone(slug, d.done);
    try { await setDone(slug, d.done, !was); } catch (err) { toast(`Couldn't save: ${err.message}`); return; }
    if ($("#layer .full")) closeLayer();
    await refresh();
    if (!was) offerNext(slug); else toast("Unticked");
    return;
  }
  if (d.story) { openStory(slug, d.story); return; }
  if (d.step) { const n = story.n + +d.step; if (n >= 0 && n < story.cards.length) { story.n = n; drawStory(); } return; }
  if ("toquiz" in d) { closeLayer(); $("#quiz")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); return; }
  if ("close" in d) { closeLayer(); return; }
  if (d.toggle) { const set = mapOpen.get(slug); set.has(+d.toggle) ? set.delete(+d.toggle) : set.add(+d.toggle); refresh(); return; }
  if (d.expand) { const p = await getPath(slug); mapOpen.set(slug, new Set(d.expand === "all" ? p.stages.map(s => s.num) : [])); refresh(); return; }
});
document.addEventListener("keydown", e => {
  if (!$("#layer").innerHTML) return;
  if (e.key === "Escape") closeLayer();
  if ($("#layer .full") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) $(`[data-step="${e.key === "ArrowRight" ? 1 : -1}"]`)?.click();
});

window.addEventListener("hashchange", () => { closeLayer(); route(); });
await initAuth(async () => { await loadProgress(); route({ keepScroll: true }); });
await loadProgress();
route();
