// Run with: node tests/taxonomy.test.mjs   (checks data/taxonomy.json and the helpers in src/taxonomy.js)
import assert from "node:assert/strict";
import fs from "node:fs";
import { indexTax, routes, domainsOf, search, children, pathsFor, descendants } from "../src/taxonomy.js";
import { PATHS, DOMAINS } from "../src/paths.js";

const t = indexTax(JSON.parse(fs.readFileSync(new URL("../data/taxonomy.json", import.meta.url), "utf8")));
assert.equal(t.domains.length, 17, "17 domains");
assert.deepEqual(DOMAINS.map(d => "d:" + d.slug).sort(), t.domains.map(d => d.id).sort(), "app domains match the data");
for (const p of PATHS) {
  for (const f of p.fields) assert.ok(t.entities[f], `${p.slug}: field ${f} exists`);
  for (const d of p.doms) assert.ok(t.dom["d:" + d], `${p.slug}: domain ${d} exists`);
  assert.ok(p.doms.every(d => p.fields.some(f => domainsOf(t, f).includes("d:" + d))), `${p.slug}: its domains are reachable from its fields`);
}
assert.equal(t.ups["game-theory"].length, 2, "game theory has two homes");
assert.equal(routes(t, "game-theory").length, 3, "and three routes, because economics sits in two domains");
assert.deepEqual(domainsOf(t, "economics").sort(), ["d:economics-business-finance-and-management", "d:social-and-behavioural-sciences"], "economics sits in two domains");
assert.equal(search(t, "maths")[0], "mathematics", "aliases are searchable");
assert.equal(search(t, "AI")[0], "artificial-intelligence", "an exact alias beats names that merely start with it");
assert.equal(search(t, "genetics")[0], "genetics", "exact names come first");
assert.ok(children(t, "biological-sciences").includes("genetics"), "genetics is a branch of biology");
assert.ok(descendants(t, "mathematics").has("group-theory"), "descendants reach specialisations");
assert.deepEqual(pathsFor("physics").map(p => p.slug), ["physics"], "paths attach to fields");
assert.equal(t.entities["russian-literature"].src, "editorial", "Ascent's additions are marked as editorial");
assert.ok(Object.values(t.entities).every(e => e.s === "proposed"), "everything starts as proposed");
import { codesFor } from "../src/taxonomy.js";
assert.ok(Object.values(t.entities).filter(e => e.t === "discipline").every(e => e.x?.length), "every discipline has crosswalk codes");
assert.equal(codesFor(t, "genetics").via, "biological-sciences", "fields inherit codes from their discipline");
assert.ok(codesFor(t, "physics").codes.some(([s, c]) => s === "UNESCO_ISCED_F" && c === "0533"), "physics maps to ISCED 0533");
console.log("taxonomy: all checks passed");
