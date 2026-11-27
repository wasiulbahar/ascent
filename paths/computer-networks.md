---
path: Computer Networks
status: draft
version: 1
drafted: 2026-11-26
template: mathematics-computing
---

# Computer Networks

How the internet actually works: the physical cables and radio links, layers and packets, TCP/IP and routing, DNS and the web, wireless and mobile networks, security and outages, and who governs the network and who is left out. About 180 to 220 hours over seven to nine months.

**Access and balance.** Every title is labelled **Free**, **Free + paid** or **Paid**. Free textbooks, protocol specifications and tools like Wireshark cover the core. You need basic programming and comfort with a command line. Only capture and probe traffic on networks you own or have permission to test.

# About computer networks

Computer networks connect devices so they can exchange data. The internet is a network of networks, held together by shared protocols, undersea cables, routers and agreements between thousands of organisations.

This path starts with the physical internet and its story, teaches layers, packets and the classic textbooks, explains TCP/IP, routing and DNS, then the web and content delivery, wireless networks, encryption and outages, and ends with internet governance, the digital divide and research.

**Trivia**
- The first message sent over the ARPANET in 1969 was meant to be “LOGIN”; the system crashed after “LO”.
- Undersea cables carry the vast majority of data travelling between continents, far more than satellites.
- The word “packet” for a chunk of network data was coined by the British computer scientist Donald Davies in the 1960s.
- In October 2021 a faulty routing change took Facebook, Instagram and WhatsApp offline for about six hours.

### Timeline
- **1964 · Paul Baran** describes distributed, packet-switched networks.
- **1965 · Donald Davies** coins the term “packet”.
- **1969 · The ARPANET** sends its first message.
- **1974 · Vint Cerf and Bob Kahn** publish the design of TCP.
- **1983 · The ARPANET** switches to TCP/IP; DNS is introduced.
- **1989 · Tim Berners-Lee** proposes the World Wide Web at CERN.
- **1997 · The first Wi-Fi standard** (IEEE 802.11) is published.
- **2018 · TLS 1.3** is published, speeding up secure connections.

# What you will be able to do

At the end of this path you will know computer networks the way a strong university course expects. You will be able to:

- **Explain the layers:** physical links, packets, addressing, transport and applications.
- **Explain TCP/IP:** reliable delivery, congestion control, IP addressing and routing.
- **Explain the web:** DNS, HTTP, caching and content delivery networks.
- **Explain wireless and security:** Wi-Fi, mobile networks, TLS, firewalls and common attacks.
- **Analyse real networks:** capture traffic, diagnose problems and discuss governance and access.
- **For the Mastery certificate:** have written the Scholar challenges and passed the final mastery check.

These goals are a draft standard. Network engineers and computer science educators from more than one country will confirm them before the path is published.

**How stages work.** Each work ends with a short quiz. Score 70% or more across a stage's quizzes to pass it. If you fall short, you can retake the quizzes, or continue anyway: the stage then stays marked **Not finished** until you come back and pass it.

---

# Stage 1: First Encounters
level: Beginner
intent: The internet is physical.
gate: Score 70% or more across this stage's quizzes.
covers: computer-networks, telecommunications-engineering

The internet is made of real cables and buildings. This stage gives you a journey to its physical heart, a friendly video series, a map of undersea cables, and free lessons.

## Tubes
- id: cn1 · type: read · creator: Andrew Blum · year: 2012 · length: about 8 hours
- access: paid | buy, or borrow from a library

### Introduction
A journalist visits the internet's physical places: exchange points, data centres and the landing stations of undersea cables.

### Quiz
**Multiple choice.** What does Blum visit?
- The internet's physical places ✓
- Ancient ruins
- Football stadiums

**Multiple choice.** Which place is an internet hub?
- An exchange point ✓
- A bakery
- A library only

**Multiple choice.** Who wrote the book?
- Andrew Blum ✓
- Tim Berners-Lee
- Vint Cerf

**Multiple choice.** When was it published?
- 2012 ✓
- 1969
- 1999

## How the Internet Works
- id: cn2 · type: watch · creator: Code.org, with Vint Cerf and others · length: about 1 hour
- access: free | free online

### Introduction
Short videos on wires and wireless, IP addresses and DNS, packets and routing, HTTP and encryption.

### Quiz
**Multiple choice.** Which topic is covered?
- Packets and routing ✓
- Cooking
- Painting

**Multiple choice.** Who helps present the series?
- Vint Cerf ✓
- Andrew Blum
- Paul Baran

**Multiple choice.** Who made it?
- Code.org ✓
- A bank
- A film studio

**Multiple choice.** Is it free?
- Yes ✓
- No
- Only in schools

## Submarine Cable Map
- id: cn3 · type: read · creator: TeleGeography · length: about 1 hour
- access: free | free online

### Introduction
An interactive map of the hundreds of undersea cables linking continents, with their landing points and owners.

### Quiz
**Multiple choice.** What does the map show?
- Undersea internet cables ✓
- Shipping routes only
- Rivers

**Multiple choice.** Roughly how many cables are there?
- Hundreds ✓
- Three
- Millions

**Multiple choice.** Who makes the map?
- TeleGeography ✓
- NASA
- A tourist board

**Multiple choice.** Is “Submarine Cable Map” free?
- Yes ✓
- No
- Only for engineers

## Computers and the Internet
- id: cn4 · type: course · creator: Khan Academy · length: about 6 hours
- access: free | free online

### Introduction
Lessons on bits, networks, IP addresses, routing, TCP, DNS, HTTP and online security, with exercises.

### Quiz
**Multiple choice.** Which topic does the course cover?
- IP addresses ✓
- Volcanoes
- Poetry

**Multiple choice.** What does it include besides lessons?
- Exercises ✓
- Nothing
- Recipes

**Multiple choice.** Who provides it?
- Khan Academy ✓
- A phone company
- A bank

**Multiple choice.** Is “Computers and the Internet” free?
- Yes ✓
- No
- Only for students

---

# Stage 2: Layers and Packets
level: Explorer
intent: How networks are organised.
gate: Score 70% or more across this stage's quizzes.
covers: computer-networks, computer-systems

This stage teaches the layered model with two classic textbooks, a tool to see real packets, and the invention of packet switching.

## Computer Networking: A Top-Down Approach
- id: cn5 · type: read · creator: James Kurose and Keith Ross · year: 2000 · length: about 60 hours
- access: free-and-paid | video lectures free

### Introduction
The most widely used networking textbook, starting with applications and working down through transport, network and link layers.

### Quiz
**Multiple choice.** Which way does the book work through the layers?
- Top down ✓
- Bottom up only
- Randomly

**Multiple choice.** Which layer comes first?
- Application ✓
- Physical
- None

**Multiple choice.** Who wrote it?
- Kurose and Ross ✓
- Peterson and Davie
- Cerf and Kahn

**Multiple choice.** When was the first edition published?
- 2000 ✓
- 1974
- 2018

## Computer Networks: A Systems Approach
- id: cn6 · type: read · creator: Larry Peterson and Bruce Davie · year: 1996 · length: about 50 hours
- access: free | free online

### Introduction
A classic textbook, now free and open source, explaining networks through the design choices behind real systems.

### Quiz
**Multiple choice.** How does the book explain networks?
- Through design choices in real systems ✓
- Through poetry
- Without examples

**Multiple choice.** Is “Computer Networks: A Systems Approach” free?
- Yes, and open source ✓
- No
- Only in print

**Multiple choice.** Who wrote “Computer Networks: A Systems Approach”?
- Peterson and Davie ✓
- Kurose and Ross
- Blum

**Multiple choice.** When was “Computer Networks: A Systems Approach” published?
- 1996 ✓
- 2012
- 1964

## Wireshark
- id: cn7 · type: course · creator: Wireshark Foundation · length: about 6 hours
- access: free | free online

### Introduction
A free tool to capture and inspect packets on your own network, revealing every layer's headers.

### Quiz
**Multiple choice.** What does Wireshark capture?
- Packets ✓
- Photos
- Fish

**Multiple choice.** Whose networks should you capture on?
- Your own or with permission ✓
- Anyone's
- Neighbours' secretly

**Multiple choice.** What does it reveal?
- Each layer's headers ✓
- Passwords always
- Nothing

**Multiple choice.** Is “Wireshark” free?
- Yes ✓
- No
- Only for companies

## On Distributed Communications
- id: cn8 · type: read · creator: Paul Baran, RAND Corporation · year: 1964 · length: about 3 hours
- access: free | free online

### Introduction
Baran proposed breaking messages into blocks routed independently across a mesh, so the network survives damage.

### Quiz
**Multiple choice.** What did Baran propose breaking messages into?
- Blocks routed independently ✓
- Letters
- Songs

**Multiple choice.** Why use a mesh?
- So the network survives damage ✓
- To save paper
- No reason

**Multiple choice.** Who published the report?
- RAND Corporation ✓
- CERN
- A newspaper

**Multiple choice.** Is “On Distributed Communications” free?
- Yes ✓
- No
- Only for the military

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Capture a web page load in Wireshark and label every layer.
2. Why do networks use layers?
3. Compare packet switching with the old telephone circuit switching.

---

# Stage 3: TCP/IP, Routing and Names
level: Reader
intent: The core of the internet.
gate: Score 70% or more across this stage's quizzes.
covers: computer-networks, network-science

This stage covers the internet's core: TCP's design, routing between networks, the Domain Name System, and the move to IPv6.

## A Protocol for Packet Network Intercommunication
- id: cn9 · type: read · creator: Vint Cerf and Bob Kahn · year: 1974 · length: about 3 hours
- access: free | free online

### Introduction
The paper that designed TCP to connect different networks into one internet, with end hosts responsible for reliability.

### Quiz
**Multiple choice.** What did the paper design?
- TCP ✓
- The web
- Wi-Fi

**Multiple choice.** What does TCP connect?
- Different networks into one internet ✓
- Phones only
- Nothing

**Multiple choice.** Who is responsible for reliability?
- The end hosts ✓
- The cables
- Nobody

**Multiple choice.** When was “A Protocol for Packet Network Intercommunication” published?
- 1974 ✓
- 1989
- 2000

## Routing and BGP
- id: cn10 · type: read · creator: Cloudflare Learning Center · length: about 4 hours
- access: free | free online

### Introduction
Routers forward packets hop by hop; the Border Gateway Protocol lets tens of thousands of networks announce which addresses they can reach.

### Quiz
**Multiple choice.** What does BGP let networks announce?
- Which addresses they can reach ✓
- Their profits
- Weather

**Multiple choice.** How do routers forward packets?
- Hop by hop ✓
- All at once
- By post

**Multiple choice.** What happens with a bad BGP announcement?
- Traffic can go to the wrong place ✓
- Nothing
- Speeds increase

**Multiple choice.** Is the Learning Center free?
- Yes ✓
- No
- Only for customers

## How DNS works
- id: cn11 · type: read · creator: howdns.works comic and Cloudflare guides · year: 1983 · length: about 2 hours
- access: free | free online

### Introduction
DNS turns names like example.org into IP addresses through a hierarchy of root, top-level and authoritative servers.

### Quiz
**Multiple choice.** What does DNS turn names into?
- IP addresses ✓
- Passwords
- Images

**Multiple choice.** What is at the top of the DNS hierarchy?
- Root servers ✓
- A single laptop
- Nothing

**Multiple choice.** When was DNS introduced?
- 1983 ✓
- 1969
- 2018

**Multiple choice.** Is the comic free?
- Yes ✓
- No
- Only for engineers

## IPv6
- id: cn12 · type: read · creator: Regional internet registry guides (RIPE NCC, APNIC and others) · length: about 3 hours
- access: free | free online

### Introduction
IPv4's roughly four billion addresses ran out; IPv6 offers vastly more, and adoption keeps growing worldwide.

### Quiz
**Multiple choice.** Why was IPv6 needed?
- IPv4 addresses ran out ✓
- IPv4 was too fast
- No reason

**Multiple choice.** About how many IPv4 addresses exist?
- Four billion ✓
- Four hundred
- Infinite

**Multiple choice.** Is IPv6 adoption growing?
- Yes ✓
- No
- It has stopped

**Multiple choice.** Are the guides free?
- Yes ✓
- No
- Only for members

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Trace a packet's route with traceroute and explain each hop.
2. How does TCP slow down when the network is congested?
3. What happens, step by step, when you type a web address?

---

# Stage 4: The Web and Content Delivery
level: Connoisseur
intent: Applications on top.
gate: Score 70% or more across this stage's quizzes.
covers: computer-networks, internet-architecture

This stage covers the web: HTTP, the web's invention, content delivery networks, and making the web fast.

## HTTP
- id: cn13 · type: read · creator: MDN Web Docs · length: about 4 hours
- access: free | free online

### Introduction
How browsers and servers exchange requests and responses, with methods, status codes, headers and caching.

### Quiz
**Multiple choice.** What does status code 404 mean?
- Not found ✓
- Success
- Server on fire

**Multiple choice.** Which method usually fetches a page?
- GET ✓
- DELETE
- BURN

**Multiple choice.** What do caching headers control?
- How long responses can be reused ✓
- Page colours
- Nothing

**Multiple choice.** Is MDN free?
- Yes ✓
- No
- Only for developers

## Weaving the Web
- id: cn14 · type: read · creator: Tim Berners-Lee · year: 1999 · length: about 7 hours
- access: paid | buy, or borrow from a library

### Introduction
The web's inventor explains how he created URLs, HTTP and HTML at CERN and why he kept the web open and royalty-free.

### Quiz
**Multiple choice.** Where did Berners-Lee invent the web?
- CERN ✓
- MIT
- Google

**Multiple choice.** Which did he create?
- URLs, HTTP and HTML ✓
- Wi-Fi
- Email

**Multiple choice.** Why does the web have no royalties?
- He kept it open ✓
- It was never popular
- Law forbids it

**Multiple choice.** When was the book published?
- 1999 ✓
- 1989
- 2012

## Content delivery networks
- id: cn15 · type: read · creator: Cloudflare Learning Center and streaming engineering blogs · length: about 3 hours
- access: free | free online

### Introduction
CDNs store copies of content near users, cutting delays; video streaming services place servers inside internet providers' networks.

### Quiz
**Multiple choice.** What do CDNs store near users?
- Copies of content ✓
- Users' passwords
- Nothing

**Multiple choice.** What do they reduce?
- Delays ✓
- Security
- Content

**Multiple choice.** Where do streaming services place servers?
- Inside internet providers' networks ✓
- On the Moon
- Nowhere

**Multiple choice.** Are these resources free?
- Yes ✓
- No
- Only for companies

## High Performance Browser Networking
- id: cn16 · type: read · creator: Ilya Grigorik · year: 2013 · length: about 20 hours
- access: free | free online

### Introduction
A free book on why latency matters more than bandwidth for the web, and how TCP, TLS, HTTP/2 and mobile networks affect speed.

### Quiz
**Multiple choice.** What matters more for web speed, according to Grigorik?
- Latency ✓
- Screen size
- Colour

**Multiple choice.** Which protocol does the book cover?
- HTTP/2 ✓
- Morse code
- Smoke signals

**Multiple choice.** Who wrote “High Performance Browser Networking”?
- Ilya Grigorik ✓
- Tim Berners-Lee
- Andrew Blum

**Multiple choice.** Is it free online?
- Yes ✓
- No
- Only in print

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Measure where a slow web page loses time, using browser developer tools.
2. Why does latency matter more than bandwidth for most web pages?
3. How did Berners-Lee's choices shape the open web?

---

# Stage 5: Wireless, Security and Failure
level: Specialist
intent: Networks under pressure.
gate: Score 70% or more across this stage's quizzes.
covers: computer-networks, network-security, wireless-networks

This stage covers wireless and mobile networks, encryption with TLS, network defences, and what large outages teach.

## Wi-Fi and mobile networks
- id: cn17 · type: read · creator: GSMA and IEEE explainers · length: about 4 hours
- access: free | free online

### Introduction
Wi-Fi shares radio channels within a building; mobile networks hand users between cell towers as they move, with 4G and 5G adding speed and capacity.

### Quiz
**Multiple choice.** What do mobile networks do as you move?
- Hand you between towers ✓
- Disconnect you
- Nothing

**Multiple choice.** What does 5G add?
- Speed and capacity ✓
- Paper bills
- Nothing

**Multiple choice.** What medium does Wi-Fi use?
- Radio ✓
- Copper only
- Light only

**Multiple choice.** Are these explainers free?
- Yes ✓
- No
- Only for engineers

## The Illustrated TLS 1.3 Connection
- id: cn18 · type: read · creator: Michael Driscoll · year: 2018 · length: about 2 hours
- access: free | free online

### Introduction
Every byte of a real TLS 1.3 handshake explained, showing how browsers and servers agree keys and verify certificates.

### Quiz
**Multiple choice.** What does the TLS handshake agree?
- Encryption keys ✓
- Prices
- Fonts

**Multiple choice.** What does a certificate prove?
- A server's identity ✓
- Its location
- Its age

**Multiple choice.** Which web addresses use TLS?
- HTTPS ✓
- FTP only
- None

**Multiple choice.** Is the guide free?
- Yes ✓
- No
- Only for experts

## Network defences
- id: cn19 · type: read · creator: Cloudflare Learning Center and national cyber security centre guides · length: about 4 hours
- access: free | free online

### Introduction
Firewalls filter traffic, VPNs encrypt tunnels, and distributed denial-of-service attacks flood targets with traffic from many machines.

### Quiz
**Multiple choice.** What do firewalls do?
- Filter traffic ✓
- Heat rooms
- Speed up Wi-Fi

**Multiple choice.** What is a DDoS attack?
- Flooding a target with traffic from many machines ✓
- A virus in email
- A software update

**Multiple choice.** What do VPNs create?
- Encrypted tunnels ✓
- Free internet
- New addresses for houses

**Multiple choice.** Are these guides free?
- Yes ✓
- No
- Only for companies

## The 2021 Facebook outage
- id: cn20 · type: read · creator: Meta engineering post and Cloudflare analysis · year: 2021 · length: about 2 hours
- access: free | free online

### Introduction
A maintenance command withdrew Facebook's BGP routes; its DNS servers vanished from the internet, locking out even staff.

### Quiz
**Multiple choice.** What did the faulty command withdraw?
- BGP routes ✓
- Passwords
- Power

**Multiple choice.** Which services went offline?
- Facebook, Instagram and WhatsApp ✓
- Only email
- Nothing

**Multiple choice.** About how long did the outage last?
- About six hours ✓
- Six seconds
- Six months

**Multiple choice.** Are the analyses free?
- Yes ✓
- No
- Only for staff

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate.
1. Explain how HTTPS protects you on public Wi-Fi, and what it doesn't protect.
2. What made the 2021 outage so hard to fix?
3. Design defences for a small organisation's network.

---

# Stage 6: Governance, Access and Research
level: Expert
intent: Who runs the internet, and who is left out.
gate: Score 70% or more across this stage's quizzes.
covers: computer-networks, digital-sociology

The final stage covers how internet standards are made, the digital divide, cables and satellites, and current research.

## The Tao of IETF
- id: cn21 · type: read · creator: Internet Engineering Task Force · length: about 2 hours
- access: free | free online

### Introduction
How internet standards are written openly by volunteers through rough consensus and running code, published as RFCs.

### Quiz
**Multiple choice.** How does the IETF make decisions?
- Rough consensus and running code ✓
- Voting by governments
- Coin tosses

**Multiple choice.** What are internet standards published as?
- RFCs ✓
- Novels
- Films

**Multiple choice.** Who can take part?
- Anyone ✓
- Only governments
- Only companies

**Multiple choice.** Is “The Tao of IETF” free?
- Yes ✓
- No
- Only for members

## Facts and Figures
- id: cn22 · type: read · creator: International Telecommunication Union · year: annual · length: about 2 hours
- access: free | free online

### Introduction
The ITU's yearly data on who is online; about a third of the world's people remain offline, mostly in low-income countries.

### Quiz
**Multiple choice.** Roughly what share of people remain offline?
- About a third ✓
- None
- Almost everyone

**Multiple choice.** Where are most offline people?
- Low-income countries ✓
- Rich cities
- Antarctica

**Multiple choice.** Which UN agency publishes the data?
- The ITU ✓
- FIFA
- UNESCO only

**Multiple choice.** Is “Facts and Figures” free?
- Yes ✓
- No
- Only for governments

## Satellites and cables
- id: cn23 · type: read · creator: ITU, TeleGeography and space agency explainers · length: about 3 hours
- access: free | free online

### Introduction
Low-orbit satellite constellations bring internet to remote places, while undersea cables still carry most intercontinental traffic.

### Quiz
**Multiple choice.** What do low-orbit satellites help with?
- Internet in remote places ✓
- Undersea cables
- Nothing

**Multiple choice.** What carries most intercontinental traffic?
- Undersea cables ✓
- Satellites
- Radio towers

**Multiple choice.** Why use low orbits?
- Lower latency ✓
- Higher latency
- Cheaper food

**Multiple choice.** Is “Satellites and cables” free?
- Yes ✓
- No
- Only for engineers

## Reading current research
- id: cn24 · type: read · creator: ACM SIGCOMM and USENIX NSDI papers, and RFCs · length: ongoing
- access: free | many papers free

### Introduction
Choose a question from this path and read a recent conference paper and the RFC behind a protocol you use.

### Quiz
**Multiple choice.** Which conference focuses on networking?
- SIGCOMM ✓
- The Oscars
- Eurovision

**Multiple choice.** What defines a protocol formally?
- An RFC ✓
- A tweet
- A rumour

**Multiple choice.** What should you read besides a paper?
- An RFC ✓
- Nothing
- Adverts

**Multiple choice.** Are many papers free?
- Yes ✓
- No
- None are

### Scholar challenge (optional)
Choose one, at least 1,500 words. Required for the Mastery certificate, where it becomes the capstone essay.
1. Read an RFC for a protocol you use daily and summarise it.
2. What would it take to connect the next billion people?
3. Who should govern the internet?

---

# Final mastery check

Finishing all six stages makes you a capable student of computer networks. To earn the **Ascent Mastery: Computer Networks** certificate, you also complete:

1. **The grand quiz.** 40 game-style questions across all six stages. Pass mark 80%, with unlimited retakes.
2. **Packet lab.** Capture and explain DNS, TCP, TLS and HTTP traffic on your own network.
3. **Network design.** Design a small network with addressing, routing and security, and justify it.
4. **Capstone report.** 2,500 words on one of the Stage 6 questions. Strong reports are read by an expert reviewer.
5. **Explain it.** Answer three unseen questions as if to a friend. For example: “How does a message find its way across the world?”

The certificate needs every stage passed.

---

# Side branches

| Branch | Opens after | Works | Access |
|---|---|---|---|
| Cybersecurity | Stage 5 | The Cybersecurity path | Free + paid |
| Web development | Stage 4 | The Web development path | Free + paid |
| Electrical engineering | Stage 5 | The Electrical engineering path | Free + paid |

# Bridges to other subjects

- **Computer science:** operating systems.
- **Cybersecurity:** attacks and defences.
- **Physics:** radio and light.
- **Economics:** telecoms markets.
- **Politics:** internet governance.

# Review checklist for editors and experts

- [ ] Every `[verify]` item resolved
- [ ] Reviewed by network engineers and computer science educators from more than one country
- [ ] Every access label checked: free sources exist and links are legal
- [ ] Every quiz question has exactly one correct answer
