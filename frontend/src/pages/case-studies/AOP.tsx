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

const AOPCaseStudy: React.FC = () => (
  <>
    <SEO title="AOP Case Study — Dynamic Wind Energy Forecasting | SIRPI Technologies" description="How SIRPI's AOP tool replaced spreadsheet-based annual planning with dynamic, data-driven forecasting for wind energy operators." />

    {/* 01 HERO — dark */}
    <section style={{ background: DARK, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
            {["Wind Energy · Finance", "AOP Basic & PRO"].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, color: FROST, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.15)", padding: "4px 14px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
            Replacing Spreadsheet-Based Annual Planning with Dynamic, Data-Driven Forecasting.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 580, lineHeight: 1.75, marginBottom: 52 }}>
            How SIRPI's AOP tool gave a wind energy operator investor-ready annual operating plans built on live asset performance data — not last year's spreadsheets.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            {[{ n: "Live data", l: "AOP plans connected to real assets" }, { n: "Multiple scenarios", l: "Best, base, and downside modelling" }, { n: "Investor-ready", l: "Structured, defensible report output" }].map((s, i) => (
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
            Annual plans built on outdated data and static assumptions.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8 }}>
            Annual Operating Plans built on static spreadsheets and outdated yield models leave wind energy operators and investors exposed to costly surprises. When actual performance diverges from the plan, there's no dynamic model to update — just a spreadsheet to rebuild.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard tag="Planning" title="AOP models built on last year's data" body="Static plans don't reflect current asset performance or changing operational conditions." />
          <PainCard tag="Risk" title="No scenario modelling for maintenance" body="What if a turbine underperforms? What does an unexpected maintenance event actually cost?" />
          <PainCard tag="Finance" title="Reports investors can't fully rely on" body="Institutional investors expect defensible, data-backed projections — not spreadsheet estimates." />
        </div>
      </div>
    </section>

    {/* 03 APPROACH — dark */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>OUR APPROACH</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 580 }}>
          Audit first. Build what the data supports.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCardDark num="01" title="Data Audit" duration="Weeks 1–2" body="We assessed historical asset data, maintenance records, and the existing AOP model to identify gaps and outdated assumptions before building anything." />
          <PhaseCardDark num="02" title="Model Build" duration="Weeks 3–6" body="We built the forecasting model with scenario planning capability and connected it to live WindVista asset data for dynamic, real-time plan updates." />
          <PhaseCardDark num="03" title="Deliver & Iterate" duration="Week 6+" body="First AOP output delivered. Model refines as new operational data comes in — especially with PRO's live WindVista integration." />
        </div>
      </div>
    </section>

    {/* 04 WHAT WE BUILT — light */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE SOLUTION</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
          AOP Basic &amp; PRO — Dynamic wind energy forecasting.
        </h2>
        <p style={{ fontSize: 16, color: BODY_LIGHT, lineHeight: 1.75, marginBottom: 44, maxWidth: 620 }}>
          AOP replaces static annual plans with a live forecasting model — connected to real asset data, scenario-ready, and built to meet institutional investor standards.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
          {[
            "Energy yield forecasting connected to live data",
            "AOP scenario planning (best / base / downside)",
            "Maintenance cost modelling per turbine and site",
            "ROI analysis dashboards",
            "Investor-ready structured reporting output",
            "WindVista live data integration (PRO version)",
          ].map(f => <FeatureItemLight key={f} text={f} />)}
        </div>
      </div>
    </section>

    {/* 05 RESULTS — dark — honest placeholder */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>THE OUTCOME</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
          Results being gathered.
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75 }}>
          Detailed outcome data for this case study is currently being confirmed with the project team. This section will be updated with verified results before the page is published.
        </p>
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
          <RelatedCard label="PRODUCT" name="AOP Basic &amp; PRO" desc="Explore the full AOP platform capabilities" linkText="View product" to="/products/aop" />
          <RelatedCard label="SERVICE" name="Wind Energy Solutions" desc="See how SIRPI works with wind energy operators" linkText="View service" to="/services/wind-energy" />
        </div>
      </div>
    </section>

    {/* 07 CTA — dark */}
    <section style={{ background: DARK, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>WORK WITH US</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Still building your AOP on spreadsheets?
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 40 }}>
          Tell us about your wind farm and we'll show you what AOP can do for your annual planning process.
        </p>
        <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default AOPCaseStudy;
