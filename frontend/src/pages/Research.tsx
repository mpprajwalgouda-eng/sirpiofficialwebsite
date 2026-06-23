import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Award, Terminal, Eye, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';

const Research: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);

  const focusAreas = [
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: 'Spatial Analytics',
      desc: 'Developing parallel algorithms to map spatial boundary coordinates, LiDAR altitude profiles, and high-resolution satellite changes.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: 'Secure ML Ops',
      desc: 'Refining model quantisation and isolated vector store lookups (RAG) that execute safely inside virtual private networks.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: 'Physics-Guided ML',
      desc: 'Integrating physics formulas (wind drag, elevation friction, fluid dynamics) directly into neural network loss parameters.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const publications = [
    {
      title: 'Microscale Wake Simulation in Rough Terrains Using Deep Autoencoders',
      journal: 'International Journal of Wind Energy Analytics',
      year: '2024',
      abstract: 'This paper describes an autoencoder model that runs on digital elevation models to estimate wind wake losses. By feeding local wind vector fields into a deep spatial network, we demonstrate that wake interference can be predicted with 94% accuracy in sub-second inference intervals compared to conventional computational fluid dynamics solver models.',
    },
    {
      title: 'Asynchronous Spatial Vector Tiling Under Intense Concurrent Mapping Queries',
      journal: 'IEEE Geospatial and Remote Sensing Letters',
      year: '2023',
      abstract: 'We outline an async architecture that processes massive spatial PostgreSQL queries in parallel. By designing an asynchronous Go coordinate transformation layer, mapping tile rendering speeds are reduced to under 30ms, eliminating map freezing on frontend map client platforms.',
    },
    {
      title: 'On-Premises Domain Adaptation of Small Language Models in Highly Secure Corporate Clusters',
      journal: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
      year: '2025',
      abstract: 'We analyse methodologies for tuning 7-billion parameter language models on proprietary corporate wikis. The study provides metrics showing that private quantisation and semantic index mapping yield answers of comparable accuracy to public API platforms while securing absolute data boundaries.',
    },
  ];

  const patents = [
    {
      id: 'US-11928374-B2',
      title: 'Geospatial Coordinate Vector Tiling Optimisation Engine',
      status: 'Granted (2024)',
      desc: 'An algorithm for parallel coordinate conversion and raster caching in high-frequency map tiling databases.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'IN-2025/09283',
      title: 'Predictive Anomaly Autoencoders for Vibration Telemetry',
      status: 'Published / Pending',
      desc: 'A neural network design that identifies machine misalignment by comparing high-frequency accelerometer logs.',
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <>
      <SEO
        title="Research & Scientific Publications"
        description="Review our scientific papers, patents, AI experiments, and GIS innovation lab developments at SIRPI Technologies."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#1a2e2c] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#7ecfcd] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Scientific Discovery</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
              Research &<br />
              <span className="text-[#7ecfcd]">Innovation Labs</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mt-6 max-w-xl">
              We treat software engineering as an exact science. Our research engineers publish papers and file patents to advance GIS, wind power modelling, and secure corporate AI.
            </p>
          </div>
        </section>

        {/* ── FOCUS AREAS — Suzlon image cards ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 border-b border-[#c8c0aa]">
          <p className="text-[#1a5c5a] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Research Focus</p>
          <h2 className="font-bold text-4xl sm:text-5xl text-[#1a2e2c] mb-12">Areas of Investigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {focusAreas.map((area, i) => (
              <Card
                key={i}
                img={area.img}
                title={area.title}
                description={area.desc}
                icon={area.icon}
                height="h-80"
                gradient="strong"
                className="w-full"
              />
            ))}
          </div>
        </section>

        {/* ── PUBLICATIONS ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 border-b border-[#c8c0aa]">
          <p className="text-[#1a5c5a] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Academic Output</p>
          <h2 className="font-bold text-4xl sm:text-5xl text-[#1a2e2c] mb-12">Publications</h2>

          <div className="border border-[#c8c0aa] divide-y divide-[#c8c0aa]">
            {publications.map((pub, i) => (
              <div key={i} className="bg-white hover:bg-[#f5f0e8] transition-colors">
                <div className="p-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#1a2e2c] mb-1">{pub.title}</h3>
                    <p className="text-[#1a5c5a] text-xs font-semibold mb-4">{pub.journal}</p>
                    <button
                      onClick={() => setSelectedPaper(selectedPaper === i ? null : i)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#555] hover:text-[#1a5c5a] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedPaper === i ? 'Hide Abstract' : 'Read Abstract'}
                    </button>
                    {selectedPaper === i && (
                      <div className="mt-4 p-4 bg-[#f5f0e8] border border-[#c8c0aa] text-xs text-[#555] leading-relaxed">
                        {pub.abstract}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#1a5c5a] tracking-widest border border-[#1a5c5a]/30 px-3 py-1 h-fit">{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PATENTS — Suzlon image cards ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 border-b border-[#c8c0aa]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#1a5c5a] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Intellectual Property</p>
              <h2 className="font-bold text-4xl sm:text-5xl text-[#1a2e2c] mb-6">Proprietary Patents & Algorithms</h2>
              <p className="text-[#555] text-sm leading-relaxed">
                Our core models and database handlers are legally registered as protected intellectual property. This protects our corporate clients from copyright issues and verifies that our systems are unique, novel, and engineered in-house.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {patents.map((pat, i) => (
                <div key={i} className="relative group">
                  <Card
                    img={pat.img}
                    title={pat.title}
                    description={pat.desc}
                    icon={<Award className="w-5 h-5 text-white" />}
                    tag={pat.status}
                    height="h-52"
                    gradient="strong"
                    className="w-full"
                  />
                  {/* Patent ID badge */}
                  <div className="absolute top-5 right-5 z-20">
                    <span className="font-mono text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-1">
                      {pat.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-bold text-4xl sm:text-5xl text-[#1a2e2c] mb-6">
            Interested in collaborating on <span className="text-[#1a5c5a]">research?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a5c5a] hover:bg-[#134644] text-white font-semibold text-sm transition-colors">
              Contact Research Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a5c5a] text-[#1a5c5a] font-semibold text-sm hover:bg-[#1a5c5a] hover:text-white transition-colors">
              Join as a Researcher
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default Research;
