---
path: Computer Graphics
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Computer Graphics

How computers make images: shaders, transforms and the graphics pipeline, rasterisation on GPUs, ray tracing and physically based light, geometry and shapes, and new neural methods for 3D scenes. About 150 to 200 hours over six to eight months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free books, lectures and browser tools cover the core, and everything runs in a web browser. You need some programming and basic vectors and matrices. You will write your own renderer along the way.

# About computer graphics

Computer graphics is the science of making images with computers, used in films, games, design, medicine, maps and science.

This path starts by drawing with shaders and lectures, learns the maths and pipeline behind 3D images, builds real-time rendering on GPUs, simulates light with ray tracing, studies geometry and shapes, and ends with neural scene representations and current research.

**Trivia**
- Ivan Sutherland's Sketchpad, in 1963, let people draw directly on a screen with a light pen.
- The Utah teapot, modelled in 1975, is still used as a standard test object.
- The authors of *Physically Based Rendering* won an Academy Award for scientific and technical achievement.
- Consumer graphics cards gained dedicated ray-tracing hardware in 2018.

### Timeline
- **1963 · Ivan Sutherland** builds Sketchpad.
- **1975 · Bui Tuong Phong** publishes the Phong shading model.
- **1975 · Martin Newell** models the Utah teapot.
- **1978 · Lance Williams** introduces shadow mapping.
- **1980 · Turner Whitted** shows recursive ray tracing.
- **1986 · James Kajiya** writes the rendering equation.
- **1987 · Lorensen and Cline** publish marching cubes.
- **1992 · OpenGL** becomes a standard graphics interface.
- **2020 · Neural radiance fields** learn 3D scenes from photos.
- **2023 · 3D Gaussian splatting** renders captured scenes in real time.

# What you will be able to do

At the end of this path you will know computer graphics the way a strong undergraduate course expects. You will be able to:

- **Use the maths of graphics:** vectors, matrices, transforms and projection.
- **Explain the graphics pipeline:** rasterisation, shading and the GPU.
- **Write shaders and renderers:** including a ray tracer from scratch.
- **Explain light transport:** the rendering equation and physically based materials.
- **Work with geometry:** meshes, implicit surfaces and new neural methods.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Graphics researchers and engineers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Drawing with code.
gate: Score 70% or more across this stage's quizzes.
covers: computer-graphics, 2d-graphics

Begin with a free book on shaders, a site for sharing them, the first interactive drawing system, and a university lecture series.

## The Book of Shaders
- id: cg1 · type: read · creator: Patricio Gonzalez Vivo and Jen Lowe · year: 2015 · length: about 10 hours
- access: free | free online

### Introduction
A gentle, interactive guide to fragment shaders: small programs that colour every pixel at once on the GPU.

### Quiz
**Multiple choice.** What do fragment shaders colour?
- Every pixel at once ✓
- One letter
- Nothing

**Multiple choice.** Where do they run?
- On the GPU ✓
- On paper
- On a printer only

**Multiple choice.** Who wrote the book?
- Gonzalez Vivo and Lowe ✓
- Shirley and Marschner
- Pharr and Jakob

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for artists

## Shadertoy
- id: cg2 · type: course · creator: Inigo Quilez and Pol Jeremias · year: 2013 · length: about 5 hours
- access: free | free online

### Introduction
A website where people write and share shaders that run live in the browser, from simple patterns to whole scenes.

### Quiz
**Multiple choice.** What do people share on the site?
- Shaders ✓
- Recipes
- Videos of cats

**Multiple choice.** Where do the shaders run?
- Live in the browser ✓
- Only on servers
- Nowhere

**Multiple choice.** Who created it?
- Quilez and Jeremias ✓
- Sutherland and Newell
- Lorensen and Cline

**Multiple choice.** Is “Shadertoy” free?
- Yes ✓
- No
- Only for professionals

## Sketchpad
- id: cg3 · type: read · creator: Ivan Sutherland · year: 1963 · length: about 3 hours
- access: free | free online

### Introduction
A thesis describing the first interactive drawing program, with a light pen, constraints and copies of shapes.

### Quiz
**Multiple choice.** What did users draw with?
- A light pen ✓
- A mouse
- A crayon

**Multiple choice.** Which feature did it introduce?
- Constraints on shapes ✓
- Colour printing
- Nothing

**Multiple choice.** Who built it?
- Ivan Sutherland ✓
- James Kajiya
- Turner Whitted

**Multiple choice.** When?
- 1963 ✓
- 1975
- 1986

## CS184: Computer Graphics and Imaging
- id: cg4 · type: watch · creator: Ren Ng, UC Berkeley · length: about 30 hours
- access: free | free online

### Introduction
A university course covering rasterisation, transforms, geometry, ray tracing, materials, cameras and animation.

### Quiz
**Multiple choice.** Which topic does the course cover?
- Ray tracing ✓
- Accounting
- Nothing

**Multiple choice.** Which university offers it?
- UC Berkeley ✓
- Oxford
- None

**Multiple choice.** Who teaches it?
- Ren Ng ✓
- Peter Shirley
- Keenan Crane

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only for students

---

# Stage 2: Maths and Shading
level: Explorer
intent: From points to pixels.
gate: Score 70% or more across this stage's quizzes.
covers: computer-graphics, linear-algebra

This stage covers a standard textbook, a renderer built from scratch, free lessons on the maths, and classic shading.

## Fundamentals of Computer Graphics
- id: cg5 · type: read · creator: Peter Shirley and Steve Marschner · year: 2002 · length: about 50 hours
- access: paid | buy, or borrow from a library

### Introduction
A standard textbook on transforms, viewing, rasterisation, shading, textures and ray tracing.

### Quiz
**Multiple choice.** What kind of book is it?
- A standard textbook ✓
- A novel
- A comic

**Multiple choice.** Which topic does it cover?
- Viewing and projection ✓
- Cooking
- Nothing

**Multiple choice.** Who wrote it?
- Shirley and Marschner ✓
- Gonzalez Vivo and Lowe
- Botsch and colleagues

**Multiple choice.** When was the first edition?
- 2002 ✓
- 1963
- 2023

## Tiny renderer
- id: cg6 · type: course · creator: Dmitry Sokolov · length: about 20 hours
- access: free | free online

### Introduction
Write a software renderer in a few hundred lines of code, drawing lines, triangles, depth and shading without any library.

### Quiz
**Multiple choice.** What do you write?
- A software renderer ✓
- A word processor
- A game engine with every feature

**Multiple choice.** Which library does it need?
- None ✓
- A huge engine
- Only a spreadsheet

**Multiple choice.** What do you draw first?
- Lines ✓
- Whole films
- Nothing

**Multiple choice.** Is “Tiny renderer” free?
- Yes ✓
- No
- Only for students

## Scratchapixel
- id: cg7 · type: read · creator: Scratchapixel · length: about 15 hours
- access: free | free online

### Introduction
Free lessons explaining the maths of graphics, from vectors and matrices to perspective projection and ray–triangle tests.

### Quiz
**Multiple choice.** What do the lessons explain?
- The maths of graphics ✓
- History of art
- Nothing

**Multiple choice.** Which topic is covered?
- Perspective projection ✓
- Cooking
- Nothing

**Multiple choice.** Which test is explained?
- Ray–triangle intersection ✓
- Blood tests
- None

**Multiple choice.** Is “Scratchapixel” free?
- Yes ✓
- No
- Only for members

## Illumination for computer generated pictures
- id: cg8 · type: read · creator: Bui Tuong Phong, with free explainers · year: 1975 · length: about 2 hours
- access: free | free online

### Introduction
A simple model of shading with ambient, diffuse and specular light, used for decades in real-time graphics.

### Quiz
**Multiple choice.** Which three parts make up the model?
- Ambient, diffuse and specular ✓
- Red, green and blue
- Up, down and left

**Multiple choice.** Where was it used for decades?
- Real-time graphics ✓
- Banking
- Nowhere

**Multiple choice.** Who introduced it?
- Bui Tuong Phong ✓
- Lance Williams
- Ivan Sutherland

**Multiple choice.** When was it published?
- 1975 ✓
- 1987
- 2020

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Derive a perspective projection matrix and test it.
2. Draw a shaded 3D model with your own renderer.
3. Explain each term of the Phong model with a photo.

---

# Stage 3: Real-Time Rendering
level: Reader
intent: Pictures at 60 frames a second.
gate: Score 70% or more across this stage's quizzes.
covers: computer-graphics, 3d-graphics, parallel-computing

This stage covers the GPU pipeline, a reference book, programming graphics in the browser, and shadows.

## A trip through the graphics pipeline
- id: cg9 · type: read · creator: Fabian Giesen · year: 2011 · length: about 5 hours
- access: free | free online

### Introduction
A detailed blog series on what really happens inside a GPU, from commands to pixels.

### Quiz
**Multiple choice.** What does the series explain?
- What happens inside a GPU ✓
- How to bake
- Nothing

**Multiple choice.** Where does the journey end?
- At pixels ✓
- At the keyboard
- Nowhere

**Multiple choice.** Who wrote “A trip through the graphics pipeline”?
- Fabian Giesen ✓
- Ren Ng
- Dmitry Sokolov

**Multiple choice.** Is “A trip through the graphics pipeline” free?
- Yes ✓
- No
- Only for engineers

## Real-Time Rendering
- id: cg10 · type: read · creator: Tomas Akenine-Möller, Eric Haines and Naty Hoffman · year: 1999 · length: about 60 hours
- access: paid | buy, or borrow from a library

### Introduction
The reference book on techniques used in games and interactive graphics, from shading to anti-aliasing.

### Quiz
**Multiple choice.** Where are its techniques used?
- Games and interactive graphics ✓
- Only in print
- Nowhere

**Multiple choice.** Which technique is covered?
- Anti-aliasing ✓
- Bookkeeping
- Nothing

**Multiple choice.** Who are the authors?
- Akenine-Möller, Haines and Hoffman ✓
- Shirley and Marschner
- Pharr, Jakob and Humphreys

**Multiple choice.** When was “Real-Time Rendering”?
- 1999 ✓
- 2011
- 1975

## WebGL Fundamentals
- id: cg11 · type: read · creator: Gregg Tavares · length: about 15 hours
- access: free | free online

### Introduction
Lessons on drawing 3D graphics in the browser with buffers, shaders, matrices and textures.

### Quiz
**Multiple choice.** Where does WebGL draw?
- In the browser ✓
- Only on paper
- Nowhere

**Multiple choice.** Which concept is taught?
- Textures ✓
- Taxes
- Nothing

**Multiple choice.** Who wrote the lessons?
- Gregg Tavares ✓
- Fabian Giesen
- Inigo Quilez

**Multiple choice.** Are they free?
- Yes ✓
- No
- Only for developers

## Casting curved shadows on curved surfaces
- id: cg12 · type: read · creator: Lance Williams, with free explainers · year: 1978 · length: about 2 hours
- access: free | free online

### Introduction
Shadow mapping renders the scene from the light, then checks depth to decide what is in shadow, still used in games.

### Quiz
**Multiple choice.** From where is the scene first rendered?
- From the light ✓
- From the floor
- From nowhere

**Multiple choice.** What is compared to find shadows?
- Depth ✓
- Colour only
- Nothing

**Multiple choice.** Who introduced the technique?
- Lance Williams ✓
- Bui Tuong Phong
- Turner Whitted

**Multiple choice.** When was “Casting curved shadows on curved surfaces” published?
- 1978 ✓
- 1999
- 2011

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Render a spinning textured cube in the browser.
2. Add shadow mapping and explain its artefacts.
3. Explain why GPUs are built for many small parallel tasks.

---

# Stage 4: Ray Tracing and Light
level: Connoisseur
intent: Simulating light.
gate: Score 70% or more across this stage's quizzes.
covers: computer-graphics, rendering

This stage covers a free ray tracer tutorial, the first recursive ray tracing, the rendering equation and physically based rendering.

## Ray Tracing in One Weekend
- id: cg13 · type: read · creator: Peter Shirley · year: 2016 · length: about 10 hours
- access: free | free online

### Introduction
Build a ray tracer step by step, with spheres, materials, glass and depth of field.

### Quiz
**Multiple choice.** What do you build?
- A ray tracer ✓
- A spreadsheet
- A web shop

**Multiple choice.** Which material appears?
- Glass ✓
- Cotton
- Nothing

**Multiple choice.** Who wrote “Ray Tracing in One Weekend”?
- Peter Shirley ✓
- James Kajiya
- Lance Williams

**Multiple choice.** Is “Ray Tracing in One Weekend” free?
- Yes ✓
- No
- Only at weekends

## An improved illumination model for shaded display
- id: cg14 · type: read · creator: Turner Whitted, with free explainers · year: 1980 · length: about 2 hours
- access: free | free online

### Introduction
Rays bounce recursively for reflection and refraction, producing realistic mirrors and glass.

### Quiz
**Multiple choice.** What do rays do recursively?
- Bounce for reflection and refraction ✓
- Stop at once
- Nothing

**Multiple choice.** What does this make realistic?
- Mirrors and glass ✓
- Sound
- Nothing

**Multiple choice.** Who introduced “An improved illumination model for shaded display”?
- Turner Whitted ✓
- Peter Shirley
- Martin Newell

**Multiple choice.** When was “An improved illumination model for shaded display” published?
- 1980 ✓
- 2016
- 1963

## The rendering equation
- id: cg15 · type: read · creator: James Kajiya, with free explainers · year: 1986 · length: about 3 hours
- access: free | free online

### Introduction
One equation describes how light leaving a point depends on light arriving from all directions; renderers approximate it.

### Quiz
**Multiple choice.** What does the equation describe?
- How light leaves a point ✓
- Population growth
- Nothing

**Multiple choice.** What do renderers do with it?
- Approximate it ✓
- Ignore it
- Nothing

**Multiple choice.** Who wrote “The rendering equation”?
- James Kajiya ✓
- Turner Whitted
- Bui Tuong Phong

**Multiple choice.** When was “The rendering equation” published?
- 1986 ✓
- 1980
- 2002

## Physically Based Rendering
- id: cg16 · type: read · creator: Matt Pharr, Wenzel Jakob and Greg Humphreys · year: 2004 · length: about 80 hours
- access: free | free online

### Introduction
A complete renderer explained in full, from cameras and materials to Monte Carlo light transport.

### Quiz
**Multiple choice.** What does the book explain in full?
- A complete renderer ✓
- A database
- Nothing

**Multiple choice.** Which method simulates light?
- Monte Carlo light transport ✓
- Guessing
- Nothing

**Multiple choice.** Who wrote *Physically Based Rendering*?
- Pharr, Jakob and Humphreys ✓
- Akenine-Möller and Haines
- Lorensen and Cline

**Multiple choice.** Is the current edition free online?
- Yes ✓
- No
- Only in print

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Extend your ray tracer with a new material.
2. Explain why path tracing images look noisy.
3. Compare rasterisation and ray tracing for a game.

---

# Stage 5: Geometry and Shape
level: Specialist
intent: Meshes and surfaces.
gate: Score 70% or more across this stage's quizzes.
covers: computer-graphics, differential-geometry

This stage covers geometry on meshes, mesh processing, building surfaces from scans, and shapes defined by distance.

## Discrete Differential Geometry
- id: cg17 · type: watch · creator: Keenan Crane, Carnegie Mellon University · length: about 20 hours
- access: free | free online

### Introduction
Lectures and notes on curvature and smoothness for triangle meshes, with applications to graphics and geometry.

### Quiz
**Multiple choice.** What do the lectures study on meshes?
- Curvature and smoothness ✓
- Prices
- Nothing

**Multiple choice.** Which shape do meshes use?
- Triangles ✓
- Musical notes
- Nothing

**Multiple choice.** Who teaches “Discrete Differential Geometry”?
- Keenan Crane ✓
- Ren Ng
- Gregg Tavares

**Multiple choice.** Is “Discrete Differential Geometry” free?
- Yes ✓
- No
- Only for students

## Polygon Mesh Processing
- id: cg18 · type: read · creator: Mario Botsch, Leif Kobbelt, Mark Pauly, Pierre Alliez and Bruno Lévy · year: 2010 · length: about 25 hours
- access: paid | buy, or borrow from a library

### Introduction
Methods for smoothing, simplifying, remeshing and repairing meshes used in games, films and 3D scanning.

### Quiz
**Multiple choice.** Which operation is covered?
- Simplifying meshes ✓
- Painting walls
- Nothing

**Multiple choice.** Where are these methods used?
- Games, films and 3D scanning ✓
- Banking
- Nowhere

**Multiple choice.** Who is the lead author?
- Mario Botsch ✓
- James Kajiya
- Peter Shirley

**Multiple choice.** When was “Polygon Mesh Processing” published?
- 2010 ✓
- 1987
- 2023

## Marching cubes
- id: cg19 · type: read · creator: William Lorensen and Harvey Cline, with free explainers · year: 1987 · length: about 2 hours
- access: free | free online

### Introduction
An algorithm that builds a triangle surface from 3D scan data, first used for medical images.

### Quiz
**Multiple choice.** What does the algorithm build?
- A triangle surface ✓
- A spreadsheet
- Nothing

**Multiple choice.** From what kind of data?
- 3D scan data ✓
- Sound files
- Text

**Multiple choice.** Where was it first used?
- Medical images ✓
- Banking
- Weather

**Multiple choice.** Who introduced “Marching cubes”?
- Lorensen and Cline ✓
- Pharr and Jakob
- Quilez and Jeremias

## Distance functions
- id: cg20 · type: read · creator: Inigo Quilez · length: about 3 hours
- access: free | free online

### Introduction
Shapes defined by their distance from any point can be combined, blended and ray-marched in a single shader.

### Quiz
**Multiple choice.** How are these shapes defined?
- By distance from any point ✓
- By colour
- By name

**Multiple choice.** How are they drawn?
- By ray marching ✓
- By hand
- Not at all

**Multiple choice.** Who wrote the articles?
- Inigo Quilez ✓
- Keenan Crane
- Mario Botsch

**Multiple choice.** Is “Distance functions” free?
- Yes ✓
- No
- Only for members

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Model a scene using distance functions in one shader.
2. Smooth a noisy scanned mesh and compare methods.
3. Explain curvature to a friend using a ball and a saddle.

---

# Stage 6: Neural Graphics and Research
level: Expert
intent: Learning scenes.
gate: Score 70% or more across this stage's quizzes.
covers: computer-graphics, computer-vision

The final stage covers learning 3D scenes from photos, fast splatting, the main conference, and current research.

## NeRF: Representing scenes as neural radiance fields
- id: cg21 · type: read · creator: Ben Mildenhall and colleagues · year: 2020 · length: about 3 hours
- access: free | free online

### Introduction
A neural network learns colour and density everywhere in a scene from photos, then renders new views.

### Quiz
**Multiple choice.** What does the network learn?
- Colour and density in a scene ✓
- Stock prices
- Nothing

**Multiple choice.** From what input?
- Photos ✓
- Text only
- Nothing

**Multiple choice.** What can it render?
- New views ✓
- Music
- Nothing

**Multiple choice.** When was “NeRF: Representing scenes as neural radiance fields” published?
- 2020 ✓
- 2023
- 1986

## 3D Gaussian splatting
- id: cg22 · type: read · creator: Bernhard Kerbl and colleagues · year: 2023 · length: about 3 hours
- access: free | free online

### Introduction
Scenes made of millions of soft 3D blobs render captured places in real time with high quality.

### Quiz
**Multiple choice.** What are the scenes made of?
- Millions of soft 3D blobs ✓
- Bricks
- Nothing

**Multiple choice.** How fast do they render?
- In real time ✓
- Over weeks
- Never

**Multiple choice.** Who led the Gaussian splatting paper?
- Bernhard Kerbl ✓
- Ben Mildenhall
- Turner Whitted

**Multiple choice.** When was “3D Gaussian splatting” published?
- 2023 ✓
- 2020
- 2010

## SIGGRAPH
- id: cg23 · type: read · creator: ACM SIGGRAPH · year: 1974 · length: about 3 hours
- access: free-and-paid | many talks and papers are free

### Introduction
The main graphics conference, where new research, film techniques and real-time demos are presented each year.

### Quiz
**Multiple choice.** What is SIGGRAPH?
- The main graphics conference ✓
- A camera brand
- A shader

**Multiple choice.** What is presented there?
- Research and demos ✓
- Only fashion
- Nothing

**Multiple choice.** Who runs it?
- ACM SIGGRAPH ✓
- A bank
- A newspaper

**Multiple choice.** When did the conference begin?
- 1974 ✓
- 2013
- 1999

## Reading current research
- id: cg24 · type: read · creator: *ACM Transactions on Graphics* and arXiv cs.GR · length: ongoing
- access: free-and-paid | preprints are free

### Introduction
Choose a question from this path and read a recent paper, noting its results images, speed and limitations.

### Quiz
**Multiple choice.** What should you note in a graphics paper?
- Results, speed and limitations ✓
- Only the title
- Nothing

**Multiple choice.** Which journal publishes SIGGRAPH papers?
- *ACM Transactions on Graphics* ✓
- *Vogue*
- *The Lancet*

**Multiple choice.** Where are preprints posted?
- arXiv cs.GR ✓
- A cookbook
- Nowhere

**Multiple choice.** Are preprints free?
- Yes ✓
- No
- Only for members

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Capture a small scene and view it with a splatting tool.
2. Compare neural and traditional rendering for one task.
3. Summarise a recent graphics paper for a general reader.

---

# Final mastery check

Finishing all six stages makes you a capable student of computer graphics. To earn the **Ascent Mastery: Computer Graphics** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Renderer.** Build a working ray tracer or rasteriser from scratch.
3. **Shader project.** Create an original shader scene and explain its maths.
4. **Capstone essay.** 2,500 words on one of the Stage 6 questions. Strong essays are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “How does a game draw a shadow?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Linear algebra | Stage 2 | The Linear algebra path | Free + paid |
| Animation | Stage 5 | The Animation path | Free + paid |
| Optics | Stage 4 | The Optics path | Free + paid |

# Bridges to other subjects

- **Mathematics:** geometry and linear algebra.
- **Physics:** light and optics.
- **Art and design:** images and film.
- **Computer vision:** 3D from photos.
- **Games:** real-time worlds.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by graphics researchers and engineers from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
