import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../../components/SEO";

const N = "#002E5D";
const DARK = "#0A1628";
const FROST = "#F0F4FA";
const CREAM = "#F5F3EE";
const BODY_DARK = "#8A9BB5";
const BODY_LIGHT = "#4A5568";



const DarkBtn = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
    {children} <ArrowRight size={16} />
  </Link>
);

const PainCard = ({ title, body, tag }: { title: string; body: string; tag: string }) => (
  <div style={{ background: "#fff", borderLeft: `3px solid ${N}`, borderRadius: "0 8px 8px 0", padding: "1.1rem 1.3rem", border: "0.5px solid #E2E8F0" }}>
    <span style={{ fontSize: 10, fontWeight: 700, color: N, textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "2px 8px", borderRadius: 4, display: "inline-block", marginBottom: 8 }}>{tag}</span>
    <p style={{ fontSize: 15, fontWeight: 700, color: DARK, margin: "0 0 6px" }}>{title}</p>
    <p style={{ fontSize: 13, color: BODY_LIGHT, margin: 0, lineHeight: 1.6 }}>{body}</p>
  </div>
);

const FeatureCard = ({ title, body }: { title: string; body: string }) => (
  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(240,244,250,0.08)", border: "0.5px solid rgba(240,244,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
      <CheckCircle2 size={16} color={FROST} />
    </div>
    <div>
      <p style={{ fontSize: 15, fontWeight: 700, color: FROST, margin: "0 0 4px" }}>{title}</p>
      <p style={{ fontSize: 13, color: BODY_DARK, margin: 0, lineHeight: 1.65 }}>{body}</p>
    </div>
  </div>
);

const PhaseCard = ({ num, title, body, duration }: { num: string; title: string; body: string; duration: string }) => (
  <div style={{ background: "#fff", border: "1px solid rgba(0,46,93,0.1)", borderRadius: 10, padding: "2rem" }}>
    <p style={{ fontSize: 11, fontWeight: 700, color: N, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Phase {num}</p>
    <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 12 }}>{title}</h3>
    <p style={{ fontSize: 14, color: BODY_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>{body}</p>
    <span style={{ fontSize: 11, fontWeight: 600, color: N, background: "rgba(0,46,93,0.06)", padding: "4px 10px", borderRadius: 20, border: "0.5px solid rgba(0,46,93,0.15)" }}>{duration}</span>
  </div>
);

const AudienceCard = ({ title, body }: { title: string; body: string }) => (
  <div style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "2rem" }}>
    <h3 style={{ fontSize: 17, fontWeight: 700, color: FROST, marginBottom: 12 }}>{title}</h3>
    <p style={{ fontSize: 14, color: BODY_DARK, lineHeight: 1.7, margin: 0 }}>{body}</p>
  </div>
);

const Code2CognitionPage: React.FC = () => (
  <>
    <SEO
      title="CodeToCognition — AI Upskilling Platform | SIRPI Technologies"
      description="CodeToCognition is SIRPI's AI upskilling platform for universities, enterprise teams, and individuals — built around real-world applications."
    />

    {/* 01 HERO */}
    <section style={{ background: DARK, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>AI UPSKILLING PLATFORM</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 700, marginBottom: 20 }}>
            From Code to Real-World AI. Practically.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
            CodeToCognition is SIRPI's AI upskilling platform for universities, enterprise teams, and individuals — built around real-world applications in Wind Energy, Telecom, and Geospatial Engineering.
          </p>
          <DarkBtn to="/contact">Partner with Us</DarkBtn>
        </motion.div>
      </div>
    </section>

    {/* 02 PROBLEM */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 56 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE PROBLEM</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Most AI training teaches theory. Your team needs skills they can use tomorrow.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8, textAlign: "justify" }}>
            Generic AI courses cover algorithms and theory but stop short of domain application. Your engineering team or graduates finish a course knowing Python — but not how to apply it to wind data, geospatial systems, or enterprise AI pipelines. CodeToCognition closes that gap.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard title="Generic courses with no domain context" body="Theory without application doesn't translate to operational capability." tag="Relevance" />
          <PainCard title="Graduates who can't hit the ground running" body="Academic AI training rarely covers the tools and data environments used in industry." tag="Readiness" />
          <PainCard title="No pathway from training to real projects" body="Learning without live project work doesn't build confidence or capability." tag="Application" />
        </div>
      </div>
    </section>

    {/* 03 KEY FEATURES */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>PLATFORM CAPABILITIES</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 480 }}>
          What CodeToCognition delivers.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 32 }}>
          <FeatureCard title="Domain-Specific Curriculum" body="AI/ML training built around Wind Energy, Telecom, and Geospatial Engineering — not generic datasets." />
          <FeatureCard title="Hands-On Project Work" body="Learners work on real problems using SIRPI's own platforms — WindVista, URAI, and data pipelines." />
          <FeatureCard title="Python, R & Production ML" body="Practical training in the tools actually used in SIRPI's production AI systems." />
          <FeatureCard title="University Partnership Program" body="Curriculum integration, faculty support, and placement-ready graduate programs." />
          <FeatureCard title="Enterprise Team Bootcamps" body="Structured AI upskilling programs designed around your team's domain and data environment." />
          <FeatureCard title="Certification & Progress Tracking" body="Structured certification pathways with progress tracking for institutions and enterprise teams." />
        </div>
      </div>
    </section>

    {/* 04 HOW IT WORKS */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          Three stages to operational AI capability.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCard num="01" title="Assess" body="We assess your team or cohort's current level and define the right curriculum depth and domain focus." duration="Week 1" />
          <PhaseCard num="02" title="Train" body="Structured sessions combining theory, code exercises, and live project work on domain-specific datasets." duration="Weeks 2–8" />
          <PhaseCard num="03" title="Apply" body="Graduates work on real problems. University partners receive curriculum materials and ongoing faculty support." duration="Ongoing" />
        </div>
      </div>
    </section>

    {/* 05 WHO IT'S FOR */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          Built for those ready to apply AI.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <AudienceCard title="Universities & Engineering Colleges" body="Integrate industry-relevant AI curriculum into your programs — with SIRPI's support for faculty and placement-ready graduate outcomes." />
          <AudienceCard title="Enterprise Teams" body="Upskill your workforce with domain-specific AI bootcamps built around your actual operational environment." />
          <AudienceCard title="Individual Learners" body="Structured programs connecting academic AI knowledge to immediate industry application and employability." />
        </div>
      </div>
    </section>

    {/* 06 PROOF POINT */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ borderLeft: `3px solid ${N}`, paddingLeft: "1.5rem" }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: DARK, lineHeight: 1.6, marginBottom: 16 }}>
            "CodeToCognition connects academic AI knowledge to real industry application — training the next generation of AI engineers on the tools and data environments used in wind energy, telecom, and geospatial operations."
          </p>
          <span style={{ fontSize: 11, fontWeight: 700, color: N, background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "4px 10px", borderRadius: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>Education · AI Upskilling</span>
        </div>
      </div>
    </section>

    {/* 07 FINAL CTA */}
    <section style={{ background: DARK, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Train your team on AI that matters.
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 36 }}>
          Tell us about your team, your domain, and your timeline. We'll propose the right program.
        </p>
        <DarkBtn to="/contact">Partner with Us</DarkBtn>
      </div>
    </section>
  </>
);

export default Code2CognitionPage;
