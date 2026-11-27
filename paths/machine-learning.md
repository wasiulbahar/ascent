---
path: Machine Learning
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Machine Learning

How computers learn from data: the maths behind it, classic methods from regression to random forests, evaluation, deep learning and transformers, building real systems, and fairness and interpretability. About 250 to 300 hours over ten to twelve months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Nearly the whole path is free, including several full textbooks and university courses. You need basic Python and school maths; the Programming, Linear algebra and Statistics paths help. Free cloud notebooks such as Google Colab are enough for every exercise.

# About machine learning

Machine learning builds systems that improve at a task by learning patterns from data rather than following hand-written rules. It powers search, translation, recommendation, medical imaging and modern AI.

This path starts with gentle visual introductions, builds the mathematical and statistical foundations, teaches classic methods and how to evaluate them, moves to deep learning, covers building and maintaining real systems, and ends with fairness, interpretability and reading research.

**Trivia**
- Arthur Samuel coined the phrase “machine learning” in 1959, describing a program that learned to play checkers.
- The 2024 Nobel Prize in Physics went to John Hopfield and Geoffrey Hinton for foundational work on neural networks.
- The ImageNet dataset holds more than 14 million labelled images.
- The “no free lunch” theorems show that no learning algorithm is best for every possible problem.

### Timeline
- **1943 · McCulloch and Pitts** describe a mathematical model of a neuron.
- **1958 · Frank Rosenblatt** builds the perceptron.
- **1959 · Arthur Samuel** coins the term “machine learning”.
- **1986 · Rumelhart, Hinton and Williams** popularise backpropagation.
- **1995 · Cortes and Vapnik** publish support vector networks.
- **2001 · Leo Breiman** introduces random forests.
- **2009 · ImageNet** is presented as a huge labelled image dataset.
- **2012 · AlexNet** wins the ImageNet challenge with deep learning.
- **2017 · The transformer** is introduced in “Attention Is All You Need”.
- **2024 · Hopfield and Hinton** win the Nobel Prize in Physics.

# What you will be able to do

At the end of this path you will know machine learning the way a strong university course and early industry work expect. You will be able to:

- **Explain the foundations:** the linear algebra, probability and optimisation behind learning.
- **Use classic methods:** regression, trees, ensembles, SVMs, clustering and dimensionality reduction.
- **Evaluate models honestly:** with train–test splits, cross-validation and the bias–variance trade-off.
- **Build deep learning models:** neural networks, convolutional networks and transformers in PyTorch.
- **Build responsibly:** deploy, monitor, explain and audit models for fairness.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Machine learning researchers and engineers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: What learning from data means.
gate: Score 70% or more across this stage's quizzes.
covers: machine-learning, artificial-intelligence

Start with intuition. This stage gives you a short overview book, Google's free crash course, a beautiful visual explainer, and a tool to train a model in your browser.

## The Hundred-Page Machine Learning Book
- id: ml1 · type: read · creator: Andriy Burkov · year: 2019 · length: about 8 hours
- access: free-and-paid | read first, pay later

### Introduction
A compact overview of the whole field, from supervised learning to neural networks, distributed on a “read first, buy later” basis.

### Quiz
**Multiple choice.** How long is the book meant to be?
- About a hundred pages ✓
- A thousand pages
- Ten pages

**Multiple choice.** How is it distributed?
- Read first, buy later ✓
- Only in libraries
- It is secret

**Multiple choice.** Who wrote it?
- Andriy Burkov ✓
- Andrew Ng
- Leo Breiman

**Multiple choice.** When was it published?
- 2019 ✓
- 1959
- 2012

## Machine Learning Crash Course
- id: ml2 · type: course · creator: Google · year: 2018 · length: about 15 hours
- access: free | free online

### Introduction
A free course with videos, interactive visualisations and exercises on regression, classification, embeddings and responsible AI.

### Quiz
**Multiple choice.** Which company made the course?
- Google ✓
- A bank
- A film studio

**Multiple choice.** Which topic does it cover?
- Classification ✓
- Cooking
- Painting

**Multiple choice.** What does it include besides videos?
- Interactive exercises ✓
- Nothing
- Only music

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for employees

## A Visual Introduction to Machine Learning
- id: ml3 · type: read · creator: Stephanie Yee and Tony Chu, R2D3 · year: 2015 · length: about 1 hour
- access: free | free online

### Introduction
A scrolling animation shows a decision tree learning to tell homes in New York from homes in San Francisco, then explains overfitting.

### Quiz
**Multiple choice.** Which model does the explainer show?
- A decision tree ✓
- A neural network
- A spreadsheet

**Multiple choice.** What does the model tell apart?
- Homes in two cities ✓
- Cats and dogs
- Songs

**Multiple choice.** What problem does part two explain?
- Overfitting ✓
- Spelling
- Slow internet

**Multiple choice.** Is “A Visual Introduction to Machine Learning” free?
- Yes ✓
- No
- Only in the US

## Teachable Machine
- id: ml4 · type: course · creator: Google · year: 2017 · length: about 1 hour
- access: free | free online

### Introduction
Train an image, sound or pose classifier in your browser with your own webcam examples, without code.

### Quiz
**Multiple choice.** What can you train in Teachable Machine?
- Image, sound or pose classifiers ✓
- Pets
- Cars

**Multiple choice.** Do you need to write code?
- No ✓
- Yes, lots
- Only in C

**Multiple choice.** Where does training happen?
- In your browser ✓
- In a factory
- On paper

**Multiple choice.** Is “Teachable Machine” free?
- Yes ✓
- No
- Only for schools

---

# Stage 2: Foundations
level: Explorer
intent: The maths and statistics underneath.
gate: Score 70% or more across this stage's quizzes.
covers: statistical-learning, linear-algebra, probability-theory

This stage builds the foundations: the maths of machine learning, statistics explained clearly, a classic free textbook, and Stanford's machine learning course.

## Mathematics for Machine Learning
- id: ml5 · type: read · creator: Marc Peter Deisenroth, A. Aldo Faisal and Cheng Soon Ong · year: 2020 · length: about 30 hours
- access: free | free online

### Introduction
The linear algebra, calculus, probability and optimisation behind machine learning, in one free book.

### Quiz
**Multiple choice.** Which topic is in the book?
- Optimisation ✓
- Poetry
- History

**Multiple choice.** Why learn this maths?
- Machine learning is built on it ✓
- It is unrelated
- For fun only

**Multiple choice.** Who wrote “Mathematics for Machine Learning”?
- Deisenroth, Faisal and Ong ✓
- Burkov
- Samuel

**Multiple choice.** Is it free online?
- Yes ✓
- No
- Only in print

## StatQuest
- id: ml6 · type: watch · creator: Josh Starmer · length: about 15 hours
- access: free | free online

### Introduction
Clear, friendly videos on statistics and machine learning methods, from p-values to gradient boosting.

### Quiz
**Multiple choice.** What do the videos explain?
- Statistics and machine learning methods ✓
- Cooking
- Geography

**Multiple choice.** Which method is covered?
- Gradient boosting ✓
- Knitting
- Juggling

**Multiple choice.** Who makes StatQuest?
- Josh Starmer ✓
- Grant Sanderson
- Andrew Ng

**Multiple choice.** Are the videos free?
- Yes ✓
- No
- Only for members

## An Introduction to Statistical Learning
- id: ml7 · type: read · creator: Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani and Jonathan Taylor · year: 2013 · length: about 40 hours
- access: free | free online

### Introduction
A classic, readable textbook on regression, classification, resampling, trees, SVMs and unsupervised learning, with labs in R and Python.

### Quiz
**Multiple choice.** Which languages do the labs use?
- R and Python ✓
- Latin and Greek
- None

**Multiple choice.** Which family of methods does ISL teach?
- Resampling methods such as the bootstrap ✓
- Astrology
- Origami

**Multiple choice.** Is the book free online?
- Yes ✓
- No
- Only for teachers

**Multiple choice.** When was the first edition published?
- 2013 ✓
- 1959
- 2024

## Stanford CS229: Machine Learning
- id: ml8 · type: watch · creator: Andrew Ng and colleagues, Stanford Online · year: 2018 · length: about 30 hours
- access: free | free online

### Introduction
Recorded lectures deriving key algorithms mathematically: linear models, generative models, SVMs, neural networks and reinforcement learning.

### Quiz
**Multiple choice.** How are algorithms taught in CS229?
- Derived mathematically ✓
- Only as code
- Only as stories

**Multiple choice.** Which topic is covered?
- Generative models ✓
- Painting
- Sculpture

**Multiple choice.** Who leads the course?
- Andrew Ng ✓
- Josh Starmer
- Christoph Molnar

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at Stanford

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Explain gradient descent with a picture and an equation.
2. Why does probability matter for classification?
3. Derive linear regression's least-squares solution.

---

# Stage 3: Classic Methods and Evaluation
level: Reader
intent: The working toolkit.
gate: Score 70% or more across this stage's quizzes.
covers: supervised-learning, unsupervised-learning, statistical-learning

This stage teaches widely used methods and, above all, how to evaluate them honestly.

## Random Forests
- id: ml9 · type: read · creator: Leo Breiman, *Machine Learning* · year: 2001 · length: about 3 hours
- access: free | free online

### Introduction
Breiman combined many decision trees trained on random samples and random features into a forest that is accurate and hard to overfit.

### Quiz
**Multiple choice.** What does a random forest combine?
- Many decision trees ✓
- Many forests
- One neuron

**Multiple choice.** What is randomised?
- Samples and features ✓
- Nothing
- The answers

**Multiple choice.** Who introduced random forests?
- Leo Breiman ✓
- Rosenblatt
- Hinton

**Multiple choice.** When was the paper published?
- 2001 ✓
- 1958
- 2017

## Support vector machines and kernels
- id: ml10 · type: read · creator: Stanford CS229 lecture notes · year: 1995 · length: about 5 hours
- access: free | free online

### Introduction
An SVM finds the boundary with the widest margin between classes; kernels let it draw curved boundaries.

### Quiz
**Multiple choice.** What does an SVM maximise?
- The margin between classes ✓
- Errors
- Training time

**Multiple choice.** What do kernels allow?
- Curved boundaries ✓
- Faster internet
- Nothing

**Multiple choice.** Who published support vector networks in 1995?
- Cortes and Vapnik ✓
- Breiman
- Samuel

**Multiple choice.** Are the notes free?
- Yes ✓
- No
- Only at Stanford

## Clustering and dimensionality reduction
- id: ml11 · type: read · creator: scikit-learn User Guide · length: about 6 hours
- access: free | free online

### Introduction
Unsupervised methods find structure without labels: k-means groups similar points, and PCA reduces many features to a few.

### Quiz
**Multiple choice.** What does k-means do?
- Groups similar points ✓
- Labels images
- Sorts alphabetically

**Multiple choice.** What does PCA do?
- Reduces many features to a few ✓
- Adds features
- Deletes data

**Multiple choice.** Do unsupervised methods need labels?
- No ✓
- Yes
- Only sometimes

**Multiple choice.** Is the scikit-learn guide free?
- Yes ✓
- No
- Only for companies

## The Elements of Statistical Learning
- id: ml12 · type: read · creator: Trevor Hastie, Robert Tibshirani and Jerome Friedman · year: 2001 · length: about 50 hours
- access: free | free online

### Introduction
The advanced companion to ISL, including the bias–variance trade-off, cross-validation, boosting and model selection.

### Quiz
**Multiple choice.** Which trade-off does the book explain?
- Bias–variance ✓
- Price–quality
- Speed–colour

**Multiple choice.** What is cross-validation for?
- Estimating performance on new data ✓
- Speeding up training
- Collecting data

**Multiple choice.** How does it relate to ISL?
- It is the advanced companion ✓
- It is unrelated
- It is a novel

**Multiple choice.** Is “The Elements of Statistical Learning” free?
- Yes ✓
- No
- Only in print

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Compare a decision tree and a random forest on the same data.
2. Why must you never tune a model on the test set?
3. Explain the bias–variance trade-off with an example.

---

# Stage 4: Deep Learning
level: Connoisseur
intent: Neural networks at scale.
gate: Score 70% or more across this stage's quizzes.
covers: deep-learning, machine-learning

This stage teaches deep learning: a free interactive textbook, the paper that started the boom, convolutional networks, and transformers.

## Dive into Deep Learning
- id: ml13 · type: read · creator: Aston Zhang, Zachary Lipton, Mu Li and Alexander Smola · year: 2023 · length: about 50 hours
- access: free | free online

### Introduction
An interactive textbook where every concept comes with runnable code, from multilayer perceptrons to attention and transformers.

### Quiz
**Multiple choice.** What comes with every concept?
- Runnable code ✓
- A poem
- Nothing

**Multiple choice.** Which architecture does the book reach?
- Transformers ✓
- Steam engines
- Bridges

**Multiple choice.** Is “Dive into Deep Learning” free?
- Yes ✓
- No
- Only in print

**Multiple choice.** Who wrote “Dive into Deep Learning”?
- Zhang, Lipton, Li and Smola ✓
- Breiman
- Hastie

## ImageNet Classification with Deep Convolutional Neural Networks
- id: ml14 · type: read · creator: Alex Krizhevsky, Ilya Sutskever and Geoffrey Hinton · year: 2012 · length: about 3 hours
- access: free | free online

### Introduction
The AlexNet paper, which won the ImageNet challenge by a wide margin using GPUs and started the deep learning boom.

### Quiz
**Multiple choice.** What did AlexNet win?
- The ImageNet challenge ✓
- A football match
- An election

**Multiple choice.** Which hardware did it use?
- GPUs ✓
- Typewriters
- Abacuses

**Multiple choice.** What did it start?
- The deep learning boom ✓
- The internet
- Nothing

**Multiple choice.** When was “ImageNet Classification with Deep Convolutional Neural Networks” published?
- 2012 ✓
- 1986
- 2023

## CS231n: Deep Learning for Computer Vision
- id: ml15 · type: read · creator: Stanford University course notes and lectures · length: about 25 hours
- access: free | free online

### Introduction
Convolutional networks learn filters that detect edges, textures and objects; the notes explain backpropagation and training tricks.

### Quiz
**Multiple choice.** What do convolutional networks learn?
- Filters ✓
- Songs
- Prices

**Multiple choice.** What do early filters detect?
- Edges ✓
- Sentences
- Smells

**Multiple choice.** Which algorithm computes gradients?
- Backpropagation ✓
- Sorting
- Encryption

**Multiple choice.** Is “CS231n: Deep Learning for Computer Vision” free?
- Yes ✓
- No
- Only at Stanford

## The Illustrated Transformer
- id: ml16 · type: read · creator: Jay Alammar · year: 2018 · length: about 2 hours
- access: free | free online

### Introduction
A visual walk through the transformer: embeddings, self-attention, multi-head attention and positional encoding.

### Quiz
**Multiple choice.** What lets each word attend to the others?
- Self-attention ✓
- Sorting
- Compression

**Multiple choice.** What tells the model word order?
- Positional encoding ✓
- Colour
- Font

**Multiple choice.** Who wrote the guide?
- Jay Alammar ✓
- Josh Starmer
- Molnar

**Multiple choice.** Is “The Illustrated Transformer” free?
- Yes ✓
- No
- Only for researchers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Train a small network on images and explain its mistakes.
2. Why did deep learning take off around 2012?
3. Explain self-attention to a friend.

---

# Stage 5: Building Real Systems
level: Specialist
intent: From notebook to product.
gate: Score 70% or more across this stage's quizzes.
covers: machine-learning, software-engineering

Models are only part of real systems. This stage teaches PyTorch, competitions, Google's rules of machine learning, and the hidden costs of ML systems.

## PyTorch tutorials
- id: ml17 · type: course · creator: PyTorch Foundation · length: about 15 hours
- access: free | free online

### Introduction
Official tutorials on tensors, automatic differentiation, building and training models, and saving and loading them.

### Quiz
**Multiple choice.** What computes gradients automatically in PyTorch?
- Autograd ✓
- Excel
- A compiler

**Multiple choice.** What are tensors?
- Multidimensional arrays ✓
- Muscles
- Images only

**Multiple choice.** Who maintains PyTorch?
- The PyTorch Foundation ✓
- A bank
- A newspaper

**Multiple choice.** Are the tutorials free?
- Yes ✓
- No
- Only for companies

## Kaggle competitions
- id: ml18 · type: course · creator: Kaggle · length: about 20 hours
- access: free | free online

### Introduction
Practise on real datasets, compare with others and read winners' write-ups; beware of leaderboard overfitting.

### Quiz
**Multiple choice.** What can you read after competitions?
- Winners' write-ups ✓
- Novels
- Nothing

**Multiple choice.** What should you beware of?
- Leaderboard overfitting ✓
- Too much water
- Nothing

**Multiple choice.** What do competitions provide?
- Real datasets ✓
- Free laptops
- Nothing

**Multiple choice.** Is entering free?
- Yes ✓
- No
- Only for students

## Rules of Machine Learning
- id: ml19 · type: read · creator: Martin Zinkevich, Google · length: about 2 hours
- access: free | free online

### Introduction
Practical advice from Google: start simple, get the pipeline right first, monitor everything, and don't be afraid to launch a product without ML.

### Quiz
**Multiple choice.** What should you start with?
- Something simple ✓
- The biggest model
- Nothing

**Multiple choice.** What should you get right first?
- The pipeline ✓
- The logo
- The office

**Multiple choice.** Can a product launch without ML?
- Yes ✓
- No
- Never

**Multiple choice.** Is the guide free?
- Yes ✓
- No
- Only for staff

## Hidden Technical Debt in Machine Learning Systems
- id: ml20 · type: read · creator: D. Sculley and colleagues, NeurIPS · year: 2015 · length: about 2 hours
- access: free | free online

### Introduction
In real ML systems the model is a small part; data dependencies, feedback loops and configuration create long-term maintenance costs.

### Quiz
**Multiple choice.** How big is the model in a real ML system?
- A small part ✓
- Everything
- Nothing

**Multiple choice.** What creates long-term costs?
- Data dependencies and feedback loops ✓
- Comments
- Nothing

**Multiple choice.** Where was the paper published?
- NeurIPS ✓
- A tabloid
- A cookbook

**Multiple choice.** When was “Hidden Technical Debt in Machine Learning Systems” published?
- 2015 ✓
- 1995
- 2023

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Build a small model end to end and deploy it as a web demo.
2. What hidden costs might your project have?
3. When should you not use machine learning?

---

# Stage 6: Responsible ML and Research
level: Expert
intent: Fair, explainable and current.
gate: Score 70% or more across this stage's quizzes.
covers: machine-learning, artificial-intelligence, research-ethics

The final stage covers fairness, model documentation, interpretability and reading current research.

## Fairness and Machine Learning
- id: ml21 · type: read · creator: Solon Barocas, Moritz Hardt and Arvind Narayanan · year: 2023 · length: about 20 hours
- access: free | free online

### Introduction
A free book showing that fairness has several mathematical definitions that can conflict, and that data reflect past inequalities.

### Quiz
**Multiple choice.** Can definitions of fairness conflict?
- Yes ✓
- No
- Never

**Multiple choice.** What can data reflect?
- Past inequalities ✓
- Only truth
- Nothing

**Multiple choice.** Who wrote the book?
- Barocas, Hardt and Narayanan ✓
- Breiman
- Alammar

**Multiple choice.** Is “Fairness and Machine Learning” free?
- Yes ✓
- No
- Only in print

## Model Cards for Model Reporting
- id: ml22 · type: read · creator: Margaret Mitchell and colleagues · year: 2019 · length: about 2 hours
- access: free | free online

### Introduction
Proposes short documents for each model stating its intended use, performance across groups and limitations.

### Quiz
**Multiple choice.** What do model cards report?
- Intended use, performance and limitations ✓
- Prices only
- Nothing

**Multiple choice.** Why report performance across groups?
- To reveal unequal performance ✓
- To hide errors
- No reason

**Multiple choice.** Who led the paper?
- Margaret Mitchell ✓
- Leo Breiman
- Arthur Samuel

**Multiple choice.** When was “Model Cards for Model Reporting” published?
- 2019 ✓
- 2001
- 1959

## Interpretable Machine Learning
- id: ml23 · type: read · creator: Christoph Molnar · year: 2019 · length: about 20 hours
- access: free | free online

### Introduction
A free book on making models understandable, from simple interpretable models to tools such as permutation importance and SHAP.

### Quiz
**Multiple choice.** What does the book help with?
- Making models understandable ✓
- Making models secret
- Making models slower

**Multiple choice.** Which tool does it cover?
- SHAP ✓
- A hammer
- A calculator

**Multiple choice.** Who wrote “Interpretable Machine Learning”?
- Christoph Molnar ✓
- Jay Alammar
- Josh Starmer

**Multiple choice.** Is “Interpretable Machine Learning” free?
- Yes ✓
- No
- Only for researchers

## Reading current research
- id: ml24 · type: read · creator: arXiv cs.LG, NeurIPS and ICML proceedings, OpenReview · length: ongoing
- access: free | free online

### Introduction
Choose a question from this path and read three recent papers, checking their baselines, datasets and whether results were reproduced.

### Quiz
**Multiple choice.** What should you check in a paper?
- Baselines, datasets and reproducibility ✓
- Only the title
- The font

**Multiple choice.** Where are many ML preprints posted?
- arXiv ✓
- A phone book
- A recipe site

**Multiple choice.** Which is a major ML conference?
- NeurIPS ✓
- The Olympics
- Eurovision

**Multiple choice.** Are these sources free?
- Yes ✓
- No
- Only for professors

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Write a model card for a model you built.
2. Which fairness definition fits a real use case you know, and why?
3. Reproduce a small result from a recent paper.

---

# Final mastery check

Finishing all six stages makes you a capable machine learning practitioner. To earn the **Ascent Mastery: Machine Learning** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Maths check.** Derive gradient descent for logistic regression and backpropagation for a small network.
3. **Project.** Build, evaluate and document a model on a real dataset, with a model card.
4. **Capstone report.** 2,500 words on one of the Stage 6 questions. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “Why can't you just test on your training data?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Artificial intelligence | Stage 4 | The Artificial intelligence path | Free + paid |
| Data science | Stage 3 | The Data science path | Free + paid |
| Linear algebra | Stage 2 | The Linear algebra path | Free + paid |

# Bridges to other subjects

- **Statistics:** inference and uncertainty.
- **Linear algebra:** vectors and matrices.
- **Computer science:** algorithms and systems.
- **Neuroscience:** brains and networks.
- **Ethics:** fairness and responsibility.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by machine learning researchers and engineers from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
