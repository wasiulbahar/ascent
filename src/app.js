// Ascent app: hash router and screens. Content comes from paths/*.md (parsed by content.js).
import { parsePath, norm, PASS_MARK } from "./content.js?v=2";
import { PATHS } from "./paths.js?v=2";
import { sb, auth, initAuth, sendLink, signOut } from "./auth.js?v=2";

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const C = c => `background:var(--${c});color:var(--${c}-ink)`;
const STAGE_COLORS = ["mint", "lilac", "peach", "sky", "butter", "rose"];
const ACCESS = { free: ["free", "Free"], "free-and-paid": ["mixed", "Free + paid"], paid: ["paid", "Paid"] };
const VERB = { read: "Read", listen: "Listen", watch: "Watch", course: "Course" };

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
};
const ico = k => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${IC[k] || IC.read}</svg>`;

function toast(m) { const t = $("#toast"); t.textContent = m; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => (t.hidden = true), 2600); }

// --- content -----------------------------------------------------------------
const cache = new Map();
async function getPath(slug) {
  if (!cache.has(slug)) {
    cache.set(slug, fetch(`paths/${slug}.md?v=2`).then(r => { if (!r.ok) throw new Error("This path could not be loaded."); return r.text(); }).then(parsePath));
  }
  return cache.get(slug);
}

// Facts marked [verify] never reach learners: a list item carrying one is left out, other markers are removed.
const scrub = s => s.split("\n").filter(l => !(/^\s*-\s/.test(l) && /\[verify/.test(l))).join("\n").replace(/\s*\[verify(?::[^\]]*)?\]/g, "");
function md(s) {
  const html = marked.parse(scrub(s || ""));
  const box = document.createElement("div"); box.innerHTML = html;
  box.querySelectorAll("p").forEach(p => { const n = p.nextElementSibling; if (p.textContent.trim() === "Trivia" && n?.tagName === "UL") { p.textContent = "Did you know?"; p.className = "trivia-h"; n.className = "trivia"; } });
  box.querySelectorAll("h3").forEach(h => { const n = h.nextElementSibling; if (/life in dates|timeline/i.test(h.textContent) && n?.tagName === "UL") n.className = "timeline"; });
  box.querySelectorAll("img").forEach(im => { im.loading = "lazy"; im.decoding = "async"; });
  box.querySelectorAll("table").forEach(t => { const w = document.createElement("div"); w.className = "tablewrap"; t.replaceWith(w); w.append(t); });
  return box.innerHTML;
}
const inline = s => marked.parseInline(scrub(s || ""));
const accessBadge = a => ACCESS[a.key] ? `<span class="acc ${ACCESS[a.key][0]}">${ACCESS[a.key][1]}</span>` : "";

// --- screens -----------------------------------------------------------------
async function homeView() {
  const paths = await Promise.all(PATHS.map(async p => ({ ...p, data: await getPath(p.slug).catch(() => null) })));
  const name = auth.user ? `Welcome back` : `Welcome`;
  return `<div class="stack">
    <div><p class="muted" style="font-weight:700">${name}</p><h1>What do you want to understand?</h1></div>
    ${!auth.user && sb ? `<div class="hero" style="${C("lilac")}"><h2>Save your progress</h2><p>Sign in with your email to keep your place on every device. No password needed.</p><a class="btn" href="#/signin" style="justify-self:start">${ico("mail")}Sign in with email</a></div>` : ""}
    <section><p class="label">Paths</p>
      <div class="grid">${paths.map(p => `<a class="card" href="#/path/${p.slug}" style="${C(p.color)}">${ico(p.icon)}
        <div><small>${esc(p.domain)}</small><h2>${esc(p.title)}</h2><small>${p.data ? `${p.data.stages.length} stages · ${p.data.works.length} works` : "Not available"}</small></div></a>`).join("")}</div>
    </section>
  </div>`;
}

async function pathView(slug) {
  const meta = PATHS.find(p => p.slug === slug); if (!meta) return notFound();
  const p = await getPath(slug);
  const sections = p.blocks.filter(b => b.type === "section" && b.kind !== "internal");
  const about = sections.find(s => s.kind === "about"), goals = sections.find(s => s.kind === "goals");
  const rest = sections.filter(s => s !== about && s !== goals);
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<span>${esc(p.title)}</span></div>
    <div style="display:grid;gap:12px"><h1>${esc(p.title)}</h1><p class="lede">${inline(p.lede)}</p>
      <div class="pills"><span class="pill draft">Draft · not yet endorsed</span><span class="pill">${p.stages.length} stages</span><span class="pill">${p.works.length} works</span></div></div>
    ${about ? `<section class="section about"><h2>${esc(about.title)}</h2><div class="txt${/!\[/.test(about.body) ? " with-img" : ""}">${md(about.body)}</div></section>` : ""}
    <section><p class="label">Stages</p>
      <div class="stages">${p.stages.map(s => `<a class="card stage-card" href="#/path/${slug}/stage/${s.num}" style="${C(STAGE_COLORS[s.index % 6])}">
        <small>Stage ${s.num} · ${esc(s.level || "")}</small>
        <div style="display:grid;gap:6px"><h3>${esc(s.name)}</h3><small>${inline(s.intent || "")}</small><div class="dots">${s.works.map(() => "<i></i>").join("")}</div></div></a>`).join("")}</div>
    </section>
    ${goals ? `<section class="section goals"><h2>${esc(goals.title)}</h2><div class="txt">${md(goals.body)}</div></section>` : ""}
    ${rest.map(s => `<section class="section"><h2>${esc(s.title)}</h2><div class="txt">${md(s.body)}</div></section>`).join("")}
  </div>`;
}

async function stageView(slug, num) {
  const p = await getPath(slug); const s = p.stages[num - 1]; if (!s) return notFound();
  const color = STAGE_COLORS[s.index % 6];
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<span>Stage ${s.num}</span></div>
    <div class="hero" style="${C(color)}"><small style="font-weight:700">Stage ${s.num} · Level: ${esc(s.level || "")}</small><h1>${esc(s.name)}</h1><p>${inline(s.intent || "")}</p></div>
    ${s.intro ? `<div class="txt">${md(s.intro)}</div>` : ""}
    <section><p class="label">Works in this stage</p><div class="worklist">${s.works.map(w => `<a class="work" href="#/path/${slug}/work/${w.id}">
      <span class="ic" style="${C(color)}">${ico(w.type)}</span><span><b>${esc(w.title)}${accessBadge(w.access)}</b><span>${esc([VERB[w.type], w.creator, w.length].filter(Boolean).join(" · "))}</span></span>${ico("chev")}</a>`).join("")}</div></section>
    ${s.extras.map(x => `<section class="layer"><span class="tag" style="${C(color)}">${esc(x.title)}</span><div class="txt">${md(x.body)}</div></section>`).join("")}
    ${s.gate ? `<p class="muted">To pass this stage: ${esc(s.gate)}</p>` : ""}
  </div>`;
}

const LAYER_COLOR = { Introduction: "mint", Understand: "sky", Analyse: "lilac", Scholar: "butter", Quiz: "peach" };
async function workView(slug, id) {
  const p = await getPath(slug); const w = p.works.find(x => x.id === id); if (!w) return notFound();
  const s = w.stage;
  const facts = [VERB[w.type], w.creator, w.year, w.length].filter(Boolean).join(" · ");
  return `<div class="stack">
    <div class="crumbs"><a href="#/">Home</a>›<a href="#/path/${slug}">${esc(p.title)}</a>›<a href="#/path/${slug}/stage/${s.num}">Stage ${s.num}</a></div>
    <div class="hero" style="${C(STAGE_COLORS[s.index % 6])}"><small style="font-weight:700">${esc(facts)}</small><h1>${esc(w.title)}${accessBadge(w.access)}</h1>
      ${w.edition ? `<p><b>Edition:</b> ${inline(w.edition)}</p>` : ""}${w.access.note ? `<p><b>Where to get it:</b> ${inline(w.access.note)}</p>` : ""}</div>
    ${w.layers.map(l => l.name === "Quiz" ? `<section class="layer"><span class="tag" style="${C("peach")}">Quiz</span><div class="quiz" data-quiz="${w.id}"></div></section>`
      : `<section class="layer"><span class="tag" style="${C(LAYER_COLOR[l.name])}">${l.name}</span><div class="txt">${md(l.body)}</div></section>`).join("")}
  </div>`;
}

function mountQuizzes(slug) {
  document.querySelectorAll("[data-quiz]").forEach(async box => {
    const p = await getPath(slug); const w = p.works.find(x => x.id === box.dataset.quiz);
    renderQuiz(box, w.quiz);
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
async function route() {
  const hash = location.hash || "#/";
  const hit = ROUTES.map(([re, fn, tab]) => [hash.match(re), fn, tab]).find(([m]) => m);
  const [m, fn, tab] = hit || [null, notFound, "home"];
  renderNav(tab);
  const view = $("#view");
  try { view.innerHTML = await fn(m || []); }
  catch (e) { view.innerHTML = `<p class="status">${esc(e.message)} Refresh the page to try again.</p>`; }
  if (hash !== lastRoute) { view.classList.remove("enter"); void view.offsetWidth; view.classList.add("enter"); window.scrollTo(0, 0); lastRoute = hash; }
  const slug = m?.[1]; if (slug && /work/.test(hash)) mountQuizzes(slug);
}

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
  if (e.target.closest("#signout")) { await signOut(); toast("Signed out"); location.hash = "#/"; }
});

window.addEventListener("hashchange", route);
await initAuth(() => route());
route();
