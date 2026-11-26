---
path: Cybersecurity
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Cybersecurity

How computers and networks are attacked and defended: famous hacks, security foundations and cryptography, how attacks work, defence and frameworks, law, war and privacy, and the frontier of post-quantum cryptography. About 250 to 300 hours over ten to twelve months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Excellent free courses, standards and practice labs cover most of the path. The path teaches how attacks work so you can defend against them. **Only ever practise on systems you own or are explicitly authorised to test**, using legal practice labs; attacking others' systems is a crime.

# About cybersecurity

Cybersecurity protects computers, networks, data and people from attack, theft, damage and disruption. It covers cryptography, secure software, networks, identity and passwords, human factors such as phishing, incident response, law and policy, and the growing role of states and criminals in cyber conflict.

This path begins with true stories of hacks and cyberweapons, teaches the foundations and the history of codes, explains how attacks work, studies defence and security frameworks, examines law, cyber war and privacy, and ends at the frontier: post-quantum cryptography, ransomware and current threats.

**Trivia**
- In 1986 an astronomer, Clifford Stoll, tracked a hacker selling secrets to the KGB, starting from a 75-cent accounting error.
- Stuxnet, discovered in 2010, was malware that physically damaged centrifuges in Iran's nuclear programme, widely seen as the first cyberweapon.
- The NotPetya attack of 2017 caused an estimated 10 billion US dollars of damage worldwide.
- In 2024 the US standards body NIST published its first standards for encryption designed to resist future quantum computers.

### Timeline
- **1940s · Bletchley Park** breaks Enigma codes.
- **1976 · Diffie and Hellman** invent public-key cryptography.
- **1977 · RSA encryption**
- **1988 · The Morris worm** spreads across the early internet.
- **2001 · The Budapest Convention on Cybercrime**
- **2010 · Stuxnet** is discovered.
- **2017 · WannaCry and NotPetya** spread worldwide.
- **2024 · Post-quantum cryptography standards** are published by NIST.

# What you will be able to do

At the end of this path you will know cybersecurity the way a strong first year of a university cybersecurity course expects. You will be able to:

- **Explain core principles:** confidentiality, integrity and availability; threats and risk.
- **Explain cryptography:** encryption, hashing, keys and how HTTPS works.
- **Explain how attacks work:** phishing, malware, web vulnerabilities and attacker tactics.
- **Apply defences:** secure passwords, updates, frameworks and incident response.
- **Weigh law and policy:** cybercrime, cyber war, privacy and ethics.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Security professionals and researchers from more than one country will confirm them before the path is published. Practise only on systems you are authorised to test.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: True stories of hacks and cyberweapons.
gate: Score 70% or more across this stage's quizzes.
covers: computer-security, network-security, cyber-law

Cybersecurity hooks people through true stories. This stage gives you an astronomer's hunt for a hacker, the first cyberweapon, a devastating state-sponsored attack, and the global market in software vulnerabilities.

## The Cuckoo's Egg
- id: cy1 · type: read · creator: Clifford Stoll · year: 1989 · length: about 10 hours
- access: paid | buy, or borrow from a library

### Introduction
An astronomer turned systems manager notices a 75-cent accounting error, and follows it to a hacker breaking into military computers and selling information to the KGB.

### Quiz
**Multiple choice.** What first made Stoll suspicious?
- A 75-cent accounting error ✓
- A broken screen
- A phone call

**Multiple choice.** Whom was the hacker selling information to?
- The KGB ✓
- A newspaper
- A bank

**Multiple choice.** What was Stoll's original field?
- Astronomy ✓
- Law
- Music

**Fill in the blank.** *The Cuckoo's Egg* was published in ___. [answer: 1989]

## Countdown to Zero Day
- id: cy2 · type: read · creator: Kim Zetter · year: 2014 · length: about 14 hours
- access: paid | buy, or borrow from a library

### Introduction
The story of Stuxnet, malware that secretly damaged centrifuges at Iran's nuclear facility, widely attributed to the US and Israel, and the first known cyberweapon to cause physical destruction.

### Quiz
**Multiple choice.** What did Stuxnet damage?
- Centrifuges in Iran's nuclear programme ✓
- Bank accounts
- Satellites

**Multiple choice.** Why is Stuxnet seen as a landmark?
- It was the first known cyberweapon to cause physical destruction ✓
- It was the first virus
- It was harmless

**Multiple choice.** What is a zero-day?
- A vulnerability unknown to the software's maker ✓
- A holiday
- A day without computers

**Fill in the blank.** *Countdown to Zero Day* was published in ___. [answer: 2014]

## Sandworm
- id: cy3 · type: read · creator: Andy Greenberg · year: 2019 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
A journalist follows a Russian military hacking group that cut power in Ukraine and launched NotPetya in 2017, which spread worldwide and caused billions of dollars of damage.

### Quiz
**Multiple choice.** Which attack did Sandworm launch in 2017?
- NotPetya ✓
- Stuxnet
- The Morris worm

**Multiple choice.** Which country's power grid did the group attack?
- Ukraine's ✓
- Brazil's
- Japan's

**Multiple choice.** Roughly how much damage did NotPetya cause?
- Billions of dollars ✓
- A few dollars
- None

**Fill in the blank.** *Sandworm* was published in ___. [answer: 2019]

## This Is How They Tell Me the World Ends
- id: cy4 · type: read · creator: Nicole Perlroth · year: 2021 · length: about 16 hours
- access: paid | buy, or borrow from a library

### Introduction
A journalist investigates the secret global market in zero-day vulnerabilities, where governments and brokers buy flaws in software to use as weapons, leaving everyone less safe.

### Quiz
**Multiple choice.** What market does Perlroth investigate?
- The market in zero-day vulnerabilities ✓
- The stock market
- Car sales

**Multiple choice.** Who buys these flaws?
- Governments and brokers ✓
- Nobody
- Only students

**Multiple choice.** What does she argue the market does?
- Leaves everyone less safe ✓
- Makes everyone safer
- Nothing

**Fill in the blank.** *This Is How They Tell Me the World Ends* was published in ___. [answer: 2021]

---

# Stage 2: Foundations
level: Explorer
intent: Security basics, the history of codes, and common risks.
gate: Score 70% or more across this stage's quizzes.
covers: computer-security, cryptography, application-security

This stage builds the basics: a free Harvard course for everyone, the history of codes and code-breaking, free videos covering a widely used security certification, and the most critical web application risks.

## CS50's Introduction to Cybersecurity
- id: cy5 · type: course · creator: David J. Malan (Harvard University) · year: 2023 · length: about 20 hours
- access: free | free online

### Introduction
A free course for everyone on securing accounts, data, systems and software, and on privacy, with no programming needed.

### Quiz
**Multiple choice.** Who is the course for?
- Everyone, with no programming needed ✓
- Only experts
- Only children

**Multiple choice.** What does the course cover?
- Securing accounts, data, systems and software ✓
- Cooking
- Football

**Multiple choice.** What is two-factor authentication?
- Proving who you are in two different ways ✓
- Two passwords on one site
- Two people sharing an account

**Multiple choice.** Is the course free?
- Yes ✓
- No
- Only at Harvard

## The Code Book
- id: cy6 · type: read · creator: Simon Singh · year: 1999 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
A history of codes and code-breaking from Mary, Queen of Scots, and the Enigma machine to public-key cryptography and the future of quantum cryptography.

### Quiz
**Multiple choice.** Which wartime machine's codes were broken at Bletchley Park?
- Enigma ✓
- Colossus only
- The telephone

**Multiple choice.** What did public-key cryptography solve?
- Sharing secret keys safely over open channels ✓
- Making computers faster
- Printing books

**Multiple choice.** Whose execution was linked to a broken cipher?
- Mary, Queen of Scots ✓
- Napoleon
- Julius Caesar

**Fill in the blank.** *The Code Book* was published in ___. [answer: 1999]

## Security+ training course videos
- id: cy7 · type: watch · creator: Professor Messer · year: updated regularly · length: about 25 hours
- access: free | free online

### Introduction
Free videos covering the topics of a widely used entry-level security certification: threats, architecture, operations, incident response and governance.

### Quiz
**Multiple choice.** What do the videos cover?
- An entry-level security certification's topics ✓
- Cooking
- Music

**Multiple choice.** What is the CIA triad in security?
- Confidentiality, integrity and availability ✓
- A government agency
- A password rule

**Multiple choice.** What is incident response?
- How an organisation handles a security breach ✓
- A fire drill only
- A sales plan

**Multiple choice.** Are the videos free?
- Yes ✓
- No
- Only for companies

## OWASP Top Ten
- id: cy8 · type: read · creator: Open Worldwide Application Security Project (OWASP) · year: updated regularly · length: about 3 hours
- access: free | free online

### Introduction
A free, widely used list of the most critical security risks to web applications, such as broken access control, injection and security misconfiguration, with prevention advice.

### Quiz
**Multiple choice.** What does the OWASP Top Ten list?
- The most critical web application security risks ✓
- Top ten websites
- Top ten hackers

**Multiple choice.** What is an injection attack?
- Sending malicious input that a program runs as commands ✓
- A medical procedure
- A fast download

**Multiple choice.** What is broken access control?
- Users can do things they shouldn't be allowed to ✓
- A locked door
- A slow website

**Multiple choice.** Is the list free?
- Yes ✓
- No
- Only for members

---

# Stage 3: How Attacks Work
level: Reader
intent: Security engineering, social engineering and attacker tactics.
gate: Score 70% or more across this stage's quizzes.
covers: security-engineering, network-security, computer-security

This stage explains attacks so you can defend against them: the standard security-engineering textbook, a famous hacker on manipulating people, the public catalogue of real attacker tactics, and a classic on how exploits work, to practise only in legal labs.

## Security Engineering
- id: cy9 · type: read · creator: Ross Anderson · year: 2001 (3rd edition 2020) · length: about 30 hours for selected chapters
- access: free-and-paid | earlier editions and many chapters are free from the author; the latest is paid

### Introduction
The standard textbook on building dependable systems: psychology and usability, protocols, access control, cryptography, banking, physical security and economics of security.

### Quiz
**Multiple choice.** What does Anderson stress besides technology?
- Psychology, usability and economics ✓
- Only code
- Nothing

**Multiple choice.** What is access control?
- Rules about who can do what in a system ✓
- Locking a car
- A traffic light

**Multiple choice.** Why does usability matter for security?
- Hard-to-use security gets bypassed ✓
- It doesn't
- Users never make mistakes

**Fill in the blank.** *Security Engineering* was first published in ___. [answer: 2001]

## The Art of Deception
- id: cy10 · type: read · creator: Kevin D. Mitnick and William L. Simon · year: 2002 · length: about 9 hours
- access: paid | buy, or borrow from a library

### Introduction
A once-notorious hacker shows how social engineering, manipulating people into giving information or access, often works better than technical hacking, and how organisations can resist it.

### Quiz
**Multiple choice.** What is social engineering?
- Manipulating people into giving information or access ✓
- Building social media
- Engineering bridges

**Multiple choice.** What does Mitnick say often works better than technical hacking?
- Manipulating people ✓
- Brute force
- Luck

**Multiple choice.** Which attack is a form of social engineering?
- Phishing ✓
- A power cut
- A hard-drive crash

**Fill in the blank.** *The Art of Deception* was published in ___. [answer: 2002]

## MITRE ATT&CK
- id: cy11 · type: read · creator: MITRE · year: 2013 onwards · length: about 4 hours
- access: free | free online

### Introduction
A free, public knowledge base of real-world attacker tactics and techniques, from initial access and persistence to exfiltration, used by defenders to understand and detect attacks.

### Quiz
**Multiple choice.** What is MITRE ATT&CK?
- A knowledge base of real attacker tactics and techniques ✓
- A video game
- An antivirus product

**Multiple choice.** Who uses it?
- Defenders, to understand and detect attacks ✓
- Only attackers
- Nobody

**Multiple choice.** What is persistence, as an attacker tactic?
- Keeping access to a system over time ✓
- Being patient in queues
- Saving files

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for governments

## Hacking: The Art of Exploitation
- id: cy12 · type: read · creator: Jon Erickson · year: 2003 (2nd edition 2008) · length: about 20 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
A classic on how exploits work at a low level, programming, memory, buffer overflows and networking, with exercises to be done only in the book's own practice environment.

### Quiz
**Multiple choice.** What is a buffer overflow?
- Writing more data into memory than a buffer can hold ✓
- Too much water in a tank
- A full inbox

**Multiple choice.** Where should exercises be done?
- Only in a legal practice environment ✓
- On any website
- On a friend's computer without asking

**Multiple choice.** Why learn how exploits work?
- To understand and prevent them ✓
- To attack others
- It isn't useful

**Fill in the blank.** The second edition was published in ___. [answer: 2008]

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Why is the human the weakest link, and how can that change? Use Mitnick and Anderson.
2. Explain one real attack using MITRE ATT&CK.
3. Why is it illegal to test systems you're not authorised to, and how do ethical hackers work legally?

---

# Stage 4: Defence
level: Connoisseur
intent: Frameworks, cryptography in practice, the web and passwords.
gate: Score 70% or more across this stage's quizzes.
covers: information-systems-security, cryptography, network-security

This stage studies defence: the most widely used security framework, cryptography done right, how secure web connections work, and modern guidance on passwords and identity.

## NIST Cybersecurity Framework 2.0
- id: cy13 · type: read · creator: US National Institute of Standards and Technology (NIST) · year: 2024 · length: about 3 hours
- access: free | free online

### Introduction
A widely used framework for managing cyber risk, organised into six functions: govern, identify, protect, detect, respond and recover.

### Quiz
**Multiple choice.** How many functions does CSF 2.0 have?
- Six ✓
- Two
- Twelve

**Multiple choice.** Which is one of the functions?
- Detect ✓
- Advertise
- Celebrate

**Multiple choice.** Which function was added in version 2.0?
- Govern ✓
- Protect
- Recover

**Fill in the blank.** CSF 2.0 was published in ___. [answer: 2024]

## Cryptography Engineering
- id: cy14 · type: read · creator: Niels Ferguson, Bruce Schneier and Tadayoshi Kohno · year: 2010 · length: about 15 hours for selected chapters
- access: paid | buy, or borrow from a library

### Introduction
How to use cryptography correctly in real systems: block ciphers, hashing, message authentication, key exchange, randomness and why most failures come from implementation mistakes.

### Quiz
**Multiple choice.** What is a hash function?
- A function that turns data into a fixed-size fingerprint ✓
- A kitchen tool
- A kind of password

**Multiple choice.** Where do most cryptographic failures come from, according to the authors?
- Implementation mistakes ✓
- Strong algorithms
- Bad luck

**Multiple choice.** What is encryption?
- Scrambling data so only those with the key can read it ✓
- Deleting data
- Compressing data

**Fill in the blank.** *Cryptography Engineering* was published in ___. [answer: 2010]

## Learning Center: how HTTPS and TLS work
- id: cy15 · type: read · creator: Cloudflare · length: about 3 hours
- access: free | free online

### Introduction
Free explainers on how secure web connections work: TLS, certificates, public-key cryptography, DNS and common attacks such as denial-of-service.

### Quiz
**Multiple choice.** What does the padlock in a browser indicate?
- The connection is encrypted with TLS ✓
- The website is honest
- The site is free

**Multiple choice.** What is a denial-of-service attack?
- Overwhelming a service so it stops working ✓
- Refusing to pay
- A slow typist

**Multiple choice.** What does a certificate do?
- Helps prove a website's identity ✓
- Prints documents
- Stores passwords

**Multiple choice.** Is the Learning Center free?
- Yes ✓
- No
- Only for customers

## Digital Identity Guidelines (SP 800-63B)
- id: cy16 · type: read · creator: US National Institute of Standards and Technology (NIST) · year: 2017 (updated) · length: about 2 hours
- access: free | free online

### Introduction
Modern guidance on passwords and authentication: allow long passphrases, check them against lists of breached passwords, avoid forced periodic changes, and use multi-factor authentication.

### Quiz
**Multiple choice.** What kind of passwords does NIST recommend allowing?
- Long passphrases ✓
- Short ones only
- Only numbers

**Multiple choice.** What does NIST say about forcing regular password changes?
- Avoid it without evidence of compromise ✓
- Force it weekly
- Force it daily

**Multiple choice.** What should passwords be checked against?
- Lists of breached passwords ✓
- Dictionaries of poems
- Nothing

**Multiple choice.** What extra protection does NIST recommend?
- Multi-factor authentication ✓
- Writing passwords on screens
- Sharing passwords

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Design a security plan for a small organisation using the NIST framework.
2. Why do strong algorithms still fail in practice? Use Ferguson, Schneier and Kohno.
3. What password advice should everyone follow, and why has it changed? Use NIST.

---

# Stage 5: Law, War and Privacy
level: Specialist
intent: Cybercrime law, cyber war, surveillance and privacy.
gate: Score 70% or more across this stage's quizzes.
covers: cyber-law, international-security, privacy-and-data-rights

This stage studies the wider world: the international treaty on cybercrime, how international law applies to cyber operations, the rise of cyber conflict between states, and the case for protecting privacy.

## Convention on Cybercrime (Budapest Convention)
- id: cy17 · type: read · creator: Council of Europe · year: 2001 · length: about 2 hours
- access: free | free online

### Introduction
The first international treaty on crimes committed via computers, defining offences such as illegal access and data interference, and enabling cooperation between countries' police.

### Quiz
**Multiple choice.** What is the Budapest Convention?
- The first international treaty on cybercrime ✓
- A trade deal
- A football league

**Multiple choice.** Which offence does it define?
- Illegal access to computer systems ✓
- Speeding
- Shoplifting

**Multiple choice.** What does it enable between countries?
- Police cooperation ✓
- Free trade
- War

**Fill in the blank.** It was adopted in ___. [answer: 2001]

## Tallinn Manual 2.0
- id: cy18 · type: read · creator: Michael N. Schmitt (general editor) and international experts · year: 2017 · length: about 10 hours for selected rules
- access: paid | buy, or borrow from a library

### Introduction
A study by international law experts of how existing international law, sovereignty, use of force and the laws of war, applies to cyber operations in peace and war. Not binding, but influential.

### Quiz
**Multiple choice.** What does the Tallinn Manual examine?
- How international law applies to cyber operations ✓
- Football rules
- Shipping law only

**Multiple choice.** Is it binding law?
- No, but influential ✓
- Yes
- It is a treaty

**Multiple choice.** Which areas of law does it cover?
- Sovereignty, use of force and the laws of war ✓
- Only tax law
- Only contract law

**Fill in the blank.** Tallinn Manual 2.0 was published in ___. [answer: 2017]

## The Perfect Weapon
- id: cy19 · type: read · creator: David E. Sanger · year: 2018 · length: about 12 hours
- access: paid | buy, or borrow from a library

### Introduction
A journalist shows how cyber attacks became a cheap, deniable weapon of states, used for sabotage, espionage and election interference, below the threshold of open war.

### Quiz
**Multiple choice.** Why are cyber attacks attractive to states, according to Sanger?
- They are cheap and deniable ✓
- They are expensive
- They are always visible

**Multiple choice.** Which use does he describe?
- Election interference ✓
- Building roads
- Teaching

**Multiple choice.** Where do these attacks often fall?
- Below the threshold of open war ✓
- Only in wartime
- Nowhere

**Fill in the blank.** *The Perfect Weapon* was published in ___. [answer: 2018]

## Privacy Is Power
- id: cy20 · type: read · creator: Carissa Véliz · year: 2020 · length: about 7 hours
- access: paid | buy, or borrow from a library

### Introduction
A philosopher argues that personal data gives power to those who collect it, that the data economy harms individuals and democracy, and that people can take back control of their privacy.

### Quiz
**Multiple choice.** What does Véliz argue personal data gives?
- Power to those who collect it ✓
- Nothing
- Money to users

**Multiple choice.** Whom does the data economy harm, in her view?
- Individuals and democracy ✓
- Nobody
- Only companies

**Multiple choice.** What is Véliz's field?
- Philosophy ✓
- Engineering
- Medicine

**Fill in the blank.** *Privacy Is Power* was published in ___. [answer: 2020]

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Should there be rules for cyber war? Use the Tallinn Manual and Sanger.
2. How should countries cooperate against cybercrime? Use the Budapest Convention and one case.
3. Is privacy worth protecting even if you have “nothing to hide”? Use Véliz.

---

# Stage 6: The Frontier
level: Expert
intent: Post-quantum cryptography, threat landscapes, ransomware, and research.
gate: Score 70% or more across this stage's quizzes.
covers: cryptographic-theory, computer-security, information-systems-security

The final stage looks ahead: encryption designed to survive quantum computers, Europe's yearly threat report, the people fighting ransomware, and how to follow security research and vulnerabilities yourself.

## Post-quantum cryptography standards
- id: cy21 · type: read · creator: US National Institute of Standards and Technology (NIST) · year: 2024 · length: about 2 hours
- access: free | free online

### Introduction
In 2024 NIST published its first standards for encryption designed to resist attacks by future quantum computers, which could break much of today's public-key cryptography.

### Quiz
**Multiple choice.** Why are post-quantum standards needed?
- Future quantum computers could break today's public-key cryptography ✓
- Computers are too slow
- Passwords are too long

**Multiple choice.** Who published the standards?
- NIST ✓
- A bank
- A social network

**Multiple choice.** What could quantum computers break?
- Much of today's public-key cryptography ✓
- Nothing
- Only old phones

**Fill in the blank.** The first standards were published in ___. [answer: 2024]

## ENISA Threat Landscape
- id: cy22 · type: read · creator: European Union Agency for Cybersecurity (ENISA) · year: yearly · length: about 3 hours
- access: free | free online

### Introduction
A yearly report on the main cyber threats, such as ransomware, threats to availability, social engineering and threats to data, and the trends behind them.

### Quiz
**Multiple choice.** What does the report describe?
- The main cyber threats each year ✓
- Weather
- Football transfers

**Multiple choice.** Which threat is consistently prominent?
- Ransomware ✓
- Floods
- Paper jams

**Multiple choice.** Who publishes it?
- The EU Agency for Cybersecurity ✓
- A video game company
- A newspaper

**Multiple choice.** How often is it published?
- Every year ✓
- Every decade
- Once only

## The Ransomware Hunting Team
- id: cy23 · type: read · creator: Renee Dudley and Daniel Golden · year: 2022 · length: about 10 hours
- access: paid | buy, or borrow from a library

### Introduction
The story of a small group of volunteers who crack ransomware, malware that encrypts victims' files and demands payment, and help victims recover without paying criminals.

### Quiz
**Multiple choice.** What does ransomware do?
- Encrypts victims' files and demands payment ✓
- Speeds up computers
- Sends free gifts

**Multiple choice.** Who are the book's heroes?
- Volunteers who crack ransomware ✓
- Ransomware gangs
- Police only

**Multiple choice.** How do they help victims?
- Recover files without paying criminals ✓
- By paying ransoms
- They don't

**Fill in the blank.** *The Ransomware Hunting Team* was published in ___. [answer: 2022]

## Following security research
- id: cy24 · type: read · creator: CVE database, security journalists and research archives · length: ongoing
- access: free | the CVE list and many sources are free

### Introduction
Choose a security question from this path and follow three sources: a CVE entry (a publicly listed vulnerability), a security journalist's report, and a research paper. Note how the vulnerability was disclosed and fixed.

### Quiz
**Multiple choice.** What is a CVE?
- A publicly listed software vulnerability with an identifier ✓
- A computer virus
- A password

**Multiple choice.** What is responsible disclosure?
- Reporting a vulnerability to the vendor so it can be fixed before publicising it ✓
- Publishing secrets
- Selling flaws to criminals

**Multiple choice.** Why follow how a flaw was fixed?
- It shows how the system responds and improves ✓
- It doesn't matter
- To find someone to blame

**Multiple choice.** What must you never do?
- Test systems you aren't authorised to ✓
- Read security news
- Update your software

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Should paying ransoms be banned? Use Dudley and Golden, and ENISA.
2. How should the world prepare for quantum computers? Use NIST and Singh.
3. Follow one recent vulnerability from discovery to fix and explain what it teaches.

---

# Final mastery check

Finishing all six stages makes you a capable student of cybersecurity. To earn the **Ascent Mastery: Cybersecurity** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Practice lab.** Complete beginner exercises on a legal practice platform, and write up what you learned.
3. **Incident analysis.** Analyse an unseen real security incident: what happened, how, and how it could have been prevented.
4. **Capstone essay.** 2,500 words on one of the Stage 6 questions. Strong essays are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a curious friend. For example: “How does a phishing email work?”

The certificate needs every stage passed. Never test systems you are not authorised to.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Computer science | Stage 2 | The Computer science path | Free + paid |
| Law | Stage 5 | The Law path | Free + paid |
| Mathematics | Stage 4 | The Mathematics path (number theory and cryptography) | Free + paid |

# Bridges to other subjects

- **Computer science:** systems, networks and code.
- **Mathematics:** number theory and cryptography.
- **Psychology:** social engineering and human error.
- **Law:** cybercrime and privacy.
- **International relations:** cyber conflict between states.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by security professionals and researchers from more than one country
- [ ] Every practice exercise checked to point only to legal practice environments
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
