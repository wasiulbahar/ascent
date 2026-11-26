"""Renders paths from compact data in tools/pathdata/<slug>.py into paths/<slug>.md (2026-11-26 batch:
medicine, business, education, art-history). Each data file defines P (see medicine.py for the shape).
Questions: a 4-tuple is multiple choice (question, right, wrong, wrong); a 2-tuple is a blank (question, answer).
Checks every covers id against data/taxonomy.json. Then run: node tools/audit.mjs <slug>"""
import json, pathlib, runpy, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
TAX = json.loads((ROOT / "data/taxonomy.json").read_text(encoding="utf-8"))["entities"]
IDS = set(TAX) if isinstance(TAX, dict) else {e["id"] for e in TAX}
LEVELS = ["Beginner", "Explorer", "Reader", "Connoisseur", "Specialist", "Expert"]
ACCESS = {"paid": "buy, or borrow from a library"}

def render(P):
    o = ["---", f"path: {P['title']}", "status: draft", "version: 1", "drafted: 2026-11-26", f"template: {P['template']}", "---", "",
         f"# {P['title']}", "", P["lede"], "", P["access"], "", f"# About {P['about_name']}", ""]
    for para in P["about"]: o += [para, ""]
    o += ["**Trivia**"] + [f"- {t}" for t in P["trivia"]] + ["", "### Timeline"]
    o += [f"- **{w} · {n}** {d}".rstrip() for w, n, d in P["timeline"]]
    o += ["", "# What you will be able to do", "", P["goals_intro"], ""]
    o += [f"- **{b}** {t}" for b, t in P["goals"]]
    o += ["- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.", "", P["goals_note"], "",
          "**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.", ""]
    for n, S in enumerate(P["stages"], 1):
        bad = [c for c in S["covers"] if c not in IDS]
        if bad: sys.exit(f"{P['slug']} stage {n}: unknown covers ids {bad}")
        o += ["---", "", f"# Stage {n}: {S['title']}", f"level: {LEVELS[n-1]}", f"intent: {S['intent']}",
              "gate: Score 70% or more across this stage's quizzes.", f"covers: {', '.join(S['covers'])}", "", S["intro"], ""]
        for w in S["works"]:
            wid, title, typ, creator, year, length, acc, note, intro, qs = w[:10]
            meta = f"- id: {wid} · type: {typ} · creator: {creator}" + (f" · year: {year}" if year else "") + f" · length: {length}"
            o += [f"## {title}", meta]
            if len(w) > 10: o.append(f"- edition: {w[10]}")
            o += [f"- access: {acc} | {note or ACCESS[acc]}", "", "### Introduction", intro, "", "### Quiz"]
            for q in qs:
                if len(q) == 4: o += [f"**Multiple choice.** {q[0]}", f"- {q[1]} ✓", f"- {q[2]}", f"- {q[3]}", ""]
                else:
                    qq = q[0]
                    for gen in ("The book was", "The first edition was", "The report was", "The paper was", "The essay was", "The study was", "The film was", "The code was", "The anthology was", "The series was"):  # name the work so date questions stay distinct
                        if qq.startswith(gen): qq = f"*{title}* was" + (" first" if "first" in gen else "") + qq[len(gen):]
                    o += [f"**Fill in the blank.** {qq} [answer: {q[1]}]", ""]
        if S.get("scholar"):
            o += ["### Scholar challenge (optional)", "Choose one, at least 1,500 words. Required for the Mastery certificate" +
                  (", where it becomes the capstone essay." if n == 6 else ".")]
            o += [f"{i}. {s}" for i, s in enumerate(S["scholar"], 1)] + [""]
    o += ["---", "", "# Final mastery check", "", P["mastery_intro"], ""]
    o += [f"{i}. **{b}** {t}" for i, (b, t) in enumerate(P["mastery"], 1)]
    o += ["", P["mastery_note"], "", "---", "", "# Side branches", "", "| Branch | Opens after | Works | Access |", "|---|---|---|---|"]
    o += [f"| {a} | {b} | {c} | {d} |" for a, b, c, d in P["side"]]
    o += ["", "# Bridges to other subjects", ""] + [f"- **{a}:** {b}" for a, b in P["bridges"]]
    o += ["", "# Review checklist for editors and experts", "", "- [ ] Every `[verify]` item resolved"] + [f"- [ ] {c}" for c in P["checklist"]]
    o += ["- [ ] Every access label checked: free sources exist and links are legal", "- [ ] Every quiz question has exactly one correct answer", ""]
    return "\n".join(o)

for slug in sys.argv[1:] or ["medicine", "business", "education", "art-history"]:
    P = runpy.run_path(str(ROOT / "tools/pathdata" / f"{slug}.py"))["P"]
    (ROOT / "paths" / f"{slug}.md").write_text(render(P), encoding="utf-8", newline="\n")
    print("wrote", slug)
