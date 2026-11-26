"""Gap check: which fields in Wikipedia's Outline of academic disciplines and Wikidata's academic
disciplines are missing from data/taxonomy.json. Writes a report for editorial review; adds nothing.

Usage: python tools/gap_check.py <outline API json> <wikidata SPARQL json> <report.md>
Matching is by normalised name (case, "&"/"and", brackets, "Outline of", simple plurals) and aliases,
so some "missing" items are near-duplicates under another name: the report is a list to check,
not a list to import.
"""
import json, re, sys, pathlib, collections
ROOT = pathlib.Path(__file__).resolve().parent.parent
tax = json.loads((ROOT / "data" / "taxonomy.json").read_text(encoding="utf-8"))
E = tax["entities"]

def norm(s):
    s = s.lower().replace("&", "and")
    s = re.sub(r"\(.*?\)", "", s); s = re.sub(r"^outline of |^list of |^history of (?=.*)", lambda m: "" if "outline" in m[0] or "list" in m[0] else m[0], s)
    s = re.sub(r"[^a-z0-9 ]+", " ", s).strip()
    s = re.sub(r"\s+", " ", s)
    return re.sub(r"(ies)$", "y", s) if not s.endswith("studies") else s

known = set()
for i, e in E.items():
    for n in [e["n"], *e.get("a", [])]:
        n = norm(n); known.add(n); known.add(re.sub(r"s$", "", n))
for d in tax["domains"]: known.add(norm(d["n"]))
have = lambda n: norm(n) in known or re.sub(r"s$", "", norm(n)) in known
names = {norm(e["n"]): e["n"] for e in E.values()}
def near(n):  # on the map inside a longer name, e.g. "botany" in "Botany and plant sciences"
    n = norm(n)
    return next((v for k, v in names.items() if len(n) > 3 and (k.startswith(n + " ") or k.endswith(" " + n) or f" {n} " in f" {k} ")), None)

# 1. Wikipedia's outline: links under section headings
page = list(json.loads(pathlib.Path(sys.argv[1]).read_text(encoding="utf-8"))["query"]["pages"].values())[0]
rev = page["revisions"][0]; text = rev["slots"]["main"]["*"]
skip = re.compile(r"^(File|Category|Wikipedia|Template|Help|Portal|wikt|Image):|^(Outline of academic disciplines|Academic discipline|List of)", re.I)
heads, outline = [], collections.OrderedDict()
for line in text.split("\n"):
    if m := re.match(r"^(=+)\s*(.*?)\s*\1\s*$", line):
        lvl = len(m[1]); heads = heads[:max(0, lvl - 2)] + [re.sub(r"\[\[|\]\]", "", m[2])]; continue
    if not re.match(r"^[*#]", line): continue
    for target, label in re.findall(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]", line):
        if skip.search(target): continue
        name = re.sub(r"^Outline of ", "", target.strip())
        if name and name not in outline: outline[name] = " › ".join(h for h in heads if h)
nears = {}
miss_outline = []
for n, h in outline.items():
    if have(n): continue
    if (v := near(n)): nears[n] = v
    else: miss_outline.append((n, h))

# 2. Wikidata academic disciplines, by how many language Wikipedias cover them
wd = json.loads(pathlib.Path(sys.argv[2]).read_text(encoding="utf-8"))["results"]["bindings"]
wdi = [(b["dLabel"]["value"], int(b["links"]["value"]), b["d"]["value"].rsplit("/", 1)[-1]) for b in wd]
miss_wd = []
for n, k, q in wdi:
    if re.match(r"^Q\d+$", n) or have(n): continue
    if (v := near(n)): nears[n] = v
    else: miss_wd.append((n, k, q))
both = {norm(n) for n, _ in miss_outline} & {norm(n) for n, _, _ in miss_wd}

out = [f"# Gap check: what the map may be missing",
       "", f"Compared on {pathlib.Path(sys.argv[3]).stem[-10:]} against:",
       f"- Wikipedia, *Outline of academic disciplines* (revision {rev['revid']}, {rev['timestamp'][:10]}): {len(outline)} linked subjects.",
       f"- Wikidata, items that are an *academic discipline* (Q11862829) with articles in 15 or more language Wikipedias: {len(wdi)} items.",
       f"- Our map: {len(E)} fields, methods and topics in 17 domains.",
       "", "## Summary", "",
       f"- **In the outline but not on our map:** {len(miss_outline)} of {len(outline)}.",
       f"- **In Wikidata's list but not on our map:** {len(miss_wd)} of {len(wdi)}.",
       f"- **Missing from both sources' point of view (strongest candidates):** {len(both)}.",
       f"- **Probably on the map under a longer name:** {len(nears)} (listed separately, to check).",
       "", "Matching is by name, so some items are already on the map under another name (for example \"Biological sciences\" for \"Biology\"), and some are topics or methods rather than fields. Nothing has been added: tick what you want, and I'll add it as \"proposed\", with its source.",
       "", "## Strongest candidates (in both sources)", ""]
wdk = {norm(n): (k, q) for n, k, q in miss_wd}
for n, h in miss_outline:
    if norm(n) in both: k, q = wdk[norm(n)]; out.append(f"- [ ] **{n}** · outline: {h or '–'} · Wikidata {q}, {k} languages")
out += ["", "## In Wikidata's list, most widely covered first (top 200)", ""]
out += [f"- [ ] **{n}** · {k} languages · {q}" for n, k, q in miss_wd[:200]]
out += ["", f"## Probably already on the map under a longer name ({len(nears)})", "", "Check these rather than add them.", ""]
out += [f"- {n} → *{v}*" for n, v in sorted(nears.items())]
out += ["", "## In the outline, by section", ""]
by = collections.OrderedDict()
for n, h in miss_outline: by.setdefault(h or "Other", []).append(n)
for h, ns in by.items(): out += [f"### {h}", "", ", ".join(ns), ""]
pathlib.Path(sys.argv[3]).parent.mkdir(parents=True, exist_ok=True)
pathlib.Path(sys.argv[3]).write_text("\n".join(out) + "\n", encoding="utf-8")
print(f"outline {len(outline)}, missing {len(miss_outline)}; wikidata {len(wdi)}, missing {len(miss_wd)}; both {len(both)}")


