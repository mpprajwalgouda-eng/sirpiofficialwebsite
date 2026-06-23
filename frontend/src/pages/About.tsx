import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';

const About: React.FC = () => {
  const values = [
    {
      title: 'Trustworthy Systems',
      description: 'We engineer transparent, secure, and reproducible models and infrastructures that corporate stakeholders can trust implicitly.',
    },
    {
      title: 'Targeted Impact',
      description: 'We avoid speculative AI. Every model we design serves a clear economic utility or solves a physical engineering problem.',
    },
    {
      title: 'Scientific Rigour',
      description: 'Rooted in geospatial science and mathematical statistics, we build our pipelines on sound, verifiable principles.',
    },
  ];

  const timeline = [
    { year: '2021', title: 'Founding', desc: 'SIRPI Technologies established to bridge corporate software and advanced machine learning.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop' },
    { year: '2022', title: 'WindVista Launch', desc: 'Successfully deployed spatial analytics suites for wind energy farms in Singapore and India.', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop' },
    { year: '2023', title: 'Geospatial Expansion', desc: 'Developed high-capacity OGC-compliant servers handling millions of coordinates.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
    { year: '2024', title: 'URAI Generative AI', desc: 'Released secure on-premise document search chat systems for telecom and energy corporations.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
    { year: '2025', title: 'Global Reach', desc: 'Expanded service delivery to 10+ countries, automating complex decision analytics at scale.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop' },
  ];

  const achievements = [
    { label: '20+ Corporate Deployments', desc: 'Automated telemetry software modules active worldwide.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop' },
    { label: 'Wind Analytics Award', desc: 'Recognised for computational efficiency in resource prediction.', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop' },
    { label: 'Open Geospatial Compliance', desc: 'Full integration with international vector formats.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
  ];

  const certifications = [
    'ISO 27001 Information Security Certified',
    'OGC Compliant Server Standard Verification',
    'Open Source Geospatial Foundation Membership',
  ];

  return (
    <>
      <SEO
        title="Our Story, Mission & Leadership"
        description="Learn about the history, mission, vision, values, achievements and leadership team of SIRPI Technologies."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#1a2e2c] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#7ecfcd] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Who We Are</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
              Engineering the Future of<br />
              <span className="text-[#7ecfcd]">Decision Intelligence</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
              Founded by researchers and systems developers, SIRPI Technologies transforms satellite imagery, telemetry, and sensor readings into actionable predictive tools for enterprise organisations.
            </p>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-b border-[#c8c0aa]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#c8c0aa]">
            <div className="p-10 sm:p-14 border-r border-[#c8c0aa]">
              <p className="text-[#1a5c5a] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Mission</p>
              <h2 className="font-bold text-2xl sm:text-3xl text-[#1a2e2c] mb-4">To Bridge Science and Software</h2>
              <p className="text-[#555] text-sm leading-relaxed">
                Our mission is to construct enterprise software environments that make advanced artificial intelligence and geospatial modelling usable, secure, and highly automated. We aim to replace manual spreadsheets and complex workflows with responsive cloud-native dashboards.
              </p>
            </div>
            <div className="p-10 sm:p-14">
              <p className="text-[#1a5c5a] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Vision</p>
              <h2 className="font-bold text-2xl sm:text-3xl text-[#1a2e2c] mb-4">Trustworthy Automated Infrastructure</h2>
              <p className="text-[#555] text-sm leading-relaxed">
                We envision a future where telecommunication networks, green energy infrastructures, and city municipal systems adapt in real-time. By supplying high-frequency decision intelligence engines, SIRPI aims to sit at the core of global automated asset operations.
              </p>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-b border-[#c8c0aa]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-[#1a5c5a] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Our Foundation</p>
              <h2 className="font-bold text-4xl sm:text-5xl text-[#1a2e2c] leading-tight">
                Core<br />Operational<br />Values
              </h2>
            </div>
            <div className="lg:w-2/3 divide-y divide-[#c8c0aa] border-y border-[#c8c0aa]">
              {values.map((v, i) => (
                <div key={i} className="py-8 flex gap-6 items-start">
                  <span className="text-2xl font-bold text-[#c8c0aa] mt-1 w-8 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-xl text-[#1a2e2c] mb-2">{v.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE — Suzlon image cards ── */}
        <section className="py-24 bg-[#1a2e2c]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <p className="text-[#7ecfcd] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Evolution</p>
            <h2 className="font-bold text-4xl sm:text-5xl text-white mb-12">Corporate History</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
              {timeline.map((ev, i) => (
                <Card
                  key={i}
                  img={ev.img}
                  title={ev.title}
                  description={ev.desc}
                  tag={ev.year}
                  height="h-72"
                  gradient="strong"
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS — Suzlon image cards ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-b border-[#c8c0aa]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-[#1a5c5a] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Credentials</p>
              <h2 className="font-bold text-4xl sm:text-5xl text-[#1a2e2c] mb-6">Achievements & Standards</h2>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                We design our platforms to meet and exceed global corporate compliance protocols. Information security and standardised data interfaces are treated as core architecture features.
              </p>
              <ul className="space-y-3">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1a2e2c]">
                    <CheckCircle className="w-5 h-5 text-[#1a5c5a] flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Suzlon achievement image cards */}
            <div className="grid grid-cols-1 gap-1">
              {achievements.map((a, i) => (
                <Card
                  key={i}
                  img={a.img}
                  title={a.label}
                  description={a.desc}
                  icon={<Award className="w-5 h-5 text-white" />}
                  height="h-40"
                  gradient="strong"
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-bold text-4xl sm:text-5xl text-[#1a2e2c] mb-6">
            Ready to work with <span className="text-[#1a5c5a]">SIRPI?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a5c5a] hover:bg-[#134644] text-white font-semibold text-sm transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a5c5a] text-[#1a5c5a] font-semibold text-sm hover:bg-[#1a5c5a] hover:text-white transition-colors">
              Explore Services
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
