export interface Publication {
  id: string;
  title: string;
  paperType: string;
  status: string;
  authors: string[];
  venue?: string;
  year?: number | string;
  abbr?: string;
  doi?: string;
  pdfUrl?: string;
  abstract?: string;
  bibtex?: string;
  previewImg?: string;
  selected?: boolean;
  category: string;
  topics: string[];
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
  metrics?: { label: string; value: string }[];
  researchQuestions?: string[];
  keyIdea?: string;
  quote?: string;
  corePrinciple?: string;
  goal?: string;
  features?: string[];
  techStack?: string[];
  dimensions?: string[];
  layers?: string[];
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
  titleDetails: "Multimodal Behavioral Modeling, Human-AI Interaction, Latent State Inference & Human-Centered AI",
  institution: "Tunis, Tunisia",
  email: "mounir.gharsallah@enicar.ucar.tn",
  orcid: "0000-0002-4200-6035",
  orcidUrl: "https://orcid.org/0000-0002-4200-6035",
  github: "https://github.com/GH-Mounir",
  githubUsername: "GH-Mounir",
  linkedin: "https://www.linkedin.com/in/mounir-gharsallah-05791b256/",
  linkedinUsername: "mounir-gharsallah",
  tagline: "Independent Researcher | Multimodal Behavioral Modeling, Human-AI Interaction, Latent State Inference & Human-Centered AI",
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
  label: "Independent Researcher | Multimodal Behavioral Modeling, Human-AI Interaction, Latent State Inference & Human-Centered AI",
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
    id: "iob-qoe-suite",
    title: "IoB-QoE Suite: A Multimodal Event-Centric Dataset for Process-Aware Video Quality of Experience Research",
    paperType: "Dataset paper",
    status: "Manuscript in preparation",
    authors: ["Mounir Gharsallah"],
    venue: "Manuscript in preparation",
    year: "2025",
    abbr: "Dataset",
    category: "Multimedia QoE",
    topics: ["QoE", "Process Mining", "Human Behavior", "Multimodal Data"],
    badges: ["Dataset paper", "Manuscript in preparation"],
    selected: true,
    abstract:
      "A comprehensive multimodal event-centric dataset and experimentation suite designed for process-aware video Quality of Experience (QoE) research, capturing fine-grained client-side telemetry, streaming event logs, and subjective perceptual evaluations.",
    bibtex: `@unpublished{gharsallah2025iobqoe,
  title={IoB-QoE Suite: A Multimodal Event-Centric Dataset for Process-Aware Video Quality of Experience Research},
  author={Gharsallah, Mounir},
  year={2025},
  note={Manuscript in preparation}
}`,
  },
  {
    id: "event-centric-process-mining",
    title: "Event-Centric Process Mining for Human Experience Modeling",
    paperType: "Research paper",
    status: "Ongoing research",
    authors: ["Mounir Gharsallah"],
    venue: "Ongoing research",
    year: "2025",
    abbr: "Research",
    category: "Process Mining & Behavioral Analytics",
    topics: ["Process Mining", "Behavioral Analytics", "Event Traces"],
    badges: ["Research paper", "Ongoing research"],
    selected: true,
    abstract:
      "Investigating event-centric process discovery and behavioral state tracking to model continuous human multimedia experience and identify degradation pathways from streaming interaction sequences.",
    bibtex: `@unpublished{gharsallah2025processmining,
  title={Event-Centric Process Mining for Human Experience Modeling},
  author={Gharsallah, Mounir},
  year={2025},
  note={Ongoing research}
}`,
  },
  {
    id: "latent-user-states",
    title: "Inferring Latent User States from Multimodal Behavioral Traces",
    paperType: "Concept paper",
    status: "Research direction under development",
    authors: ["Mounir Gharsallah"],
    venue: "Research direction under development",
    year: "2025",
    abbr: "Concept",
    category: "Latent State Inference & HAI",
    topics: ["Human-Centered AI", "Partial Observability", "Decision Processes"],
    badges: ["Concept paper", "Research direction under development"],
    selected: true,
    abstract:
      "Formulating probabilistic latent state inference models under partial observability to decode underlying cognitive, affective, and behavioral dynamics from multimodal interaction traces.",
    bibtex: `@unpublished{gharsallah2025latentstates,
  title={Inferring Latent User States from Multimodal Behavioral Traces},
  author={Gharsallah, Mounir},
  year={2025},
  note={Research direction under development}
}`,
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "IoB-QoE Suite",
    subtitle: "Multimodal Event-Centric Dataset for Human Experience Modeling",
    description:
      "A multimodal in-the-wild dataset capturing 44 participants, 1,112 viewing sessions, and 40,000+ behavioral and system events collected across human factors, system telemetry, network observations, context variables, and content characteristics.",
    category: "Research",
    image: "/assets/img/QoE-IoB Suite.jpg",
    tags: ["Multimodal Dataset", "Event-Centric", "Behavioral QoE", "40k+ Events", "Human Factors"],
    year: "2024 – Present",
    metrics: [
      { label: "Participants", value: "44 Human Subjects" },
      { label: "Viewing Sessions", value: "1,112 Sessions" },
      { label: "Logged Events", value: "40,000+ Traces" },
      { label: "Standards", value: "ITU-T P.910 & P.1204" },
    ],
    researchQuestions: [
      "How do human judgments and subjective QoE emerge over continuous observation?",
      "Can latent user states be inferred reliably from granular event traces?",
      "How can observable micro-behaviors explain subjective experience and dissatisfaction?",
    ],
    highlights: [
      "Captured multi-modal data streams across 44 participants interacting in natural mobile environments.",
      "Synchronized system telemetry, network fluctuations, context parameters, and content complexity.",
      "Formulated standard event log format ready for process mining discovery and Bayesian inference.",
    ],
  },
  {
    id: "project-2",
    title: "FogRL Platform",
    subtitle: "Event-Centric Experimentation Infrastructure",
    description:
      "A Progressive Web Application (PWA) designed for high-precision QoE experimentation, client-side telemetry harvesting, and real-time behavioral observation under realistic mobile network conditions.",
    category: "Development",
    image: "/assets/img/Fogrl.jpg",
    tags: ["PWA Testbed", "IndexedDB", "DASH Streaming", "Pub/Sub", "Fog Telemetry"],
    year: "2023 – Present",
    features: [
      "Adaptive MPEG-DASH playback monitoring & bitrate adaptation instrumentation",
      "Robust client-side IndexedDB event logging and offline-first queueing",
      "Context acquisition engine (RF telemetry, battery, viewport, ambient orientation)",
      "Crowdsourced evaluation workflow for unconstrained subjective testing",
    ],
    techStack: ["PWA", "JavaScript / TypeScript", "IndexedDB", "Pub/Sub Architecture", "DASH Streaming", "Fog Telemetry"],
    highlights: [
      "Engineered asynchronous pub/sub telemetry dispatcher handling sub-millisecond event emissions without UI lag.",
      "Implemented persistent client-side caching with automated sync to fog gateways upon reconnection.",
      "Benchmarked on diverse mobile devices across varying cellular network conditions.",
    ],
  },
  {
    id: "project-3",
    title: "Process-Aware User Modeling",
    subtitle: "Human Behavior Through Process Mining",
    quote: "Treating human interactions as behavioral trajectories rather than isolated observations.",
    keyIdea: "Events → Event Logs → Behavioral Processes → Latent States",
    description:
      "Applying process mining algorithms to discover, inspect, and model human behavioral journeys during multimedia consumption, mapping raw interaction logs into structured process variants and transition matrices.",
    category: "Research",
    image: "/assets/img/ProcessExp4.jpg",
    tags: ["Process Mining", "Celonis", "Transition Matrices", "Behavioral Trajectories", "Variant Analysis"],
    year: "2024 – Present",
    features: [
      "Directly-Follows Graphs (DFG) and behavioral Spaghetti Model decomposition",
      "Variant analysis identifying prevalent navigation trajectories and friction pathways",
      "Stochastic transition matrices measuring probability shifts between behavioral states",
      "Automated process discovery workflows utilizing Celonis and PM4Py",
    ],
    highlights: [
      "Formulated methodology to map continuous temporal event streams into discrete process discovery logs.",
      "Analyzed 1,112 session variants revealing distinct user navigation archetypes under network degradations.",
      "Bridged process science and multimedia QoE to discover how buffering triggers specific behavioral branches.",
    ],
  },
  {
    id: "project-4",
    title: "Behavioral Analytics Framework",
    subtitle: "Latent Cognitive & Behavioral State Inference",
    goal: "Infer hidden user states from observable events.",
    description:
      "An inferential framework designed to infer hidden cognitive, affective, and intentional user states from continuous observable event streams and user-system interactions.",
    category: "Cognitive Modeling",
    image: "/assets/img/10.jpg",
    tags: ["Latent State Inference", "POMDP", "Curiosity", "Hesitation Dynamics", "Decision Conflict"],
    year: "2024 – Present",
    dimensions: [
      "Curiosity & Exploratory Search Dynamics",
      "Hesitation & Deliberation Response Latencies",
      "Choice Volatility & Sequential Preference Shifts",
      "Decision Conflict & Rating Ambiguity",
      "Dynamic Engagement & Attention Trajectories",
    ],
    highlights: [
      "Developed probabilistic formulations capturing uncertainty in subjective rating distributions.",
      "Mapped observable interaction friction (repeated taps, seek volatility) to internal cognitive frustration states.",
      "Constructed state-space models demonstrating predictive power over static post-hoc MOS questionnaires.",
    ],
  },
  {
    id: "project-5",
    title: "Context-Aware QoE Observatory",
    subtitle: "Environmental & Radio Frequency Context Analytics",
    corePrinciple: "Experience ≠ Video Quality Alone",
    description:
      "A comprehensive multi-sensor context analytics observatory proving that subjective quality of experience is modulated by ambient, mobility, and radio-frequency conditions alongside pure video bitrate.",
    category: "Research",
    image: "/assets/img/3.jpg",
    tags: ["Context-Aware QoE", "LTE / 5G RF Telemetry", "Geospatial Analytics", "Environmental Context"],
    year: "2023 – Present",
    layers: [
      "Geospatial Analytics & Mobility Dynamics (Velocity, Route Transitions)",
      "Atmospheric & Weather Intelligence (Temperature, Precipitation, Ambient Environment)",
      "Radio Frequency (RF) & Cellular Telemetry (LTE/5G RSRP, RSRQ, SINR, Handover Events)",
      "Device & Hardware Context (Viewport Dimensions, Battery Health, Thermal State, Screen Brightness)",
    ],
    highlights: [
      "Demonstrated that identical network bandwidth produces divergent QoE ratings across different environmental contexts.",
      "Integrated real-time mobile sensor APIs to capture ambient lighting and device motion signatures.",
      "Constructed unified multi-sensor context profiles across all 1,112 dataset sessions.",
    ],
  },
  {
    id: "project-6",
    title: "Frame Bitrate Explorer",
    subtitle: "Multimedia Content & Video Dynamics Profiling",
    description:
      "Content-side spatial-temporal complexity and bitrate dynamics profiling engine, characterizing video encoding behavior and dynamic bandwidth demands for multimedia systems researchers.",
    category: "Development",
    image: "/assets/img/11.jpg",
    tags: ["Frame Complexity", "Bitrate Dynamics", "UGC Profiling", "MPEG-DASH / AV1", "Multimedia Systems"],
    year: "2023 – Present",
    features: [
      "Spatial Information (SI) and Temporal Information (TI) frame complexity extraction",
      "Bitrate dynamics, burstiness, and GOP structure characterization",
      "User-Generated Content (UGC) vs. Professional Video profiling across diverse genres",
      "Perceptual encoding evaluation asset for MPEG-DASH, H.264/AVC, H.265/HEVC, and AV1",
    ],
    highlights: [
      "Automated frame-level extraction pipeline computing perceptual entropy and motion vector fields.",
      "Analyzed rate-distortion variations under adaptive streaming chunk allocations.",
      "Created open dataset metadata repository for multimedia systems benchmarks.",
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
