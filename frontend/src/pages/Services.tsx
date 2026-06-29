import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Cpu, Brain, Database, Globe, Wind, Terminal, CheckCircle2, ArrowRight, Cloud, Rocket, Map, Eye, MessageSquare, LineChart } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
}

const Services: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view
  useEffect(() => {
    if (activeSection && scrollContainerRef.current) {
      const activeTab = document.getElementById(`nav-tab-${activeSection}`);
      const container = scrollContainerRef.current;
      if (activeTab && container) {
        // Calculate the scroll position to center the active tab
        const scrollLeft = activeTab.offsetLeft - (container.offsetWidth / 2) + (activeTab.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  // Sync nav visibility with main Navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [location]);

  const serviceList: ServiceDetail[] = [
    {
      id: 'artificial-intelligence',
      icon: <Cpu className="w-8 h-8 text-[#05325d]" />,
      title: 'Artificial Intelligence',
      subtitle: 'Custom Generative AI and Intelligent Agent Frameworks',
      description: 'We design and deliver robust AI workflows, custom large language model pipelines, and intelligent retrieval-augmented generation systems suited for private secure deployment.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
      features: ['Private Retrieval Augmented Generation (RAG) engines', 'Fine-tuning of specialised small language models', 'Semantic vector search and indexing setups', 'Intelligent automation orchestrator agents'],
      benefits: ['Unlocking intelligence from massive text archives', 'Complete data privacy (zero leaks to external LLM APIs)', 'Automated semantic data tag generation', '90% faster internal query resolutions'],
      technologies: ['PyTorch', 'Hugging Face', 'LangChain', 'Qdrant', 'LlamaIndex'],
      caseStudy: { client: 'Global Telecommunications Corp', challenge: 'Needed to search through 15 years of customer service ticket transcripts without sending data to public clouds.', solution: 'Deployed a customised Llama-based RAG pipeline on local secure CPU clusters using semantic indexing.', outcome: 'Support ticket routing automated by 78%, reducing operational lookup latencies from minutes to seconds.' },
    },
    {
      id: 'machine-learning',
      icon: <Brain className="w-8 h-8 text-[#05325d]" />,
      title: 'Machine Learning',
      subtitle: 'Predictive Analytics & Classification Infrastructures',
      description: 'We deploy statistical algorithms that analyse chronological patterns to predict upcoming system vulnerabilities, sales demand, or anomalous spikes.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      features: ['Predictive system failure algorithms (Anomaly Detection)', 'Time-series demand and inventory forecasting', 'Risk scoring and classification pipelines', 'Reinforcement learning workflow simulators'],
      benefits: ['Pre-empting system downtime before failure occurs', 'Minimised warehouse holding overhead via optimised demand models', 'Automated fraudulent transactions auditing', 'Data-driven risk assessment dashboards'],
      technologies: ['TensorFlow', 'Scikit-Learn', 'XGBoost', 'Pandas', 'MLflow'],
      caseStudy: { client: 'Automotive Parts Manufacturer', challenge: 'High losses from unexpected industrial stamping machine breakdowns.', solution: 'Built a customised vibration and heat telemetry prediction model using deep autoencoders.', outcome: 'Predictive warnings issued 14 hours prior to breakdown, resulting in a 40% drop in assembly line downtime.' },
    },
    {
      id: 'data-science',
      icon: <Database className="w-8 h-8 text-[#05325d]" />,
      title: 'Data Science & Analytics',
      subtitle: 'Enterprise Data Mining, Cleaning, and Aggregation',
      description: 'We restructure chaotic database stores and build high-frequency custom data pipelines, including scalable authentication, catalogue, and visualisation servers.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      features: ['Data cleansing and batch ETL pipelines', 'Business metrics visualisation panels', 'Statistical correlation and pattern reporting', 'Massive dataset compression formats'],
      benefits: ['Establishment of a single source of truth across operations', 'Improved accuracy in executive reports', 'Rapid querying of legacy warehouse data', 'Actionable correlations highlighted automatically'],
      technologies: ['PostgreSQL', 'Apache Spark', 'Airflow', 'FastAPI', 'Tableau API'],
      caseStudy: { client: 'National Retail Network', challenge: 'Dispersed transaction databases leading to slow, inconsistent financial reporting across 200 stores.', solution: 'Constructed an automated Apache Spark pipeline that cleanses, joins, and aggregates transaction logs nightly.', outcome: 'Unified operations dashboards generated automatically by 5 AM, saving 120 analyst hours weekly.' },
    },
    {
      id: 'geospatial-intelligence',
      icon: <Globe className="w-8 h-8 text-[#05325d]" />,
      title: 'Geospatial Intelligence',
      subtitle: 'AI-Powered Geospatial Hosting and Analytics',
      description: 'We build compliance-validated spatial server environments that process shapefiles and raster maps, delivering AI-powered geospatial data hosting and blazing fast analytics.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      features: ['Open Geospatial Consortium (OGC) standard map services', 'Fast vector tile render engines', 'LiDAR elevation profile simulators', 'AI geospatial hosting'],
      benefits: ['Zero-latency zooming on heavy mapping portals', 'Automated monitoring of infrastructure encroachment', 'Accurate slope and elevation simulations for builders', 'Standardised GIS API compatibility out-of-the-box'],
      technologies: ['PostGIS', 'GDAL/OGR', 'Geoserver', 'MapLibre'],
      caseStudy: { client: 'Regional Land Registry', challenge: 'Legacy land portal crashed when serving parcel maps to hundreds of builders simultaneously.', solution: 'Replaced GIS middleware with a Go-based spatial tiling backend leveraging parallel coordinate calculations.', outcome: 'Map loading speed boosted by 10×, successfully rendering complex vector layers under intense concurrent traffic.' },
    },
    {
      id: 'wind-energy',
      icon: <Wind className="w-8 h-8 text-[#05325d]" />,
      title: 'Wind Energy Solutions',
      subtitle: 'Wind Resource Assessment & Farm Performance Optimisation',
      description: 'We deliver physics-backed predictive analytics for renewable energy systems, estimating weather patterns, wake losses, and turbine power outputs.',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
      features: ['Turbine wake interference optimisation simulators', 'Microscale wind resource mapping', 'Real-time power curve deviation alerts', 'Offshore layout simulation frameworks'],
      benefits: ['Maximise annual energy production (AEP) via optimal placement', 'Instant identification of underperforming wind turbines', 'Reduced resource modelling costs in tender stages', 'Predictive grid injection scheduling'],
      technologies: ['WindVista Engine', 'WRF Weather Models', 'NumPy', 'SciPy', 'Matplotlib'],
      caseStudy: { client: 'Apex Renewables', challenge: 'Suboptimal turbine placement on mountainous terrain was causing high wake losses and low grid output.', solution: 'Simulated layout options using the WindVista microscale resource engine to compute terrain slope factors.', outcome: 'Redesigned turbine positioning, boosting annual energy output by 4.2% and mitigating wake losses.' },
    },
    {
      id: 'enterprise-development',
      icon: <Terminal className="w-8 h-8 text-[#05325d]" />,
      title: 'Enterprise Software Development',
      subtitle: 'Highly Concurrent APIs and Mobile Data Collection',
      description: 'We build high-capacity backends and custom mobile applications designed for real-time field data collection and complex enterprise workflow automation.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      features: ['High-performance FastAPI asynchronous backends', 'React frontend interfaces', 'Mobile field data collection', 'Secure JWT session management with HTTPS'],
      benefits: ['Fast response times (sub-100ms API endpoints)', 'Zero-fluff clean user interfaces designed for operators', 'Scalable horizontal deployment in AWS/Vercel/Render', 'Type-safe frontends with strict error tracking'],
      technologies: ['FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
      caseStudy: { client: 'Infrastructure Logistics Group', challenge: 'Field personnel were unable to log asset records due to a slow, buggy legacy portal.', solution: 'Engineered a responsive, mobile-first dashboard powered by an async FastAPI database driver.', outcome: 'Field entry times dropped by 70%, with data syncing seamlessly even on high-latency mobile networks.' },
    },
    {
      id: 'cloud-devops',
      icon: <Cloud className="w-8 h-8 text-[#05325d]" />,
      title: 'Cloud & DevOps',
      subtitle: 'Secure Infrastructure Provisioning',
      description: 'Design scalable cloud architectures, deploying custom authentication, authorization, and resource servers to ensure your data infrastructure is completely secure and highly available.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      features: ['CI/CD deployment pipelines', 'Authentication & authorization servers', 'Container orchestration', 'High-availability scaling'],
      benefits: ['Zero-downtime rolling updates', 'Enterprise-grade security and access control', 'Reduced infrastructure hosting costs', 'Seamless scaling during peak traffic'],
      technologies: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'Terraform', 'OAuth2'],
      caseStudy: { client: 'Global Financial Services', challenge: 'Legacy monolithic architecture caused frequent outages during peak trading hours.', solution: 'Migrated to a containerised microservices architecture with automated CI/CD and strict identity access management.', outcome: 'Achieved 99.99% uptime and reduced deployment cycles from weeks to hours.' }
    },
    {
      id: 'digital-transformation',
      icon: <Rocket className="w-8 h-8 text-[#05325d]" />,
      title: 'Digital Transformation',
      subtitle: 'n8n Automation & Organizational Upskilling',
      description: 'Guide legacy businesses into the digital era through complex workflow automation using the n8n low-code platform and comprehensive AI upskilling programs.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      features: ['n8n low-code workflow automation', 'Legacy system modernization', 'Code2Cognition hands-on AI training', 'Process digitization'],
      benefits: ['Elimination of manual repetitive tasks', 'Rapid deployment of internal tools', 'Empowered internal teams through skill transfer', 'Accelerated time-to-market for digital products'],
      technologies: ['n8n', 'Python', 'React Dashboards', 'RESTful APIs'],
      caseStudy: { client: 'National Logistics Provider', challenge: 'Manual data entry across disconnected systems led to errors and delayed shipping manifests.', solution: 'Implemented n8n workflow automation to synchronize CRM, inventory, and fleet management systems.', outcome: 'Saved over 200 hours monthly and eliminated critical data entry errors.' }
    },
    {
      id: 'gis-remote-sensing',
      icon: <Map className="w-8 h-8 text-[#05325d]" />,
      title: 'GIS & Remote Sensing',
      subtitle: 'Ongoing Site Monitoring & Environmental Analysis',
      description: 'Leverage remote sensing and earth observation data for ongoing site monitoring, device placement planning, and specialized soil moisture or surface runoff tracking.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      features: ['Satellite imagery change detection', 'Soil moisture & runoff analysis', 'IoT device placement modeling', 'Time-series environmental tracking'],
      benefits: ['Data-driven site selection and planning', 'Early detection of environmental risks', 'Optimized resource allocation for agriculture', 'Accurate topographical mapping'],
      technologies: ['Sentinel/Landsat', 'QGIS', 'Google Earth Engine', 'Python'],
      caseStudy: { client: 'Regional Agricultural Board (Varanasi)', challenge: 'Unpredictable surface runoff was affecting crop yields and irrigation planning.', solution: 'Developed a specialized analysis pipeline using satellite imagery to track soil moisture and runoff patterns.', outcome: 'Improved irrigation scheduling efficiency by 30% and mitigated flood risks.' }
    },
    {
      id: 'computer-vision',
      icon: <Eye className="w-8 h-8 text-[#05325d]" />,
      title: 'Computer Vision',
      subtitle: 'DeepseekOCR & Image Recognition',
      description: 'Deploy state-of-the-art visual AI models to extract meaningful data from images, including integrating and fine-tuning DeepseekOCR for accurate document extraction.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      features: ['DeepseekOCR document text extraction', 'Real-time object detection', 'Automated quality control', 'Biometric recognition'],
      benefits: ['Digitization of physical archives at scale', 'Elimination of manual visual inspections', 'Enhanced security and access control', 'Instant data extraction from complex forms'],
      technologies: ['OpenCV', 'DeepseekOCR', 'YOLOv8', 'PyTorch'],
      caseStudy: { client: 'Enterprise Legal Firm', challenge: 'Thousands of scanned legal documents required manual review and data entry.', solution: 'Fine-tuned DeepseekOCR to automatically extract clauses, dates, and signatures from unstructured PDFs.', outcome: 'Document processing speed increased by 400%, saving millions in paralegal hours.' }
    },
    {
      id: 'natural-language-processing',
      icon: <MessageSquare className="w-8 h-8 text-[#05325d]" />,
      title: 'Natural Language Processing',
      subtitle: 'Semantic Search & Conversational Agents',
      description: 'Build advanced NLP systems that understand and generate human language, empowering applications with intelligent chatbots, semantic search, and summarization.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
      features: ['Custom conversational AI chatbots', 'Semantic search querying', 'Automated sentiment analysis', 'Multi-lingual translation'],
      benefits: ['24/7 automated customer support', 'Instant retrieval of complex technical documents', 'Real-time social media brand monitoring', 'Global reach with localized content'],
      technologies: ['Transformers', 'OpenAI APIs', 'spaCy', 'Vector DBs'],
      caseStudy: { client: 'E-commerce Retailer', challenge: 'Customer support team was overwhelmed with repetitive inquiries about order status and returns.', solution: 'Deployed a context-aware NLP chatbot capable of understanding intent and querying the order database.', outcome: 'Deflected 65% of support tickets, significantly improving customer satisfaction scores.' }
    },
    {
      id: 'predictive-analytics',
      icon: <LineChart className="w-8 h-8 text-[#05325d]" />,
      title: 'Predictive Analytics',
      subtitle: 'Forecasting & Risk Mitigation Models',
      description: 'Utilize historical data and statistical modeling to forecast future trends, helping pre-empt system downtime, optimize inventory, and mitigate financial risks.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      features: ['Time-series demand forecasting', 'Predictive maintenance alerts', 'Churn prediction modeling', 'Dynamic pricing optimization'],
      benefits: ['Proactive rather than reactive decision making', 'Significant reduction in inventory holding costs', 'Maximized revenue through dynamic pricing', 'Improved customer retention rates'],
      technologies: ['Prophet', 'ARIMA', 'XGBoost', 'scikit-learn'],
      caseStudy: { client: 'Global Manufacturing Corp', challenge: 'Unexpected equipment failures caused costly production halts.', solution: 'Implemented predictive maintenance models using historical telemetry and sensor data.', outcome: 'Reduced unexpected downtime by 50% and optimized spare parts inventory.' }
    }
  ];

  // Track active section for sticky tabs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: [0, 0.2, 0.5, 0.8, 1] }
    );

    serviceList.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [serviceList]);

  return (
    <>
      <SEO
        title="Our Enterprise Services"
        description="Explore our specialised services including AI research, Predictive ML, Data ETL, Geospatial GIS servers, Wind energy optimisation, and FastAPI corporate dashboards."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#021124] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Services &amp; Capabilities</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
              Enterprise Technical<br />
              <span className="text-[#6eb4f7]">Competencies</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
              We focus on solving hard engineering challenges. Here is a breakdown of our technical services, including features, benefits, and real-world outcomes.
            </p>
          </div>
        </section>

        {/* ── NAV PILLS ── */}
        <div 
          className={`bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-[#e5e7eb] w-full z-40 transition-all duration-300 sticky ${isNavVisible ? 'top-[76px]' : 'top-0'}`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto w-full whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {serviceList.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <a
                    key={s.id}
                    id={`nav-tab-${s.id}`}
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(s.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', `#${s.id}`);
                      }
                    }}
                    className={`px-5 py-4 text-sm font-semibold transition-all duration-300 border-b-2 flex-shrink-0
                      ${isActive 
                        ? 'text-[#05325d] border-[#05325d] bg-slate-50' 
                        : 'text-slate-500 border-transparent hover:text-[#05325d] hover:bg-slate-50'}`}
                  >
                    {s.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── SERVICE SECTIONS ── */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 space-y-0">
          {serviceList.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-[140px] border-b border-[#c8c0aa] py-20 grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Left: Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 border border-[#c8c0aa] bg-white">{service.icon}</div>
                  <div>
                    <h2 className="font-bold text-2xl sm:text-3xl text-[#021124]">{service.title}</h2>
                    <p className="text-[#05325d] text-xs font-semibold mt-0.5">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-[#555] text-sm sm:text-base leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#021124] mb-3">Capabilities</h4>
                    <ul className="space-y-2">
                      {service.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-xs text-[#555]">
                          <CheckCircle2 className="w-4 h-4 text-[#05325d] flex-shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#021124] mb-3">Business Impact</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((ben, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-xs text-[#555]">
                          <CheckCircle2 className="w-4 h-4 text-[#05325d] flex-shrink-0 mt-0.5" />
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#c8c0aa]">
                  <p className="text-[10px] uppercase font-bold text-[#777] tracking-widest mb-3">Core Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 border border-[#c8c0aa] bg-white text-[#555]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Case Study — Image card */}
              <div className="flex flex-col">
                {/* Image card header */}
                <Card
                  img={service.img}
                  title={service.title}
                  description={service.caseStudy.client}
                  tag="Case Study"
                  height="h-52"
                  gradient="strong"
                  className="w-full"
                />
                {/* Detail panel */}
                <div className="bg-white border border-t-0 border-[#c8c0aa] flex-1">
                  <div className="p-6 sm:p-8 space-y-6">
                    {[
                      { label: 'Challenge', text: service.caseStudy.challenge, color: 'text-[#021124]' },
                      { label: 'Solution', text: service.caseStudy.solution, color: 'text-[#021124]' },
                      { label: 'Outcome', text: service.caseStudy.outcome, color: 'text-[#05325d]' },
                    ].map((item) => (
                      <div key={item.label}>
                        <h4 className={`text-xs font-bold uppercase tracking-wider ${item.color} mb-1`}>{item.label}</h4>
                        <p className="text-[#555] text-xs sm:text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <section className="bg-[#021124] py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="font-bold text-4xl sm:text-5xl text-white mb-6">
              Ready to get started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?type=consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm transition-colors">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                Contact Team
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Services;
