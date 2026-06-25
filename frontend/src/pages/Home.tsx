import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Cpu, Brain, Database, Globe, Wind, Terminal,
  CheckCircle, Volume2, VolumeX,
  MapPin, BarChart2, Layers
} from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';

/* ─────────────────────────────────────────────────────────────
   Animated counter (Suzlon-style: large teal numbers)
───────────────────────────────────────────────────────────── */
const Counter: React.FC<{ value: number; suffix?: string; label: string }> = ({ value, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(value / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="py-10 px-6 border-b border-[#c8c0aa]">
      <div className="text-5xl sm:text-6xl font-bold text-[#05325d] tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-[#555] text-sm mt-3 leading-snug max-w-[180px]">{label}</p>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────────── */
const Home: React.FC = () => {
  const [muted, setMuted] = useState(true);

  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setActiveWorkflow(p => (p + 1) % 4), 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const services = [
    {
      icon: <Wind className="w-8 h-8 text-[#05325d]" />,
      title: 'Wind Energy Analytics',
      description: 'Advanced wind resource assessment, turbine efficiency prediction, and spatial site optimisation tools built for the renewable energy sector.',
      slug: 'wind-energy',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Globe className="w-8 h-8 text-[#05325d]" />,
      title: 'Geospatial Engineering',
      description: 'Satellite imagery processing, GIS data structures, mapping APIs, and custom OGC-compliant map servers.',
      slug: 'geospatial-engineering',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#05325d]" />,
      title: 'Artificial Intelligence',
      description: 'Custom NLP engines, computer vision algorithms, and generative AI systems engineered to scale in enterprise environments.',
      slug: 'artificial-intelligence',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Brain className="w-8 h-8 text-[#05325d]" />,
      title: 'Machine Learning',
      description: 'Supervised and unsupervised predictive models for demand forecasting, classification, and complex operational optimisation.',
      slug: 'machine-learning',
      img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Database className="w-8 h-8 text-[#05325d]" />,
      title: 'Data Science',
      description: 'Enterprise analytics, data transformation pipelines, and visual dashboards for real-time business insight and decision support.',
      slug: 'data-science',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Terminal className="w-8 h-8 text-[#05325d]" />,
      title: 'Enterprise Software',
      description: 'Secure, cloud-native full-stack applications built with FastAPI, React, and microservices for large-scale industrial deployments.',
      slug: 'enterprise-development',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const products = [
    {
      name: 'WindVista 2',
      slug: 'windvista-2',
      tag: 'Wind Analytics',
      desc: 'Enhanced wind energy asset management platform centralising Shear, LTT, and WindexGraph for faster analysis and reporting.',
      featured: true,
    },
    { name: 'WindVista 1', slug: 'windvista-1', tag: 'Wind Analytics', desc: 'Key platform for managing all wind energy assets and data. Covers site assessment, energy prediction, and operational management.' },
    { name: 'Batch Uploader', slug: 'batch-uploader', tag: 'Data Pipelines', desc: 'Tool for bulk data uploading and processing to support wind energy and geospatial data pipelines.' },
    { name: 'WindBug', slug: 'windbug', tag: 'Wind Operations', desc: 'Bug tracking and QA tool specific to wind energy software projects, supporting operational management.' },
    { name: 'Decomm', slug: 'decomm', tag: 'Asset Management', desc: 'Decommissioning management tool for tracking and managing wind farm or industrial asset decommissioning.' },
  ];

  const industries = [
    { name: 'Wind Energy', desc: 'Turbine optimisation & spatial analysis', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop' },
    { name: 'Telecom', desc: 'Network coverage mapping & outage planning', img: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop' },
    { name: 'Manufacturing', desc: 'Computer vision quality & predictive maintenance', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop' },
    { name: 'Healthcare', desc: 'Medical image analysis & data classification', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
    { name: 'Government', desc: 'Urban planning, GIS infrastructure & mapping', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop' },
    { name: 'Research', desc: 'Deep learning & academic data science', img: 'https://images.unsplash.com/photo-1532094349884-543559c5f185?q=80&w=800&auto=format&fit=crop' },
  ];

  const workflowSteps = [
    { title: 'Data Sources', desc: 'Ingesting raw inputs from satellites, IoT sensor grids, databases, and operational logs.' },
    { title: 'AI Processing', desc: 'Applying deep learning models, classification pipelines, and geospatial transformation algorithms.' },
    { title: 'Analytics', desc: 'Generating high-performance vector tiles, metric forecasts, and real-time anomaly triggers.' },
    { title: 'Decision Intelligence', desc: 'Presenting actionable insights to stakeholders via secure, auditable enterprise portals.' },
  ];



  return (
    <>
      <SEO
        title="Transforming Data into Decisive Action"
        description="SIRPI Technologies delivers enterprise-grade AI, data science, geospatial engineering, wind energy analytics, and custom software systems."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SIRPI Technologies',
          url: 'https://sirpi.io',
          description: 'Leading provider of AI, machine learning, and geospatial solutions.',
        }}
      />

      {/* ═══════════════════════════════════════════════════════
          HERO — Full-screen video, no text overlay (Suzlon style)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen overflow-hidden bg-[#0a1628]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Very light overlay so video breathes */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg max-w-5xl"
          >
            Your Data. Our Intelligence.<br className="hidden sm:block" /> Clear Decisions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl drop-shadow-md"
          >
            AI powered web applications, mobile applications, chatbots, and intelligent automation solutions.
          </motion.p>
        </div>

        {/* Mute toggle — Suzlon style: circle bottom-right */}
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute hero video' : 'Mute hero video'}
          className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full border border-white/50 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

      </section>

      {/* ═══════════════════════════════════════════════════════
          REST OF PAGE — cream/off-white background
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-[#f5f0e8] relative z-10">

        {/* ────────────────────────────────────────────────────
            OUR OFFERINGS — image cards (Suzlon "Our Offerings")
        ──────────────────────────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 pb-16">

          {/* Section header */}
          <div className="mb-12">
            <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              What We Do
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="font-bold text-5xl sm:text-6xl text-[#021124] leading-tight max-w-xl">
                Our Offerings
              </h2>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#05325d] font-semibold text-sm tracking-wide hover:gap-3 transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Block 1: cards 0–4 in exact Suzlon layout
              Col 1: Card 0 (tall) stacked above Card 3 (short)
              Col 2: Card 1 (short) stacked above Card 4 (short)
              Col 3: Card 2 (TALL — spans both rows)
          */}
          <div className="offerings-grid">
            {/* Card 0 — COL 1 ROW 1 (tall-ish) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="offerings-c0"
            >
              <Link to={`/services#${services[0].slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl h-[290px] cursor-pointer">
                  <img src={services[0].img} alt={services[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-2xl text-white leading-snug tracking-tight mb-2">{services[0].title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{services[0].description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 1 — COL 2 ROW 1 (short) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
              className="offerings-c1"
            >
              <Link to={`/services#${services[1].slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl h-[290px] cursor-pointer">
                  <img src={services[1].img} alt={services[1].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-bold text-xl text-white leading-snug mb-1">{services[1].title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{services[1].description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 — COL 3, SPANS BOTH ROWS (the tall card on the right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
              className="offerings-c2 h-full"
            >
              <Link to={`/services#${services[2].slug}`} className="block h-full group">
                <div className="relative overflow-hidden rounded-2xl h-full cursor-pointer min-h-[290px] lg:min-h-[594px]">
                  <img src={services[2].img} alt={services[2].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-2xl text-white leading-snug tracking-tight mb-2">{services[2].title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{services[2].description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 — COL 1 ROW 2 (short, stacked below Card 0) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 }}
              className="offerings-c3"
            >
              <Link to={`/services#${services[3].slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl h-[290px] cursor-pointer">
                  <img src={services[3].img} alt={services[3].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-bold text-xl text-white leading-snug mb-1">{services[3].title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{services[3].description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 4 — COL 2 ROW 2 (short, stacked below Card 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.32 }}
              className="offerings-c4"
            >
              <Link to={`/services#${services[4].slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl h-[290px] cursor-pointer">
                  <img src={services[4].img} alt={services[4].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-bold text-xl text-white leading-snug mb-1">{services[4].title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{services[4].description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>


          {/* Card 5 — Full-width bottom card */}
          <motion.div
            className="mt-2"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to={`/services#${services[5].slug}`} className="block group">
              <div className="relative overflow-hidden rounded-2xl h-52 cursor-pointer">
                <img src={services[5].img} alt={services[5].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-bold text-2xl text-white leading-snug mb-1">{services[5].title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-xl">{services[5].description}</p>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-semibold text-[#6eb4f7] ml-4">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

        </section>


        {/* ────────────────────────────────────────────────────
            STATS — Giant teal numbers (Suzlon trust metrics)
        ──────────────────────────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 border-t border-[#c8c0aa]">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#c8c0aa]">
            <Counter value={20} suffix="+" label="Projects delivered across wind energy, AI, and geospatial domains" />
            <Counter value={10} suffix="+" label="Clients served across energy, government, and enterprise sectors" />
            <Counter value={5} suffix="+" label="Industry sectors covered with domain-specific AI solutions" />
            <Counter value={7} label="Patents held by our founding technical leadership" />
          </div>

          {/* CTA row below stats */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm tracking-wide transition-colors"
            >
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#05325d] text-[#05325d] font-semibold text-sm tracking-wide hover:bg-[#05325d] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* ────────────────────────────────────────────────────
            PRODUCTS — WindVista showcase
        ──────────────────────────────────────────────────── */}
        <section className="bg-[#021124] py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
              <div>
                <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Product Portfolio</p>
                <h2 className="font-bold text-4xl sm:text-5xl text-white leading-tight">
                  Proprietary Technologies<br />&amp; Platforms
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[#6eb4f7] font-semibold text-sm tracking-wide hover:gap-3 transition-all"
              >
                All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Featured WindVista 2 */}
            <div className="mb-6">
              {products.filter(p => p.featured).map((p, i) => (
                <div
                  key={i}
                  className="group relative border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row justify-between gap-8 hover:border-[#6eb4f7]/40 transition-colors"
                >
                  <div className="space-y-4 md:w-2/3">
                    <div className="flex gap-3 items-center">
                      <span className="text-[10px] uppercase font-bold text-[#6eb4f7] tracking-widest border border-[#6eb4f7]/30 px-3 py-1">{p.tag}</span>
                      <span className="text-[10px] uppercase font-bold text-[#f5c842] tracking-widest border border-[#f5c842]/30 px-3 py-1">Latest Version</span>
                    </div>
                    <h3 className="font-bold text-4xl sm:text-5xl text-white">{p.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{p.desc}</p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      to={`/products/${p.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm transition-colors"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary products — Suzlon image cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              {products.filter(p => !p.featured).map((p, i) => {
                const imgs = [
                  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
                ];
                return (
                  <Card
                    key={i}
                    img={imgs[i % imgs.length]}
                    title={p.name}
                    description={p.desc}
                    tag={p.tag}
                    link={`/products/${p.slug}`}
                    height="h-64"
                    gradient="strong"
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────────
            INDUSTRIES — Suzlon image card grid
        ──────────────────────────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-[#c8c0aa]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Vertical Solutions</p>
              <h2 className="font-bold text-4xl sm:text-5xl text-[#021124] leading-tight">
                Deep Domain<br />Expertise
              </h2>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-[#05325d] font-semibold text-sm tracking-wide hover:gap-3 transition-all"
            >
              See All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Suzlon image cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Card
                  img={ind.img}
                  title={ind.name}
                  description={ind.desc}
                  link="/industries"
                  height="h-52"
                  gradient="strong"
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ────────────────────────────────────────────────────
            AI PIPELINE — workflow steps
        ──────────────────────────────────────────────────── */}
        <section className="bg-[#eee8da] py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Operational Pipeline</p>
                <h2 className="font-bold text-4xl sm:text-5xl text-[#021124] leading-tight mb-8">
                  AI Innovation &amp;<br />Analytical Pipeline
                </h2>
                <p className="text-[#555] text-sm leading-relaxed mb-10">
                  Our scalable core processes handle data end-to-end, converting raw imagery and metrics into dynamic business predictions.
                </p>
                <div className="space-y-0 divide-y divide-[#c8c0aa] border-y border-[#c8c0aa]">
                  {workflowSteps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveWorkflow(idx)}
                      className={`w-full text-left py-5 flex items-center justify-between group transition-colors ${activeWorkflow === idx ? 'bg-transparent' : 'hover:bg-[#f5f0e8]'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`w-8 h-8 flex items-center justify-center text-xs font-bold transition-colors ${activeWorkflow === idx
                            ? 'bg-[#05325d] text-white'
                            : 'border border-[#c8c0aa] text-[#777]'
                            }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className={`font-semibold text-base ${activeWorkflow === idx ? 'text-[#05325d]' : 'text-[#021124]'}`}>
                          {step.title}
                        </span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all ${activeWorkflow === idx ? 'text-[#05325d] translate-x-1' : 'text-[#c8c0aa]'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right visualization */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflow}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-10 flex flex-col justify-center items-center text-center min-h-[380px] border border-[#c8c0aa]"
                >
                  <div className="w-20 h-20 bg-[#f5f0e8] border border-[#c8c0aa] flex items-center justify-center mb-8">
                    {activeWorkflow === 0 && <Database className="w-10 h-10 text-[#05325d]" />}
                    {activeWorkflow === 1 && <Cpu className="w-10 h-10 text-[#05325d]" />}
                    {activeWorkflow === 2 && <BarChart2 className="w-10 h-10 text-[#05325d]" />}
                    {activeWorkflow === 3 && <CheckCircle className="w-10 h-10 text-[#05325d]" />}
                  </div>
                  <h4 className="font-bold text-2xl text-[#021124] mb-4">{workflowSteps[activeWorkflow].title}</h4>
                  <p className="text-[#555] text-sm leading-relaxed max-w-xs">{workflowSteps[activeWorkflow].desc}</p>

                  {/* Step dots */}
                  <div className="flex gap-2 mt-10">
                    {workflowSteps.map((_, d) => (
                      <span
                        key={d}
                        className={`h-1 rounded-full transition-all duration-300 ${activeWorkflow === d ? 'w-8 bg-[#05325d]' : 'w-2 bg-[#c8c0aa]'}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────────
            LEADERSHIP — Founder section
        ──────────────────────────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-[#c8c0aa]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#c8c0aa]">
            {/* Image */}
            <div className="relative bg-[#021124] flex items-center justify-center p-12 min-h-[400px]">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#6eb4f7]/30">
                <img src="/founder.jpeg" alt="Dr. Anand Lakshmanan" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="p-10 sm:p-14 flex flex-col justify-center bg-white">
              <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Leadership</p>
              <h2 className="font-bold text-3xl sm:text-4xl text-[#021124] mb-2">Dr. Anand Lakshmanan</h2>
              <p className="text-[#05325d] text-sm font-semibold tracking-wide mb-6">Founder &amp; CEO</p>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                Dr. Anand Lakshmanan has 27 years of experience in academia and industry, having designed experiments and analysed data across various domains. Most recently, he worked at Apple in Cupertino, California as an Antenna Design Engineer for 6 years, and holds 7 patents. He founded SIRPI on the belief that all professionals need to be data-savvy to make informed decisions.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-[#e0d8cc] pt-6">
                <div>
                  <p className="text-xs text-[#777] uppercase tracking-wider mb-1">Focus</p>
                  <p className="text-sm font-semibold text-[#021124]">AI Algorithms &amp; Geospatial Engineering</p>
                </div>
                <div>
                  <p className="text-xs text-[#777] uppercase tracking-wider mb-1">Mission</p>
                  <p className="text-sm font-semibold text-[#021124]">Trustworthy Decision Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ────────────────────────────────────────────────────
            FINAL CTA — dark navy (matches Product Portfolio)
        ──────────────────────────────────────────────────── */}
        <section className="bg-[#021124] py-28">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Get Started</p>
              <h2 className="font-bold text-5xl sm:text-6xl text-white leading-tight mb-6">
                Ready to Transform<br />Your Data Into<br />
                <span className="text-[#6eb4f7]">Decisions?</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg">
                Speak directly with our engineering leaders. We specialise in tailoring custom AI, geospatial, and wind energy solutions for enterprise organisations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact?type=consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm tracking-wide transition-colors"
                >
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
