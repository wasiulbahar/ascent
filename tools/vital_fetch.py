"""Fetches Wikidata IDs (QIDs) and English Wikidata descriptions for the Vital articles.

Usage: python tools/vital_fetch.py <folder of saved sublists> <cache.json>
Resumable: titles already in the cache are skipped. Wikidata descriptions are CC0, so they can be
shown without attribution; no Wikipedia article text is copied (spec 16.10).
Requests identify only as a generic educational client and are spaced out politely.
"""
import json, sys, time, pathlib, urllib.request, urllib.parse
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from vital_parse import items

UA = "AscentLearningApp/1.0 (educational reader; generic client)"
folder, cache_path = sys.argv[1], pathlib.Path(sys.argv[2])
cache = json.loads(cache_path.read_text(encoding="utf-8")) if cache_path.exists() else {}

def get(url, params):
    q = url + "?" + urllib.parse.urlencode({**params, "format": "json", "maxlag": "30"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(q, headers={"User-Agent": UA}), timeout=60) as r:
                d = json.loads(r.read().decode("utf-8"))
            if "error" in d and d["error"].get("code") == "maxlag": print("servers busy, waiting", flush=True); time.sleep(20); continue
            return d
        except Exception as e:
            print("retry after", e, flush=True); time.sleep(15 * (attempt + 1))
    raise SystemExit("giving up after repeated errors")

titles = sorted({i["title"] for i in items(folder)} - set(cache))
print(len(titles), "titles to look up", flush=True)
for n in range(0, len(titles), 50):
    batch = titles[n:n + 50]
    d = get("https://en.wikipedia.org/w/api.php", {"action": "query", "titles": "|".join(batch), "redirects": 1, "prop": "pageprops", "ppprop": "wikibase_item"})
    q = d.get("query", {})
    canon = {t: t for t in batch}
    for x in q.get("normalized", []): canon = {k: (x["to"] if v == x["from"] else v) for k, v in canon.items()}
    for x in q.get("redirects", []): canon = {k: (x["to"] if v == x["from"] else v) for k, v in canon.items()}
    pages = {p["title"]: p for p in q.get("pages", {}).values()}
    for t in batch:
        p = pages.get(canon[t], {})
        cache[t] = {"title": canon[t], "qid": p.get("pageprops", {}).get("wikibase_item"), "missing": "missing" in p}
    qids = [cache[t]["qid"] for t in batch if cache[t]["qid"]]
    if qids:
        w = get("https://www.wikidata.org/w/api.php", {"action": "wbgetentities", "ids": "|".join(qids), "props": "descriptions", "languages": "en"})
        desc = {k: v.get("descriptions", {}).get("en", {}).get("value") for k, v in w.get("entities", {}).items()}
        for t in batch:
            if cache[t]["qid"]: cache[t]["desc"] = desc.get(cache[t]["qid"])
    cache_path.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
    print(f"{min(n + 50, len(titles))}/{len(titles)}", flush=True)
    time.sleep(1.5)
print("done:", sum(1 for v in cache.values() if v.get("qid")), "with a QID,", sum(1 for v in cache.values() if v.get("desc")), "with a description,", sum(1 for v in cache.values() if v.get("missing")), "missing pages")
