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
  "Custom Mobile Apps",
  "Workflow Automation",
  "Enterprise Integration"
];

const EnterpriseSoftware: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="Enterprise Software Development — SIRPI Technologies"
        description="Software Built for Industrial Scale."
      />

      {/* ── HERO ── */}
      <section style={{ background: INK, minHeight: 400, display: "flex", alignItems: "center", paddingTop: "6rem", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem 4rem 3rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 14 }}>
              ENTERPRISE SOFTWARE DEVELOPMENT
            </p>
            <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 680, marginBottom: 20 }}>
              Software Built for Industrial Scale.
            </h1>
            <p style={{ fontSize: 16, color: ACCENT, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
              Full-stack enterprise applications, custom mobile development, and workflow automation built for large-scale industrial deployments.
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
              headline="Field teams struggle with clunky data collection."
              body="When field technicians rely on paper forms or poorly designed apps, data gets lost, errors multiply, and real-time analysis is impossible. SIRPI builds custom mobile applications designed specifically for harsh field environments."
              cards={[
                { title: "No offline capabilities in remote locations", tag: "Connectivity" },
                { title: "Poor UX slowing down field operations", tag: "Usability" },
                { title: "Inaccurate signal strength and geospatial data", tag: "Accuracy" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "Custom Mobile App Development (iOS/Android)",
                "Offline-First Architecture & Syncing",
                "Real-Time Field Data Collection",
                "Signal Strength & Geospatial Analysis",
                "Rugged UI/UX for Field Operations",
                "Direct Integration with Enterprise APIs"
              ]}
            />
            <ProofBlock
              quote="SIRPI develops custom mobile apps tailored for real-time field data collection and complex analysis of signal strength in remote terrains."
              tag="Mobile · Field Ops"
            />
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div key="tab1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Manual processes drain engineering hours."
              body="Moving data between systems manually isn't just tedious—it introduces critical human errors. SIRPI designs and implements complex workflow automations using the n8n low-code platform."
              cards={[
                { title: "Engineers acting as manual data pipelines", tag: "Resources" },
                { title: "Missed alerts due to lack of automated triggers", tag: "Operations" },
                { title: "High cost of maintaining custom scripts", tag: "Maintenance" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "End-to-End Workflow Automation",
                "n8n Low-Code Platform Implementation",
                "Automated Alerting & Trigger Systems",
                "Cross-Platform API Integrations",
                "Error-Handling & Notification Logic",
                "Scalable Automation Architectures"
              ]}
            />
            <ProofBlock
              quote="SIRPI designs and implements complex workflow automation pipelines using n8n, freeing engineers to focus on analysis rather than data entry."
              tag="Automation · Operations"
            />
          </motion.div>
        )}

        {activeTab === 2 && (
          <motion.div key="tab2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Off-the-shelf software rarely fits your exact needs."
              body="Industrial operations have highly specific requirements that generic SaaS platforms can't handle. SIRPI provides custom integration and deployment of advanced technologies."
              cards={[
                { title: "Forced to adapt workflows to rigid software", tag: "Flexibility" },
                { title: "Inability to integrate AI into existing systems", tag: "Integration" },
                { title: "High licensing costs for unused features", tag: "Cost" },
              ]}
            />
            <DeliverBlock
              headline="What we deliver"
              items={[
                "Custom Full-Stack Application Development",
                "Advanced AI/ML Model Integration",
                "Microservices Architecture Design",
                "Legacy System Modernisation",
                "Enterprise API Gateway Development",
                "Scalable Deployment on Cloud/On-Premise"
              ]}
            />
            <ProofBlock
              quote="SIRPI delivers custom integration and deployment of advanced technologies, ensuring your enterprise software perfectly aligns with your operational reality."
              tag="Enterprise · Integration"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FINAL CTA ── */}
      <section style={{ background: INK, padding: "6rem 3rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Tell us what you're building.
          </h2>
          <p style={{ fontSize: 16, color: ACCENT, lineHeight: 1.75, marginBottom: 40 }}>
            We'll help you design and deploy the right enterprise software architecture for your operational needs.
          </p>
          <CTAButton />
        </div>
      </section>
    </>
  );
};

export default EnterpriseSoftware;
