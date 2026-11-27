---
path: Operating Systems
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Operating Systems

The software that runs everything else: processes and scheduling, memory and virtual memory, concurrency and its bugs, files and storage, security and virtualisation, and the history and failures that shaped modern systems. About 200 to 250 hours over eight to ten months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. A superb free textbook, university lectures, classic papers and open-source systems cover the whole path. You need to program, ideally in C; the Programming path helps. Experiment in virtual machines so nothing you break matters.

# About operating systems

An operating system manages a computer's hardware and gives programs a safe, convenient way to use it. It decides which program runs, where data lives in memory and on disk, and who may do what.

This path starts with the stories of Linux and Unix and the command line, teaches processes, scheduling and memory, explains concurrency and its dangers, covers files and storage, explores security and virtualisation, and ends with history, real outages and research.

**Trivia**
- Unix began in 1969 on a little-used PDP-7 minicomputer at Bell Labs.
- Linus Torvalds announced Linux in 1991 as “just a hobby, won't be big and professional”.
- Because Android uses the Linux kernel, Linux runs on billions of phones as well as most of the world's servers.
- In July 2024 a faulty security update crashed about 8.5 million Windows computers, grounding flights and disrupting hospitals.

### Timeline
- **1956 · GM-NAA I/O** becomes one of the first operating systems.
- **1961 · MIT's CTSS** demonstrates time-sharing.
- **1965 · Multics** begins; Dijkstra describes semaphores.
- **1969 · Unix** is created at Bell Labs.
- **1974 · Ritchie and Thompson** publish “The UNIX Time-Sharing System”.
- **1981 · MS-DOS** ships with the IBM PC.
- **1991 · Linus Torvalds** releases Linux.
- **2008 · Android** launches on the Linux kernel.
- **2018 · Meltdown and Spectre** reveal hardware flaws that operating systems must work around.
- **2024 · A faulty security update** crashes millions of Windows computers.

# What you will be able to do

At the end of this path you will know operating systems the way a strong university course expects. You will be able to:

- **Explain processes:** system calls, scheduling and context switches.
- **Explain memory:** address spaces, paging, virtual memory and caching.
- **Write concurrent code safely:** threads, locks, semaphores, deadlock and race conditions.
- **Explain storage:** file systems, journaling and solid-state drives.
- **Explain security and virtualisation:** isolation, privilege, virtual machines and containers.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Systems engineers and computer science educators from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: What an operating system does.
gate: Score 70% or more across this stage's quizzes.
covers: operating-systems, computer-systems

Start with stories and hands-on use. This stage gives you a fast video introduction, the story of Linux, a free command-line book, and MIT's practical tools course.

## Crash Course Computer Science: operating systems
- id: os1 · type: watch · creator: Carrie Anne Philbin, Crash Course · year: 2017 · length: about 1 hour
- access: free | free online

### Introduction
Episodes on what operating systems do, from batch processing to multitasking, memory protection and file systems.

### Quiz
**Multiple choice.** Which feature lets several programs run at once?
- Multitasking ✓
- Printing
- Spelling

**Multiple choice.** What does memory protection stop?
- Programs interfering with each other ✓
- Power cuts
- Nothing

**Multiple choice.** Who presents the series?
- Carrie Anne Philbin ✓
- Hank Green
- Linus Torvalds

**Multiple choice.** Are the episodes free?
- Yes ✓
- No
- Only in schools

## Just for Fun
- id: os2 · type: read · creator: Linus Torvalds and David Diamond · year: 2001 · length: about 7 hours
- access: paid | buy, or borrow from a library

### Introduction
Torvalds tells how a student hobby project became Linux, and why he shared it as open source.

### Quiz
**Multiple choice.** How did Linux begin?
- As a student hobby project ✓
- As a government project
- As a game

**Multiple choice.** How did Torvalds share it?
- As open source ✓
- Secretly
- Not at all

**Multiple choice.** Who wrote the book with Diamond?
- Linus Torvalds ✓
- Dennis Ritchie
- Ken Thompson

**Multiple choice.** When was it published?
- 2001 ✓
- 1991
- 2024

## The Linux Command Line
- id: os3 · type: read · creator: William Shotts · year: 2009 · length: about 15 hours
- access: free | free online

### Introduction
A free book on using the shell: files, permissions, processes, pipes and scripts.

### Quiz
**Multiple choice.** What does the book teach?
- Using the shell ✓
- Painting
- Cooking

**Multiple choice.** What do pipes do?
- Send one program's output to another ✓
- Carry water
- Delete files

**Multiple choice.** Who wrote it?
- William Shotts ✓
- Linus Torvalds
- Allen Downey

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for students

## The Missing Semester of Your CS Education
- id: os4 · type: watch · creator: MIT · year: 2020 · length: about 12 hours
- access: free | free online

### Introduction
Lectures on the shell, scripting, editors, version control, debugging and other tools that university courses often skip.

### Quiz
**Multiple choice.** What does the course cover?
- Practical tools often skipped ✓
- Ancient history
- Poetry

**Multiple choice.** Which tool is covered?
- Version control ✓
- A hammer
- A microwave

**Multiple choice.** Which university made it?
- MIT ✓
- Harvard
- Oxford

**Multiple choice.** Is “The Missing Semester of Your CS Education” free?
- Yes ✓
- No
- Only at MIT

---

# Stage 2: Processes and Memory
level: Explorer
intent: Sharing the machine.
gate: Score 70% or more across this stage's quizzes.
covers: operating-systems, computer-architecture

This stage teaches the core ideas: a free textbook, Berkeley's lectures, how memory really works, and the classic textbook.

## Operating Systems: Three Easy Pieces
- id: os5 · type: read · creator: Remzi and Andrea Arpaci-Dusseau · year: 2014 · length: about 60 hours
- access: free | free online

### Introduction
A free, much-loved textbook organised around virtualisation, concurrency and persistence.

### Quiz
**Multiple choice.** What are the three easy pieces?
- Virtualisation, concurrency and persistence ✓
- Bread, butter and jam
- CPU, mouse and screen

**Multiple choice.** Is the book free?
- Yes ✓
- No
- Only in print

**Multiple choice.** Who wrote “Operating Systems: Three Easy Pieces”?
- Remzi and Andrea Arpaci-Dusseau ✓
- Silberschatz
- Shotts

**Multiple choice.** When was “Operating Systems: Three Easy Pieces” published?
- 2014 ✓
- 1983
- 1974

## CS162 Operating Systems
- id: os6 · type: watch · creator: University of California, Berkeley · length: about 30 hours
- access: free | free online

### Introduction
Recorded lectures on processes, threads, scheduling, memory, file systems and distributed systems.

### Quiz
**Multiple choice.** Which topic is covered?
- Scheduling ✓
- Fashion
- Ballet

**Multiple choice.** What is a process?
- A running program ✓
- A recipe
- A file

**Multiple choice.** Which university made the course?
- UC Berkeley ✓
- MIT
- Princeton

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at Berkeley

## What Every Programmer Should Know About Memory
- id: os7 · type: read · creator: Ulrich Drepper · year: 2007 · length: about 15 hours
- access: free | free online

### Introduction
A deep, free guide to caches, virtual memory and why memory access patterns decide program speed.

### Quiz
**Multiple choice.** What does the guide say decides program speed?
- Memory access patterns ✓
- Screen size
- Font

**Multiple choice.** Which hardware feature does it explain?
- Caches ✓
- Speakers
- Webcams

**Multiple choice.** Who wrote “What Every Programmer Should Know About Memory”?
- Ulrich Drepper ✓
- Linus Torvalds
- Ken Thompson

**Multiple choice.** Is “What Every Programmer Should Know About Memory” free?
- Yes ✓
- No
- Only for companies

## Operating System Concepts
- id: os8 · type: read · creator: Abraham Silberschatz, Peter Galvin and Greg Gagne · year: 1983 · length: about 80 hours
- access: paid | buy, or borrow from a library

### Introduction
The classic “dinosaur book” covering processes, memory, storage, protection and case studies of real systems.

### Quiz
**Multiple choice.** What is the book's nickname?
- The dinosaur book ✓
- The red book
- The cookbook

**Multiple choice.** Which topic does it cover?
- Protection ✓
- Painting
- Sport

**Multiple choice.** Who is the first author?
- Abraham Silberschatz ✓
- Remzi Arpaci-Dusseau
- Ulrich Drepper

**Multiple choice.** When was the first edition published?
- 1983 ✓
- 2014
- 2001

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Write a program that forks processes and explain what the OS does.
2. Explain how virtual memory lets each program think it has the whole machine.
3. Compare two scheduling policies with a simulation.

---

# Stage 3: Concurrency
level: Reader
intent: Doing many things at once, safely.
gate: Score 70% or more across this stage's quizzes.
covers: operating-systems, parallel-computing

This stage covers concurrency: the invention of semaphores, a free puzzle book, deadlock, and a deadly race condition.

## Cooperating Sequential Processes
- id: os9 · type: read · creator: Edsger W. Dijkstra · year: 1965 · length: about 4 hours
- access: free | free online

### Introduction
Dijkstra introduced semaphores and mutual exclusion to coordinate processes safely.

### Quiz
**Multiple choice.** What did Dijkstra introduce?
- Semaphores ✓
- The internet
- Spreadsheets

**Multiple choice.** What does mutual exclusion ensure?
- Only one process enters a critical section ✓
- All processes run at once
- Nothing

**Multiple choice.** Who wrote the paper?
- Edsger W. Dijkstra ✓
- Ken Thompson
- Linus Torvalds

**Multiple choice.** When was it written?
- 1965 ✓
- 1991
- 2007

## The Little Book of Semaphores
- id: os10 · type: read · creator: Allen B. Downey · year: 2005 · length: about 15 hours
- access: free | free online

### Introduction
A free book of synchronisation puzzles, from simple rendezvous to the dining philosophers and beyond.

### Quiz
**Multiple choice.** What does the book contain?
- Synchronisation puzzles ✓
- Recipes
- Poems

**Multiple choice.** Which classic problem is included?
- The dining philosophers ✓
- The travelling salesman only
- Sudoku

**Multiple choice.** Who wrote “The Little Book of Semaphores”?
- Allen B. Downey ✓
- Edsger Dijkstra
- William Shotts

**Multiple choice.** Is “The Little Book of Semaphores” free?
- Yes ✓
- No
- Only in print

## Deadlock
- id: os11 · type: read · creator: *Operating Systems: Three Easy Pieces*, concurrency chapters · length: about 4 hours
- access: free | free online

### Introduction
Deadlock happens when threads wait for each other forever; avoiding circular waits, for example by ordering locks, prevents it.

### Quiz
**Multiple choice.** What is deadlock?
- Threads waiting for each other forever ✓
- A fast program
- A broken screen

**Multiple choice.** Which strategy prevents it?
- Ordering locks ✓
- Adding more threads
- Ignoring it

**Multiple choice.** Which condition must be broken?
- Circular wait ✓
- Fast CPUs
- Large memory

**Multiple choice.** Is the chapter free?
- Yes ✓
- No
- Only for students

## An Investigation of the Therac-25 Accidents
- id: os12 · type: read · creator: Nancy Leveson and Clark Turner · year: 1993 · length: about 3 hours
- access: free | free online

### Introduction
A radiation therapy machine gave massive overdoses partly because of a race condition in its software; a landmark lesson in safety.

### Quiz
**Multiple choice.** What did the Therac-25 do?
- Gave massive radiation overdoses ✓
- Printed documents
- Played music

**Multiple choice.** Which software bug contributed?
- A race condition ✓
- A typo in a menu
- Nothing

**Multiple choice.** Who wrote the investigation?
- Leveson and Turner ✓
- Ritchie and Thompson
- Downey

**Multiple choice.** When was “An Investigation of the Therac-25 Accidents” published?
- 1993 ✓
- 1965
- 2014

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Solve the dining philosophers problem and prove it can't deadlock.
2. Find and fix a race condition in a small multithreaded program.
3. What should engineers learn from the Therac-25?

---

# Stage 4: Files and Storage
level: Connoisseur
intent: Keeping data safe on disk.
gate: Score 70% or more across this stage's quizzes.
covers: operating-systems, computer-systems

This stage covers storage: the Unix paper, file systems and journaling, solid-state drives, and a small teaching operating system you can read in full.

## The UNIX Time-Sharing System
- id: os13 · type: read · creator: Dennis Ritchie and Ken Thompson · year: 1974 · length: about 3 hours
- access: free | free online

### Introduction
The paper describing Unix's simple, powerful design: a hierarchical file system, files as byte streams, and processes connected by pipes.

### Quiz
**Multiple choice.** What kind of file system did Unix use?
- Hierarchical ✓
- Flat only
- None

**Multiple choice.** How did Unix treat files?
- As streams of bytes ✓
- As pictures
- As records only

**Multiple choice.** Who wrote “The UNIX Time-Sharing System”?
- Ritchie and Thompson ✓
- Torvalds and Diamond
- Leveson and Turner

**Multiple choice.** When was “The UNIX Time-Sharing System” published?
- 1974 ✓
- 1965
- 1991

## File systems and journaling
- id: os14 · type: read · creator: *Operating Systems: Three Easy Pieces*, persistence chapters · length: about 8 hours
- access: free | free online

### Introduction
File systems organise blocks into files and directories; journaling records changes first so a crash can't leave the disk inconsistent.

### Quiz
**Multiple choice.** What does journaling protect against?
- Inconsistency after a crash ✓
- Viruses
- Theft

**Multiple choice.** What do file systems organise?
- Blocks into files and directories ✓
- Emails
- Colours

**Multiple choice.** What is written first in journaling?
- A record of the changes ✓
- Nothing
- The whole disk

**Multiple choice.** Is “File systems and journaling” free?
- Yes ✓
- No
- Only for teachers

## Flash-based solid-state drives
- id: os15 · type: read · creator: *Operating Systems: Three Easy Pieces*, SSD chapter · length: about 3 hours
- access: free | free online

### Introduction
SSDs can't overwrite in place and wear out with use, so a flash translation layer spreads writes and remaps blocks.

### Quiz
**Multiple choice.** Can SSDs overwrite data in place?
- No ✓
- Yes
- Only on Sundays

**Multiple choice.** What spreads writes to reduce wear?
- The flash translation layer ✓
- The keyboard
- The fan

**Multiple choice.** Do SSD cells wear out?
- Yes, with use ✓
- No, never
- Only when cold

**Multiple choice.** Is “Flash-based solid-state drives” free?
- Yes ✓
- No
- Only in print

## xv6
- id: os16 · type: read · creator: MIT · year: 2006 · length: about 20 hours
- access: free | free online

### Introduction
A small Unix-like teaching operating system with a free book explaining every part of its code.

### Quiz
**Multiple choice.** What is xv6?
- A small teaching operating system ✓
- A phone
- A game

**Multiple choice.** What is it modelled on?
- Unix ✓
- Windows
- DOS

**Multiple choice.** Which university made “xv6”?
- MIT ✓
- Berkeley
- Bell Labs

**Multiple choice.** Is “xv6” free?
- Yes ✓
- No
- Only at MIT

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Explain what happens on disk when you save a file.
2. Why do file systems need journaling?
3. Read and explain one xv6 system call from start to finish.

---

# Stage 5: Security and Virtualisation
level: Specialist
intent: Isolation and trust.
gate: Score 70% or more across this stage's quizzes.
covers: operating-systems, computer-security

This stage covers trust, hardware flaws, virtual machines and containers, and the security model of mobile operating systems.

## Reflections on Trusting Trust
- id: os17 · type: read · creator: Ken Thompson · year: 1984 · length: about 1 hour
- access: free | free online

### Introduction
Thompson's Turing Award lecture shows a compiler can hide a backdoor that no source code review would find.

### Quiz
**Multiple choice.** What can a compromised compiler hide?
- A backdoor ✓
- A game
- Nothing

**Multiple choice.** Would reviewing source code find it?
- No ✓
- Yes, easily
- Only on Fridays

**Multiple choice.** What was the lecture for?
- The Turing Award ✓
- A wedding
- A birthday

**Multiple choice.** When was it given?
- 1984 ✓
- 1974
- 2018

## Meltdown and Spectre
- id: os18 · type: read · creator: The researchers' papers and explainer site · year: 2018 · length: about 3 hours
- access: free | free online

### Introduction
Flaws in how processors speculate ahead let programs read memory they shouldn't; operating systems had to change how they map kernel memory.

### Quiz
**Multiple choice.** What did the flaws let programs do?
- Read memory they shouldn't ✓
- Run faster safely
- Nothing

**Multiple choice.** Where were the flaws?
- In processors ✓
- In keyboards
- In monitors

**Multiple choice.** What did operating systems change?
- How they map kernel memory ✓
- Their logos
- Nothing

**Multiple choice.** When were they disclosed?
- 2018 ✓
- 1984
- 2008

## Virtual machines and containers
- id: os19 · type: read · creator: “Xen and the Art of Virtualization” (2003) and Docker documentation · year: 2003 · length: about 5 hours
- access: free | free online

### Introduction
Virtual machines run whole operating systems side by side on one computer; containers share a kernel but isolate processes, making them lighter.

### Quiz
**Multiple choice.** What do containers share?
- The kernel ✓
- Nothing
- The whole hardware directly without isolation

**Multiple choice.** What do virtual machines run?
- Whole operating systems ✓
- Only one app
- Nothing

**Multiple choice.** Which are lighter?
- Containers ✓
- Virtual machines
- Neither

**Multiple choice.** Are these resources free?
- Yes ✓
- No
- Only for companies

## Android security model
- id: os20 · type: read · creator: Android Open Source Project security documentation · length: about 3 hours
- access: free | free online

### Introduction
Each app runs in its own sandbox with a separate user ID, and must ask for permissions to reach sensitive data.

### Quiz
**Multiple choice.** Where does each Android app run?
- In its own sandbox ✓
- In the same space as all others
- On a server

**Multiple choice.** What must apps ask for?
- Permissions ✓
- Money
- Nothing

**Multiple choice.** Which kernel does Android use?
- Linux ✓
- Windows
- DOS

**Multiple choice.** Is the documentation free?
- Yes ✓
- No
- Only for developers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Compare virtual machines and containers for running a web service.
2. Why couldn't software alone fully fix Spectre?
3. What does Thompson's lecture say about trusting any software?

---

# Stage 6: History, Failures and Research
level: Expert
intent: Learning from the past.
gate: Score 70% or more across this stage's quizzes.
covers: operating-systems, software-engineering

The final stage looks at an influential early system, how Linux is developed, a recent global outage, and current research.

## Multics
- id: os21 · type: read · creator: multicians.org · year: 1965–2000 · length: about 3 hours
- access: free | free online

### Introduction
An ambitious time-sharing system whose ideas, such as hierarchical files and security rings, shaped Unix and later systems.

### Quiz
**Multiple choice.** Which idea did Multics pioneer?
- Security rings ✓
- Touch screens
- Emoji

**Multiple choice.** Which later system did it influence?
- Unix ✓
- No system
- Only games

**Multiple choice.** What kind of system was it?
- Time-sharing ✓
- A calculator
- A typewriter

**Multiple choice.** Is the site free?
- Yes ✓
- No
- Only for members

## How Linux is developed
- id: os22 · type: read · creator: Linux kernel documentation and LWN.net · length: about 4 hours
- access: free-and-paid | kernel docs are free

### Introduction
Thousands of developers send patches through maintainers in a regular release cycle of roughly nine to ten weeks.

### Quiz
**Multiple choice.** How do changes reach Linux?
- As patches through maintainers ✓
- By post
- By vote

**Multiple choice.** Roughly how long is a release cycle?
- About nine to ten weeks ✓
- Ten years
- One day

**Multiple choice.** How many developers contribute?
- Thousands ✓
- One
- Ten

**Multiple choice.** Are the kernel docs free?
- Yes ✓
- No
- Only for companies

## The 2024 CrowdStrike outage
- id: os23 · type: read · creator: CrowdStrike root cause analysis and Microsoft technical posts · year: 2024 · length: about 2 hours
- access: free | free online

### Introduction
A faulty update to security software running inside the Windows kernel crashed about 8.5 million computers worldwide.

### Quiz
**Multiple choice.** Where was the faulty software running?
- Inside the Windows kernel ✓
- In a web browser
- On paper

**Multiple choice.** About how many computers crashed?
- 8.5 million ✓
- 85
- 8.5 billion

**Multiple choice.** What lesson does it teach about kernel code?
- Bugs there can crash the whole system ✓
- It is always safe
- Nothing

**Multiple choice.** Are the analyses free?
- Yes ✓
- No
- Only for customers

## Reading current research
- id: os24 · type: read · creator: SOSP and OSDI proceedings · length: ongoing
- access: free | many papers free

### Introduction
Choose a question from this path and read a recent paper from a major systems conference, noting its evaluation.

### Quiz
**Multiple choice.** Which is a major systems conference?
- OSDI ✓
- Eurovision
- The Oscars

**Multiple choice.** What should you note in a paper?
- Its evaluation ✓
- Only the title
- Nothing

**Multiple choice.** Which other conference is major?
- SOSP ✓
- Wimbledon
- Cannes

**Multiple choice.** Are many papers free?
- Yes ✓
- No
- None are

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. What should vendors change after the CrowdStrike outage?
2. Which Multics idea matters most today?
3. Summarise a recent systems paper for a programmer.

---

# Final mastery check

Finishing all six stages makes you a capable student of operating systems. To earn the **Ascent Mastery: Operating Systems** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Systems lab.** Write a small shell, a thread pool and a simple memory allocator.
3. **Kernel reading.** Explain how xv6 handles a system call, a page fault and a file write.
4. **Capstone report.** 2,500 words on one of the Stage 6 questions. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “How can my laptop run many programs at once?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Programming | Stage 3 | The Programming path | Free + paid |
| Computer networks | Stage 3 | The Computer networks path | Free + paid |
| Cybersecurity | Stage 5 | The Cybersecurity path | Free + paid |

# Bridges to other subjects

- **Electronics:** processors and memory.
- **Computer networks:** network stacks.
- **Cybersecurity:** isolation and privilege.
- **Algorithms:** scheduling and data structures.
- **Engineering safety:** failures in software.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by systems engineers and computer science educators from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
