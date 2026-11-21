// The 17 browsing domains, from the knowledge-base specification (section 5). The fields inside
// each domain live in data/taxonomy.json (built by tools/build_taxonomy.py); slug = the domain's
// id in that file without "d:". short is the label for tight spaces, such as the welcome tour.
export const DOMAINS = [
  { slug: "formal-sciences-and-mathematical-methods", title: "Formal sciences and mathematical methods", short: "Formal sciences", color: "butter", icon: "sigma", blurb: "Mathematics, statistics, logic and systems" },
  { slug: "natural-sciences", title: "Natural sciences", short: "Natural sciences", color: "mint", icon: "atom", blurb: "Physics, chemistry, biology, earth and space" },
  { slug: "computer-information-and-data-sciences", title: "Computer, information and data sciences", short: "Computing and data", color: "sky", icon: "code", blurb: "Computer science, information systems and data science" },
  { slug: "engineering-and-technology", title: "Engineering and technology", short: "Engineering", color: "peach", icon: "gear", blurb: "Civil, electrical, mechanical, chemical and more" },
  { slug: "medical-health-and-care-sciences", title: "Medical, health and care sciences", short: "Health and medicine", color: "rose", icon: "heart", blurb: "Medicine, public health, nursing and care" },
  { slug: "agricultural-food-forestry-and-veterinary-sciences", title: "Agricultural, food, forestry and veterinary sciences", short: "Agriculture and food", color: "mint", icon: "leaf", blurb: "Farming, food, forests, fisheries and animal health" },
  { slug: "social-and-behavioural-sciences", title: "Social and behavioural sciences", short: "Social sciences", color: "sky", icon: "globe", blurb: "Economics, politics, psychology, sociology and more" },
  { slug: "economics-business-finance-and-management", title: "Economics, business, finance and management", short: "Business and finance", color: "butter", icon: "chart", blurb: "Accounting, finance, management and enterprise" },
  { slug: "law-legal-and-justice-studies", title: "Law, legal and justice studies", short: "Law", color: "lilac", icon: "scale", blurb: "Public, private and international law, and justice" },
  { slug: "humanities-and-historical-studies", title: "Humanities and historical studies", short: "Humanities", color: "peach", icon: "book", blurb: "History, philosophy, religion and archaeology" },
  { slug: "languages-literature-and-linguistic-studies", title: "Languages, literature and linguistic studies", short: "Languages and literature", color: "rose", icon: "chat", blurb: "Linguistics, literatures and area studies" },
  { slug: "arts-design-and-creative-practice", title: "Arts, design and creative practice", short: "Arts and design", color: "lilac", icon: "music", blurb: "Fine art, design, music, performance and film" },
  { slug: "education-and-learning-sciences", title: "Education and learning sciences", short: "Education", color: "butter", icon: "course", blurb: "How people learn and how teaching works" },
  { slug: "environmental-climate-and-sustainability-studies", title: "Environmental, climate and sustainability studies", short: "Environment and climate", color: "mint", icon: "leaf", blurb: "Ecology, climate, sustainability and energy" },
  { slug: "architecture-planning-and-the-built-environment", title: "Architecture, planning and the built environment", short: "Architecture and planning", color: "peach", icon: "building", blurb: "Architecture, cities, construction and heritage" },
  { slug: "communication-journalism-and-media-studies", title: "Communication, journalism and media studies", short: "Media and communication", color: "sky", icon: "mic", blurb: "Communication, journalism, media and broadcasting" },
  { slug: "services-professional-and-applied-studies", title: "Services, professional and applied studies", short: "Applied and professional", color: "rose", icon: "briefcase", blurb: "Tourism, sport, logistics, safety and other services" },
];

// Every published path. Add a line here when a new paths/<slug>.md is ready.
// fields: the taxonomy entities the path teaches (ids in data/taxonomy.json); doms: its domains.
export const PATHS = [
  { slug: "dostoevsky", title: "Dostoevsky", color: "peach", icon: "book", fields: ["russian-literature", "world-literature"], doms: ["languages-literature-and-linguistic-studies"] },
  { slug: "classical-music", title: "Classical music", color: "lilac", icon: "music", fields: ["music"], doms: ["arts-design-and-creative-practice"] },
  { slug: "geopolitics", title: "Geopolitics", color: "sky", icon: "globe", fields: ["geopolitics", "international-relations"], doms: ["social-and-behavioural-sciences"] },
  { slug: "philosophy", title: "Philosophy", color: "butter", icon: "bulb", fields: ["philosophy"], doms: ["humanities-and-historical-studies"] },
  { slug: "economics", title: "Economics", color: "mint", icon: "chart", fields: ["economics"], doms: ["social-and-behavioural-sciences", "economics-business-finance-and-management"] },
  { slug: "history", title: "History", color: "lilac", icon: "globe", fields: ["history"], doms: ["humanities-and-historical-studies"] },
  { slug: "physics", title: "Physics", color: "sky", icon: "atom", fields: ["physics"], doms: ["natural-sciences"] },
  { slug: "mathematics", title: "Mathematics", color: "rose", icon: "sigma", fields: ["mathematics"], doms: ["formal-sciences-and-mathematical-methods"] },
  { slug: "biology", title: "Biology", color: "mint", icon: "leaf", fields: ["biological-sciences"], doms: ["natural-sciences"] },
];
