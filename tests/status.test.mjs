// Run with: node tests/status.test.mjs
import assert from "node:assert/strict";
import { pathStatuses, masteryState } from "../src/status.js";

const w = (id, n) => ({ id, quiz: Array(n).fill({}) });
const path = { stages: [
  { num: 1, works: [w("a", 3), w("b", 3)] },
  { num: 2, works: [w("c", 2), w("d", 0)] },
  { num: 3, works: [w("e", 0)] },
] };
const acc = (best = {}, done = [], skips = []) => ({ best: id => best[id] || null, isDone: id => done.includes(id), isSkipped: n => skips.includes(n) });
const states = a => pathStatuses(path, a).map(s => s.state);

assert.deepEqual(states(acc()), ["open", "locked", "locked"], "fresh start: only stage 1 open");
assert.deepEqual(states(acc({ a: { score: 3, total: 3 } })), ["open", "locked", "locked"], "one of two quizzes taken: still open");
assert.deepEqual(states(acc({ a: { score: 3, total: 3 }, b: { score: 2, total: 3 } })), ["passed", "open", "locked"], "5 of 6 = 83%: passed");
assert.deepEqual(states(acc({ a: { score: 2, total: 3 }, b: { score: 2, total: 3 } })), ["failed", "locked", "locked"], "4 of 6 = 67%: failed, next stays locked");
assert.deepEqual(states(acc({ a: { score: 2, total: 3 }, b: { score: 2, total: 3 } }, [], [1])), ["notfinished", "open", "locked"], "continue anyway opens stage 2, stage 1 stays not finished");
assert.deepEqual(states(acc({ a: { score: 3, total: 3 }, b: { score: 3, total: 3 }, c: { score: 2, total: 2 } })), ["passed", "passed", "open"], "stage 2 passes on its only quiz");
assert.deepEqual(states(acc({ a: { score: 3, total: 3 }, b: { score: 3, total: 3 }, c: { score: 2, total: 2 } }, ["e"])), ["passed", "passed", "passed"], "a stage with no quizzes passes when every work is ticked");
assert.deepEqual(states(acc({ "placement-s1": { score: 3, total: 4 }, "placement-s2": { score: 4, total: 4 } })), ["passed", "passed", "open"], "placement passes stages 1 and 2");
assert.deepEqual(states(acc({ "placement-s1": { score: 2, total: 4 } })), ["open", "locked", "locked"], "failed placement changes nothing");
const allPlaced = { "placement-s1": { score: 4, total: 4 }, "placement-s2": { score: 4, total: 4 }, "placement-s3": { score: 4, total: 4 } };
assert.equal(masteryState(path, acc({ mastery: { score: 40, total: 40 } })).passed, false, "mastery needs every stage passed first");
assert.equal(masteryState(path, acc(allPlaced)).ready, true, "all stages passed: the grand quiz is ready");
assert.equal(masteryState(path, acc({ ...allPlaced, mastery: { score: 31, total: 40 } })).passed, false, "31 of 40 = 77.5%: not mastery");
assert.equal(masteryState(path, acc({ ...allPlaced, mastery: { score: 32, total: 40 } })).passed, true, "32 of 40 = 80%: mastery");
assert.equal(masteryState(path, acc()).left, 3, "three stages still to pass");
console.log("status rules: all checks passed");
