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
 * PUBLICATIONS — imported from PubMed ("Lavigne MD"[Author]). Add new ones at the top.
 * Fields: year, authors, title, journal, details (volume:pages), doi, pmid, type ("Review"/"Letter", optional).
 */
const PUBLICATIONS = [
  { year: 2026, authors: "Peraki I, Zhang L, Botskaris D, Stagaki M, Deligiannis IK, Kontaki H, Deligianni E, Giannoulakis I, Hazapis O, Lavigne MD, Martinez-Jimenez CP, Talianidis I", title: "Setdb1 safeguards proper differentiation of adult intestinal stem cells by controlling chromatin accessibility and transcriptome variability", journal: "iScience", details: "29:116731", doi: "10.1016/j.isci.2026.116731", pmid: "42472120" },
  { year: 2026, authors: "Chanoumidou K, Zota I, Papadopoulou MA, Konstantinou C, Tsimpolis A, Tsagliotis E, Tziortziou M, Ntarntani K, Grünewald A, Lavigne MD, Gravanis A, Charalampopoulos I", title: "Targeting p75NTR activity alleviates the neurotoxic effect of high glucose on iPSC-derived dopaminergic neurons", journal: "Stem Cell Research & Therapy", details: "17", doi: "10.1186/s13287-026-04965-y", pmid: "41864949" },
  { year: 2026, authors: "Papadopoulou MA, Chanoumidou K, Peteinareli M, Tsaglioti E, Michalaki K, Lavigne MD, Charalampopoulos I", title: "p75 neurotrophin receptor shapes the dynamics of adult hippocampal neurogenesis in Alzheimer's disease", journal: "Alzheimer's Research & Therapy", details: "18", doi: "10.1186/s13195-026-01989-7", pmid: "41721384" },
  { year: 2025, authors: "Kosmara D, Papanikolaou S, Stathopoulou C, Papamatheakis D, Vatsellas G, Cimmarrusti A, Banos A, Sidiropoulos P, Lavigne MD, Verginis P, Boumpas D, Spilianakis C, Konstantopoulos D, Nikolaou C, Bertsias G", title: "The sex-biased chromatin modifier SMC1A promotes autoimmunity by shaping inflammatory pathways in patients with SLE", journal: "Nature Communications", details: "16:10350", doi: "10.1038/s41467-025-65309-7", pmid: "41285778" },
  { year: 2025, authors: "Liakos A, Ntakou-Zamplara KZ, Angelova N, Konstantopoulos D, Synacheri AC, Spyropoulou Z, Tsarmaklis IA, Korrou-Karava D, Nikolopoulos G, Lavigne MD, Fousteri M", title: "Cockayne syndrome B protein is implicated in transcription and associated chromatin dynamics in homeostatic and genotoxic conditions", journal: "Aging Cell", details: "24:e14341", doi: "10.1111/acel.14341", pmid: "39370748" },
  { year: 2024, authors: "Baltsavia I, Oulas A, Theodosiou T, Lavigne MD, Andreakos E, Mavrothalassitis G, Iliopoulos I", title: "scRNA-Explorer: An End-user Online Tool for Single Cell RNA-seq Data Analysis Featuring Gene Correlation and Data Filtering", journal: "Journal of Molecular Biology", details: "436:168654", doi: "10.1016/j.jmb.2024.168654", pmid: "39237193" },
  { year: 2024, authors: "Charou D, Rogdakis T, Latorrata A, Valcarcel M, Papadogiannis V, Athanasiou C, Tsengenes A, Papadopoulou MA, Lypitkas D, Lavigne MD, Katsila T, Wade RC, Cader MZ, Calogeropoulou T, Gravanis A, Charalampopoulos I", title: "Comprehensive characterization of the neurogenic and neuroprotective action of a novel TrkB agonist using mouse and human stem cell models of Alzheimer's disease", journal: "Stem Cell Research & Therapy", details: "15:200", doi: "10.1186/s13287-024-03818-w", pmid: "38971770" },
  { year: 2023, authors: "Liakos A, Synacheri AC, Konstantopoulos D, Stefos GC, Lavigne MD, Fousteri M", title: "Enhanced frequency of transcription pre-initiation complexes assembly after exposure to UV irradiation results in increased repair activity and reduced probabilities for mutagenesis", journal: "Nucleic Acids Research", details: "51:8575-8586", doi: "10.1093/nar/gkad593", pmid: "37470822" },
  { year: 2023, authors: "Fanourgakis S, Synacheri AC, Lavigne MD, Konstantopoulos D, Fousteri M", title: "Histone H2Bub dynamics in the 5' region of active genes are tightly linked to the UV-induced transcriptional response", journal: "Computational and Structural Biotechnology Journal", details: "21:614-629", doi: "10.1016/j.csbj.2022.12.013", pmid: "36659919" },
  { year: 2022, authors: "Armaka M, Konstantopoulos D, Tzaferis C, Lavigne MD, Sakkou M, Liakos A, Sfikakis PP, Dimopoulos MA, Fousteri M, Kollias G", title: "Single-cell multimodal analysis identifies common regulatory programs in synovial fibroblasts of rheumatoid arthritis patients and modeled TNF-driven arthritis", journal: "Genome Medicine", details: "14:78", doi: "10.1186/s13073-022-01081-3", pmid: "35879783" },
  { year: 2021, authors: "Kaltezioti V, Foskolou IP, Lavigne MD, Ninou E, Tsampoula M, Fousteri M, Margarity M, Politis PK", title: "Prox1 inhibits neurite outgrowth during central nervous system development", journal: "Cellular and Molecular Life Sciences", details: "78:3443-3465", doi: "10.1007/s00018-020-03709-2", pmid: "33247761" },
  { year: 2020, authors: "Liakos A, Konstantopoulos D, Lavigne MD, Fousteri M", title: "Continuous transcription initiation guarantees robust repair of all transcribed genes and regulatory regions", journal: "Nature Communications", details: "11:916", doi: "10.1038/s41467-020-14566-9", pmid: "32060325" },
  { year: 2017, authors: "Lavigne MD, Konstantopoulos D, Ntakou-Zamplara KZ, Liakos A, Fousteri M", title: "Global unleashing of transcription elongation waves in response to genotoxic stress restricts somatic mutation rate", journal: "Nature Communications", details: "8:2076", doi: "10.1038/s41467-017-02145-4", pmid: "29233992" },
  { year: 2017, authors: "Liakos A, Lavigne MD, Fousteri M", title: "Nucleotide Excision Repair: From Neurodegeneration to Cancer", journal: "Advances in Experimental Medicine and Biology", details: "1007:17-39", doi: "10.1007/978-3-319-60733-7_2", pmid: "28840550", type: "Review" },
  { year: 2017, authors: "Nanou A, Toumpeki C, Lavigne MD, Lazou V, Demmers J, Paparountas T, Thanos D, Katsantoni E", title: "The dual role of LSD1 and HDAC3 in STAT5-dependent transcription is determined by protein interactions, binding affinities, motifs and genomic positions", journal: "Nucleic Acids Research", details: "45:142-154", doi: "10.1093/nar/gkw832", pmid: "27651463" },
  { year: 2015, authors: "Lavigne MD, Vatsellas G, Polyzos A, Mantouvalou E, Sianidis G, Maraziotis I, Agelopoulos M, Thanos D", title: "Composite macroH2A/NRF-1 Nucleosomes Suppress Noise and Generate Robustness in Gene Expression", journal: "Cell Reports", details: "11:1090-101", doi: "10.1016/j.celrep.2015.04.022", pmid: "25959814" },
  { year: 2013, authors: "Foskolou IP, Stellas D, Rozani I, Lavigne MD, Politis PK", title: "Prox1 suppresses the proliferation of neuroblastoma cells via a dual action in p27-Kip1 and Cdc25A", journal: "Oncogene", details: "32:947-60", doi: "10.1038/onc.2012.129", pmid: "22508481" },
  { year: 2011, authors: "Antonaki A, Demetriades C, Polyzos A, Banos A, Vatsellas G, Lavigne MD, Apostolou E, Mantouvalou E, Papadopoulou D, Mosialos G, Thanos D", title: "Genomic analysis reveals a novel nuclear factor-κB (NF-κB)-binding site in Alu-repetitive elements", journal: "Journal of Biological Chemistry", details: "286:38768-38782", doi: "10.1074/jbc.M111.234161", pmid: "21896491" },
  { year: 2008, authors: "Lavigne MD, Yates L, Coxhead P, Górecki DC", title: "Nuclear-targeted chimeric vector enhancing nonviral gene transfer into skeletal muscle of Fabry mice in vivo", journal: "The FASEB Journal", details: "22:2097-107", doi: "10.1096/fj.07-093765", pmid: "18202142" },
  { year: 2007, authors: "Pennadam SS, Ellis JS, Lavigne MD, Górecki DC, Davies MC, Alexander C", title: "Synthesis and characterization of variable-architecture thermosensitive polymers for complexation with DNA", journal: "Langmuir", details: "23:41-9", doi: "10.1021/la061992a", pmid: "17190483" },
  { year: 2007, authors: "Lavigne MD, Pennadam SS, Ellis J, Yates LL, Alexander C, Górecki DC", title: "Enhanced gene expression through temperature profile-induced variations in molecular architecture of thermoresponsive polymer vectors", journal: "The Journal of Gene Medicine", details: "9:44-54", doi: "10.1002/jgm.992", pmid: "17167816" },
  { year: 2006, authors: "Lavigne MD, Górecki DC", title: "Emerging vectors and targeting methods for nonviral gene therapy", journal: "Expert Opinion on Emerging Drugs", details: "11:541-57", doi: "10.1517/14728214.11.3.541", pmid: "16939390", type: "Review" },
  { year: 2005, authors: "Lavigne MD, Pohlschmidt M, Novo JF, Higgins B, Alakhov V, Lochmuller H, Sakuraba H, Goldspink G, MacDermot K, Górecki DC", title: "Promoter dependence of plasmid-pluronics targeted alpha galactosidase A expression in skeletal muscle of Fabry mice", journal: "Molecular Therapy", details: "12:985-90", doi: "10.1016/j.ymthe.2005.02.032", pmid: "15975851", type: "Letter" },
  { year: 2004, authors: "Pennadam SS, Lavigne MD, Dutta CF, Firman K, Mernagh D, Górecki DC, Alexander C", title: "Control of a multisubunit DNA motor by a thermoresponsive polymer switch", journal: "Journal of the American Chemical Society", details: "126:13208-9", doi: "10.1021/ja045275j", pmid: "15479059" },
];

/*
 * SELECTED PUBLICATIONS — papers in journals with a Journal Impact Factor at or above the threshold.
 * Values are approximate recent JIFs used only to choose the "Selected" list (they are not shown on the site).
 * Check/update them against Journal Citation Reports when needed. You can also force a paper in/out with
 * SELECTED_EXTRA / SELECTED_EXCLUDE (by PMID).
 */
const SELECTED_IF_THRESHOLD = 10;
const JOURNAL_IF = {
  "Nucleic Acids Research": 16.6,
  "Nature Communications": 14.7,
  "Journal of the American Chemical Society": 14.4,
  "Molecular Therapy": 12.1,
  "Genome Medicine": 10.4,
  "Aging Cell": 8.0,
  "Alzheimer's Research & Therapy": 7.9,
  "Cell Reports": 7.5,
  "Stem Cell Research & Therapy": 7.1,
  "Oncogene": 6.9,
  "Cellular and Molecular Life Sciences": 6.2,
  "Journal of Molecular Biology": 4.7,
  "iScience": 4.6,
  "The FASEB Journal": 4.4,
  "Computational and Structural Biotechnology Journal": 4.4,
  "Journal of Biological Chemistry": 4.0,
  "Langmuir": 3.7,
  "The Journal of Gene Medicine": 3.2,
  "Advances in Experimental Medicine and Biology": 3.0,
  "Expert Opinion on Emerging Drugs": 2.5,
};
const SELECTED_EXTRA = [];    // e.g. ["25959814"]
const SELECTED_EXCLUDE = [];  // e.g. ["15975851"]

/*
 * NEWS — add items here; they are sorted newest first automatically.
 * date: "YYYY-MM-DD"; body may contain HTML (links etc.)
 */
const NEWS = [
  // { date: "2026-11-01", title: "New paper in ...", body: "Our work on ... is out in <a href='...'>Journal</a>." },
];
