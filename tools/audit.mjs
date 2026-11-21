// Checks every path file. Run: node tools/audit.mjs [slug ...]   (exit code 1 if any error)
// Errors: missing or duplicate ids, quizzes under 4 questions, multiple-choice questions without
// exactly one ✓, blanks without an answer, leftover [verify] markers.
// Warnings, for a human to judge: duplicate questions, the answer given away in the question,
// "what does it cost?" questions, and access labels that disagree with their note.
import fs from "node:fs";
import { parsePath } from "../src/content.js";

const dir = new URL("../paths/", import.meta.url);
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(dir).filter(f => f.endsWith(".md")).map(f => f.slice(0, -3));
const low = s => s.toLowerCase().replace(/[*_“”"'.,?!]/g, "").replace(/\s+/g, " ").trim();
let errors = 0;

for (const slug of slugs) {
  const text = fs.readFileSync(new URL(`${slug}.md`, dir), "utf8"), p = parsePath(text);
  const E = [], W = [], seen = new Map(), ids = new Set();
  const verify = text.split("\n").filter(l => /\[verify/.test(l) && !/Every `\[verify\]`/.test(l)).length;
  if (verify) E.push(`${verify} [verify] marker(s) left`);
  for (const w of p.works) {
    if (!w.id) E.push(`a work has no id: ${w.title}`);
    else if (ids.has(w.id)) E.push(`duplicate id ${w.id}`); else ids.add(w.id);
    if (w.quiz.length < 4) E.push(`${w.id}: ${w.quiz.length} questions (needs 4)`);
    const note = low(w.access.note || "");
    if (w.access.key === "free" && /\b(buy|paid|subscription)\b/.test(note)) W.push(`${w.id}: labelled Free but the note says "${w.access.note}"`);
    if (w.access.key === "paid" && /\bfree\b/.test(note)) W.push(`${w.id}: labelled Paid but the note mentions free: "${w.access.note}"`);
    for (const q of w.quiz) {
      if (q.kind === "mc") {
        const n = q.opts.filter(o => o.ok).length;
        if (n !== 1) E.push(`${w.id}: ${n} correct options in "${q.q}"`);
        if (q.opts.length < 2) E.push(`${w.id}: only ${q.opts.length} options in "${q.q}"`);
        const right = low(q.opts.find(o => o.ok)?.text || "");
        if (/what does (it|the \w+) cost/i.test(q.q)) W.push(`${w.id}: cost question "${q.q}"`);
        else if (right.length > 5 && low(q.q).includes(right)) W.push(`${w.id}: answer is in the question "${q.q}"`);
      } else if (!q.answers.length && q.num === null) E.push(`${w.id}: blank without an answer "${q.q}"`);
      const k = low(q.q);
      if (seen.has(k)) W.push(`${w.id}: same question as ${seen.get(k)}: "${q.q}"`); else seen.set(k, w.id);
    }
  }
  errors += E.length;
  console.log(`\n${slug}: ${p.stages.length} stages, ${p.works.length} works, ${p.works.reduce((a, w) => a + w.quiz.length, 0)} questions, ${E.length} errors, ${W.length} warnings`);
  E.forEach(e => console.log("  ERROR " + e)); W.forEach(w => console.log("  warn  " + w));
}
process.exit(errors ? 1 : 0);
