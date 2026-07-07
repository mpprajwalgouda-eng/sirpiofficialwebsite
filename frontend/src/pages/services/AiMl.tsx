import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../../components/SEO";

const N = "#002E5D";
const CREAM = "#f0f5ff";
const FROST = "#F0F4FA";
const INK_MUTED = "#5a7a9f";
const INK = "#0A1628";
const ACCENT = "#8A9BB5";

const CTAButton = () => (
  <Link
    to="/contact?type=demo"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
    style={{ background: N, color: FROST, border: "1px solid rgba(255,255,255,0.2)" }}
  >
    Start a Conversation <ArrowRight className="w-5 h-5" />
  </Link>
);

const ProblemBlock = ({ headline, body, cards }: { headline: string, body: string, cards: {title: string, tag: string}[] }) => (
  <section style={{ background: CREAM, padding: "5rem 3rem" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 48 }}>
      <div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: N, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
          {headline}
        </h2>
        <p style={{ fontSize: 16, color: INK_MUTED, lineHeight: 1.8 }}>
          {body}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: "#fff", borderLeft: `2px solid ${N}`, borderRadius: "0 8px 8px 0", padding: "1.1rem 1.3rem", border: "0.5px solid #E0DDD6" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: N, textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "2px 8px", borderRadius: 4, display: "inline-block", marginBottom: 8 }}>
              {c.tag}
            </span>
            <p style={{ fontSize: 15, fontWeight: 600, color: N, margin: 0 }}>
              "{c.title}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DeliverBlock = ({ headline, items }: { headline: string, items: string[] }) => (
  <section style={{ background: INK, padding: "5rem 3rem" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
        {headline}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(240,244,250,0.06)", border: "0.5px solid rgba(240,244,250,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <CheckCircle2 size={16} color={FROST} />
            </div>
            <p style={{ fontSize: 16, color: FROST, marginTop: 4, fontWeight: 500 }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProofBlock = ({ quote, tag, topPadding = "5rem" }: { quote: string, tag: string, topPadding?: string }) => (
  <section style={{ background: CREAM, padding: `${topPadding} 3rem 5rem 3rem` }}>
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      <div style={{ borderLeft: `3px solid ${N}`, paddingLeft: "1.5rem" }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: N, lineHeight: 1.6, marginBottom: 16 }}>
          "{quote}"
        </p>
        <span style={{ fontSize: 11, fontWeight: 700, color: N, background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "4px 10px", borderRadius: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {tag}
        </span>
      </div>
    </div>
  </section>
);

const TABS = [
  "RAG System Deployment",
  "Intelligent Document Processing",
  "Data Platform Build"
];

const AiMl: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="AI & Data Services — SIRPI Technologies"
        description="AI That Survives Contact with Real Data."
      />

      {/* ── HERO ── */}
      <section style={{ background: INK, minHeight: 400, display: "flex", alignItems: "center", paddingTop: "6rem", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem 4rem 3rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 14 }}>
              AI & DATA SERVICES
            </p>
            <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 680, marginBottom: 20 }}>
              AI That Survives Contact with Real Data.
            </h1>
            <p style={{ fontSize: 16, color: ACCENT, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
              Three specialised services covering the full AI and data stack — from the data platform that powers everything, to intelligent document processing, to production-ready RAG deployment.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* ── TABS NAVIGATION ── */}
      <section style={{ background: INK, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem", display: "flex", gap: "2.5rem", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                background: "none",
                border: "none",
                padding: "1.5rem 0",
                color: activeTab === i ? FROST : ACCENT,
                fontWeight: activeTab === i ? 600 : 400,
                borderBottom: activeTab === i ? `2px solid ${FROST}` : "2px solid transparent",
                cursor: "pointer",
                fontSize: "15px",
                transition: "all 0.2s",
                whiteSpace: "nowrap"
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* ── TAB CONTENT ── */}
      <AnimatePresence mode="wait">
        {activeTab === 0 && (
          <motion.div key="tab0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Your AI gives generic answers. It doesn't know your business."
              body="Off-the-shelf LLMs are trained on the internet, not on your internal documents, your processes, or your domain knowledge. RAG (Retrieval-Augmented Generation) fixes that — connecting AI to your actual data so every answer is grounded in what your organisation knows."
              cards={[
                { title: "LLM answers that contradict internal policy", tag: "Accuracy" },
                { title: "No way to query internal documents intelligently", tag: "Knowledge" },
                { title: "AI that can't be trusted for enterprise decisions", tag: "Trust" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "Custom RAG Pipeline Architecture",
                "Document Ingestion & Vectorization",
                "LLM Integration — GPT, open-source, or private models",
                "Enterprise Portal Deployment",
                "Accuracy Monitoring & Evaluation",
                "Domain-Specific Fine-tuning where needed"
              ]}
            />
            <ProofBlock
              quote="SIRPI's URAI platform is built on a RAG architecture connecting field teams to operational data via natural language — deployed across wind energy and enterprise operations."
              tag="RAG · Enterprise AI"
            />
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div key="tab1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Your most valuable data is locked in documents."
              body="PDFs, scanned reports, forms, and contracts hold critical information that never makes it into your systems. Manual extraction is slow, error-prone, and doesn't scale. SIRPI builds AI pipelines that read, classify, and structure your documents automatically."
              cards={[
                { title: "Hours lost to manual data extraction", tag: "Operations" },
                { title: "Inconsistent data quality from human entry", tag: "Quality" },
                { title: "Documents that can't be searched or queried", tag: "Access" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "OCR + NLP Extraction Pipelines",
                "Document Classification Models",
                "Structured Data Output — JSON, database, API",
                "Enterprise System Integration",
                "Confidence Scoring & Validation",
                "Multi-format Support — PDFs, scans, forms, reports"
              ]}
            />
            <ProofBlock
              quote="SIRPI builds intelligent document processing pipelines for government, healthcare, and enterprise clients — turning unstructured document archives into structured, queryable data."
              tag="Document Processing · NLP"
            />
          </motion.div>
        )}

        {activeTab === 2 && (
          <motion.div key="tab2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="You can't build AI on a broken data foundation."
              body="The most common reason AI projects fail isn't the model — it's the data pipeline underneath it. Inconsistent formats, manual ingestion, no single source of truth. SIRPI builds the data infrastructure that makes every AI service reliable."
              cards={[
                { title: "Data scattered across incompatible systems", tag: "Infrastructure" },
                { title: "No reliable pipeline from source to insight", tag: "Engineering" },
                { title: "Dashboards that don't reflect real-time reality", tag: "Reporting" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "Data Pipeline Architecture — batch & real-time",
                "Bulk Data Ingestion (Batch Uploader)",
                "Data Modelling & Warehousing",
                "R-Shiny & Interactive Dashboards",
                "API Layer for Downstream AI Services",
                "OGC-Compliant Geospatial Data Hosting"
              ]}
            />
            <ProofBlock
              quote="SIRPI's Batch Uploader and data pipeline tooling handles industrial-scale data ingestion with built-in validation and automated triggers — the backbone of WindVista and SIRPI's geospatial platforms."
              tag="Data Engineering · Infrastructure"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FINAL CTA ── */}
      <section style={{ background: INK, padding: "6rem 3rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Tell us what you're trying to build.
          </h2>
          <p style={{ fontSize: 16, color: ACCENT, lineHeight: 1.75, marginBottom: 40 }}>
            We'll assess what's realistic with your current data and map the path from where you are to where you need to be.
          </p>
          <CTAButton />
        </div>
      </section>
    </>
  );
};

export default AiMl;
