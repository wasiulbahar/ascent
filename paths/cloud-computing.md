---
path: Cloud Computing
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Cloud Computing

How the computers behind the internet are rented, run and scaled: data centres and cloud models, virtual machines, containers and storage, the distributed systems ideas underneath, infrastructure as code and serverless, security, cost and outages, and the energy and sovereignty questions clouds raise. About 180 to 220 hours over seven to nine months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free courses from the major providers, classic papers, open-source tools and university lectures cover the core. You need basic programming and command-line skills. Cloud accounts can cost money: use free tiers, set budget alerts, and delete what you create.

# About cloud computing

Cloud computing lets people rent computing power, storage and services over the internet instead of owning servers. It runs most of the apps and websites people use and much of the world's AI.

This path starts with what clouds are and the warehouse-sized computers behind them, teaches virtual machines, containers, storage and networks, explains the distributed systems ideas underneath, covers automation, serverless and good architecture, examines security, cost and outages, and ends with energy, data sovereignty and research.

**Trivia**
- In 1961 John McCarthy suggested computing might one day be sold as a public utility, like electricity.
- A mistyped command during maintenance caused a major Amazon S3 outage in 2017 that disrupted many websites.
- Kubernetes is Greek for “helmsman” or “pilot”, which is why its logo is a ship's wheel.
- Data centres use roughly 1.5% of the world's electricity, and AI is increasing that demand.

### Timeline
- **1961 · John McCarthy** imagines computing as a utility.
- **1999 · Salesforce** launches software delivered over the internet.
- **2003 · Google** publishes the Google File System paper.
- **2004 · Google** publishes MapReduce.
- **2006 · Amazon Web Services** launches S3 storage and EC2 virtual machines.
- **2013 · Docker** popularises containers.
- **2014 · Kubernetes and AWS Lambda** are released.
- **2017 · An Amazon S3 outage** disrupts much of the web.
- **2020 · The EU Court of Justice** rules on data transfers in Schrems II.

# What you will be able to do

At the end of this path you will work with the cloud the way a capable junior cloud engineer does. You will be able to:

- **Explain cloud models:** IaaS, PaaS, SaaS, public and private clouds, and shared responsibility.
- **Use building blocks:** virtual machines, containers, Kubernetes, storage and networks.
- **Explain distributed systems:** replication, consensus and large-scale data processing.
- **Operate reliably:** infrastructure as code, serverless, observability and good architecture.
- **Manage risk:** security, cost, outages, energy use and data sovereignty.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Cloud engineers and computer science educators from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: What the cloud really is.
gate: Score 70% or more across this stage's quizzes.
covers: cloud-computing, distributed-systems

Begin with what clouds are made of and how they are defined, with free introductory courses from the major providers.

## The Datacenter as a Computer
- id: cc1 · type: read · creator: Luiz André Barroso and Urs Hölzle (Google) · year: 2009 · length: about 10 hours
- access: free | free online

### Introduction
Explains warehouse-scale computers: how huge data centres act as one machine, and how they handle power, cooling and failures.

### Quiz
**Multiple choice.** What does the book describe?
- Warehouse-scale computers ✓
- Home computers
- Phones

**Multiple choice.** Which challenge do data centres handle?
- Cooling ✓
- Gardening
- Nothing

**Multiple choice.** Which company did the authors work for?
- Google ✓
- Amazon
- Microsoft

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for staff

## AWS Cloud Practitioner Essentials
- id: cc2 · type: course · creator: Amazon Web Services · length: about 6 hours
- access: free | free online

### Introduction
A free introductory course on cloud concepts, core services, security, pricing and support.

### Quiz
**Multiple choice.** Which topic does the course cover?
- Pricing ✓
- Cooking
- Poetry

**Multiple choice.** Who provides it?
- Amazon Web Services ✓
- A university
- A tabloid

**Multiple choice.** Who is it for?
- Beginners ✓
- Only experts
- Nobody

**Multiple choice.** Is “AWS Cloud Practitioner Essentials” free?
- Yes ✓
- No
- Only for customers

## The NIST Definition of Cloud Computing
- id: cc3 · type: read · creator: US National Institute of Standards and Technology (SP 800-145) · year: 2011 · length: about 1 hour
- access: free | free online

### Introduction
Defines cloud computing by five characteristics, such as on-demand self-service, and three service models: IaaS, PaaS and SaaS.

### Quiz
**Multiple choice.** Which is a cloud service model?
- Software as a Service ✓
- Hardware as a Gift
- Water as a Service

**Multiple choice.** How many essential characteristics does NIST list?
- Five ✓
- One
- Twenty

**Multiple choice.** Which characteristic is listed?
- On-demand self-service ✓
- Free forever
- No internet needed

**Multiple choice.** Is “The NIST Definition of Cloud Computing” free?
- Yes ✓
- No
- Only in the US

## Azure and Google Cloud fundamentals
- id: cc4 · type: course · creator: Microsoft Learn and Google Cloud Skills Boost · length: about 8 hours
- access: free | free online

### Introduction
Free learning paths introducing two other major providers, so you can compare their services and terms.

### Quiz
**Multiple choice.** Why study more than one provider?
- To compare services and terms ✓
- No reason
- To pay more

**Multiple choice.** Which platform hosts Microsoft's courses?
- Microsoft Learn ✓
- Netflix
- A bank

**Multiple choice.** Are the learning paths free?
- Yes ✓
- No
- Only for partners

**Multiple choice.** Which providers are covered here?
- Azure and Google Cloud ✓
- None
- Only one

---

# Stage 2: Building Blocks
level: Explorer
intent: Machines, containers, storage and networks.
gate: Score 70% or more across this stage's quizzes.
covers: cloud-computing, operating-systems

This stage teaches the parts you build with: containers, Kubernetes, object storage and virtual networks.

## Docker: Get Started
- id: cc5 · type: course · creator: Docker · year: 2013 onwards · length: about 6 hours
- access: free | free online

### Introduction
Package an application and its dependencies into a container image that runs the same everywhere.

### Quiz
**Multiple choice.** What does a container package?
- An application and its dependencies ✓
- A ship's cargo only
- Nothing

**Multiple choice.** Why use containers?
- They run the same everywhere ✓
- They are slower
- No reason

**Multiple choice.** When did Docker popularise containers?
- 2013 ✓
- 2006
- 1999

**Multiple choice.** Is the tutorial free?
- Yes ✓
- No
- Only for companies

## Kubernetes Basics
- id: cc6 · type: course · creator: Kubernetes project · year: 2014 onwards · length: about 6 hours
- access: free | free online

### Introduction
Deploy, scale and update containerised apps across a cluster, with Kubernetes restarting failed containers automatically.

### Quiz
**Multiple choice.** What does Kubernetes manage?
- Containers across a cluster ✓
- Office staff
- Nothing

**Multiple choice.** What does it do when containers fail?
- Restarts them automatically ✓
- Deletes the cluster
- Nothing

**Multiple choice.** What does “Kubernetes” mean?
- Helmsman or pilot ✓
- Container
- Cloud

**Multiple choice.** Is “Kubernetes Basics” free?
- Yes ✓
- No
- Only for Google staff

## Object storage
- id: cc7 · type: read · creator: Amazon S3 and open-source MinIO documentation · year: 2006 · length: about 3 hours
- access: free | free online

### Introduction
Store files as objects in buckets, with very high durability achieved by keeping copies in several places.

### Quiz
**Multiple choice.** How does object storage keep data durable?
- Copies in several places ✓
- One copy only
- Paper backups

**Multiple choice.** Where are objects kept?
- In buckets ✓
- In folders on one disk
- In email

**Multiple choice.** When did S3 launch?
- 2006 ✓
- 2014
- 1999

**Multiple choice.** Is the documentation free?
- Yes ✓
- No
- Only for customers

## Cloud networking
- id: cc8 · type: read · creator: Provider documentation on virtual private clouds · length: about 3 hours
- access: free | free online

### Introduction
Virtual networks, subnets, firewalls and load balancers connect and protect cloud resources.

### Quiz
**Multiple choice.** What do load balancers do?
- Spread traffic across servers ✓
- Store data
- Nothing

**Multiple choice.** What do firewalls control?
- Which traffic is allowed ✓
- Room temperature
- Prices

**Multiple choice.** What is a VPC?
- A private virtual network in the cloud ✓
- A video player
- A phone

**Multiple choice.** Is “Cloud networking” free?
- Yes ✓
- No
- Only for engineers

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Containerise a small app and run it locally and in the cloud.
2. Deploy an app to a small Kubernetes cluster and kill a container to watch it recover.
3. Design a simple, secure network for a web app.

---

# Stage 3: Distributed Systems Underneath
level: Reader
intent: Many computers acting as one.
gate: Score 70% or more across this stage's quizzes.
covers: distributed-systems, cloud-computing

This stage covers the ideas that make clouds work: distributed file systems, large-scale data processing, MIT's course, and consensus.

## MapReduce
- id: cc9 · type: read · creator: Jeffrey Dean and Sanjay Ghemawat, Google · year: 2004 · length: about 2 hours
- access: free | free online

### Introduction
A simple model for processing huge datasets across thousands of machines, handling failures automatically.

### Quiz
**Multiple choice.** What does MapReduce process?
- Huge datasets across many machines ✓
- Maps of cities
- Music

**Multiple choice.** What does it handle automatically?
- Failures ✓
- Nothing
- Billing

**Multiple choice.** Who wrote the paper?
- Dean and Ghemawat ✓
- Barroso and Hölzle
- Ongaro and Ousterhout

**Multiple choice.** When was it published?
- 2004 ✓
- 2014
- 1961

## The Google File System
- id: cc10 · type: read · creator: Sanjay Ghemawat, Howard Gobioff and Shun-Tak Leung · year: 2003 · length: about 3 hours
- access: free | free online

### Introduction
A file system built from cheap machines that often fail, keeping data safe by replicating it.

### Quiz
**Multiple choice.** What kind of machines did GFS use?
- Cheap machines that often fail ✓
- Supercomputers only
- Phones

**Multiple choice.** How does it keep data safe?
- By replicating it ✓
- By printing it
- It doesn't

**Multiple choice.** Which company built it?
- Google ✓
- Amazon
- IBM

**Multiple choice.** When was the paper published?
- 2003 ✓
- 2004
- 2014

## MIT 6.824 Distributed Systems
- id: cc11 · type: watch · creator: Robert Morris, MIT · length: about 30 hours
- access: free | free online

### Introduction
Lectures and labs on replication, fault tolerance, consistency and real systems such as MapReduce and Spanner.

### Quiz
**Multiple choice.** Which topic does “MIT 6.824 Distributed Systems” cover?
- Fault tolerance ✓
- Painting
- Poetry

**Multiple choice.** Who teaches it?
- Robert Morris ✓
- Jeffrey Dean
- John McCarthy

**Multiple choice.** Which university offers it?
- MIT ✓
- Stanford
- Oxford

**Multiple choice.** Are the lectures free?
- Yes ✓
- No
- Only at MIT

## In Search of an Understandable Consensus Algorithm (Raft)
- id: cc12 · type: read · creator: Diego Ongaro and John Ousterhout · year: 2014 · length: about 3 hours
- access: free | free online

### Introduction
Raft lets a group of servers agree on a shared log even if some fail, designed to be easier to understand than Paxos.

### Quiz
**Multiple choice.** What does Raft let servers agree on?
- A shared log ✓
- Lunch
- Nothing

**Multiple choice.** What was Raft designed to be?
- Easier to understand than Paxos ✓
- Faster to type
- Secret

**Multiple choice.** Who wrote “In Search of an Understandable Consensus Algorithm (Raft)”?
- Ongaro and Ousterhout ✓
- Dean and Ghemawat
- Morris

**Multiple choice.** When was “In Search of an Understandable Consensus Algorithm (Raft)” published?
- 2014 ✓
- 2004
- 2017

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Implement a tiny MapReduce word count.
2. Why do distributed systems assume machines will fail?
3. Explain how Raft elects a leader.

---

# Stage 4: Operating in the Cloud
level: Connoisseur
intent: Automation and good architecture.
gate: Score 70% or more across this stage's quizzes.
covers: cloud-computing, devops-and-site-reliability

This stage covers infrastructure as code, serverless computing, observability and a framework for well-designed systems.

## Terraform tutorials
- id: cc13 · type: course · creator: HashiCorp · length: about 6 hours
- access: free | free online

### Introduction
Describe infrastructure in code files so it can be reviewed, versioned and recreated exactly.

### Quiz
**Multiple choice.** What does infrastructure as code allow?
- Reviewing and recreating infrastructure ✓
- Painting servers
- Nothing

**Multiple choice.** Where is infrastructure described?
- In code files ✓
- On sticky notes
- Nowhere

**Multiple choice.** Who makes Terraform?
- HashiCorp ✓
- Docker
- Apple

**Multiple choice.** Are the tutorials free?
- Yes ✓
- No
- Only for customers

## Serverless computing
- id: cc14 · type: read · creator: AWS Lambda documentation and open-source alternatives · year: 2014 · length: about 4 hours
- access: free | free online

### Introduction
Run code in response to events without managing servers, paying only while it runs, with trade-offs such as cold starts.

### Quiz
**Multiple choice.** What do you not manage in serverless?
- Servers ✓
- Code
- Anything

**Multiple choice.** How do you pay?
- Only while code runs ✓
- A fixed yearly fee
- Never

**Multiple choice.** Which is a serverless trade-off?
- Cold starts ✓
- No trade-offs
- Free electricity

**Multiple choice.** Is “Serverless computing” free?
- Yes ✓
- No
- Only for customers

## OpenTelemetry
- id: cc15 · type: read · creator: Cloud Native Computing Foundation · length: about 3 hours
- access: free | free online

### Introduction
An open standard for collecting logs, metrics and traces so you can see what distributed systems are doing.

### Quiz
**Multiple choice.** What does OpenTelemetry collect?
- Logs, metrics and traces ✓
- Photos
- Recipes

**Multiple choice.** Why collect them?
- To see what systems are doing ✓
- To slow them down
- No reason

**Multiple choice.** Which foundation hosts it?
- The Cloud Native Computing Foundation ✓
- FIFA
- A bank

**Multiple choice.** Is “OpenTelemetry” free?
- Yes ✓
- No
- Only for companies

## AWS Well-Architected Framework
- id: cc16 · type: read · creator: Amazon Web Services · length: about 5 hours
- access: free | free online

### Introduction
Six pillars for good cloud systems: operational excellence, security, reliability, performance efficiency, cost optimisation and sustainability.

### Quiz
**Multiple choice.** How many pillars does the framework have?
- Six ✓
- Two
- Ten

**Multiple choice.** Which is a pillar?
- Sustainability ✓
- Fashion
- Luck

**Multiple choice.** Who publishes it?
- Amazon Web Services ✓
- A tabloid
- A university

**Multiple choice.** Is “AWS Well-Architected Framework” free?
- Yes ✓
- No
- Only for partners

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Recreate a small system entirely with infrastructure as code.
2. When is serverless a good choice, and when is it not?
3. Review a system you know against the six pillars.

---

# Stage 5: Security, Cost and Failure
level: Specialist
intent: Running the cloud responsibly.
gate: Score 70% or more across this stage's quizzes.
covers: cloud-computing, computer-security

This stage covers who is responsible for what, controlling cloud costs, a famous outage, and a major breach.

## The shared responsibility model
- id: cc17 · type: read · creator: Cloud provider security documentation · length: about 2 hours
- access: free | free online

### Introduction
The provider secures the underlying infrastructure; customers must secure their own data, access settings and configurations.

### Quiz
**Multiple choice.** Who secures the underlying infrastructure?
- The provider ✓
- The customer
- Nobody

**Multiple choice.** What must customers secure?
- Their data and configurations ✓
- The data centre doors
- Nothing

**Multiple choice.** What causes many cloud breaches?
- Misconfiguration ✓
- Weather
- Nothing

**Multiple choice.** Is “The shared responsibility model” free?
- Yes ✓
- No
- Only for customers

## The FinOps Framework
- id: cc18 · type: read · creator: FinOps Foundation · length: about 3 hours
- access: free | free online

### Introduction
Practices for teams to understand and control cloud spending: visibility, ownership, optimisation and budgets.

### Quiz
**Multiple choice.** What does FinOps help control?
- Cloud spending ✓
- Office furniture
- Weather

**Multiple choice.** Which practice is part of FinOps?
- Budgets ✓
- Ignoring bills
- Nothing

**Multiple choice.** Who publishes the framework?
- The FinOps Foundation ✓
- A football club
- A tabloid

**Multiple choice.** Is “The FinOps Framework” free?
- Yes ✓
- No
- Only for members

## The 2017 Amazon S3 outage
- id: cc19 · type: read · creator: AWS post-event summary · year: 2017 · length: about 1 hour
- access: free | free online

### Introduction
A mistyped command during maintenance removed more servers than intended, taking S3 down in a major region for hours.

### Quiz
**Multiple choice.** What caused the outage?
- A mistyped maintenance command ✓
- A hurricane
- A hacker

**Multiple choice.** How long did it last?
- Hours ✓
- Seconds
- Months

**Multiple choice.** Which service went down?
- S3 ✓
- Email
- Nothing

**Multiple choice.** Is the summary free?
- Yes ✓
- No
- Only for customers

## The Capital One cloud breach
- id: cc20 · type: read · creator: US regulators' and researchers' analyses · year: 2019 · length: about 2 hours
- access: free | free online

### Introduction
A misconfigured firewall let an attacker obtain credentials and steal data on about 100 million people, showing the cost of configuration mistakes.

### Quiz
**Multiple choice.** What was misconfigured?
- A firewall ✓
- A printer
- Nothing

**Multiple choice.** About how many people were affected?
- About 100 million ✓
- About 100
- Nobody

**Multiple choice.** What lesson does it teach?
- Configuration mistakes are costly ✓
- Clouds are unsafe always
- Nothing

**Multiple choice.** Are the analyses free?
- Yes ✓
- No
- Only for banks

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Set a budget alert and tag every resource you create.
2. What safeguards would have prevented the S3 outage?
3. Audit a cloud account's access permissions for least privilege.

---

# Stage 6: Energy, Sovereignty and Research
level: Expert
intent: The cloud and society.
gate: Score 70% or more across this stage's quizzes.
covers: cloud-computing, energy-systems

The final stage looks at data centres' energy use, where data may legally live, open-source cloud tools, and current research.

## Energy and AI
- id: cc21 · type: read · creator: International Energy Agency · year: 2025 · length: about 3 hours
- access: free | free online

### Introduction
Data centres use around 1.5% of the world's electricity, and demand from AI is growing fast; efficiency and clean power matter.

### Quiz
**Multiple choice.** Roughly what share of world electricity do data centres use?
- About 1.5% ✓
- About 50%
- None

**Multiple choice.** What is growing data centre demand?
- AI ✓
- Nothing
- Paper

**Multiple choice.** Who published the report?
- The IEA ✓
- A tabloid
- A cloud provider's adverts

**Multiple choice.** Is “Energy and AI” free?
- Yes ✓
- No
- Only for governments

## Data sovereignty and Schrems II
- id: cc22 · type: read · creator: EU Court of Justice judgment and European Data Protection Board guidance · year: 2020 · length: about 3 hours
- access: free | free online

### Introduction
Where data is stored and who can access it matter legally; the 2020 ruling struck down an EU–US data transfer framework.

### Quiz
**Multiple choice.** What did Schrems II strike down?
- An EU–US data transfer framework ✓
- A cloud provider
- Nothing

**Multiple choice.** What does data sovereignty concern?
- Where data is stored and who can access it ✓
- Data colour
- Nothing

**Multiple choice.** Which court ruled?
- The EU Court of Justice ✓
- A US state court
- The ICJ

**Multiple choice.** Is the guidance free?
- Yes ✓
- No
- Only for lawyers

## The Cloud Native Computing Foundation landscape
- id: cc23 · type: read · creator: CNCF · year: 2015 onwards · length: about 2 hours
- access: free | free online

### Introduction
Open-source projects such as Kubernetes, Prometheus and OpenTelemetry let organisations avoid lock-in to a single provider.

### Quiz
**Multiple choice.** What do open-source cloud tools help avoid?
- Lock-in to one provider ✓
- Using computers
- Nothing

**Multiple choice.** Which project does the CNCF host?
- Kubernetes ✓
- Microsoft Word
- None

**Multiple choice.** When was the CNCF founded?
- 2015 ✓
- 2006
- 1961

**Multiple choice.** Is the landscape free to explore?
- Yes ✓
- No
- Only for members

## Reading current research
- id: cc24 · type: read · creator: ACM SoCC and USENIX NSDI proceedings · length: ongoing
- access: free | many papers free

### Introduction
Choose a question from this path and read a recent paper, noting the scale of its experiments and what it costs to run.

### Quiz
**Multiple choice.** Which conference focuses on cloud computing?
- SoCC ✓
- Eurovision
- Wimbledon

**Multiple choice.** What should you note in a paper?
- The scale and cost of experiments ✓
- Only the title
- Nothing

**Multiple choice.** Which other conference publishes systems work?
- NSDI ✓
- The Oscars
- Cannes

**Multiple choice.** Are many papers free?
- Yes ✓
- No
- None are

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Estimate the energy use of a cloud workload and how to cut it.
2. Where should a hospital in your country store its data, and why?
3. Is depending on a few cloud providers a risk for society?

---

# Final mastery check

Finishing all six stages makes you a capable cloud practitioner. To earn the **Ascent Mastery: Cloud Computing** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Deployment project.** Deploy a small app with containers, infrastructure as code, monitoring and a budget alert.
3. **Architecture review.** Review a design against security, reliability, cost and sustainability.
4. **Capstone report.** 2,500 words on one of the Stage 6 questions. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a manager. For example: “Is the cloud cheaper than our own servers?”

The certificate needs every stage passed. It is not a provider certification.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Operating systems | Stage 2 | The Operating systems path | Free + paid |
| Computer networks | Stage 2 | The Computer networks path | Free + paid |
| Databases | Stage 4 | The Databases path | Free + paid |

# Bridges to other subjects

- **Computer networks:** connectivity.
- **Operating systems:** virtualisation.
- **Economics:** pricing and markets.
- **Law:** data protection.
- **Energy:** data centre power.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by cloud engineers and computer science educators from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
