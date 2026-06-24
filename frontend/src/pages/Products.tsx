import React, { useState } from 'react';
import SEO from '../components/SEO';
import Card from '../components/Card';

const categoryImages: Record<string, string> = {
  'Energy Analytics': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
  'Data Management': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  'Artificial Intelligence': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
  'Education': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  'Software Platform': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
};

interface ProductItem {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const productList: ProductItem[] = [
    { slug: 'windvista-2', name: 'WindVista 2', category: 'Energy Analytics', shortDesc: 'Enhanced wind energy asset management platform centralising Shear, LTT, and WindexGraph for faster wind data analysis and reporting.' },
    { slug: 'windvista-1', name: 'WindVista 1', category: 'Energy Analytics', shortDesc: 'Key platform for managing all wind energy assets and data. Covers site assessment, energy prediction, and operational management of wind farms.' },
    { slug: 'batch-uploader', name: 'Batch Uploader', category: 'Energy Analytics', shortDesc: 'Tool for bulk data uploading and processing to support wind energy and geospatial data pipelines.' },
    { slug: 'coordinate-plotter', name: 'Coordinate Plotter', category: 'Data Management', shortDesc: 'Geospatial mapping tool for plotting and visualising coordinate data, supporting real-time mapping and spatial analysis.' },
    { slug: 'windbug', name: 'WindBug', category: 'Energy Analytics', shortDesc: 'Bug tracking and QA tool specific to wind energy software projects, supporting operational management of wind farms.' },
    { slug: 'alerp', name: 'ALERP', category: 'Energy Analytics', shortDesc: 'ERP software that streamlines fabrication and industrial work for aluminium window manufacturers.' },
    { slug: 'mdm', name: 'MDM', category: 'Data Management', shortDesc: 'Master Data Management platform for centralising and managing organisational data across systems.' },
    { slug: 'slice-arrow', name: 'Slice Arrow', category: 'Artificial Intelligence', shortDesc: 'DevOps & AI Deployments platform — launch products faster with automated deployments, CI/CD pipelines, GPU infrastructure, and end-to-end AI model management.' },
    { slug: 'canvas', name: 'Canvas', category: 'Data Management', shortDesc: 'General & Vertical Platform covering specialised needs including data visualisation, finance, research, and complex data analysis.' },
    { slug: 'tgdex-discussion', name: 'TGDex Discussion', category: 'Education', shortDesc: 'Discussion Forum platform — dedicated space to foster a supportive learning and problem-solving community.' },
    { slug: 'tgdex-competition', name: 'TGDex Competition', category: 'Education', shortDesc: 'Competition module under the TGDex education platform supporting online learning and engaging educational content.' },
    { slug: 'ndvi-data-stories', name: 'NDVI Data Stories', category: 'Data Management', shortDesc: 'Data Stories application using data visualisation focused on NDVI for crop and plant health monitoring across India.' },
    { slug: 'bangalore-data-stories', name: 'Bangalore Data Stories', category: 'Data Management', shortDesc: 'Data Stories Application for the Bangalore region using narrative techniques for urban planning and environmental analysis.' },
    { slug: 'decomm', name: 'Decomm', category: 'Energy Analytics', shortDesc: 'Decommissioning management tool for tracking and managing wind farm or industrial asset decommissioning operations.' },
    { slug: 'odisha-health-cdpg', name: 'Odisha Health CDPG', category: 'Data Management', shortDesc: 'Health data platform for Odisha region — data-driven health decision-making for public sector.' },
    { slug: 'aop-basic-and-pro', name: 'AOP Basic & PRO', category: 'Artificial Intelligence', shortDesc: 'Annual Operating Plan tool in Basic and PRO tiers to simplify management and tracking of AI/business planning environments.' },
    { slug: 'sumo', name: 'SUMO++', category: 'Software Platform', shortDesc: 'Enhanced version of the open-source SUMO application, extended with new features and a modernised user interface.' },
    { slug: 'sirpis-attendance', name: "Sirpi's Attendance", category: 'Data Management', shortDesc: 'Internal attendance and field staff tracking system for SIRPI, supporting smart data management tools.' },
    { slug: 'codetocognition', name: 'CodeToCognition', category: 'Education', shortDesc: 'AI Upskilling Academy platform offering practical AI/ML training for students and corporate teams.' },
    { slug: 'cbr', name: 'CBR', category: 'Data Management', shortDesc: 'Case-Based Reasoning research platform for complex data analysis and research workflows.' },
    { slug: 'cbr-data-curation', name: 'CBR – Data Curation', category: 'Data Management', shortDesc: 'Data curation sub-project under the CBR initiative, focusing on cleaning and managing datasets.' },
    { slug: 'cbr-ai-challenge', name: 'CBR AI Challenge', category: 'Artificial Intelligence', shortDesc: 'AI challenge component of the CBR project to evaluate AI model performance on CBR datasets.' },
    { slug: 'windex-graph-v2', name: 'Windex Graph V2', category: 'Energy Analytics', shortDesc: 'Version 2 of the WindexGraph tool for graphical analysis and visualisation of wind index data.' },
    { slug: 'project-eagle', name: 'Project Eagle', category: 'Data Management', shortDesc: "Specialised data analysis project under SIRPI's General & Vertical Platforms domain." },
    { slug: 'locomo', name: 'Locomo', category: 'Software Platform', shortDesc: 'Platform relating to logistics, location-based monitoring, or movement tracking applications.' },
    { slug: 'dpi-factory', name: 'DPI Factory', category: 'Data Management', shortDesc: 'Data & Platform Infrastructure Factory for building and managing data pipelines and digital public infrastructure.' },
    { slug: 'insta-post', name: 'Insta Post', category: 'Software Platform', shortDesc: 'Instagram post scheduling and management tool enabling automation and management of social media posts.' },
    { slug: 'morpheus', name: 'Morpheus', category: 'Data Management', shortDesc: "AI/ML model deployment or data transformation tool under SIRPI's General & Vertical Platforms domain." },
    { slug: 'neuberg', name: 'Neuberg', category: 'Data Management', shortDesc: 'Diagnostic or health data analytics platform in the healthcare sector.' },
    { slug: 'braid', name: 'BRAID', category: 'Artificial Intelligence', shortDesc: "Multi-agent or retrieval-augmented AI backbone for complex data workflows under SIRPI's AI Infrastructure domain." },
    { slug: 'ai-tutor', name: 'AI Tutor', category: 'Education', shortDesc: 'AI-powered tutoring platform delivering personalised AI/ML learning experiences for students.' },
  ];

  const categories = ['All', ...Array.from(new Set(productList.map(p => p.category)))];
  const filtered = activeCategory === 'All' ? productList : productList.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Proprietary Products Portfolio"
        description="Discover our specialised software products: WindVista, URAI Chatbot, AI Upskilling Academy, OGC Map Server, and more."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#021124] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Product Matrix</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
              Proprietary<br />
              <span className="text-[#6eb4f7]">Solutions</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mt-6 max-w-xl">
              We compile our scientific findings and software routines into highly optimised, deployment-ready enterprise platforms.
            </p>
            <div className="mt-4 text-slate-400 text-sm font-semibold">{productList.length} Products</div>
          </div>
        </section>

        {/* ── CATEGORY FILTER ── */}
        <div className="border-b border-[#c8c0aa] bg-white sticky top-20 z-30">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 overflow-x-auto">
            <div className="flex gap-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-4 text-xs font-semibold border-r border-[#c8c0aa] transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#05325d] text-white'
                      : 'text-[#555] hover:text-[#05325d] hover:bg-[#f5f0e8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── PRODUCT GRID — Suzlon image cards ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {filtered.map((product, i) => (
              <Card
                key={i}
                img={categoryImages[product.category] || categoryImages['Software Platform']}
                title={product.name}
                description={product.shortDesc}
                tag={product.category}
                link={`/products/${product.slug}`}
                height="h-72"
                gradient="strong"
              />
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Products;
