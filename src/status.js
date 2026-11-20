// Stage rules from docs/depth-framework.md, as pure functions so they can be tested.
// A stage passes when every quiz in it has been taken and the best scores add up to at least
// PASS_MARK of all its questions. A stage with no quizzes passes when every work is ticked.
// The next stage opens when the previous one passed, or the learner chose to continue anyway;
// a stage continued past without passing stays "notfinished" until it is passed.

export const PASS_MARK = 0.7;

// acc: { isDone(workId), best(workId) -> {score,total}|null, isSkipped(stageNum) }
export function stageStatus(stage, acc, prevOpenToNext) {
  const quizzed = stage.works.filter(w => w.quiz.length);
  const taken = quizzed.filter(w => acc.best(w.id));
  const total = quizzed.reduce((a, w) => a + w.quiz.length, 0);
  const right = taken.reduce((a, w) => a + acc.best(w.id).score, 0);
  const allTaken = taken.length === quizzed.length;
  const passed = quizzed.length ? allTaken && right / total >= PASS_MARK : stage.works.every(w => acc.isDone(w.id));
  const skipped = acc.isSkipped(stage.num);
  const state =
    passed ? "passed" :
    !prevOpenToNext ? "locked" :
    skipped ? "notfinished" :
    allTaken && quizzed.length ? "failed" : "open";
  return { state, taken: taken.length, quizzes: quizzed.length, right, total, pct: total ? right / total : 0, opensNext: passed || skipped };
}

export function pathStatuses(path, acc) {
  let open = true;
  return path.stages.map(s => { const st = stageStatus(s, acc, open); open = st.opensNext; return st; });
}
