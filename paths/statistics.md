---
path: Statistics
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Statistics

How to learn from data: describing it, reasoning with probability, testing claims, finding causes, and spotting when numbers mislead. About 250 to 300 hours over ten to twelve months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Several of the best textbooks and courses are free. You need school algebra; the path introduces everything else, and later stages use free software (R or Python).

# About statistics

Statistics is the science of learning from data in the face of uncertainty. It describes what data show, uses probability to judge how surprising a result is, estimates how sure we can be, and asks whether a link is a cause. It underpins medicine, polling, economics, science and machine learning.

This path begins with books that show why statistics matters and how it can mislead, teaches how to describe and picture data, builds probability, covers inference and causation, introduces modern methods including Bayesian statistics and machine learning, and ends with the replication crisis and the ethics of algorithms.

**Trivia**
- Florence Nightingale used her “rose diagrams” in the 1850s to show that most soldiers in the Crimean War died of preventable disease, not wounds.
- In a room of just 23 people, there is a better than even chance that two share a birthday.
- The “Student” of Student's t-test was William Sealy Gosset, who worked for the Guinness brewery in Dublin and published under a pen name.
- In 1936 the *Literary Digest* poll of over two million people wrongly predicted the US election, while a much smaller, better-chosen sample got it right.

### Timeline
- **1654 · Pascal and Fermat** Letters on games of chance found probability theory.
- **1763 · Bayes's essay** published after his death.
- **1805–09 · Least squares** Legendre and Gauss fit lines to data.
- **1858 · Nightingale's diagrams**
- **1908 · Student's t-test**
- **1925 · Fisher's *Statistical Methods for Research Workers***
- **1948 · The first modern randomised controlled trial** of streptomycin for tuberculosis.
- **1990s–2000s · Computers** make Bayesian methods practical.
- **2005 · Ioannidis** “Why most published research findings are false”.
- **2016 · The ASA statement on p-values**

# What you will be able to do

At the end of this path you will know statistics the way a strong first year of a university statistics course expects. You will be able to:

- **Describe and picture data:** averages, spread, distributions and honest charts.
- **Reason with probability:** including conditional probability and why intuition fails.
- **Draw inferences:** confidence intervals, tests, p-values, and their limits.
- **Think about causes:** experiments, confounding and causal diagrams.
- **Spot misuse:** bad samples, misleading charts, p-hacking and biased algorithms.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Statisticians and statistics teachers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Why statistics matters, and how numbers can mislead.
gate: Score 70% or more across this stage's quizzes.
covers: statistics-and-probability, data-visualisation, statistical-inference

Statistics hooks people when it changes how they see the news. This stage gives you a leading statistician's introduction, a classic on how numbers mislead, a data-driven view of the world, and a book on prediction.

## The Art of Statistics
- id: st1 · type: read · creator: David Spiegelhalter · year: 2019 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
A leading statistician teaches statistics through real questions: was a doctor a murderer, how many trees are there, does bacon cause cancer. He shows how to turn data into understanding, and where it goes wrong.

### Quiz
**Multiple choice.** How does Spiegelhalter teach statistics?
- Through real questions and data ✓
- Through formulas only
- Through fiction

**Multiple choice.** What does a statement like “bacon raises your risk by 18%” usually describe?
- A relative risk, which may be a small absolute change ✓
- A certain death
- A price rise

**Multiple choice.** Why is the difference between relative and absolute risk important?
- A big relative rise can be a tiny real change ✓
- They are the same
- Absolute risk doesn't exist

**Fill in the blank.** *The Art of Statistics* was published in ___. [answer: 2019]

## How to Lie with Statistics
- id: st2 · type: read · creator: Darrell Huff · year: 1954 · length: about 3 hours
- access: paid | buy, or borrow from a library

### Introduction
A short, funny classic on the tricks that make numbers mislead: biased samples, chosen averages, truncated graph axes, and the “semi-attached figure”. Read it to defend yourself.

### Quiz
**Multiple choice.** What does a graph with a cut-off vertical axis often do?
- Exaggerates small differences ✓
- Shows the truth more clearly
- Nothing

**Multiple choice.** Why can an average mislead?
- Mean and median can differ a lot, and the writer picks one ✓
- Averages are always wrong
- There is only one kind

**Multiple choice.** What is a biased sample?
- One that doesn't represent the population ✓
- A very large sample
- A random sample

**Fill in the blank.** *How to Lie with Statistics* was published in ___. [answer: 1954]

## Factfulness
- id: st3 · type: read · creator: Hans Rosling with Ola Rosling and Anna Rosling Rönnlund · year: 2018 · length: about 9 hours
- access: paid | buy, or borrow from a library

### Introduction
A doctor and statistician shows that most people, including experts, have a more negative picture of the world than the data support, and explains ten instincts that distort how we read numbers.

### Quiz
**Multiple choice.** What does Rosling find about most people's view of the world?
- It is more negative than the data support ✓
- It is perfectly accurate
- It is too optimistic

**Multiple choice.** What does the book explain?
- Instincts that distort how we read numbers ✓
- How to cook
- How to win elections

**Multiple choice.** What foundation did the Roslings create?
- Gapminder ✓
- Wikipedia
- Greenpeace

**Fill in the blank.** *Factfulness* was published in ___. [answer: 2018]

## The Signal and the Noise
- id: st4 · type: read · creator: Nate Silver · year: 2012 · length: about 14 hours
- access: paid | buy, or borrow from a library

### Introduction
A forecaster examines prediction in weather, elections, earthquakes, economics and poker, and argues for thinking in probabilities and updating beliefs as evidence arrives.

### Quiz
**Multiple choice.** What does Silver argue forecasters should think in?
- Probabilities ✓
- Certainties
- Horoscopes

**Multiple choice.** Which field has improved its forecasts most, in Silver's account?
- Weather forecasting ✓
- Earthquake prediction
- Stock tipping

**Multiple choice.** What should you do when new evidence arrives?
- Update your beliefs ✓
- Ignore it
- Start again from nothing

**Fill in the blank.** *The Signal and the Noise* was published in ___. [answer: 2012]

---

# Stage 2: Describing and Picturing Data
level: Explorer
intent: Averages, spread, distributions and honest graphs.
gate: Score 70% or more across this stage's quizzes.
covers: statistics-and-probability, data-visualisation, survey-statistics

This stage builds the basics: a free textbook, free lessons and practice, the classic on honest charts, and interactive data on the whole world.

## OpenIntro Statistics
- id: st5 · type: read · creator: David Diez, Mine Çetinkaya-Rundel and Christopher Barr · year: 4th edition 2019 · length: about 30 hours for selected chapters
- access: free | free PDF from OpenIntro

### Introduction
A free university textbook. Read the chapters on data, summary statistics, distributions and the normal distribution, and do the exercises.

### Quiz
**Multiple choice.** What is the median?
- The middle value when data are in order ✓
- The most common value
- The largest value

**Multiple choice.** What does the standard deviation measure?
- How spread out data are around the mean ✓
- The largest value
- The number of values

**Multiple choice.** What is the normal distribution?
- A symmetric, bell-shaped distribution ✓
- A flat line
- Any distribution

**Fill in the blank.** The mean of 2, 4 and 9 is ___. [answer: 5]

## Statistics and probability
- id: st6 · type: course · creator: Khan Academy · length: about 25 hours for selected units
- access: free | free online

### Introduction
Free lessons and practice on displaying data, summarising it, probability and the basics of inference. Use the practice exercises to check that you can do the calculations yourself.

### Quiz
**Multiple choice.** What is an outlier?
- A value far from the others ✓
- The average
- A missing value

**Multiple choice.** In a box plot, what does the box show?
- The middle half of the data ✓
- All the data
- Only the mean

**Multiple choice.** What is a histogram?
- A bar chart of how often values fall in ranges ✓
- A history book
- A pie chart

**Fill in the blank.** The range of 3, 8 and 15 is ___. [answer: 12]

## The Visual Display of Quantitative Information
- id: st7 · type: read · creator: Edward Tufte · year: 1983 (2nd edition 2001) · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
A beautiful classic on how to show data clearly and honestly. Tufte praises Minard's map of Napoleon's march on Moscow, warns against “chartjunk”, and urges maximising the share of ink that shows data.

### Quiz
**Multiple choice.** What is “chartjunk”?
- Decoration in a chart that doesn't show data ✓
- A broken printer
- A kind of map

**Multiple choice.** Which famous graphic does Tufte praise?
- Minard's map of Napoleon's march on Moscow ✓
- A pie chart of pizza
- A company logo

**Multiple choice.** What does Tufte urge chart makers to maximise?
- The share of ink that shows data ✓
- The number of colours
- The size of the title

**Fill in the blank.** The book was first published in ___. [answer: 1983]

## Gapminder tools and Our World in Data
- id: st8 · type: read · creator: Gapminder Foundation; Our World in Data · length: about 4 hours of exploring
- access: free | both are free online

### Introduction
Interactive charts of income, health, population and much more for every country over time. Pick three countries on different continents and describe how they changed since 1960.

### Quiz
**Multiple choice.** What do these tools let you explore?
- Data on countries over time ✓
- Video games
- Maps of the Moon

**Multiple choice.** Why use a log scale for income?
- Incomes vary enormously, so a log scale shows them all clearly ✓
- It looks nicer
- It hides the poor

**Multiple choice.** What is a time series?
- Data recorded over time ✓
- A TV series
- A list of names

**Multiple choice.** Why compare countries on different continents?
- To avoid generalising from one region ✓
- It is required by law
- It isn't useful

---

# Stage 3: Probability
level: Reader
intent: The mathematics of chance, and why our intuition fails.
gate: Score 70% or more across this stage's quizzes.
covers: probability-theory, statistics-and-probability, bayesian-statistics

This stage builds probability: a free Harvard course and textbook, a lively book on randomness, a Nobel psychologist on our biases, and visual explanations.

## Introduction to Probability (Stat 110)
- id: st9 · type: course · creator: Joseph K. Blitzstein and Jessica Hwang · year: 2014 (2nd edition 2019) · length: about 40 hours for selected lectures and chapters
- access: free | the lectures and the book are free online

### Introduction
Harvard's famous probability course and its textbook, both free. Work through the lectures on counting, conditional probability, Bayes's rule, random variables and expectation.

### Quiz
**Multiple choice.** What is conditional probability?
- The probability of something given that something else happened ✓
- A probability that changes daily
- A guess

**Multiple choice.** What does Bayes's rule do?
- Updates a probability in the light of new evidence ✓
- Adds probabilities
- Removes uncertainty

**Multiple choice.** What is the expected value?
- The long-run average of a random quantity ✓
- The most likely value
- The largest value

**Fill in the blank.** As a decimal, the probability of two heads in two tosses of a fair coin is ___. [answer: 0.25]

## The Drunkard's Walk
- id: st10 · type: read · creator: Leonard Mlodinow · year: 2008 · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
A physicist shows how randomness rules our lives far more than we think, from sports streaks to wine ratings and business success, and why the human mind is bad at recognising chance.

### Quiz
**Multiple choice.** What does Mlodinow say about randomness in our lives?
- It plays a bigger role than we think ✓
- It doesn't exist
- It can always be predicted

**Multiple choice.** What is the gambler's fallacy?
- Believing past random results change future odds ✓
- Always winning
- A card game

**Multiple choice.** Why do we see patterns in random data?
- Our minds look for patterns even in chance ✓
- Random data always has patterns
- We never do

**Fill in the blank.** *The Drunkard's Walk* was published in ___. [answer: 2008]

## Thinking, Fast and Slow
- id: st11 · type: read · creator: Daniel Kahneman · year: 2011 · length: about 20 hours for selected parts
- access: paid | buy, or borrow from a library

### Introduction
A Nobel-winning psychologist explains the mental shortcuts that make us misjudge probability: ignoring base rates, judging by representativeness, and overconfidence. Read the parts on heuristics and biases.

### Quiz
**Multiple choice.** What is base-rate neglect?
- Ignoring how common something is in general ✓
- Forgetting your bank balance
- Counting too slowly

**Multiple choice.** Which prize did Kahneman win?
- The Nobel Prize in Economics ✓
- The Fields Medal
- An Oscar

**Multiple choice.** What are heuristics?
- Mental shortcuts ✓
- Mathematical proofs
- Computer programs

**Multiple choice.** Some studies in the book have failed to replicate. What should a reader do?
- Treat those findings with care ✓
- Ignore the whole book
- Trust everything

## Seeing Theory
- id: st12 · type: read · creator: Daniel Kunin and others, Brown University · length: about 3 hours
- access: free | free online

### Introduction
Beautiful interactive visual explanations of probability and statistics: chance events, distributions, the central limit theorem and regression. Play with each one until the idea clicks.

### Quiz
**Multiple choice.** What does the central limit theorem say?
- Averages of many samples tend towards a normal distribution ✓
- All data are normal
- Samples never vary

**Multiple choice.** What happens to the average of coin tosses as you toss more?
- It gets closer to the true probability ✓
- It moves further away
- It stays at zero

**Multiple choice.** What is regression?
- Fitting a line or curve to describe how variables relate ✓
- Going backwards
- A kind of chart only

**Multiple choice.** Who made Seeing Theory?
- A team at Brown University ✓
- NASA
- A bank

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Why are people so bad at probability? Use Kahneman, Mlodinow and one example from the news.
2. Explain Bayes's rule with a medical test example. Use Blitzstein and Hwang, and Spiegelhalter.
3. Simulate a coin or dice experiment and show the law of large numbers at work.

---

# Stage 4: Inference and Causation
level: Connoisseur
intent: Confidence, tests, p-values, and finding causes.
gate: Score 70% or more across this stage's quizzes.
covers: statistical-inference, biostatistics, statistics-and-probability

This stage teaches how to draw conclusions from samples: a classic textbook, the history of the methods, the American Statistical Association's warning about p-values, and the new science of cause and effect.

## Statistics
- id: st13 · type: read · creator: David Freedman, Robert Pisani and Roger Purves · year: 4th edition 2007 · length: about 30 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
A famously clear textbook that teaches ideas before formulas: sampling, chance errors, confidence intervals, significance tests, and the difference between observational studies and experiments.

### Quiz
**Multiple choice.** What is a confidence interval?
- A range that, by a method that works most of the time, captures the true value ✓
- A guaranteed range
- A range of opinions

**Multiple choice.** Why are randomised experiments powerful?
- Randomisation balances hidden differences between groups ✓
- They are cheaper
- They need no data

**Multiple choice.** What is a confounder?
- A third factor that affects both the cause and the effect ✓
- A calculator
- A kind of chart

**Multiple choice.** What is sampling error?
- The difference between a sample result and the population value due to chance ✓
- A typing mistake
- A broken scale

## The Lady Tasting Tea
- id: st14 · type: read · creator: David Salsburg · year: 2001 · length: about 10 hours
- access: paid | buy, or borrow from a library

### Introduction
A history of how statistics changed science in the twentieth century, told through people such as Ronald Fisher, Karl Pearson, Jerzy Neyman and the brewer “Student”. The title comes from Fisher's famous experiment design.

### Quiz
**Multiple choice.** What does the title refer to?
- Fisher's design for testing a claim to taste how tea was made ✓
- A tea company
- A novel

**Multiple choice.** Who was “Student”?
- William Sealy Gosset, a brewer at Guinness ✓
- Ronald Fisher
- A university student

**Multiple choice.** What does the book tell the history of?
- How statistics changed twentieth-century science ✓
- The tea trade
- The British Empire

**Fill in the blank.** *The Lady Tasting Tea* was published in ___. [answer: 2001]

## The ASA Statement on p-Values
- id: st15 · type: read · creator: American Statistical Association (Ronald Wasserstein and Nicole Lazar) · year: 2016 · length: about 1 hour
- access: free | free online

### Introduction
A short statement setting out six principles about p-values, which are widely misused. Among them: a p-value does not measure the probability that a hypothesis is true, and scientific conclusions should not rest only on whether p is below 0.05.

### Quiz
**Multiple choice.** What does a p-value measure?
- How surprising the data would be if the null hypothesis were true ✓
- The probability the hypothesis is true
- The size of an effect

**Multiple choice.** Should conclusions rest only on p < 0.05?
- No ✓
- Yes, always
- Only in physics

**Multiple choice.** Who issued the statement?
- The American Statistical Association ✓
- A drug company
- The United Nations

**Fill in the blank.** The statement was published in ___. [answer: 2016]

## The Book of Why
- id: st16 · type: read · creator: Judea Pearl and Dana Mackenzie · year: 2018 · length: about 13 hours
- access: paid | buy, or borrow from a library

### Introduction
A Turing Award winner explains the new science of causal inference: drawing diagrams of causes, the “ladder of causation” from seeing to doing to imagining, and how to tell when data can answer a causal question.

### Quiz
**Multiple choice.** What is the “ladder of causation”?
- Seeing, doing and imagining ✓
- Reading, writing and counting
- Small, medium and large

**Multiple choice.** What do causal diagrams show?
- Which variables cause which ✓
- Pie charts
- Maps

**Multiple choice.** Which award did Pearl win?
- The Turing Award ✓
- The Nobel Prize in Literature
- An Oscar

**Fill in the blank.** *The Book of Why* was published in ___. [answer: 2018]

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Does correlation ever show causation? Use Freedman, Pisani and Purves, and Pearl.
2. Should science abandon p-values? Use the ASA statement and one argument for and one against.
3. Find a news story claiming a cause, and judge the evidence behind it.

---

# Stage 5: Modern Methods
level: Specialist
intent: Bayesian statistics, causal methods in economics, machine learning and code.
gate: Score 70% or more across this stage's quizzes.
covers: bayesian-statistics, econometrics, statistical-learning

This stage introduces the modern toolkit: Bayesian modelling, the methods economists use to find causes, statistical learning, and doing data analysis in code. All but one are free.

## Statistical Rethinking
- id: st17 · type: read · creator: Richard McElreath · year: 2016 (2nd edition 2020) · length: about 40 hours with the free lectures
- access: free-and-paid | the lectures are free online; the book is paid

### Introduction
A friendly, deep course in Bayesian statistics: building models, priors and posteriors, simulation, and causal thinking, with code. The free recorded lectures follow the book.

### Quiz
**Multiple choice.** What does Bayesian statistics combine?
- Prior beliefs with data to get updated beliefs ✓
- Only data
- Only opinions

**Multiple choice.** What is a posterior?
- The updated probability after seeing data ✓
- A kind of chart
- The last chapter

**Multiple choice.** What is a prior?
- What you believed before seeing the data ✓
- The first data point
- A mistake

**Multiple choice.** Why does McElreath stress simulation?
- Simulating data shows what a model really implies ✓
- It is faster than thinking
- It removes the need for data

## Mostly Harmless Econometrics
- id: st18 · type: read · creator: Joshua D. Angrist and Jörn-Steffen Pischke · year: 2009 · length: about 20 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
Two economists, one of whom later shared a Nobel Prize, explain methods for finding causes when experiments are impossible: regression, instrumental variables, differences-in-differences and regression discontinuity.

### Quiz
**Multiple choice.** What problem do these methods address?
- Finding causes when experiments are impossible ✓
- Drawing nicer charts
- Storing data

**Multiple choice.** What is a natural experiment?
- A situation where chance or rules create comparable groups ✓
- An experiment in a forest
- A lab test

**Multiple choice.** What does differences-in-differences compare?
- Changes over time in a treated group and a comparison group ✓
- Two numbers only
- Two charts

**Multiple choice.** Which Nobel Prize did Angrist share?
- Economics ✓
- Physics
- Peace

## An Introduction to Statistical Learning
- id: st19 · type: read · creator: Gareth James, Daniela Witten, Trevor Hastie and Robert Tibshirani · year: 2013 (2nd edition 2021) · length: about 30 hours for selected chapters
- access: free | free PDF from the authors

### Introduction
The standard introduction to statistical learning, the statistics behind machine learning: regression, classification, resampling, trees and more, with code labs.

### Quiz
**Multiple choice.** What is overfitting?
- A model fitting noise in the training data and predicting badly on new data ✓
- A model too simple
- A full computer

**Multiple choice.** What is cross-validation for?
- Estimating how well a model will predict new data ✓
- Checking spelling
- Drawing maps

**Multiple choice.** What is classification?
- Predicting which category something belongs to ✓
- Sorting files by size
- Measuring temperature

**Multiple choice.** Is the book free?
- Yes, as a PDF from the authors ✓
- No
- Only in libraries

## R for Data Science
- id: st20 · type: read · creator: Hadley Wickham, Mine Çetinkaya-Rundel and Garrett Grolemund · year: 2017 (2nd edition 2023) · length: about 25 hours
- access: free | free online

### Introduction
A free book on doing data analysis in the R language: importing, tidying, transforming, visualising and modelling data, then communicating results. (Learners who prefer Python can use the free *Python Data Science Handbook* instead.)

### Quiz
**Multiple choice.** What is “tidy data”?
- Each variable a column, each observation a row ✓
- Data with no numbers
- Data in alphabetical order

**Multiple choice.** Why do analysis in code rather than by hand?
- It is repeatable and checkable ✓
- It is always faster to write
- It hides mistakes

**Multiple choice.** Which language does the book use?
- R ✓
- French
- HTML

**Multiple choice.** What is the last step of the workflow in the book?
- Communicating results ✓
- Deleting the data
- Buying software

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Bayesian or frequentist? Compare how each would analyse one study. Use McElreath and Freedman.
2. Find a natural experiment in the news or research, and explain why it identifies a cause. Use Angrist and Pischke.
3. Analyse a public data set in code and write up what you found.

---

# Stage 6: Trust and Ethics
level: Expert
intent: The replication crisis, biased algorithms, and reading research.
gate: Score 70% or more across this stage's quizzes.
covers: statistical-inference, biostatistics, statistics-and-probability

The final stage asks how far we can trust statistical findings: the replication crisis in science, a famous paper on why many findings are false, the harms of biased algorithms, and how to read research yourself.

## Science Fictions
- id: st21 · type: read · creator: Stuart Ritchie · year: 2020 · length: about 10 hours
- access: paid | buy, or borrow from a library

### Introduction
A psychologist explains the replication crisis: many published findings, especially in psychology and medicine, could not be repeated. He shows how fraud, bias, negligence and hype distort science, and what reforms can help.

### Quiz
**Multiple choice.** What is the replication crisis?
- Many published findings could not be repeated ✓
- Too many copies of papers
- A printing error

**Multiple choice.** What is p-hacking?
- Trying analyses until one gives a significant result ✓
- Hacking a computer
- Rounding numbers

**Multiple choice.** Which reform does Ritchie support?
- Pre-registering studies before collecting data ✓
- Publishing only positive results
- Hiding data

**Fill in the blank.** *Science Fictions* was published in ___. [answer: 2020]

## Why Most Published Research Findings Are False
- id: st22 · type: read · creator: John P. A. Ioannidis · year: 2005 · length: about 2 hours
- access: free | free in *PLOS Medicine*

### Introduction
A short, famous paper showing mathematically that when studies are small, effects are small, many relationships are tested, and there is flexibility and bias, most claimed findings are likely to be false.

### Quiz
**Multiple choice.** What does Ioannidis argue?
- Under common conditions, most claimed findings are likely false ✓
- All research is true
- Statistics is useless

**Multiple choice.** Which condition makes false findings more likely?
- Small studies ✓
- Very large studies
- Pre-registration

**Multiple choice.** Where was the paper published?
- *PLOS Medicine* ✓
- A newspaper
- A novel

**Fill in the blank.** The paper was published in ___. [answer: 2005]

## Weapons of Math Destruction
- id: st23 · type: read · creator: Cathy O'Neil · year: 2016 · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
A mathematician shows how opaque, large-scale algorithms in hiring, policing, credit and education can reinforce inequality, especially when they are trained on biased data and nobody can check them.

### Quiz
**Multiple choice.** What makes an algorithm a “weapon of math destruction”?
- It is opaque, large-scale and damaging ✓
- It uses maths
- It is fast

**Multiple choice.** How can algorithms reinforce inequality?
- By learning from biased past data ✓
- They can't
- By being slow

**Multiple choice.** Which area does O'Neil discuss?
- Hiring ✓
- Astronomy
- Cooking

**Fill in the blank.** *Weapons of Math Destruction* was published in ___. [answer: 2016]

## Reading current research
- id: st24 · type: read · creator: arXiv statistics, *Significance* magazine and open-access journals · length: ongoing
- access: free-and-paid | arXiv and many *Significance* articles are free; some journals need a library

### Introduction
Choose a statistical question from this path and find three recent pieces: a methods paper, an applied study, and a critique or replication. Note the sample, the method and how strong the conclusion is.

### Quiz
**Multiple choice.** What is *Significance*?
- A magazine about statistics for a general audience ✓
- A p-value
- A university

**Multiple choice.** What should you check first in any study?
- The sample and how it was chosen ✓
- The font
- The author's photo

**Multiple choice.** Why read a replication or critique?
- It tests whether the finding holds up ✓
- It is always negative
- To make the task longer

**Multiple choice.** What makes a statistical conclusion stronger?
- Large, well-designed, replicated studies ✓
- One small study
- A dramatic headline

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Can we trust science? Use Ritchie, Ioannidis and the ASA statement.
2. Should algorithms make decisions about people? Use O'Neil and one current case.
3. Design a study to answer one question you care about, and explain how you would avoid the problems in this stage.

---

# Final mastery check

Finishing all six stages makes you a capable student of statistics. To earn the **Ascent Mastery: Statistics** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Data analysis.** Analyse a public data set: describe it, picture it, and test one claim.
3. **Critique.** Judge an unseen news story that uses statistics.
4. **Capstone essay.** 2,500 words on one of the Stage 6 questions. Strong essays are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a curious friend. For example: “What does a 95% confidence interval mean?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Data science | Stage 5 | Jake VanderPlas, *Python Data Science Handbook* (2016) | Free |
| Mathematics | Stage 3 | The Mathematics path | Free + paid |
| Epidemiology | Stage 4 | The Medicine and health path | Free + paid |

# Bridges to other subjects

- **Mathematics:** probability and calculus.
- **Computer science:** machine learning and code.
- **Economics:** econometrics and causal inference.
- **Psychology:** biases and the replication crisis.
- **Medicine:** clinical trials and epidemiology.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by statisticians and statistics teachers from more than one country
- [ ] Every worked number checked by recalculation
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
