"""Crosswalks from Ascent's disciplines to two external schemes (spec section 8).

Codes and labels are written from the published schemes (OECD Frascati Manual 2015, FORD;
UNESCO ISCED-F 2013) and every mapping is marked "needs_verification" until checked against
the official documents. A mapping is not a claim of equivalence: the type says how the two relate,
from the external code's side: "close" (about the same scope), "broader" (the code covers more
than the discipline), "narrower" (the code covers only part of it), "related" (overlapping).
Fields below a discipline inherit its codes in the app, shown as "via <discipline>".
"""
FORD = {
    "1.1": "Mathematics", "1.2": "Computer and information sciences", "1.3": "Physical sciences", "1.4": "Chemical sciences",
    "1.5": "Earth and related environmental sciences", "1.6": "Biological sciences", "1.7": "Other natural sciences",
    "2.1": "Civil engineering", "2.2": "Electrical engineering, electronic engineering, information engineering", "2.3": "Mechanical engineering",
    "2.4": "Chemical engineering", "2.5": "Materials engineering", "2.6": "Medical engineering", "2.7": "Environmental engineering",
    "2.8": "Environmental biotechnology", "2.9": "Industrial biotechnology", "2.10": "Nano-technology", "2.11": "Other engineering and technologies",
    "3.1": "Basic medicine", "3.2": "Clinical medicine", "3.3": "Health sciences", "3.4": "Medical biotechnology", "3.5": "Other medical sciences",
    "4.1": "Agriculture, forestry, and fisheries", "4.2": "Animal and dairy science", "4.3": "Veterinary science", "4.4": "Agricultural biotechnology", "4.5": "Other agricultural sciences",
    "5.1": "Psychology and cognitive sciences", "5.2": "Economics and business", "5.3": "Education", "5.4": "Sociology", "5.5": "Law",
    "5.6": "Political science", "5.7": "Social and economic geography", "5.8": "Media and communications", "5.9": "Other social sciences",
    "6.1": "History and archaeology", "6.2": "Languages and literature", "6.3": "Philosophy, ethics and religion", "6.4": "Arts (arts, history of arts, performing arts, music)", "6.5": "Other humanities",
}
ISCED = {
    "0111": "Education science", "0114": "Teacher training with subject specialisation",
    "0211": "Audio-visual techniques and media production", "0212": "Fashion, interior and industrial design", "0213": "Fine arts", "0215": "Music and performing arts",
    "0221": "Religion and theology", "0222": "History and archaeology", "0223": "Philosophy and ethics", "0231": "Language acquisition", "0232": "Literature and linguistics",
    "0311": "Economics", "0312": "Political sciences and civics", "0313": "Psychology", "0314": "Sociology and cultural studies",
    "0321": "Journalism and reporting", "0322": "Library, information and archival studies",
    "0411": "Accounting and taxation", "0412": "Finance, banking and insurance", "0413": "Management and administration", "0414": "Marketing and advertising", "0421": "Law",
    "0511": "Biology", "0512": "Biochemistry", "0521": "Environmental sciences", "0522": "Natural environments and wildlife",
    "0531": "Chemistry", "0532": "Earth sciences", "0533": "Physics", "0541": "Mathematics", "0542": "Statistics",
    "0612": "Database and network design and administration", "0613": "Software and applications development and analysis", "0619": "Information and Communication Technologies not elsewhere classified",
    "0711": "Chemical engineering and processes", "0712": "Environmental protection technology", "0713": "Electricity and energy", "0714": "Electronics and automation",
    "0715": "Mechanics and metal trades", "0716": "Motor vehicles, ships and aircraft", "0721": "Food processing", "0722": "Materials", "0723": "Textiles", "0724": "Mining and extraction",
    "0731": "Architecture and town planning", "0732": "Building and civil engineering",
    "0811": "Crop and livestock production", "0821": "Forestry", "0831": "Fisheries", "0841": "Veterinary",
    "0912": "Medicine", "0913": "Nursing and midwifery", "0914": "Medical diagnostic and treatment technology", "0917": "Traditional and complementary medicine and therapy", "0919": "Health not elsewhere classified",
    "0923": "Social work and counselling",
    "1013": "Hotel, restaurants and catering", "1014": "Sports", "1015": "Travel, tourism and leisure", "1022": "Occupational health and safety",
    "1031": "Military and defence", "1032": "Protection of persons and property", "1041": "Transport services", "1019": "Personal services not elsewhere classified",
}
# discipline id -> [(scheme, code, type)]
C, B, N, R = "close", "broader", "narrower", "related"
def m(ford=None, ft=C, isced=None, it=C):
    out = []
    for code in ([ford] if isinstance(ford, str) else ford or []): out.append(("OECD_FORD", code, ft))
    for code in ([isced] if isinstance(isced, str) else isced or []): out.append(("UNESCO_ISCED_F", code, it))
    return out
MAP = {
    "mathematics": m("1.1", C, ["0541", "0542"], C),
    "physics": m("1.3", B, "0533"), "chemistry": m("1.4", C, "0531"), "astronomy-and-space-sciences": m("1.3", B, "0533", B),
    "earth-and-geosciences": m("1.5", C, "0532"), "biological-sciences": m("1.6", C, ["0511", "0512"]),
    "computer-science": m("1.2", B, ["0613", "0612"], R), "information-systems": m("1.2", B, "0619", R), "data-science": m("1.2", B, "0542", R),
    "information-and-knowledge-sciences": m(["1.2", "5.8"], R, "0322", C),
    "civil-and-infrastructure-engineering": m("2.1", C, "0732"), "electrical-and-electronic-engineering": m("2.2", C, ["0713", "0714"]),
    "mechanical-engineering": m("2.3", C, "0715"), "chemical-engineering": m("2.4", C, "0711"), "materials-engineering": m("2.5", C, "0722"),
    "aerospace-engineering": m("2.3", B, "0716", B), "biomedical-engineering": m("2.6", C, "0914", R), "environmental-engineering": m("2.7", C, "0712"),
    "industrial-engineering": m("2.11", B), "nuclear-engineering": m("2.11", B, "0713", R), "mining-engineering": m("2.11", B, "0724"),
    "marine-engineering": m("2.11", B, "0716", B), "geological-engineering": m("2.11", B, "0724", R), "agricultural-engineering": m("2.11", B, "0811", R),
    "textile-engineering": m("2.11", B, "0723"), "petroleum-engineering": m("2.11", B, "0724", R), "safety-engineering": m("2.11", B, "1022", R),
    "systems-engineering": m("2.11", B), "manufacturing-engineering": m("2.3", R), "energy-engineering": m("2.2", R, "0713"),
    "optical-engineering": m("2.2", R), "nanotechnology-engineering": m("2.10", C), "food-engineering": m("2.11", B, "0721"),
    "rehabilitation-engineering": m("2.6", B, "0914", R),
    "basic-and-biomedical-sciences": m("3.1", C, "0912", R), "clinical-medicine": m("3.2", C, "0912"), "public-and-population-health": m("3.3", B, "0919", R),
    "health-professions-and-care-sciences": m("3.3", B, ["0913", "0914"], R), "medical-biotechnology": m("3.4", C), "forensic-medicine": m("3.5", B, "0912", R),
    "sports-medicine": m("3.3", B, "0912", R), "veterinary-public-health": m("4.3", R, "0841", R), "medical-ethics": m("6.3", R, "0223", R),
    "medical-education": m("5.3", R, "0912", R), "traditional-complementary-and-integrative-medicine-studies": m("3.5", B, "0917"),
    "agriculture-and-crop-sciences": m("4.1", B, "0811"), "animal-and-dairy-sciences": m("4.2", C, "0811", R), "forestry-and-wildlife": m("4.1", B, "0821"),
    "fisheries-and-aquaculture": m("4.1", B, "0831"), "veterinary-sciences": m("4.3", C, "0841"), "food-sciences": m("4.5", R, "0721", R),
    "economics": m("5.2", B, "0311"), "sociology": m("5.4", C, "0314", B), "political-science": m("5.6", C, "0312"), "psychology": m("5.1", C, "0313"),
    "anthropology": m("5.4", R, "0314", R), "geography": m("5.7", R, "0532", R), "demography": m("5.9", B, "0314", R), "social-work": m("5.9", B, "0923"),
    "criminology": m("5.9", B, "0314", R), "international-development": m("5.9", B), "social-policy": m("5.9", B, "0312", R), "gerontology": m("5.9", B),
    "gender-studies": m("5.9", B, "0314", R), "cultural-studies": m("5.9", B, "0314", B), "area-studies": m("5.9", B, "0314", R), "migration-studies": m("5.9", B),
    "science-and-technology-studies": m("5.9", B), "human-ecology": m("5.9", B), "disability-studies": m("5.9", B), "indigenous-studies": m("5.9", B, "0314", R),
    "accounting": m("5.2", B, "0411"), "finance": m("5.2", B, "0412"), "management": m("5.2", B, "0413"), "marketing-and-commerce": m("5.2", B, "0414"),
    "entrepreneurship-and-innovation": m("5.2", B, "0413", R), "insurance-and-risk": m("5.2", B, "0412", B),
    "public-law": m("5.5", B, "0421", B), "private-law": m("5.5", B, "0421", B), "international-law": m("5.5", B, "0421", B),
    "specialised-legal-fields": m("5.5", B, "0421", B), "legal-studies-and-justice": m("5.5", B, "0421", B),
    "history": m("6.1", B, "0222", B), "archaeology": m("6.1", B, "0222", B), "philosophy": m("6.3", B, "0223"), "religion-theology-and-non-religious-worldviews": m("6.3", B, "0221"),
    "linguistics": m("6.2", B, "0232", B), "literature-and-literary-studies": m("6.2", B, "0232", B), "language-and-cultural-area-studies": m(["6.2", "5.9"], R, "0314", R),
    "fine-arts": m("6.4", B, "0213"), "design": m("6.4", R, "0212"), "music": m("6.4", B, "0215", B), "performing-arts": m("6.4", B, "0215", B),
    "film-photography-and-media-production": m(["6.4", "5.8"], R, "0211"), "digital-and-interactive-arts": m("6.4", B, "0211", R),
    "educational-foundations": m("5.3", B, "0111"), "learning-and-educational-psychology": m(["5.3", "5.1"], R, "0111", R),
    "curriculum-and-instruction": m("5.3", B, ["0111", "0114"], R), "educational-technology": m("5.3", B, "0111", R), "educational-settings-and-populations": m("5.3", B, "0111", R),
    "environmental-science": m("1.5", B, "0521"), "ecology-and-conservation": m("1.6", B, "0522"), "climate-science-and-society": m("1.5", R, "0521", R),
    "sustainability-studies": m("5.9", R, "0521", R), "natural-resource-management": m(["1.5", "4.1"], R, "0522", R), "energy-studies": m("2.7", R, "0713", R),
    "architecture": m("6.4", R, "0731"), "urban-and-regional-planning": m("5.7", R, "0731", B), "construction-and-built-environment": m("2.1", R, "0732"),
    "landscape-and-heritage": m("6.5", R, "0731", R),
    "communication-studies": m("5.8", B), "journalism": m("5.8", B, "0321"), "media-studies": m("5.8", B, "0321", R),
    "broadcasting-and-production": m("5.8", R, "0211"), "public-relations-and-strategic-communication": m("5.8", B, "0414", R),
    "tourism-and-hospitality": m("5.2", R, ["1015", "1013"]), "sports-and-movement-sciences": m("3.3", R, "1014"), "transport-and-logistics": m("5.2", R, "1041"),
    "safety-and-emergency-management": m("5.9", R, ["1022", "1032"], R), "military-defence-and-security-studies": m("5.6", R, "1031"),
    "public-service-management": m("5.2", R, "0413", R), "professional-ethics": m("6.3", R, "0223", R), "vocational-studies": m("5.3", R),
    "culinary-arts": m(None, C, "1013", B), "aviation-services": m(None, C, "1041", B), "maritime-services": m(None, C, "1041", B),
    "protective-services": m(None, C, "1032"), "personal-and-community-services": m(None, C, "1019", R), "funeral-and-bereavement-studies": m(None, C, "1019", R),
    "retail-and-consumer-services": m("5.2", R, "0414", R),
}
