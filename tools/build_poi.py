"""Builds points of interest (spec section 16) from Wikipedia Vital articles Level 4.

Usage: python tools/build_poi.py <folder of saved sublists> <vital_cache.json from vital_fetch.py>
Writes:
  data/poi/index.json      every item: title, type, academic homes (for search and field pages)
  data/poi/d-<x>.json      details by first letter of the id: Wikidata ID and description, provenance
Rules:
  - An item whose title is already a field in data/taxonomy.json links to that field (counted, not
    duplicated as a point of interest).
  - Homes come from tools/vital_rules.py, per list section; every placement is "proposed". Items
    placed only by their sublist's general rule are "needs review" (spec 16.5 rule 9).
  - Only titles, links, Wikidata IDs and Wikidata descriptions (CC0) are stored; no article text.
"""
import json, re, sys, pathlib, collections
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from vital_parse import items
from vital_rules import place

ROOT = pathlib.Path(__file__).resolve().parent.parent
folder, cache = sys.argv[1], json.loads(pathlib.Path(sys.argv[2]).read_text(encoding="utf-8"))
tax = json.loads((ROOT / "data" / "taxonomy.json").read_text(encoding="utf-8"))
E = tax["entities"]
slug = lambda s: re.sub(r"[^a-z0-9]+", "-", s.lower().replace("'", "")).strip("-")
TYPES = "person event place work invention law species concept institution object".split()
GENERAL = {"People", "History", "Technology", "Biology and health sciences", "Society and social sciences", "Physical sciences", "Philosophy and religion", "Mathematics"}

its = items(folder)
by_title = collections.OrderedDict()
for it in its: by_title.setdefault(it["title"], []).append(it)

homes_tab, home_ix = [], {}
def hix(h):
    if h not in home_ix: home_ix[h] = len(homes_tab); homes_tab.append(h)
    return home_ix[h]

index, details, field_links, ids, review, missing = [], collections.defaultdict(dict), {}, set(), 0, 0
for title, group in by_title.items():
    c = cache.get(title, {})
    if c.get("missing"): missing += 1
    canon = c.get("title") or title
    match = next((x for x in (slug(canon), slug(title)) if x in E), None)
    if match:
        field_links[title] = match; continue
    typ, homes, rule = place(group[0]["sublist"], group[0]["trail"])
    for g in group[1:]:  # an item listed twice keeps both sections' homes
        homes += [h for h in place(g["sublist"], g["trail"])[1] if h not in homes]
    pid = slug(canon) or slug(c.get("qid") or title)
    if pid in ids: pid = f"{pid}-{(c.get('qid') or str(len(ids))).lower()}"
    ids.add(pid)
    needs_review = rule in GENERAL
    review += needs_review
    row = [canon, TYPES.index(typ), [hix(h) for h in homes]]
    if pid != slug(canon): row.append(pid)
    if needs_review: row += [None] * (4 - len(row)) + [1]
    index.append(row)
    details[pid[0] if pid[0].isalpha() else "0"][pid] = {
        "q": c.get("qid"), "d": c.get("desc"), "w": canon,
        "src": [[g["sublist"], " › ".join(g["trail"])] for g in group], "rule": rule, "review": needs_review,
    }

revs = {}
for it in its: revs[it["sublist"]] = [it["rev"], it["at"]]
out = ROOT / "data" / "poi"; out.mkdir(parents=True, exist_ok=True)
for old in out.glob("d-*.json"): old.unlink()
meta = {
    "source": "Wikipedia: Vital articles/Level 4", "url": "https://en.wikipedia.org/wiki/Wikipedia:Vital_articles/Level/4",
    "licence": "List titles and structure from English Wikipedia (CC BY-SA 4.0); descriptions from Wikidata (CC0).",
    "revisions": revs, "types": TYPES, "homes": homes_tab, "count": len(index), "fieldLinks": len(field_links), "needsReview": review,
    "note": "Homes are proposed by list section, not reviewed per article. The list is an English-Wikipedia editorial selection, not a neutral or complete canon.",
}
(out / "index.json").write_text(json.dumps({"meta": meta, "items": index, "fields": field_links}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
for k, v in details.items(): (out / f"d-{k}.json").write_text(json.dumps(v, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
by_type = collections.Counter(TYPES[r[1]] for r in index)
print(f"{len(its)} items, {len(by_title)} unique; {len(index)} points of interest, {len(field_links)} link to existing fields; "
      f"{review} need review; {missing} titles not found on Wikipedia; {sum(1 for d in details.values() for x in d.values() if x['q'])} with a QID, "
      f"{sum(1 for d in details.values() for x in d.values() if x['d'])} with a description")
print(dict(by_type))
print(f"index {(out / 'index.json').stat().st_size // 1024} KB, {len(details)} detail files")
