---
path: Cryptography
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Cryptography

The science of secrets: classical ciphers and how they broke, perfect secrecy and provable security, block ciphers and hashes, public keys and signatures, real attacks and secure messaging, and frontiers like zero-knowledge proofs. About 150 to 200 hours over six to eight months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free courses, textbooks and coding challenges cover the core. You need some programming and school algebra; the number theory is taught as needed. This path is about understanding cryptography, not inventing your own for real use.

# About cryptography

Cryptography protects information from people who should not read or change it. It secures web browsing, payments, messaging, passwords and software updates.

This path starts with the history of codes and codebreaking, learns the modern definitions of security, studies symmetric ciphers and hashes, explores public-key cryptography and signatures, learns from real attacks and secure messaging, and ends with zero-knowledge proofs, computing on encrypted data and research.

**Trivia**
- The Arab scholar Al-Kindi described frequency analysis for breaking ciphers in the 9th century.
- Polish mathematicians broke the Enigma machine in the 1930s, years before the war began.
- British intelligence discovered public-key cryptography in secret in the early 1970s, before it was published openly.
- Shannon proved that a one-time pad, used correctly, cannot be broken at all.

### Timeline
- **c. 850 · Al-Kindi** describes frequency analysis.
- **1883 · Auguste Kerckhoffs** argues a system must stay secure even if everything but the key is public.
- **1932 · Marian Rejewski** breaks the Enigma machine.
- **1949 · Claude Shannon** publishes the theory of secrecy systems.
- **1976 · Whitfield Diffie and Martin Hellman** publish public-key key exchange.
- **1985 · Goldwasser, Micali and Rackoff** introduce zero-knowledge proofs.
- **2001 · AES** becomes the standard block cipher.
- **2009 · Craig Gentry** constructs fully homomorphic encryption.
- **2014 · Heartbleed** exposes a bug in widely used encryption software.
- **2016 · The Double Ratchet** is published for secure messaging.

# What you will be able to do

At the end of this path you will know cryptography the way a strong undergraduate course expects. You will be able to:

- **Explain the history:** classical ciphers, codebreaking and why they failed.
- **Define security precisely:** perfect secrecy, Kerckhoffs's principle and provable security.
- **Use symmetric tools correctly:** block ciphers, modes, hashes and MACs.
- **Explain public-key cryptography:** key exchange, elliptic curves and signatures.
- **Recognise attacks:** side channels, implementation bugs and protocol flaws.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Cryptographers from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: Secrets and codebreakers.
gate: Score 70% or more across this stage's quizzes.
covers: cryptography, history-of-technology

Begin with the great history of codebreaking, a free short book, hands-on classical ciphers, and the first break of Enigma.

## The Codebreakers
- id: cr1 · type: read · creator: David Kahn · year: 1967 · length: about 30 hours
- access: paid | buy, or borrow from a library

### Introduction
A vast history of secret writing and codebreaking from ancient times to the 20th century.

### Quiz
**Multiple choice.** What does the book cover?
- Secret writing and codebreaking ✓
- Gardening
- Nothing

**Multiple choice.** How far back does it go?
- Ancient times ✓
- Last year only
- Nowhere

**Multiple choice.** Who wrote it?
- David Kahn ✓
- Claude Shannon
- David Wong

**Multiple choice.** When was it published?
- 1967 ✓
- 2017
- 1883

## Crypto 101
- id: cr2 · type: read · creator: Laurens Van Houtven · length: about 10 hours
- access: free | free online

### Introduction
A free introductory book that teaches cryptography by showing how to break it, from XOR to TLS.

### Quiz
**Multiple choice.** How does the book teach?
- By showing how to break cryptography ✓
- By poetry
- Not at all

**Multiple choice.** Where does it start?
- XOR ✓
- Calculus
- Nowhere

**Multiple choice.** Who wrote “Crypto 101”?
- Laurens Van Houtven ✓
- David Kahn
- Jean-Philippe Aumasson

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only for students

## CrypTool
- id: cr3 · type: course · creator: CrypTool project · length: about 5 hours
- access: free | free online

### Introduction
Free tools to try classical ciphers and break them with frequency analysis in the browser.

### Quiz
**Multiple choice.** What can you try?
- Classical ciphers ✓
- Cooking recipes
- Nothing

**Multiple choice.** Which attack can you run?
- Frequency analysis ✓
- Phishing
- Nothing

**Multiple choice.** Where does it run?
- In the browser ✓
- Only on paper
- Nowhere

**Multiple choice.** Is “CrypTool” free?
- Yes ✓
- No
- Only for teachers

## Marian Rejewski and the Enigma
- id: cr4 · type: read · creator: Free histories and explainers · year: 1932 · length: about 2 hours
- access: free | free online

### Introduction
A Polish mathematician used permutation theory to reconstruct Enigma's wiring, later sharing the work with Britain and France.

### Quiz
**Multiple choice.** What did Rejewski reconstruct?
- Enigma's wiring ✓
- A bridge
- Nothing

**Multiple choice.** Which mathematics did he use?
- Permutation theory ✓
- Statistics only
- None

**Multiple choice.** Who received his work?
- Britain and France ✓
- Nobody
- Japan

**Multiple choice.** Which country was he from?
- Poland ✓
- Germany
- Italy

---

# Stage 2: What Security Means
level: Explorer
intent: Definitions and proofs.
gate: Score 70% or more across this stage's quizzes.
covers: cryptography, cryptographic-theory

This stage covers Kerckhoffs's principle, perfect secrecy, a famous online course and a textbook on provable security.

## Kerckhoffs's principle
- id: cr5 · type: read · creator: Auguste Kerckhoffs, with free explainers · year: 1883 · length: about 1 hour
- access: free | free online

### Introduction
A system should stay secure even if the enemy knows everything about it except the key.

### Quiz
**Multiple choice.** What may the enemy know?
- Everything except the key ✓
- Nothing
- Only the key

**Multiple choice.** What must stay secret?
- The key ✓
- The algorithm
- Everything

**Multiple choice.** Who stated the principle?
- Auguste Kerckhoffs ✓
- Claude Shannon
- Al-Kindi

**Multiple choice.** When was “Kerckhoffs's principle” published?
- 1883 ✓
- 1949
- 1976

## Communication theory of secrecy systems
- id: cr6 · type: read · creator: Claude Shannon · year: 1949 · length: about 4 hours
- access: free | free online

### Introduction
Shannon proved the one-time pad perfectly secret and showed perfect secrecy needs keys as long as the message.

### Quiz
**Multiple choice.** Which scheme is perfectly secret?
- The one-time pad ✓
- The Caesar cipher
- Enigma

**Multiple choice.** How long must keys be for perfect secrecy?
- As long as the message ✓
- One letter
- Any length

**Multiple choice.** Who wrote the paper?
- Claude Shannon ✓
- Whitfield Diffie
- Craig Gentry

**Multiple choice.** When was “Communication theory of secrecy systems” published?
- 1949 ✓
- 1883
- 2009

## Cryptography I
- id: cr7 · type: course · creator: Dan Boneh, Stanford University on Coursera · length: about 30 hours
- access: free-and-paid | audit free

### Introduction
A rigorous course on stream ciphers, block ciphers, integrity, authenticated encryption and key exchange.

### Quiz
**Multiple choice.** Which topic does it cover?
- Authenticated encryption ✓
- Gardening
- Nothing

**Multiple choice.** Which university offers it?
- Stanford ✓
- Oxford
- None

**Multiple choice.** Who teaches it?
- Dan Boneh ✓
- David Kahn
- Paul Kocher

**Multiple choice.** Can you audit it free?
- Yes ✓
- No
- Only at Stanford

## Introduction to Modern Cryptography
- id: cr8 · type: read · creator: Jonathan Katz and Yehuda Lindell · year: 2007 · length: about 50 hours
- access: paid | buy, or borrow from a library

### Introduction
A textbook building cryptography on precise definitions and proofs that schemes are as hard to break as known problems.

### Quiz
**Multiple choice.** What does the book build on?
- Precise definitions and proofs ✓
- Guesswork
- Nothing

**Multiple choice.** What are schemes proved as hard as?
- Known hard problems ✓
- Nothing
- Easy puzzles

**Multiple choice.** Who wrote “Introduction to Modern Cryptography”?
- Katz and Lindell ✓
- Boneh and Shoup
- Diffie and Hellman

**Multiple choice.** When was the first edition?
- 2007 ✓
- 1967
- 2021

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Show why reusing a one-time pad key breaks it.
2. Explain Kerckhoffs's principle with a door lock.
3. Write a precise definition of a secure cipher in plain words.

---

# Stage 3: Ciphers and Hashes
level: Reader
intent: Symmetric tools.
gate: Score 70% or more across this stage's quizzes.
covers: cryptography, application-security

This stage covers the AES standard, a practical guide, a free graduate textbook and a real hash collision.

## AES (FIPS 197)
- id: cr9 · type: read · creator: US National Institute of Standards and Technology, with free explainers · year: 2001 · length: about 4 hours
- access: free | free online

### Introduction
The block cipher used worldwide, designed by Belgian cryptographers Joan Daemen and Vincent Rijmen as Rijndael.

### Quiz
**Multiple choice.** What kind of cipher is AES?
- A block cipher ✓
- A stream of letters
- A hash

**Multiple choice.** What was its original name?
- Rijndael ✓
- Enigma
- Caesar

**Multiple choice.** Who designed it?
- Daemen and Rijmen ✓
- Diffie and Hellman
- Katz and Lindell

**Multiple choice.** When was it standardised?
- 2001 ✓
- 1976
- 2016

## Serious Cryptography
- id: cr10 · type: read · creator: Jean-Philippe Aumasson · year: 2017 · length: about 15 hours
- access: paid | buy, or borrow from a library

### Introduction
A practical guide to how modern cryptography works and how it fails, from randomness to hashes and authenticated encryption.

### Quiz
**Multiple choice.** What does the book show?
- How cryptography works and fails ✓
- How to cook
- Nothing

**Multiple choice.** Which topic is covered?
- Randomness ✓
- Football
- Nothing

**Multiple choice.** Who wrote “Serious Cryptography”?
- Jean-Philippe Aumasson ✓
- Laurens Van Houtven
- Justin Thaler

**Multiple choice.** When was “Serious Cryptography” published?
- 2017 ✓
- 2007
- 1949

## A Graduate Course in Applied Cryptography
- id: cr11 · type: read · creator: Dan Boneh and Victor Shoup · length: about 60 hours
- access: free | free online

### Introduction
A free textbook covering block cipher modes, message authentication codes, hashing and public-key systems with proofs.

### Quiz
**Multiple choice.** Which integrity tool does it cover?
- Message authentication codes ✓
- Painting
- Nothing

**Multiple choice.** Does it include proofs?
- Yes ✓
- No
- Only pictures

**Multiple choice.** Who are the authors?
- Boneh and Shoup ✓
- Katz and Lindell
- Perrin and Marlinspike

**Multiple choice.** Is “A Graduate Course in Applied Cryptography” free?
- Yes ✓
- No
- Only for professors

## SHAttered
- id: cr12 · type: read · creator: Google and CWI Amsterdam · year: 2017 · length: about 2 hours
- access: free | free online

### Introduction
Researchers produced two different PDF files with the same SHA-1 hash, showing the old hash function was broken.

### Quiz
**Multiple choice.** What did researchers produce?
- Two files with the same hash ✓
- A new cipher
- Nothing

**Multiple choice.** Which hash function was broken?
- SHA-1 ✓
- AES
- Enigma

**Multiple choice.** What kind of files were used?
- PDFs ✓
- Songs
- Photos of cats

**Multiple choice.** When was it announced?
- 2017 ✓
- 2001
- 1985

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Show why ECB mode leaks patterns in an image.
2. Explain why hashes need collision resistance.
3. Encrypt and authenticate a message using a standard library.

---

# Stage 4: Public Keys and Signatures
level: Connoisseur
intent: Strangers sharing secrets.
gate: Score 70% or more across this stage's quizzes.
covers: cryptography, number-theory

This stage covers key exchange, elliptic curves, fast signatures and a practical book on real systems.

## New directions in cryptography
- id: cr13 · type: read · creator: Whitfield Diffie and Martin Hellman · year: 1976 · length: about 3 hours
- access: free | free online

### Introduction
Two people can agree on a shared secret over a public channel, opening the era of public-key cryptography.

### Quiz
**Multiple choice.** What can two people agree on?
- A shared secret ✓
- A price
- Nothing

**Multiple choice.** Over what kind of channel?
- A public one ✓
- A secret one only
- None

**Multiple choice.** Who wrote “New directions in cryptography”?
- Diffie and Hellman ✓
- Goldwasser and Micali
- Boneh and Shoup

**Multiple choice.** When was “New directions in cryptography” published?
- 1976 ✓
- 1949
- 2001

## A primer on elliptic curve cryptography
- id: cr14 · type: read · creator: Nick Sullivan, Cloudflare blog · year: 2013 · length: about 2 hours
- access: free | free online

### Introduction
Points on a curve can be added; repeated addition is easy to compute but hard to undo, giving small strong keys.

### Quiz
**Multiple choice.** What can be added on the curve?
- Points ✓
- Words
- Nothing

**Multiple choice.** What is hard to undo?
- Repeated addition ✓
- Simple sums
- Nothing

**Multiple choice.** What advantage do the keys have?
- Small size with strength ✓
- Huge size
- None

**Multiple choice.** Who wrote the primer?
- Nick Sullivan ✓
- Dan Boneh
- David Kahn

## High-speed high-security signatures
- id: cr15 · type: read · creator: Daniel J. Bernstein and colleagues · year: 2011 · length: about 3 hours
- access: free | free online

### Introduction
The Ed25519 signature scheme, designed to be fast and to avoid common implementation mistakes.

### Quiz
**Multiple choice.** What scheme does the paper introduce?
- Ed25519 ✓
- AES
- SHA-1

**Multiple choice.** What mistakes does it avoid?
- Common implementation mistakes ✓
- Spelling mistakes
- None

**Multiple choice.** Who led it?
- Daniel J. Bernstein ✓
- Craig Gentry
- Marian Rejewski

**Multiple choice.** When was “High-speed high-security signatures” published?
- 2011 ✓
- 1976
- 1932

## Real-World Cryptography
- id: cr16 · type: read · creator: David Wong · year: 2021 · length: about 15 hours
- access: paid | buy, or borrow from a library

### Introduction
How cryptography is used in practice, from secure transport and messaging to cryptocurrencies and hardware.

### Quiz
**Multiple choice.** What is the book about?
- Cryptography in practice ✓
- Only history
- Nothing

**Multiple choice.** Which use is covered?
- Secure messaging ✓
- Gardening
- Nothing

**Multiple choice.** Who wrote “Real-World Cryptography”?
- David Wong ✓
- Jean-Philippe Aumasson
- Nick Sullivan

**Multiple choice.** When was “Real-World Cryptography” published?
- 2021 ✓
- 2011
- 1967

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Perform a Diffie–Hellman exchange with small numbers.
2. Explain why we sign a hash of a message.
3. How do browsers know a website's public key is genuine?

---

# Stage 5: Attacks and Protocols
level: Specialist
intent: How it breaks.
gate: Score 70% or more across this stage's quizzes.
covers: cryptography, network-security

This stage covers timing attacks, an implementation bug that leaked secrets, hands-on attack challenges and secure messaging.

## Timing attacks on implementations
- id: cr17 · type: read · creator: Paul Kocher · year: 1996 · length: about 2 hours
- access: free | free online

### Introduction
Measuring how long operations take can reveal secret keys, even when the mathematics is sound.

### Quiz
**Multiple choice.** What can reveal secret keys?
- How long operations take ✓
- The colour of the screen
- Nothing

**Multiple choice.** Is the mathematics broken?
- No, the implementation leaks ✓
- Yes, always
- Unknown

**Multiple choice.** Who described the attack?
- Paul Kocher ✓
- Claude Shannon
- Trevor Perrin

**Multiple choice.** When was “Timing attacks on implementations” published?
- 1996 ✓
- 2014
- 1976

## Heartbleed
- id: cr18 · type: read · creator: Free analyses and the original disclosure · year: 2014 · length: about 2 hours
- access: free | free online

### Introduction
A missing bounds check in OpenSSL let attackers read server memory, including private keys and passwords.

### Quiz
**Multiple choice.** What was missing in the code?
- A bounds check ✓
- A comment
- Nothing

**Multiple choice.** What could attackers read?
- Server memory ✓
- Only public pages
- Nothing

**Multiple choice.** Which software had the bug?
- OpenSSL ✓
- A word processor
- A game

**Multiple choice.** When was it disclosed?
- 2014 ✓
- 1996
- 2009

## The Cryptopals crypto challenges
- id: cr19 · type: course · creator: NCC Group · length: about 40 hours
- access: free | free online

### Introduction
Coding exercises that make you break real-world cryptographic mistakes, from padding oracles to bad randomness.

### Quiz
**Multiple choice.** What do the challenges make you do?
- Break cryptographic mistakes ✓
- Write essays
- Nothing

**Multiple choice.** Which attack appears?
- Padding oracles ✓
- Phishing calls
- None

**Multiple choice.** Who hosts them?
- NCC Group ✓
- A bank
- A newspaper

**Multiple choice.** Are they free?
- Yes ✓
- No
- Only for employees

## The Double Ratchet algorithm
- id: cr20 · type: read · creator: Trevor Perrin and Moxie Marlinspike · year: 2016 · length: about 3 hours
- access: free | free online

### Introduction
A messaging protocol that keeps changing keys, so stealing one key exposes very few messages.

### Quiz
**Multiple choice.** What does the protocol keep changing?
- Keys ✓
- Usernames
- Nothing

**Multiple choice.** What happens if one key is stolen?
- Very few messages are exposed ✓
- All messages are exposed
- Nothing at all

**Multiple choice.** Who designed “The Double Ratchet algorithm”?
- Perrin and Marlinspike ✓
- Diffie and Hellman
- Kocher and Bernstein

**Multiple choice.** When was “The Double Ratchet algorithm” published?
- 2016 ✓
- 2014
- 2011

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Complete the first Cryptopals set.
2. Explain why secure code must run in constant time.
3. Why do messaging apps change keys so often?

---

# Stage 6: Frontiers and Research
level: Expert
intent: Proving without revealing.
gate: Score 70% or more across this stage's quizzes.
covers: cryptography, cryptographic-theory, privacy-engineering

The final stage covers zero-knowledge proofs, a free book on proof systems, computing on encrypted data, and current research.

## The knowledge complexity of interactive proof systems
- id: cr21 · type: read · creator: Shafi Goldwasser, Silvio Micali and Charles Rackoff · year: 1985 · length: about 3 hours
- access: free-and-paid | summaries are free

### Introduction
You can convince someone a statement is true while revealing nothing else, the idea of zero-knowledge proofs.

### Quiz
**Multiple choice.** What does a zero-knowledge proof reveal?
- Nothing beyond the truth of the statement ✓
- Everything
- The secret

**Multiple choice.** Which idea did the paper introduce?
- Zero-knowledge proofs ✓
- Hash functions
- Enigma

**Multiple choice.** Who introduced zero-knowledge proofs?
- Goldwasser, Micali and Rackoff ✓
- Diffie and Hellman
- Daemen and Rijmen

**Multiple choice.** When was “The knowledge complexity of interactive proof systems” published?
- 1985 ✓
- 1976
- 2009

## Proofs, Arguments, and Zero-Knowledge
- id: cr22 · type: read · creator: Justin Thaler · year: 2022 · length: about 40 hours
- access: free | free online

### Introduction
A free book on modern proof systems that let anyone check large computations quickly.

### Quiz
**Multiple choice.** What do the proof systems let anyone check?
- Large computations quickly ✓
- Spelling
- Nothing

**Multiple choice.** What kind of book is it?
- A free book ✓
- A novel
- A cookbook

**Multiple choice.** Who wrote “Proofs, Arguments, and Zero-Knowledge”?
- Justin Thaler ✓
- David Wong
- Dan Boneh

**Multiple choice.** When was “Proofs, Arguments, and Zero-Knowledge” published?
- 2022 ✓
- 1985
- 2007

## Fully homomorphic encryption
- id: cr23 · type: read · creator: Craig Gentry, with free explainers · year: 2009 · length: about 3 hours
- access: free | free online

### Introduction
Computing on encrypted data without decrypting it, so a server can process information it cannot read.

### Quiz
**Multiple choice.** What can be done on encrypted data?
- Computing ✓
- Nothing
- Only deleting

**Multiple choice.** What can the server not do?
- Read the data ✓
- Store it
- Process it

**Multiple choice.** Who first constructed it?
- Craig Gentry ✓
- Shafi Goldwasser
- Paul Kocher

**Multiple choice.** When?
- 2009 ✓
- 2016
- 1996

## Reading current research
- id: cr24 · type: read · creator: IACR Cryptology ePrint Archive and *Journal of Cryptology* · length: ongoing
- access: free-and-paid | preprints are free

### Introduction
Choose a question from this path and read a recent paper, noting its security model and assumptions.

### Quiz
**Multiple choice.** What should you note in a cryptography paper?
- Its security model and assumptions ✓
- Only the title
- Nothing

**Multiple choice.** Where are most preprints posted?
- The IACR ePrint Archive ✓
- A cookbook
- Nowhere

**Multiple choice.** Which journal is a leading one?
- *Journal of Cryptology* ✓
- *Vogue*
- *The Lancet*

**Multiple choice.** Are preprints free?
- Yes ✓
- No
- Only for members

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Explain a zero-knowledge proof with a cave or colour-blind friend.
2. Where would homomorphic encryption help in healthcare?
3. Summarise a recent ePrint paper for a general reader.

---

# Final mastery check

Finishing all six stages makes you a capable student of cryptography. To earn the **Ascent Mastery: Cryptography** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Attack lab.** Break a deliberately flawed scheme and explain the fix.
3. **Proof exercise.** Write a short security argument for a simple scheme.
4. **Capstone essay.** 2,500 words on one of the Stage 6 questions. Strong essays are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “How can two strangers share a secret in public?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Cybersecurity | Stage 5 | The Cybersecurity path | Free + paid |
| Number theory | Stage 4 | The Number theory path | Free + paid |
| Discrete mathematics | Stage 2 | The Discrete mathematics path | Free + paid |

# Bridges to other subjects

- **Mathematics:** number theory and algebra.
- **Computer science:** complexity.
- **History:** codebreaking in war.
- **Law:** privacy and surveillance.
- **Economics:** digital money.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by cryptographers from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
