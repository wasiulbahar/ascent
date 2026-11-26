"""Adds dates and places to points of interest, from Wikidata (CC0), for the timeline and map.

Usage: python tools/poi_when_where.py <cache.json>
Writes data/poi/when-where.json: {poi id: [year, end year or null, lat or null, lon or null]}
- year: birth (people), point in time / start (events), publication (works), inception, or
  invention/discovery date; negative years are BCE.
- place: the item's own coordinates, else its location, else a person's place of birth.
Resumable (the cache keeps every answered batch). Generic client name only; polite pauses.
"""
import json, sys, time, pathlib, urllib.request, urllib.parse
ROOT = pathlib.Path(__file__).resolve().parent.parent
UA = "AscentLearningApp/1.0 (educational reader; generic client)"
cache_path = pathlib.Path(sys.argv[1])
cache = json.loads(cache_path.read_text(encoding="utf-8")) if cache_path.exists() else {}

qid_to_id = {}
for f in (ROOT / "data" / "poi").glob("d-*.json"):
    for pid, d in json.loads(f.read_text(encoding="utf-8")).items():
        if d.get("q"): qid_to_id[d["q"]] = pid
todo = [q for q in qid_to_id if q not in cache]
print(len(qid_to_id), "with a QID;", len(todo), "to look up", flush=True)

Q = """SELECT ?item (MIN(?b) AS ?born) (MIN(?d) AS ?died) (MIN(?t) AS ?when) (MIN(?s) AS ?start) (MIN(?e) AS ?end)
  (MIN(?pub) AS ?published) (MIN(?inc) AS ?inception) (MIN(?inv) AS ?invented) (SAMPLE(?c) AS ?coord) (SAMPLE(?lc) AS ?loccoord) (SAMPLE(?bc) AS ?birthcoord) WHERE {
  VALUES ?item { %s }
  OPTIONAL { ?item wdt:P569 ?b } OPTIONAL { ?item wdt:P570 ?d } OPTIONAL { ?item wdt:P585 ?t }
  OPTIONAL { ?item wdt:P580 ?s } OPTIONAL { ?item wdt:P582 ?e } OPTIONAL { ?item wdt:P577 ?pub }
  OPTIONAL { ?item wdt:P571 ?inc } OPTIONAL { ?item wdt:P575 ?inv } OPTIONAL { ?item wdt:P625 ?c }
  OPTIONAL { ?item wdt:P276 ?l . ?l wdt:P625 ?lc } OPTIONAL { ?item wdt:P19 ?bp . ?bp wdt:P625 ?bc }
} GROUP BY ?item"""

def run(qids):
    url = "https://query.wikidata.org/sparql?" + urllib.parse.urlencode({"query": Q % " ".join("wd:" + q for q in qids), "format": "json"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/sparql-results+json"}), timeout=120) as r:
                return json.loads(r.read().decode("utf-8"))["results"]["bindings"]
        except Exception as e:
            print("retry after", e, flush=True); time.sleep(70)
    raise SystemExit("giving up")

for n in range(0, len(todo), 400):
    batch = todo[n:n + 400]
    for b in run(batch):
        q = b["item"]["value"].rsplit("/", 1)[-1]
        cache[q] = {k: v["value"] for k, v in b.items() if k != "item"}
    for q in batch: cache.setdefault(q, {})
    cache_path.write_text(json.dumps(cache), encoding="utf-8")
    print(f"{min(n + 400, len(todo))}/{len(todo)}", flush=True); time.sleep(65)  # the query service may allow only one request a minute

def year(v):
    if not v or not v[:1] in "-0123456789": return None
    neg = v.startswith("-"); y = int(v.lstrip("-").split("-")[0])
    return -y if neg else y
def point(v):
    if not v or not v.startswith("Point("): return None
    lon, lat = v[6:-1].split()[:2]; return [round(float(lat), 2), round(float(lon), 2)]

out = {}
for q, pid in qid_to_id.items():
    c = cache.get(q, {})
    y = next((year(c.get(k)) for k in ("born", "when", "start", "published", "inception", "invented") if year(c.get(k)) is not None), None)
    y2 = year(c.get("died")) if c.get("born") else year(c.get("end"))
    pt = point(c.get("coord")) or point(c.get("loccoord")) or point(c.get("birthcoord"))
    if y is None and not pt: continue
    out[pid] = [y, y2, *(pt or [None, None])]
(ROOT / "data" / "poi" / "when-where.json").write_text(json.dumps(out, separators=(",", ":")), encoding="utf-8")
print(len(out), "points of interest with a date or place;", sum(1 for v in out.values() if v[0] is not None), "dated;", sum(1 for v in out.values() if v[2] is not None), "placed")
