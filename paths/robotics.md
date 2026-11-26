---
path: Robotics
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Robotics

How machines sense, think and move: the history of robots, kinematics and motion, sensors and control, perception and mapping, robot learning, and robots in factories, homes, hospitals, space and war, with the ethics of automation. About 250 to 300 hours over ten to twelve months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free university courses, simulators and open-source software (ROS) cover the core, and you can learn a great deal without buying hardware. The path presents debates about jobs, safety and autonomous weapons fairly.

# About robotics

Robotics combines mechanical engineering, electronics and computer science to build machines that sense their surroundings, decide what to do, and act in the physical world. Robots now weld cars, explore Mars, assist surgeons, vacuum floors and deliver parcels.

This path begins with the history and wonder of robots, teaches the maths of motion, explains sensors and control, explores perception, mapping and navigation, introduces robot learning, and ends with robots in society and their ethics.

**Trivia**
- The word “robot” comes from Karel Čapek's 1920 Czech play *R.U.R.*, from *robota*, meaning forced labour.
- Unimate, the first industrial robot, began work at a General Motors plant in 1961.
- NASA's Perseverance rover landed on Mars in 2021 carrying Ingenuity, the first aircraft to fly on another planet.
- There were over 4 million industrial robots operating in factories worldwide by 2023.

### Timeline
- **c. 1206 · Al-Jazari** describes programmable automata.
- **1920 · Karel Čapek's *R.U.R.*** coins the word “robot”.
- **1942 · Isaac Asimov** states his Three Laws of Robotics in fiction.
- **1961 · Unimate** starts work at General Motors.
- **1966–72 · Shakey** the first mobile robot to reason about its actions, at SRI.
- **1997 · Sojourner** roves on Mars.
- **2000 · The da Vinci surgical system** is approved in the US.
- **2002 · Roomba** brings robots into homes.
- **2007 · ROS** the Robot Operating System, begins.
- **2021 · Ingenuity** flies on Mars.

# What you will be able to do

At the end of this path you will know robotics the way a strong first year of a university robotics course expects. You will be able to:

- **Describe robot motion:** coordinate frames, kinematics and trajectories.
- **Explain sensing and control:** sensors, actuators and feedback (PID) control.
- **Explain perception and navigation:** vision, localisation and mapping (SLAM).
- **Program a simple robot:** in a simulator with ROS or Python.
- **Weigh robots in society:** jobs, safety, care and autonomous weapons.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Robotics engineers and researchers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: What robots are and can do.
gate: Score 70% or more across this stage's quizzes.
covers: robotics-and-automation, robotics-and-intelligent-agents, mechatronics

Robotics hooks people with machines that move. This stage gives you the play that named robots, a free introductory course, a history of robots, and a robot you can program in a browser.

## R.U.R. (Rossum's Universal Robots)
- id: rb1 · type: read · creator: Karel Čapek · year: 1920 · length: about 3 hours
- access: free | free online (out of copyright translations)

### Introduction
The Czech play that coined the word “robot”: artificial workers built in a factory rise up against their makers.

### Quiz
**Multiple choice.** What word did the play coin?
- Robot ✓
- Computer
- Android

**Multiple choice.** What does *robota* mean in Czech?
- Forced labour ✓
- Machine
- Metal

**Multiple choice.** What do the robots do in the play?
- Rise up against their makers ✓
- Fly to the Moon
- Nothing

**Fill in the blank.** The play was written in ___. [answer: 1920]

## Introduction to Robotics
- id: rb2 · type: course · creator: QUT Robot Academy (Peter Corke) · length: about 15 hours
- access: free | free online

### Introduction
Free short video lessons on robot arms, mobile robots, vision and control by a leading robotics professor.

### Quiz
**Multiple choice.** Who teaches Robot Academy?
- Peter Corke ✓
- Isaac Asimov
- Karel Čapek

**Multiple choice.** Which robots does it cover?
- Robot arms and mobile robots ✓
- Only toys
- None

**Multiple choice.** What format are the lessons?
- Short videos ✓
- Long novels
- Podcasts only

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for students

## Robots: a history
- id: rb3 · type: read · creator: IEEE Spectrum's ROBOTS guide and the Science Museum · length: about 4 hours
- access: free | free online

### Introduction
A free illustrated guide to hundreds of real robots, from industrial arms to humanoids and Mars rovers, with videos.

### Quiz
**Multiple choice.** Who runs the ROBOTS guide?
- IEEE Spectrum ✓
- NASA only
- A toy shop

**Multiple choice.** Which robot began work at General Motors in 1961?
- Unimate ✓
- Roomba
- ASIMO

**Multiple choice.** What is a humanoid?
- A robot shaped like a human ✓
- A robot arm
- A drone

**Multiple choice.** Is the guide free?
- Yes ✓
- No
- Only for engineers

## Program a robot in your browser
- id: rb4 · type: course · creator: Open Roberta Lab or Webots online · length: about 6 hours
- access: free | free online

### Introduction
Program a simulated robot with blocks or Python: move, turn, follow a line and avoid obstacles.

### Quiz
**Multiple choice.** What is a simulator?
- Software that imitates a robot and its world ✓
- A real robot
- A game controller

**Multiple choice.** Why use a simulator first?
- It is safe and free ✓
- Real robots are illegal
- No reason

**Multiple choice.** What task is common for beginners?
- Following a line ✓
- Building a house
- Writing a novel

**Multiple choice.** Is “Program a robot in your browser” free?
- Yes ✓
- No
- Only for schools

---

# Stage 2: Motion: Kinematics and Dynamics
level: Explorer
intent: The maths of moving.
gate: Score 70% or more across this stage's quizzes.
covers: robotics-and-automation, mechatronics, control-engineering

This stage teaches the maths of motion: coordinate frames and transformations, forward and inverse kinematics, mobile robot motion, and dynamics.

## Modern Robotics
- id: rb5 · type: read · creator: Kevin M. Lynch and Frank C. Park · year: 2017 · length: about 30 hours for selected chapters
- access: free | free PDF and videos from Northwestern University

### Introduction
A university textbook with free videos on configuration space, rigid-body motion, forward and inverse kinematics and dynamics.

### Quiz
**Multiple choice.** What is forward kinematics?
- Finding where the tool is from the joint angles ✓
- Finding joint angles from position
- Building motors

**Multiple choice.** What is inverse kinematics?
- Finding joint angles to reach a position ✓
- Moving backwards
- Turning off

**Multiple choice.** What is a degree of freedom?
- An independent way a robot can move ✓
- A holiday
- A legal right

**Multiple choice.** Is the book free?
- Yes, as a PDF ✓
- No
- Only in print

## Rotations and transformations
- id: rb6 · type: course · creator: 3Blue1Brown linear algebra and Khan Academy · length: about 8 hours
- access: free | free online

### Introduction
Robots describe positions and orientations with vectors and matrices. Learn linear transformations and rotation matrices.

### Quiz
**Multiple choice.** What do rotation matrices describe?
- Orientation ✓
- Colour
- Price

**Multiple choice.** Which maths is essential for robot motion?
- Linear algebra ✓
- Only arithmetic
- Poetry

**Multiple choice.** What is a coordinate frame?
- A reference for describing positions ✓
- A picture frame
- A timetable

**Multiple choice.** Are the lessons free?
- Yes ✓
- No
- Only for students

## Mobile robot motion
- id: rb7 · type: read · creator: Roland Siegwart, Illah Nourbakhsh and Davide Scaramuzza, *Introduction to Autonomous Mobile Robots* · year: 2011 · length: about 15 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
How wheeled and legged robots move: wheel configurations, differential drive, and why a car can't move sideways.

### Quiz
**Multiple choice.** What is differential drive?
- Steering by driving two wheels at different speeds ✓
- A car engine
- A sideways wheel

**Multiple choice.** Can an ordinary car move directly sideways?
- No ✓
- Yes
- Only uphill

**Multiple choice.** Which robots does the book cover?
- Wheeled and legged mobile robots ✓
- Only arms
- Only drones

**Fill in the blank.** The second edition was published in ___. [answer: 2011]

## Robot dynamics and why legs are hard
- id: rb8 · type: watch · creator: MIT OpenCourseWare Underactuated Robotics (Russ Tedrake) · length: about 10 hours for selected lectures
- access: free | free online

### Introduction
Free lectures on dynamics: forces, torques and balance, and why walking and running robots are so difficult to control.

### Quiz
**Multiple choice.** What does dynamics study?
- Forces and torques causing motion ✓
- Only positions
- Software

**Multiple choice.** Why are legged robots hard?
- Balance and contact are difficult to control ✓
- Legs are cheap
- They aren't

**Multiple choice.** Who teaches the course?
- Russ Tedrake ✓
- Isaac Asimov
- Peter Corke

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at MIT

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Solve forward kinematics for a two-joint arm.
2. Why is inverse kinematics harder than forward? Use Lynch and Park.
3. Why did walking robots take so long? Use Tedrake.

---

# Stage 3: Sensors, Actuators and Control
level: Reader
intent: Sensing and feedback.
gate: Score 70% or more across this stage's quizzes.
covers: control-engineering, mechatronics, robotics-and-automation

This stage studies the robot's senses and muscles: sensors, motors, feedback control and PID, and building with Arduino.

## Robot sensors
- id: rb9 · type: read · creator: Siegwart and colleagues (sensors chapter); manufacturers' guides · length: about 5 hours
- access: free-and-paid | guides are free

### Introduction
Encoders measure wheel turns, IMUs measure acceleration and rotation, lidar and sonar measure distance, and cameras capture images.

### Quiz
**Multiple choice.** What does an encoder measure?
- How far a wheel or joint has turned ✓
- Temperature
- Sound

**Multiple choice.** What does lidar measure?
- Distance using laser light ✓
- Weight
- Colour only

**Multiple choice.** What does an IMU measure?
- Acceleration and rotation ✓
- Distance to the Moon
- Money

**Multiple choice.** Are manufacturers' guides free?
- Yes ✓
- No
- Only for buyers

## Feedback control and PID
- id: rb10 · type: course · creator: Brian Douglas's Control System Lectures and MATLAB Tech Talks · length: about 8 hours
- access: free | free online

### Introduction
Feedback control compares where a robot is with where it should be and corrects the difference. PID control uses proportional, integral and derivative terms.

### Quiz
**Multiple choice.** What does feedback control correct?
- The difference between actual and desired state ✓
- Spelling
- Nothing

**Multiple choice.** What does PID stand for?
- Proportional, integral, derivative ✓
- Power, input, drive
- Position, inertia, distance

**Multiple choice.** What can too much proportional gain cause?
- Oscillation ✓
- Nothing
- Perfect control

**Multiple choice.** Is “Feedback control and PID” free?
- Yes ✓
- No
- Only for engineers

## Motors and actuators
- id: rb11 · type: read · creator: Adafruit Learning System and SparkFun tutorials · length: about 4 hours
- access: free | free online

### Introduction
DC motors, servos and stepper motors: how they work and when to use each. Hydraulic and pneumatic actuators power heavy and soft robots.

### Quiz
**Multiple choice.** Which motor moves to a set angle?
- A servo ✓
- A fan
- A generator

**Multiple choice.** Which motor moves in precise steps?
- A stepper motor ✓
- A jet engine
- A DC motor only

**Multiple choice.** What powers many heavy robots?
- Hydraulics ✓
- Batteries alone always
- Springs

**Multiple choice.** Are the tutorials free?
- Yes ✓
- No
- Only for customers

## Build with Arduino
- id: rb12 · type: course · creator: Arduino Project Hub and Tinkercad Circuits (simulated) · length: about 10 hours
- access: free-and-paid | Tinkercad simulation is free; hardware is paid

### Introduction
Build a simple robot, in simulation or with cheap hardware: read a sensor, drive a motor, and close the loop.

### Quiz
**Multiple choice.** What is Arduino?
- A small programmable microcontroller board ✓
- A robot brand only
- A language

**Multiple choice.** Can you simulate circuits free?
- Yes, with Tinkercad ✓
- No
- Only in labs

**Multiple choice.** What does “closing the loop” mean?
- Using sensor feedback to control the motor ✓
- Turning it off
- Nothing

**Multiple choice.** Is the simulator free?
- Yes ✓
- No
- Only for teachers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Tune a PID controller in a simulator and explain what each term does.
2. Which sensors would a delivery robot need, and why?
3. Build and describe a simple feedback system.

---

# Stage 4: Perception, Mapping and Navigation
level: Connoisseur
intent: Seeing, mapping and finding the way.
gate: Score 70% or more across this stage's quizzes.
covers: robotics-and-intelligent-agents, robotics-and-automation, computer-vision

This stage studies how robots understand the world: computer vision, probabilistic robotics, SLAM, and path planning.

## Probabilistic Robotics
- id: rb13 · type: read · creator: Sebastian Thrun, Wolfram Burgard and Dieter Fox · year: 2005 · length: about 25 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
The classic text on handling uncertainty: robots never know exactly where they are, so they estimate with probability, using Kalman and particle filters.

### Quiz
**Multiple choice.** Why do robots use probability?
- They never know exactly where they are ✓
- For gambling
- It's required by law

**Multiple choice.** Which filter is a classic method?
- The Kalman filter ✓
- A coffee filter
- An email filter

**Multiple choice.** What is a particle filter?
- A method estimating position with many guesses ✓
- A dust filter
- A paint

**Fill in the blank.** *Probabilistic Robotics* was published in ___. [answer: 2005]

## SLAM: simultaneous localisation and mapping
- id: rb14 · type: course · creator: Cyrill Stachniss's free lectures (University of Bonn) · length: about 10 hours
- access: free | free online

### Introduction
How a robot builds a map of an unknown place while working out where it is on that map, the key problem for robot vacuum cleaners and self-driving cars.

### Quiz
**Multiple choice.** What does SLAM stand for?
- Simultaneous localisation and mapping ✓
- Super Lidar Automatic Motion
- Slow landing

**Multiple choice.** Why is SLAM hard?
- Map and position depend on each other ✓
- It is easy
- Maps are free

**Multiple choice.** Which everyday robot uses SLAM?
- Robot vacuum cleaners ✓
- Toasters
- Bicycles

**Multiple choice.** Is “SLAM: simultaneous localisation and mapping” free?
- Yes ✓
- No
- Only in Bonn

## Path planning
- id: rb15 · type: read · creator: Steven M. LaValle, *Planning Algorithms* · year: 2006 · length: about 15 hours for selected chapters
- access: free | free online from the author

### Introduction
How robots plan routes around obstacles: grid search such as A*, and sampling-based planners such as RRT for robot arms.

### Quiz
**Multiple choice.** What is A*?
- A search algorithm for shortest paths ✓
- A grade
- A star

**Multiple choice.** What is RRT?
- A sampling-based planning method ✓
- A robot brand
- A sensor

**Multiple choice.** What does path planning avoid?
- Obstacles ✓
- Destinations
- Nothing

**Multiple choice.** Is the book free online?
- Yes ✓
- No
- Only in print

## Computer vision for robots
- id: rb16 · type: course · creator: OpenCV tutorials and First Principles of Computer Vision (Shree Nayar) · length: about 12 hours
- access: free | free online

### Introduction
How robots find edges, features and objects in images, and estimate depth from two cameras.

### Quiz
**Multiple choice.** What is OpenCV?
- A free computer vision library ✓
- A camera brand
- A robot

**Multiple choice.** How can two cameras help?
- They let a robot estimate depth ✓
- They double the price only
- They don't

**Multiple choice.** What is a feature in an image?
- A distinctive point or pattern ✓
- A film
- A sticker

**Multiple choice.** Are the resources free?
- Yes ✓
- No
- Only for students

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Explain SLAM to a friend. Use Stachniss's lectures.
2. Plan a path for a robot with A* by hand on a small grid.
3. Why do robots need probability? Use Thrun, Burgard and Fox.

---

# Stage 5: Robot Software and Learning
level: Specialist
intent: ROS, simulation and learning.
gate: Score 70% or more across this stage's quizzes.
covers: robotics-and-intelligent-agents, machine-learning, robotics-and-automation

This stage studies robot software: ROS, simulation, reinforcement learning, and learning from demonstration.

## ROS 2 tutorials
- id: rb17 · type: course · creator: Open Robotics (docs.ros.org) · year: 2007 onwards · length: about 20 hours
- access: free | free online

### Introduction
The Robot Operating System is free software used by researchers and companies worldwide. Learn nodes, topics and messages in simulation.

### Quiz
**Multiple choice.** What is ROS?
- Free software for building robot applications ✓
- A robot
- A company

**Multiple choice.** What is a ROS node?
- A program that does one job ✓
- A knot
- A sensor

**Multiple choice.** How do nodes communicate?
- Through topics and messages ✓
- By shouting
- They don't

**Multiple choice.** Is ROS free?
- Yes ✓
- No
- Only for companies

## Gazebo and Webots simulation
- id: rb18 · type: course · creator: Open Robotics and Cyberbotics · length: about 8 hours
- access: free | free online

### Introduction
Physics simulators let you test robots safely before building them. Many real robots are first developed entirely in simulation.

### Quiz
**Multiple choice.** What do physics simulators let you do?
- Test robots safely ✓
- Bake bread
- Nothing

**Multiple choice.** What is the “sim-to-real gap”?
- Differences between simulation and the real world ✓
- A shop
- A bridge

**Multiple choice.** Are Gazebo and Webots free?
- Yes ✓
- No
- Only for students

**Multiple choice.** Why simulate first?
- It saves time, money and risk ✓
- It is required
- No reason

## Reinforcement learning for robots
- id: rb19 · type: course · creator: Hugging Face Deep RL course and OpenAI Spinning Up · length: about 20 hours
- access: free | free online

### Introduction
In reinforcement learning, a robot learns by trial and error, earning rewards for good actions. It has taught robots to walk and manipulate objects, mostly in simulation.

### Quiz
**Multiple choice.** How does reinforcement learning work?
- Learning by trial and error with rewards ✓
- Copying a book
- Random only

**Multiple choice.** Where is most robot RL training done?
- In simulation ✓
- In shops
- Nowhere

**Multiple choice.** What has RL taught robots?
- To walk and manipulate objects ✓
- To write novels
- Nothing

**Multiple choice.** Are the courses free?
- Yes ✓
- No
- Only for companies

## Learning from demonstration and foundation models for robots
- id: rb20 · type: read · creator: Research summaries from Google DeepMind (RT-2), Stanford and Berkeley · year: 2023 onwards · length: about 4 hours
- access: free | free online

### Introduction
Robots can learn tasks by watching people, and new models combine language, vision and action. Generalising to messy real homes remains hard.

### Quiz
**Multiple choice.** How can robots learn from people?
- By watching demonstrations ✓
- By reading minds
- They can't

**Multiple choice.** What do new models combine?
- Language, vision and action ✓
- Only sound
- Nothing

**Multiple choice.** What remains hard?
- Generalising to messy real homes ✓
- Nothing
- Moving at all

**Multiple choice.** Are the summaries free?
- Yes ✓
- No
- Only for researchers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Build a simple ROS 2 system in simulation and describe it.
2. Why is the sim-to-real gap a problem? Use the simulator docs and RL course.
3. Will general-purpose home robots arrive soon? Use the research summaries.

---

# Stage 6: Robots in Society
level: Expert
intent: Work, care, space, war and ethics.
gate: Score 70% or more across this stage's quizzes.
covers: robotics-and-automation, robotics-and-intelligent-agents, technology-ethics

The final stage looks at robots in the world: jobs and automation, robots in care and surgery, autonomous weapons, and reading research yourself.

## Robots and jobs
- id: rb21 · type: read · creator: Acemoglu and Restrepo (2020); IFR World Robotics; David Autor's work · year: 2020 onwards · length: about 6 hours
- access: free-and-paid | summaries are free

### Introduction
Research finds industrial robots reduced employment and wages in some local areas, while overall effects depend on new tasks created. Over 4 million industrial robots work worldwide.

### Quiz
**Multiple choice.** What did Acemoglu and Restrepo find?
- Robots reduced jobs and wages in some areas ✓
- No effect at all
- Robots raised all wages

**Multiple choice.** What can offset job losses?
- New tasks being created ✓
- Nothing
- More robots only

**Multiple choice.** Roughly how many industrial robots work worldwide?
- Over 4 million ✓
- About 4,000
- None

**Multiple choice.** Is “Robots and jobs” free?
- Yes ✓
- No
- Only for economists

## Robots in surgery and care
- id: rb22 · type: read · creator: Medical robotics reviews; Japan's care robot programmes · length: about 4 hours
- access: free | free online

### Introduction
Surgical robots such as da Vinci assist surgeons with precise movements; care robots are being tested for ageing societies such as Japan, with mixed results.

### Quiz
**Multiple choice.** What does a surgical robot like da Vinci do?
- Assists surgeons with precise movements ✓
- Operates alone
- Cleans hospitals only

**Multiple choice.** Why is Japan testing care robots?
- Its population is ageing ✓
- It has no people
- For fun

**Multiple choice.** What have results been?
- Mixed ✓
- Perfect
- None

**Multiple choice.** Are the reviews free?
- Yes ✓
- No
- Only for doctors

## Autonomous weapons debate
- id: rb23 · type: read · creator: ICRC position; UN Convention on Certain Conventional Weapons talks; Paul Scharre, *Army of None* · year: 2018 onwards · length: about 10 hours
- access: free-and-paid | ICRC and UN materials are free; the book is paid

### Introduction
Should weapons that select and attack targets without human control be banned? The ICRC calls for new rules; states disagree.

### Quiz
**Multiple choice.** What are autonomous weapons?
- Weapons that select and attack targets without human control ✓
- Robot toys
- Drones flown by pilots

**Multiple choice.** What does the ICRC call for?
- New international rules ✓
- No rules
- More weapons

**Multiple choice.** Do states agree?
- No ✓
- Yes
- There are no talks

**Multiple choice.** Who wrote *Army of None*?
- Paul Scharre ✓
- Isaac Asimov
- Karel Čapek

## Reading current research
- id: rb24 · type: read · creator: IEEE Spectrum, arXiv (cs.RO) and robotics conference videos · length: ongoing
- access: free-and-paid | arXiv and many videos are free

### Introduction
Choose a question from this path and find three recent pieces: a paper, a demo video, and a news story. Check whether the demo was autonomous or remotely controlled, and how often it failed.

### Quiz
**Multiple choice.** Why check if a demo was autonomous?
- Some demos are remotely controlled ✓
- All demos are autonomous
- It isn't important

**Multiple choice.** What is arXiv?
- A free server of research preprints ✓
- A robot
- A shop

**Multiple choice.** Why ask how often it failed?
- Demo videos often show the best attempt ✓
- Robots never fail
- No reason

**Multiple choice.** Is arXiv free?
- Yes ✓
- No
- Only for researchers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Will robots take jobs or change them? Use Acemoglu and Restrepo.
2. Should autonomous weapons be banned? Use the ICRC and Scharre.
3. Should robots care for elderly people? Weigh the evidence and ethics.

---

# Final mastery check

Finishing all six stages makes you a capable student of robotics. To earn the **Ascent Mastery: Robotics** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Simulation project.** Program a simulated robot to navigate a maze and explain your approach.
3. **Kinematics problem.** Solve forward and inverse kinematics for a simple arm.
4. **Capstone essay.** 2,500 words on one of the Stage 6 questions. Strong essays are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a curious friend. For example: “Why can't robots fold laundry well?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Engineering | Stage 3 | The Engineering path | Free + paid |
| Artificial intelligence | Stage 5 | The Artificial intelligence path | Free + paid |
| Space exploration | Stage 4 | The Space exploration path | Free + paid |

# Bridges to other subjects

- **Mathematics:** linear algebra and probability.
- **Physics:** motion and forces.
- **Computer science:** algorithms.
- **AI:** learning.
- **Ethics:** automation and weapons.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by robotics engineers and researchers from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
