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

const AITutorCaseStudy: React.FC = () => (
  <>
    <SEO title="AI Tutor Case Study — Industry-Ready AI Graduates | SIRPI Technologies" description="How SIRPI's AI Tutor delivered personalised, domain-specific AI learning to engineering students — producing industry-ready graduates from day one." />

    {/* 01 HERO — dark */}
    <section style={{ background: N, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
            {["Education · AI", "AI Tutor"].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, color: FROST, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.15)", padding: "4px 14px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
            Closing the Gap Between AI Theory and Real-World Industry Application.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 580, lineHeight: 1.75, marginBottom: 52 }}>
            How SIRPI's AI Tutor delivered personalised, domain-specific AI learning to engineering students — producing graduates ready to work with real industrial AI systems from day one.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            {[{ n: "Domain-specific", l: "Curriculum built for real industries" }, { n: "Personalised", l: "Adaptive learning per student" }, { n: "Industry-ready", l: "Graduates trained on SIRPI platforms" }].map((s, i) => (
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
            Generic AI courses producing graduates who couldn't apply their skills in the field.
          </h2>
          <p style={{ fontSize: 15, color: BODY_LIGHT, lineHeight: 1.8 }}>
            Most AI courses stop at theory and toy datasets. Graduates finish knowing the concepts but not how to apply them to wind energy data, geospatial systems, or enterprise AI pipelines. The reskilling burden falls entirely on the employer.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <PainCard tag="Curriculum" title="Theory without domain context" body="Generic datasets don't translate to the messy, real-world data of engineering industries." />
          <PainCard tag="Application" title="No hands-on industry project work" body="Learning without live project experience doesn't build real operational confidence." />
          <PainCard tag="Readiness" title="Graduates needing months of reskilling" body="Employers can't afford a 6-month onboarding just to get a new hire to production capability." />
        </div>
      </div>
    </section>

    {/* 03 APPROACH — dark */}
    <section style={{ background: N, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 12 }}>OUR APPROACH</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 44, maxWidth: 580 }}>
          Assess. Train. Apply. In that order.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <PhaseCardDark num="01" title="Assessment" duration="Week 1" body="We assessed the cohort's existing technical level and defined the domain focus areas most relevant to their intended career paths." />
          <PhaseCardDark num="02" title="Training" duration="Weeks 2–8" body="Structured sessions combining AI/ML fundamentals with domain-specific project work on real SIRPI platforms and industry datasets." />
          <PhaseCardDark num="03" title="Application" duration="Ongoing" body="Graduates applied skills to live projects. The institution received curriculum materials and ongoing faculty support for future cohorts." />
        </div>
      </div>
    </section>

    {/* 04 WHAT WE BUILT — light */}
    <section style={{ background: FROST, padding: "5rem 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: N, marginBottom: 14 }}>THE SOLUTION</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
          AI Tutor — Personalised AI learning for industry.
        </h2>
        <p style={{ fontSize: 16, color: BODY_LIGHT, lineHeight: 1.75, marginBottom: 44, maxWidth: 620 }}>
          AI Tutor combines adaptive learning paths with domain-specific curriculum and hands-on project work on real SIRPI platforms — producing graduates who are operational from day one.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
          {[
            "Adaptive learning paths per student skill level",
            "Domain-specific curriculum (Wind Energy, Telecom, Geospatial)",
            "Hands-on projects on real SIRPI platforms",
            "Progress tracking and structured certification",
            "University partnership program",
            "Enterprise team deployment option",
          ].map(f => <FeatureItemLight key={f} text={f} />)}
        </div>
      </div>
    </section>

    {/* 05 RESULTS — dark — honest placeholder */}
    <section style={{ background: N, padding: "5rem 3rem" }}>
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
          Products in this case study.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          <RelatedCard label="PRODUCT" name="AI Tutor" desc="Explore the full AI Tutor platform" linkText="View product" to="/products/ai-tutor" />
          <RelatedCard label="PRODUCT" name="CodeToCognition" desc="Explore our structured coding-to-AI curriculum" linkText="View product" to="/products/code2cognition" />
        </div>
      </div>
    </section>

    {/* 07 CTA — dark */}
    <section style={{ background: N, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>WORK WITH US</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Want industry-ready AI graduates?
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 40 }}>
          Tell us about your institution or team and we'll propose the right program.
        </p>
        <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default AITutorCaseStudy;
