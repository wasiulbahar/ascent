"""Which taxonomy fields each path stage teaches, written into each stage as a "covers:" line.

Field pages use this for "Covered in" links (e.g. Population genetics -> Biology, Stage 5).
Run: python tools/covers.py   (idempotent; checks every id against data/taxonomy.json)
"""
import json, re, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
COVERS = {
    "biology": [["biological-sciences", "evolutionary-biology", "microbiology"], ["cell-biology", "genetics", "evolutionary-biology"],
                ["genetics", "evolutionary-biology", "cell-biology", "molecular-biology"], ["ecology", "conservation-biology", "behavioural-biology", "botany-and-plant-sciences"],
                ["cell-biology", "molecular-biology", "evolutionary-biology", "ecology", "genetics", "population-genetics"], ["genetics", "theoretical-biology", "medical-ethics"]],
    "chemistry": [["chemistry"], ["chemistry", "physical-chemistry"], ["organic-chemistry", "inorganic-chemistry", "physical-chemistry"],
                  ["materials-chemistry", "history-of-science", "history-of-technology"], ["biochemistry", "analytical-chemistry", "theoretical-chemistry", "environmental-chemistry"], ["chemistry", "history-of-science"]],
    "psychology": [["psychology", "cognitive-psychology"], ["psychology", "experimental-psychology"], ["cognitive-psychology", "developmental-psychology", "social-psychology", "clinical-psychology"],
                   ["cultural-psychology", "cross-cultural-psychology", "social-psychology"], ["biological-psychology", "cognitive-psychology", "developmental-psychology", "psychometrics"], ["psychology", "clinical-psychology", "critical-psychology"]],
    "computer-science": [["computer-science", "history-of-technology"], ["programming-languages", "discrete-mathematics", "algorithms"], ["algorithms", "programming-languages", "computer-architecture", "computer-systems"],
                         ["theoretical-computer-science", "computability-theory", "computational-complexity", "artificial-intelligence"], ["operating-systems", "computer-networks", "database-systems", "artificial-intelligence"], ["software-engineering", "ai-safety-and-ethics", "science-and-technology-studies"]],
    "literature": [["world-literature", "literature-and-literary-studies"], ["literary-criticism", "literary-theory", "poetry-studies"], ["world-literature", "japanese-literature", "chinese-literature", "drama-studies"],
                   ["narrative-studies", "english-literature", "american-literature"], ["literary-theory", "comparative-literature", "postcolonial-literature", "african-literature"], ["literary-criticism", "comparative-literature"]],
    "sociology": [["sociology", "social-stratification"], ["sociology", "social-theory"], ["social-theory", "sociology-of-race-and-ethnicity", "urban-sociology"],
                  ["sociology-of-culture", "sociology-of-work", "urban-sociology", "social-theory"], ["sociology", "sociology-of-gender", "sociology-of-race-and-ethnicity"], ["social-theory", "science-and-technology-studies"]],
    "law": [["legal-studies-and-justice", "criminal-justice", "international-criminal-law"], ["legal-research", "comparative-legal-studies", "international-human-rights-law"], ["contract-law", "constitutional-law", "criminal-law", "public-international-law"],
            ["islamic-law", "indigenous-and-customary-law", "international-human-rights-law", "international-criminal-law"], ["jurisprudence", "legal-philosophy", "comparative-law"], ["legal-philosophy", "cyber-law"]],
    "classical-music": [["music", "music-history"], ["music-history", "music-theory"], ["music-history", "musicology"],
                        ["music-theory", "composition"], ["music-history", "musicology", "opera"], ["musicology", "ethnomusicology", "composition"]],
    "dostoevsky": [["russian-literature", "world-literature"], ["russian-literature"], ["russian-literature", "narrative-studies"],
                   ["russian-literature", "philosophy-of-religion"], ["russian-literature", "literary-criticism"], ["literary-theory", "literary-criticism", "comparative-literature"]],
    "economics": [["economics"], ["microeconomics", "macroeconomics"], ["macroeconomics", "political-economy", "economic-history"],
                  ["development-economics", "behavioural-economics", "institutional-economics"], ["international-economics", "financial-economics", "environmental-economics"], ["econometrics", "economics"]],
    "geopolitics": [["geopolitics", "international-relations"], ["geopolitics", "political-geography"], ["international-relations", "political-theory"],
                    ["geopolitics", "area-studies", "comparative-politics"], ["international-security", "foreign-policy", "geopolitics"], ["postcolonial-studies", "international-relations"]],
    "history": [["history", "world-history"], ["historiography"], ["ancient-history", "medieval-history"],
                ["modern-history", "economic-history"], ["contemporary-history", "oral-history"], ["historiography", "social-history"]],
    "mathematics": [["mathematics", "number-theory"], ["mathematical-logic", "linear-algebra", "elementary-algebra"], ["calculus", "linear-algebra", "probability-theory", "euclidean-geometry"],
                    ["real-analysis", "abstract-algebra", "group-theory"], ["topology", "complex-analysis", "dynamical-systems"], ["philosophy-of-mathematics", "mathematics"]],
    "philosophy": [["philosophy"], ["ethics", "epistemology", "metaphysics"], ["political-philosophy", "philosophy-of-mind", "aesthetics"],
                   ["asian-philosophy", "african-philosophy", "comparative-philosophy"], ["analytic-philosophy", "continental-philosophy"], ["philosophy"]],
    "physics": [["physics", "cosmology"], ["classical-mechanics", "calculus"], ["classical-mechanics", "electromagnetism", "optics-and-photonics", "thermodynamics-and-statistical-physics"],
                ["special-relativity", "general-relativity", "quantum-mechanics"], ["analytical-mechanics", "electrodynamics", "statistical-mechanics", "special-relativity"], ["history-of-science", "particle-physics"]],
}
E = json.loads((ROOT / "data" / "taxonomy.json").read_text(encoding="utf-8"))["entities"]
bad = [(s, f) for s, st in COVERS.items() for c in st for f in c if f not in E]
assert not bad, f"unknown field ids: {bad}"
for slug, stages in COVERS.items():
    p = ROOT / "paths" / f"{slug}.md"; t = p.read_text(encoding="utf-8")
    t = re.sub(r"^covers:.*\n", "", t, flags=re.M)
    parts = re.split(r"(?m)^(?=# Stage \d+:)", t)
    assert len(parts) - 1 == len(stages), f"{slug}: {len(parts) - 1} stages, {len(stages)} cover lists"
    for i in range(1, len(parts)):
        parts[i] = re.sub(r"(?m)^(gate:.*\n)", lambda m: m[1] + "covers: " + ", ".join(stages[i - 1]) + "\n", parts[i], count=1)
    p.write_text("".join(parts), encoding="utf-8", newline="\n")
print("covers written for", len(COVERS), "paths")
