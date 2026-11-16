/*
 * LAB CONTENT — edit this file to update the website.
 * Every page reads its content from here, so you rarely need to touch the HTML.
 */
const LAB = {
  name: "Lavigne Lab",
  institute: "Institute of Molecular Biology & Biotechnology (IMBB), FORTH",
  instituteUrl: "https://www.imbb.forth.gr/",
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Lavigne+MD&sort=date",
  email: "lavigne@imbb.forth.gr",
  phone: "+30 2810 391160",
  fax: "+30 2810 391101",
  address: [
    "Institute of Molecular Biology & Biotechnology (IMBB)",
    "Foundation for Research and Technology – Hellas (FORTH)",
    "N. Plastira 100, Vassilika Vouton",
    "70013 Heraklion, Crete, Greece",
  ],
};

/*
 * MEMBERS
 * group: "pi" | "current" | "alumni"
 * photo: path to an image in /images (optional; initials are shown otherwise)
 */
const MEMBERS = [
  {
    name: "Matthieu D. Lavigne",
    role: "Group Leader · Assistant Researcher",
    group: "pi",
    email: "lavigne@imbb.forth.gr",
    photo: "", // e.g. "images/lavigne.jpg"
    bio: "Matthieu Lavigne leads the lab within the Gene Regulation & Epigenetics programme at IMBB-FORTH. His research addresses RNA polymerase II transcription dynamics, genome maintenance under stress and the gene regulatory networks that shape cell fate, combining time- and space-resolved biochemistry, next-generation sequencing and computational modelling.",
  },
  {
    name: "Dimitris Tzanos",
    role: "PhD Student · Bioinformatics",
    group: "current",
    bio: "Works on splicing data.",
    tags: ["Splicing"],
  },
  {
    name: "Vaios Theodosiou",
    role: "PhD Student",
    group: "current",
  },
  {
    name: "Electra Tsagliotis",
    role: "Research Assistant · Bioinformatics",
    group: "current",
  },
  {
    name: "Konstantinos Tsomakian",
    role: "Research Assistant",
    group: "current",
    photo: "", // e.g. "images/tsomakian.jpg"
    bio: "Bioinformatician who started out at the bench. Builds deep-learning models that link histone marks and chromatin signals to RNA Pol II pausing.",
    tags: ["Deep learning", "ChIP / ATAC-seq", "Single-cell", "PyTorch"],
    cv: "cv/CV_Tsomakian_Konstantinos.pdf",
    github: "https://github.com/KonstantinosTsomakian",
    linkedin: "https://www.linkedin.com/in/konstantinos-tsomakian",
  },
  {
    name: "Lampros Dousias",
    role: "MSc Student · Bioinformatics",
    group: "current",
  },
  {
    name: "Katerina Fountoulaki",
    role: "MSc Student",
    group: "current",
  },
  {
    name: "Katerina Tzetzailidi",
    role: "MSc Student",
    group: "current",
  },
  {
    name: "Antonia Heretaki",
    role: "MSc Student · Bioinformatics",
    group: "current",
  },
  // Add current members like this (cv, github, linkedin are optional links; tags are optional little chips):
  // { name: "Jane Doe", role: "PhD Student", group: "current", email: "", photo: "", bio: "Short description of research project." },
  // Alumni:
  // { name: "John Smith", role: "MSc Student (2022–2024)", group: "alumni", now: "Now at ..." },
];

/*
 * PUBLICATIONS — newest first is not required; the page sorts by year.
 * doi is optional; if missing, the title links to a PubMed search.
 */
const PUBLICATIONS = [
  {
    year: 2022,
    authors: "Armaka M, Konstantopoulos D, Tzaferis C, Lavigne MD, Sakkou M, Liakos A, Sfikakis PP, Dimopoulos MA, Fousteri M, Kollias G",
    title: "Single-cell multimodal analysis identifies common regulatory programs in synovial fibroblasts of rheumatoid arthritis patients and modeled TNF-driven arthritis",
    journal: "Genome Medicine",
    details: "14:78",
    doi: "",
  },
  {
    year: 2020,
    authors: "Liakos A, Konstantopoulos D, Lavigne MD, Fousteri M",
    title: "Continuous transcription initiation guarantees robust repair of all transcribed genes and regulatory regions",
    journal: "Nature Communications",
    details: "11:916",
    doi: "",
  },
  {
    year: 2017,
    authors: "Lavigne MD, Konstantopoulos D, Ntakou-Zamplara KZ, Liakos A, Fousteri M",
    title: "Global unleashing of transcription elongation waves in response to genotoxic stress restricts somatic mutation rate",
    journal: "Nature Communications",
    details: "8:2076",
    doi: "",
  },
  {
    year: 2017,
    authors: "Liakos A, Lavigne MD, Fousteri M",
    title: "Nucleotide Excision Repair: From Neurodegeneration to Cancer",
    journal: "Advances in Experimental Medicine and Biology",
    details: "1007:17–39",
    doi: "",
  },
  {
    year: 2015,
    authors: "Lavigne MD, Vatsellas G, Polyzos A, Mantouvalou E, Sianidis G, Maraziotis I, Agelopoulos M, Thanos D",
    title: "Composite macroH2A/NRF-1 nucleosomes suppress noise and generate robustness in gene expression",
    journal: "Cell Reports",
    details: "11:1090–1101",
    doi: "",
  },
];

/*
 * NEWS — add items here; they are sorted newest first automatically.
 * date: "YYYY-MM-DD"; body may contain HTML (links etc.)
 */
const NEWS = [
  // { date: "2026-11-01", title: "New paper in ...", body: "Our work on ... is out in <a href='...'>Journal</a>." },
];
