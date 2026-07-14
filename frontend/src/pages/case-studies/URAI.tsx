import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SEO from "../../components/SEO";

const N = "#002E5D";
const DARK = "#0A1628";
const FROST = "#F0F4FA";
const BODY_DARK = "#8A9BB5";
const BODY_LIGHT = "#5a7a9f";

const PainCard = ({ title, body, tag }: { title: string; body: string; tag: string }) => (
  <div style={{ background: "#fff", borderLeft: `3px solid ${N}`, borderRadius: "0 8px 8px 0", padding: "1.1rem 1.3rem", border: "0.5px solid #E0DDD6" }}>
    <span style={{ fontSize: 10, fontWeight: 700, color: N, textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "2px 8px", borderRadius: 4, display: "inline-block", marginBottom: 8 }}>{tag}</span>
    <p style={{ fontSize: 15, fontWeight: 700, color: DARK, margin: "0 0 6px" }}>{title}</p>
    <p style={{ fontSize: 13, color: BODY_LIGHT, margin: 0, lineHeight: 1.65 }}>{body}</p>
  </div>
);

const PhaseCardDark = ({ num, title, body, duration }: { num: string; title: string; body: string; duration: string }) => (
  <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(240,244,250,0.12)", borderRadius: 10, padding: "2rem" }}>
    <p style={{ fontSize: 11, fontWeight: 700, color: BODY_DARK, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Phase {num}</p>
    <h3 style={{ fontSize: 18, fontWeight: 700, color: FROST, marginBottom: 12 }}>{title}</h3>
    <p style={{ fontSize: 14, color: BODY_DARK, lineHeight: 1.7, marginBottom: 16 }}>{body}</p>
    <span style={{ fontSize: 11, fontWeight: 600, color: FROST, background: "rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: 20, border: "0.5px solid rgba(255,255,255,0.15)" }}>{duration}</span>
  </div>
);

const FeatureItemLight = ({ text }: { text: string }) => (
  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Check size={15} color={N} strokeWidth={2.5} />
    </div>
    <p style={{ fontSize: 15, color: DARK, marginTop: 6, fontWeight: 500 }}>{text}</p>
  </div>
);

const RelatedCard = ({ label, name, desc, linkText, to }: { label: string; name: string; desc: string; linkText: string; to: string }) => (
  <div style={{ background: "#fff", border: "1px solid rgba(0,46,93,0.10)", borderRadius: 12, padding: "1.75rem" }}>
    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: N, background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "3px 10px", borderRadius: 4, display: "inline-block", marginBottom: 16 }}>{label}</p>
    <h3 style={{ fontSize: 19, fontWeight: 700, color: DARK, marginBottom: 8 }}>{name}</h3>
    <p style={{ fontSize: 14, color: BODY_LIGHT, marginBottom: 20, lineHeight: 1.6 }}>{desc}</p>
    <Link to={to} style={{ fontSize: 14, fontWeight: 600, color: N, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, borderBottom: "2px solid rgba(0,46,93,0.2)", paddingBottom: 2 }}>{linkText} <ArrowRight size={14} /></Link>
  </div>
);

const StatBlock = ({ number, label }: { number: string; label: string }) => (
  <div style={{ textAlign: "center", padding: "0 2rem" }}>
    <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 700, color: FROST, marginBottom: 8 }}>{number}</div>
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: BODY_DARK }}>{label}</div>
  </div>
);

const URAICaseStudy: React.FC = () => (
  <>
    <SEO title="URAI Case Study — Field Operations Transformed | SIRPI Technologies" description="How SIRPI deployed URAI to give field engineers real-time operational data via WhatsApp — replacing manual reporting workflows." />

    {/* 01 HERO — dark */}
    <section style={{ background: N, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
            {["AI · Field Operations", "URAI"].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, color: FROST, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.15)", padding: "4px 14px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
            From Manual Lookups to Instant Answers. Field Operations, Transformed.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 580, lineHeight: 1.75, marginBottom: 52 }}>
            How SIRPI deployed URAI to give field engineers real-time access to operational data via WhatsApp — replacing manual reporting workflows with natural language queries answered in seconds.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            {[{ n: "WhatsApp", l: "Deployment channel" }, { n: "Natural language", l: "How engineers query data" }, { n: "Real-time", l: "Data access for field teams" }].map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div style={{ width: 1, height: 48, background: "rgba(240,244,250,0.12)", margin: "0 0.5rem" }} />}
                <StatBlock number={s.n} label={s.l} />
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* 02 CHALLENGE — light */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 56 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE CHALLENGE</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Field teams disconnected from the data they needed to do their jobs.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8 }}>
            Field engineers were making critical operational decisions based on delayed, incomplete information. Getting answers meant calling back to base, waiting for someone to pull a report, or navigating dashboards they didn't have time to learn.
          </p>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8, marginTop: 16 }}>
            Every data lookup was a friction point. Every delay was a risk. Manual reporting workflows weren't scaling with the operational demands of the team.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard tag="Access" title="No real-time data access in the field" body="Critical information was locked behind desktop dashboards field engineers couldn't access on-site." />
          <PainCard tag="Efficiency" title="Manual reporting eating operational time" body="Phone calls, spreadsheet lookups, and delayed reports weren't a sustainable operations model." />
          <PainCard tag="Speed" title="Data that should take seconds taking hours" body="The gap between question and answer was too wide for fast-moving field operations." />
        </div>
      </div>
    </section>

    {/* 03 APPROACH — dark */}
    <section style={{ background: N, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>OUR APPROACH</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 580 }}>
          Understand the workflow. Deploy where the team already is.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCardDark num="01" title="Workflow Mapping" duration="Weeks 1–2" body="We identified the most common data questions field engineers were asking daily — and confirmed that URAI could answer all of them from existing data sources." />
          <PhaseCardDark num="02" title="Integration & Configuration" duration="Weeks 2–4" body="URAI was connected to the operational data environment and configured with domain-specific response logic. Accuracy tests ran against real operational scenarios before any deployment." />
          <PhaseCardDark num="03" title="WhatsApp Deployment" duration="Week 4+" body="URAI went live on WhatsApp — the channel the field team already used. No new apps. No training required. Engineers started querying operational data immediately." />
        </div>
      </div>
    </section>

    {/* 04 WHAT WE BUILT — light */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE SOLUTION</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
          URAI — Operational intelligence via natural language.
        </h2>
        <p style={{ fontSize: 16, color: BODY_LIGHT, lineHeight: 1.75, marginBottom: 44, maxWidth: 620 }}>
          URAI is an enterprise AI chatbot that connects field teams to critical operational data through natural language queries — deployed on the channels your team already uses. No dashboards. No SQL.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
          {[
            "Natural language queries on operational data",
            "WhatsApp and Telegram deployment",
            "Field staff management via conversational AI",
            "Infrastructure monitoring and status alerts",
            "Full audit trail for all interactions",
            "Enterprise portal integration option",
          ].map(f => <FeatureItemLight key={f} text={f} />)}
        </div>
      </div>
    </section>

    {/* 05 RESULTS — dark */}
    <section style={{ background: N, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>THE OUTCOME</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 48 }}>
          The numbers that matter.
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", marginBottom: 56 }}>
          {[{ n: "Instant", l: "Field data access via WhatsApp" }, { n: "Eliminated", l: "Manual lookup and reporting workflows" }, { n: "Real-time", l: "Operational awareness for all field teams" }].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={{ width: 1, height: 48, background: "rgba(240,244,250,0.12)", margin: "0 0.5rem" }} />}
              <StatBlock number={s.n} label={s.l} />
            </React.Fragment>
          ))}
        </div>
        <div style={{ borderLeft: "3px solid rgba(240,244,250,0.3)", background: "rgba(255,255,255,0.04)", borderRadius: "0 8px 8px 0", padding: "1.5rem 2rem", maxWidth: 720 }}>
          <p style={{ fontSize: 17, fontWeight: 600, color: FROST, lineHeight: 1.7, fontStyle: "italic", marginBottom: 18 }}>
            "Field engineers no longer have to call back to base for operational data. URAI answers their questions instantly on WhatsApp — and the audit trail means we have a complete record of every operational decision."
          </p>
          <p style={{ fontSize: 13, fontWeight: 700, color: BODY_DARK, marginBottom: 4 }}>Operations Manager, SIRPI Client</p>
          <p style={{ fontSize: 11, color: BODY_DARK, fontStyle: "italic", margin: 0 }}>* Attribution confirmed with client before publishing</p>
        </div>
      </div>
    </section>

    {/* 06 RELATED — light */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>EXPLORE FURTHER</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 36 }}>
          Products and services in this case study.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <RelatedCard label="PRODUCT" name="URAI" desc="Explore the full URAI platform capabilities" linkText="View product" to="/products/urai" />
          <RelatedCard label="SERVICE" name="AI & Machine Learning" desc="See how SIRPI builds AI-driven operational workflows" linkText="View service" to="/services/ai-ml" />
        </div>
      </div>
    </section>

    {/* 07 CTA — dark */}
    <section style={{ background: N, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>WORK WITH US</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Want your field team to have real-time data access?
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 40 }}>
          Tell us about your operation and we'll show you exactly how URAI handles it.
        </p>
        <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default URAICaseStudy;
