---
path: Linear Algebra
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Linear Algebra

The mathematics of vectors and matrices: systems of equations, transformations, eigenvalues, proofs about vector spaces, computation, and applications from search engines to machine learning and quantum computing. About 200 to 250 hours over eight to ten months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free lectures and several free textbooks cover the whole path. You need school algebra; a little calculus helps in later stages. Work the exercises: linear algebra is learned with a pencil and, later, a computer.

# About linear algebra

Linear algebra studies vectors, matrices and linear transformations. It is the most widely used branch of mathematics in science and engineering, behind graphics, data science, machine learning, physics and economics.

This path begins with geometric intuition, teaches the core computations, develops vector spaces and eigenvalues, introduces proofs, moves to numerical computation, and ends with applications in machine learning, graphics, quantum computing and networks.

**Trivia**
- The Chinese *Nine Chapters on the Mathematical Art*, compiled about 2,000 years ago, solved linear systems with a method like Gaussian elimination.
- James Joseph Sylvester coined the word “matrix” in 1850.
- A famous paper on Google's search ranking was titled “The $25,000,000,000 Eigenvector”.
- Sheldon Axler made the fourth edition of *Linear Algebra Done Right* free to read online.

### Timeline
- **c. 100 BCE–100 CE · *The Nine Chapters*** solves linear systems by elimination.
- **1693 · Gottfried Leibniz** uses determinants.
- **1750 · Gabriel Cramer** publishes Cramer's rule.
- **1809 · Carl Friedrich Gauss** uses elimination and least squares for orbits.
- **1844 · Hermann Grassmann** develops a theory of vector spaces.
- **1850 · J. J. Sylvester** coins the word “matrix”.
- **1858 · Arthur Cayley** publishes matrix algebra.
- **1888 · Giuseppe Peano** gives the first axiomatic definition of a vector space.
- **1965 · Golub and Kahan** publish a practical way to compute the singular value decomposition.
- **1998 · PageRank** ranks the web with an eigenvector.

# What you will be able to do

At the end of this path you will know linear algebra the way a strong first university course, with an introduction to proofs, expects. You will be able to:

- **Picture linear algebra:** vectors, transformations and determinants geometrically.
- **Compute:** solve systems, multiply and invert matrices, and find eigenvalues.
- **Reason about vector spaces:** basis, dimension, orthogonality and the spectral theorem, with proofs.
- **Compute numerically:** with NumPy, understanding decompositions and conditioning.
- **Apply it:** to least squares, machine learning, graphics, quantum states and networks.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Mathematicians and mathematics teachers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Seeing vectors and matrices.
gate: Score 70% or more across this stage's quizzes.
covers: linear-algebra, algebra

Start with pictures. This stage gives you a famous animated series, free practice, an interactive book and systems of equations.

## Essence of Linear Algebra
- id: la1 · type: watch · creator: Grant Sanderson, 3Blue1Brown · year: 2016 · length: about 4 hours
- access: free | free online

### Introduction
An animated series showing that matrices are transformations of space and that determinants measure how areas and volumes scale.

### Quiz
**Multiple choice.** What is a matrix, in the series' view?
- A transformation of space ✓
- A list of names
- A film

**Multiple choice.** What does a determinant measure?
- How areas and volumes scale ✓
- Colour
- Temperature

**Multiple choice.** Who made the series?
- Grant Sanderson ✓
- Gilbert Strang
- Sheldon Axler

**Multiple choice.** When was it released?
- 2016 ✓
- 1965
- 1998

## Khan Academy linear algebra
- id: la2 · type: course · creator: Khan Academy · length: about 20 hours
- access: free | free online

### Introduction
Videos and exercises on vectors, matrices, linear transformations and spaces, with practice at every step.

### Quiz
**Multiple choice.** What does the course include besides videos?
- Exercises ✓
- Only music
- Nothing

**Multiple choice.** Which topic does it cover?
- Linear transformations ✓
- Poetry
- History of Rome

**Multiple choice.** Who provides it?
- Khan Academy ✓
- A bank
- A film studio

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for teachers

## Immersive Linear Algebra
- id: la3 · type: read · creator: J. Ström, K. Åström and T. Akenine-Möller · year: 2015 · length: about 10 hours
- access: free | free online

### Introduction
A free online textbook with interactive figures you can rotate and drag, covering vectors, dot products, matrices and eigenvalues.

### Quiz
**Multiple choice.** What is special about the book?
- Interactive figures ✓
- It has no pictures
- It is audio only

**Multiple choice.** Which topic does “Immersive Linear Algebra” cover?
- Dot products ✓
- Chemistry
- Grammar

**Multiple choice.** Is it free online?
- Yes ✓
- No
- Only in print

**Multiple choice.** When was it published?
- 2015 ✓
- 1850
- 1693

## Systems of linear equations
- id: la4 · type: read · creator: OpenStax *College Algebra*, chapter 7 · length: about 5 hours
- access: free | free online

### Introduction
Solving several linear equations at once by substitution, elimination and matrices, and recognising when there are no or infinitely many solutions.

### Quiz
**Multiple choice.** How many solutions can a linear system have?
- None, one or infinitely many ✓
- Exactly two
- Always one

**Multiple choice.** Which method solves systems?
- Elimination ✓
- Guessing only
- Division by zero

**Multiple choice.** How can systems be written compactly?
- With matrices ✓
- With poems
- They cannot

**Multiple choice.** Is the chapter free?
- Yes ✓
- No
- Only for teachers

---

# Stage 2: Core Computations
level: Explorer
intent: Matrices at work.
gate: Score 70% or more across this stage's quizzes.
covers: linear-algebra

This stage builds fluency: Strang's celebrated MIT lectures and textbook, a free interactive textbook, and determinants and inverses.

## MIT 18.06 Linear Algebra
- id: la5 · type: watch · creator: Gilbert Strang, MIT OpenCourseWare · length: about 35 hours
- access: free | free online

### Introduction
Strang's legendary lectures on elimination, matrix multiplication, the four fundamental subspaces, and much more.

### Quiz
**Multiple choice.** Who gives the 18.06 lectures?
- Gilbert Strang ✓
- Grant Sanderson
- Sheldon Axler

**Multiple choice.** What does Strang call the column space, null space and their partners?
- The four fundamental subspaces ✓
- The four seasons
- The four corners

**Multiple choice.** Which method do the lectures begin with?
- Elimination ✓
- Calculus
- Statistics

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at MIT

## Introduction to Linear Algebra
- id: la6 · type: read · creator: Gilbert Strang · year: 1993 · length: about 40 hours
- access: paid | buy, or borrow from a library

### Introduction
Strang's textbook, companion to his lectures, with clear explanations and many exercises, now in its sixth edition.

### Quiz
**Multiple choice.** Which lectures does the book accompany?
- MIT 18.06 ✓
- Crash Course
- Khan Academy

**Multiple choice.** What does the book contain many of?
- Exercises ✓
- Recipes
- Maps

**Multiple choice.** Who wrote it?
- Gilbert Strang ✓
- Arthur Cayley
- Gauss

**Multiple choice.** When was the first edition published?
- 1993 ✓
- 1850
- 2016

## Interactive Linear Algebra
- id: la7 · type: read · creator: Dan Margalit and Joseph Rabinoff, Georgia Tech · length: about 25 hours
- access: free | free online

### Introduction
A free textbook with interactive demos on linear independence, span, matrix transformations and composition.

### Quiz
**Multiple choice.** What does matrix multiplication represent?
- Composing transformations ✓
- Adding numbers
- Nothing

**Multiple choice.** What is the span of vectors?
- All their linear combinations ✓
- Their length
- Their colour

**Multiple choice.** Which university wrote this textbook?
- Georgia Tech ✓
- Oxford
- MIT

**Multiple choice.** Is “Interactive Linear Algebra” free?
- Yes ✓
- No
- Only in print

## Determinants and inverses
- id: la8 · type: read · creator: Margalit and Rabinoff, *Interactive Linear Algebra*, chapters 3 and 4 · length: about 8 hours
- access: free | free online

### Introduction
A square matrix has an inverse exactly when its determinant is not zero; the determinant is the factor by which it scales volume.

### Quiz
**Multiple choice.** When does a square matrix have an inverse?
- When its determinant is not zero ✓
- Always
- Never

**Multiple choice.** What does a zero determinant mean geometrically?
- Space is squashed flat ✓
- Space doubles
- Nothing

**Multiple choice.** Does every matrix have an inverse?
- No ✓
- Yes
- Only large ones

**Multiple choice.** Is the textbook free?
- Yes ✓
- No
- Only for students

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Explain why matrix multiplication is not commutative, with a picture.
2. Describe the four fundamental subspaces of a matrix.
3. Why does a zero determinant mean no inverse?

---

# Stage 3: Vector Spaces and Eigenvalues
level: Reader
intent: The structure underneath.
gate: Score 70% or more across this stage's quizzes.
covers: linear-algebra, numerical-analysis

This stage develops the central ideas: basis and dimension, eigenvalues and eigenvectors, a famous application to web search, and orthogonality and least squares.

## Basis and dimension
- id: la9 · type: watch · creator: Strang, MIT 18.06 lectures 9 and 10 · length: about 4 hours
- access: free | free online

### Introduction
A basis is a set of independent vectors that spans a space; the number of vectors in any basis is the space's dimension.

### Quiz
**Multiple choice.** What is a basis?
- Independent vectors that span a space ✓
- Any vectors
- A single number

**Multiple choice.** What is dimension?
- The number of vectors in a basis ✓
- The size of a page
- The determinant

**Multiple choice.** Can a space have more than one basis?
- Yes ✓
- No
- Only in two dimensions

**Multiple choice.** Is “Basis and dimension” free?
- Yes ✓
- No
- Only at MIT

## Eigenvalues and eigenvectors
- id: la10 · type: watch · creator: 3Blue1Brown chapter 14 and Strang lecture 21 · length: about 4 hours
- access: free | free online

### Introduction
An eigenvector keeps its direction under a transformation and is only stretched by a factor, its eigenvalue.

### Quiz
**Multiple choice.** What happens to an eigenvector under its matrix?
- It is only stretched ✓
- It turns completely
- It disappears

**Multiple choice.** What is the eigenvalue?
- The stretching factor ✓
- The angle
- The length of a page

**Multiple choice.** Which two sources explain this?
- 3Blue1Brown and Strang ✓
- Orwell and Pinker
- Nobody

**Multiple choice.** Are these free?
- Yes ✓
- No
- Only in print

## The $25,000,000,000 Eigenvector
- id: la11 · type: read · creator: Kurt Bryan and Tanya Leise, *SIAM Review* · year: 2006 · length: about 3 hours
- access: free | free online

### Introduction
Explains how Google's PageRank ranks web pages by finding an eigenvector of a huge matrix of links.

### Quiz
**Multiple choice.** What does PageRank find?
- An eigenvector of a link matrix ✓
- A password
- A search term

**Multiple choice.** What does PageRank rank?
- Web pages ✓
- Football teams
- Restaurants

**Multiple choice.** Where was the article published?
- *SIAM Review* ✓
- A tabloid
- A cookbook

**Multiple choice.** When was “The $25,000,000,000 Eigenvector” published?
- 2006 ✓
- 1998
- 1850

## Orthogonality and least squares
- id: la12 · type: read · creator: Strang, MIT 18.06 lectures 14–17 · length: about 6 hours
- access: free | free online

### Introduction
When a system has no exact solution, least squares finds the best fit by projecting onto the column space; this is how lines are fitted to data.

### Quiz
**Multiple choice.** What does least squares find?
- The best fit when no exact solution exists ✓
- An exact solution always
- Nothing

**Multiple choice.** How does it work geometrically?
- Projection onto the column space ✓
- Rotation only
- Random guessing

**Multiple choice.** What is a common use?
- Fitting lines to data ✓
- Painting
- Cooking

**Multiple choice.** Is “Orthogonality and least squares” free?
- Yes ✓
- No
- Only for engineers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Find the eigenvalues of a 2 × 2 matrix by hand and interpret them.
2. Explain PageRank to a friend using the Bryan and Leise paper.
3. Fit a line to five data points with least squares.

---

# Stage 4: Proof and Abstraction
level: Connoisseur
intent: Thinking like a mathematician.
gate: Score 70% or more across this stage's quizzes.
covers: linear-algebra, abstract-algebra

This stage moves from computing to proving: a guide to proofs, Axler's free proof-based textbook, the spectral theorem, and the singular value decomposition.

## Book of Proof
- id: la13 · type: read · creator: Richard Hammack · year: 2009 · length: about 20 hours
- access: free | free online

### Introduction
A free introduction to proofs: logic, sets, direct proof, contradiction and induction.

### Quiz
**Multiple choice.** Which proof method does the book teach?
- Proof by contradiction ✓
- Proof by authority
- Proof by vote

**Multiple choice.** Which topic comes first?
- Logic and sets ✓
- Eigenvalues
- Graphics

**Multiple choice.** Who wrote “Book of Proof”?
- Richard Hammack ✓
- Gilbert Strang
- Grant Sanderson

**Multiple choice.** Is “Book of Proof” free?
- Yes ✓
- No
- Only in print

## Linear Algebra Done Right
- id: la14 · type: read · creator: Sheldon Axler · year: 1995 · length: about 50 hours
- access: free | free online

### Introduction
A proof-based textbook that develops linear maps and vector spaces with minimal use of determinants; the fourth edition is free online.

### Quiz
**Multiple choice.** What does Axler largely avoid?
- Determinants ✓
- Proofs
- Vector spaces

**Multiple choice.** What kind of textbook is it?
- Proof-based ✓
- Picture book
- Cookbook

**Multiple choice.** Which edition is free online?
- The fourth ✓
- The first
- None

**Multiple choice.** When was “Linear Algebra Done Right” published?
- 1995 ✓
- 1850
- 2016

## Inner products and the spectral theorem
- id: la15 · type: read · creator: Axler, *Linear Algebra Done Right*, chapters 6 and 7 · length: about 15 hours
- access: free | free online

### Introduction
Inner products give lengths and angles; the spectral theorem says symmetric (self-adjoint) matrices can be diagonalised by an orthonormal basis.

### Quiz
**Multiple choice.** What do inner products give?
- Lengths and angles ✓
- Colours
- Prices

**Multiple choice.** Which matrices does the spectral theorem diagonalise?
- Symmetric (self-adjoint) ones ✓
- All matrices
- None

**Multiple choice.** What kind of basis does it use?
- Orthonormal ✓
- Random
- Empty

**Multiple choice.** Is the book free?
- Yes ✓
- No
- Only for professors

## The singular value decomposition
- id: la16 · type: watch · creator: Strang, MIT 18.065 lectures; *Linear Algebra and Learning from Data* · year: 2019 · length: about 8 hours
- access: free-and-paid | lectures are free

### Introduction
Every matrix factors as a rotation, a stretch and another rotation; the SVD underlies data compression and recommendation systems.

### Quiz
**Multiple choice.** Which matrices have an SVD?
- Every matrix ✓
- Only square ones
- None

**Multiple choice.** What are the SVD's three parts?
- Rotation, stretch, rotation ✓
- Add, subtract, divide
- Colour, size, shape

**Multiple choice.** What is the SVD used for?
- Data compression ✓
- Baking
- Nothing

**Multiple choice.** Are the 18.065 lectures free?
- Yes ✓
- No
- Only at MIT

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Prove that eigenvectors with distinct eigenvalues are independent.
2. Why does Axler avoid determinants? Do you agree?
3. Compress an image with the SVD and explain what you see.

---

# Stage 5: Computation
level: Specialist
intent: Linear algebra on computers.
gate: Score 70% or more across this stage's quizzes.
covers: numerical-analysis, linear-algebra, scientific-computing

Real problems are solved by computers. This stage teaches numerical linear algebra, NumPy, applied vectors and matrices, and the classic numerical textbook.

## Computational Linear Algebra
- id: la17 · type: course · creator: Rachel Thomas, fast.ai · year: 2017 · length: about 20 hours
- access: free | free online

### Introduction
A practical course using Python notebooks: matrix decompositions for topic modelling, background removal from video, and PageRank.

### Quiz
**Multiple choice.** Which language does the course use?
- Python ✓
- Latin
- COBOL only

**Multiple choice.** Which application is covered?
- Background removal from video ✓
- Knitting
- Poetry

**Multiple choice.** Who created it?
- Rachel Thomas ✓
- Axler
- Gauss

**Multiple choice.** Is “Computational Linear Algebra” free?
- Yes ✓
- No
- Only for companies

## NumPy linear algebra
- id: la18 · type: read · creator: NumPy documentation · length: about 4 hours
- access: free | free online

### Introduction
NumPy's linalg module solves systems, computes eigenvalues and decompositions using fast, well-tested libraries.

### Quiz
**Multiple choice.** Which NumPy module does linear algebra?
- linalg ✓
- random only
- string

**Multiple choice.** What can it compute?
- Eigenvalues ✓
- Weather forecasts only
- Nothing

**Multiple choice.** Why use it instead of writing your own?
- Fast, well-tested libraries ✓
- It is slower
- No reason

**Multiple choice.** Is NumPy free?
- Yes ✓
- No
- Only for students

## Introduction to Applied Linear Algebra
- id: la19 · type: read · creator: Stephen Boyd and Lieven Vandenberghe · year: 2018 · length: about 30 hours
- access: free | free online

### Introduction
A free book on vectors, matrices and least squares applied to data fitting, classification, control and finance.

### Quiz
**Multiple choice.** Which method is central to the book?
- Least squares ✓
- Guessing
- Integration only

**Multiple choice.** Which application does it include?
- Data fitting ✓
- Cooking
- Gardening

**Multiple choice.** Who wrote “Introduction to Applied Linear Algebra”?
- Boyd and Vandenberghe ✓
- Strang
- Hammack

**Multiple choice.** Is “Introduction to Applied Linear Algebra” free?
- Yes ✓
- No
- Only in print

## Numerical Linear Algebra
- id: la20 · type: read · creator: Lloyd N. Trefethen and David Bau III · year: 1997 · length: about 40 hours
- access: paid | buy, or borrow from a library

### Introduction
The classic graduate text on algorithms and their accuracy: QR, the SVD, conditioning, and why computers' rounding errors matter.

### Quiz
**Multiple choice.** Why do rounding errors matter?
- They can ruin results for ill-conditioned problems ✓
- They never matter
- They make results exact

**Multiple choice.** What is conditioning?
- How sensitive a problem is to small changes ✓
- Air conditioning
- A training plan

**Multiple choice.** Who wrote the book?
- Trefethen and Bau ✓
- Boyd and Vandenberghe
- Margalit and Rabinoff

**Multiple choice.** When was “Numerical Linear Algebra” published?
- 1997 ✓
- 2018
- 1858

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Solve a large system in NumPy and check the answer.
2. Why is inverting a matrix usually a bad way to solve a system?
3. Show an ill-conditioned matrix and explain the danger.

---

# Stage 6: Applications
level: Expert
intent: Linear algebra everywhere.
gate: Score 70% or more across this stage's quizzes.
covers: linear-algebra, machine-learning, computer-graphics

The final stage applies linear algebra: machine learning, computer graphics, quantum computing and Markov chains.

## Mathematics for Machine Learning
- id: la21 · type: read · creator: Marc Peter Deisenroth, A. Aldo Faisal and Cheng Soon Ong · year: 2020 · length: about 30 hours
- access: free | free online

### Introduction
A free book on the linear algebra, geometry and calculus behind machine learning, including principal component analysis.

### Quiz
**Multiple choice.** Which method reduces dimensions with eigenvectors?
- Principal component analysis ✓
- Sorting
- Spell checking

**Multiple choice.** What does the book cover besides linear algebra?
- Calculus and geometry ✓
- Cooking
- History

**Multiple choice.** Who wrote “Mathematics for Machine Learning”?
- Deisenroth, Faisal and Ong ✓
- Strang
- Trefethen

**Multiple choice.** Is “Mathematics for Machine Learning” free?
- Yes ✓
- No
- Only for companies

## Transformations in computer graphics
- id: la22 · type: read · creator: Joey de Vries, LearnOpenGL “Transformations” · length: about 4 hours
- access: free | free online

### Introduction
Graphics move, rotate and scale objects with 4 × 4 matrices in homogeneous coordinates, so every movement is a matrix multiplication.

### Quiz
**Multiple choice.** What size matrices do 3D graphics use?
- 4 × 4 ✓
- 1 × 1
- 100 × 100

**Multiple choice.** Why use homogeneous coordinates?
- To make moving objects a matrix multiplication ✓
- To add colour
- No reason

**Multiple choice.** Which operations become matrices?
- Moving, rotating and scaling ✓
- Saving files
- Typing

**Multiple choice.** Is LearnOpenGL free?
- Yes ✓
- No
- Only for studios

## Linear algebra for quantum computing
- id: la23 · type: read · creator: Qiskit textbook and IBM Quantum Learning · length: about 5 hours
- access: free | free online

### Introduction
Quantum states are unit vectors of complex numbers and quantum gates are unitary matrices.

### Quiz
**Multiple choice.** What is a quantum state, mathematically?
- A unit vector ✓
- A single real number
- A picture

**Multiple choice.** What are quantum gates?
- Unitary matrices ✓
- Doors
- Wires only

**Multiple choice.** Which numbers do quantum states use?
- Complex numbers ✓
- Only whole numbers
- Letters

**Multiple choice.** Are these resources free?
- Yes ✓
- No
- Only for physicists

## Markov chains
- id: la24 · type: read · creator: Victor Powell and Lewis Lehe, *Markov Chains Explained Visually* · length: about 2 hours
- access: free | free online

### Introduction
A Markov chain moves between states with fixed probabilities; its long-run behaviour is an eigenvector of the transition matrix.

### Quiz
**Multiple choice.** What sets a Markov chain's moves?
- Fixed probabilities ✓
- Chance with no rules
- A clock only

**Multiple choice.** What describes its long-run behaviour?
- An eigenvector of the transition matrix ✓
- The determinant only
- Nothing

**Multiple choice.** Which ranking system is a Markov chain?
- PageRank ✓
- Alphabetical order
- Dictionary order

**Multiple choice.** Is the explainer free?
- Yes ✓
- No
- Only for mathematicians

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Run PCA on a small dataset and explain the components.
2. Build a rotation matrix and use it to rotate a shape.
3. Model a simple process as a Markov chain and find its steady state.

---

# Final mastery check

Finishing all six stages makes you fluent in linear algebra. To earn the **Ascent Mastery: Linear Algebra** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Problem set.** Solve unseen computational problems by hand.
3. **Proofs.** Write three proofs about vector spaces and linear maps.
4. **Capstone project.** Apply linear algebra to real data or a real system and write it up in 2,500 words. Strong projects are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “What is an eigenvector, really?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Calculus | Stage 3 | The Calculus path | Free + paid |
| Machine learning | Stage 6 | The Machine learning path | Free + paid |
| Quantum physics | Stage 4 | The Quantum physics path | Free + paid |

# Bridges to other subjects

- **Calculus:** multivariable calculus.
- **Computer science:** graphics and algorithms.
- **Physics:** quantum mechanics.
- **Statistics:** regression and data.
- **Economics:** input–output models.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by mathematicians and mathematics teachers from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
