// Reads a path Markdown file (format: docs/depth-framework.md) into plain data the app renders.

// A blank whose first answer is a plain number also accepts that number followed by units ("10 m/s").
const numOf = s => /^\s*-?\d+(\.\d+)?\s*$/.test(s) ? Number(s) : null;
export const blankOk = (q, input) => q.answers.includes(norm(input)) || (q.num !== null && parseFloat(input.replace(/,/g, "")) === q.num);

export const norm = s => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

const LAYERS = { Introduction: "Introduction", Hook: "Introduction", Understand: "Understand", Analyse: "Analyse", Scholar: "Scholar", Quiz: "Quiz", Check: "Quiz" };

const sectionKind = t =>
  /^About/i.test(t) ? "about" :
  /^What you will/i.test(t) ? "goals" :
  /mastery/i.test(t) ? "mastery" :
  /side branches|bridges/i.test(t) ? "branches" :
  /review checklist/i.test(t) ? "internal" : "other";

export function parsePath(src) {
  src = src.replace(/\r\n/g, "\n");
  const fm = {};
  src = src.replace(/^---\n([\s\S]*?)\n---\n/, (_, b) => {
    for (const l of b.split("\n")) { const i = l.indexOf(":"); if (i > 0) fm[l.slice(0, i).trim()] = l.slice(i + 1).trim(); }
    return "";
  });
  src = src.replace(/^---\s*$/gm, "");
  const chunks = src.split(/^# /m).map(s => s.trim()).filter(Boolean);
  const [title, ...rest] = chunks.shift().split("\n");
  const paras = rest.join("\n").trim().split(/\n\s*\n/);
  const path = { fm, title: title.trim(), lede: paras[0] || "", note: paras.slice(1).join("\n\n"), blocks: [], stages: [] };
  for (const c of chunks) {
    if (/^Stage \d/.test(c)) { const s = parseStage(c, path.stages.length); path.stages.push(s); path.blocks.push({ type: "stage", stage: s }); continue; }
    const [t, ...b] = c.split("\n");
    path.blocks.push({ type: "section", title: t.trim(), kind: sectionKind(t), body: b.join("\n").trim() });
  }
  path.works = path.stages.flatMap(s => s.works);
  return path;
}

function parseStage(c, index) {
  const [title, ...rest] = c.split("\n");
  const [head, ...works] = rest.join("\n").split(/^## /m);
  const meta = {}, intro = [];
  for (const l of head.split("\n")) { const m = l.match(/^(level|intent|gate|covers):\s*(.*)$/); m ? (meta[m[1]] = m[1] === "covers" ? m[2].split(",").map(s => s.trim()).filter(Boolean) : m[2]) : intro.push(l); }
  const stage = { index, num: index + 1, name: title.replace(/^Stage \d+:\s*/, "").trim(), ...meta, intro: intro.join("\n").trim(), works: [], extras: [] };
  for (const w of works) { const r = parseWork(w, stage); stage.works.push(r.work); stage.extras.push(...r.extras); }
  return stage;
}

function parseWork(chunk, stage) {
  const [titleLine, ...rest] = chunk.split("\n");
  const parts = rest.join("\n").split(/^### /m);
  const head = parts.shift();
  const m = {};
  for (const l of head.split("\n")) {
    if (!/^- /.test(l)) continue;
    const s = l.slice(2);
    if (/^id:/.test(s)) s.split(" · ").forEach(p => { const i = p.indexOf(":"); m[p.slice(0, i).trim()] = p.slice(i + 1).trim(); });
    else { const i = s.indexOf(":"); if (i > 0) m[s.slice(0, i).trim()] = s.slice(i + 1).trim(); }
  }
  const [accKey = "", accNote = ""] = (m.access || "").split("|").map(x => x.trim());
  const work = {
    id: m.id, title: titleLine.trim(), type: m.type || "read", creator: m.creator || "", year: m.year || "", length: m.length || "",
    edition: m.edition || "", note: m.note || m.why || "", english: m.English || "", access: { key: accKey, note: accNote },
    layers: [], quiz: [], stage,
  };
  const extras = [];
  for (const p of parts) {
    const [h, ...b] = p.split("\n");
    const name = h.trim(), body = b.join("\n").trim();
    if (LAYERS[name] === "Quiz") work.quiz = parseQuiz(body);
    if (LAYERS[name]) work.layers.push({ name: LAYERS[name], body });
    else extras.push({ title: name, body });
  }
  return { work, extras };
}

export function parseQuiz(body) {
  const qs = []; let cur = null;
  for (const raw of body.split("\n")) {
    const l = raw.trim(); let m;
    if ((m = l.match(/^\*\*Multiple choice\.\*\*\s*(.*)$/))) { cur = { kind: "mc", q: m[1], opts: [], why: "" }; qs.push(cur); }
    else if ((m = l.match(/^\*\*Fill in the blank\.\*\*\s*(.*)$/))) {
      const a = m[1].match(/\[answer:\s*([^\]]+)\]/);
      cur = { kind: "blank", q: m[1].replace(a ? a[0] : "", "").trim(), answers: a ? a[1].split("/").filter(x => numOf(x) === null).map(norm) : [], shown: a ? a[1].split("/")[0].trim() : "", num: a ? numOf(a[1].split("/")[0]) : null, why: "" };
      qs.push(cur);
    }
    else if (cur?.kind === "mc" && /^- /.test(l)) cur.opts.push({ text: l.slice(2).replace("✓", "").trim(), ok: l.includes("✓") });
    else if (cur && /^> /.test(l)) cur.why += (cur.why ? " " : "") + l.slice(2);
  }
  return qs;
}

// Starter guides (guides/<field id>.md): a short introduction, five key works from beginner to
// advanced, and a quick check. Line format for works:
//   - level · *Title* · Creator · year · access | why it's worth reading
export function parseGuide(src) {
  src = src.replace(/\r\n/g, "\n");
  const fm = {};
  src = src.replace(/^---\n([\s\S]*?)\n---\n/, (_, b) => { for (const l of b.split("\n")) { const i = l.indexOf(":"); if (i > 0) fm[l.slice(0, i).trim()] = l.slice(i + 1).trim(); } return ""; });
  const [head, ...secs] = src.split(/^## /m);
  const title = (head.match(/^# (.+)$/m) || [])[1] || "";
  const intro = head.replace(/^# .+$/m, "").trim();
  const sec = name => (secs.find(s => s.startsWith(name)) || "").split("\n").slice(1).join("\n");
  const works = sec("Key works").split("\n").filter(l => l.startsWith("- ")).map(l => {
    const [main, why = ""] = l.slice(2).split(" | ");
    const [level, t, creator, year, access] = main.split(" · ").map(s => s.trim());
    return { level, title: t, creator, year, access, why: why.trim() };
  });
  return { fm, title, intro, works, quiz: parseQuiz(sec("Quick check")) };
}
