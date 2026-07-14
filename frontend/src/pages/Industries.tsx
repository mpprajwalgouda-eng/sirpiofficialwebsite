import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

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

const ProblemBlock = ({ headline, body, cards }: { headline: string, body: string, cards: {title: string, tag: string, body?: string}[] }) => (
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
            <p style={{ fontSize: 15, fontWeight: 600, color: N, margin: 0, marginBottom: c.body ? 6 : 0 }}>
              "{c.title}"
            </p>
            {c.body && (
              <p style={{ fontSize: 14, color: INK_MUTED, margin: 0, lineHeight: 1.5 }}>
                {c.body}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DeliverBlock = ({ headline, items }: { headline: string, items: (string | {title: string, desc: string})[] }) => (
  <section style={{ background: N, padding: "5rem 3rem" }}>
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
            <div>
              {typeof item === "string" ? (
                <p style={{ fontSize: 16, color: FROST, marginTop: 4, fontWeight: 500 }}>{item}</p>
              ) : (
                <>
                  <p style={{ fontSize: 16, color: FROST, marginTop: 4, fontWeight: 600 }}>{item.title}</p>
                  <p style={{ fontSize: 14, color: ACCENT, marginTop: 6, lineHeight: 1.5 }}>{item.desc}</p>
                </>
              )}
            </div>
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
  "Wind Energy",
  "Telecom",
  "Healthcare",
  "Manufacturing",
  "Government",
  "Research"
];

const Industries: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const tabMap: Record<string, number> = {
      'wind-energy': 0,
      'telecom': 1,
      'healthcare': 2,
      'manufacturing': 3,
      'government': 4,
      'research': 5
    };
    
    if (hash in tabMap) {
      setActiveTab(tabMap[hash]);
    }
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Industries We Serve — SIRPI Technologies"
        description="Discover how SIRPI Technologies provides AI, GIS, and telemetry algorithms across wind energy, telecom, healthcare, manufacturing, government, and research."
      />

      {/* ── HERO ── */}
      <section style={{ background: N, minHeight: 400, display: "flex", alignItems: "center", paddingTop: "6rem", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem 4rem 3rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 14 }}>
              TARGET SECTORS
            </p>
            <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 680, marginBottom: 20 }}>
              Industry Vertical Impact.
            </h1>
            <p style={{ fontSize: 16, color: ACCENT, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
              We apply our custom ML engines, OGC servers, and forecasting models to address specialised problems for complex industries.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* ── TABS NAVIGATION ── */}
      <section style={{ background: N, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem", display: "flex", gap: "2.5rem", overflowX: "auto", scrollbarWidth: "none" }}>
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
              headline="High wake interference and complex terrain geometry reduce annual energy output."
              body="Unpredictability in grid integration due to these factors makes wind energy operations highly inefficient and reactive without proper modelling."
              cards={[
                { title: "Wake Interference", tag: "Operations" },
                { title: "Complex Terrains", tag: "Planning" },
                { title: "Grid Unpredictability", tag: "Integration" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for Wind Energy."
              items={[
                "Microscale Spatial Resource Modelling",
                "WindVista Analytics Engine",
                "Optimal Turbine Coordination",
                "Rotor Load Stress Reduction",
                "Mountainous Terrain AEP Boosting"
              ]}
            />
            <ProofBlock
              quote="SIRPI's wind energy solutions centralise asset performance data, automate shear and LTT analysis, and deliver the spatial intelligence needed to optimise turbine output across complex terrain — reducing the time from data to operational decision."
              tag="Wind Energy · Spatial Analytics"
            />
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div key="tab1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Manual planning of wireless network expansions is slow and prone to signal interference."
              body="Without automated mapping and census integration, network expansion planning relies on guesswork, leading to poor coverage and long operational delays."
              cards={[
                { title: "Manual Network Planning", tag: "Expansion" },
                { title: "Signal Interference", tag: "Quality" },
                { title: "Siloed Census Data", tag: "Data" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for Telecom."
              items={[
                "Automated Geospatial Site Planning",
                "Elevation Vector Meshes",
                "Local Population Density Charts",
                "Outage Routing Simulations",
                "Coverage Quality Projections"
              ]}
            />
            <ProofBlock
              quote="SIRPI's automated geospatial site planning tools replace manual network expansion workflows with data-driven coverage modelling — enabling faster, more accurate planning decisions across complex urban and rural terrain."
              tag="Telecom · Network Optimisation"
            />
          </motion.div>
        )}

        {activeTab === 2 && (
          <motion.div key="tab2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Medical image datasets are massive and backlogging diagnostics."
              body="Manual annotations are required for vast amounts of diagnostic imaging, significantly slowing down radiologists and affecting patient throughput."
              cards={[
                { title: "Massive Dataset Processing", tag: "Data" },
                { title: "Manual Image Annotations", tag: "Workload" },
                { title: "Diagnostic Backlogs", tag: "Speed" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for Healthcare."
              items={[
                "Secure Local Classification Pipelines",
                "Semantic Image Analysis",
                "Automated Anomaly Detection",
                "Diagnostic Report Generation",
                "High-Throughput Processing"
              ]}
            />
            <ProofBlock
              quote="SIRPI's medical imaging pipelines reduce diagnostic processing backlogs by automating image classification and anomaly detection — enabling faster radiologist review across high-volume clinical datasets."
              tag="Healthcare · Image Analytics"
            />
          </motion.div>
        )}

        {activeTab === 3 && (
          <motion.div key="tab3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Sudden heavy equipment downtime causes high supply chain losses."
              body="Reactive maintenance in metal stamp assembly lines and other intensive manufacturing setups creates unpredictable operational standstills."
              cards={[
                { title: "Unplanned Equipment Downtime", tag: "Operations" },
                { title: "Supply Chain Bottlenecks", tag: "Logistics" },
                { title: "Reactive Repair Cycles", tag: "Maintenance" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for Manufacturing."
              items={[
                "Time-Series Anomaly Detection",
                "High-Frequency Sensor Integration",
                "Vibrational & Temperature Analytics",
                "Predictive Maintenance Alerts",
                "Assembly Line Optimization"
              ]}
            />
            <ProofBlock
              quote="SIRPI's computer vision and predictive maintenance systems detect equipment anomalies before they become failures — reducing unplanned downtime and improving operational throughput on the shop floor."
              tag="Manufacturing · Predictive Maintenance"
            />
          </motion.div>
        )}

        {activeTab === 4 && (
          <motion.div key="tab4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Dispersed regional GIS planning portals load slowly and crash."
              body="Under high concurrent map requests during planning cycles, legacy GIS middleware fails to deliver the performance needed for effective public infrastructure management."
              cards={[
                { title: "Slow Loading Portals", tag: "Performance" },
                { title: "Legacy GIS Middleware", tag: "Tech Stack" },
                { title: "Concurrent Request Crashes", tag: "Scale" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for Government."
              items={[
                "Optimised Vector Tile Engines",
                "Parallel Coordinate Calculators (Go)",
                "Middleware Layer Replacement",
                "High-Concurrency Architectures",
                "OGC Compliant Servers"
              ]}
            />
            <ProofBlock
              quote="SIRPI's OGC-compliant geospatial platforms and digital public infrastructure solutions turn static government data into live, queryable intelligence for planning, governance, and public service delivery."
              tag="Government · Digital Infrastructure"
            />
          </motion.div>
        )}

        {activeTab === 5 && (
          <motion.div key="tab5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Research data is large, complex, and rarely analysis-ready."
              body="Academic and institutional research programmes generate vast amounts of raw data — genomics, imaging, biophysics simulations — that require specialised computational pipelines before they can be meaningfully analysed. SIRPI builds the data infrastructure and AI tools that make large-scale research data work."
              cards={[
                { title: "Massive, unstructured research datasets", tag: "Data", body: "Raw research data without processing pipelines cannot be queried or analysed at scale." },
                { title: "Computational bottlenecks", tag: "Processing", body: "Complex simulations and imaging workloads exceed the capacity of standard research setups." },
                { title: "No bridge between data and insight", tag: "Analysis", body: "Without the right analytical layer, research data sits unused in storage." },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for Research."
              items={[
                { title: "Omics Data Processing Pipelines", desc: "Genomics and proteomics data ingestion, cleaning, and analysis infrastructure." },
                { title: "Medical Imaging AI", desc: "Classification and anomaly detection models for large-scale clinical imaging datasets." },
                { title: "Molecular Biophysics Support", desc: "Computational infrastructure for biophysics simulation and data analysis workflows." },
                { title: "Research Data Warehousing", desc: "Structured storage and query systems for multi-modal research datasets." },
                { title: "Collaborative Data Platforms", desc: "Shared data environments for academic and institutional research teams." },
                { title: "AI-Assisted Literature & Data Review", desc: "NLP tools for research document processing and knowledge extraction." }
              ]}
            />
            <ProofBlock
              quote="SIRPI's data science capabilities support research programmes in molecular biophysics, omics data processing, and medical imaging — building the computational infrastructure that makes large-scale research data actionable."
              tag="Research · Data Science"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FINAL CTA ── */}
      <section style={{ background: N, padding: "6rem 3rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Is your industry listed?
          </h2>
          <p style={{ fontSize: 16, color: ACCENT, lineHeight: 1.75, marginBottom: 40 }}>
            If you don't see your sector above, we still have the data science and engineering toolkit to help you. Reach out and let's explore together.
          </p>
          <CTAButton />
        </div>
      </section>
    </>
  );
};

export default Industries;
