---
path: Computer Architecture
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Computer Architecture

How processors really work: logic gates to a working CPU, instruction sets, pipelines and branch prediction, caches and memory, multicore chips, GPUs and AI accelerators, and the future of computing hardware. About 200 to 250 hours over eight to ten months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free university lectures, simulators, specifications and landmark papers cover the core, and the standard textbooks are worth borrowing. You need basic programming; the Electronics path helps with circuits. Simulators let you build processors without buying hardware.

# About computer architecture

Computer architecture is the design of computers' internal organisation: how instructions are defined, how processors execute them quickly, and how memory keeps up. Its choices decide the speed and energy use of every phone, laptop and data centre.

This path starts with building a computer from simple parts, teaches digital design, instruction sets and number formats, explains pipelines and performance, studies the memory hierarchy, covers parallel processors, GPUs and AI chips, and ends with the history and future of hardware.

**Trivia**
- IBM's System/360 in 1964 was the first family of computers sharing one architecture, so software could run on cheap and expensive models alike.
- Processors designed with ARM's instruction set power nearly all of the world's smartphones.
- John Hennessy and David Patterson won the 2017 Turing Award for pioneering RISC processor design.
- RISC-V is an open instruction set that anyone can use to build processors without paying licence fees.

### Timeline
- **1945 · John von Neumann** describes the stored-program computer in the EDVAC report.
- **1949 · EDSAC** runs its first program in Cambridge.
- **1964 · IBM System/360** separates architecture from implementation.
- **1971 · The Intel 4004** puts a processor on a single chip.
- **1980s · RISC designs** from Berkeley and Stanford simplify instruction sets.
- **1985 · IEEE 754** standardises floating-point arithmetic; the first ARM processor runs.
- **2005 · Mainstream processors** go multicore as clock speeds stall.
- **2010 · RISC-V** begins as an open instruction set at Berkeley.
- **2017 · Google** publishes its Tensor Processing Unit design.

# What you will be able to do

At the end of this path you will know computer architecture the way a strong university course expects. You will be able to:

- **Build from logic:** gates, adders, registers and a simple processor.
- **Explain instruction sets:** RISC and CISC, assembly language and number representations.
- **Analyse performance:** pipelines, hazards, branch prediction and the iron law of performance.
- **Explain memory:** caches, DRAM, virtual memory and why locality matters.
- **Explain parallel hardware:** multicore chips, GPUs, AI accelerators and their limits.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Computer architects and computer science educators from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Building a computer from scratch.
gate: Score 70% or more across this stage's quizzes.
covers: computer-architecture, digital-electronics

Start by seeing how a computer is built. This stage gives you a friendly book, a famous breadboard computer series, a fast video introduction, and a free logic simulator.

## But How Do It Know?
- id: ca1 · type: read · creator: J. Clark Scott · year: 2009 · length: about 6 hours
- access: paid | buy, or borrow from a library

### Introduction
Builds a simple computer step by step from gates, showing how memory, the CPU and instructions work together.

### Quiz
**Multiple choice.** What does the book build step by step?
- A simple computer ✓
- A house
- A car

**Multiple choice.** What does it start from?
- Logic gates ✓
- Software
- Websites

**Multiple choice.** Who wrote it?
- J. Clark Scott ✓
- David Patterson
- Onur Mutlu

**Multiple choice.** When was it published?
- 2009 ✓
- 1945
- 2017

## Build an 8-bit breadboard computer
- id: ca2 · type: watch · creator: Ben Eater · length: about 15 hours
- access: free | free online

### Introduction
A video series building a working computer on breadboards from simple chips, explaining every wire.

### Quiz
**Multiple choice.** What does Ben Eater build?
- An 8-bit computer on breadboards ✓
- A robot
- A phone

**Multiple choice.** What does he explain?
- Every wire ✓
- Nothing
- Only the case

**Multiple choice.** How many bits is the computer?
- 8 ✓
- 64
- 1,000

**Multiple choice.** Are the videos free?
- Yes ✓
- No
- Only for members

## Crash Course Computer Science: the CPU
- id: ca3 · type: watch · creator: Carrie Anne Philbin, Crash Course · year: 2017 · length: about 1 hour
- access: free | free online

### Introduction
Episodes on the arithmetic logic unit, registers, the CPU's fetch-decode-execute cycle and advanced CPU designs.

### Quiz
**Multiple choice.** Which cycle does a CPU repeat?
- Fetch, decode, execute ✓
- Wash, rinse, repeat
- Read, write, sleep

**Multiple choice.** What does the ALU do?
- Arithmetic and logic ✓
- Stores files
- Shows pictures

**Multiple choice.** Who presents the series?
- Carrie Anne Philbin ✓
- Ben Eater
- John Hennessy

**Multiple choice.** Are the episodes free?
- Yes ✓
- No
- Only in schools

## Logisim Evolution
- id: ca4 · type: course · creator: Logisim Evolution open-source project · length: about 6 hours
- access: free | free online

### Introduction
A free digital logic simulator where you wire gates into adders, registers and eventually a small CPU.

### Quiz
**Multiple choice.** What can you build in Logisim?
- Digital circuits ✓
- Websites
- Furniture

**Multiple choice.** Which component can you make from gates?
- An adder ✓
- A battery
- A screen

**Multiple choice.** Is it open source?
- Yes ✓
- No
- Only for schools

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for companies

---

# Stage 2: Logic, Instructions and Numbers
level: Explorer
intent: The language of the machine.
gate: Score 70% or more across this stage's quizzes.
covers: computer-architecture, digital-electronics

This stage covers digital design, instruction sets, the standard textbook, and how computers represent numbers.

## Digital Design and Computer Architecture
- id: ca5 · type: read · creator: David Harris and Sarah Harris · year: 2007 · length: about 50 hours
- access: paid | buy, or borrow from a library

### Introduction
A textbook that takes you from logic gates to building a complete processor in a hardware description language.

### Quiz
**Multiple choice.** Where does the book start?
- Logic gates ✓
- Operating systems
- Networks

**Multiple choice.** What do readers build by the end?
- A processor ✓
- A website
- A car

**Multiple choice.** Who wrote “Digital Design and Computer Architecture”?
- David and Sarah Harris ✓
- Patterson and Hennessy
- J. Clark Scott

**Multiple choice.** When was the first edition published?
- 2007 ✓
- 1994
- 2017

## The RISC-V instruction set
- id: ca6 · type: read · creator: RISC-V International specifications and *The RISC-V Reader* · year: 2010 onwards · length: about 10 hours
- access: free-and-paid | specifications are free

### Introduction
An open, modular instruction set with a small base and optional extensions, now used in teaching, research and industry.

### Quiz
**Multiple choice.** What kind of instruction set is RISC-V?
- Open and modular ✓
- Secret
- Only for phones

**Multiple choice.** Must you pay licence fees to use it?
- No ✓
- Yes
- Only on Sundays

**Multiple choice.** Where did RISC-V begin?
- UC Berkeley ✓
- IBM
- Intel

**Multiple choice.** Are the specifications free?
- Yes ✓
- No
- Only for members

## Computer Organization and Design
- id: ca7 · type: read · creator: David Patterson and John Hennessy · year: 1994 · length: about 70 hours
- access: paid | buy, or borrow from a library

### Introduction
The standard undergraduate textbook on the hardware/software interface: instructions, arithmetic, the processor and memory.

### Quiz
**Multiple choice.** What interface does the book focus on?
- Hardware/software ✓
- User/screen
- Human/animal

**Multiple choice.** Which topic does it cover?
- The processor ✓
- Poetry
- Cooking

**Multiple choice.** Who wrote “Computer Organization and Design”?
- Patterson and Hennessy ✓
- Harris and Harris
- Mutlu

**Multiple choice.** When was “Computer Organization and Design” published?
- 1994 ✓
- 2007
- 1964

## What Every Computer Scientist Should Know About Floating-Point Arithmetic
- id: ca8 · type: read · creator: David Goldberg · year: 1991 · length: about 5 hours
- access: free | free online

### Introduction
How computers store real numbers approximately, why 0.1 + 0.2 isn't exactly 0.3, and how rounding errors arise.

### Quiz
**Multiple choice.** Does 0.1 + 0.2 equal exactly 0.3 in floating point?
- No ✓
- Yes
- Only on Mondays

**Multiple choice.** Why not?
- Numbers are stored approximately ✓
- Computers are lazy
- It is a bug in maths

**Multiple choice.** Which standard defines floating point?
- IEEE 754 ✓
- ISO 9001
- RISC-V

**Multiple choice.** Is the paper free?
- Yes ✓
- No
- Only for members

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Build a 4-bit adder in Logisim and explain carry.
2. Write a short RISC-V assembly program and trace it by hand.
3. Show a real bug caused by floating-point rounding.

---

# Stage 3: Pipelines and Performance
level: Reader
intent: Making processors fast.
gate: Score 70% or more across this stage's quizzes.
covers: computer-architecture, computer-systems

This stage explains how processors overlap and predict work: free ETH lectures, pipelines and hazards, branch prediction, and the graduate classic.

## Digital Design and Computer Architecture lectures
- id: ca9 · type: watch · creator: Onur Mutlu, ETH Zürich · length: about 40 hours
- access: free | free online

### Introduction
A complete recorded course from logic to pipelining, out-of-order execution, memory and research topics.

### Quiz
**Multiple choice.** Which execution style is covered?
- Out-of-order ✓
- Upside-down
- Sideways

**Multiple choice.** Where are the lectures from?
- ETH Zürich ✓
- Harvard
- Oxford

**Multiple choice.** Who teaches them?
- Onur Mutlu ✓
- David Patterson
- Ben Eater

**Multiple choice.** Are they free?
- Yes ✓
- No
- Only at ETH

## Pipelining and hazards
- id: ca10 · type: read · creator: Mutlu's lecture slides and Patterson and Hennessy, chapter 4 · length: about 8 hours
- access: free-and-paid | slides are free

### Introduction
Pipelines overlap instructions like an assembly line; hazards occur when instructions depend on each other or on branches.

### Quiz
**Multiple choice.** What do pipelines overlap?
- Instructions ✓
- Programs on disk
- Users

**Multiple choice.** What causes a data hazard?
- Instructions depending on each other ✓
- Too much memory
- Nothing

**Multiple choice.** What is pipelining like?
- An assembly line ✓
- A single worker
- A library

**Multiple choice.** Are the slides free?
- Yes ✓
- No
- Only for students

## Branch prediction
- id: ca11 · type: read · creator: Dan Luu · year: 2017 · length: about 2 hours
- access: free | free online

### Introduction
Processors guess which way branches go to keep pipelines full; the post walks from simple to modern predictors.

### Quiz
**Multiple choice.** Why do processors predict branches?
- To keep pipelines full ✓
- To save paper
- No reason

**Multiple choice.** What happens on a wrong guess?
- Work is thrown away ✓
- Nothing
- The computer crashes

**Multiple choice.** Who wrote the post?
- Dan Luu ✓
- Onur Mutlu
- David Goldberg

**Multiple choice.** Is “Branch prediction” free?
- Yes ✓
- No
- Only for members

## Computer Architecture: A Quantitative Approach
- id: ca12 · type: read · creator: John Hennessy and David Patterson · year: 1990 · length: about 80 hours
- access: paid | buy, or borrow from a library

### Introduction
The graduate classic that made architecture a quantitative discipline, measuring designs by performance and cost.

### Quiz
**Multiple choice.** What did the book make architecture?
- A quantitative discipline ✓
- An art only
- A hobby

**Multiple choice.** How are designs measured?
- By performance and cost ✓
- By colour
- By name

**Multiple choice.** Who wrote “Computer Architecture: A Quantitative Approach”?
- Hennessy and Patterson ✓
- Harris and Harris
- Kidder

**Multiple choice.** When was “Computer Architecture: A Quantitative Approach” published?
- 1990 ✓
- 1994
- 2007

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Draw a five-stage pipeline and show a hazard and its fix.
2. Use the iron law of performance to compare two processors.
3. Measure branch misprediction cost in a small program.

---

# Stage 4: The Memory Hierarchy
level: Connoisseur
intent: Feeding the processor.
gate: Score 70% or more across this stage's quizzes.
covers: computer-architecture, computer-systems

This stage explains why memory matters most: cache experiments, the memory wall, latency numbers, and virtual memory hardware.

## Gallery of Processor Cache Effects
- id: ca13 · type: read · creator: Igor Ostrovsky · year: 2010 · length: about 2 hours
- access: free | free online

### Introduction
Small experiments showing how cache lines, sizes and access patterns change program speed dramatically.

### Quiz
**Multiple choice.** What do the experiments show?
- How caches change program speed ✓
- How to cook
- Nothing

**Multiple choice.** Which unit does a cache move data in?
- Cache lines ✓
- Whole files
- Single bits

**Multiple choice.** Who wrote the article?
- Igor Ostrovsky ✓
- Dan Luu
- John Hennessy

**Multiple choice.** Is “Gallery of Processor Cache Effects” free?
- Yes ✓
- No
- Only for members

## Hitting the Memory Wall
- id: ca14 · type: read · creator: William Wulf and Sally McKee · year: 1995 · length: about 1 hour
- access: free | free online

### Introduction
Warned that processor speed was growing far faster than memory speed, so memory would become the main bottleneck.

### Quiz
**Multiple choice.** What did the paper warn about?
- Memory becoming the bottleneck ✓
- Processors getting slower
- Nothing

**Multiple choice.** What was growing faster than memory speed?
- Processor speed ✓
- Disk size
- Screen size

**Multiple choice.** Who wrote “Hitting the Memory Wall”?
- Wulf and McKee ✓
- Patterson and Hennessy
- Harris and Harris

**Multiple choice.** When was “Hitting the Memory Wall” published?
- 1995 ✓
- 2017
- 1964

## Latency numbers every programmer should know
- id: ca15 · type: read · creator: Jeff Dean and Peter Norvig's lists and interactive versions · length: about 1 hour
- access: free | free online

### Introduction
Rough times for cache hits, memory reads, disk seeks and network round trips, spanning a billion-fold range.

### Quiz
**Multiple choice.** Which is fastest?
- A cache hit ✓
- A disk seek
- A network round trip across the world

**Multiple choice.** Roughly what range do the numbers span?
- About a billion-fold ✓
- Twofold
- None

**Multiple choice.** Who popularised the list?
- Jeff Dean ✓
- Igor Ostrovsky
- Onur Mutlu

**Multiple choice.** Is “Latency numbers every programmer should know” free?
- Yes ✓
- No
- Only for engineers

## Virtual memory hardware
- id: ca16 · type: watch · creator: Onur Mutlu's lectures on virtual memory · length: about 4 hours
- access: free | free online

### Introduction
Page tables translate addresses, and translation lookaside buffers cache those translations so memory stays fast.

### Quiz
**Multiple choice.** What do page tables translate?
- Virtual to physical addresses ✓
- Languages
- Files

**Multiple choice.** What caches address translations?
- The TLB ✓
- The GPU
- The keyboard

**Multiple choice.** Why cache translations?
- To keep memory fast ✓
- To save power only
- No reason

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at ETH

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Write a program that runs ten times faster just by changing its memory access order.
2. Explain the memory wall and two ways architects fight it.
3. Trace one memory access through TLB, caches and DRAM.

---

# Stage 5: Parallel and Specialised Hardware
level: Specialist
intent: Many cores and accelerators.
gate: Score 70% or more across this stage's quizzes.
covers: computer-architecture, parallel-computing

This stage covers the limits of parallelism, GPU programming, the case for specialised hardware, and Google's AI chip.

## Amdahl's law
- id: ca17 · type: read · creator: Gene Amdahl's 1967 paper and explainers · year: 1967 · length: about 2 hours
- access: free | free online

### Introduction
The speed-up from parallel processors is limited by the part of the program that must run serially.

### Quiz
**Multiple choice.** What limits parallel speed-up?
- The serial part of a program ✓
- The number of users
- The colour of the case

**Multiple choice.** Who stated the law?
- Gene Amdahl ✓
- Gordon Moore
- John von Neumann

**Multiple choice.** Can doubling cores always halve run time?
- No ✓
- Yes
- Only on laptops

**Multiple choice.** Are the explainers free?
- Yes ✓
- No
- Only for engineers

## CUDA C++ Programming Guide
- id: ca18 · type: read · creator: NVIDIA · length: about 15 hours
- access: free | free online

### Introduction
How GPUs run thousands of threads in groups, and how to organise memory so they stay busy.

### Quiz
**Multiple choice.** How many threads can GPUs run?
- Thousands ✓
- One
- Two

**Multiple choice.** What must be organised to keep GPUs busy?
- Memory ✓
- Furniture
- Nothing

**Multiple choice.** Who publishes the guide?
- NVIDIA ✓
- Intel
- IBM

**Multiple choice.** Is “CUDA C++ Programming Guide” free?
- Yes ✓
- No
- Only for gamers

## A New Golden Age for Computer Architecture
- id: ca19 · type: read · creator: John Hennessy and David Patterson, *Communications of the ACM* · year: 2019 · length: about 2 hours
- access: free | free online

### Introduction
Their Turing lecture argues that as general-purpose gains slow, domain-specific architectures and open instruction sets offer the way forward.

### Quiz
**Multiple choice.** What do the authors see as the way forward?
- Domain-specific architectures ✓
- Bigger clocks only
- Nothing

**Multiple choice.** What slowed general-purpose gains?
- The end of easy scaling ✓
- Too many users
- Nothing

**Multiple choice.** Which award was the lecture for?
- The Turing Award ✓
- An Oscar
- The Nobel Prize

**Multiple choice.** Is “A New Golden Age for Computer Architecture” free?
- Yes ✓
- No
- Only for members

## In-Datacenter Performance Analysis of a Tensor Processing Unit
- id: ca20 · type: read · creator: Norman Jouppi and colleagues, Google · year: 2017 · length: about 3 hours
- access: free | free online

### Introduction
Google's chip for neural network inference, built around a large matrix multiply unit, outperformed contemporary CPUs and GPUs on its tasks.

### Quiz
**Multiple choice.** What is the TPU built around?
- A large matrix multiply unit ✓
- A sound card
- A hard disk

**Multiple choice.** What task was it designed for?
- Neural network inference ✓
- Word processing
- Gaming

**Multiple choice.** Which company built it?
- Google ✓
- ARM
- IBM

**Multiple choice.** When was the paper published?
- 2017 ✓
- 1967
- 1995

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Use Amdahl's law to estimate the speed-up of a real program.
2. Write a simple GPU program and explain its speed-up.
3. Why are AI accelerators so different from general CPUs?

---

# Stage 6: History and the Future
level: Expert
intent: Where hardware has been and is going.
gate: Score 70% or more across this stage's quizzes.
covers: computer-architecture, microelectronics

The final stage looks at the end of easy scaling, a classic story of building a computer, emerging kinds of computing, and current research.

## Dark Silicon and the End of Multicore Scaling
- id: ca21 · type: read · creator: Hadi Esmaeilzadeh and colleagues · year: 2011 · length: about 3 hours
- access: free | free online

### Introduction
As transistors stopped getting more power-efficient, chips can't power all their transistors at once, limiting multicore gains.

### Quiz
**Multiple choice.** What is “dark silicon”?
- Parts of a chip that can't be powered at once ✓
- Black paint
- Broken chips

**Multiple choice.** What stopped improving?
- Transistors' power efficiency ✓
- Software
- Screens

**Multiple choice.** What did this limit?
- Multicore gains ✓
- Internet speed
- Nothing

**Multiple choice.** When was “Dark Silicon and the End of Multicore Scaling” published?
- 2011 ✓
- 2019
- 1995

## The Soul of a New Machine
- id: ca22 · type: read · creator: Tracy Kidder · year: 1981 · length: about 10 hours
- access: paid | buy, or borrow from a library

### Introduction
A Pulitzer Prize-winning account of a team racing to design a new minicomputer at Data General.

### Quiz
**Multiple choice.** What prize did the book win?
- The Pulitzer Prize ✓
- The Nobel Prize
- An Oscar

**Multiple choice.** What was the team designing?
- A new minicomputer ✓
- A car
- A film

**Multiple choice.** At which company?
- Data General ✓
- IBM
- Apple

**Multiple choice.** When was “The Soul of a New Machine” published?
- 1981 ✓
- 2011
- 1964

## Beyond conventional computers
- id: ca23 · type: read · creator: Explainers on quantum, neuromorphic and in-memory computing · length: about 3 hours
- access: free | free online

### Introduction
New approaches compute with quantum states, brain-like spiking circuits or inside memory itself, each suited to particular problems.

### Quiz
**Multiple choice.** What do neuromorphic chips imitate?
- The brain ✓
- The heart
- The sun

**Multiple choice.** What does in-memory computing avoid?
- Moving data to a separate processor ✓
- Using electricity
- Storing data

**Multiple choice.** Are these approaches suited to every problem?
- No, to particular ones ✓
- Yes
- None

**Multiple choice.** Is “Beyond conventional computers” free?
- Yes ✓
- No
- Only for physicists

## Reading current research
- id: ca24 · type: read · creator: ISCA and MICRO proceedings, and Hot Chips talks · length: ongoing
- access: free | many talks free

### Introduction
Choose a question from this path and watch a Hot Chips talk on a real chip, then read a recent research paper.

### Quiz
**Multiple choice.** What is Hot Chips?
- A conference on real chips ✓
- A food festival
- A video game

**Multiple choice.** Which is a major architecture conference?
- ISCA ✓
- Eurovision
- Wimbledon

**Multiple choice.** What should you read after the talk?
- A recent research paper ✓
- Nothing
- A recipe

**Multiple choice.** Are many talks free?
- Yes ✓
- No
- None are

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Why did clock speeds stop rising around 2005?
2. What made the Data General team succeed?
3. Which future approach to computing do you find most promising, and why?

---

# Final mastery check

Finishing all six stages makes you a capable student of computer architecture. To earn the **Ascent Mastery: Computer Architecture** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Build a CPU.** Design a simple processor in a simulator and run a program on it.
3. **Performance lab.** Measure cache and branch effects in real programs and explain them.
4. **Capstone report.** 2,500 words on one of the Stage 6 questions. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “Why is my new laptop faster if its clock speed is the same?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Electronics | Stage 4 | The Electronics path | Free + paid |
| Operating systems | Stage 2 | The Operating systems path | Free + paid |
| Machine learning | Stage 5 | The Machine learning path | Free + paid |

# Bridges to other subjects

- **Electronics:** transistors and chips.
- **Operating systems:** memory and processes.
- **Mathematics:** logic and number systems.
- **Physics:** semiconductors.
- **AI:** accelerators.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by computer architects and computer science educators from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
