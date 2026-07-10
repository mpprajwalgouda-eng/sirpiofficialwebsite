import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import SEO from "../../components/SEO";

// ── Design tokens (exact match to products/services) ─────────────────────────
const N = "#002E5D";           // navy — eyebrows, tags, borders on light bg
const DARK = "#0A1628";        // dark section bg
const FROST = "#F0F4FA";       // light section bg + text on dark
const BODY_DARK = "#8A9BB5";   // muted text on dark bg
const BODY_LIGHT = "#5a7a9f";  // muted text on light bg

// ── Shared sub-components ─────────────────────────────────────────────────────

// Used in light sections
const PainCard = ({ title, body, tag }: { title: string; body: string; tag: string }) => (
  <div style={{ background: "#fff", borderLeft: `3px solid ${N}`, borderRadius: "0 8px 8px 0", padding: "1.1rem 1.3rem", border: "0.5px solid #E0DDD6" }}>
    <span style={{ fontSize: 10, fontWeight: 700, color: N, textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(0,46,93,0.06)", border: "0.5px solid rgba(0,46,93,0.12)", padding: "2px 8px", borderRadius: 4, display: "inline-block", marginBottom: 8 }}>{tag}</span>
    <p style={{ fontSize: 15, fontWeight: 700, color: DARK, margin: "0 0 6px" }}>{title}</p>
    <p style={{ fontSize: 13, color: BODY_LIGHT, margin: 0, lineHeight: 1.65 }}>{body}</p>
  </div>
);

// Used in dark sections (approach)
const PhaseCardDark = ({ num, title, body, duration }: { num: string; title: string; body: string; duration: string }) => (
  <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(240,244,250,0.12)", borderRadius: 10, padding: "2rem" }}>
    <p style={{ fontSize: 11, fontWeight: 700, color: BODY_DARK, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Phase {num}</p>
    <h3 style={{ fontSize: 18, fontWeight: 700, color: FROST, marginBottom: 12 }}>{title}</h3>
    <p style={{ fontSize: 14, color: BODY_DARK, lineHeight: 1.7, marginBottom: 16 }}>{body}</p>
    <span style={{ fontSize: 11, fontWeight: 600, color: FROST, background: "rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: 20, border: "0.5px solid rgba(255,255,255,0.15)" }}>{duration}</span>
  </div>
);

// Used in light sections (what we built)
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

// ── Page ──────────────────────────────────────────────────────────────────────
const WindVistaCaseStudy: React.FC = () => (
  <>
    <SEO
      title="WindVista Case Study — Days to Hours | SIRPI Technologies"
      description="How SIRPI's WindVista platform unified a wind energy operator's Shear, LTT, and WindexGraph data — cutting reporting time from days to hours."
    />

    {/* ── 01 HERO — dark ── */}
    <section style={{ background: DARK, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
            {["Wind Energy", "WindVista"].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, color: FROST, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.15)", padding: "4px 14px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
            Unifying Wind Farm Data. Cutting Reporting Time from Days to Hours.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 580, lineHeight: 1.75, marginBottom: 52 }}>
            How SIRPI's WindVista platform gave a wind energy operator a single source of truth across all Shear, LTT, and WindexGraph data — and replaced a multi-day manual reporting process with an automated one.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            {[{ n: "Days → Hours", l: "Reporting cycle time" }, { n: "3 Tools → 1", l: "Data platforms unified" }, { n: "0", l: "Manual consolidation steps" }].map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div style={{ width: 1, height: 48, background: "rgba(240,244,250,0.12)", margin: "0 0.5rem" }} />}
                <StatBlock number={s.n} label={s.l} />
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── 02 CHALLENGE — light ── */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 56 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE CHALLENGE</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Three critical data systems. Zero integration.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8 }}>
            The wind operations team was working across three separate tools — Shear analysis in one platform, LTT reports in another, WindexGraph outputs in a third. Every report required a full manual consolidation cycle before a single data-driven decision could be made.
          </p>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8, marginTop: 16 }}>
            The result: engineering teams spending hours every week on data preparation instead of analysis. By the time a complete picture was assembled, the operational window to act had often already closed.
          </p>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8, marginTop: 16, fontStyle: "italic" }}>A reactive operation — not a predictive one.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard tag="Operations" title="Shear, LTT, WindexGraph in separate tools" body="Every report started with a multi-hour manual data hunt across three systems." />
          <PainCard tag="Efficiency" title="Reporting cycles measured in days" body="The time from data generation to actionable report was too long for fast operational decisions." />
          <PainCard tag="Maintenance" title="No early warning for performance issues" body="Without a unified view, degradation trends only became visible after they became costly problems." />
        </div>
      </div>
    </section>

    {/* ── 03 APPROACH — dark ── */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>OUR APPROACH</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 580 }}>
          Map first. Build second. No assumptions.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCardDark num="01" title="Discovery" duration="Weeks 1–2" body="We mapped every data source, file format, and manual step in the existing workflow. Before recommending WindVista, we confirmed it was the right fit for this team's specific operational environment." />
          <PhaseCardDark num="02" title="Configuration & Integration" duration="Weeks 3–6" body="We configured WindVista to connect all three data sources — Shear, LTT, and WindexGraph — into a single workspace. Automated reporting templates were set up for the team's standard output formats." />
          <PhaseCardDark num="03" title="Deployment & Handover" duration="Week 6+" body="The platform was deployed to the team's environment with full documentation and a structured handover session. SIRPI remained available for ongoing support as the team's needs evolved." />
        </div>
      </div>
    </section>

    {/* ── 04 WHAT WE BUILT — light ── */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE SOLUTION</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
          WindVista — one platform for all wind farm data.
        </h2>
        <p style={{ fontSize: 16, color: BODY_LIGHT, lineHeight: 1.75, marginBottom: 44, maxWidth: 620 }}>
          WindVista centralises Shear profiles, LTT trend data, and WindexGraph analysis into a single unified workspace — with automated reporting, advanced filtering, and performance monitoring built for large-scale wind farm operations.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
          {[
            "Unified Shear, LTT, WindexGraph workspace",
            "Automated report generation",
            "Advanced filters for large wind datasets",
            "Performance degradation alerts",
            "Windcheck project reporting repository",
            "Batch data upload with built-in validation",
          ].map(f => <FeatureItemLight key={f} text={f} />)}
        </div>
      </div>
    </section>

    {/* ── 05 RESULTS — dark ── */}
    <section style={{ background: DARK, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>THE OUTCOME</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 48 }}>
          The numbers that matter.
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", marginBottom: 56 }}>
          {[{ n: "Days → Hours", l: "Wind farm reporting cycle" }, { n: "One platform", l: "All Shear, LTT, WindexGraph data" }, { n: "Predictive", l: "From reactive to data-driven operations" }].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={{ width: 1, height: 48, background: "rgba(240,244,250,0.12)", margin: "0 0.5rem" }} />}
              <StatBlock number={s.n} label={s.l} />
            </React.Fragment>
          ))}
        </div>
        <div style={{ borderLeft: "3px solid rgba(240,244,250,0.3)", background: "rgba(255,255,255,0.04)", borderRadius: "0 8px 8px 0", padding: "1.5rem 2rem", maxWidth: 720 }}>
          <p style={{ fontSize: 17, fontWeight: 600, color: FROST, lineHeight: 1.7, fontStyle: "italic", marginBottom: 18 }}>
            "WindVista gave our operations team a single source of truth for the first time. Reports that used to take days now take minutes — and we can see performance trends before they become expensive problems."
          </p>
          <p style={{ fontSize: 13, fontWeight: 700, color: BODY_DARK, marginBottom: 4 }}>Wind Energy Operations Team, SIRPI Client</p>
          <p style={{ fontSize: 11, color: BODY_DARK, fontStyle: "italic", margin: 0 }}>* Attribution confirmed with client before publishing</p>
        </div>
      </div>
    </section>

    {/* ── 06 RELATED — light ── */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>EXPLORE FURTHER</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 36 }}>
          Products and services in this case study.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <RelatedCard label="PRODUCT" name="WindVista" desc="Explore the full platform capabilities" linkText="View product" to="/products/windvista" />
          <RelatedCard label="SERVICE" name="Wind Energy Solutions" desc="See how SIRPI works with wind energy operators" linkText="View service" to="/services/wind-energy" />
        </div>
      </div>
    </section>

    {/* ── 07 CTA — dark ── */}
    <section style={{ background: DARK, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>WORK WITH US</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Dealing with fragmented wind farm data?
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 40 }}>
          Tell us about your operation and we'll show you how WindVista fits your current setup.
        </p>
        <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default WindVistaCaseStudy;
