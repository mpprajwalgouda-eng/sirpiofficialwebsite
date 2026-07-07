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

const AOPPage: React.FC = () => (
  <>
    <SEO
      title="AOP Basic & PRO — Wind Energy Forecasting | SIRPI Technologies"
      description="AOP replaces static spreadsheet-based planning with data-driven energy yield forecasting and investor-ready reporting for wind energy operators."
    />

    {/* 01 HERO */}
    <section style={{ background: DARK, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>WIND ENERGY FORECASTING</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 700, marginBottom: 20 }}>
            Annual Operating Plans Built on Real Data.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 560, lineHeight: 1.75, marginBottom: 28 }}>
            AOP Basic & PRO replaces static spreadsheet-based annual planning with data-driven energy yield forecasting, maintenance cost modelling, and investor-ready reporting for wind energy operators and portfolio managers.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
            {["AOP BASIC", "AOP PRO"].map(v => (
              <span key={v} style={{ fontSize: 11, fontWeight: 700, color: FROST, letterSpacing: "0.08em", background: "rgba(255,255,255,0.08)", padding: "5px 14px", borderRadius: 20, border: "0.5px solid rgba(255,255,255,0.15)" }}>{v}</span>
            ))}
          </div>
          <DarkBtn to="/contact">Start a Conversation</DarkBtn>
        </motion.div>
      </div>
    </section>

    {/* 02 PROBLEM */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 56 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE PROBLEM</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Wind energy investment planning is still running on spreadsheets.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8, textAlign: "justify" }}>
            Annual Operating Plans built on outdated assumptions and static models leave wind energy operators and investors exposed to costly surprises. When actual performance diverges from the plan, there's no dynamic model to update — just a spreadsheet to rebuild from scratch.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard title="Plans built on last year's data" body="Static AOP models don't reflect current asset performance or changing operational conditions." tag="Planning" />
          <PainCard title="No scenario modelling for risk" body="What if a turbine underperforms? What does an unexpected maintenance event cost?" tag="Risk" />
          <PainCard title="Reporting that doesn't hold up" body="Investors expect defensible, data-backed projections — not spreadsheet estimates." tag="Finance" />
        </div>
      </div>
    </section>

    {/* 03 KEY FEATURES */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>PLATFORM CAPABILITIES</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 520 }}>
          What AOP delivers for wind energy planning.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 32 }}>
          <FeatureCard title="Energy Yield Forecasting" body="Data-driven energy yield projections connected to live asset performance and historical site data." />
          <FeatureCard title="AOP Modelling & Scenario Planning" body="Build multiple AOP scenarios — best case, base case, downside — and model the impact of key variables." />
          <FeatureCard title="Maintenance Cost Modelling" body="Predictive maintenance cost forecasting per turbine and per site, integrated into the annual plan." />
          <FeatureCard title="ROI Analysis Dashboards" body="Executive-ready ROI dashboards for internal review and investor presentations." />
          <FeatureCard title="Investor-Ready Reporting" body="Structured report output meeting institutional investor standards — formatted, exportable, defensible." />
          <FeatureCard title="WindVista Data Integration (PRO)" body="AOP PRO connects directly to live WindVista asset data for dynamic, real-time plan updates." />
        </div>
      </div>
    </section>

    {/* 04 HOW IT WORKS */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          From data to annual plan in three stages.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCard num="01" title="Data Audit" body="We assess your historical asset performance data, maintenance records, and current AOP model to identify gaps and outdated assumptions." duration="Weeks 1–2" />
          <PhaseCard num="02" title="Model Build" body="We build the forecasting model with scenario planning capability — calibrated to your site and asset mix." duration="Weeks 3–6" />
          <PhaseCard num="03" title="Deliver & Iterate" body="First AOP output delivered. Model updated as new operational data comes in — especially with PRO's live WindVista integration." duration="Week 6+ / Ongoing" />
        </div>
      </div>
    </section>

    {/* 05 WHO IT'S FOR */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44 }}>
          Built for wind energy operators and investors.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <AudienceCard title="Wind Farm Operators" body="Build defensible annual operating plans that reflect your real asset performance — not last year's estimates." />
          <AudienceCard title="Energy Portfolio Managers" body="Model scenario outcomes across multiple sites and assets — with investor-ready reporting built in." />
          <AudienceCard title="Wind Energy Investors" body="Access structured, data-backed yield projections and ROI analysis that hold up to institutional scrutiny." />
        </div>
      </div>
    </section>

    {/* 06 PROOF POINT */}
    <section style={{ background: CREAM, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ borderLeft: `3px solid ${N}`, paddingLeft: "1.5rem" }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: DARK, lineHeight: 1.6, marginBottom: 16 }}>
            "SIRPI's AOP tools connect live asset performance data to annual planning — giving wind energy operators and investors a dynamic, data-backed basis for operational and investment decisions."
          </p>
          <span style={{ fontSize: 11, fontWeight: 700, color: N, background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "4px 10px", borderRadius: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>Wind Energy · Investment Planning</span>
        </div>
      </div>
    </section>

    {/* 07 FINAL CTA */}
    <section style={{ background: DARK, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Build your next AOP on real data.
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 36 }}>
          Tell us about your wind farm portfolio and current planning process — we'll show you what AOP Basic or PRO can do for your annual plan.
        </p>
        <DarkBtn to="/contact">Start a Conversation</DarkBtn>
      </div>
    </section>
  </>
);

export default AOPPage;
