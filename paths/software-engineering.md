---
path: Software Engineering
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Software Engineering

How teams build software that works and keeps working: version control and practices, design and modularity, testing and code review, continuous delivery and reliability, lessons from famous failures, and open source and supply chain security. About 180 to 220 hours over seven to nine months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Several excellent books are free online, as are Google's engineering guides and official inquiry reports. You need to program in at least one language; the Programming path is a good start. Build a real project alongside the path and apply each stage to it.

# About software engineering

Software engineering is the discipline of building and maintaining software systems with teams, over time, under real constraints. It covers design, testing, collaboration, delivery, operations and the ethics of software that people depend on.

This path begins with practical habits and version control, teaches design and modularity, then testing, code review and refactoring, moves to continuous delivery and reliability, studies famous failures, and ends with open source, software supply chain security and research.

**Trivia**
- The term “software engineering” was popularised by Margaret Hamilton during the Apollo programme and by a 1968 NATO conference.
- The Ariane 5 rocket exploded 37 seconds after its first launch in 1996 because converting a large number overflowed a 16-bit integer.
- In 2012 a faulty deployment at Knight Capital lost about $440 million in 45 minutes.
- Winston Royce's 1970 paper, often cited as the origin of the “waterfall” model, actually warned that a purely sequential process was risky.

### Timeline
- **1968 · A NATO conference** names “software engineering” and discusses a “software crisis”.
- **1970 · Winston Royce** describes a staged development process.
- **1972 · David Parnas** argues for information hiding in modules.
- **1975 · Fred Brooks** publishes *The Mythical Man-Month*.
- **1986 · Brooks** argues there is “no silver bullet”.
- **1996 · Ariane 5 Flight 501** fails because of a software error.
- **1999 · Martin Fowler** publishes *Refactoring*.
- **2001 · The Agile Manifesto** is written.
- **2005 · Linus Torvalds** creates Git.
- **2021 · Log4Shell** exposes risks in open-source dependencies.

# What you will be able to do

At the end of this path you will work the way a capable professional software engineer does. You will be able to:

- **Work in teams:** version control, code review and clear communication.
- **Design software:** modules, interfaces, information hiding and managing complexity.
- **Assure quality:** unit, integration and end-to-end testing, and refactoring safely.
- **Deliver and operate:** continuous integration and delivery, monitoring and reliability.
- **Engineer responsibly:** learn from failures, manage dependencies and consider who software affects.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Software engineers and computer science educators from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Habits of good engineers.
gate: Score 70% or more across this stage's quizzes.
covers: software-engineering, programming-languages

Start with habits and tools. This stage gives you a classic of practical advice, Google's free engineering book, a free Git book, and a short checklist for teams.

## The Pragmatic Programmer
- id: se1 · type: read · creator: Andrew Hunt and David Thomas · year: 1999 · length: about 10 hours
- access: paid | buy, or borrow from a library

### Introduction
Practical advice on craftsmanship: don't repeat yourself, fix broken windows, automate, and take responsibility for your code.

### Quiz
**Multiple choice.** What does “don't repeat yourself” warn against?
- Duplicated knowledge in code ✓
- Repeating lessons
- Talking twice

**Multiple choice.** What are “broken windows”?
- Small problems left unfixed ✓
- Real windows
- Bugs in browsers only

**Multiple choice.** Who wrote the book?
- Hunt and Thomas ✓
- Fowler and Beck
- Brooks

**Multiple choice.** When was the first edition published?
- 1999 ✓
- 1968
- 2020

## Software Engineering at Google
- id: se2 · type: read · creator: Titus Winters, Tom Manshreck and Hyrum Wright · year: 2020 · length: about 25 hours
- access: free | free online

### Introduction
Defines software engineering as “programming integrated over time” and shares how Google handles scale, testing and culture.

### Quiz
**Multiple choice.** How does the book define software engineering?
- Programming integrated over time ✓
- Typing fast
- Making websites

**Multiple choice.** Which topic does it cover?
- Testing ✓
- Cooking
- Painting

**Multiple choice.** Is the book free online?
- Yes ✓
- No
- Only for Google staff

**Multiple choice.** When was it published?
- 2020 ✓
- 1999
- 1975

## Pro Git
- id: se3 · type: read · creator: Scott Chacon and Ben Straub · year: 2009 · length: about 12 hours
- access: free | free online

### Introduction
The free book on Git: commits, branches, merging, rebasing and collaborating through remotes.

### Quiz
**Multiple choice.** What does Git track?
- Changes to files over time ✓
- Weather
- Bank accounts

**Multiple choice.** What lets you work on features separately?
- Branches ✓
- Folders only
- Emails

**Multiple choice.** Who created Git?
- Linus Torvalds ✓
- Scott Chacon
- Martin Fowler

**Multiple choice.** Is the book free?
- Yes ✓
- No
- Only for students

## The Joel Test
- id: se4 · type: read · creator: Joel Spolsky · year: 2000 · length: about 30 minutes
- access: free | free online

### Introduction
Twelve quick yes-or-no questions about a team's practices, such as using version control and fixing bugs before writing new code.

### Quiz
**Multiple choice.** How many questions does the test have?
- Twelve ✓
- Three
- One hundred

**Multiple choice.** Which practice is on the list?
- Using version control ✓
- Working weekends
- Avoiding tests

**Multiple choice.** Who wrote it?
- Joel Spolsky ✓
- Fred Brooks
- Kent Beck

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for managers

---

# Stage 2: Design and Complexity
level: Explorer
intent: Structuring software.
gate: Score 70% or more across this stage's quizzes.
covers: software-engineering, software-architecture

This stage teaches design: a modern book on complexity, a landmark paper on modules, requirements and user stories, and classic design patterns.

## A Philosophy of Software Design
- id: se5 · type: read · creator: John Ousterhout · year: 2018 · length: about 6 hours
- access: paid | buy, or borrow from a library

### Introduction
Argues the main job of design is reducing complexity, favouring “deep” modules with simple interfaces and powerful implementations.

### Quiz
**Multiple choice.** What is design's main job, for Ousterhout?
- Reducing complexity ✓
- Adding features
- Using patterns

**Multiple choice.** What is a “deep” module?
- Simple interface, powerful implementation ✓
- A module with many files
- A hidden module

**Multiple choice.** Who wrote “A Philosophy of Software Design”?
- John Ousterhout ✓
- David Parnas
- Erich Gamma

**Multiple choice.** When was “A Philosophy of Software Design” published?
- 2018 ✓
- 1972
- 1994

## On the Criteria To Be Used in Decomposing Systems into Modules
- id: se6 · type: read · creator: David L. Parnas · year: 1972 · length: about 2 hours
- access: free | free online

### Introduction
Parnas argued modules should hide design decisions likely to change, the principle of information hiding.

### Quiz
**Multiple choice.** What should modules hide?
- Design decisions likely to change ✓
- Their names
- Nothing

**Multiple choice.** What is this principle called?
- Information hiding ✓
- Code golf
- Data mining

**Multiple choice.** Who wrote the paper?
- David Parnas ✓
- John Ousterhout
- Winston Royce

**Multiple choice.** When was “On the Criteria To Be Used in Decomposing Systems into Modules” published?
- 1972 ✓
- 1986
- 2018

## Requirements and user stories
- id: se7 · type: read · creator: Agile guides from Atlassian and the Agile Alliance · length: about 3 hours
- access: free | free online

### Introduction
User stories describe needs from the user's view (“As a…, I want…, so that…”) with acceptance criteria that show when they're done.

### Quiz
**Multiple choice.** Whose view do user stories take?
- The user's ✓
- The compiler's
- The manager's only

**Multiple choice.** What shows a story is done?
- Acceptance criteria ✓
- A long meeting
- Nothing

**Multiple choice.** Which template is common?
- “As a…, I want…, so that…” ✓
- “Once upon a time…”
- None

**Multiple choice.** Are these guides free?
- Yes ✓
- No
- Only for customers

## Design Patterns
- id: se8 · type: read · creator: Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides · year: 1994 · length: about 15 hours
- access: paid | buy, or borrow from a library

### Introduction
The “Gang of Four” catalogue of reusable object-oriented designs such as Observer, Strategy and Factory.

### Quiz
**Multiple choice.** What is the authors' nickname?
- The Gang of Four ✓
- The Fab Four
- The Big Three

**Multiple choice.** Which pattern is in the catalogue?
- Observer ✓
- Waterfall
- Kanban

**Multiple choice.** What kind of designs does it collect?
- Reusable object-oriented designs ✓
- Building plans
- Fashion

**Multiple choice.** When was “Design Patterns” published?
- 1994 ✓
- 2018
- 1968

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Redesign a module in your project to hide a decision likely to change.
2. Write user stories and acceptance criteria for a feature.
3. When does a design pattern add complexity instead of removing it?

---

# Stage 3: Quality: Testing, Review and Refactoring
level: Reader
intent: Keeping code correct and clean.
gate: Score 70% or more across this stage's quizzes.
covers: software-engineering, software-testing

This stage covers test-driven development, the balance of test types, code review, and improving code safely.

## Test-Driven Development: By Example
- id: se9 · type: read · creator: Kent Beck · year: 2002 · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
Write a failing test, make it pass simply, then refactor: red, green, refactor.

### Quiz
**Multiple choice.** What comes first in TDD?
- A failing test ✓
- The final code
- Documentation

**Multiple choice.** What is the cycle called?
- Red, green, refactor ✓
- Plan, build, ship
- Read, write, run

**Multiple choice.** Who wrote “Test-Driven Development: By Example”?
- Kent Beck ✓
- Martin Fowler
- Joel Spolsky

**Multiple choice.** When was “Test-Driven Development: By Example” published?
- 2002 ✓
- 1999
- 2018

## The practical test pyramid
- id: se10 · type: read · creator: Ham Vocke on martinfowler.com · year: 2018 · length: about 2 hours
- access: free | free online

### Introduction
Many fast unit tests, fewer integration tests, and few slow end-to-end tests give confidence without slowing teams down.

### Quiz
**Multiple choice.** Which tests should be most numerous?
- Unit tests ✓
- End-to-end tests
- Manual tests

**Multiple choice.** Why have fewer end-to-end tests?
- They are slow and brittle ✓
- They are useless
- They are illegal

**Multiple choice.** Where is the article published?
- martinfowler.com ✓
- A cookbook
- A newspaper

**Multiple choice.** Is “The practical test pyramid” free?
- Yes ✓
- No
- Only for members

## Google engineering practices: code review
- id: se11 · type: read · creator: Google · length: about 2 hours
- access: free | free online

### Introduction
Guides for reviewers and authors: review for design, correctness and readability, respond quickly and kindly, and keep changes small.

### Quiz
**Multiple choice.** What should changes be?
- Small ✓
- As large as possible
- Secret

**Multiple choice.** What should reviewers look at?
- Design, correctness and readability ✓
- Only spelling
- Nothing

**Multiple choice.** How should reviewers respond?
- Quickly and kindly ✓
- Slowly and harshly
- Never

**Multiple choice.** Are the guides free?
- Yes ✓
- No
- Only for Google staff

## Refactoring
- id: se12 · type: read · creator: Martin Fowler · year: 1999 · length: about 15 hours
- access: paid | buy, or borrow from a library

### Introduction
A catalogue of small, behaviour-preserving changes that improve code structure, done safely with tests.

### Quiz
**Multiple choice.** What does refactoring preserve?
- Behaviour ✓
- Bugs
- Nothing

**Multiple choice.** What makes refactoring safe?
- Tests ✓
- Luck
- Speed

**Multiple choice.** Who wrote “Refactoring”?
- Martin Fowler ✓
- Kent Beck
- John Ousterhout

**Multiple choice.** When was “Refactoring” published?
- 1999 ✓
- 2002
- 1994

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Build a feature with TDD and reflect on the design that emerged.
2. Review a real pull request using Google's guide.
3. Refactor a messy function step by step with tests.

---

# Stage 4: Delivery and Reliability
level: Connoisseur
intent: Shipping often, staying up.
gate: Score 70% or more across this stage's quizzes.
covers: devops-and-site-reliability, cloud-computing

This stage covers continuous integration, Google's book on reliability, research on high-performing teams, and principles for cloud apps.

## Continuous Integration
- id: se13 · type: read · creator: Martin Fowler · year: 2006 · length: about 2 hours
- access: free | free online

### Introduction
Merge everyone's work at least daily, build and test it automatically, and fix a broken build immediately.

### Quiz
**Multiple choice.** How often should work be integrated?
- At least daily ✓
- Once a year
- Never

**Multiple choice.** What happens on each integration?
- Automatic build and tests ✓
- A party
- Nothing

**Multiple choice.** What should be fixed immediately?
- A broken build ✓
- The office coffee
- Nothing

**Multiple choice.** Is the article free?
- Yes ✓
- No
- Only for members

## Site Reliability Engineering
- id: se14 · type: read · creator: Betsy Beyer, Chris Jones, Jennifer Petoff and Niall Richard Murphy (Google) · year: 2016 · length: about 30 hours
- access: free | free online

### Introduction
How Google runs production systems: service level objectives, error budgets, monitoring, on-call and blameless postmortems.

### Quiz
**Multiple choice.** What is an error budget?
- Allowed unreliability that teams can spend ✓
- A financial loss
- A bug list

**Multiple choice.** What kind of postmortems does the book recommend?
- Blameless ✓
- Blaming
- Secret

**Multiple choice.** Which company's practices does it describe?
- Google's ✓
- Knight Capital's
- Nobody's

**Multiple choice.** Is it free online?
- Yes ✓
- No
- Only for staff

## Accelerate
- id: se15 · type: read · creator: Nicole Forsgren, Jez Humble and Gene Kim · year: 2018 · length: about 6 hours
- access: paid | buy, or borrow from a library

### Introduction
Research across thousands of teams finding that deploying often, recovering fast and low change failure rates go together with organisational performance.

### Quiz
**Multiple choice.** What did the research link to organisational performance?
- Deploying often and recovering fast ✓
- Long release cycles
- Working weekends

**Multiple choice.** How many teams were studied?
- Thousands ✓
- One
- Ten

**Multiple choice.** Who is the lead author?
- Nicole Forsgren ✓
- Kent Beck
- Martin Fowler

**Multiple choice.** When was “Accelerate” published?
- 2018 ✓
- 2006
- 1999

## The Twelve-Factor App
- id: se16 · type: read · creator: Adam Wiggins (Heroku) · year: 2011 · length: about 1 hour
- access: free | free online

### Introduction
Twelve principles for cloud apps, such as storing configuration in the environment and treating logs as event streams.

### Quiz
**Multiple choice.** Where should configuration be stored?
- In the environment ✓
- In the code
- On paper

**Multiple choice.** How should logs be treated?
- As event streams ✓
- As secrets
- As images

**Multiple choice.** How many factors are there?
- Twelve ✓
- Three
- Fifty

**Multiple choice.** Is “The Twelve-Factor App” free?
- Yes ✓
- No
- Only for customers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Set up continuous integration for your project.
2. Define service level objectives for an app you use.
3. Write a blameless postmortem for a bug you shipped.

---

# Stage 5: When Software Fails
level: Specialist
intent: Learning from disasters.
gate: Score 70% or more across this stage's quizzes.
covers: software-engineering, safety-engineering

This stage studies failures: a rocket, a trading firm, a long-running scandal, and the classic essay on why software is hard.

## Ariane 5 Flight 501 inquiry report
- id: se17 · type: read · creator: Inquiry Board (ESA and CNES) · year: 1996 · length: about 2 hours
- access: free | free online

### Introduction
Code reused from Ariane 4 overflowed on Ariane 5's faster flight, shutting down guidance systems 37 seconds after launch.

### Quiz
**Multiple choice.** Where was the faulty code reused from?
- Ariane 4 ✓
- A video game
- A bank

**Multiple choice.** What kind of error occurred?
- A numeric overflow ✓
- A spelling mistake
- A power cut

**Multiple choice.** How long after launch did the rocket fail?
- 37 seconds ✓
- 37 minutes
- 37 days

**Multiple choice.** Is the report free?
- Yes ✓
- No
- Only for ESA staff

## Knight Capital's trading loss
- id: se18 · type: read · creator: US Securities and Exchange Commission order · year: 2012 · length: about 2 hours
- access: free | free online

### Introduction
Old code reactivated during a deployment sent millions of unintended orders, losing about $440 million in 45 minutes.

### Quiz
**Multiple choice.** What caused the losses?
- Old code reactivated during a deployment ✓
- A hacker
- An earthquake

**Multiple choice.** About how much was lost?
- $440 million ✓
- $440
- $440 billion

**Multiple choice.** How long did it take?
- About 45 minutes ✓
- A year
- A second

**Multiple choice.** Is the SEC order free?
- Yes ✓
- No
- Only for lawyers

## The Post Office Horizon scandal
- id: se19 · type: read · creator: UK Post Office Horizon IT Inquiry · year: 1999–2024 · length: about 4 hours
- access: free | free online

### Introduction
Hundreds of sub-postmasters were wrongly prosecuted based on faulty accounting software, showing the human cost of trusting computers blindly.

### Quiz
**Multiple choice.** What were sub-postmasters wrongly accused of?
- Losses shown by faulty software ✓
- Speeding
- Nothing

**Multiple choice.** What does the scandal show?
- The cost of trusting computers blindly ✓
- Software never fails
- Nothing

**Multiple choice.** What was the software called?
- Horizon ✓
- Ariane
- Git

**Multiple choice.** Is the inquiry material free?
- Yes ✓
- No
- Only for lawyers

## No Silver Bullet
- id: se20 · type: read · creator: Fred Brooks · year: 1986 · length: about 2 hours
- access: free | free online

### Introduction
Brooks argued no single technique will make software ten times easier, because much difficulty is essential, not accidental.

### Quiz
**Multiple choice.** What did Brooks say no technique would provide?
- A tenfold improvement ✓
- Any improvement
- Bugs

**Multiple choice.** What kind of difficulty is unavoidable?
- Essential ✓
- Accidental
- None

**Multiple choice.** Who wrote the essay?
- Fred Brooks ✓
- Joel Spolsky
- Kent Beck

**Multiple choice.** When was “No Silver Bullet” published?
- 1986 ✓
- 1975
- 2012

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. What engineering practices could have prevented Ariane 5's failure?
2. Who was responsible in the Horizon scandal, and what should change?
3. Is Brooks still right that there is no silver bullet?

---

# Stage 6: Open Source, Supply Chains and Research
level: Expert
intent: Software as a commons.
gate: Score 70% or more across this stage's quizzes.
covers: software-engineering, application-security

The final stage covers open-source culture, the people who maintain it, securing software dependencies, and current research.

## The Cathedral and the Bazaar
- id: se21 · type: read · creator: Eric S. Raymond · year: 1997 · length: about 3 hours
- access: free | free online

### Introduction
Compares closed, centrally planned development with open, bazaar-style development, arguing “given enough eyeballs, all bugs are shallow”.

### Quiz
**Multiple choice.** Which two styles does Raymond compare?
- Cathedral and bazaar ✓
- Castle and village
- City and farm

**Multiple choice.** What is his famous claim about bugs?
- Given enough eyeballs, all bugs are shallow ✓
- Bugs never happen
- Bugs are good

**Multiple choice.** Who wrote “The Cathedral and the Bazaar”?
- Eric S. Raymond ✓
- Nadia Eghbal
- Linus Torvalds

**Multiple choice.** When was it written?
- 1997 ✓
- 2020
- 1986

## Working in Public
- id: se22 · type: read · creator: Nadia Eghbal · year: 2020 · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
How open-source software is really made and maintained, often by a few overstretched people serving millions of users.

### Quiz
**Multiple choice.** Who often maintains open-source projects?
- A few overstretched people ✓
- Large paid teams always
- Nobody

**Multiple choice.** How many users can they serve?
- Millions ✓
- A handful
- None

**Multiple choice.** Who wrote “Working in Public”?
- Nadia Eghbal ✓
- Eric Raymond
- Gene Kim

**Multiple choice.** When was “Working in Public” published?
- 2020 ✓
- 1997
- 2011

## Log4Shell and software supply chain security
- id: se23 · type: read · creator: CISA advisories and the OpenSSF SLSA framework · year: 2021 · length: about 3 hours
- access: free | free online

### Introduction
A flaw in a widely used logging library exposed countless systems; frameworks such as SLSA help secure how software is built and shared.

### Quiz
**Multiple choice.** What was Log4j?
- A widely used logging library ✓
- A game
- A database

**Multiple choice.** What does SLSA help secure?
- How software is built and shared ✓
- Office buildings
- Nothing

**Multiple choice.** When was Log4Shell discovered?
- 2021 ✓
- 1996
- 2012

**Multiple choice.** Are these resources free?
- Yes ✓
- No
- Only for governments

## Reading current research
- id: se24 · type: read · creator: ICSE and FSE proceedings, and arXiv cs.SE · length: ongoing
- access: free | many papers free

### Introduction
Choose a question from this path, such as testing or AI coding tools, and read a recent study, noting how it measured outcomes.

### Quiz
**Multiple choice.** Which is a major software engineering conference?
- ICSE ✓
- Eurovision
- Wimbledon

**Multiple choice.** What should you note in a study?
- How it measured outcomes ✓
- Only the title
- Nothing

**Multiple choice.** Where are many preprints posted?
- arXiv ✓
- A cookbook
- A sports site

**Multiple choice.** Are many papers free?
- Yes ✓
- No
- None are

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Contribute a fix or documentation to an open-source project.
2. Audit your project's dependencies and plan how to keep them safe.
3. How should society support open-source maintainers?

---

# Final mastery check

Finishing all six stages makes you a capable software engineer. To earn the **Ascent Mastery: Software Engineering** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Team project.** Build a project with others using version control, reviews, tests and continuous integration.
3. **Postmortem.** Write a blameless postmortem of a real failure, yours or a public one.
4. **Capstone report.** 2,500 words on one of the Stage 6 questions. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a new teammate. For example: “Why do we write tests before the code?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Programming | Stage 2 | The Programming path | Free + paid |
| Project management | Stage 3 | The Project management path | Free + paid |
| Cybersecurity | Stage 6 | The Cybersecurity path | Free + paid |

# Bridges to other subjects

- **Programming:** languages and code.
- **Project management:** planning and teams.
- **Psychology:** how teams think.
- **Law:** liability and licences.
- **Ethics:** software's impact on people.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by software engineers and computer science educators from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
