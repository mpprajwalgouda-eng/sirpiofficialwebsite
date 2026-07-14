import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "../../components/SEO";

const DARK = "#0A1628";
const FROST = "#F0F4FA";
const CREAM = "#F0F4FA";
const BODY_DARK = "#8A9BB5";
const BODY_LIGHT = "#4A5568";
const N = "#002E5D";

interface PlaceholderPageProps {
  eyebrow: string;
  headline: string;
  sub: string;
  content: string;
  breadcrumb: string;
  buttonText?: string;
  seoTitle: string;
  seoDesc: string;
}

export const PlaceholderProductPage: React.FC<PlaceholderPageProps> = ({
  eyebrow, headline, sub, content, breadcrumb, buttonText = "Start a Conversation",
  seoTitle, seoDesc,
}) => (
  <>
    <SEO title={seoTitle} description={seoDesc} />

    {/* HERO */}
    <section style={{ background: N, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>{eyebrow}</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 700, marginBottom: 20 }}>
            {headline}
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>{sub}</p>
          <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            {buttonText} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* CONTENT */}
    <section style={{ background: CREAM, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: N, marginBottom: 14 }}>MORE DETAIL COMING SOON</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
          Full product details in progress.
        </h2>
        <p style={{ fontSize: 14, color: BODY_LIGHT, lineHeight: 1.8, marginBottom: 36 }}>{content}</p>
        <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: N, color: FROST, borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    {/* FINAL CTA */}
    <section style={{ background: N, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Interested in learning more?
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 36 }}>
          Our team is happy to walk you through any of our products and discuss how they fit your requirements.
        </p>
        <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
          {buttonText} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export const BRAIDPage: React.FC = () => (
  <PlaceholderProductPage
    eyebrow="MULTI-AGENT AI PLATFORM"
    headline="BRAID — Multi-Agent AI for Enterprise Operations."
    sub="BRAID is SIRPI's multi-agent AI platform — coordinating intelligent agents across complex enterprise workflows."
    content="Full platform details coming soon. Reach out to learn more about BRAID and how it orchestrates AI agents across your enterprise data environment."
    breadcrumb="BRAID"
    seoTitle="BRAID — Multi-Agent AI Platform | SIRPI Technologies"
    seoDesc="BRAID is SIRPI's multi-agent AI platform for coordinating intelligent agents across complex enterprise workflows."
  />
);




export const AITutorPage: React.FC = () => (
  <PlaceholderProductPage
    eyebrow="AI EDUCATION TOOL"
    headline="AI Tutor — Intelligent Learning, Personalised."
    sub="AI Tutor is SIRPI's AI-powered educational tool for personalised skill development."
    content="Full product details coming soon. Reach out to learn more about AI Tutor and how it delivers personalised AI/ML learning experiences."
    breadcrumb="AI Tutor"
    seoTitle="AI Tutor — Intelligent Learning Tool | SIRPI Technologies"
    seoDesc="AI Tutor is SIRPI's AI-powered educational tool for personalised, adaptive skill development."
  />
);
