import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Cpu, Brain, Database, Globe, Wind, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
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
      icon: <Cpu className="w-8 h-8 text-[#1a5c5a]" />,
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
      icon: <Brain className="w-8 h-8 text-[#1a5c5a]" />,
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
      icon: <Database className="w-8 h-8 text-[#1a5c5a]" />,
      title: 'Data Science',
      subtitle: 'Enterprise Data Mining, Cleaning, and Aggregation',
      description: 'We restructure chaotic database stores and build high-frequency cleaning scripts to ensure your data is accessible, organised, and optimised for reporting.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      features: ['Data cleansing and batch ETL pipelines', 'Business metrics visualisation panels', 'Statistical correlation and pattern reporting', 'Massive dataset compression formats'],
      benefits: ['Establishment of a single source of truth across operations', 'Improved accuracy in executive reports', 'Rapid querying of legacy warehouse data', 'Actionable correlations highlighted automatically'],
      technologies: ['PostgreSQL', 'Apache Spark', 'Airflow', 'FastAPI', 'Tableau API'],
      caseStudy: { client: 'National Retail Network', challenge: 'Dispersed transaction databases leading to slow, inconsistent financial reporting across 200 stores.', solution: 'Constructed an automated Apache Spark pipeline that cleanses, joins, and aggregates transaction logs nightly.', outcome: 'Unified operations dashboards generated automatically by 5 AM, saving 120 analyst hours weekly.' },
    },
    {
      id: 'geospatial-engineering',
      icon: <Globe className="w-8 h-8 text-[#1a5c5a]" />,
      title: 'Geospatial Engineering',
      subtitle: 'GIS Servers, Custom Tiling, and Satellite Data Analytics',
      description: 'We build compliance-validated spatial server environments that process shapefiles, raster maps, and LiDAR layers to render interactive maps at lightning speed.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      features: ['Open Geospatial Consortium (OGC) standard map services', 'Fast vector tile render engines', 'LiDAR elevation profile simulators', 'Automated satellite image change detection'],
      benefits: ['Zero-latency zooming on heavy mapping portals', 'Automated monitoring of infrastructure encroachment', 'Accurate slope and elevation simulations for builders', 'Standardised GIS API compatibility out-of-the-box'],
      technologies: ['PostGIS', 'GDAL/OGR', 'MapServer', 'Geoserver', 'Leaflet/MapLibre'],
      caseStudy: { client: 'Regional Land Registry', challenge: 'Legacy land portal crashed when serving parcel maps to hundreds of builders simultaneously.', solution: 'Replaced GIS middleware with a Go-based spatial tiling backend leveraging parallel coordinate calculations.', outcome: 'Map loading speed boosted by 10×, successfully rendering complex vector layers under intense concurrent traffic.' },
    },
    {
      id: 'wind-energy',
      icon: <Wind className="w-8 h-8 text-[#1a5c5a]" />,
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
      icon: <Terminal className="w-8 h-8 text-[#1a5c5a]" />,
      title: 'Enterprise Software Development',
      subtitle: 'Highly Concurrent APIs and Secure Web Dashboards',
      description: 'We build high-capacity backends and responsive React applications capable of executing intensive database operations under heavy load.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      features: ['High-performance FastAPI asynchronous backends', 'Vite + TypeScript React frontend interfaces', 'Secure JWT session management with HTTPS', 'Dockerised cloud deployment architectures'],
      benefits: ['Fast response times (sub-100ms API endpoints)', 'Zero-fluff clean user interfaces designed for operators', 'Scalable horizontal deployment in AWS/Vercel/Render', 'Type-safe frontends with strict error tracking'],
      technologies: ['FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
      caseStudy: { client: 'Infrastructure Logistics Group', challenge: 'Field personnel were unable to log asset records due to a slow, buggy legacy portal.', solution: 'Engineered a responsive, mobile-first dashboard powered by an async FastAPI database driver.', outcome: 'Field entry times dropped by 70%, with data syncing seamlessly even on high-latency mobile networks.' },
    },
  ];

  return (
    <>
      <SEO
        title="Our Enterprise Services"
        description="Explore our specialised services including AI research, Predictive ML, Data ETL, Geospatial GIS servers, Wind energy optimisation, and FastAPI corporate dashboards."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#1a2e2c] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#7ecfcd] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Services &amp; Capabilities</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
              Enterprise Technical<br />
              <span className="text-[#7ecfcd]">Competencies</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
              We focus on solving hard engineering challenges. Here is a breakdown of our technical services, including features, benefits, and real-world outcomes.
            </p>
          </div>
        </section>

        {/* ── NAV PILLS ── */}
        <div className="border-b border-[#c8c0aa] bg-white sticky top-20 z-30">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 overflow-x-auto">
            <div className="flex gap-0">
              {serviceList.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="whitespace-nowrap px-5 py-4 text-xs font-semibold text-[#555] hover:text-[#1a5c5a] hover:bg-[#f5f0e8] border-r border-[#c8c0aa] transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── SERVICE SECTIONS ── */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 space-y-0">
          {serviceList.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 border-b border-[#c8c0aa] py-20 grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Left: Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 border border-[#c8c0aa] bg-white">{service.icon}</div>
                  <div>
                    <h2 className="font-bold text-2xl sm:text-3xl text-[#1a2e2c]">{service.title}</h2>
                    <p className="text-[#1a5c5a] text-xs font-semibold mt-0.5">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-[#555] text-sm sm:text-base leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1a2e2c] mb-3">Capabilities</h4>
                    <ul className="space-y-2">
                      {service.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-xs text-[#555]">
                          <CheckCircle2 className="w-4 h-4 text-[#1a5c5a] flex-shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1a2e2c] mb-3">Business Impact</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((ben, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-xs text-[#555]">
                          <CheckCircle2 className="w-4 h-4 text-[#1a5c5a] flex-shrink-0 mt-0.5" />
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

              {/* Right: Case Study — Suzlon image card */}
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
                      { label: 'Challenge', text: service.caseStudy.challenge, color: 'text-[#1a2e2c]' },
                      { label: 'Solution', text: service.caseStudy.solution, color: 'text-[#1a2e2c]' },
                      { label: 'Outcome', text: service.caseStudy.outcome, color: 'text-[#1a5c5a]' },
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
        <section className="bg-[#1a2e2c] py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="font-bold text-4xl sm:text-5xl text-white mb-6">
              Ready to get started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?type=consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a5c5a] hover:bg-[#134644] text-white font-semibold text-sm transition-colors">
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
