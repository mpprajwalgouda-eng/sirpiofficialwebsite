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
  "Asset Performance Monitoring",
  "Site Optimization & Hub Height",
  "Investment Forecasting (AOP)"
];

const WindEnergy: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="Wind Energy Solutions — SIRPI Technologies"
        description="Built for the Complexity of Wind Farm Operations."
      />

      {/* ── HERO ── */}
      <section style={{ background: N, minHeight: 400, display: "flex", alignItems: "center", paddingTop: "6rem", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem 4rem 3rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 14 }}>
              WIND ENERGY SOLUTIONS
            </p>
            <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 680, marginBottom: 20 }}>
              Built for the Complexity of Wind Farm Operations.
            </h1>
            <p style={{ fontSize: 16, color: ACCENT, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
              Three specialised services covering the full wind energy lifecycle — from daily asset performance to long-term investment planning.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* ── TABS NAVIGATION ── */}
      <section style={{ background: N, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
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
              headline="Your wind farm data is fragmented across systems."
              body="Shear measurements in one place. LTT reports in another. WindexGraph outputs somewhere else. Your engineers spend hours consolidating before they can begin analysing — and by then the operational window has passed."
              cards={[
                { title: "No single source of truth", tag: "Operations" },
                { title: "Reactive maintenance cycles", tag: "Maintenance" },
                { title: "Reporting that takes days", tag: "Reporting" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for asset monitoring."
              items={[
                "Centralised Asset Dashboard (WindVista)",
                "Shear Profile Analysis — automated processing",
                "LTT Monitoring — surfaces degradation early",
                "WindexGraph Integration — all in one platform",
                "Automated Reporting — cuts cycle time drastically",
                "Anomaly Detection — alerts before failures occur"
              ]}
            />
            <section style={{ background: CREAM, padding: "5rem 3rem 2rem 3rem" }}>
              <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 48, alignItems: "center" }}>
                <div>
                  <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: N, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 18 }}>
                    WindVista — Our Purpose-Built Platform.
                  </h2>
                  <p style={{ fontSize: 16, color: INK_MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                    WindVista centralises Shear, LTT, and WindexGraph in one platform with automated reporting and advanced filters for large-scale wind farm operations.
                  </p>
                  <Link to="/products" style={{ fontSize: 15, fontWeight: 600, color: N, borderBottom: `2px solid rgba(0,46,93,0.25)`, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, paddingBottom: 2 }}>
                    Explore WindVista <ArrowRight size={16} />
                  </Link>
                </div>
                <div style={{ background: N, borderRadius: 12, padding: "2rem", border: "0.5px solid rgba(240,244,250,0.12)", borderTop: "2px solid rgba(240,244,250,0.20)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                  <p style={{ fontSize: 11, color: FROST, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.12)", display: "inline-block", padding: "4px 10px", borderRadius: 4, marginBottom: 20 }}>
                    WINDVISTA
                  </p>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, color: FROST, marginBottom: 20 }}>
                    The WindVista Platform
                  </p>
                  {["Shear Profile Processing", "LTT Monitoring", "WindexGraph Analysis", "Automated Asset Reporting"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: FROST, opacity: 0.7, flexShrink: 0 }} />
                      <p style={{ fontSize: 15, color: ACCENT, margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <ProofBlock
              topPadding="3rem"
              quote="SIRPI's WindVista platform centralises asset management, Shear profiling, and LTT analysis for active wind farm operations — reducing reporting time from days to hours."
              tag="Wind Energy · Asset Management"
            />
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div key="tab1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Wind site analysis shouldn't take days."
              body="Rerunning yield analysis for a new hub height used to mean days of manual calculation across multiple tools. SIRPI built the solution that does it at the press of a button — across the full range of hub heights simultaneously."
              cards={[
                { title: "Days lost on manual hub height analysis", tag: "Planning" },
                { title: "Inaccurate yield projections from static models", tag: "Forecasting" },
                { title: "No fast way to evaluate site expansion options", tag: "Strategy" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for site optimization."
              items={[
                "Hub Height Yield Analysis — full range, one run",
                "Shear Extrapolation Pipelines — batch processed",
                "Wind Flow Modelling — calibrated for your site",
                "Long-Term Adjustment (LTA) Processing",
                "AEP (Annual Energy Production) Forecasting",
                "Site Assessment Reports — investor-ready output"
              ]}
            />
            <ProofBlock
              quote="SIRPI reduced wind farm hub height yield analysis from a multi-day manual process to a single automated run — covering the full range of hub heights in one batch pipeline."
              tag="Wind Energy · Site Optimization"
            />
          </motion.div>
        )}

        {activeTab === 2 && (
          <motion.div key="tab2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <ProblemBlock
              headline="Wind energy investment decisions need better data."
              body="Annual Operating Plans built on static spreadsheets and outdated yield models leave investors and operators exposed to costly surprises. SIRPI builds the data intelligence layer that makes AOP forecasting accurate, dynamic, and defensible."
              cards={[
                { title: "AOP models built on outdated assumptions", tag: "Planning" },
                { title: "No scenario modelling for maintenance risk", tag: "Risk" },
                { title: "Reporting that doesn't hold up to investor scrutiny", tag: "Finance" },
              ]}
            />
            <DeliverBlock
              headline="What SIRPI builds for investment forecasting."
              items={[
                "AOP Modelling & Scenario Planning",
                "Energy Yield Forecasting — data-driven projections",
                "Maintenance Cost Modelling",
                "ROI Analysis Dashboards",
                "Investor-Ready Reporting Output",
                "Integration with Asset Monitoring Data (WindVista)"
              ]}
            />
            <ProofBlock
              quote="SIRPI's forecasting tools connect live asset performance data to AOP planning — giving wind energy operators and investors a dynamic, defensible basis for annual planning decisions."
              tag="Wind Energy · Investment Planning"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FINAL CTA ── */}
      <section style={{ background: N, padding: "6rem 3rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Ready to connect your wind farm data?
          </h2>
          <p style={{ fontSize: 16, color: ACCENT, lineHeight: 1.75, marginBottom: 40 }}>
            Tell us about your operation — the size, the systems you're working with, and the challenge you're trying to solve.
          </p>
          <CTAButton />
        </div>
      </section>
    </>
  );
};

export default WindEnergy;
