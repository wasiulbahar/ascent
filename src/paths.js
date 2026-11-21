// Subject areas follow Wikipedia's Outline of academic disciplines, grouped for browsing.
// Each discipline lists the paths published under it; add a path's slug when its file is ready.
export const AREAS = [
  { slug: "humanities", title: "Humanities", color: "peach", icon: "book", blurb: "Literature, history, philosophy, religion and languages",
    disciplines: [
      { title: "Literature", paths: ["dostoevsky"] },
      { title: "History", paths: [] },
      { title: "Philosophy", paths: ["philosophy"] },
      { title: "Religion", paths: [] },
      { title: "Languages and linguistics", paths: [] },
    ] },
  { slug: "arts", title: "Arts", color: "lilac", icon: "music", blurb: "Music, visual arts, film, theatre and architecture",
    disciplines: [
      { title: "Music", paths: ["classical-music"] },
      { title: "Visual arts", paths: [] },
      { title: "Film", paths: [] },
      { title: "Theatre and dance", paths: [] },
      { title: "Architecture", paths: [] },
    ] },
  { slug: "social-sciences", title: "Social sciences", color: "sky", icon: "globe", blurb: "Politics, economics, psychology, sociology and geography",
    disciplines: [
      { title: "Political science", paths: ["geopolitics"] },
      { title: "Economics", paths: ["economics"] },
      { title: "Psychology", paths: [] },
      { title: "Sociology and anthropology", paths: [] },
      { title: "Human geography", paths: [] },
    ] },
  { slug: "natural-sciences", title: "Natural sciences", color: "mint", icon: "atom", blurb: "Physics, chemistry, biology, earth and space",
    disciplines: [
      { title: "Physics", paths: [] },
      { title: "Chemistry", paths: [] },
      { title: "Biology", paths: [] },
      { title: "Earth sciences", paths: [] },
      { title: "Astronomy", paths: [] },
    ] },
  { slug: "formal-sciences", title: "Formal sciences", color: "butter", icon: "chart", blurb: "Mathematics, logic, statistics and computer science",
    disciplines: [
      { title: "Mathematics", paths: [] },
      { title: "Logic", paths: [] },
      { title: "Statistics", paths: [] },
      { title: "Computer science", paths: [] },
    ] },
  { slug: "professions", title: "Professions and applied sciences", color: "rose", icon: "course", blurb: "Medicine, law, engineering, education and business",
    disciplines: [
      { title: "Medicine and health", paths: [] },
      { title: "Law", paths: [] },
      { title: "Engineering", paths: [] },
      { title: "Education", paths: [] },
      { title: "Business", paths: [] },
    ] },
];

// Every published path. Add a line here when a new paths/<slug>.md is ready.
export const PATHS = [
  { slug: "dostoevsky", title: "Dostoevsky", color: "peach", icon: "book", domain: "Literature" },
  { slug: "classical-music", title: "Classical music", color: "lilac", icon: "music", domain: "Music" },
  { slug: "geopolitics", title: "Geopolitics", color: "sky", icon: "globe", domain: "Political science" },
  { slug: "philosophy", title: "Philosophy", color: "butter", icon: "bulb", domain: "Philosophy" },
  { slug: "economics", title: "Economics", color: "mint", icon: "chart", domain: "Economics" },
];
