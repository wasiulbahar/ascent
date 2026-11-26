"""Checks every starter guide (guides/*.md) and writes guides/index.json, the list of fields that
have one. Run before every release: python tools/build_guides.py   (exit code 1 on errors)"""
import json, re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
E = json.loads((ROOT / "data" / "taxonomy.json").read_text(encoding="utf-8"))["entities"]
LEVELS, ACCESS = {"beginner", "intermediate", "advanced"}, {"free", "paid", "free-and-paid"}
errors, index = [], {}
for f in sorted((ROOT / "guides").glob("*.md")):
    t = f.read_text(encoding="utf-8"); fid = f.stem
    fm = dict(l.split(":", 1) for l in re.search(r"^---\n(.*?)\n---", t, re.S)[1].split("\n"))
    fm = {k.strip(): v.strip() for k, v in fm.items()}
    err = lambda m: errors.append(f"{fid}: {m}")
    if fm.get("field") != fid: err("front matter field must match the file name")
    if fid not in E: err("not a field on the map")
    works = [l for l in re.search(r"## Key works\n(.*?)\n## ", t, re.S)[1].split("\n") if l.startswith("- ")]
    if len(works) != 5: err(f"{len(works)} key works (needs 5)")
    for w in works:
        parts = w[2:].split(" | ")[0].split(" · ")
        if len(parts) != 5: err(f"work line needs 5 parts: {w[:60]}"); continue
        if parts[0] not in LEVELS: err(f"unknown level {parts[0]}")
        if parts[4] not in ACCESS: err(f"unknown access {parts[4]}")
        if " | " not in w: err(f"no reason given: {w[:60]}")
    lv = [w[2:].split(" · ")[0] for w in works]
    if lv != sorted(lv, key=["beginner", "intermediate", "advanced"].index): err("works must go from beginner to advanced")
    qs = re.split(r"\*\*Multiple choice\.\*\*", t.split("## Quick check", 1)[1])[1:]
    if len(qs) < 3: err(f"{len(qs)} questions (needs 3)")
    for q in qs:
        if sum("✓" in l for l in q.split("\n") if l.startswith("- ")) != 1: err(f"a question needs exactly one ✓: {q.strip()[:50]}")
    if "[verify" in t: err("leftover [verify] marker")
    index[fid] = fm.get("status", "draft")
(ROOT / "guides" / "index.json").write_text(json.dumps(index, separators=(",", ":")), encoding="utf-8")
print(f"{len(index)} guides, {len(errors)} errors"); [print("  ERROR", e) for e in errors]
sys.exit(1 if errors else 0)
