---
path: Databases
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Databases

How data is stored, queried and kept safe: SQL and the relational model, good schema design, how databases work inside, transactions, distributed and NoSQL systems, performance and operations, and security and privacy. About 180 to 220 hours over seven to nine months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free university lectures, documentation, classic papers and open-source databases such as SQLite and PostgreSQL cover nearly everything. You need basic programming. Practise on your own databases, never on systems you don't have permission to use.

# About databases

A database stores data so that many people and programs can find, change and trust it. Databases sit behind almost every app, bank, hospital, shop and government service.

This path starts with SQL puzzles and an overview, teaches the relational model, SQL and design, explains indexes, query optimisation and transactions, moves to distributed and NoSQL systems, covers performance and operations, and ends with security, privacy and research.

**Trivia**
- IBM's IMS database was built in the 1960s partly to track the millions of parts for the Apollo programme.
- SQLite is probably the most widely deployed database in the world, running inside billions of phones, browsers and devices.
- SQL was first called SEQUEL; the name was shortened because of a trademark.
- Edgar F. Codd won the Turing Award in 1981 for the relational model.

### Timeline
- **1960s · IBM's IMS** manages data for the Apollo programme.
- **1970 · Edgar F. Codd** proposes the relational model.
- **1972 · Bayer and McCreight** publish the B-tree.
- **1974 · Chamberlin and Boyce** describe SEQUEL, later SQL.
- **1979 · Oracle** releases an early commercial SQL database; Selinger publishes query optimisation.
- **1986 · SQL** becomes an ANSI standard.
- **1996 · PostgreSQL** takes its name as an open-source project.
- **2000 · SQLite** is first released.
- **2007 · Amazon's Dynamo paper** influences NoSQL databases.
- **2012 · Google's Spanner paper** describes a globally distributed database.

# What you will be able to do

At the end of this path you will know databases the way a strong university course and early industry work expect. You will be able to:

- **Write SQL:** queries, joins, aggregation, subqueries and window functions.
- **Design schemas:** entities, relationships, keys and normalisation.
- **Explain internals:** storage, B-tree indexes, query plans, transactions and recovery.
- **Choose systems:** relational, document, key–value and distributed databases, and their trade-offs.
- **Run databases safely:** performance tuning, backups, security and privacy.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Database engineers and computer science educators from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Asking data questions.
gate: Score 70% or more across this stage's quizzes.
covers: database-systems, information-systems

Start by asking questions of data. This stage gives you a detective game in SQL, a famous university course, free SQL lessons, and a friendly design guide.

## SQL Murder Mystery
- id: db1 · type: course · creator: Northwestern University Knight Lab · year: 2019 · length: about 2 hours
- access: free | free online

### Introduction
Solve a murder by writing SQL queries against a town's database of people, interviews and records.

### Quiz
**Multiple choice.** What do you solve in the game?
- A murder ✓
- A maze
- A crossword

**Multiple choice.** Which language do you write?
- SQL ✓
- French
- Morse code

**Multiple choice.** Who made it?
- Northwestern University Knight Lab ✓
- A police force
- A film studio

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for detectives

## CMU 15-445 Database Systems
- id: db2 · type: watch · creator: Andy Pavlo, Carnegie Mellon University · length: about 30 hours
- access: free | free online

### Introduction
Popular recorded lectures on how database systems are built: storage, indexes, query execution, concurrency and recovery.

### Quiz
**Multiple choice.** What do the lectures focus on?
- How database systems are built ✓
- How to sell databases
- Cooking

**Multiple choice.** Which topic is covered?
- Concurrency control ✓
- Painting
- History

**Multiple choice.** Who teaches the course?
- Andy Pavlo ✓
- Edgar Codd
- Jim Gray

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at CMU

## Intro to SQL
- id: db3 · type: course · creator: Khan Academy · length: about 5 hours
- access: free | free online

### Introduction
Interactive lessons on creating tables, querying, joining and changing data.

### Quiz
**Multiple choice.** What do joins do?
- Combine rows from tables ✓
- Delete tables
- Draw charts

**Multiple choice.** Which statement retrieves data?
- SELECT ✓
- ERASE
- PRINT

**Multiple choice.** Who provides the lessons?
- Khan Academy ✓
- A bank
- A newspaper

**Multiple choice.** Are they free?
- Yes ✓
- No
- Only for students

## Database Design for Mere Mortals
- id: db4 · type: read · creator: Michael J. Hernandez · year: 1997 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
A friendly guide to designing relational databases from interviews and requirements to tables, keys and relationships.

### Quiz
**Multiple choice.** Who is the book for?
- Beginners ✓
- Only experts
- Children

**Multiple choice.** Where does design start?
- Interviews and requirements ✓
- Choosing colours
- Writing code

**Multiple choice.** Who wrote it?
- Michael J. Hernandez ✓
- Martin Kleppmann
- Andy Pavlo

**Multiple choice.** When was the first edition published?
- 1997 ✓
- 1970
- 2017

---

# Stage 2: The Relational Model and SQL
level: Explorer
intent: Tables, keys and queries.
gate: Score 70% or more across this stage's quizzes.
covers: database-systems, information-systems

This stage teaches the relational model from its source, hands-on SQL, normalisation, and a standard textbook.

## A Relational Model of Data for Large Shared Data Banks
- id: db5 · type: read · creator: Edgar F. Codd · year: 1970 · length: about 3 hours
- access: free | free online

### Introduction
Codd proposed storing data as relations (tables) independent of how it is stored physically, the idea behind SQL databases.

### Quiz
**Multiple choice.** What did Codd propose storing data as?
- Relations (tables) ✓
- Pictures
- Linked paper files

**Multiple choice.** What should data be independent of?
- Physical storage ✓
- Users
- Meaning

**Multiple choice.** Which award did Codd win?
- The Turing Award ✓
- The Nobel Prize
- An Oscar

**Multiple choice.** When was the paper published?
- 1970 ✓
- 1986
- 2000

## PostgreSQL tutorial and SQLite documentation
- id: db6 · type: read · creator: PostgreSQL Global Development Group and SQLite · length: about 15 hours
- access: free | free online

### Introduction
Hands-on SQL with two open-source databases: joins, aggregates, subqueries, views and window functions.

### Quiz
**Multiple choice.** Which SQL feature computes running totals?
- Window functions ✓
- Fonts
- Comments

**Multiple choice.** Are PostgreSQL and SQLite open source?
- Yes ✓
- No
- Only one is

**Multiple choice.** What does GROUP BY do?
- Groups rows for aggregation ✓
- Deletes rows
- Sorts by colour

**Multiple choice.** Is the documentation free?
- Yes ✓
- No
- Only for companies

## Normalisation
- id: db7 · type: read · creator: University database course notes · length: about 4 hours
- access: free | free online

### Introduction
Normal forms remove duplicated data so updates can't leave contradictions; sometimes designers denormalise for speed.

### Quiz
**Multiple choice.** What does normalisation remove?
- Duplicated data ✓
- All data
- Indexes

**Multiple choice.** What problem does duplication cause?
- Contradictory updates ✓
- Faster queries always
- Nothing

**Multiple choice.** Why might designers denormalise?
- For speed ✓
- For fun
- Never

**Multiple choice.** Are the notes free?
- Yes ✓
- No
- Only in print

## Database System Concepts
- id: db8 · type: read · creator: Abraham Silberschatz, Henry Korth and S. Sudarshan · year: 1986 · length: about 80 hours
- access: paid | buy, or borrow from a library

### Introduction
A standard textbook covering the relational model, SQL, design, storage, indexing, query processing and transactions.

### Quiz
**Multiple choice.** What kind of book is it?
- A standard textbook ✓
- A novel
- A cookbook

**Multiple choice.** Which topic does it cover?
- Query processing ✓
- Ballet
- Gardening

**Multiple choice.** Who is the first author?
- Abraham Silberschatz ✓
- Edgar Codd
- Jim Gray

**Multiple choice.** When was “Database System Concepts” published?
- 1986 ✓
- 1970
- 2019

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Design and normalise a schema for a library, then query it.
2. Write a query using a window function and explain it.
3. Why was Codd's separation of logical and physical data so powerful?

---

# Stage 3: Inside the Database
level: Reader
intent: Indexes, plans and transactions.
gate: Score 70% or more across this stage's quizzes.
covers: database-systems, algorithms

This stage explains how databases work inside: B-trees, query optimisation, transactions, and the overall architecture.

## B-trees
- id: db9 · type: read · creator: Rudolf Bayer and Edward McCreight's paper and CMU lectures · year: 1972 · length: about 4 hours
- access: free | free online

### Introduction
B-trees keep sorted data in wide, shallow trees so lookups need few disk reads; they power most database indexes.

### Quiz
**Multiple choice.** What do B-trees power?
- Most database indexes ✓
- Spreadsheets only
- Web pages

**Multiple choice.** Why are B-trees wide and shallow?
- So lookups need few disk reads ✓
- To look nice
- No reason

**Multiple choice.** Who published the B-tree?
- Bayer and McCreight ✓
- Codd and Date
- Gray and Reuter

**Multiple choice.** Are these resources free?
- Yes ✓
- No
- Only at CMU

## Access Path Selection in a Relational Database Management System
- id: db10 · type: read · creator: Patricia Selinger and colleagues, IBM · year: 1979 · length: about 3 hours
- access: free | free online

### Introduction
The paper behind cost-based query optimisation: estimate the cost of different plans and choose the cheapest.

### Quiz
**Multiple choice.** How does a cost-based optimiser choose a plan?
- Estimating costs and picking the cheapest ✓
- Randomly
- Alphabetically

**Multiple choice.** Which company's research produced the paper?
- IBM ✓
- Google
- Amazon

**Multiple choice.** Who led the paper?
- Patricia Selinger ✓
- Edgar Codd
- Andy Pavlo

**Multiple choice.** When was it published?
- 1979 ✓
- 2007
- 1970

## Transactions and ACID
- id: db11 · type: read · creator: Jim Gray's Turing Award materials and CMU lectures · length: about 5 hours
- access: free | free online

### Introduction
Transactions are atomic, consistent, isolated and durable: all or nothing, even when many users write at once or the power fails.

### Quiz
**Multiple choice.** What does atomic mean for a transaction?
- All or nothing ✓
- Very small
- Radioactive

**Multiple choice.** What does durable mean?
- Committed changes survive crashes ✓
- Lasts a day
- Hard to read

**Multiple choice.** Who won the Turing Award for transaction processing?
- Jim Gray ✓
- Edgar Codd
- Martin Kleppmann

**Multiple choice.** Is “Transactions and ACID” free?
- Yes ✓
- No
- Only for banks

## Architecture of a Database System
- id: db12 · type: read · creator: Joseph Hellerstein, Michael Stonebraker and James Hamilton · year: 2007 · length: about 8 hours
- access: free | free online

### Introduction
A free tour of how real database systems are organised: processes, query processors, storage managers and shared components.

### Quiz
**Multiple choice.** What does the paper describe?
- How real database systems are organised ✓
- How to cook
- Ancient history

**Multiple choice.** Which component is covered?
- The storage manager ✓
- The steering wheel
- None

**Multiple choice.** Who is one author?
- Michael Stonebraker ✓
- Andrew Blum
- Edgar Codd

**Multiple choice.** Is “Architecture of a Database System” free?
- Yes ✓
- No
- Only for companies

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Use EXPLAIN to compare a query with and without an index.
2. Describe what happens when two people book the last seat at once.
3. How does a database recover after a crash?

---

# Stage 4: Distributed and NoSQL Systems
level: Connoisseur
intent: Data at global scale.
gate: Score 70% or more across this stage's quizzes.
covers: database-systems, distributed-systems

This stage covers data across many machines: a modern classic book, the CAP theorem, Amazon's Dynamo and Google's Spanner.

## Designing Data-Intensive Applications
- id: db13 · type: read · creator: Martin Kleppmann · year: 2017 · length: about 25 hours
- access: paid | buy, or borrow from a library

### Introduction
A widely praised book on replication, partitioning, transactions and consistency in modern data systems.

### Quiz
**Multiple choice.** Which topic does the book cover?
- Replication ✓
- Painting
- Cooking

**Multiple choice.** What does partitioning do?
- Splits data across machines ✓
- Deletes data
- Colours tables

**Multiple choice.** Who wrote “Designing Data-Intensive Applications”?
- Martin Kleppmann ✓
- Jim Gray
- Patricia Selinger

**Multiple choice.** When was “Designing Data-Intensive Applications” published?
- 2017 ✓
- 1972
- 2000

## CAP Twelve Years Later
- id: db14 · type: read · creator: Eric Brewer · year: 2012 · length: about 2 hours
- access: free | free online

### Introduction
During a network partition, a distributed system must choose between consistency and availability; Brewer explains the nuance.

### Quiz
**Multiple choice.** What must a system choose between during a partition?
- Consistency and availability ✓
- Speed and colour
- Nothing

**Multiple choice.** What is a network partition?
- Machines unable to talk to each other ✓
- A wall in an office
- A new table

**Multiple choice.** Who proposed CAP?
- Eric Brewer ✓
- Edgar Codd
- Michael Stonebraker

**Multiple choice.** Is the article free?
- Yes ✓
- No
- Only for members

## Dynamo: Amazon's Highly Available Key-value Store
- id: db15 · type: read · creator: Giuseppe DeCandia and colleagues, Amazon · year: 2007 · length: about 3 hours
- access: free | free online

### Introduction
Amazon's shopping cart store chose availability, using consistent hashing and eventual consistency; it inspired many NoSQL databases.

### Quiz
**Multiple choice.** What did Dynamo prioritise?
- Availability ✓
- Strict consistency
- Low cost only

**Multiple choice.** What kind of consistency did it accept?
- Eventual consistency ✓
- No consistency
- Perfect consistency

**Multiple choice.** What did Dynamo inspire?
- Many NoSQL databases ✓
- Spreadsheets
- Nothing

**Multiple choice.** When was “Dynamo: Amazon's Highly Available Key-value Store” published?
- 2007 ✓
- 2012
- 1979

## Spanner: Google's Globally Distributed Database
- id: db16 · type: read · creator: James Corbett and colleagues, Google · year: 2012 · length: about 3 hours
- access: free | free online

### Introduction
Spanner uses atomic clocks and GPS to bound time uncertainty, giving consistent transactions across continents.

### Quiz
**Multiple choice.** What does Spanner use to bound time uncertainty?
- Atomic clocks and GPS ✓
- Sundials
- Guesswork

**Multiple choice.** What does it provide across continents?
- Consistent transactions ✓
- Faster email
- Nothing

**Multiple choice.** Which company built it?
- Google ✓
- Amazon
- IBM

**Multiple choice.** Is the paper free?
- Yes ✓
- No
- Only for employees

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. When would you choose a document store over a relational database?
2. Explain CAP using a real outage or example.
3. How do Dynamo and Spanner make opposite trade-offs?

---

# Stage 5: Performance and Operations
level: Specialist
intent: Running databases well.
gate: Score 70% or more across this stage's quizzes.
covers: database-systems, software-engineering

This stage covers making queries fast, how concurrency really works, a famous backup disaster, and modelling data for documents.

## Use The Index, Luke
- id: db17 · type: read · creator: Markus Winand · length: about 8 hours
- access: free | free online

### Introduction
A free guide to SQL indexing and performance for developers, explaining why queries are slow and how to fix them.

### Quiz
**Multiple choice.** What is the guide about?
- SQL indexing and performance ✓
- Star Wars
- Cooking

**Multiple choice.** Who is it written for?
- Developers ✓
- Only children
- Only managers

**Multiple choice.** Who wrote “Use The Index, Luke”?
- Markus Winand ✓
- Martin Kleppmann
- Jim Gray

**Multiple choice.** Is “Use The Index, Luke” free?
- Yes ✓
- No
- Only in print

## Concurrency control in PostgreSQL
- id: db18 · type: read · creator: PostgreSQL documentation on MVCC · length: about 3 hours
- access: free | free online

### Introduction
Multiversion concurrency control keeps old row versions so readers never block writers, with isolation levels choosing how strict to be.

### Quiz
**Multiple choice.** What does MVCC keep?
- Old row versions ✓
- Only one version
- Nothing

**Multiple choice.** What benefit does it give?
- Readers don't block writers ✓
- No benefit
- Deletes data

**Multiple choice.** What do isolation levels choose?
- How strict to be ✓
- Colours
- Fonts

**Multiple choice.** Is “Concurrency control in PostgreSQL” free?
- Yes ✓
- No
- Only for members

## GitLab's 2017 database incident
- id: db19 · type: read · creator: GitLab public postmortem · year: 2017 · length: about 1 hour
- access: free | free online

### Introduction
An engineer accidentally deleted a production database, and several backup methods turned out not to work; the company shared everything openly.

### Quiz
**Multiple choice.** What was accidentally deleted?
- A production database ✓
- A website logo
- Nothing

**Multiple choice.** What turned out not to work?
- Several backup methods ✓
- The office lights
- Email

**Multiple choice.** What lesson does it teach?
- Test your backups ✓
- Never use databases
- Delete more

**Multiple choice.** Is the postmortem free?
- Yes ✓
- No
- Only for staff

## Data modelling for document databases
- id: db20 · type: course · creator: MongoDB University · length: about 6 hours
- access: free | free online

### Introduction
How to model data as documents, when to embed and when to reference, and how access patterns drive design.

### Quiz
**Multiple choice.** What drives document database design?
- Access patterns ✓
- Alphabetical order
- Random choice

**Multiple choice.** What is the main choice in modelling?
- Embed or reference ✓
- Font size
- Colour

**Multiple choice.** Who provides the course?
- MongoDB University ✓
- A bank
- A cinema

**Multiple choice.** Is “Data modelling for document databases” free?
- Yes ✓
- No
- Only for companies

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Find and fix a slow query in your own database.
2. Design and test a backup and restore plan.
3. Model the same data relationally and as documents, and compare.

---

# Stage 6: Security, Privacy and Research
level: Expert
intent: Protecting people's data.
gate: Score 70% or more across this stage's quizzes.
covers: database-systems, privacy-engineering, application-security

The final stage covers privacy by design, SQL injection, a free collection of classic readings, and current research.

## Privacy by Design
- id: db21 · type: read · creator: Ann Cavoukian · year: 2009 · length: about 2 hours
- access: free | free online

### Introduction
Seven principles for building privacy in from the start, such as privacy as the default and collecting only what is needed.

### Quiz
**Multiple choice.** When should privacy be built in?
- From the start ✓
- After a breach
- Never

**Multiple choice.** What should be the default?
- Privacy ✓
- Sharing everything
- Nothing

**Multiple choice.** How many principles are there?
- Seven ✓
- Two
- Twenty

**Multiple choice.** Who developed them?
- Ann Cavoukian ✓
- Jim Gray
- Eric Brewer

## SQL injection
- id: db22 · type: read · creator: OWASP Foundation · length: about 2 hours
- access: free | free online

### Introduction
Building queries by pasting user input lets attackers run their own SQL; parameterised queries prevent it.

### Quiz
**Multiple choice.** What prevents SQL injection?
- Parameterised queries ✓
- Longer passwords
- Bigger servers

**Multiple choice.** What causes it?
- Pasting user input into queries ✓
- Using indexes
- Normalisation

**Multiple choice.** Which organisation publishes the guide?
- OWASP ✓
- FIFA
- A newspaper

**Multiple choice.** Is “SQL injection” free?
- Yes ✓
- No
- Only for members

## Readings in Database Systems (the “Red Book”)
- id: db23 · type: read · creator: Peter Bailis, Joseph Hellerstein and Michael Stonebraker · year: 2015 · length: about 15 hours
- access: free | free online

### Introduction
Experts introduce the most important database papers, with candid commentary on what mattered and what didn't.

### Quiz
**Multiple choice.** What does the Red Book introduce?
- Important database papers ✓
- Recipes
- Novels

**Multiple choice.** What kind of commentary does it offer?
- Candid ✓
- None
- Only praise

**Multiple choice.** Who is one editor?
- Michael Stonebraker ✓
- Ann Cavoukian
- Markus Winand

**Multiple choice.** Is “Readings in Database Systems (the “Red Book”)” free?
- Yes ✓
- No
- Only in print

## Reading current research
- id: db24 · type: read · creator: SIGMOD and VLDB proceedings · length: ongoing
- access: free | many papers free

### Introduction
Choose a question from this path and read a recent paper from a major database conference, noting its benchmark and trade-offs.

### Quiz
**Multiple choice.** Which is a major database conference?
- VLDB ✓
- The Olympics
- Eurovision

**Multiple choice.** What should you note in a paper?
- Its benchmark and trade-offs ✓
- Only the title
- Nothing

**Multiple choice.** Which other conference is major?
- SIGMOD ✓
- The Oscars
- Wimbledon

**Multiple choice.** Are many papers free?
- Yes ✓
- No
- None are

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Audit a small app for SQL injection and privacy by design.
2. Which classic database paper still matters most today, and why?
3. Who should own the data in the databases you use?

---

# Final mastery check

Finishing all six stages makes you a capable database practitioner. To earn the **Ascent Mastery: Databases** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **SQL set.** Answer unseen questions on a real dataset with SQL.
3. **Design project.** Design, build and index a database for a real use, with backups and security.
4. **Capstone report.** 2,500 words on one of the Stage 6 questions. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “Why does adding an index make a query faster?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Data science | Stage 2 | The Data science path | Free + paid |
| Algorithms and data structures | Stage 2 | The Algorithms and data structures path | Free + paid |
| Cybersecurity | Stage 4 | The Cybersecurity path | Free + paid |

# Bridges to other subjects

- **Computer science:** systems and algorithms.
- **Data science:** analysis.
- **Business:** information systems.
- **Law:** data protection.
- **Mathematics:** set theory and logic.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by database engineers and computer science educators from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
