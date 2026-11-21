// Stage rules from docs/depth-framework.md, as pure functions so they can be tested.
// A stage passes when every quiz in it has been taken and the best scores add up to at least
// PASS_MARK of all its questions. A stage with no quizzes passes when every work is ticked.
// The next stage opens when the previous one passed, or the learner chose to continue anyway;
// a stage continued past without passing stays "notfinished" until it is passed.
// A stage also passes when its placement-test section (work id "placement-s<N>") was passed.

export const PASS_MARK = 0.7;
export const placementId = num => `placement-s${num}`;

// acc: { isDone(workId), best(workId) -> {score,total}|null, isSkipped(stageNum) }
export function stageStatus(stage, acc, prevOpenToNext) {
  const quizzed = stage.works.filter(w => w.quiz.length);
  const taken = quizzed.filter(w => acc.best(w.id));
  const total = quizzed.reduce((a, w) => a + w.quiz.length, 0);
  const right = taken.reduce((a, w) => a + acc.best(w.id).score, 0);
  const allTaken = taken.length === quizzed.length;
  const pl = acc.best(placementId(stage.num)), placed = !!pl && pl.score / pl.total >= PASS_MARK;
  const passed = placed || (quizzed.length ? allTaken && right / total >= PASS_MARK : stage.works.every(w => acc.isDone(w.id)));
  const skipped = acc.isSkipped(stage.num);
  const state =
    passed ? "passed" :
    !prevOpenToNext ? "locked" :
    skipped ? "notfinished" :
    allTaken && quizzed.length ? "failed" : "open";
  return { state, placed, taken: taken.length, quizzes: quizzed.length, right, total, pct: total ? right / total : 0, opensNext: passed || skipped };
}

export function pathStatuses(path, acc) {
  let open = true;
  return path.stages.map(s => { const st = stageStatus(s, acc, open); open = st.opensNext; return st; });
}

// Mastery: every stage passed, plus the grand quiz (work id "mastery") at MASTERY_MARK or better.
export const MASTERY_MARK = 0.8;
export const masteryId = "mastery";
export function masteryState(path, acc) {
  const sts = pathStatuses(path, acc), left = sts.filter(s => s.state !== "passed");
  const b = acc.best(masteryId);
  return { ready: !left.length, left: left.length, leftStages: path.stages.filter((s, i) => sts[i].state !== "passed"), best: b, passed: !left.length && !!b && b.score / b.total >= MASTERY_MARK };
}
