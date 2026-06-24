import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wind, Globe, Cpu, Heart, Factory, Building, Search } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Wind className="w-6 h-6 text-white" />,
      name: 'Wind Energy',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
      challenge: 'High wake interference and complex terrain geometry reduce annual energy output and cause unpredictability in grid integration.',
      solution: 'We apply microscale spatial resource modelling inside our WindVista analytics engine to compute optimal turbine coordinates.',
      outcome: '+4.2% AEP boost on mountainous terrains and 15% reduction in rotor load stress deviations.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      name: 'Telecom',
      img: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop',
      challenge: 'Manual planning of wireless network expansions is slow, prone to signal interference, and struggles to integrate census datasets.',
      solution: 'We build automated geospatial site planning tools utilising elevation vector meshes and local population density charts.',
      outcome: 'Outage routing simulations completed in minutes rather than days, with 98% coverage simulation accuracy.',
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      name: 'Healthcare',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      challenge: 'Medical image analysis datasets are massive and require manual annotations, adding backlogs to radiology diagnostics.',
      solution: 'We build secure local semantic classification pipelines that automatically detect anomalies and generate report summaries.',
      outcome: 'Radiologist diagnostic support latency reduced by 35%, ensuring high diagnostic throughput.',
    },
    {
      icon: <Factory className="w-6 h-6 text-white" />,
      name: 'Manufacturing',
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
      challenge: 'Sudden heavy equipment downtime in metal stamp assembly lines causes high losses in supply chain cycles.',
      solution: 'We execute time-series anomaly detection algorithms using high-frequency vibrational and temperature sensor records.',
      outcome: 'Alert notifications sent to repair technicians 14 hours in advance, decreasing assembly line downtime by 40%.',
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      name: 'Government',
      img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop',
      challenge: 'Dispersed regional GIS planning portals load slowly and crash under high concurrent map requests during planning cycles.',
      solution: 'We replace heavy GIS middleware layers with optimised vector tile engines using Go parallel coordinate calculators.',
      outcome: 'Map loading latency reduced from seconds to sub-50ms, with zero tile rendering gaps under peak traffic.',
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      name: 'Research',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      challenge: 'Scientific groups are overwhelmed by millions of PDF research pages, slowing data-mining of chemical and geological formulas.',
      solution: 'We build local, isolated semantic retrieval agents (URAI) that digest specialised paper archives and answer queries.',
      outcome: 'Literature review cycles automated, cutting research lookup durations from days to seconds.',
    },
  ];

  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Discover how SIRPI Technologies provides AI, GIS, and telemetry algorithms across wind energy, telecom, healthcare, manufacturing, government, and research."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#021124] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Target Sectors</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
              Industry Vertical<br />
              <span className="text-[#6eb4f7]">Impact</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mt-6 max-w-xl">
              We apply our custom ML engines, OGC servers, and forecasting models to address specialised problems for complex industries.
            </p>
          </div>
        </section>

        {/* ── INDUSTRY GRID — Suzlon full-bleed cards ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {industries.map((ind, i) => (
              <div key={i} className="group">
                {/* Suzlon-style image card */}
                <Card
                  img={ind.img}
                  title={ind.name}
                  description={ind.outcome}
                  icon={ind.icon}
                  height="h-80"
                  gradient="strong"
                  className="w-full"
                />

                {/* Detail panel beneath the card */}
                <div className="bg-white border-l-4 border-[#05325d]">
                  <div className="px-6 py-5 space-y-3 border-b border-[#eee]">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-red-500 tracking-widest mb-1">The Challenge</p>
                      <p className="text-[#555] text-sm leading-relaxed">{ind.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#05325d] tracking-widest mb-1">Our Solution</p>
                      <p className="text-[#555] text-sm leading-relaxed">{ind.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#021124] py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="font-bold text-4xl sm:text-5xl text-white mb-6">
              Is your industry listed?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-xl">
              If you don't see your sector above, we still have the data science and engineering toolkit to help you. Reach out and let's explore together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm transition-colors">
                Talk to an Engineer <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Industries;
