import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Brain, Database, Cpu, BarChart2,
  Target, Link2, ShieldCheck, Lightbulb,
  Wind, Radio, Landmark, Map, HeartPulse, Factory,
} from "lucide-react";
import SEO from "../components/SEO";

/* Two-color SIRPI palette */
const N = "#002E5D";   /* navy  */
/* ─── Frost / ink shorthands ─── */
const FROST = "#F0F4FA";
const INK = "#0A1628";

/* ─── Domain marquee data (rendered twice for seamless loop) ─── */
const DOMAINS = [
  {
    icon: <Wind size={22} />,
    bgImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=90",
    name: "Wind Energy",
    outcome: "TURBINE OPTIMISATION & SPATIAL ANALYSIS",
    desc: "AI-driven shear profiling, LTT analysis, and WindexGraph — purpose-built for large-scale wind farm operations.",
  },
  {
    icon: <Radio size={22} />,
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90",
    name: "Telecom",
    outcome: "COVERAGE MAPPING & OUTAGE PLANNING",
    desc: "Predictive network intelligence that turns signal data into proactive maintenance and planning decisions.",
  },
  {
    icon: <Landmark size={22} />,
    bgImage: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1200&q=90",
    name: "Government",
    outcome: "OGC GEOSPATIAL & DIGITAL PUBLIC INFRA",
    desc: "Standards-compliant GIS platforms and DPI systems built for the scrutiny of public sector procurement.",
  },
  {
    icon: <Map size={22} />,
    bgImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=90",
    name: "Geospatial",
    outcome: "STATIC MAPS INTO LIVING INTELLIGENCE",
    desc: "Spatial data pipelines and AI layers that turn raw geodata into real-time operational insights.",
  },
  {
    icon: <HeartPulse size={22} />,
    bgImage: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=90",
    name: "Healthcare",
    outcome: "MEDICAL IMAGE ANALYSIS & CLASSIFICATION",
    desc: "Deep learning models for diagnostic imaging, clinical data structuring, and patient workflow automation.",
  },
  {
    icon: <Factory size={22} />,
    bgImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=90",
    name: "Manufacturing",
    outcome: "COMPUTER VISION & PREDICTIVE MAINTENANCE",
    desc: "Real-time defect detection and machine health monitoring — reducing unplanned downtime on the shop floor.",
  },
];

/* Animated counter — easeOut cubic via rAF, respects prefers-reduced-motion */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Counter: React.FC<{ value: number; suffix?: string; label: string; source?: string }> = ({ value, suffix = "", label, source }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true;
          observer.unobserve(e.target);
          if (prefersReducedMotion()) { setCount(value); return; }
          const duration = 1800;
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(value);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="py-10 px-6">
      <div className="font-serif-display text-5xl sm:text-6xl font-bold tracking-tight" style={{ color: N }}>{count}{suffix}</div>
      <p className="text-sm font-semibold mt-2 max-w-[200px]" style={{ color: N }}>{label}</p>
      {source && <p className="text-xs mt-1 italic max-w-[210px]" style={{ color: "#5a7a9f" }}>{source}</p>}
    </div>
  );
};

/* ─── Product cards data ─── */
const PRODUCTS = [
  {
    tag: "Wind Analytics",
    name: "WindVista 2",
    sentence: "Centralises Shear, LTT, and WindexGraph analysis in one platform — cutting wind farm reporting time from days to hours.",
    href: "/products/windvista-2",
  },
  {
    tag: "AI Chatbot",
    name: "URAI",
    sentence: "Answers operational questions in natural language — connecting field teams to critical data without a single spreadsheet.",
    href: "/products/urai",
  },
  {
    tag: "AI Planning",
    name: "AOP Basic & PRO",
    sentence: "Simplifies annual operating plan management across Basic and PRO tiers — giving leadership a single dashboard to track AI and business planning in real time.",
    href: "/products/aop",
  },
];

/* ─── Why SIRPI differentiator data ─── */
const DIFFERENTIATORS = [
  {
    icon: <Target className="w-4 h-4" />,
    title: "Domain-specific AI, not generic tools",
    body: "Every product and solution is purpose-built for the engineering complexity of its industry — not adapted from a horizontal platform.",
  },
  {
    icon: <Link2 className="w-4 h-4" />,
    title: "Product + service model",
    body: "We don't just hand over software and leave. We build, deploy, and stay — so the solution keeps working as your environment evolves.",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "OGC-compliant and enterprise-ready",
    body: "Our geospatial and data systems meet international open standards — built for the scrutiny of government and large enterprise procurement.",
  },
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Founded by engineers, not marketers",
    body: "Our founding team holds 7 patents, including work at Apple. We know what it takes to build something that actually works in the field.",
  },
];

/* ─── Main Component ──────────────────────────────────────────── */
const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  /* ── Marquee Interactive State ── */
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isHovered = useRef(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || prefersReducedMotion()) return;

    let animationId: number;
    let lastTime = performance.now();
    let exactScrollLeft = marquee.scrollLeft;

    const autoScroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isDragging && !isHovered.current) {
        // scroll speed: approx 0.05px per ms (3px per frame)
        exactScrollLeft += (delta * 0.06);

        const halfWidth = marquee.scrollWidth / 2;
        if (exactScrollLeft >= halfWidth) {
          exactScrollLeft -= halfWidth;
        } else if (exactScrollLeft <= 0) {
          exactScrollLeft += halfWidth;
        }
        marquee.scrollLeft = exactScrollLeft;
      } else {
        exactScrollLeft = marquee.scrollLeft;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    setIsDragging(true);
    setStartX(e.pageX - marquee.offsetLeft);
    setScrollLeft(marquee.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    isHovered.current = false;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const marquee = marqueeRef.current;
    if (!isDragging || !marquee) return;
    e.preventDefault();
    const x = e.pageX - marquee.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier

    let newScrollLeft = scrollLeft - walk;

    const halfWidth = marquee.scrollWidth / 2;
    if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
      setStartX(e.pageX - marquee.offsetLeft);
      setScrollLeft(newScrollLeft);
    } else if (newScrollLeft <= 0) {
      newScrollLeft += halfWidth;
      setStartX(e.pageX - marquee.offsetLeft);
      setScrollLeft(newScrollLeft);
    }

    marquee.scrollLeft = newScrollLeft;
  };

  /* ── Shared fade-up IntersectionObserver ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="SIRPI | Products & Technologies"
        description="SIRPI delivers AI-powered products and custom solutions for wind energy, telecom, government, and geospatial environments."
        schema={{ "@context": "https://schema.org", "@type": "Organization", name: "SIRPI Technologies", url: "https://sirpi.io" }}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="hero-section" style={{ background: N }}>
        <motion.video ref={videoRef} autoPlay loop muted playsInline
          initial={{ scale: 1 }} animate={{ scale: 1.05 }} transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop">
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </motion.video>
        <div className="hero-overlay" />

        <div className="hero-content">


          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }}
            className="text-[40px] md:text-[48px] lg:text-[68px] mb-6"
            style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "#F0F4FA", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Engineering Intelligence.<br />
            Clear Decisions.
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}
            className="text-[17px] sm:text-[19px] leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
            Built for industries where data complexity isn't the exception — it's the entire problem.
            SIRPI delivers AI-powered products and custom solutions for the world's most demanding data environments.
          </motion.p>

          <div className="hero-ctas">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.36 }}>
              <Link to="/contact?type=demo"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-lg rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: N, color: FROST }}>
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.46 }}>
              <Link to="/products"
                className="inline-flex items-center gap-2 px-6 py-4 text-lg font-medium transition-all duration-300 hover:text-white"
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                See Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST BAR ═══════ */}
      <section style={{ background: FROST }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x" style={{ borderColor: "rgba(0,46,93,0.12)" }}>
            <Counter value={31} suffix="+" label="Projects delivered" source="Across 6 industry sectors" />
            <Counter value={10} suffix="+" label="Clients" source="India and international" />
            <Counter value={7} label="Patents" source="Founding team, including work at Apple, Cupertino" />
            <Counter value={3} label="Proprietary AI platforms live" source="WindVista · URAI · AOP" />
          </div>
        </div>
      </section>

      {/* ═══════ PROBLEM STATEMENT ═══════ */}
      <section className="py-24" style={{ background: N }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col">
              <div>
                <p className="font-mono-label text-xs tracking-[0.18em] uppercase mb-4" style={{ color: FROST }}>The Real Problem</p>
                <h2 className="fade-up font-serif-display font-bold leading-tight mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#ffffff" }}>
                  Your asset data is fragmented. Your team is reactive. Every unplanned breakdown costs more than it should.
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.62)" }}>
                  In wind energy, telecom, and infrastructure — the data exists. The sensors are running. The logs are filling up.
                  But without the intelligence layer to connect, interpret, and act on that data in real time, your engineers
                  are still making decisions the slow way.
                </p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.62)" }}>
                  Downtime that could have been predicted. Reports that take days. ROI left on the table.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:opacity-80" style={{ color: FROST, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  See how SIRPI solves this <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col h-full gap-4">
              {[
                { tag: "Wind Energy", title: "Fragmented data across systems", body: "Shear, LTT, and WindexGraph live in separate tools. Every report requires manual consolidation — adding hours and introducing error." },
                { tag: "Telecom &middot; Infrastructure", title: "Reactive maintenance cycles", body: "Without predictive intelligence, outages are discovered after they happen. Every reactive repair costs 3–5× more than a planned intervention." },
                { tag: "Government &middot; Geospatial", title: "Geospatial data locked in silos", body: "OGC-compliant data hosting remains the exception. Planning teams spend weeks on data-wrangling before any analysis begins." },
              ].map((c, i) => (
                <div key={i}
                  className="fade-up rounded-r-xl p-5 flex-1 flex flex-col justify-center" style={{ borderLeft: `3px solid ${FROST}`, background: "rgba(255,255,255,0.05)" }}>
                  <span className="font-mono-label text-[11px] uppercase tracking-widest font-bold block mb-2" style={{ color: FROST }}
                    dangerouslySetInnerHTML={{ __html: c.tag }} />
                  <h3 className="font-semibold text-base sm:text-lg mb-2" style={{ color: "#ffffff" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCTS IN ACTION — compact 3-card strip ═══════ */}
      <section className="py-20" style={{ background: FROST }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="mb-10">
            <p className="font-mono-label text-xs tracking-[0.18em] uppercase mb-3" style={{ color: INK }}>Products in Action</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <h2 className="fade-up font-serif-display font-bold leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: N }}>
                Built for the complexity of your domain.
              </h2>
              <Link to="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold flex-shrink-0"
                style={{ color: N, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Explore the full product portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 3-card strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="fade-up rounded-xl p-6 border flex flex-col gap-4"
                style={{ background: "#ffffff", borderColor: "rgba(0,46,93,0.1)" }}>
                {/* Tag pill */}
                <span className="font-mono-label text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full self-start"
                  style={{ color: INK, background: "#E8E5DF" }}>
                  {p.tag}
                </span>
                {/* Name */}
                <h3 className="font-serif-display font-bold text-base leading-snug" style={{ color: N }}>
                  {p.name}
                </h3>
                {/* Outcome sentence */}
                <p className="text-sm leading-relaxed flex-1 text-justify" style={{ color: "#5a7a9f" }}>
                  {p.sentence}
                </p>
                {/* Text link */}
                <Link to={p.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto"
                  style={{ color: N, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INDUSTRIES MARQUEE ═══════ */}
      <section className="overflow-hidden"
        style={{ padding: "3.5rem 0", background: N }}>
        {/* Section header */}
        <div className="text-center px-6" style={{ marginBottom: "36px" }}>
          <p className="font-mono-label uppercase"
            style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "0.15em", color: FROST, marginBottom: "14px" }}>
            Industries We Serve
          </p>
          <h2 className="font-serif-display"
            style={{ fontSize: "36px", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "12px" }}>
            Deep expertise. Every domain.
          </h2>
          <p style={{ fontSize: "15px", color: "#C8D4E3", lineHeight: 1.7, maxWidth: "540px", margin: "0 auto 10px" }}>
            From wind farms to government infrastructure — SIRPI delivers across the domains that matter most.
          </p>
        </div>

        {/* Marquee */}
        <div className="marquee-wrapper">
          <div className="marquee-outer"
            ref={marqueeRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => (isHovered.current = true)}
            onTouchStart={() => (isHovered.current = true)}
            onTouchEnd={() => (isHovered.current = false)}>
            <div className="marquee-track">
              {/* Card set 1 */}
              {DOMAINS.map((d, i) => (
                <React.Fragment key={`a-${i}`}>
                  <div className="domain-card">
                    <div className="card-bg" style={{ backgroundImage: `url('${d.bgImage}')` }}></div>
                    <div className="card-overlay"></div>
                    <div className="card-content">
                      <div className="card-text-wrapper">
                        <p className="card-name">{d.name}</p>
                        <p className="card-outcome">{d.outcome}</p>
                        <p className="card-desc">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              {/* Card set 2 — duplicate for seamless loop */}
              {DOMAINS.map((d, i) => (
                <React.Fragment key={`b-${i}`}>
                  <div className="domain-card">
                    <div className="card-bg" style={{ backgroundImage: `url('${d.bgImage}')` }}></div>
                    <div className="card-overlay"></div>
                    <div className="card-content">
                      <div className="card-text-wrapper">
                        <p className="card-name">{d.name}</p>
                        <p className="card-outcome">{d.outcome}</p>
                        <p className="card-desc">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOW WE WORK ═══════ */}
      <section className="py-24" style={{ background: FROST }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-mono-label text-xs tracking-[0.18em] uppercase mb-3" style={{ color: INK }}>Engagement Model</p>
            <h2 className="fade-up font-serif-display font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: N }}>How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", step: "Understand", icon: <Database className="w-6 h-6" />, body: "We start with your data environment — not a generic framework. One conversation to map your problem, your stack, and your decision-making bottlenecks." },
              { num: "02", step: "Build", icon: <Cpu className="w-6 h-6" />, body: "Our engineers develop a purpose-built solution: product integration, custom model, or geospatial pipeline. No off-the-shelf retrofitting." },
              { num: "03", step: "Deploy", icon: <BarChart2 className="w-6 h-6" />, body: "We deliver to your environment — on-premise, cloud, or hybrid — with documentation, audit trails, and a handover your team can actually use." },
            ].map((s, i) => (
              <div key={i}
                className="fade-up rounded-xl p-8 border flex flex-col h-full" style={{ background: "#ffffff", borderColor: "rgba(0,46,93,0.1)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,46,93,0.1)", color: N }}>
                    {s.icon}
                  </div>
                  <span className="font-mono-label text-xs font-bold" style={{ color: "rgba(0,46,93,0.35)" }}>{s.num}</span>
                </div>
                <h3 className="font-serif-display font-bold text-xl mb-3" style={{ color: N }}>{s.step}</h3>
                <p className="text-sm leading-relaxed text-justify flex-1" style={{ color: "#5a7a9f" }}>{s.body}</p>
                {i < 2 && (
                  <div className="mt-6 flex justify-end">
                    <ArrowRight className="w-4 h-4" style={{ color: INK, opacity: 0.4 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY SIRPI ═══════ */}
      <section className="py-24" style={{ background: N }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="font-mono-label text-xs tracking-[0.18em] uppercase mb-3" style={{ color: FROST }}>Why SIRPI</p>
            <h2 className="fade-up font-serif-display font-bold leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#ffffff" }}>
              Built different. On purpose.
            </h2>
            <p className="text-sm max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
              We're not a generic software vendor. Here's what that means for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} className="fade-up rounded-lg p-6 border flex flex-col h-full"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                {/* Icon in navy-tinted square */}
                <div className="w-8 h-8 rounded-md flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.1)", color: FROST }}>
                  {d.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2 leading-snug md:min-h-[40px]" style={{ color: "#ffffff" }}>{d.title}</h3>
                <p className="text-xs leading-relaxed text-justify flex-1" style={{ color: "rgba(255,255,255,0.7)" }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ACADEMY SPOTLIGHT ═══════ */}
      <section className="py-10 border-y" style={{ background: FROST, borderColor: "rgba(0,46,93,0.1)" }}>
        <div className="fade-up max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: N }}>
              <Brain className="w-5 h-5" style={{ color: FROST }} />
            </div>
            <div>
              <p className="font-mono-label text-[10px] uppercase tracking-widest mb-0.5" style={{ color: N }}>SIRPI Academy</p>
              <p className="font-semibold text-sm" style={{ color: N }}>Training the next generation of AI engineers.</p>
            </div>
          </div>
          <Link to="/about#academy"
            className="inline-flex items-center gap-1.5 text-sm font-medium flex-shrink-0 transition-all"
            style={{ color: N, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Partner with the Academy <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-28" style={{ background: N }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-20">
            <p className="font-mono-label text-xs tracking-[0.18em] uppercase mb-4" style={{ color: FROST }}>Ready to Start</p>
            <h2 className="fade-up font-serif-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#ffffff" }}>
              Your problem is our<br />
              <span style={{ color: "#ffffff", fontWeight: 700 }}>next solution.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.62)" }}>
              Speak directly with our engineering leaders. We specialise in tailoring AI, geospatial, and wind energy solutions for enterprise and government organisations.
            </p>
            <Link to="/contact?type=demo"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm rounded-md transition-all"
              style={{ background: FROST, color: N }}>
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border-t pt-12" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <h3 className="font-serif-display font-bold text-2xl mb-2" style={{ color: "#ffffff" }}>Get Enterprise AI &amp; Geospatial Insights</h3>
            <p className="text-sm mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
              Receive exclusive engineering whitepapers and wind energy analytics updates directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter work email" required
                className="flex-1 px-5 py-3 text-sm rounded-md outline-none"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff" }} />
              <button type="submit"
                className="px-6 py-3 font-semibold text-sm rounded-md border transition-all"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff", background: "transparent" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
