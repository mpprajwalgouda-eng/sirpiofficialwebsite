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
  <Link to={to} style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "14px 28px", background: "#112035", color: FROST,
    border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6,
    fontWeight: 600, fontSize: 14, textDecoration: "none",
  }}>
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

const URAIPage: React.FC = () => (
  <>
    <SEO
      title="URAI — Enterprise AI Chatbot | SIRPI Technologies"
      description="URAI connects field teams to operational data via natural language — on WhatsApp, Telegram, or your internal portal."
    />

    {/* 01 HERO */}
    <section style={{ background: DARK, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>ENTERPRISE AI CHATBOT</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 700, marginBottom: 20 }}>
            Your Operations, Answered in Natural Language.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
            URAI is an enterprise AI chatbot that connects field teams to operational data via natural language — deployable on WhatsApp, Telegram, or your internal portal. No dashboards to navigate. No SQL required.
          </p>
          <DarkBtn to="/contact?type=demo">See URAI in Action</DarkBtn>
        </motion.div>
      </div>
    </section>

    {/* 02 PROBLEM */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 56 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE PROBLEM</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Your field teams are disconnected from the data they need.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8, textAlign: "justify" }}>
            Critical operational information lives in dashboards that field engineers don't have time to navigate. Questions get answered through phone calls, manual lookups, and delayed reports. Every minute spent finding data is a minute not spent fixing the problem.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard title="Field engineers without real-time data access" body="On-site teams can't wait for a desktop report." tag="Field Operations" />
          <PainCard title="Operational questions that take hours to answer" body="Data that should take seconds takes hours." tag="Efficiency" />
          <PainCard title="Manual reporting workflows that don't scale" body="WhatsApp messages and phone calls aren't a sustainable operations infrastructure." tag="Automation" />
        </div>
      </div>
    </section>

    {/* 03 KEY FEATURES */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>PLATFORM CAPABILITIES</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 480 }}>
          What URAI does for your operation.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 32 }}>
          <FeatureCard title="Natural Language Data Queries" body="Ask questions about your operational data in plain language — URAI returns accurate, context-aware answers." />
          <FeatureCard title="WhatsApp & Telegram Deployment" body="Deploy URAI on the channels your field teams already use — no new apps, no training required." />
          <FeatureCard title="Enterprise Portal Integration" body="Embed URAI directly into your internal operations portal for desk-based teams." />
          <FeatureCard title="Field Staff Management" body="Track field assignments, status updates, and operational alerts through conversational AI." />
          <FeatureCard title="Infrastructure Monitoring" body="Real-time infrastructure status queries — turbine health, network nodes, asset alerts." />
          <FeatureCard title="Audit Trail & Governance" body="Every URAI interaction is logged for compliance, quality review, and operational audit." />
        </div>
      </div>
    </section>

    {/* 04 HOW IT WORKS */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          Deployed in three stages.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCard num="01" title="Connect Your Data" body="We integrate URAI with your existing data systems — whether that's WindVista, your own databases, or enterprise APIs. URAI learns your data structure." duration="Weeks 1–2" />
          <PhaseCard num="02" title="Configure & Train" body="We configure URAI's response logic for your domain — the questions your team asks, the data they need, and the escalation paths when URAI needs human backup." duration="Weeks 2–4" />
          <PhaseCard num="03" title="Deploy & Monitor" body="URAI goes live on WhatsApp, Telegram, or your portal. We monitor response accuracy and iterate based on real usage patterns." duration="Week 4+ / Ongoing" />
        </div>
      </div>
    </section>

    {/* 05 WHO IT'S FOR */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          Built for the teams that run operations.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <AudienceCard title="Field Engineers & Technicians" body="Get immediate answers about asset status, fault history, and maintenance priorities — without leaving the field." />
          <AudienceCard title="Operations Managers" body="Monitor field activity, track assignments, and receive operational alerts through conversational AI." />
          <AudienceCard title="Enterprise IT & Data Teams" body="Deploy a governed, auditable AI layer on top of your existing data infrastructure — no rebuild required." />
        </div>
      </div>
    </section>

    {/* 06 PROOF POINT */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ borderLeft: `3px solid ${N}`, paddingLeft: "1.5rem" }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: DARK, lineHeight: 1.6, marginBottom: 16 }}>
            "URAI connects field engineers to critical wind farm and infrastructure data via natural language — deployed across WhatsApp and enterprise portals, replacing manual reporting workflows and reducing data-to-decision time for operations teams."
          </p>
          <span style={{ fontSize: 11, fontWeight: 700, color: N, background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "4px 10px", borderRadius: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>AI Chatbot · Field Operations</span>
        </div>
      </div>
    </section>

    {/* 07 FINAL CTA */}
    <section style={{ background: DARK, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Put URAI to work in your operation.
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 36 }}>
          Tell us which workflow to automate first and we'll show you how URAI handles it.
        </p>
        <DarkBtn to="/contact?type=demo">See URAI in Action</DarkBtn>
      </div>
    </section>
  </>
);

export default URAIPage;
