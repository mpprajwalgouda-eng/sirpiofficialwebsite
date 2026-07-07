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



const DarkBtn = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#112035", color: FROST, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
    {children} <ArrowRight size={16} />
  </Link>
);

const SliceArrowPage: React.FC = () => (
  <>
    <SEO
      title="Slice Arrow — DevOps & AI Platform | SIRPI Technologies"
      description="Slice Arrow is SIRPI's platform for accelerating AI and DevOps deployments — built for engineering teams that need to move from development to production faster."
    />

    {/* 01 HERO */}
    <section style={{ background: DARK, paddingTop: "7rem", paddingBottom: "5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: FROST, marginBottom: 16 }}>DEVOPS & AI PLATFORM</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: FROST, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 700, marginBottom: 20 }}>
            DevOps & AI Deployments. Supercharged.
          </h1>
          <p style={{ fontSize: 16, color: BODY_DARK, maxWidth: 560, lineHeight: 1.75, marginBottom: 36 }}>
            Slice Arrow is SIRPI's platform for accelerating AI and DevOps deployments — built for engineering teams that need to move from development to production faster and more reliably.
          </p>
          <DarkBtn to="/contact">Start a Conversation</DarkBtn>
        </motion.div>
      </div>
    </section>

    {/* 02 CONTENT — partial/coming soon */}
    <section style={{ background: CREAM, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: N, marginBottom: 14 }}>MORE DETAIL COMING SOON</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
          Full product details in progress.
        </h2>
        <p style={{ fontSize: 14, color: BODY_LIGHT, lineHeight: 1.8, marginBottom: 36 }}>
          We're currently preparing detailed documentation for Slice Arrow. In the meantime, reach out directly — our team is happy to walk you through the platform and discuss how it fits your DevOps and AI deployment needs.
        </p>
        <Link
          to="/contact"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: DARK, color: FROST, borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
        >
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    {/* 03 FINAL CTA */}
    <section style={{ background: DARK, padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: FROST, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Interested in Slice Arrow?
        </h2>
        <p style={{ fontSize: 16, color: BODY_DARK, lineHeight: 1.75, marginBottom: 36 }}>
          Start a conversation with our team.
        </p>
        <DarkBtn to="/contact">Start a Conversation</DarkBtn>
      </div>
    </section>
  </>
);

export default SliceArrowPage;
