import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Mail, Phone, Building, User, Send, Check } from 'lucide-react';
import SEO from '../components/SEO';
import GlassCard from '../components/GlassCard';
import { API_BASE_URL } from '../config';

interface ProductDetail {
  name: string;
  category: string;
  tagline: string;
  overview: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  mockupWidget: React.ReactNode;
}

const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // Demo Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Product Database
  const productsDb: Record<string, ProductDetail> = {
    "windvista-2": {
      name: "WindVista 2",
      category: "Energy Analytics",
      tagline: "WindVista 2",
      overview: "Enhanced wind energy asset management platform centralizing Shear, LTT, and WindexGraph with improved automation, advanced filters and streamlined navigation for faster wind data analysis and reporting.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "windvista-1": {
      name: "WindVista 1",
      category: "Energy Analytics",
      tagline: "WindVista 1",
      overview: "Key platform for managing all wind energy assets and data in one place. Covers site assessment, energy prediction, and operational management of wind farms.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "batch-uploader": {
      name: "Batch Uploader",
      category: "Energy Analytics",
      tagline: "Batch Uploader",
      overview: "Tool for bulk data uploading and processing to support wind energy and geospatial data pipelines.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "coordinate-plotter": {
      name: "Coordinate Plotter",
      category: "Data Management",
      tagline: "Coordinate Plotter",
      overview: "Geospatial mapping tool for plotting and visualizing coordinate data, supporting real-time mapping and spatial analysis.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "windbug": {
      name: "WindBug",
      category: "Energy Analytics",
      tagline: "WindBug",
      overview: "Bug tracking / QA tool specific to wind energy software projects, supporting operational management of wind farms.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "alerp": {
      name: "ALERP",
      category: "Energy Analytics",
      tagline: "ALERP",
      overview: "ERP software that streamlines fabrication and industrial work for aluminum window manufacturers. Part of Manufacturing, ERP & Operations domain.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "mdm": {
      name: "MDM",
      category: "Data Management",
      tagline: "MDM",
      overview: "Master Data Management platform for centralizing and managing organizational data across systems.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "slice-arrow": {
      name: "Slice Arrow",
      category: "Artificial Intelligence",
      tagline: "Slice Arrow",
      overview: "DevOps & AI Deployments platform — launch products faster with automated deployments, CI/CD pipelines, GPU infrastructure, and end-to-end AI model management. 50+ applications deployed, 99% uptime guarantee.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "canvas": {
      name: "Canvas",
      category: "Data Management",
      tagline: "Canvas",
      overview: "General & Vertical Platform covering specialized needs including data visualization, finance, research, and complex data analysis.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "tgdex-discussion": {
      name: "TGDex Discussion",
      category: "Education",
      tagline: "TGDex Discussion",
      overview: "Discussion Forum platform — dedicated space to foster a supportive learning and problem-solving community. Part of Education & Community Platforms domain.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "tgdex-competition": {
      name: "TGDex Competition",
      category: "Education",
      tagline: "TGDex Competition",
      overview: "Competition module under the TGDex education platform supporting online learning and engaging educational content. Part of Education & Community Platforms domain.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "ndvi-data-stories": {
      name: "NDVI Data Stories",
      category: "Data Management",
      tagline: "NDVI Data Stories",
      overview: "Data Stories application using data visualization and narrative techniques, focused on NDVI (Normalized Difference Vegetation Index) for crop and plant health monitoring across India.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "bangalore-data-stories": {
      name: "Bangalore Data Stories",
      category: "Data Management",
      tagline: "Bangalore Data Stories",
      overview: "Data Stories Application for the Bangalore region using data visualization and narrative techniques to drive understanding and decisions in urban planning or environmental analysis.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "decomm": {
      name: "Decomm",
      category: "Energy Analytics",
      tagline: "Decomm",
      overview: "Decommissioning management tool for tracking and managing wind farm or industrial asset decommissioning operations.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "odisha-health-cdpg": {
      name: "Odisha Health CDPG",
      category: "Data Management",
      tagline: "Odisha Health CDPG",
      overview: "Health data platform for Odisha region. CDPG (Community Data Platform for Governance) — data-driven health decision-making for public sector.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "aop-basic-and-pro": {
      name: "AOP Basic and PRO",
      category: "Artificial Intelligence",
      tagline: "AOP Basic and PRO",
      overview: "Annual Operating Plan tool in Basic and PRO tiers. AI Infrastructure & LLM tooling to simplify management and tracking of AI/business planning environments.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "sumo": {
      name: "SUMO++",
      category: "Software Platform",
      tagline: "SUMO++",
      overview: "SUMO++ is an enhanced version of the open-source SUMO application, built by leveraging the existing codebase and extending it with new features, improved functionality, and a modernized user interface. The project focuses on delivering a more intuitive and efficient user experience while maintaining the strengths of the original platform. SUMO++ is currently in the development stage, with ongoing enhancements and feature additions.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "sirpis-attendance": {
      name: "Sirpi's Attendance",
      category: "Data Management",
      tagline: "Sirpi's Attendance",
      overview: "Internal attendance and field staff tracking system for SIRPI. Supports managing field staff with smart data tools.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "codetocognition": {
      name: "CodeToCognition",
      category: "Energy Analytics",
      tagline: "CodeToCognition",
      overview: "AI Upskilling Academy platform. Offers practical AI/ML training for students and corporate teams, connecting academia with real-world applications in Wind Energy, Telecom, and Geospatial Engineering.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "cbr": {
      name: "CBR",
      category: "Data Management",
      tagline: "CBR",
      overview: "Case-Based Reasoning research platform under SIRPI's General & Vertical domain for complex data analysis and research workflows.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "cbr-data-curation": {
      name: "CBR – Data Curation",
      category: "Data Management",
      tagline: "CBR – Data Curation",
      overview: "Data curation sub-project under the CBR initiative. Focuses on cleaning, organizing, and managing datasets for case-based reasoning and research applications.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "cbr-ai-challenge": {
      name: "CBR AI Challenge",
      category: "Artificial Intelligence",
      tagline: "CBR AI Challenge",
      overview: "AI challenge component of the CBR project, likely an internal or client-facing competition/benchmark to evaluate AI model performance on CBR datasets.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "windex-graph-v2": {
      name: "Windex Graph V2",
      category: "Energy Analytics",
      tagline: "Windex Graph V2",
      overview: "Version 2 of the WindexGraph tool — part of the WindVista wind energy platform. Used for graphical analysis and visualization of wind index data for energy prediction.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "project-eagle": {
      name: "Project Eagle",
      category: "Data Management",
      tagline: "Project Eagle",
      overview: "Internal or client project under SIRPI's General & Vertical Platforms domain. Covers specialized data analysis needs.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "locomo": {
      name: "Locomo",
      category: "Software Platform",
      tagline: "Locomo",
      overview: "Platform under SIRPI's General & Vertical domain. May relate to logistics, location-based monitoring, or movement tracking applications.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "dpi-factory": {
      name: "DPI Factory",
      category: "Data Management",
      tagline: "DPI Factory",
      overview: "DPI (Data & Platform Infrastructure) Factory — likely an internal tooling or infrastructure platform for building and managing data pipelines and digital public infrastructure.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "insta-post": {
      name: "Insta Post",
      category: "Software Platform",
      tagline: "Insta Post",
      overview: "Instagram post scheduling and management tool (InstaPost Scheduler). Enables scheduling, automating, and managing social media posts on Instagram.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "morpheus": {
      name: "Morpheus",
      category: "Data Management",
      tagline: "Morpheus",
      overview: "Platform under SIRPI's General & Vertical Platforms domain. Likely an AI/ML model deployment or data transformation tool.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "neuberg": {
      name: "Neuberg",
      category: "Data Management",
      tagline: "Neuberg",
      overview: "Project under SIRPI's domain — possibly a diagnostic or health data analytics platform. Neuberg is a diagnostics brand, suggesting a health-sector engagement.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "braid": {
      name: "BRAID",
      category: "Artificial Intelligence",
      tagline: "BRAID",
      overview: "BRAID platform under SIRPI's AI Infrastructure & LLM Tools domain. Likely a multi-agent or retrieval-augmented AI backbone for complex data workflows.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    },
    "ai-tutor": {
      name: "AI Tutor",
      category: "Education",
      tagline: "AI Tutor",
      overview: "AI-powered tutoring platform under Education & Community Platforms domain. Connected to Sirpi's Code2Cognition academy — delivers personalized AI/ML learning experiences for students.",
      features: [],
      benefits: [],
      technologies: [],
      mockupWidget: null
    }
  };

  const product = slug ? productsDb[slug] : null;

  // Handle Invalid slug
  if (!product) {
    return (
      <div className="min-h-screen pt-36 pb-20 text-center flex flex-col items-center justify-center space-y-6">
        <SEO title="Product Not Found" description="The requested product does not exist." />
        <h1 className="font-display font-bold text-3xl text-sirpi-text">Product Not Found</h1>
        <p className="text-sirpi-muted max-w-sm">The product page you are seeking is either renamed or does not exist.</p>
        <Link to="/products" className="px-5 py-2.5 bg-sirpi-primary text-sirpi-text font-semibold rounded-xl text-sm">
          Return to Products
        </Link>
      </div>
    );
  }

  // Handle Demo Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not Specified',
          phone: formData.phone || 'Not Specified',
          message: `PRODUCT DEMO REQUEST: ${product.name}\n\nClient Notes: ${formData.message || 'Requested a product demo session.'}`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request. Please try again.');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (err: any) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <SEO
        title={`${product.name} - ${product.category}`}
        description={`${product.name} overview, features, benefits, tech stack and demo requests form.`}
      />

      <div className="relative min-h-screen pt-28 pb-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[15%] left-[-15%] w-[450px] h-[450px] bg-sirpi-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-sirpi-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Back button */}
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-xs text-sirpi-muted hover:text-sirpi-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Products</span>
          </Link>

          {/* Hero Header Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-sirpi-secondary text-xs uppercase font-bold tracking-widest bg-sirpi-secondary/10 px-3 py-1 rounded-full border border-sirpi-secondary/20">
                {product.category}
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-sirpi-text">
                {product.name}
              </h1>
              <p className="text-sirpi-muted text-sm sm:text-base leading-relaxed">
                {product.overview}
              </p>
              
              {/* Tech Stack */}
              {product.technologies && product.technologies.length > 0 && (
                <div className="pt-4 space-y-2">
                  <h4 className="text-[10px] uppercase font-bold text-sirpi-text tracking-widest">Underlying Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-lg bg-sirpi-surface border border-sirpi-muted/20 text-sirpi-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Simulated UI Mockup */}
            {product.mockupWidget && (
              <div className="lg:col-span-5 h-[320px] lg:h-[360px]">
                <div className="w-full h-full p-[1px] bg-gradient-to-tr from-sirpi-primary/50 to-sirpi-secondary/20 rounded-2xl">
                  {product.mockupWidget}
                </div>
              </div>
            )}
          </section>

          {/* Features & Benefits Grid */}
          {(product.features?.length > 0 || product.benefits?.length > 0) && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-sirpi-muted/20">
              {product.features?.length > 0 && (
                <GlassCard hoverEffect={false} className="p-8 space-y-6">
                  <h3 className="font-display font-bold text-xl text-sirpi-text">Technical Features</h3>
                  <ul className="space-y-4">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-sirpi-muted">
                        <CheckCircle2 className="w-5 h-5 text-sirpi-secondary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              )}

              {product.benefits?.length > 0 && (
                <GlassCard hoverEffect={false} className="p-8 space-y-6">
                  <h3 className="font-display font-bold text-xl text-sirpi-text">Business Value & Benefits</h3>
                  <ul className="space-y-4">
                    {product.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-sirpi-muted">
                        <CheckCircle2 className="w-5 h-5 text-sirpi-accent flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              )}
            </section>
          )}

          {/* Demo Request Form */}
          <section className="max-w-3xl mx-auto pt-10">
            <GlassCard hoverEffect={false} className="p-8 sm:p-12 space-y-8 border-sirpi-muted/20 ">
              <div className="text-center space-y-2">
                <h3 className="font-display font-bold text-2xl text-sirpi-text">Request a Live Demonstration</h3>
                <p className="text-sirpi-muted text-xs sm:text-sm">
                  Let our engineering team demonstrate {product.name} live using sample logs from your sector.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-sirpi-muted tracking-wider">Your Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sirpi-muted" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-sirpi-surface border border-sirpi-muted/20 rounded-xl py-3 pl-10 pr-4 text-sm text-sirpi-text focus:outline-none focus:border-sirpi-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-sirpi-muted tracking-wider">Work Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sirpi-muted" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-sirpi-surface border border-sirpi-muted/20 rounded-xl py-3 pl-10 pr-4 text-sm text-sirpi-text focus:outline-none focus:border-sirpi-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-sirpi-muted tracking-wider">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sirpi-muted" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-sirpi-surface border border-sirpi-muted/20 rounded-xl py-3 pl-10 pr-4 text-sm text-sirpi-text focus:outline-none focus:border-sirpi-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-sirpi-muted tracking-wider">Contact Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sirpi-muted" />
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full bg-sirpi-surface border border-sirpi-muted/20 rounded-xl py-3 pl-10 pr-4 text-sm text-sirpi-text focus:outline-none focus:border-sirpi-primary"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-[10px] uppercase font-bold text-sirpi-muted tracking-wider">Demo Focus & Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe specific analytics objectives or deployment scale..."
                    className="w-full bg-sirpi-surface border border-sirpi-muted/20 rounded-xl p-4 text-sm text-sirpi-text focus:outline-none focus:border-sirpi-primary"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-3.5 bg-sirpi-primary hover:bg-sirpi-accent text-sirpi-text font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                  >
                    {formStatus === 'loading' ? (
                      'Scheduling Demo...'
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Demo Requested Successfully!</span>
                    ) : (
                      <span className="flex items-center gap-1.5"><Send className="w-4 h-4" /> Request Demo Schedule</span>
                    )}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-rose-400 text-xs text-center mt-3">Failed to send request. Please review network connections and try again.</p>
                  )}
                </div>
              </form>
            </GlassCard>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
