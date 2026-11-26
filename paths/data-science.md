---
path: Data science
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Data science

Turning data into understanding and decisions: what data can and can't tell us, programming and databases, cleaning and visualising data, building and testing models, the ethics of data, and data at scale. About 250 to 300 hours over ten to twelve months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Most of the best tools, courses and textbooks for data science are free. You will learn Python and SQL step by step. The path gives as much weight to ethics and honest communication as to technique.

# About data science

Data science combines statistics, programming and knowledge of a subject to learn from data. It covers collecting and cleaning data, exploring and visualising it, building models that predict or explain, testing them honestly, and communicating results, while thinking hard about privacy, bias and who benefits.

This path begins with books on what data reveals and how charts mislead, teaches programming and databases, covers cleaning and visualisation, builds and tests models, examines the ethics of data and algorithms, and ends with data at scale and reproducible science.

**Trivia**
- Florence Nightingale and John Snow were early data scientists, using charts and maps to change public health in the 1850s.
- Most of a data scientist's time is often spent cleaning and preparing data rather than modelling it.
- The term “data science” in its modern sense spread around 2008–2012; *Harvard Business Review* called the data scientist “the sexiest job of the 21st century” in 2012.
- The EU's GDPR, which applied from 2018, gave people new rights over their personal data, including access and erasure.

### Timeline
- **1854 · John Snow's cholera map**
- **1890 · Hollerith's punched cards** speed up the US census.
- **1970 · Codd's relational model** The basis of SQL databases.
- **1977 · Tukey's *Exploratory Data Analysis***
- **1991 · Python** is released.
- **2006 · Hadoop** Big data processing spreads.
- **2010 · Kaggle** data science competitions begin.
- **2018 · The GDPR** applies across the EU.

# What you will be able to do

At the end of this path you will do data science at the level a strong first year of a university data-science course expects. You will be able to:

- **Work with data in code:** Python, SQL, and tidy, reproducible analysis.
- **Explore and visualise:** clean data and make honest, clear charts.
- **Build and evaluate models:** regression, classification and controlled experiments.
- **Communicate:** tell an accurate story with data for non-specialists.
- **Use data ethically:** privacy, bias, consent and accountability.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Data scientists and data-ethics experts from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: What data can reveal, and how it misleads.
gate: Score 70% or more across this stage's quizzes.
covers: data-science, data-visualisation, machine-learning

Data science hooks people through surprising findings. This stage gives you a practical guide to data thinking in business, a book on what internet searches reveal, a mathematician on algorithms that shape our lives, and a guide to how charts mislead.

## Data Science for Business
- id: ds1 · type: read · creator: Foster Provost and Tom Fawcett · year: 2013 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
A clear guide to “data-analytic thinking”: framing business problems as data problems, the main kinds of models, overfitting, and how to evaluate whether a model adds value.

### Quiz
**Multiple choice.** What is “data-analytic thinking”?
- Framing problems so data can help solve them ✓
- Thinking only about computers
- Avoiding data

**Multiple choice.** What is overfitting?
- A model fitting noise and failing on new data ✓
- A model that is too simple
- A full hard drive

**Multiple choice.** What should a model be judged by?
- Whether it adds value on new data ✓
- How complex it is
- Its colour

**Fill in the blank.** *Data Science for Business* was published in ___. [answer: 2013]

## Everybody Lies
- id: ds2 · type: read · creator: Seth Stephens-Davidowitz · year: 2017 · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
A former Google data scientist shows what internet search data reveal about people's real thoughts and behaviour, which they may hide in surveys, and the limits of such data.

### Quiz
**Multiple choice.** What kind of data does the book use?
- Internet search data ✓
- Census forms only
- Weather data

**Multiple choice.** Why might search data reveal more than surveys?
- People may hide their real views in surveys ✓
- Searches are always true
- Surveys are illegal

**Multiple choice.** Where did the author work?
- Google ✓
- NASA
- A hospital

**Fill in the blank.** *Everybody Lies* was published in ___. [answer: 2017]

## Hello World
- id: ds3 · type: read · creator: Hannah Fry · year: 2018 · length: about 7 hours
- access: paid | buy, or borrow from a library

### Introduction
A mathematician examines algorithms that already make decisions in justice, medicine, cars, crime and art, and asks when we should trust them and when humans must stay in control.

### Quiz
**Multiple choice.** What does Fry examine?
- Algorithms that make decisions about us ✓
- Ancient history
- Cooking

**Multiple choice.** Which area does she discuss?
- Justice ✓
- Football tactics only
- Gardening

**Multiple choice.** What question does she ask?
- When should we trust algorithms? ✓
- How to build computers
- Nothing

**Fill in the blank.** *Hello World* was published in ___. [answer: 2018]

## How Charts Lie
- id: ds4 · type: read · creator: Alberto Cairo · year: 2019 · length: about 6 hours
- access: paid | buy, or borrow from a library

### Introduction
A data-visualisation expert shows how charts mislead, through truncated axes, cherry-picked data, wrong scales and missing context, and how to read and make them honestly.

### Quiz
**Multiple choice.** What does Cairo show charts can do?
- Mislead ✓
- Never mislead
- Only show truth

**Multiple choice.** Which trick does he discuss?
- Truncated axes ✓
- Using colour
- Adding titles

**Multiple choice.** What does he teach readers to do?
- Read and make charts honestly ✓
- Avoid all charts
- Trust every chart

**Fill in the blank.** *How Charts Lie* was published in ___. [answer: 2019]

---

# Stage 2: Tools: Python and Databases
level: Explorer
intent: Programming, SQL and data libraries.
gate: Score 70% or more across this stage's quizzes.
covers: data-science, data-mining, computer-science

This stage teaches the tools: a free beginner Python course, free SQL lessons, a free handbook of Python data libraries, and free short courses with real data sets.

## Python for Everybody
- id: ds5 · type: course · creator: Charles Severance (University of Michigan) · year: 2016 onwards · length: about 40 hours
- access: free | free online and as a free book

### Introduction
A famous free course teaching Python from scratch: variables, loops, functions, files, lists and dictionaries, and working with web data and databases.

### Quiz
**Multiple choice.** What does the course teach?
- Python from scratch ✓
- Only Java
- Only spreadsheets

**Multiple choice.** What is a loop?
- Code that repeats instructions ✓
- A kind of chart
- A database

**Multiple choice.** What is a dictionary in Python?
- A collection of key–value pairs ✓
- A book of words only
- A function

**Multiple choice.** Is the course free?
- Yes ✓
- No
- Only for students

## SQLBolt
- id: ds6 · type: course · creator: SQLBolt · length: about 6 hours
- access: free | free online

### Introduction
Free interactive lessons in SQL, the language for asking questions of databases: selecting, filtering, sorting, joining tables and summarising data.

### Quiz
**Multiple choice.** What is SQL used for?
- Querying and managing databases ✓
- Drawing pictures
- Writing novels

**Multiple choice.** What does a JOIN do?
- Combines rows from two tables ✓
- Deletes a table
- Draws a chart

**Multiple choice.** Which keyword filters rows in SQL?
- WHERE ✓
- DRAW
- PRINT

**Multiple choice.** Are the lessons free?
- Yes ✓
- No
- Only for companies

## Python Data Science Handbook
- id: ds7 · type: read · creator: Jake VanderPlas · year: 2016 (2nd edition 2022) · length: about 20 hours
- access: free | free online

### Introduction
A free handbook on the core Python libraries for data science: NumPy for arrays, pandas for data tables, Matplotlib for charts and scikit-learn for machine learning.

### Quiz
**Multiple choice.** What is pandas used for?
- Working with data tables ✓
- Drawing only
- Sending email

**Multiple choice.** What is NumPy?
- A library for fast numerical arrays ✓
- A database
- A spreadsheet

**Multiple choice.** Which library makes charts?
- Matplotlib ✓
- pandas only
- SQL

**Multiple choice.** Is the handbook free?
- Yes, online ✓
- No
- Only in print

## Kaggle Learn
- id: ds8 · type: course · creator: Kaggle · year: 2018 onwards · length: about 20 hours
- access: free | free online

### Introduction
Short free courses with exercises on Python, pandas, data visualisation, intro machine learning and SQL, using real data sets in the browser.

### Quiz
**Multiple choice.** What does Kaggle Learn offer?
- Short free courses with exercises ✓
- Paid degrees
- Nothing

**Multiple choice.** Where do you run the code?
- In the browser ✓
- Only on paper
- Only on a phone

**Multiple choice.** What does Kaggle also host?
- Data science competitions and data sets ✓
- Cooking shows
- Football matches

**Multiple choice.** Are the courses free?
- Yes ✓
- No
- Only for professionals

---

# Stage 3: Cleaning and Visualising Data
level: Reader
intent: Tidy data, honest charts and clear stories.
gate: Score 70% or more across this stage's quizzes.
covers: data-visualisation, data-science, statistics-and-probability

This stage covers the work most projects actually need: tidying data, telling clear stories with charts, the principles of good visualisation, and a free guide to choosing the right chart.

## Tidy Data
- id: ds9 · type: read · creator: Hadley Wickham · year: 2014 · length: about 2 hours
- access: free | free in the *Journal of Statistical Software*

### Introduction
A short, influential paper defining tidy data: each variable a column, each observation a row, each type of observational unit a table, and showing how this makes analysis easier.

### Quiz
**Multiple choice.** In tidy data, what is each column?
- A variable ✓
- An observation
- A table

**Multiple choice.** In tidy data, what is each row?
- An observation ✓
- A variable
- A chart

**Multiple choice.** Why does tidy data help?
- It makes analysis and tools work consistently ✓
- It looks prettier
- It isn't useful

**Fill in the blank.** *Tidy Data* was published in ___. [answer: 2014]

## Storytelling with Data
- id: ds10 · type: read · creator: Cole Nussbaumer Knaflic · year: 2015 · length: about 6 hours
- access: paid | buy, or borrow from a library

### Introduction
A practical guide to communicating with data: understanding the audience, choosing the right chart, removing clutter, focusing attention, and telling a story.

### Quiz
**Multiple choice.** What should you understand first?
- Your audience ✓
- Your software
- Your colours

**Multiple choice.** What should you remove from charts?
- Clutter ✓
- Data
- Titles

**Multiple choice.** What does the book teach?
- Communicating clearly with data ✓
- Programming
- Statistics proofs

**Fill in the blank.** *Storytelling with Data* was published in ___. [answer: 2015]

## Fundamentals of Data Visualization
- id: ds11 · type: read · creator: Claus O. Wilke · year: 2019 · length: about 10 hours
- access: free | free online

### Introduction
A free guide to making informative and honest figures: visualising amounts, distributions, proportions and relationships, using colour well, and avoiding common mistakes.

### Quiz
**Multiple choice.** What should bar charts start at?
- Zero ✓
- Any number
- One hundred

**Multiple choice.** Why use colour carefully?
- Some readers are colour-blind and colour can mislead ✓
- Colour is always bad
- It doesn't matter

**Multiple choice.** Which chart shows a distribution well?
- A histogram ✓
- A pie chart of one value
- A table of names

**Multiple choice.** Is the book free online?
- Yes ✓
- No
- Only for students

## Visual Vocabulary
- id: ds12 · type: read · creator: Financial Times graphics team · year: 2016 onwards · length: about 1 hour
- access: free | free online

### Introduction
A free poster and guide for choosing the right chart for what you want to show: change over time, ranking, distribution, part-to-whole, correlation and more.

### Quiz
**Multiple choice.** What does the Visual Vocabulary help you choose?
- The right chart for what you want to show ✓
- A font
- A data set

**Multiple choice.** Which chart suits change over time?
- A line chart ✓
- A pie chart
- A word cloud

**Multiple choice.** Which newspaper's team made it?
- The Financial Times ✓
- A football club
- A school

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for subscribers

---

# Stage 4: Models and Experiments
level: Connoisseur
intent: Machine learning in practice, and testing honestly.
gate: Score 70% or more across this stage's quizzes.
covers: machine-learning, data-science, statistical-learning

This stage builds models: a hands-on machine-learning book, the free scikit-learn guide, building methods from scratch to understand them, and running trustworthy experiments.

## Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow
- id: ds13 · type: read · creator: Aurélien Géron · year: 2017 (3rd edition 2022) · length: about 30 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
A practical guide to building machine-learning systems: an end-to-end project, classification, training models, decision trees and ensembles, and an introduction to neural networks.

### Quiz
**Multiple choice.** What does the first project show?
- An end-to-end machine-learning project ✓
- Only theory
- Cooking

**Multiple choice.** What is classification?
- Predicting which category something belongs to ✓
- Sorting books by colour
- Drawing charts

**Multiple choice.** What is an ensemble?
- Combining several models to predict better ✓
- A music group
- A data table

**Multiple choice.** Who wrote the book?
- Aurélien Géron ✓
- Hadley Wickham
- Hannah Fry

## scikit-learn User Guide
- id: ds14 · type: read · creator: scikit-learn developers · year: ongoing · length: about 15 hours for selected sections
- access: free | free online

### Introduction
The free guide to Python's main machine-learning library: preprocessing, model selection with cross-validation, and common algorithms, with runnable examples.

### Quiz
**Multiple choice.** What is cross-validation for?
- Estimating how well a model will work on new data ✓
- Checking spelling
- Speeding up code

**Multiple choice.** Which language is scikit-learn for?
- Python ✓
- French
- HTML

**Multiple choice.** What is preprocessing?
- Preparing data before modelling ✓
- Printing results
- Deleting data

**Multiple choice.** Is the guide free?
- Yes ✓
- No
- Only for companies

## Data Science from Scratch
- id: ds15 · type: read · creator: Joel Grus · year: 2015 (2nd edition 2019) · length: about 15 hours
- access: paid | buy, or borrow from a library

### Introduction
Builds core data-science methods, statistics, gradient descent, regression, k-nearest neighbours, decision trees and simple neural networks, from scratch in Python, so you understand what libraries do.

### Quiz
**Multiple choice.** Why build methods from scratch?
- To understand what libraries do ✓
- Because libraries are banned
- It's faster

**Multiple choice.** What is k-nearest neighbours?
- Classifying a point by the classes of its closest examples ✓
- A social network
- A street map

**Multiple choice.** Which method does Grus build?
- Linear regression ✓
- A spreadsheet
- A web browser

**Fill in the blank.** *Data Science from Scratch* was first published in ___. [answer: 2015]

## Trustworthy Online Controlled Experiments
- id: ds16 · type: read · creator: Ron Kohavi, Diane Tang and Ya Xu · year: 2020 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
How large tech companies run A/B tests, randomised experiments comparing two versions of a product, and the many ways experiments go wrong without careful design.

### Quiz
**Multiple choice.** What is an A/B test?
- A randomised experiment comparing two versions ✓
- A school exam
- A blood test

**Multiple choice.** Why randomise who sees each version?
- To make the groups comparable ✓
- To save money
- It doesn't matter

**Multiple choice.** What does the book warn about?
- Many ways experiments go wrong ✓
- Nothing
- Too much data only

**Fill in the blank.** *Trustworthy Online Controlled Experiments* was published in ___. [answer: 2020]

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Build a model on a public data set and report honestly how well it works. Use Géron and scikit-learn.
2. When is an experiment better than mining existing data? Use Kohavi, Tang and Xu.
3. Explain gradient descent to a friend. Use Grus.

---

# Stage 5: Data, Power and Ethics
level: Specialist
intent: Who counts, who's harmed, and the law.
gate: Score 70% or more across this stage's quizzes.
covers: responsible-data-science, data-science, privacy-and-data-rights

This stage examines data's power: a feminist approach to data science, how automated systems punish the poor, Europe's data protection law, and how technology can encode racism.

## Data Feminism
- id: ds17 · type: read · creator: Catherine D'Ignazio and Lauren F. Klein · year: 2020 · length: about 9 hours
- access: free | free open-access edition from MIT Press

### Introduction
Two scholars show how power shapes data: who collects it, who is counted and who is missing, and offer principles for more just data science, such as examining power and making labour visible.

### Quiz
**Multiple choice.** What do the authors examine?
- How power shapes data ✓
- Only programming
- Fashion

**Multiple choice.** Which question do they ask?
- Who is counted and who is missing? ✓
- How fast is the computer?
- Which colour is best?

**Multiple choice.** Is the book free?
- Yes, open access ✓
- No
- Only in print

**Fill in the blank.** *Data Feminism* was published in ___. [answer: 2020]

## Automating Inequality
- id: ds18 · type: read · creator: Virginia Eubanks · year: 2018 · length: about 9 hours
- access: paid | buy, or borrow from a library

### Introduction
A political scientist shows how automated systems for welfare, homelessness services and child protection in the US can profile, police and punish poor people, building a “digital poorhouse”.

### Quiz
**Multiple choice.** What does Eubanks call these systems?
- A digital poorhouse ✓
- A smart city
- A safety net

**Multiple choice.** Whom do they often harm?
- Poor people ✓
- Nobody
- Only the rich

**Multiple choice.** Which services does she study?
- Welfare and child protection ✓
- Sport
- Tourism

**Fill in the blank.** *Automating Inequality* was published in ___. [answer: 2018]

## General Data Protection Regulation (GDPR)
- id: ds19 · type: read · creator: European Union · year: 2016 (applied from 2018) · length: about 3 hours for key articles
- access: free | free online

### Introduction
The EU's data-protection law, influential worldwide: lawful bases for processing, consent, rights of access and erasure, data minimisation, and large fines for breaches.

### Quiz
**Multiple choice.** What does the GDPR protect?
- Personal data ✓
- Copyright
- Trade secrets only

**Multiple choice.** Which right does it give people?
- The right to erasure ✓
- The right to free phones
- None

**Multiple choice.** What is data minimisation?
- Collecting only the data needed ✓
- Collecting everything
- Deleting all data

**Fill in the blank.** The GDPR applied from ___. [answer: 2018]

## Race After Technology
- id: ds20 · type: read · creator: Ruha Benjamin · year: 2019 · length: about 6 hours
- access: paid | buy, or borrow from a library

### Introduction
A sociologist argues that seemingly neutral technologies can encode and deepen racial discrimination, the “New Jim Code”, and calls for design that confronts it.

### Quiz
**Multiple choice.** What does Benjamin call technology that encodes discrimination?
- The “New Jim Code” ✓
- Smart design
- Clean code

**Multiple choice.** What does she argue about “neutral” technology?
- It can encode and deepen discrimination ✓
- It is always fair
- It doesn't exist

**Multiple choice.** What is Benjamin's field?
- Sociology ✓
- Physics
- Accounting

**Fill in the blank.** *Race After Technology* was published in ___. [answer: 2019]

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Who is missing from a data set you use? Use D'Ignazio and Klein.
2. Should governments use algorithms to allocate welfare? Use Eubanks and the GDPR.
3. Audit a data project for fairness and privacy, and propose changes.

---

# Stage 6: Data at Scale
level: Expert
intent: Big data systems, reproducible science, data for development, and research.
gate: Score 70% or more across this stage's quizzes.
covers: data-science, data-mining, machine-learning

The final stage looks at data at scale: how big data systems work, how to make analysis reproducible, how data can improve lives in development, and how to follow research and competitions.

## Designing Data-Intensive Applications
- id: ds21 · type: read · creator: Martin Kleppmann · year: 2017 · length: about 20 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
The standard guide to how large data systems work: storage, replication, partitioning, transactions, and batch and stream processing, and their trade-offs.

### Quiz
**Multiple choice.** What does the book explain?
- How large data systems work ✓
- How to draw charts
- Statistics only

**Multiple choice.** What is replication?
- Keeping copies of data on several machines ✓
- Deleting data
- Encrypting data

**Multiple choice.** What is stream processing?
- Handling data continuously as it arrives ✓
- Watching videos
- Printing data

**Fill in the blank.** *Designing Data-Intensive Applications* was published in ___. [answer: 2017]

## The Turing Way
- id: ds22 · type: read · creator: The Turing Way community (Alan Turing Institute) · year: 2019 onwards · length: about 6 hours
- access: free | free online

### Introduction
A free, community-written handbook on reproducible, ethical and collaborative data science: version control, documentation, sharing code and data, and open research.

### Quiz
**Multiple choice.** What does the handbook focus on?
- Reproducible, ethical and collaborative data science ✓
- Cooking
- Sport

**Multiple choice.** What is reproducibility?
- Others can repeat your analysis and get the same results ✓
- Copying homework
- Printing twice

**Multiple choice.** Which tool tracks changes to code?
- Version control (for example, Git) ✓
- A calculator
- Email

**Multiple choice.** Is The Turing Way free?
- Yes ✓
- No
- Only for researchers

## World Development Report 2021: Data for Better Lives
- id: ds23 · type: read · creator: World Bank · year: 2021 · length: about 4 hours for the overview
- access: free | free on the World Bank website

### Introduction
How data can improve the lives of poor people, through better policies and services, and the risks of misuse, with proposals for a social contract for data.

### Quiz
**Multiple choice.** What does the report examine?
- How data can improve the lives of poor people ✓
- Football data
- Space travel

**Multiple choice.** What does it also warn about?
- The risks of misuse ✓
- Nothing
- Too little coffee

**Multiple choice.** What does it propose?
- A social contract for data ✓
- Banning all data
- Selling all data

**Multiple choice.** Who published it?
- The World Bank ✓
- A tech company
- A newspaper

## Reading current research and practice
- id: ds24 · type: read · creator: arXiv, Kaggle competitions and data-science blogs · length: ongoing
- access: free | arXiv and Kaggle are free

### Introduction
Choose a question from this path and find three recent pieces: a research paper, a Kaggle competition or notebook, and a project using data from a country other than your own. Note how each validates its results.

### Quiz
**Multiple choice.** Why check how a project validates its results?
- Without validation, results may not hold on new data ✓
- It doesn't matter
- To count pages

**Multiple choice.** What is a Kaggle notebook?
- Shared code and analysis on a data set ✓
- A paper diary
- A laptop

**Multiple choice.** Why use data from another country?
- Data and contexts differ widely ✓
- To make it longer
- It isn't needed

**Multiple choice.** What makes a data-science claim stronger?
- Testing on held-out data and replication ✓
- A complex model alone
- A famous name alone

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Can data reduce poverty without harming privacy? Use the World Development Report and the GDPR.
2. Make one of your analyses fully reproducible and explain how. Use The Turing Way.
3. Complete a full data project, from question to communication, and write it up.

---

# Final mastery check

Finishing all six stages makes you a capable data scientist. To earn the **Ascent Mastery: Data science** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Project.** A full data project: question, data cleaning, analysis, model, and a short report with charts.
3. **Critique.** Judge an unseen data story or dashboard for honesty and quality.
4. **Capstone essay.** 2,500 words on one of the Stage 6 questions. Strong essays are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a curious friend. For example: “What does a data scientist actually do all day?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Statistics | Stage 3 | The Statistics path | Free + paid |
| Artificial intelligence | Stage 4 | The Artificial intelligence path | Free + paid |
| Computer science | Stage 2 | The Computer science path | Free + paid |

# Bridges to other subjects

- **Statistics:** inference and uncertainty.
- **Computer science:** programming and systems.
- **Mathematics:** linear algebra and calculus.
- **Ethics:** fairness and privacy.
- **Journalism:** data journalism.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by data scientists and data-ethics experts from more than one country
- [ ] Every free tool's availability checked
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
