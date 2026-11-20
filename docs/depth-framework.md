# Ascent: how paths reach scholarly depth

Every path starts with something joyful and ends at the level of a good university seminar. The friendly introduction is how people come in, not where they stop.

## 0. The mastery standard

A path is finished only when someone who completes it can honestly say they know the subject. Every path therefore opens with:

- **About:** an introduction for the general reader, with trivia and a visual (such as a life timeline for an author, or a timeline of periods for a discipline).
- **What you will be able to do:** the mastery standard, modelled on what a good university graduate seminar on the subject covers. It must include the complete major canon, the context, the main debates and who holds each side, at least five critics or scholars (including at least one dissenting voice), and the subject's influence.

Every stage opens with a short introduction with trivia, and every work opens with an Introduction layer. Every path ends with a **Final mastery check**: a comprehensive exam, a capstone essay, and an "Explain it" task with unseen questions.

## 1. Four layers inside every work

Each work opens in layer 1. Deeper layers are always one tap away, and later stages expect the learner to use them.

| Layer | Purpose | What it contains |
|---|---|---|
| 1. Introduction | Draw the reader in | A short paragraph on what the work is and why it matters, plus 2 to 4 pieces of trivia a general reader would enjoy. Story cards in the app are made from it. |
| 2. Understand | Read or listen well | Historical context, a reading guide section by section, key terms, which translation or recording to choose and why |
| 3. Analyse | Think like a critic | Central themes, 2 or 3 scholarly debates with the main positions and who holds them, passages to reread closely |
| 4. Scholar | Join the conversation | Full citations of secondary sources (book, chapter, pages), an essay question, and where the field disagrees today |

## 2. Assessment: playful quizzes, optional scholar challenges

Every work ends with a short **quiz** in game formats, so checking understanding feels like play, not an exam. Questions get harder as the stages climb (following Bloom's taxonomy, from remembering facts up to judging arguments), but the format stays light.

**Quiz formats**
- **Multiple choice:** 3 or 4 options, one correct, with a short explanation after answering.
- **Fill in the blank:** one missing word or number, typed in.
- **True or false**, **put in order** (events, works, steps) and **match the pairs** (character to novel, term to definition).

| Stage | What the quiz questions test | Example (Dostoevsky) |
|---|---|---|
| 1. First Encounters | Facts and plot | "Who took down The Gambler as he dictated it?" |
| 2. Entry | Meaning | "Why does Sonya read Raskolnikov the story of Lazarus?" |
| 3 and 4 | Interpretation and debates | "Which critic argued the novels have no final authorial voice?" |
| 5 and 6 | Connections across the whole subject | "Put these five works in the order they were written." |

**Ticking titles off.** Every title has a "Read", "Listened" or "Watched" box the learner ticks when they finish it, separate from the quiz. It keeps their personal record and drives the progress counts.

**Linking paths.** When a side branch or bridge names a subject that has its own path, it links to that path.

**Passing a stage.** A learner passes a stage by scoring at least **70%** across that stage's quizzes. Quizzes can be retaken at any time.

**If a learner falls short:** the app says plainly that the stage is not finished yet, and shows what they missed. They can retake the quizzes, or **continue anyway**, after a clear warning that later stages build on this one. A stage passed this way stays marked **Not finished** on the map and in the collection until they come back and pass it. The Mastery certificate needs every stage passed.

**Scholar challenges (optional).** From Stage 3 on, each stage offers a written challenge (300 to 800 words) for learners who want to go further. They are not needed to move on, but they are required for the Mastery certificate. Written work gets AI feedback against the expert-approved rubric, with optional peer review.

**Final mastery check** (for the certificate): a 40-question comprehensive quiz in the same game formats, a 2,500-word capstone essay, and an "Explain it" task.

The first stage is always called **First Encounters**. Paths may have five to seven stages; the last is always the scholarship stage. How the stages are filled depends on the kind of subject: see `docs/discipline-templates.md`.

**Rubric for written work** (each scored 1 to 4):
- Claim: a clear, arguable position
- Evidence: specific passages, not general impressions
- Scholarship: engages accurately with at least one named critic
- Counter-view: states the strongest opposing reading fairly
- Clarity: organised, precise prose

## 3. Rules for content

- **Cite everything past layer 1:** author, title, year, publisher and, where it matters, chapter or pages.
- **Name the translation.** For works not written in English, recommend one translation and say why, with a free public-domain option where one exists.
- **Present debates as debates.** Give each position its strongest form and name who holds it. Never present one critic's reading as fact.
- **Short quotations only.** Point to passages by book, part and chapter rather than copying long excerpts.
- **Label access beside every title:** **Free** (public domain or open access, with where to find it), **Free + paid** (a free version exists, but the recommended edition costs money), or **Paid** (buy it, or borrow it from a library). Never link to pirated copies.
- **Flag uncertainty.** Any claim the author is not fully sure of is marked `[verify]` until an expert confirms it. Nothing marked `[verify]` reaches learners.

## 4. Path file format

Each path is one Markdown file in `paths/`, so editors and experts can read it and the app can parse it later.

```
---
path: <plain subject name>
status: draft | editor-reviewed | expert-endorsed | verified
version: <n>
---
# <Subject>
<one-line summary>
# About <Subject>          (paragraph, **Trivia** list, ### Life in dates / Timeline)
# What you will be able to do   (the mastery standard)
# Stage <n>: <name>
level: <Beginner | Explorer | Reader | Connoisseur | Expert>
intent: <one line>
gate: <how this stage is passed>
<stage introduction paragraph, with trivia>

## <Work title>
- id, type (read/watch/listen/course), creator, year, length
- edition: <recommended translation or recording, and why>
- access: free | free-and-paid | paid, then " | " and where to find it
### Introduction (paragraph + **Trivia** list; story cards come from it)
### Understand  (context, reading guide, key terms)
### Analyse     (themes, debates with named positions, passages)
### Scholar     (citations, essay question)
### Quiz        (game-format questions, written like this:)
    **Multiple choice.** Question?
    - Wrong option
    - Right option ✓
    - Wrong option
    > Short explanation shown after answering.

    **Fill in the blank.** Sentence with ___ for the gap. [answer: word]
    > Optional explanation.
### Scholar challenge (optional)   (under the last work of stages 3 onward)

# Final mastery check
# Side branches / Bridges to other subjects
```
