
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
    id: "windvista-2",
    path: "/products/windvista-2",
    title: "WindVista 2",
    category: "Product",
    description: "Enhanced wind energy asset management platform centralizing Shear, LTT, and WindexGraph with improved automation, advanced filters and streamlined navigation for faster wind data analysis and reporting.",
    keywords: ["wind", "energy", "asset management", "shear", "ltt", "windexgraph", "data analysis", "reporting"]
  },
  {
    id: "windvista-1",
    path: "/products/windvista-1",
    title: "WindVista 1",
    category: "Product",
    description: "Key platform for managing all wind energy assets and data in one place. Covers site assessment, energy prediction, and operational management of wind farms.",
    keywords: ["wind", "energy", "asset management", "site assessment", "energy prediction", "wind farms"]
  },
  {
    id: "batch-uploader",
    path: "/products/batch-uploader",
    title: "Batch Uploader",
    category: "Product",
    description: "Tool for bulk data uploading and processing to support wind energy and geospatial data pipelines.",
    keywords: ["bulk upload", "data processing", "wind energy", "geospatial", "pipelines"]
  },
  {
    id: "coordinate-plotter",
    path: "/products/coordinate-plotter",
    title: "Coordinate Plotter",
    category: "Product",
    description: "Geospatial mapping tool for plotting and visualizing coordinate data, supporting real-time mapping and spatial analysis.",
    keywords: ["geospatial", "mapping", "coordinate", "visualizing", "real-time", "spatial analysis"]
  },
  {
    id: "windbug",
    path: "/products/windbug",
    title: "WindBug",
    category: "Product",
    description: "Bug tracking / QA tool specific to wind energy software projects, supporting operational management of wind farms.",
    keywords: ["bug tracking", "qa", "wind energy", "software", "operational management"]
  },
  {
    id: "alerp",
    path: "/products/alerp",
    title: "ALERP",
    category: "Product",
    description: "ERP software that streamlines fabrication and industrial work for aluminum window manufacturers. Part of Manufacturing, ERP & Operations domain.",
    keywords: ["erp", "manufacturing", "fabrication", "industrial", "aluminum window", "operations"]
  },
  {
    id: "mdm",
    path: "/products/mdm",
    title: "MDM",
    category: "Product",
    description: "Master Data Management platform for centralizing and managing organizational data across systems.",
    keywords: ["mdm", "master data management", "centralizing", "organizational data"]
  },
  {
    id: "slice-arrow",
    path: "/products/slice-arrow",
    title: "Slice Arrow",
    category: "Product",
    description: "DevOps & AI Deployments platform — launch products faster with automated deployments, CI/CD pipelines, GPU infrastructure, and end-to-end AI model management. 50+ applications deployed, 99% uptime guarantee.",
    keywords: ["devops", "ai deployment", "ci/cd", "gpu", "infrastructure", "ai model management"]
  },
  {
    id: "canvas",
    path: "/products/canvas",
    title: "Canvas",
    category: "Product",
    description: "General & Vertical Platform covering specialized needs including data visualization, finance, research, and complex data analysis.",
    keywords: ["platform", "data visualization", "finance", "research", "data analysis"]
  },
  {
    id: "tgdex-discussion",
    path: "/products/tgdex-discussion",
    title: "TGDex Discussion",
    category: "Product",
    description: "Discussion Forum platform — dedicated space to foster a supportive learning and problem-solving community. Part of Education & Community Platforms domain.",
    keywords: ["discussion forum", "learning", "community", "education", "problem-solving"]
  },
  {
    id: "tgdex-competition",
    path: "/products/tgdex-competition",
    title: "TGDex Competition",
    category: "Product",
    description: "Competition module under the TGDex education platform supporting online learning and engaging educational content. Part of Education & Community Platforms domain.",
    keywords: ["competition", "education", "online learning", "educational content"]
  },
  {
    id: "ndvi-data-stories",
    path: "/products/ndvi-data-stories",
    title: "NDVI Data Stories",
    category: "Product",
    description: "Data Stories application using data visualization and narrative techniques, focused on NDVI (Normalized Difference Vegetation Index) for crop and plant health monitoring across India.",
    keywords: ["data stories", "visualization", "ndvi", "crop", "plant health", "monitoring", "india"]
  },
  {
    id: "bangalore-data-stories",
    path: "/products/bangalore-data-stories",
    title: "Bangalore Data Stories",
    category: "Product",
    description: "Data Stories Application for the Bangalore region using data visualization and narrative techniques to drive understanding and decisions in urban planning or environmental analysis.",
    keywords: ["data stories", "bangalore", "visualization", "urban planning", "environmental analysis"]
  },
  {
    id: "decomm",
    path: "/products/decomm",
    title: "Decomm",
    category: "Product",
    description: "Decommissioning management tool for tracking and managing wind farm or industrial asset decommissioning operations.",
    keywords: ["decommissioning", "management tool", "wind farm", "industrial asset", "operations"]
  },
  {
    id: "odisha-health-cdpg",
    path: "/products/odisha-health-cdpg",
    title: "Odisha Health CDPG",
    category: "Product",
    description: "Health data platform for Odisha region. CDPG (Community Data Platform for Governance) — data-driven health decision-making for public sector.",
    keywords: ["health data", "odisha", "cdpg", "governance", "public sector"]
  },
  {
    id: "aop-basic-and-pro",
    path: "/products/aop-basic-and-pro",
    title: "AOP Basic and PRO",
    category: "Product",
    description: "Annual Operating Plan tool in Basic and PRO tiers. AI Infrastructure & LLM tooling to simplify management and tracking of AI/business planning environments.",
    keywords: ["aop", "annual operating plan", "ai infrastructure", "llm", "business planning"]
  },
  {
    id: "sumo-plus-plus",
    path: "/products/sumo-plus-plus",
    title: "SUMO++",
    category: "Product",
    description: "SUMO++ is an enhanced version of the open-source SUMO application, built by leveraging the existing codebase and extending it with new features, improved functionality, and a modernized user interface.",
    keywords: ["sumo", "sumo++", "open-source", "application", "ui"]
  },
  {
    id: "sirpis-attendance",
    path: "/products/sirpis-attendance",
    title: "Sirpi's Attendance",
    category: "Product",
    description: "Internal attendance and field staff tracking system for SIRPI. Supports managing field staff with smart data tools.",
    keywords: ["attendance", "field staff tracking", "internal", "smart data tools"]
  },
  {
    id: "codetocognition",
    path: "/products/codetocognition",
    title: "CodeToCognition",
    category: "Product",
    description: "AI Upskilling Academy platform. Offers practical AI/ML training for students and corporate teams, connecting academia with real-world applications in Wind Energy, Telecom, and Geospatial Engineering.",
    keywords: ["ai upskilling", "academy", "training", "machine learning", "wind energy", "telecom", "geospatial"]
  },
  {
    id: "cbr",
    path: "/products/cbr",
    title: "CBR",
    category: "Product",
    description: "Case-Based Reasoning research platform under SIRPI's General & Vertical domain for complex data analysis and research workflows.",
    keywords: ["cbr", "case-based reasoning", "research platform", "data analysis", "workflows"]
  },
  {
    id: "cbr-data-curation",
    path: "/products/cbr-data-curation",
    title: "CBR – Data Curation",
    category: "Product",
    description: "Data curation sub-project under the CBR initiative. Focuses on cleaning, organizing, and managing datasets for case-based reasoning and research applications.",
    keywords: ["data curation", "cbr", "cleaning", "organizing", "datasets"]
  },
  {
    id: "cbr-ai-challenge",
    path: "/products/cbr-ai-challenge",
    title: "CBR AI Challenge",
    category: "Product",
    description: "AI challenge component of the CBR project, likely an internal or client-facing competition/benchmark to evaluate AI model performance on CBR datasets.",
    keywords: ["ai challenge", "cbr", "competition", "benchmark", "ai model performance"]
  },
  {
    id: "windex-graph-v2",
    path: "/products/windex-graph-v2",
    title: "Windex Graph V2",
    category: "Product",
    description: "Version 2 of the WindexGraph tool — part of the WindVista wind energy platform. Used for graphical analysis and visualization of wind index data for energy prediction.",
    keywords: ["windex graph", "windvista", "wind energy", "graphical analysis", "visualization", "energy prediction"]
  },
  {
    id: "project-eagle",
    path: "/products/project-eagle",
    title: "Project Eagle",
    category: "Product",
    description: "Internal or client project under SIRPI's General & Vertical Platforms domain. Covers specialized data analysis needs.",
    keywords: ["project eagle", "internal project", "data analysis"]
  },
  {
    id: "locomo",
    path: "/products/locomo",
    title: "Locomo",
    category: "Product",
    description: "Platform under SIRPI's General & Vertical domain. May relate to logistics, location-based monitoring, or movement tracking applications.",
    keywords: ["locomo", "logistics", "location-based monitoring", "movement tracking"]
  },
  {
    id: "dpi-factory",
    path: "/products/dpi-factory",
    title: "DPI Factory",
    category: "Product",
    description: "DPI (Data & Platform Infrastructure) Factory — likely an internal tooling or infrastructure platform for building and managing data pipelines and digital public infrastructure.",
    keywords: ["dpi factory", "data infrastructure", "platform infrastructure", "data pipelines", "digital public infrastructure"]
  },
  {
    id: "insta-post",
    path: "/products/insta-post",
    title: "Insta Post",
    category: "Product",
    description: "Instagram post scheduling and management tool (InstaPost Scheduler). Enables scheduling, automating, and managing social media posts on Instagram.",
    keywords: ["insta post", "instagram", "post scheduling", "social media", "management tool"]
  },
  {
    id: "morpheus",
    path: "/products/morpheus",
    title: "Morpheus",
    category: "Product",
    description: "Platform under SIRPI's General & Vertical Platforms domain. Likely an AI/ML model deployment or data transformation tool.",
    keywords: ["morpheus", "ai deployment", "ml model", "data transformation"]
  },
  {
    id: "neuberg",
    path: "/products/neuberg",
    title: "Neuberg",
    category: "Product",
    description: "Project under SIRPI's domain — possibly a diagnostic or health data analytics platform. Neuberg is a diagnostics brand, suggesting a health-sector engagement.",
    keywords: ["neuberg", "diagnostic", "health data", "analytics"]
  },
  {
    id: "braid",
    path: "/products/braid",
    title: "BRAID",
    category: "Product",
    description: "BRAID platform under SIRPI's AI Infrastructure & LLM Tools domain. Likely a multi-agent or retrieval-augmented AI backbone for complex data workflows.",
    keywords: ["braid", "ai infrastructure", "llm tools", "multi-agent", "rag", "data workflows", "ai"]
  },
  {
    id: "ai-tutor",
    path: "/products/ai-tutor",
    title: "AI Tutor",
    category: "Product",
    description: "AI-powered tutoring platform under Education & Community Platforms domain. Connected to Sirpi's Code2Cognition academy — delivers personalized AI/ML learning experiences for students.",
    keywords: ["ai tutor", "education", "tutoring", "ai learning", "ml learning", "students"]
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
