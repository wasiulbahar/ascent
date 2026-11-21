# Ascent: work done while you were away (2026-11-21)

Nothing is pushed. Everything below is on your computer, tested, and ready to push when you say so (asset version `?v=14`).

## New paths (3)

| Path | Area | Works | Questions | Notes |
|---|---|---|---|---|
| Physics | Natural sciences | 24 | 96 | First science path. "Before you start" maths ladder; number problems from Stage 2; Bose (Dhaka, 1924) thread; Hossenfelder as the dissent |
| Mathematics | Formal sciences | 24 | 96 | Proofs from Stage 2; Brahmagupta, Madhava, Ramanujan thread; Lakatos as the dissent |
| Biology | Natural sciences | 24 | 96 | J. C. Bose (born Mymensingh) thread; ethics (HeLa); Noble against Dawkins as the dissent |

There are now 9 paths and 952 quiz questions. All three new paths have no facts left marked to check. Every numerical answer was recomputed.

## App changes

- **Number answers.** A blank whose answer is a number now accepts it with units ("10 m/s" counts as 10). Number answers are compared as numbers, so an answer of −1 no longer accepts "1". The quiz feedback shows one clean answer ("enquiry", not "enquiry / inquiry").
- **Placement results in Insights.** For each path, the admin Insights tab shows how many people took the placement test and which stage they started at. It appears once someone has taken a test.
- **Review page.** Answers are shuffled there too, and the page now has all 9 paths.
- **New icons.** Σ for Mathematics and a leaf for Biology.

## Checks you can rerun

- `node tools/audit.mjs` checks every path file. **Errors:** missing or duplicate ids, quizzes under 4 questions, a wrong number of correct answers, leftover `[verify]` markers. **Warnings:** repeated questions, giveaway questions, mismatched Free/Paid labels.
- `tests/flows.html`: open it on the local preview, signed out. It runs 8 click-through tests on the real app: render, tick, quiz pass, fail and continue anyway, placement, number answers, shuffling and map. It refuses to run if a signed-in account is present. All 8 pass.
- `node tests/status.test.mjs` checks the stage rules, including placement.

## Audit of the existing paths

- Replaced 8 trivial "What does it cost?" questions and 1 repeated question with real ones (Classical music, Economics, Philosophy, History).
- Fixed 2 access notes that hinted at unconfirmed free copies (Geopolitics).
- Main free sources checked online. Yale, Project Gutenberg and the Feynman Lectures block automated checks, but they're up.
- One warning left on purpose: Freakonomics (Economics) is a paid book with a free companion podcast.

## Still needs you

1. **Push.** Say "push it" and I'll release v14.
2. **Email sender** (Resend or Brevo in Supabase) before inviting the pilot.
3. **Dostoevsky images:** OK to download with a generic contact, or download them yourself.
4. **A design choice:** "Before you start" currently shows after the stages on science paths. Should it move above them?
