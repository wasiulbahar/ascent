// The knowledge taxonomy: a graph, not a tree. One entity per field; a field can have several
// homes (parents). Data: data/taxonomy.json, built from the knowledge-base spec.
import { PATHS } from "./paths.js?v=27";

let T = null;
export async function loadTax() {
  if (T) return T;
  const [d, rows] = await Promise.all([fetch("data/taxonomy.json?v=27").then(r => r.json()), changes()]);
  return T = indexTax(applyTax(d, rows));
}
export function indexTax(d) {
  const ups = {}, downs = {}, inCol = {};
  for (const [c, p, t, src, note] of d.rels) {
    (ups[c] ||= []).push({ p, t, src, note });
    (downs[p] ||= []).push(c);
  }
  for (const c of d.collections) for (const m of c.members) (inCol[m] ||= []).push(c);
  const dom = Object.fromEntries(d.domains.map(x => [x.id, x]));
  return { ...d, ups, downs, inCol, dom };
}

export const nameOf = (t, id) => t.dom[id]?.n || t.entities[id]?.n || id;
export const children = (t, id) => (t.downs[id] || []).slice().sort((a, b) => nameOf(t, a).localeCompare(nameOf(t, b)));
export const pathsFor = id => PATHS.filter(p => p.fields.includes(id));

// every route from a domain down to this entity (a field with two homes has two routes)
export function routes(t, id, seen = new Set()) {
  if (t.dom[id]) return [[id]];
  if (seen.has(id)) return [];
  const out = (t.ups[id] || []).flatMap(u => routes(t, u.p, new Set([...seen, id])).map(r => [...r, id]));
  return out.length ? out : [[id]];
}
// the domains an entity sits in, through any of its homes
export const domainsOf = (t, id) => [...new Set(routes(t, id).map(r => r[0]).filter(x => t.dom[x]))];

// all entities below this one (for counts)
export function descendants(t, id, acc = new Set()) {
  for (const c of t.downs[id] || []) if (!acc.has(c)) { acc.add(c); descendants(t, c, acc); }
  return acc;
}

// search names and aliases; names that start with the query first, then broader types first
const RANK = { discipline: 0, subdiscipline: 1, specialisation: 2, method: 3, topic: 3 };
export function search(t, q, limit = 40) {
  q = q.trim().toLowerCase(); if (!q) return [];
  const hits = [];
  for (const [id, e] of Object.entries(t.entities)) {
    const names = [e.n, ...(e.a || [])].map(s => s.toLowerCase());
    const at = Math.min(...names.map(s => { const i = s.indexOf(q); return s === q ? -1 : i < 0 ? 99 : i === 0 ? 0 : 1; })); // exact name or alias first
    if (at < 99) hits.push({ id, at, r: RANK[e.t] ?? 9 });
  }
  return hits.sort((a, b) => a.at - b.at || a.r - b.r || t.entities[a.id].n.localeCompare(t.entities[b.id].n)).slice(0, limit).map(h => h.id);
}

export const TYPE_LABEL = { discipline: "Discipline", subdiscipline: "Field", specialisation: "Specialisation", method: "Method", topic: "Topic" };

// external classification codes: the entity's own, else the nearest ancestor's ("via")
export function codesFor(t, id) {
  if (t.entities[id]?.x) return { codes: t.entities[id].x, via: null };
  for (const r of routes(t, id)) for (let i = r.length - 2; i >= 0; i--) if (t.entities[r[i]]?.x) return { codes: t.entities[r[i]].x, via: r[i] };
  return { codes: [], via: null };
}
export const MAP_TYPE = { close: "about the same scope", broader: "a broader category", narrower: "covers part of it", related: "overlaps" };

// --- points of interest (people, events, works...) from Wikipedia Vital articles Level 4 ---
// data/poi/index.json, built by tools/build_poi.py; one record per item, several homes allowed.
const slugify = s => s.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
let P = null;
export async function loadPoi() {
  if (P) return P;
  const [d, rows] = await Promise.all([fetch("data/poi/index.json?v=27").then(r => r.json()), changes()]);
  return P = applyPoi(indexPoi(d), rows);
}
export function indexPoi(d) {
  const items = d.items.map(([n, ty, h, id, rv]) => ({ id: id || slugify(n), n, ty: d.meta.types[ty], h: h.map(i => d.meta.homes[i]), rv: !!rv }));
  const byField = {};
  for (const it of items) for (const h of it.h) (byField[h] ||= []).push(it);
  return { ...d, items, byField, byId: Object.fromEntries(items.map(i => [i.id, i])) };
}
// points of interest at this field or anywhere below it, each once
export function poisUnder(t, p, id) {
  const seen = new Set(), out = [];
  for (const f of [id, ...descendants(t, id)]) for (const it of p.byField[f] || []) if (!seen.has(it.id)) { seen.add(it.id); out.push(it); }
  return out.sort((a, b) => a.n.localeCompare(b.n));
}
export function searchPoi(p, q, limit = 20) {
  q = q.trim().toLowerCase(); if (q.length < 2) return [];
  const rank = n => { n = n.toLowerCase(); return n === q ? 0 : n.startsWith(q) ? 1 : n.includes(q) ? 2 : 9; }; // exact, starts with, contains
  return p.items.map(it => ({ it, r: rank(it.n) })).filter(x => x.r < 9)
    .sort((a, b) => a.r - b.r || a.it.n.localeCompare(b.it.n)).slice(0, limit).map(x => x.it);
}
const details = {};
export async function poiDetail(id) {
  const k = /^[a-z]/.test(id) ? id[0] : "0";
  details[k] ||= await (await fetch(`data/poi/d-${k}.json?v=27`)).json();
  return details[k][id];
}
export const POI_LABEL = { person: "Person", event: "Event", place: "Place", work: "Work", invention: "Invention or technology", law: "Law or legal text", species: "Species or organism", concept: "Concept or idea", institution: "Institution", object: "Object" };

// --- approved editorial changes (supabase tax_changes), applied on top of the published files ---
// app.js sets hooks.changes to a function returning approved rows; resetTax() reloads after an edit.
export const hooks = { changes: null };
let changesP = null;
const changes = () => changesP ||= (hooks.changes ? hooks.changes().catch(() => []) : Promise.resolve([]));
export function resetTax() { T = null; P = null; changesP = null; }
export function applyTax(d, rows) {
  for (const r of rows) {
    const p = r.payload || {}, e = d.entities[r.target];
    if (r.kind === "add_field" && !e) {
      d.entities[r.target] = { n: p.name, t: p.type || "subdiscipline", s: "approved", src: "editorial", note: r.note || "" };
      if (p.parent) d.rels.push([r.target, p.parent, p.parent.startsWith("d:") ? "part_of" : "subdiscipline_of", "editorial", r.note || ""]);
    }
    if (!e) continue;
    if (r.kind === "rename" && p.name) { e.a = [...(e.a || []), e.n]; e.n = p.name; }
    if (r.kind === "add_link" && p.parent && !d.rels.some(x => x[0] === r.target && x[1] === p.parent)) d.rels.push([r.target, p.parent, p.parent.startsWith("d:") ? "part_of" : "subdiscipline_of", "editorial", r.note || ""]);
    if (r.kind === "remove_link") d.rels = d.rels.filter(x => !(x[0] === r.target && x[1] === p.parent));
    if (r.kind === "deprecate") { e.s = "deprecated"; e.why = r.note || ""; }
    if (r.kind === "merge" && p.into) { e.s = "merged"; e.into = p.into; }
    if (r.kind === "approve_field" && e.s === "proposed") e.s = "approved";
  }
  return d;
}
export function applyPoi(p, rows) {
  for (const r of rows) {
    const it = p.byId[r.target]; if (!it) continue;
    if (r.kind === "poi_homes" && Array.isArray(r.payload?.homes) && r.payload.homes.length) { it.h = r.payload.homes; it.rv = false; }
    if (r.kind === "approve_poi") { it.rv = false; it.ok = true; }
  }
  p.byField = {};
  for (const it of p.items) for (const h of it.h) (p.byField[h] ||= []).push(it);
  return p;
}
