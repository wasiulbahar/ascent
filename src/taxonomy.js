// The knowledge taxonomy: a graph, not a tree. One entity per field; a field can have several
// homes (parents). Data: data/taxonomy.json, built from the knowledge-base spec.
import { PATHS } from "./paths.js?v=17";

let T = null;
export async function loadTax() {
  return T ||= indexTax(await (await fetch("data/taxonomy.json?v=17")).json());
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
