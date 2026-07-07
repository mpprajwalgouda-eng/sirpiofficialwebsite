import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../../components/SEO";

const N = "#002E5D";
const DARK = "#0A1628";
const FROST = "#F0F4FA";
const CREAM = "#F0F4FA";
const BODY_DARK = "#8A9BB5";
const BODY_LIGHT = "#4A5568";

/* ── Shared sub-components ── */


const DarkBtn = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "14px 28px", background: "#112035", color: FROST,
      border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6,
      fontWeight: 600, fontSize: 14, textDecoration: "none",
      transition: "all 0.2s",
    }}
  >
    {children} <ArrowRight size={16} />
  </Link>
);

const LightBtn = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "14px 28px", background: DARK, color: FROST,
      borderRadius: 6, fontWeight: 600, fontSize: 14,
      textDecoration: "none", transition: "all 0.2s",
    }}
  >
    {children} <ArrowRight size={16} />
  </Link>
);

const PainCard = ({ title, body, tag }: { title: string; body: string; tag: string }) => (
  <div style={{
    background: "#fff", borderLeft: `3px solid ${N}`,
    borderRadius: "0 8px 8px 0", padding: "1.1rem 1.3rem",
    border: "0.5px solid #E2E8F0",
  }}>
    <span style={{
      fontSize: 10, fontWeight: 700, color: N, textTransform: "uppercase",
      letterSpacing: "0.08em", background: "rgba(0,46,93,0.06)",
      border: "0.5px solid rgba(0,46,93,0.12)", padding: "2px 8px",
      borderRadius: 4, display: "inline-block", marginBottom: 8,
    }}>{tag}</span>
    <p style={{ fontSize: 15, fontWeight: 700, color: DARK, margin: "0 0 6px" }}>{title}</p>
    <p style={{ fontSize: 13, color: BODY_LIGHT, margin: 0, lineHeight: 1.6 }}>{body}</p>
  </div>
);

const FeatureCard = ({ title, body }: { title: string; body: string }) => (
  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
    <div style={{
      width: 32, height: 32, borderRadius: "50%",
      background: "rgba(240,244,250,0.08)", border: "0.5px solid rgba(240,244,250,0.15)",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2,
    }}>
      <CheckCircle2 size={16} color={FROST} />
    </div>
    <div>
      <p style={{ fontSize: 15, fontWeight: 700, color: FROST, margin: "0 0 4px" }}>{title}</p>
      <p style={{ fontSize: 13, color: BODY_DARK, margin: 0, lineHeight: 1.65 }}>{body}</p>
    </div>
  </div>
);

const PhaseCard = ({ num, title, body, duration }: { num: string; title: string; body: string; duration: string }) => (
  <div style={{
    background: "#fff", border: "1px solid rgba(0,46,93,0.1)",
    borderRadius: 10, padding: "2rem",
  }}>
    <p style={{
      fontSize: 11, fontWeight: 700, color: N, letterSpacing: "0.1em",
      textTransform: "uppercase", marginBottom: 8,
    }}>Phase {num}</p>
    <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 12 }}>{title}</h3>
    <p style={{ fontSize: 14, color: BODY_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>{body}</p>
    <span style={{
      fontSize: 11, fontWeight: 600, color: N,
      background: "rgba(0,46,93,0.06)", padding: "4px 10px",
      borderRadius: 20, border: "0.5px solid rgba(0,46,93,0.15)",
    }}>{duration}</span>
  </div>
);

const AudienceCard = ({ title, body }: { title: string; body: string }) => (
  <div style={{
    background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)",
    borderRadius: 10, padding: "2rem",
  }}>
    <h3 style={{ fontSize: 17, fontWeight: 700, color: FROST, marginBottom: 12 }}>{title}</h3>
    <p style={{ fontSize: 14, color: BODY_DARK, lineHeight: 1.7, margin: 0 }}>{body}</p>
  </div>
);

/* ── Page ── */
const WindVistaPage: React.FC = () => (
  <>
    <SEO
      title="WindVista — Wind Farm Analytics Platform | SIRPI Technologies"
      description="WindVista centralises Shear, LTT, and WindexGraph analysis in one platform for large-scale wind farm operations."
    />

    {/* 01 HERO */}
    <section style={{ background: DARK, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>
            WIND ENERGY PLATFORM
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif", fontWeight: 700,
            fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST,
            letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 700, marginBottom: 20,
          }}>
            Your Wind Farm Data. One Platform. Real-Time Intelligence.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 560, lineHeight: 1.75, marginBottom: 28 }}>
            WindVista centralises Shear, LTT, and WindexGraph analysis in one platform — with automated reporting, advanced filters, and performance monitoring built specifically for large-scale wind farm operations.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginBottom: 36 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: FROST, letterSpacing: "0.08em",
              background: "rgba(255,255,255,0.08)", padding: "5px 14px", borderRadius: 20,
              border: "0.5px solid rgba(255,255,255,0.15)",
            }}>WindVista 2 — Latest Version</span>
          </div>
          <DarkBtn to="/contact?type=demo">Request a Demo</DarkBtn>
        </motion.div>
      </div>
    </section>

    {/* 02 PROBLEM */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 56 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE PROBLEM</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Wind farm data is fragmented across too many systems.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8, textAlign: "justify" }}>
            Shear measurements in one place. LTT reports in another. WindexGraph outputs somewhere else. Your engineers spend hours consolidating before they can begin analysing. By the time they have a complete picture, the window to act has already passed.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard title="No single source of truth" body="Multiple systems mean multiple handoffs, multiple errors, and multiple delays." tag="Operations" />
          <PainCard title="Manual reporting cycles" body="Generating a complete wind farm report shouldn't take an entire working day." tag="Efficiency" />
          <PainCard title="Reactive decisions, not predictive ones" body="Without a unified data view, your team reacts to problems instead of preventing them." tag="Intelligence" />
        </div>
      </div>
    </section>

    {/* 03 KEY FEATURES */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>PLATFORM CAPABILITIES</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 560 }}>
          Everything your wind farm operation needs. One platform.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 32 }}>
          <FeatureCard title="Shear Profile Analysis" body="Automated Shear data processing with configurable thresholds, visual reporting, and batch processing across multiple assets." />
          <FeatureCard title="LTT (Long-Term Trend) Analysis" body="Long-term performance trend monitoring that surfaces degradation patterns before they become costly failures." />
          <FeatureCard title="WindexGraph Integration" body="Unified WindexGraph analysis within the same platform — no switching between tools, no manual exports." />
          <FeatureCard title="Automated Report Generation" body="Generate complete wind farm reports in seconds. Structured, consistent, and ready to share." />
          <FeatureCard title="Advanced Filters & Navigation" body="Streamlined data navigation with advanced filters built for large wind farm datasets." />
          <FeatureCard title="Windcheck & Batch Upload" body="Central repository for project reporting and bulk data ingestion with automated validation." />
        </div>
      </div>
    </section>

    {/* 04 HOW IT WORKS */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          Up and running in three steps.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCard num="01" title="Connect Your Data" body="Integrate your existing wind farm data sources — Shear, LTT, WindexGraph — into a single WindVista workspace. No data migration required." duration="Setup in days, not months" />
          <PhaseCard num="02" title="Analyse & Monitor" body="Your team accesses all wind data, performance trends, and automated alerts from one dashboard. Filters, reports, and trend analysis are all built in." duration="Immediate value from day one" />
          <PhaseCard num="03" title="Report & Decide" body="Generate complete performance reports automatically. Share with stakeholders, investors, or operations teams — structured, accurate, and on time." duration="Reports in seconds, not days" />
        </div>
      </div>
    </section>

    {/* 05 WHO IT'S FOR */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          Built for the teams that run wind farms.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <AudienceCard title="Wind Farm Operations Teams" body="Centralise asset data, monitor turbine performance, and resolve issues faster with a unified operational view." />
          <AudienceCard title="Energy Analysts & Engineers" body="Run Shear profiles, LTT analysis, and WindexGraph in one platform — eliminating manual data consolidation." />
          <AudienceCard title="Investors & Portfolio Managers" body="Access automated, investor-ready reporting on wind farm performance, yield, and operational status." />
        </div>
      </div>
    </section>

    {/* 06 PROOF POINT */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <div style={{ borderLeft: `3px solid ${N}`, paddingLeft: "1.5rem", textAlign: "left" }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: DARK, lineHeight: 1.6, marginBottom: 16 }}>
            "WindVista centralises asset management, Shear profiling, and LTT analysis for active wind farm operations — reducing reporting time from days to hours and giving operations teams a single source of truth."
          </p>
          <span style={{
            fontSize: 11, fontWeight: 700, color: N, background: "rgba(0,46,93,0.06)",
            border: "0.5px solid rgba(0,46,93,0.12)", padding: "4px 10px",
            borderRadius: 4, letterSpacing: "0.08em", textTransform: "uppercase",
          }}>Wind Energy · Asset Management</span>
        </div>
      </div>
    </section>

    {/* 07 FINAL CTA */}
    <section style={{ background: DARK, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          See WindVista in your wind farm.
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 36 }}>
          Tell us about your operation and we'll show you exactly how WindVista fits your current data environment.
        </p>
        <DarkBtn to="/contact?type=demo">Request a Demo</DarkBtn>
      </div>
    </section>
  </>
);

export default WindVistaPage;
