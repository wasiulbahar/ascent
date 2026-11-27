---
path: Algorithms and Data Structures
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Algorithms and Data Structures

How to solve problems efficiently with computers: core data structures, measuring efficiency, sorting and searching, graphs, dynamic programming and greedy methods, the limits of computation, and problem-solving practice. About 200 to 250 hours over eight to ten months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free university courses, visualisers and textbooks cover the whole path. You need to program in one language; the Programming path is a good start. Solve problems as you go: algorithms are learned by implementing them.

# About algorithms and data structures

An algorithm is a precise, step-by-step method for solving a problem; a data structure is a way of organising data so algorithms can use it efficiently. Together they decide whether a program finishes in a second or in a century.

This path starts with everyday algorithms and visual tools, teaches the core data structures and how to measure efficiency, covers sorting and graphs, moves to powerful design techniques and the limits of computation, and ends with competitive programming and classic references.

**Trivia**
- The word “algorithm” comes from the name of the ninth-century Baghdad mathematician al-Khwarizmi.
- Edsger Dijkstra said he designed his shortest-path algorithm in about twenty minutes at a café in Amsterdam, without pencil and paper.
- Donald Knuth sends a cheque for $2.56, “one hexadecimal dollar”, to the first finder of each error in his books.
- Whoever settles whether P equals NP can claim a $1 million Millennium Prize.

### Timeline
- **c. 300 BCE · Euclid** describes an algorithm for the greatest common divisor.
- **c. 820 · Al-Khwarizmi** writes on calculation in Baghdad; his name gives us “algorithm”.
- **1736 · Leonhard Euler** solves the Königsberg bridges problem, founding graph theory.
- **1945 · John von Neumann** describes merge sort.
- **1959 · Edsger Dijkstra** publishes his shortest-path algorithm.
- **1961 · Tony Hoare** publishes quicksort.
- **1968 · Donald Knuth** publishes the first volume of *The Art of Computer Programming*.
- **1971 · Stephen Cook** introduces NP-completeness.
- **1990 · Cormen, Leiserson and Rivest** publish *Introduction to Algorithms*.
- **2002 · Agrawal, Kayal and Saxena** show primality can be tested in polynomial time.

# What you will be able to do

At the end of this path you will know algorithms the way a strong university course and technical interviews expect. You will be able to:

- **Use data structures:** arrays, lists, stacks, queues, hash tables, trees, heaps and graphs.
- **Analyse efficiency:** with big-O notation, for time and memory.
- **Apply classic algorithms:** sorting, searching, graph traversal and shortest paths.
- **Design algorithms:** with divide and conquer, dynamic programming and greedy methods.
- **Recognise hard problems:** NP-completeness and when to approximate.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Computer scientists and teachers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Algorithms everywhere.
gate: Score 70% or more across this stage's quizzes.
covers: algorithms, computer-science

Algorithms are everywhere in daily life. This stage gives you a popular book on that idea, an illustrated beginner's guide, a visualiser, and Harvard's introduction.

## Algorithms to Live By
- id: ad1 · type: read · creator: Brian Christian and Tom Griffiths · year: 2016 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
Applies computer science to everyday choices: when to stop looking for a flat, how to organise a wardrobe like a cache, and how to schedule tasks.

### Quiz
**Multiple choice.** What does the book apply computer science to?
- Everyday choices ✓
- Only computers
- Sports scores

**Multiple choice.** Which problem asks when to stop searching?
- Optimal stopping ✓
- Sorting
- Encryption

**Multiple choice.** Who wrote it?
- Christian and Griffiths ✓
- Cormen and Rivest
- Knuth

**Multiple choice.** When was it published?
- 2016 ✓
- 1968
- 1990

## Grokking Algorithms
- id: ad2 · type: read · creator: Aditya Bhargava · year: 2016 · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
An illustrated, friendly introduction to binary search, recursion, quicksort, hash tables, graphs and dynamic programming.

### Quiz
**Multiple choice.** What makes the book friendly?
- Illustrations ✓
- Equations only
- No examples

**Multiple choice.** Which algorithm does it cover?
- Binary search ✓
- Tax filing
- Knitting

**Multiple choice.** Who wrote “Grokking Algorithms”?
- Aditya Bhargava ✓
- Jeff Erickson
- Steven Skiena

**Multiple choice.** When was “Grokking Algorithms” published?
- 2016 ✓
- 2002
- 1959

## VisuAlgo
- id: ad3 · type: course · creator: Steven Halim, National University of Singapore · length: about 4 hours
- access: free | free online

### Introduction
Animations of sorting, linked lists, heaps, hash tables, graphs and more, step by step with your own inputs.

### Quiz
**Multiple choice.** What does VisuAlgo show?
- Algorithms as animations ✓
- Films
- Maps only

**Multiple choice.** Can you use your own inputs?
- Yes ✓
- No
- Only numbers below 3

**Multiple choice.** Which university made it?
- National University of Singapore ✓
- Harvard
- MIT

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for students

## CS50x: algorithms lecture
- id: ad4 · type: watch · creator: David J. Malan, Harvard University · length: about 3 hours
- access: free | free online

### Introduction
Harvard's famous introduction to computer science, including searching and sorting with volunteers and phone books on stage.

### Quiz
**Multiple choice.** Which topics does the lecture cover?
- Searching and sorting ✓
- Cooking
- Painting

**Multiple choice.** Who teaches CS50?
- David J. Malan ✓
- Donald Knuth
- Tony Hoare

**Multiple choice.** Which university runs CS50?
- Harvard ✓
- Stanford
- Oxford

**Multiple choice.** Is “CS50x: algorithms lecture” free?
- Yes ✓
- No
- Only at Harvard

---

# Stage 2: Core Data Structures
level: Explorer
intent: Organising data.
gate: Score 70% or more across this stage's quizzes.
covers: algorithms, discrete-mathematics

This stage teaches the building blocks: lists, stacks, queues, hash tables, trees and heaps.

## Open Data Structures
- id: ad5 · type: read · creator: Pat Morin · year: 2013 · length: about 25 hours
- access: free | free online

### Introduction
A free textbook on lists, queues, hash tables, binary search trees, heaps and graphs, with code and analysis.

### Quiz
**Multiple choice.** Which structure does the book cover?
- Binary search trees ✓
- Spreadsheets only
- Paper files

**Multiple choice.** What does it include with each structure?
- Code and analysis ✓
- Songs
- Nothing

**Multiple choice.** Who wrote “Open Data Structures”?
- Pat Morin ✓
- Bhargava
- Malan

**Multiple choice.** Is “Open Data Structures” free?
- Yes ✓
- No
- Only in print

## Algorithms, Part I
- id: ad6 · type: course · creator: Robert Sedgewick and Kevin Wayne, Princeton University on Coursera · year: 2012 · length: about 30 hours
- access: free | free to audit

### Introduction
Princeton's course on union–find, stacks and queues, sorting, priority queues and symbol tables, with programming assignments.

### Quiz
**Multiple choice.** Which structure is in the course?
- Priority queues ✓
- Bookshelves
- Cupboards

**Multiple choice.** What do learners complete?
- Programming assignments ✓
- Essays only
- Nothing

**Multiple choice.** Which university offers it?
- Princeton ✓
- Yale
- Michigan

**Multiple choice.** Is it free to audit?
- Yes ✓
- No
- Only at Princeton

## Hash tables
- id: ad7 · type: read · creator: Sedgewick and Wayne, *Algorithms* (booksite) · year: 2011 · length: about 4 hours
- access: free-and-paid | booksite is free

### Introduction
Hash tables store key–value pairs and find them in constant average time by computing an index from each key; collisions must be handled.

### Quiz
**Multiple choice.** How fast is a hash table lookup on average?
- Constant time ✓
- Linear time
- Exponential time

**Multiple choice.** What must hash tables handle?
- Collisions ✓
- Rain
- Nothing

**Multiple choice.** What does a hash function compute?
- An index from a key ✓
- A password
- A picture

**Multiple choice.** Is the booksite free?
- Yes ✓
- No
- Only for teachers

## MIT 6.006 Introduction to Algorithms
- id: ad8 · type: watch · creator: Erik Demaine, Jason Ku and Justin Solomon, MIT OpenCourseWare · year: 2020 · length: about 30 hours
- access: free | free online

### Introduction
MIT lectures on sequences, sets, binary trees, balanced trees, heaps, hashing and graph algorithms.

### Quiz
**Multiple choice.** What keeps search trees efficient?
- Balancing ✓
- Painting
- Deleting all nodes

**Multiple choice.** Which structure supports a priority queue?
- A heap ✓
- A string
- A file

**Multiple choice.** Who teaches the course?
- Demaine, Ku and Solomon ✓
- Sedgewick and Wayne
- Christian

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at MIT

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Implement a stack, a queue and a hash table from scratch.
2. When would you choose a hash table over a balanced tree?
3. Explain how a heap supports a priority queue.

---

# Stage 3: Efficiency and Sorting
level: Reader
intent: Measuring and ordering.
gate: Score 70% or more across this stage's quizzes.
covers: algorithms, theoretical-computer-science

This stage teaches big-O analysis, the classic sorting algorithms, the standard textbook, and recursion and divide and conquer.

## Asymptotic notation
- id: ad9 · type: course · creator: Thomas Cormen and Devin Balkcom, Khan Academy · length: about 4 hours
- access: free | free online

### Introduction
Big-O notation describes how running time grows with input size, ignoring constants, so algorithms can be compared fairly.

### Quiz
**Multiple choice.** What does big-O describe?
- How running time grows with input size ✓
- Exact seconds
- Memory brand

**Multiple choice.** What does big-O ignore?
- Constant factors ✓
- Input size
- Everything

**Multiple choice.** Which grows faster?
- n² ✓
- n
- log n

**Multiple choice.** Is the course free?
- Yes ✓
- No
- Only for students

## Sorting algorithms
- id: ad10 · type: read · creator: Sedgewick and Wayne booksite; VisuAlgo · length: about 8 hours
- access: free | free online

### Introduction
Merge sort and quicksort sort in O(n log n) time; comparison sorts cannot do better in the worst case, a proven lower bound.

### Quiz
**Multiple choice.** What is the running time of merge sort?
- O(n log n) ✓
- O(n³)
- O(1)

**Multiple choice.** Who invented quicksort?
- Tony Hoare ✓
- Euler
- Dijkstra

**Multiple choice.** Can comparison sorts beat n log n in the worst case?
- No ✓
- Yes
- Only on Sundays

**Multiple choice.** Are these resources free?
- Yes ✓
- No
- Only in print

## Introduction to Algorithms
- id: ad11 · type: read · creator: Thomas Cormen, Charles Leiserson, Ronald Rivest and Clifford Stein · year: 1990 · length: about 100 hours
- access: paid | buy, or borrow from a library

### Introduction
The standard reference textbook (“CLRS”), with rigorous analysis of sorting, data structures, graphs, dynamic programming and NP-completeness.

### Quiz
**Multiple choice.** What is the book's nickname?
- CLRS ✓
- TAOCP
- SICP

**Multiple choice.** How does it analyse algorithms?
- Rigorously ✓
- Not at all
- With jokes only

**Multiple choice.** Which topic does it cover?
- NP-completeness ✓
- Cooking
- Gardening

**Multiple choice.** When was the first edition published?
- 1990 ✓
- 1968
- 2016

## Algorithms Illuminated
- id: ad12 · type: read · creator: Tim Roughgarden · year: 2017 · length: about 20 hours
- access: free-and-paid | video lectures free

### Introduction
Short books and free videos on divide and conquer, including Karatsuba multiplication, merge sort and the master method.

### Quiz
**Multiple choice.** Which technique splits problems into smaller ones?
- Divide and conquer ✓
- Brute force only
- Guessing

**Multiple choice.** Which multiplication algorithm is covered?
- Karatsuba's ✓
- Long division
- Abacus

**Multiple choice.** What analyses divide-and-conquer recurrences?
- The master method ✓
- A thermometer
- A survey

**Multiple choice.** Who wrote the books?
- Tim Roughgarden ✓
- Pat Morin
- Steven Halim

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Implement merge sort and quicksort and time them on large inputs.
2. Why can't comparison sorting beat n log n?
3. Analyse a recursive algorithm with the master method.

---

# Stage 4: Graphs
level: Connoisseur
intent: Networks and paths.
gate: Score 70% or more across this stage's quizzes.
covers: graph-theory, algorithms

Graphs model roads, networks and dependencies. This stage teaches graph search, shortest paths, spanning trees and network flow.

## Algorithms
- id: ad13 · type: read · creator: Jeff Erickson · year: 2019 · length: about 40 hours
- access: free | free online

### Introduction
A free, rigorous textbook from the University of Illinois, strong on graph search, recursion, dynamic programming and lower bounds.

### Quiz
**Multiple choice.** Which topic is a strength of the book?
- Graph search ✓
- Painting
- Geography

**Multiple choice.** Which university is Erickson from?
- University of Illinois ✓
- Harvard
- Princeton

**Multiple choice.** What kind of textbook is it?
- Free and rigorous ✓
- Paid and casual
- A novel

**Multiple choice.** When was “Algorithms” published?
- 2019 ✓
- 1990
- 1736

## Dijkstra's shortest-path algorithm
- id: ad14 · type: read · creator: Erickson, chapter 8; Dijkstra's 1959 paper · year: 1959 · length: about 4 hours
- access: free | free online

### Introduction
Dijkstra's algorithm finds shortest paths from one start point when edge weights are not negative, used in route planning.

### Quiz
**Multiple choice.** What does Dijkstra's algorithm find?
- Shortest paths ✓
- Longest words
- Prime numbers

**Multiple choice.** Which edges break it?
- Negative weights ✓
- Short edges
- Blue edges

**Multiple choice.** Where is it used?
- Route planning ✓
- Baking
- Painting

**Multiple choice.** When was “Dijkstra's shortest-path algorithm” published?
- 1959 ✓
- 1971
- 2002

## Minimum spanning trees
- id: ad15 · type: read · creator: Erickson, chapter 7 · length: about 4 hours
- access: free | free online

### Introduction
Kruskal's and Prim's algorithms connect all points of a network with the least total cost, a classic greedy success.

### Quiz
**Multiple choice.** What does a minimum spanning tree connect?
- All points at least total cost ✓
- Two points only
- Nothing

**Multiple choice.** Which algorithm finds one?
- Kruskal's ✓
- Quicksort
- Binary search

**Multiple choice.** What kind of method are these algorithms?
- Greedy ✓
- Random
- Brute force

**Multiple choice.** Is the chapter free?
- Yes ✓
- No
- Only in print

## Network flow
- id: ad16 · type: read · creator: Erickson, chapters 10 and 11 · year: 1956 · length: about 6 hours
- access: free | free online

### Introduction
Ford and Fulkerson's method finds the maximum flow through a network, which equals the capacity of its minimum cut.

### Quiz
**Multiple choice.** What does max flow equal?
- The minimum cut ✓
- The longest path
- Zero

**Multiple choice.** Who developed the classic method?
- Ford and Fulkerson ✓
- Hoare and Knuth
- Euclid

**Multiple choice.** Which real problem does flow model?
- Moving goods through a network ✓
- Writing poems
- Nothing

**Multiple choice.** When was the method published?
- 1956 ✓
- 2019
- 1736

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Implement breadth-first search and Dijkstra's algorithm on a real map.
2. Why does Dijkstra's algorithm fail with negative edges?
3. Model a real problem as a network flow.

---

# Stage 5: Design Techniques and Limits
level: Specialist
intent: Powerful ideas and hard problems.
gate: Score 70% or more across this stage's quizzes.
covers: algorithms, computational-complexity

This stage teaches dynamic programming and greedy design, the P versus NP question, and randomised algorithms.

## Dynamic programming
- id: ad17 · type: read · creator: Erickson, chapter 3; MIT 6.006 lectures · length: about 10 hours
- access: free | free online

### Introduction
Dynamic programming solves problems by combining answers to overlapping subproblems, storing them so each is solved once.

### Quiz
**Multiple choice.** What does dynamic programming store?
- Answers to subproblems ✓
- Nothing
- Passwords

**Multiple choice.** What kind of subproblems suit it?
- Overlapping ones ✓
- Unrelated ones
- None

**Multiple choice.** Who coined the term?
- Richard Bellman ✓
- Dijkstra
- Euler

**Multiple choice.** Is “Dynamic programming” free?
- Yes ✓
- No
- Only at MIT

## Greedy algorithms
- id: ad18 · type: read · creator: Erickson, chapter 4 · length: about 5 hours
- access: free | free online

### Introduction
Greedy algorithms make the best local choice at each step; they are fast but correct only when you can prove the choice is safe.

### Quiz
**Multiple choice.** What do greedy algorithms choose?
- The best local option each step ✓
- Randomly
- The worst option

**Multiple choice.** When are they correct?
- When the choice can be proved safe ✓
- Always
- Never

**Multiple choice.** Which algorithm is greedy?
- Kruskal's ✓
- Merge sort
- Binary search

**Multiple choice.** Is “Greedy algorithms” free?
- Yes ✓
- No
- Only for teachers

## The Golden Ticket
- id: ad19 · type: read · creator: Lance Fortnow · year: 2013 · length: about 6 hours
- access: paid | buy, or borrow from a library

### Introduction
An accessible book on P versus NP: whether every problem whose solution can be checked quickly can also be solved quickly.

### Quiz
**Multiple choice.** What does P versus NP ask?
- Whether quick checking means quick solving ✓
- Whether computers are big
- Nothing

**Multiple choice.** What prize awaits a solution?
- $1 million ✓
- A gold medal
- Nothing

**Multiple choice.** Who wrote the book?
- Lance Fortnow ✓
- Stephen Cook
- Knuth

**Multiple choice.** When was “The Golden Ticket” published?
- 2013 ✓
- 1971
- 1990

## Algorithm Design
- id: ad20 · type: read · creator: Jon Kleinberg and Éva Tardos · year: 2005 · length: about 40 hours
- access: paid | buy, or borrow from a library

### Introduction
A textbook that teaches design through real problems, including NP-completeness, approximation and randomised algorithms.

### Quiz
**Multiple choice.** How does the book teach design?
- Through real problems ✓
- Through poems
- Without examples

**Multiple choice.** Which topic does “Algorithm Design” cover?
- Approximation algorithms ✓
- Ballet
- Cooking

**Multiple choice.** Who wrote “Algorithm Design”?
- Kleinberg and Tardos ✓
- Cormen and Stein
- Fortnow

**Multiple choice.** When was “Algorithm Design” published?
- 2005 ✓
- 1956
- 2019

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Solve a classic dynamic programming problem and explain the subproblems.
2. Prove or disprove that a greedy rule is correct for a problem.
3. Why would proving P = NP change the world?

---

# Stage 6: Practice and Mastery
level: Expert
intent: Solving problems fluently.
gate: Score 70% or more across this stage's quizzes.
covers: algorithms, programming-languages

The final stage builds fluency: a free competitive programming handbook, online judges, a practical design manual, and the classic of the field.

## Competitive Programmer's Handbook
- id: ad21 · type: read · creator: Antti Laaksonen · year: 2017 · length: about 25 hours
- access: free | free online

### Introduction
A free book on techniques for programming contests: complete search, greedy, dynamic programming, graphs, trees and range queries.

### Quiz
**Multiple choice.** What is the handbook for?
- Programming contests ✓
- Cooking contests
- Sports

**Multiple choice.** Which technique does it cover?
- Range queries ✓
- Juggling
- Singing

**Multiple choice.** Who wrote “Competitive Programmer's Handbook”?
- Antti Laaksonen ✓
- Steven Skiena
- Jeff Erickson

**Multiple choice.** Is “Competitive Programmer's Handbook” free?
- Yes ✓
- No
- Only for teams

## Online judges
- id: ad22 · type: course · creator: Codeforces, AtCoder and LeetCode · length: ongoing
- access: free-and-paid | core practice is free

### Introduction
Sites that test your code on hidden cases; regular contests and problem sets build speed and accuracy.

### Quiz
**Multiple choice.** What do online judges test your code on?
- Hidden test cases ✓
- Your handwriting
- Nothing

**Multiple choice.** What do regular contests build?
- Speed and accuracy ✓
- Muscles
- Nothing

**Multiple choice.** Which is an online judge?
- Codeforces ✓
- Wikipedia
- Netflix

**Multiple choice.** Is core practice free?
- Yes ✓
- No
- Only in Japan

## The Algorithm Design Manual
- id: ad23 · type: read · creator: Steven S. Skiena · year: 1997 · length: about 30 hours
- access: paid | buy, or borrow from a library

### Introduction
A practical guide with “war stories” from real projects and a catalogue of problems to help you recognise which known algorithm applies.

### Quiz
**Multiple choice.** What are Skiena's “war stories”?
- Accounts of real projects ✓
- Battle history
- Fiction

**Multiple choice.** What does the catalogue help you do?
- Recognise which algorithm applies ✓
- Buy books
- Nothing

**Multiple choice.** Who wrote “The Algorithm Design Manual”?
- Steven S. Skiena ✓
- Antti Laaksonen
- Tim Roughgarden

**Multiple choice.** When was “The Algorithm Design Manual” published?
- 1997 ✓
- 2017
- 1968

## The Art of Computer Programming
- id: ad24 · type: read · creator: Donald E. Knuth · year: 1968 · length: a lifetime
- access: paid | buy, or borrow from a library

### Introduction
Knuth's monumental, still-unfinished series analyses algorithms in depth; dip into volume 3 on sorting and searching.

### Quiz
**Multiple choice.** Is the series finished?
- No, still in progress ✓
- Yes, long ago
- It was cancelled

**Multiple choice.** Which volume covers sorting and searching?
- Volume 3 ✓
- Volume 1
- Volume 10

**Multiple choice.** What does Knuth pay finders of errors?
- $2.56 ✓
- $1 million
- Nothing

**Multiple choice.** When was the first volume published?
- 1968 ✓
- 1990
- 2005

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Solve fifty problems across topics and track your weak areas.
2. Pick a real problem and find the right algorithm in Skiena's catalogue.
3. What makes an algorithm elegant? Use an example from Knuth.

---

# Final mastery check

Finishing all six stages makes you a strong algorithmic problem solver. To earn the **Ascent Mastery: Algorithms and Data Structures** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Implementation set.** Implement ten core structures and algorithms with tests.
3. **Problem set.** Solve unseen problems under time limits and analyse their complexity.
4. **Capstone report.** 2,500 words applying algorithms to a real problem. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “Why is binary search so fast?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Programming | Stage 2 | The Programming path | Free + paid |
| Mathematics | Stage 3 | The Mathematics path | Free + paid |
| Computer science | Stage 5 | The Computer science path | Free + paid |

# Bridges to other subjects

- **Mathematics:** proof and discrete maths.
- **Computer science:** complexity theory.
- **Operations research:** optimisation.
- **Biology:** sequence alignment.
- **Economics:** matching markets.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by computer scientists and teachers from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
