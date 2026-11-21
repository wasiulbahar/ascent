// The map of knowledge: every area's disciplines and their main subfields, adapted from
// Wikipedia's "Outline of academic disciplines" to Ascent's six areas (src/paths.js AREAS).
// A discipline whose title matches an AREAS discipline shows that discipline's paths.
// Format: area slug -> [[discipline, "subfield; subfield; ..."], ...]
export const OUTLINE = {
  humanities: [
    ["Literature", "Poetry; Drama; The novel; Short fiction; Literary theory; Comparative literature; World literatures; Children's literature; Bengali literature; Russian literature"],
    ["History", "Ancient history; Medieval history; Modern history; World and global history; Economic history; Social history; Military history; History of science; South Asian history; Oral history; Historiography"],
    ["Philosophy", "Metaphysics; Epistemology; Logic; Ethics; Aesthetics; Political philosophy; Philosophy of mind; Philosophy of science; Philosophy of language; Indian philosophy; Chinese philosophy; Islamic philosophy; Africana philosophy"],
    ["Religion", "Comparative religion; Islamic studies; Hindu studies; Buddhist studies; Christian theology; Jewish studies; Sikh studies; Religion and society; Mysticism and Sufism"],
    ["Languages and linguistics", "Phonetics and phonology; Morphology; Syntax; Semantics; Pragmatics; Historical linguistics; Sociolinguistics; Psycholinguistics; Translation studies; Language learning"],
    ["Classics", "Ancient Greek; Latin; Classical archaeology; Ancient philosophy; Classical reception"],
    ["Cultural studies", "Area studies; Gender studies; Postcolonial studies; Media studies; Folklore; Food studies"],
  ],
  arts: [
    ["Music", "Classical music; Music theory; Composition; Ethnomusicology; Jazz; Popular music; South Asian classical music; Opera; Music history"],
    ["Visual arts", "Painting; Drawing; Sculpture; Photography; Printmaking; Art history; Islamic art; Contemporary art; Illustration"],
    ["Film", "Film history; Film theory; Documentary; Animation; Screenwriting; World cinema; Bengali cinema"],
    ["Theatre and dance", "Acting; Directing; Playwriting; Classical dance; Contemporary dance; Theatre history; Performance studies"],
    ["Architecture", "Architectural history; Urban design; Landscape architecture; Sustainable design; Vernacular architecture"],
    ["Design", "Graphic design; Industrial design; Interaction design; Fashion design; Typography; Game design"],
  ],
  "social-sciences": [
    ["Political science", "Geopolitics; International relations; Comparative politics; Political theory; Public policy; Security studies; Elections and voting"],
    ["Economics", "Microeconomics; Macroeconomics; Development economics; Behavioural economics; Econometrics; Economic history; Public economics; Labour economics; Environmental economics; International trade"],
    ["Psychology", "Cognitive psychology; Developmental psychology; Social psychology; Clinical psychology; Personality; Neuropsychology; Positive psychology"],
    ["Sociology and anthropology", "Social theory; Social inequality; Urban sociology; Sociology of religion; Cultural anthropology; Biological anthropology; Ethnography"],
    ["Human geography", "Economic geography; Political geography; Urban geography; Population geography; Development geography; Cartography and GIS"],
    ["Archaeology", "Prehistory; Field archaeology; Bioarchaeology; Maritime archaeology; South Asian archaeology"],
    ["Communication and media", "Journalism; Rhetoric; Media studies; Digital culture; Public relations"],
  ],
  "natural-sciences": [
    ["Physics", "Classical mechanics; Electromagnetism; Thermodynamics; Quantum mechanics; Relativity; Particle physics; Condensed matter; Optics; Nuclear physics; Plasma physics"],
    ["Chemistry", "Organic chemistry; Inorganic chemistry; Physical chemistry; Analytical chemistry; Biochemistry; Materials chemistry; Green chemistry"],
    ["Biology", "Cell biology; Genetics; Evolution; Ecology; Molecular biology; Microbiology; Botany; Zoology; Neuroscience; Marine biology; Immunology"],
    ["Earth sciences", "Geology; Climate science; Oceanography; Meteorology; Hydrology; Seismology; Soil science; River deltas"],
    ["Astronomy", "Planetary science; Stellar astronomy; Galaxies; Cosmology; Astrobiology; Observational astronomy"],
    ["Environmental science", "Conservation; Biodiversity; Pollution; Sustainability; Climate adaptation"],
  ],
  "formal-sciences": [
    ["Mathematics", "Arithmetic and number theory; Algebra; Geometry; Calculus and analysis; Linear algebra; Topology; Combinatorics; Differential equations; Mathematical logic; History of mathematics"],
    ["Logic", "Propositional logic; Predicate logic; Modal logic; Set theory; Proof theory; Philosophical logic"],
    ["Statistics", "Probability; Statistical inference; Bayesian statistics; Data analysis; Experimental design; Biostatistics"],
    ["Computer science", "Programming; Algorithms; Data structures; Theory of computation; Artificial intelligence; Machine learning; Databases; Computer networks; Cybersecurity; Human-computer interaction"],
    ["Systems science", "Systems theory; Control theory; Game theory; Operations research; Complex systems"],
  ],
  professions: [
    ["Medicine and health", "Anatomy; Physiology; Pharmacology; Public health; Epidemiology; Nursing; Mental health; Global health; Nutrition"],
    ["Law", "Constitutional law; International law; Human rights law; Criminal law; Contract law; Legal philosophy; Bangladeshi law"],
    ["Engineering", "Civil engineering; Mechanical engineering; Electrical engineering; Chemical engineering; Software engineering; Biomedical engineering; Aerospace engineering"],
    ["Education", "Learning sciences; Curriculum; Educational psychology; Teaching practice; Education policy"],
    ["Business", "Management; Accounting; Finance; Marketing; Entrepreneurship; Organisational behaviour"],
    ["Agriculture", "Agronomy; Food science; Fisheries; Forestry; Sustainable farming"],
    ["Public administration", "Governance; Public management; Development administration; Urban planning"],
  ],
};
