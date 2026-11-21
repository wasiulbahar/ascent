"""Builds data/taxonomy.json from the knowledge-base specification (sections 5 to 7).

Run: python tools/build_taxonomy.py <path to universal_academic_knowledge_base.md>

Rules (from the spec, sections 3, 4, 9 and 13):
- Every entity gets a stable ID: a slug of its name. A name that appears in several places is ONE
  entity with several parent links (no duplicates). Domains are separate, with ids "d:<slug>".
- "### Heading" under a domain is a discipline, except headings starting "Other ..." which are
  only groupings: their top-level bullets become disciplines.
- Bullet depth gives the type: discipline > subdiscipline > specialisation. If a name appears at
  several depths, it keeps the broadest type.
- Section 7 collections list fields, methods and topics; unknown names become new entities
  (methods for 7.1 to 7.3, topics otherwise).
- Every entity and link carries its source and status "proposed": the spec is a draft, not a
  reviewed authority. Ascent's own additions (EDITORIAL below) are marked with source "editorial".
"""
import json, re, sys, datetime, pathlib

SPEC = pathlib.Path(sys.argv[1])
OUT = pathlib.Path(__file__).resolve().parent.parent / "data" / "taxonomy.json"
RANK = {"discipline": 0, "subdiscipline": 1, "specialisation": 2, "method": 3, "topic": 3}

# Ascent's own additions, each with a reason, so they are never mistaken for the spec's content.
EDITORIAL_FIELDS = [
    ("Russian literature", "subdiscipline", "literature-and-literary-studies", "The Dostoevsky path needs a home; the spec lists national literatures but not Russian."),
]
EDITORIAL_LINKS = [
    ("economics", "d:economics-business-finance-and-management", "part_of", "The domain is named after it; the spec places the discipline under social sciences."),
]
ALIASES = {  # common short or alternative names, for search
    "mathematics": ["maths", "math"], "computer-science": ["CS", "computing"], "artificial-intelligence": ["AI"],
    "machine-learning": ["ML"], "international-relations": ["IR"], "biological-sciences": ["biology", "life sciences"],
    "bengali-literature": ["Bangla literature"], "economics": ["econ"], "psychology": ["psych"],
    "human-computer-interaction": ["HCI"], "natural-language-processing": ["NLP"], "user-experience": ["UX"],
    "geographic-information-systems": ["GIS"], "statistics-and-probability": ["statistics", "stats"],
}

slug = lambda s: re.sub(r"[^a-z0-9]+", "-", s.lower().replace("'", "")).strip("-")
src_spec = {"source": "spec", "status": "proposed"}
entities, rels, domains, collections = {}, [], [], []

def entity(name, typ, src="spec", note=None):
    i = slug(name)
    e = entities.get(i)
    if not e:
        e = entities[i] = {"n": name, "t": typ, "s": "proposed", "src": src}
        if note: e["note"] = note
    elif RANK.get(typ, 9) < RANK.get(e["t"], 9):
        e["t"] = typ
    return i

def link(child, parent, typ, src="spec", note=None):
    r = [child, parent, typ, src] + ([note] if note else [])
    if not any(x[:3] == r[:3] for x in rels): rels.append(r)

text = SPEC.read_text(encoding="utf-8").replace("\r\n", "\n")
sec6 = text[text.index("# 6. Master academic taxonomy"):text.index("# 7. Cross-disciplinary collections")]
sec7 = text[text.index("# 7. Cross-disciplinary collections"):text.index("# 8. Crosswalks")]

dom = disc = None; stack = []
for line in sec6.split("\n"):
    if m := re.match(r"^## 6\.(\d+) (.+)$", line):
        dom = "d:" + slug(m[2]); domains.append({"id": dom, "n": m[2].strip(), "order": int(m[1])}); disc = None; stack = []
    elif m := re.match(r"^### (.+)$", line):
        name = m[1].strip()
        disc = None if name.lower().startswith("other ") else entity(name, "discipline")
        if disc: link(disc, dom, "part_of")
        stack = []
    elif dom and (m := re.match(r"^( *)-\s+(.+)$", line)):
        depth, name = len(m[1]) // 4, m[2].strip()
        stack = stack[:depth]
        if disc is None and depth == 0:  # top-level item of an "Other ..." grouping
            i = entity(name, "discipline"); link(i, dom, "part_of")
        else:
            level = depth + (0 if disc else -1)
            typ = "subdiscipline" if level == 0 else "specialisation"
            i = entity(name, typ)
            parent = stack[-1] if stack else disc
            link(i, parent, "subdiscipline_of" if typ == "subdiscipline" else "specialisation_of")
        stack.append(i)

kind = {1: "method", 2: "method", 3: "method"}
for block in re.split(r"\n## (?=7\.\d)", sec7)[1:]:
    head, *rest = block.split("\n")
    num, title = re.match(r"7\.(\d+) (.+)", head).groups()
    members = []
    for line in rest:
        if m := re.match(r"^-\s+(.+)$", line):
            name = m[1].strip()
            i = slug(name) if slug(name) in entities else entity(name, kind.get(int(num), "topic"))
            members.append(i)
    collections.append({"id": "c:" + slug(title), "n": title.strip(), "members": members})

for name, typ, parent, why in EDITORIAL_FIELDS:
    i = entity(name, typ, "editorial", why); link(i, parent, "subdiscipline_of", "editorial", why)
for child, parent, typ, why in EDITORIAL_LINKS:
    link(child, parent, typ, "editorial", why)
for i, a in ALIASES.items():
    if i in entities: entities[i]["a"] = a

# sanity checks: every link points at something that exists, and every non-domain entity has a home
known = set(entities) | {d["id"] for d in domains}
bad = [r for r in rels if r[0] not in known or r[1] not in known]
homeless = [i for i in entities if not any(r[0] == i for r in rels) and not any(i in c["members"] for c in collections)]
assert not bad, f"links to unknown entities: {bad[:5]}"
assert len(domains) == 17, f"expected 17 domains, found {len(domains)}"
assert not homeless, f"entities with no home: {homeless[:5]}"

out = {
    "version": "1.1-seed",
    "built": datetime.date.today().isoformat(),
    "sources": {
        "spec": {"title": "Universal Academic Knowledge Base: foundational taxonomy and implementation specification", "version": "1.1", "date": "2026-11-21", "type": "editorial proposal"},
        "editorial": {"title": "Ascent editorial additions", "type": "editorial proposal"},
    },
    "domains": domains, "entities": entities, "rels": rels, "collections": collections,
}
OUT.parent.mkdir(exist_ok=True)
OUT.write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
multi = sum(1 for i in entities if sum(1 for r in rels if r[0] == i) > 1)
types = {}
for e in entities.values(): types[e["t"]] = types.get(e["t"], 0) + 1
print(f"{len(domains)} domains, {len(entities)} entities {types}, {len(rels)} links, {multi} with several homes, {len(collections)} collections, {OUT.stat().st_size // 1024} KB")
