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
  "Cloud Infrastructure",
  "Digital Modernisation",
  "Security & Compliance"
];

const CloudTransformation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="Cloud & Digital Transformation — SIRPI Technologies"
        description="Modernise. Scale. Transform."
      />

      {/* ── HERO ── */}
      <section style={{ background: INK, minHeight: 400, display: "flex", alignItems: "center", paddingTop: "6rem", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem 4rem 3rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 14 }}>
              CLOUD & DIGITAL TRANSFORMATION
            </p>
            <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 680, marginBottom: 20 }}>
              Modernise. Scale. Transform.
            </h1>
            <p style={{ fontSize: 16, color: ACCENT, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
              Cloud infrastructure and digital transformation consulting for organisations moving beyond legacy systems to achieve operational excellence.
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
              headline="Legacy systems are rigid, slow, and expensive."
              body="Maintaining on-premise servers limits your ability to scale and deploy modern AI solutions. SIRPI designs and deploys scalable cloud infrastructures tailored to enterprise workloads."
              cards={[
                { title: "High infrastructure maintenance costs", tag: "Cost" },
                { title: "Inability to scale dynamically with load", tag: "Scalability" },
                { title: "Frequent downtime and poor reliability", tag: "Reliability" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "Cloud Migration Strategy & Execution",
                "AWS, Azure, and GCP Deployment",
                "Containerisation (Docker & Kubernetes)",
                "Serverless Architecture Design",
                "Database Migration & Modernisation",
                "Infrastructure as Code (Terraform, CI/CD)"
              ]}
            />
            <ProofBlock
              quote="SIRPI migrates industrial legacy systems to robust cloud environments, enabling seamless scaling and rapid deployment of AI capabilities."
              tag="Cloud · Infrastructure"
            />
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div key="tab1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Transformation fails without strategic implementation."
              body="Buying new software isn't digital transformation. Success requires deeply integrating technology into existing workflows. SIRPI provides the expertise to digitize processes effectively."
              cards={[
                { title: "Disconnected digital tools causing friction", tag: "Integration" },
                { title: "Low user adoption of new systems", tag: "Culture" },
                { title: "Lack of measurable ROI on digital spend", tag: "Strategy" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "Digital Transformation Consulting",
                "Workflow Digitisation & Optimisation",
                "Technology Stack Auditing",
                "Change Management & Training",
                "IoT Integration & Edge Computing",
                "Measurable ROI Frameworks"
              ]}
            />
            <ProofBlock
              quote="SIRPI bridges the gap between raw technology and action, ensuring your digital transformation translates directly into maximum operational efficiency."
              tag="Consulting · Strategy"
            />
          </motion.div>
        )}

        {activeTab === 2 && (
          <motion.div key="tab2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Scaling operations introduces new security risks."
              body="Moving to the cloud requires a fundamental shift in how you protect data. SIRPI builds security and compliance directly into the architecture from day one."
              cards={[
                { title: "Data breaches from misconfigured clouds", tag: "Security" },
                { title: "Failing industry compliance audits", tag: "Compliance" },
                { title: "Lack of visibility into network traffic", tag: "Monitoring" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "Cloud Security Posture Assessments",
                "Zero-Trust Network Implementation",
                "Regulatory Compliance Alignment",
                "Automated Vulnerability Scanning",
                "Disaster Recovery & Backup Strategies",
                "Continuous Monitoring & Logging"
              ]}
            />
            <ProofBlock
              quote="SIRPI ensures all cloud deployments and data architectures meet strict enterprise security and compliance standards."
              tag="Security · Compliance"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FINAL CTA ── */}
      <section style={{ background: INK, padding: "6rem 3rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Tell us where you want to go.
          </h2>
          <p style={{ fontSize: 16, color: ACCENT, lineHeight: 1.75, marginBottom: 40 }}>
            We'll map the right approach for your domain, your data, and your timeline to ensure a successful transformation.
          </p>
          <CTAButton />
        </div>
      </section>
    </>
  );
};

export default CloudTransformation;
