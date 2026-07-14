
export interface SearchItem {
  id: string;
  path: string;
  title: string;
  category: string;
  description: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // --- PRODUCTS ---
  {
    id: "windvista",
    path: "/products/windvista",
    title: "WindVista",
    category: "Product",
    description: "End-to-end wind energy intelligence platform. Centralises Shear, LTT, and WindexGraph analysis — cutting wind farm reporting time from days to hours.",
    keywords: ["windvista", "wind", "energy", "shear", "ltt", "windexgraph", "asset management", "wind farm", "analytics"]
  },
  {
    id: "urai",
    path: "/products/urai",
    title: "URAI",
    category: "Product",
    description: "Conversational AI chatbot for field operations. Answers operational questions in natural language — connecting field teams to critical data without spreadsheets.",
    keywords: ["urai", "chatbot", "ai", "conversational ai", "field operations", "natural language", "nlp", "llm"]
  },
  {
    id: "aop",
    path: "/products/aop",
    title: "AOP Basic & PRO",
    category: "Product",
    description: "Annual Operating Plan tool in Basic and PRO tiers. Simplifies management and tracking of AI and business planning environments with a real-time leadership dashboard.",
    keywords: ["aop", "annual operating plan", "ai planning", "business planning", "dashboard", "basic", "pro"]
  },
  {
    id: "braid",
    path: "/products/braid",
    title: "BRAID",
    category: "Product",
    description: "Multi-agent retrieval-augmented AI backbone for complex data workflows — enabling orchestrated, context-aware intelligence across enterprise systems and research pipelines.",
    keywords: ["braid", "ai infrastructure", "llm", "multi-agent", "rag", "retrieval augmented", "data workflows", "ai"]
  },
  {
    id: "code2cognition",
    path: "/products/code2cognition",
    title: "CodeToCognition",
    category: "Product",
    description: "AI upskilling academy offering practical, project-based training in machine learning and applied AI — built for students and corporate engineering teams.",
    keywords: ["codetocognition", "code2cognition", "ai upskilling", "academy", "training", "machine learning", "education", "corporate"]
  },
  {
    id: "ai-tutor",
    path: "/products/ai-tutor",
    title: "AI Tutor",
    category: "Product",
    description: "AI-powered tutoring platform delivering adaptive, personalised AI and ML learning experiences matched to each learner's pace and knowledge gaps.",
    keywords: ["ai tutor", "education", "tutoring", "personalised learning", "ai learning", "ml", "students", "adaptive"]
  },

  // --- SERVICES ---
  {
    id: "artificial-intelligence",
    path: "/services#artificial-intelligence",
    title: "Artificial Intelligence Services",
    category: "Service",
    description: "Custom Generative AI and Intelligent Agent Frameworks. We design and deliver robust AI workflows, custom large language model pipelines.",
    keywords: ["ai", "artificial intelligence", "generative ai", "llm", "rag", "agents"]
  },
  {
    id: "machine-learning",
    path: "/services#machine-learning",
    title: "Machine Learning Services",
    category: "Service",
    description: "Predictive Analytics & Classification Infrastructures. We deploy statistical algorithms that analyze chronological patterns to predict upcoming system vulnerabilities.",
    keywords: ["machine learning", "ml", "predictive analytics", "classification", "anomaly detection"]
  },
  {
    id: "data-science",
    path: "/services#data-science",
    title: "Data Science Services",
    category: "Service",
    description: "Enterprise Data Mining, Cleaning, and Aggregation. We restructure chaotic database stores and build high-frequency cleaning scripts.",
    keywords: ["data science", "data mining", "etl", "cleansing", "aggregation", "database"]
  },
  {
    id: "geospatial-engineering",
    path: "/services#geospatial-engineering",
    title: "Geospatial Engineering",
    category: "Service",
    description: "GIS Servers, Custom Tiling, and Satellite Data Analytics. We build compliance-validated spatial server environments that process shapefiles.",
    keywords: ["geospatial", "engineering", "gis", "mapping", "satellite data", "spatial server"]
  },
  {
    id: "wind-energy-solutions",
    path: "/services#wind-energy",
    title: "Wind Energy Solutions",
    category: "Service",
    description: "Wind Resource Assessment & Farm Performance Optimization. We deliver physics-backed predictive analytics for renewable energy systems.",
    keywords: ["wind energy", "renewable energy", "wind resource assessment", "farm optimization", "wake loss"]
  },
  {
    id: "enterprise-development",
    path: "/services#enterprise-development",
    title: "Enterprise Software Development",
    category: "Service",
    description: "Highly Concurrent APIs and Secure Web Dashboards. We build high-capacity backends and responsive React applications.",
    keywords: ["enterprise software", "development", "api", "web dashboards", "fastapi", "react"]
  },

  // --- INDUSTRIES ---
  {
    id: "industry-wind-energy",
    path: "/industries",
    title: "Wind Energy Industry",
    category: "Industry",
    description: "High wake interference and complex terrain geometry reduce annual energy output (AEP) and cause unpredictability in grid integration. We apply microscale spatial resource modeling inside our WindVista analytics engine.",
    keywords: ["wind energy", "industry", "wake interference", "aep", "windvista"]
  },
  {
    id: "industry-telecom",
    path: "/industries",
    title: "Telecom Industry",
    category: "Industry",
    description: "Manual planning of wireless network expansions is slow, prone to signal interference, and struggles to integrate regional census datasets. We build automated geospatial site planning tools.",
    keywords: ["telecom", "industry", "wireless network", "geospatial", "site planning"]
  },
  {
    id: "industry-healthcare",
    path: "/industries",
    title: "Healthcare Industry",
    category: "Industry",
    description: "Medical image analysis datasets are massive and require manual annotations. We build secure local semantic classification pipelines.",
    keywords: ["healthcare", "industry", "medical image", "semantic classification", "radiology"]
  },
  {
    id: "industry-manufacturing",
    path: "/industries",
    title: "Manufacturing Industry",
    category: "Industry",
    description: "Sudden heavy equipment downtime in metal stamp assembly lines causes high losses. We execute time-series anomaly detection algorithms.",
    keywords: ["manufacturing", "industry", "equipment downtime", "anomaly detection", "assembly lines"]
  },
  {
    id: "industry-government",
    path: "/industries",
    title: "Government Industry",
    category: "Industry",
    description: "Dispersed regional GIS planning portals load slow and crash under high concurrent maps requests. We replace heavy GIS middleware layers with optimized vector tile engines.",
    keywords: ["government", "industry", "gis", "planning portals", "vector tile engines"]
  },
  {
    id: "industry-research",
    path: "/industries",
    title: "Research Industry",
    category: "Industry",
    description: "Scientific groups are overwhelmed by millions of PDF research pages. We build local, isolated semantic retrieval agents (URAI).",
    keywords: ["research", "industry", "scientific", "semantic retrieval", "urai"]
  },

  // --- RESEARCH ---
  {
    id: "research-wake",
    path: "/research",
    title: "Microscale Wake Simulation in Rough Terrains Using Deep Autoencoders",
    category: "Research",
    description: "This paper describes an autoencoder model that runs on digital elevation models to estimate wind wake losses.",
    keywords: ["research", "paper", "wake simulation", "autoencoders", "wind wake"]
  },
  {
    id: "research-spatial",
    path: "/research",
    title: "Asynchronous Spatial Vector Tiling Under Intense Concurrent Mapping Queries",
    category: "Research",
    description: "We outline an async architecture that processes massive spatial PostgreSQL queries in parallel.",
    keywords: ["research", "paper", "spatial vector", "tiling", "postgresql", "mapping"]
  },
  {
    id: "research-domain-adaptation",
    path: "/research",
    title: "On-Premises Domain Adaptation of Small Language Models in Highly Secure Corporate Clusters",
    category: "Research",
    description: "We analyze methodologies for tuning 7-billion parameter language models on proprietary corporate wikis.",
    keywords: ["research", "paper", "domain adaptation", "language models", "llm", "security"]
  },

  // --- CAREERS ---
  {
    id: "career-ml-engineer",
    path: "/careers",
    title: "Senior Machine Learning Engineer",
    category: "Career",
    description: "Architect time-series predictive autoencoders and NLP RAG indices. Requires 3+ years PyTorch and FastAPI experience.",
    keywords: ["career", "job", "machine learning engineer", "ml", "pytorch", "fastapi", "ai research"]
  },
  {
    id: "career-geospatial-engineer",
    path: "/careers",
    title: "Geospatial Software Engineer",
    category: "Career",
    description: "Implement high-speed coordinate transformations and compliant OGC tile servers. Expertise in Go, C++ and GDAL required.",
    keywords: ["career", "job", "geospatial software engineer", "gis platform", "go", "c++", "gdal"]
  },
  {
    id: "career-ai-intern",
    path: "/careers",
    title: "AI Research Intern",
    category: "Career",
    description: "Assist research leaders in coding physics-guided neural network loss parameters. Strong statistical Python foundations required.",
    keywords: ["career", "job", "ai research intern", "internship", "neural network", "python"]
  },

  // --- ABOUT ---
  {
    id: "about-sirpi",
    path: "/about",
    title: "About SIRPI",
    category: "About",
    description: "SIRPI Technologies is a highly specialized scientific computing and software engineering firm.",
    keywords: ["about", "sirpi", "scientific computing", "software engineering", "history"]
  }
];

export function performSearch(query: string): SearchItem[] {
  if (!query || query.trim() === '') return [];
  
  const q = query.toLowerCase().trim();
  
  return searchIndex.filter(item => {
    // Check title
    if (item.title.toLowerCase().includes(q)) return true;
    
    // Check description
    if (item.description.toLowerCase().includes(q)) return true;
    
    // Check keywords
    if (item.keywords.some(kw => kw.toLowerCase().includes(q))) return true;
    
    // Check category
    if (item.category.toLowerCase().includes(q)) return true;
    
    return false;
  });
}
