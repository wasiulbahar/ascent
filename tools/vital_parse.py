"""Parses saved Wikipedia "Vital articles/Level 4" sublists (API JSON files) into items.

Each item keeps its source sublist and the heading trail above it (provenance, spec 16.5 rule 4).
Usage (as a module): items(folder) -> list of dicts {title, sublist, trail: [h2, h3, ...], rev, at}
"""
import json, re, pathlib

LINK = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]")

def items(folder):
    out = []
    for f in sorted(pathlib.Path(folder).glob("*.json")):
        page = list(json.loads(f.read_text(encoding="utf-8"))["query"]["pages"].values())[0]
        rev = page["revisions"][0]; text = rev["slots"]["main"]["*"]
        sub = page["title"].split("/")[-1]
        trail = []
        for line in text.split("\n"):
            if m := re.match(r"^(=+)\s*(.*?)\s*\1\s*$", line):
                lvl = len(m[1]); trail = trail[:max(0, lvl - 2)] + [re.sub(r"\s*\(\d[\d,]* articles?\)", "", re.sub(r"<[^>]+>|\{\{[^}]*\}\}|'''?", "", m[2])).strip()]
                continue
            if not re.match(r"^[#*]", line): continue
            body = re.sub(r"<!--.*?-->", "", line)
            body = re.sub(r"\{\{[^{}]*\}\}", "", body)
            if not (m := LINK.search(body)): continue
            title = m[1].strip().replace("_", " ")
            if ":" in title and title.split(":")[0] in ("Wikipedia", "Category", "File", "Template", "Help", "Portal"): continue
            out.append({"title": title, "sublist": sub, "trail": [t for t in trail if t][1:] if trail and trail[0] in (sub, sub.split(" and ")[0]) else [t for t in trail if t], "rev": rev["revid"], "at": rev["timestamp"][:10]})
    return out

if __name__ == "__main__":
    import sys, collections
    its = items(sys.argv[1])
    print(len(its), "items,", len({i["title"] for i in its}), "unique titles")
    c = collections.Counter((i["sublist"], " › ".join(i["trail"][:2])) for i in its)
    for (s, t), n in sorted(c.items()): print(f"{n:5}  {s} | {t}")
