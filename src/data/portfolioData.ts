export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abbr?: string;
  doi?: string;
  pdfUrl?: string;
  abstract?: string;
  bibtex?: string;
  previewImg?: string;
  selected?: boolean;
  category: "AI & Inference" | "Multimedia QoE" | "Foundations & Physics";
  badges?: string[];
  award?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullContent?: string[];
  category: "Research" | "Development" | "Cognitive Modeling";
  image: string;
  tags: string[];
  link?: string;
  year: string;
  highlights: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  tag?: string;
}

export interface ResearchArtifact {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  specifications: string[];
  accessType: "Public" | "Reviewer Access Upon Request" | "Simulation Based";
  compliance?: string[];
  link?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  verified?: boolean;
}

export interface LanguageItem {
  language: string;
  level: string;
  cefr: string;
  subskills?: string;
}

export interface AcademicReferee {
  name: string;
  title: string;
  institution: string;
  lab?: string;
  emails: string[];
  role: string;
}

export interface CVData {
  name: string;
  label: string;
  email: string;
  location: string;
  summary: string;
  orcid: string;
  github: string;
  githubUrl?: string;
  linkedin: string;
  linkedinUrl?: string;
  researchInterests: {
    title: string;
    details: string;
  }[];
  education: {
    institution: string;
    location: string;
    degree: string;
    field: string;
    period: string;
    standing?: string;
    thesisTitle?: string;
    thesisGrade?: string;
    supervisor?: string;
    highlights: string[];
  }[];
  experience: {
    position: string;
    organization: string;
    location: string;
    period: string;
    summary: string;
    highlights: string[];
  }[];
  researchArtifacts: ResearchArtifact[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  referees: AcademicReferee[];
  skills: {
    category: string;
    level: string;
    keywords: string[];
  }[];
}

export const authorData = {
  name: "Mounir GHARSALLAH",
  role: "Independent Researcher",
  titleDetails: "Multimedia (QoE), Process Mining & AI-Augmented Multimedia Systems",
  institution: "Tunis, Tunisia",
  email: "mounir.gharsallah@enicar.ucar.tn",
  orcid: "0000-0002-4200-6035",
  orcidUrl: "https://orcid.org/0000-0002-4200-6035",
  github: "https://github.com/GH-Mounir",
  githubUsername: "GH-Mounir",
  linkedin: "https://www.linkedin.com/in/mounir-gharsallah-05791b256/",
  linkedinUsername: "mounir-gharsallah",
  tagline: "Independent Researcher in Multimedia (QoE), Process Mining & AI-Augmented Multimedia Systems",
  bio: [
    "I am an independent researcher working at the intersection of Multimedia Quality of Experience (QoE), Process Science, Behavioural Science, and Artificial Intelligence. My research focuses on modelling user experience through observable event traces generated during multimedia consumption.",
    "I developed a dedicated crowdsourced mobile PWA experimentation testbed and constructed a proprietary event-centric dataset containing > 41,000 streaming-related events collected under real-world conditions from 41 human subjects (compliant with ITU-T P.910 and P.1204 standards).",
    "My current research agenda investigates subjective QoE modeling, human factors, process mining, probabilistic machine learning, Active Inference, quantum cognition, and AI-augmented multimedia streaming architectures.",
    "I serve as a verified referee for IEEE Transactions on Multimedia (IEEE T-MM) and am currently actively seeking prospective PhD positions and doctoral research advisors to advance this research program.",
  ],
  researchHighlights: [
    {
      title: "Multimedia QoE & Event-Centric Telemetry",
      description: "Modelling subjective QoE through observable event traces, Process Mining, and ITU-T standards (P.910, P.1204, P.1203).",
    },
    {
      title: "Sequential Modeling & Active Inference",
      description:
        "Active Inference, Quantum Cognition, Markov Decision Processes (MDP/POMDP), and stochastic policy gradients for ordinal feedback.",
    },
    {
      title: "Edge/Fog AI & Real-Time Multimedia",
      description:
        "Lightweight inference, anomaly detection in fog architectures, and low-latency streaming telemetry (MPEG-DASH, WebRTC, HTTP/3, QUIC).",
    },
  ],
};

export const cvData: CVData = {
  name: "Mounir GHARSALLAH",
  label: "Independent Researcher | Multimedia (QoE), Process Mining & AI-Augmented Multimedia Systems",
  email: "mounir.gharsallah@enicar.ucar.tn",
  location: "Tunis, Tunisia",
  orcid: "0000-0002-4200-6035",
  github: "GH-Mounir",
  githubUrl: "https://github.com/GH-Mounir",
  linkedin: "mounir-gharsallah",
  linkedinUrl: "https://www.linkedin.com/in/mounir-gharsallah-05791b256/",
  summary:
    "Independent researcher working at the intersection of Multimedia Quality of Experience (QoE), Process Science, Behavioural Science, and AI. Focused on modelling user experience through observable event traces during multimedia consumption, active inference, probabilistic machine learning, and quantum-cognitive representations over ordinal evaluation data.",
  researchInterests: [
    {
      title: "Subjective QoE & Human Factors Modeling",
      details: "Reconstructing user viewing behavior, psychological latency, and subjective perceptual evaluation from fine-grained event telemetry.",
    },
    {
      title: "Process Mining & Behavioral Science",
      details: "Applying Celonis EMS, PM4Py, and Markov state transition models to discover anomalous user states in fog/edge streaming.",
    },
    {
      title: "Sequential Probabilistic ML & Active Inference",
      details: "Formulating Active Inference, Quantum Cognition, MDP/POMDP, and non-commutative probability amplitudes for ordinal MOS inference.",
    },
    {
      title: "Edge AI & Next-Gen Streaming Architectures",
      details: "Optimizing MPEG-DASH, WebRTC, HTTP/3, and QUIC over fog computing architectures with lightweight real-time prediction models.",
    },
  ],
  education: [
    {
      institution: "National Engineering School of Carthage (ENICarthage) & INNOV'COM Research Lab – SUP'COM",
      location: "Tunis, Tunisia",
      degree: "Master's Degree in Data Science & Mobiquity",
      field: "Dual Professional Master Degree – EQF Level 7: 120 ECTS",
      period: "Oct 2021 – Dec 2022",
      standing: "Academic Standing: Grade A (15.81 / 20)",
      thesisTitle: "Anomaly Detection for QoE Multimedia Prediction in Fog Computing Architecture: Event-Based Novel Data-Set Building",
      thesisGrade: "Grade A (17 / 20)",
      supervisor: "Supervised by Pr. Kaouthar Sethom (INNOV'COM Research Lab, SUP'COM, University of Carthage)",
      highlights: [
        "Designed and deployed a crowdsourced Progressive Web Application (PWA) for multimedia QoE experimentation.",
        "Constructed a proprietary event-centric dataset containing > 41,000 streaming-related events collected under real-world conditions from 41 human subjects.",
        "Applied Process Mining techniques to reconstruct multimedia viewing behaviour from event traces.",
        "Investigated MDP and POMDP representations of Quality of Experience.",
        "Developed foundations for behavioural and AI-assisted QoE modelling.",
      ],
    },
    {
      institution: "Faculty of Sciences of Tunis (FST), University of Tunis El Manar",
      location: "Tunis, Tunisia",
      degree: "Bachelor in Computer Science (Maîtrise)",
      field: "4 years post-baccalaureate / EQF Level 6: 240 ECTS (Second Cycle)",
      period: "Sep 2004 – Sep 2011",
      standing: "Final Grade: Grade B",
      thesisTitle: "Simulator of an 8-bit ARM Microprocessor",
      highlights: [
        "Specialization: Database and Web systems, CPU architecture, software, computational logic, real-time apps.",
        "Engineered a cycle-accurate software simulator of an 8-bit ARM microprocessor architecture.",
      ],
    },
    {
      institution: "Monastir Preparatory Engineering Institute (IPEIM)",
      location: "Monastir, Tunisia",
      degree: "Diploma of Undergraduate University Studies in Technology (CPGE - Prépa)",
      field: "1st Cycle: 2 years (Preparatory Engineering Cycle)",
      period: "Sep 2002 – June 2004",
      standing: "National Rank: 8 / 130",
      highlights: [
        "Successfully passed the Tunisian National Engineering Entrance Competition (Concours National) following completion of the 2-year CPGE cycle.",
        "Curriculum: Intensive 2-year cycle in advanced calculus, linear algebra, theoretical physics, mechanics, electronics, thermodynamics, automatism, chemistry, algorithms, and mathematical modelling.",
      ],
    },
  ],
  experience: [
    {
      position: "Verified Peer Reviewer",
      organization: "IEEE Transactions on Multimedia (IEEE TMM)",
      location: "International / Remote",
      period: "2025 – Present",
      summary:
        "Active Reviewer for IEEE T-MM evaluating scientific manuscripts in multimedia systems, QoE, adaptive streaming, Edge AI, and multimedia networking.",
      highlights: [
        "Completed five peer-review assignments for top-tier IEEE T-MM journal submissions.",
        "Assessed algorithmic rigor, experimental reproducibility, and theoretical soundness of novel multimedia frameworks.",
        "Verified referee profile registered via ORCID (0000-0002-4200-6035).",
      ],
    },
    {
      position: "Independent Researcher",
      organization: "Independent Research",
      location: "Tunis, Tunisia",
      period: "2021 – Present",
      summary:
        "Leading fundamental and applied research initiatives in QoE event telemetry, process science, and quantum cognitive inference architectures.",
      highlights: [
        "Developed proprietary crowdsourced experimental testbed platforms compliant with ITU-T P.910 and P.1204 recommendations.",
        "Authored specialized simulation models combining Active Inference and non-commutative probability amplitudes for ordinal decision dynamics.",
        "Built interactive analytics dashboards for Markovian process state transition discovery.",
      ],
    },
  ],
  researchArtifacts: [
    {
      id: "dataset-41k",
      title: "Proprietary Multimedia QoE Dataset (>41,000 Events)",
      subtitle: "Ground-truth video viewing sessions over fog architectures",
      category: "Experimental Dataset",
      description:
        "High-granularity event-centric dataset capturing real-world video viewing interactions from 41 human subjects under heterogeneous network conditions.",
      specifications: [
        "41,000+ real-time streaming events logged",
        "41 human subjects under verified test protocols",
        "Full compliance with ITU-T P.910 & ITU-T P.1204 standards",
        "Multi-modal telemetry: rebuffering, bitrate switches, user interactions, latency",
      ],
      accessType: "Reviewer Access Upon Request",
      compliance: ["ITU-T P.910", "ITU-T P.1204", "ITU-T P.1203"],
    },
    {
      id: "pwa-platform",
      title: "Crowdsourced Mobile PWA Experimentation Platform",
      subtitle: "Low-overhead web testbed for subjective multimedia evaluation",
      category: "Software Testbed",
      description:
        "Progressive Web Application architected to run controlled subjective video streaming experiments directly on mobile devices with sub-millisecond event instrumentation.",
      specifications: [
        "Cross-device mobile-optimized PWA architecture",
        "Real-time event streaming telemetry and buffer dynamics probe",
        "Offline-capable session logging with edge synchronization",
        "Integrated subjective rating scales (MOS, ordinal preference)",
      ],
      accessType: "Public",
    },
    {
      id: "vqoe-dashboard",
      title: "Interactive VQoE Analytics Dashboard",
      subtitle: "10+ modalities with Process Markov state transition visualization",
      category: "Analytics Platform",
      description:
        "Interactive analytics suite visualizing Markov state transitions, behavioral process maps, and anomaly distributions across the 41,000+ event dataset.",
      specifications: [
        "10+ telemetry modalities visualized in real time",
        "Markovian transition matrix and state discovery engine",
        "Anomaly cluster distributions across fog/edge nodes",
        "Secured with reviewer authentication credentials",
      ],
      accessType: "Reviewer Access Upon Request",
    },
    {
      id: "active-inference-sim",
      title: "Active Inference & Quantum-Cognitive QoE Simulation",
      subtitle: "Non-commutative probability amplitudes over ordinal evaluation data",
      category: "Cognitive Simulation",
      description:
        "Python animation-based simulation framework modelling non-commutative probability amplitudes to infer latent human evaluations and belief states over ordinal MOS data.",
      specifications: [
        "Functional Python animation-based simulation engine",
        "Non-commutative probability amplitudes for cognitive interference",
        "Active inference loops for perceptual expectation and free energy minimization",
        "Private repository with read-only reviewer tokens available upon request",
      ],
      accessType: "Simulation Based",
    },
  ],
  certifications: [
    {
      title: "5G Technology Development and Its Application",
      issuer: "International Telecommunication Union (ITU)",
      date: "Aug 2023",
      verified: true,
    },
    {
      title: "Introduction to Service Quality Regulation",
      issuer: "ITU Academy",
      date: "Nov 2022",
      badge: "Verified Badge",
      verified: true,
    },
    {
      title: "Process Mining: From Theory to Execution (Intermediate Level)",
      issuer: "Celonis",
      date: "Nov 2022",
      verified: true,
    },
    {
      title: "Shorten Your Path to Publication",
      issuer: "Elsevier Researcher Academy",
      date: "Oct 2023",
      verified: true,
    },
    {
      title: "IBM Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      date: "Dec 2023",
      verified: true,
    },
    {
      title: "IBM Cloud Application Developer",
      issuer: "IBM",
      date: "Dec 2023",
      verified: true,
    },
    {
      title: "IBM Predictive Analytics SPSS Modeler",
      issuer: "IBM",
      date: "Jan 2021",
      verified: true,
    },
    {
      title: "IBM IoT Cloud Developer",
      issuer: "IBM",
      date: "Jan 2021",
      verified: true,
    },
  ],
  languages: [
    {
      language: "Arabic",
      level: "Native / Mother Tongue",
      cefr: "Native",
      subskills: "Native fluency in academic, professional, and literary contexts",
    },
    {
      language: "French",
      level: "Proficient User",
      cefr: "C2",
      subskills: "Listening: C2 | Reading: C2 | Spoken: C2 | Writing: C2",
    },
    {
      language: "English",
      level: "Proficient User",
      cefr: "C1",
      subskills: "Listening: C1 | Reading: C1 | Spoken: C1 | Writing: C1",
    },
    {
      language: "German",
      level: "Basic User",
      cefr: "A1 / A2",
      subskills: "Basic conversational and foundational reading",
    },
  ],
  referees: [
    {
      name: "Pr. Walid Barhoumi",
      title: "Full Professor, Computer Science - Engineering Department",
      institution: "National Engineering School of Carthage (ENICarthage) – University of Carthage",
      lab: "SIIVA-LIMTIC Laboratory, Tunisia",
      emails: ["walid_barhoumi@yahoo.fr"],
      role: "Academic Referee",
    },
    {
      name: "Pr. Khaoula ElBedoui",
      title: "Associate Professor, Computer Engineering Department",
      institution: "National Engineering School of Carthage (ENICarthage)",
      emails: ["khaoula.elbedoui@enicar.ucar.tn", "el_bedoui_khaoula@yahoo.com"],
      role: "Academic Referee",
    },
    {
      name: "Pr. Kaouthar Sethom Ben Reguiga",
      title: "Professor in Telecommunications (Main Master's Thesis Supervisor)",
      institution: "ENICarthage & INNOV'COM Research Laboratory, SUP'COM, University of Carthage",
      lab: "INNOV'COM Research Laboratory",
      emails: ["k_sethombr@yahoo.fr"],
      role: "Master's Thesis Supervisor",
    },
  ],
  skills: [
    {
      category: "Programming & ML Frameworks",
      level: "Advanced",
      keywords: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Scikit-Learn",
        "NumPy",
        "Pandas",
        "SciPy",
        "Matplotlib",
        "Seaborn",
        "JavaScript",
        "Node.js",
        "Web APIs",
        "PWA",
        "C++",
        "C",
        "SQL",
        "VBA Scripting",
      ],
    },
    {
      category: "Process Mining & Analytics",
      level: "Advanced",
      keywords: ["Celonis EMS", "PM4Py", "Process Science", "BPMN", "Markov State Transitions", "Conformance Checking"],
    },
    {
      category: "Sequential & Probabilistic Modeling",
      level: "Advanced",
      keywords: [
        "Active Inference",
        "Quantum Cognition",
        "Markov Decision Processes (MDP)",
        "POMDP",
        "Reinforcement Learning",
        "Stochastic Policy Gradient",
        "Reward Function Shaping",
      ],
    },
    {
      category: "Networks, Edge Computing & Telemetry",
      level: "Advanced",
      keywords: [
        "Video QoE / QoS",
        "ITU-T P.910",
        "ITU-T P.1203",
        "ITU-T P.1204",
        "ITU-T G.1011",
        "ITU-T P.917",
        "MPEG-DASH",
        "WebRTC",
        "HTTP/3",
        "QUIC",
        "Fog/Edge Architecture",
        "Google Lighthouse Web Vitals",
      ],
    },
    {
      category: "Statistical & Psychometric Tools",
      level: "Proficient",
      keywords: ["SPSS", "Item Response Theory (IRT)", "Rasch Model Analysis", "Ordinal Regression", "Bayesian Statistics"],
    },
  ],
};

export const publications: Publication[] = [
  {
    id: "gharsallah2024qoe",
    title: "Bayesian Ordinal Modeling for User-Centric Video Quality of Experience in Distributed Edge Networks",
    authors: ["Mounir Gharsallah"],
    venue: "Working Paper / Preprint Series",
    year: 2025,
    abbr: "Preprint",
    category: "Multimedia QoE",
    selected: true,
    abstract:
      "Modern multimedia streaming services increasingly demand fine-grained, uncertainty-aware Quality of Experience (QoE) prediction directly at the network edge. We propose a hierarchical Bayesian ordinal regression framework that captures cognitive subjective user ratings while respecting the discrete, ranked nature of perceptual scales.",
    bibtex: `@article{gharsallah2025bayesian,
  title={Bayesian Ordinal Modeling for User-Centric Video Quality of Experience in Distributed Edge Networks},
  author={Gharsallah, Mounir},
  year={2025},
  journal={arXiv preprint}
}`,
    badges: ["Selected", "Bayesian QoE", "Edge AI"],
  },
  {
    id: "gharsallah2024ultrametric",
    title: "Ultrametric Belief Topologies for Cognitively Grounded Decision Systems under Severe Ambiguity",
    authors: ["Mounir Gharsallah"],
    venue: "Manuscript in Preparation",
    year: 2024,
    abbr: "Research",
    category: "AI & Inference",
    selected: true,
    abstract:
      "Human judgment under uncertainty often violates classical Euclidean metric axioms. We investigate tree-like ultrametric spaces as cognitive representations for hierarchical categorizations, demonstrating improved robustness against conflicting evidence in high-dimensional state spaces.",
    bibtex: `@article{gharsallah2024ultrametric,
  title={Ultrametric Belief Topologies for Cognitively Grounded Decision Systems under Severe Ambiguity},
  author={Gharsallah, Mounir},
  year={2024}
}`,
    badges: ["Selected", "Cognitive AI", "Ultrametric"],
  },
  {
    id: "gharsallah2022masterthesis",
    title: "Anomaly Detection for Video Quality of Experience (VQoE) in Fog Computing Architectures",
    authors: ["Mounir Gharsallah"],
    venue: "ENICarthage Master Thesis, Data Science & Mobiquity",
    year: 2022,
    abbr: "MSc Thesis",
    category: "Multimedia QoE",
    selected: false,
    abstract:
      "Design and implementation of real-time telemetry pipelines and anomaly detection models targeting video streaming degradations within decentralized fog computing nodes.",
    bibtex: `@mastersthesis{gharsallah2022vqe,
  title={Anomaly Detection for Video Quality of Experience (VQoE) in Fog Computing Architectures},
  author={Gharsallah, Mounir},
  school={Ecole Nationale d’Ingénieurs de Carthage (ENICarthage)},
  year={2022}
}`,
    badges: ["Master's Thesis", "Fog Computing"],
  },
  {
    id: "einstein1935epr",
    title: "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?",
    authors: ["Albert Einstein", "Boris Podolsky", "Nathan Rosen"],
    venue: "Physical Review, Vol. 47, Iss. 10",
    year: 1935,
    abbr: "Phys. Rev.",
    doi: "10.1103/PhysRev.47.777",
    category: "Foundations & Physics",
    selected: false,
    abstract:
      "In a complete theory there is an element corresponding to each element of reality. Consideration of the problem of making predictions concerning a system on the basis of measurements made on another system leads to the conclusion that the description of reality given by a wave function is incomplete.",
    bibtex: `@article{PhysRev.47.777,
  title = {Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?},
  author = {Einstein, A. and Podolsky, B. and Rosen, N.},
  journal = {Phys. Rev.},
  volume = {47},
  pages = {777--780},
  year = {1935},
  doi = {10.1103/PhysRev.47.777}
}`,
    badges: ["Historical Milestone", "Quantum Foundations"],
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "AI-Driven Multimedia QoE and Ordinal Decision Modeling",
    subtitle: "Interpretable Bayesian framework for human-centric video streaming optimization",
    description:
      "Developing mathematically rigorous ordinal modeling pipelines that respect the ordinal nature of human Mean Opinion Scores (MOS), predicting degradation anomalies at the edge.",
    category: "Research",
    image: "/assets/img/12.jpg",
    tags: ["Bayesian Modeling", "Video QoE", "Fog Computing", "Ordinal Regression"],
    year: "2023 – Present",
    highlights: [
      "Formulated hierarchical Bayesian ordinal likelihoods reflecting subjective human rating variability.",
      "Integrated edge telemetry collectors for low-latency anomaly diagnosis.",
      "Demonstrated superior calibration compared to standard regression baselines on subjective video datasets.",
    ],
  },
  {
    id: "project-2",
    title: "Ultrametric Belief Systems & Cognitive Inference",
    subtitle: "Non-Euclidean geometrical structures for reasoning under uncertainty",
    description:
      "Explores hierarchical and p-adic distance structures in cognitive inference to model human belief transitions and categorical judgments in complex environments.",
    category: "Cognitive Modeling",
    image: "/assets/img/1.jpg",
    tags: ["Ultrametric Spaces", "Cognitive AI", "Decision Theory", "Quantum Cognition"],
    year: "2023 – Present",
    highlights: [
      "Constructed tree-structured state representations yielding invariant decision boundaries under scale shifts.",
      "Developed mathematical proofs comparing ultrametric distance bounds against traditional cosine and Euclidean embeddings.",
      "Applied cognitive priors to noisy multi-agent communication simulations.",
    ],
  },
  {
    id: "project-3",
    title: "Fog-Based VQoE Anomaly Detection Engine",
    subtitle: "Real-time edge telemetry and unsupervised anomaly detection",
    description:
      "End-to-end framework for intercepting video stream packet flows, extracting temporal jitter, bitrate fluctuation, and rebuffering signatures for localized diagnosis.",
    category: "Development",
    image: "/assets/img/7.jpg",
    tags: ["Edge Computing", "Anomaly Detection", "Stream Telemetry", "Python"],
    year: "2021 – 2022",
    highlights: [
      "Lightweight model footprint optimized for deployment on resource-constrained fog gateways.",
      "Real-time evaluation with simulated network impairments and dynamic bandwidth throttles.",
      "Interactive analytics dashboard for inspecting session quality metrics.",
    ],
  },
  {
    id: "project-4",
    title: "Microprocessor Architecture Emulator",
    subtitle: "Instruction cycle simulator for embedded ARM architectures",
    description:
      "Custom cycle-accurate emulator implementing core instruction sets, register banks, interrupt handling, and memory mapping for educational and verification purposes.",
    category: "Development",
    image: "/assets/img/3.jpg",
    tags: ["Assembly", "Computer Architecture", "Emulation", "C/C++"],
    year: "Academic Project",
    highlights: [
      "Full cycle-accurate execution engine with step-by-step disassembly inspection.",
      "Visual memory map and register tracking interface.",
      "Verified against standard benchmark test suites.",
    ],
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    date: "2025-12",
    title: "Invited as Reviewer for IEEE Transactions on Multimedia",
    content:
      "Invited as Reviewer for IEEE Transactions on Multimedia (TMM) to evaluate manuscripts in the areas of AI-driven multimedia systems, quality of experience (QoE) modeling, and perceptual signal processing.",
    tag: "Academic Service",
  },
  {
    id: "news-2",
    date: "2025-05",
    title: "Prospective PhD Candidate & Research Agenda",
    content:
      "Actively seeking PhD research positions and lab opportunities in Bayesian cognition, interpretable edge AI, and multimedia QoE modeling starting 2025/2026.",
    tag: "PhD Applications",
  },
  {
    id: "news-3",
    date: "2024-11",
    title: "New Manuscript Draft on Ultrametric Cognitive Topologies",
    content:
      "Completed preprint manuscript investigating non-Euclidean ultrametric representations for modeling belief revisions under severe perceptual ambiguity.",
    tag: "Preprint",
  },
];
