---
path: Embedded Systems
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Embedded Systems

The small computers hidden inside cars, appliances, medical devices and sensors: microcontrollers and C, talking to hardware, real-time operating systems, safety and reliability, low power and tiny machine learning. About 150 to 200 hours over six to eight months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free courses, books and an online simulator cover the core, so you can start without buying hardware. You need basic programming; C is taught along the way. A cheap development board helps from Stage 3.

# About embedded systems

An embedded system is a computer built into a larger device to do one job, often with tight limits on memory, power, cost and timing.

This path starts with what embedded systems are, learns microcontroller programming in C, connects to sensors and other chips, studies real-time scheduling and operating systems, takes safety seriously through real failures, and ends with low-power devices, tiny machine learning and research.

**Trivia**
- The vast majority of processors made each year go into embedded devices, not PCs or phones.
- A modern car can contain dozens of microcontrollers.
- The Apollo Guidance Computer flew to the Moon with about 4 kilobytes of erasable memory.
- A bug on Mars Pathfinder in 1997 was fixed by uploading a change to the spacecraft on Mars.

### Timeline
- **1966 · The Apollo Guidance Computer** flies, with software led by Margaret Hamilton.
- **1971 · The Intel 4004** becomes the first commercial microprocessor.
- **1973 · Liu and Layland** publish the theory of rate-monotonic scheduling.
- **1982 · Philips** introduces the I²C bus.
- **1997 · Mars Pathfinder** suffers and recovers from priority inversion.
- **1998 · MISRA C** publishes coding rules for safe C.
- **2003 · Richard Barry** releases FreeRTOS.
- **2013 · A US court case** examines Toyota's throttle software.
- **2016 · The Zephyr Project** launches an open-source RTOS.
- **2019 · TinyML** brings machine learning to microcontrollers.

# What you will be able to do

At the end of this path you will know embedded systems the way a strong undergraduate course expects. You will be able to:

- **Program microcontrollers:** in C, close to the hardware.
- **Interface with hardware:** GPIO, interrupts, timers and serial buses.
- **Design real-time software:** scheduling, RTOS tasks and timing.
- **Build for safety:** coding rules, watchdogs and lessons from failures.
- **Design connected, low-power devices:** including tiny machine learning.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Embedded engineers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Computers hidden in things.
gate: Score 70% or more across this stage's quizzes.
covers: embedded-systems, computer-architecture

Begin with a practical book, a podcast, a free course and an online simulator.

## Making Embedded Systems
- id: es1 · type: read · creator: Elecia White · year: 2011 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
A practical guide to designing embedded software: architecture, hardware interfaces, timing, and doing more with less.

### Quiz
**Multiple choice.** What does the book guide?
- Designing embedded software ✓
- Baking
- Painting

**Multiple choice.** Which theme runs through it?
- Doing more with less ✓
- Spending freely
- Nothing

**Multiple choice.** Who wrote it?
- Elecia White ✓
- Richard Barry
- Margaret Hamilton

**Multiple choice.** When was the first edition?
- 2011 ✓
- 1971
- 2019

## Embedded.fm
- id: es2 · type: listen · creator: Elecia White and Christopher White · length: about 5 hours
- access: free | free online

### Introduction
A long-running podcast interviewing engineers who build gadgets, from medical devices to toys.

### Quiz
**Multiple choice.** What kind of resource is it?
- A podcast ✓
- A textbook
- A film

**Multiple choice.** Who do they interview?
- Engineers who build gadgets ✓
- Chefs
- Nobody

**Multiple choice.** Who hosts it?
- Elecia and Christopher White ✓
- Lee and Seshia
- Liu and Layland

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for engineers

## Embedded Systems – Shape the World
- id: es3 · type: course · creator: Jonathan Valvano and Ramesh Yerraballi, University of Texas at Austin on edX · length: about 60 hours
- access: free-and-paid | audit free

### Introduction
A hands-on course building real systems on a low-cost board, from switches and LEDs to interrupts and networking.

### Quiz
**Multiple choice.** What do learners build on?
- A low-cost board ✓
- A supercomputer
- Nothing

**Multiple choice.** Which topic is covered?
- Interrupts ✓
- Poetry
- Nothing

**Multiple choice.** Which university made it?
- The University of Texas at Austin ✓
- Oxford
- None

**Multiple choice.** Can you audit it free?
- Yes ✓
- No
- Only in Texas

## Wokwi
- id: es4 · type: course · creator: Wokwi · length: about 4 hours
- access: free | free online

### Introduction
An online simulator for microcontroller boards, so you can write code and wire virtual circuits without hardware.

### Quiz
**Multiple choice.** What does Wokwi simulate?
- Microcontroller boards and circuits ✓
- Weather
- Stock markets

**Multiple choice.** What do you not need to start?
- Hardware ✓
- A browser
- Code

**Multiple choice.** Where does it run?
- Online ✓
- Only on paper
- Nowhere

**Multiple choice.** Is “Wokwi” free?
- Yes ✓
- No
- Only for teachers

---

# Stage 2: Microcontrollers and C
level: Explorer
intent: Close to the metal.
gate: Score 70% or more across this stage's quizzes.
covers: embedded-systems, computer-architecture

This stage covers programming microcontrollers in C, memory-mapped registers, a free textbook and reading datasheets.

## Modern Embedded Systems Programming
- id: es5 · type: watch · creator: Miro Samek · year: 2013 · length: about 20 hours
- access: free | free online

### Introduction
A video course starting from bare metal: how C becomes machine code, registers, the stack, interrupts and state machines.

### Quiz
**Multiple choice.** Where does the course start?
- Bare metal ✓
- Web design
- Spreadsheets

**Multiple choice.** Which design pattern does the course teach?
- State machines ✓
- Knitting
- Nothing

**Multiple choice.** Who teaches it?
- Miro Samek ✓
- Elecia White
- Pete Warden

**Multiple choice.** Is “Modern Embedded Systems Programming” free?
- Yes ✓
- No
- Only in Europe

## Introduction to Embedded Systems
- id: es6 · type: read · creator: Edward A. Lee and Sanjit A. Seshia · year: 2011 · length: about 40 hours
- access: free | free online

### Introduction
A free textbook treating embedded systems as cyber-physical systems, covering modelling, design and analysis.

### Quiz
**Multiple choice.** How does the book treat embedded systems?
- As cyber-physical systems ✓
- As toys only
- Nothing

**Multiple choice.** Which activity is covered?
- Modelling ✓
- Cooking
- Nothing

**Multiple choice.** Who are the authors?
- Lee and Seshia ✓
- Liu and Layland
- Warden and Situnayake

**Multiple choice.** Is “Introduction to Embedded Systems” free?
- Yes ✓
- No
- Only for Berkeley students

## Memory-mapped registers
- id: es7 · type: read · creator: Free tutorials and manufacturer reference manuals · length: about 4 hours
- access: free | free online

### Introduction
Hardware is controlled by reading and writing special memory addresses, using bit masks and volatile variables in C.

### Quiz
**Multiple choice.** How is hardware controlled?
- By reading and writing special memory addresses ✓
- By shouting
- Nothing

**Multiple choice.** Which C keyword matters here?
- volatile ✓
- print
- class

**Multiple choice.** Which technique sets single bits?
- Bit masks ✓
- Sorting
- Nothing

**Multiple choice.** Are the tutorials free?
- Yes ✓
- No
- Only for companies

## Reading a datasheet
- id: es8 · type: read · creator: Manufacturer datasheets and free guides · length: about 3 hours
- access: free | free online

### Introduction
How to find pin layouts, electrical limits, timing diagrams and register maps in a chip's datasheet.

### Quiz
**Multiple choice.** What can you find in a datasheet?
- Pin layouts and timing diagrams ✓
- Recipes
- Novels

**Multiple choice.** Which limit is listed?
- Electrical limits ✓
- Speed limits for cars
- Nothing

**Multiple choice.** Who publishes datasheets?
- Chip manufacturers ✓
- Newspapers
- Nobody

**Multiple choice.** Are they free?
- Yes ✓
- No
- Only for engineers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Blink an LED by writing directly to registers.
2. Explain why volatile matters for hardware registers.
3. Find five key facts in a microcontroller datasheet.

---

# Stage 3: Talking to Hardware
level: Reader
intent: Interrupts and buses.
gate: Score 70% or more across this stage's quizzes.
covers: embedded-systems, electronics-engineering

This stage covers interrupts and timers, the I²C and SPI buses, serial ports and debugging tools.

## Interrupts and timers
- id: es9 · type: read · creator: Lee and Seshia, chapter 10, and free tutorials · length: about 5 hours
- access: free | free online

### Introduction
Interrupts let hardware pause the main program to handle events, and timers schedule work precisely.

### Quiz
**Multiple choice.** What do interrupts let hardware do?
- Pause the program to handle events ✓
- Turn off forever
- Nothing

**Multiple choice.** What do timers do?
- Schedule work precisely ✓
- Measure weight
- Nothing

**Multiple choice.** Which danger comes with interrupts?
- Shared-data race conditions ✓
- Rust
- None

**Multiple choice.** Is “Interrupts and timers” free?
- Yes ✓
- No
- Only for students

## I²C-bus specification
- id: es10 · type: read · creator: NXP Semiconductors (UM10204) · year: 1982 · length: about 3 hours
- access: free | free online

### Introduction
A two-wire bus for connecting sensors and chips, using addresses so many devices share the same wires.

### Quiz
**Multiple choice.** How many wires does the bus use?
- Two ✓
- Ten
- One hundred

**Multiple choice.** How do devices share the wires?
- Using addresses ✓
- Taking turns randomly
- They don't

**Multiple choice.** Which company invented it?
- Philips ✓
- Toyota
- NASA

**Multiple choice.** Is the specification free?
- Yes ✓
- No
- Only for members

## SPI and UART
- id: es11 · type: read · creator: Analog Devices and free tutorials · length: about 3 hours
- access: free | free online

### Introduction
SPI is a fast bus with a shared clock; UART sends bytes over a simple serial line used for debugging and modules.

### Quiz
**Multiple choice.** Which bus uses a shared clock?
- SPI ✓
- UART
- Neither

**Multiple choice.** What is UART often used for?
- Debugging ✓
- Cooking
- Nothing

**Multiple choice.** Which is faster in general?
- SPI ✓
- UART
- They are always equal

**Multiple choice.** Is “SPI and UART” free?
- Yes ✓
- No
- Only for companies

## Debugging embedded systems
- id: es12 · type: read · creator: Memfault *Interrupt* blog · length: about 4 hours
- access: free | free online

### Introduction
Using debug probes, breakpoints, logic analysers and fault handlers to find bugs on real hardware.

### Quiz
**Multiple choice.** Which tool watches signals on wires?
- A logic analyser ✓
- A thermometer
- A ruler

**Multiple choice.** What does a breakpoint do?
- Pauses the program ✓
- Breaks the board
- Nothing

**Multiple choice.** Which blog publishes this?
- Memfault's *Interrupt* ✓
- *Vogue*
- None

**Multiple choice.** Is “Debugging embedded systems” free?
- Yes ✓
- No
- Only for customers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Read a sensor over I²C and print values over UART.
2. Compare polling and interrupts for a button.
3. Debug a deliberately broken program with a logic analyser or simulator.

---

# Stage 4: Real Time
level: Connoisseur
intent: Deadlines.
gate: Score 70% or more across this stage's quizzes.
covers: embedded-systems, operating-systems

This stage covers scheduling theory, a free RTOS book, a famous bug on Mars, and an open-source RTOS.

## Scheduling algorithms for hard real-time
- id: es13 · type: read · creator: C. L. Liu and James W. Layland · year: 1973 · length: about 3 hours
- access: free-and-paid | summaries are free

### Introduction
Giving shorter-period tasks higher priority meets all deadlines if processor use stays below a known bound.

### Quiz
**Multiple choice.** Which tasks get higher priority?
- Shorter-period tasks ✓
- Longer ones
- Random ones

**Multiple choice.** When are all deadlines met?
- If processor use stays below a bound ✓
- Always
- Never

**Multiple choice.** Who published the scheduling paper?
- Liu and Layland ✓
- Lee and Seshia
- White and White

**Multiple choice.** When was it published?
- 1973 ✓
- 1982
- 2003

## Mastering the FreeRTOS Real Time Kernel
- id: es14 · type: read · creator: Richard Barry · length: about 15 hours
- access: free | free online

### Introduction
A free guide to tasks, queues, semaphores and timers in one of the most widely used RTOSes.

### Quiz
**Multiple choice.** Which feature is covered?
- Queues ✓
- Spreadsheets
- Nothing

**Multiple choice.** What is FreeRTOS?
- A real-time operating system ✓
- A game
- A drink

**Multiple choice.** Who wrote the guide?
- Richard Barry ✓
- Miro Samek
- Michael Barr

**Multiple choice.** Is “Mastering the FreeRTOS Real Time Kernel” free?
- Yes ✓
- No
- Only for companies

## What really happened on Mars Pathfinder
- id: es15 · type: read · creator: Glenn Reeves's account and free explainers · year: 1997 · length: about 2 hours
- access: free | free online

### Introduction
A low-priority task held a lock needed by a high-priority one, causing resets until priority inheritance was turned on.

### Quiz
**Multiple choice.** What caused the resets?
- Priority inversion ✓
- Dust storms
- Low battery

**Multiple choice.** What fixed it?
- Turning on priority inheritance ✓
- Replacing the computer
- Nothing

**Multiple choice.** Where was the spacecraft?
- On Mars ✓
- On the Moon
- In a lab

**Multiple choice.** When did it happen?
- 1997 ✓
- 1973
- 2016

## Zephyr Project
- id: es16 · type: read · creator: Linux Foundation Zephyr documentation · year: 2016 · length: about 8 hours
- access: free | free online

### Introduction
An open-source RTOS supporting hundreds of boards, with drivers, networking and security built in.

### Quiz
**Multiple choice.** What kind of software is Zephyr?
- An open-source RTOS ✓
- A spreadsheet
- A game

**Multiple choice.** How many boards does it support?
- Hundreds ✓
- One
- None

**Multiple choice.** Who hosts the project?
- The Linux Foundation ✓
- A bank
- NASA

**Multiple choice.** Is “Zephyr Project” free?
- Yes ✓
- No
- Only for members

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Check whether a set of tasks is schedulable.
2. Write two RTOS tasks that share data safely.
3. Explain priority inversion with an everyday analogy.

---

# Stage 5: Safety and Reliability
level: Specialist
intent: When failure hurts.
gate: Score 70% or more across this stage's quizzes.
covers: embedded-systems, safety-engineering

This stage covers safe coding rules, a court case on car software, reliable design practice and watchdogs.

## MISRA C
- id: es17 · type: read · creator: MISRA, with free summaries · year: 1998 · length: about 4 hours
- access: free-and-paid | summaries are free

### Introduction
Coding rules restricting risky features of C, widely used in cars, aircraft and medical devices.

### Quiz
**Multiple choice.** What do the rules restrict?
- Risky features of C ✓
- Car colours
- Nothing

**Multiple choice.** Where are they widely used?
- Cars, aircraft and medical devices ✓
- Fashion
- Nowhere

**Multiple choice.** When were they first published?
- 1998 ✓
- 2013
- 1973

**Multiple choice.** Is the full standard free?
- No, but summaries are ✓
- Yes
- It doesn't exist

## The Toyota throttle software case
- id: es18 · type: read · creator: Court testimony by Michael Barr and free analyses · year: 2013 · length: about 3 hours
- access: free | free online

### Introduction
Experts reviewed engine control code and criticised its structure, stack use and lack of safety practices.

### Quiz
**Multiple choice.** What did experts review?
- Engine control code ✓
- Paint quality
- Nothing

**Multiple choice.** What did they criticise?
- Structure and safety practices ✓
- The logo
- Nothing

**Multiple choice.** Who gave testimony?
- Michael Barr ✓
- Richard Barry
- Glenn Reeves

**Multiple choice.** When was the case?
- 2013 ✓
- 1997
- 1998

## Better Embedded System Software
- id: es19 · type: read · creator: Philip Koopman · year: 2010 · length: about 20 hours
- access: paid | buy, or borrow from a library

### Introduction
Short chapters on requirements, design, testing, safety and security practices for embedded teams.

### Quiz
**Multiple choice.** What is covered?
- Requirements, design, testing and safety ✓
- Only marketing
- Nothing

**Multiple choice.** Who is it for?
- Embedded teams ✓
- Chefs
- Nobody

**Multiple choice.** Who wrote “Better Embedded System Software”?
- Philip Koopman ✓
- Elecia White
- Pete Warden

**Multiple choice.** When was “Better Embedded System Software” published?
- 2010 ✓
- 2019
- 1982

## Watchdog timers and fault handling
- id: es20 · type: read · creator: Memfault *Interrupt* blog and free guides · length: about 2 hours
- access: free | free online

### Introduction
A watchdog resets a stuck system; good fault handlers record what went wrong for later analysis.

### Quiz
**Multiple choice.** What does a watchdog do?
- Resets a stuck system ✓
- Barks
- Nothing

**Multiple choice.** What should fault handlers record?
- What went wrong ✓
- Music
- Nothing

**Multiple choice.** Why record faults?
- For later analysis ✓
- For fun
- No reason

**Multiple choice.** Are the guides free?
- Yes ✓
- No
- Only for customers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Review a code sample against five MISRA-style rules.
2. What lessons does the Toyota case teach software teams?
3. Design a watchdog strategy for a medical pump.

---

# Stage 6: Connected, Low-Power and Research
level: Expert
intent: Tiny and smart.
gate: Score 70% or more across this stage's quizzes.
covers: embedded-systems, internet-of-things, machine-learning

The final stage covers low-power design, tiny machine learning, connected-device security, and current research.

## Low-power design
- id: es21 · type: read · creator: Memfault *Interrupt* blog and manufacturer application notes · length: about 4 hours
- access: free | free online

### Introduction
Sleep modes, clock gating and duty cycling let sensors run for years on a small battery.

### Quiz
**Multiple choice.** How long can careful sensors run?
- Years on a small battery ✓
- Minutes
- Never

**Multiple choice.** Which technique saves power?
- Sleep modes ✓
- Running at full speed always
- Nothing

**Multiple choice.** What is duty cycling?
- Waking only briefly to work ✓
- Spinning a wheel
- Nothing

**Multiple choice.** Are the notes free?
- Yes ✓
- No
- Only for customers

## TinyML
- id: es22 · type: read · creator: Pete Warden and Daniel Situnayake · year: 2019 · length: about 15 hours
- access: paid | buy, or borrow from a library

### Introduction
Running machine learning on microcontrollers, from wake-word detection to gesture recognition.

### Quiz
**Multiple choice.** Where does TinyML run models?
- On microcontrollers ✓
- Only on supercomputers
- Nowhere

**Multiple choice.** Which application is shown?
- Wake-word detection ✓
- Tax returns
- Nothing

**Multiple choice.** Who wrote *TinyML*?
- Warden and Situnayake ✓
- Lee and Seshia
- Liu and Layland

**Multiple choice.** When was “TinyML” published?
- 2019 ✓
- 2010
- 2003

## Securing connected devices
- id: es23 · type: read · creator: ETSI EN 303 645 and free guides · year: 2020 · length: about 3 hours
- access: free | free online

### Introduction
A baseline for consumer device security: no default passwords, secure updates and a way to report flaws.

### Quiz
**Multiple choice.** Which practice does the baseline ban?
- Default passwords ✓
- Updates
- Encryption

**Multiple choice.** What must updates be?
- Secure ✓
- Optional and unsigned
- Nothing

**Multiple choice.** When was the standard published?
- 2020 ✓
- 1998
- 1973

**Multiple choice.** Is “Securing connected devices” free?
- Yes ✓
- No
- Only for manufacturers

## Reading current research
- id: es24 · type: read · creator: *ACM Transactions on Embedded Computing Systems* and arXiv · length: ongoing
- access: free-and-paid | preprints are free

### Introduction
Choose a question from this path and read a recent paper, noting the hardware used and how energy or timing was measured.

### Quiz
**Multiple choice.** What should you note in an embedded paper?
- Hardware used and how energy or timing was measured ✓
- Only the title
- Nothing

**Multiple choice.** Which journal focuses on embedded computing?
- *ACM Transactions on Embedded Computing Systems* ✓
- *Vogue*
- *The Lancet*

**Multiple choice.** Where are preprints posted?
- arXiv ✓
- A cookbook
- Nowhere

**Multiple choice.** Are preprints free?
- Yes ✓
- No
- Only for members

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Estimate battery life for a sensor that wakes every minute.
2. Run a tiny model on a microcontroller or simulator.
3. Audit a smart device against the security baseline.

---

# Final mastery check

Finishing all six stages makes you a capable student of embedded systems. To earn the **Ascent Mastery: Embedded Systems** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Build project.** Build a working device that reads a sensor and acts on it in real time.
3. **Code review.** Review unseen embedded code for timing and safety bugs.
4. **Capstone essay.** 2,500 words on one of the Stage 6 questions. Strong essays are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “What is the computer inside a washing machine doing?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Electronics | Stage 3 | The Electronics path | Free + paid |
| Operating systems | Stage 4 | The Operating systems path | Free + paid |
| Computer architecture | Stage 2 | The Computer architecture path | Free + paid |

# Bridges to other subjects

- **Electronics:** circuits and sensors.
- **Computer science:** operating systems.
- **Control engineering:** feedback loops.
- **Safety engineering:** failure.
- **Machine learning:** tiny models.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by embedded engineers from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
