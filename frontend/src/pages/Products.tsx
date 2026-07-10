import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wind, Bot, BarChart2, Network, BookOpen, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

const N = '#002E5D';
const FROST = '#F0F4FA';
const INK = '#0A1628';

interface FeaturedProduct {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  href: string;
}

const FEATURED: FeaturedProduct[] = [
  {
    slug: 'windvista',
    name: 'WindVista',
    tag: 'Wind Analytics',
    tagline: 'End-to-end wind energy intelligence.',
    description:
      'Centralises Shear, LTT, and WindexGraph analysis in one platform — cutting wind farm reporting time from days to hours. The operational backbone for large-scale wind asset management.',
    icon: <Wind size={28} />,
    accent: '#1A6B9A',
    href: '/products/windvista',
  },
  {
    slug: 'urai',
    name: 'URAI',
    tag: 'AI Chatbot',
    tagline: 'Conversational AI for field operations.',
    description:
      'Answers operational questions in natural language — connecting field teams to critical data without a single spreadsheet. Purpose-built for engineering environments.',
    icon: <Bot size={28} />,
    accent: '#2D5F8A',
    href: '/products/urai',
  },
  {
    slug: 'aop',
    name: 'AOP Basic & PRO',
    tag: 'AI Planning',
    tagline: 'Annual operating plans, simplified.',
    description:
      'Streamlines management and tracking of AI and business planning environments across Basic and PRO tiers — giving leadership a single, real-time dashboard.',
    icon: <BarChart2 size={28} />,
    accent: '#0F4C75',
    href: '/products/aop',
  },
  {
    slug: 'braid',
    name: 'BRAID',
    tag: 'AI Infrastructure',
    tagline: 'Multi-agent AI backbone.',
    description:
      'Retrieval-augmented AI architecture for complex data workflows — enabling orchestrated, context-aware intelligence across enterprise systems and research pipelines.',
    icon: <Network size={28} />,
    accent: '#1B4F72',
    href: '/products/braid',
  },
  {
    slug: 'code2cognition',
    name: 'CodeToCognition',
    tag: 'AI Upskilling',
    tagline: 'From code to applied AI.',
    description:
      'A structured AI upskilling academy offering practical, project-based training in machine learning and applied AI — built for students and corporate engineering teams alike.',
    icon: <BookOpen size={28} />,
    accent: '#154360',
    href: '/products/code2cognition',
  },
  {
    slug: 'ai-tutor',
    name: 'AI Tutor',
    tag: 'Education Platform',
    tagline: 'Personalised AI-powered learning.',
    description:
      'Delivers adaptive, personalised AI and ML learning experiences — matching curriculum to each learner\'s pace and knowledge gaps for measurably better outcomes.',
    icon: <GraduationCap size={28} />,
    accent: '#1A5276',
    href: '/products/ai-tutor',
  },
];

const Products: React.FC = () => {
  return (
    <>
      <SEO
        title="Featured Products | SIRPI Technologies"
        description="Explore SIRPI's flagship software products: WindVista, URAI, AOP, BRAID, CodeToCognition, and AI Tutor — purpose-built platforms for engineering and AI-driven industries."
      />

      <div style={{ background: FROST }}>

        {/* ── PAGE HEADER ── */}
        <section style={{ background: N }} className="pt-36 pb-24 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#6eb4f7' }}>
              Product Portfolio
            </p>
            <h1
              className="font-bold leading-tight max-w-3xl"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              Proprietary<br />
              <span style={{ color: '#6eb4f7' }}>Platforms</span>
            </h1>
            <p className="text-base leading-relaxed mt-6 max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We compile our scientific findings and engineering routines into highly optimised,
              deployment-ready enterprise platforms — each purpose-built for its domain.
            </p>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS GRID ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {FEATURED.map((p) => (
              <div
                key={p.slug}
                className="group rounded-2xl flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: '#ffffff', borderColor: 'rgba(0,46,93,0.1)' }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: p.accent }} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + Tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${p.accent}15`, color: p.accent }}
                    >
                      {p.icon}
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ color: INK, background: '#E8EEFB' }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  {/* Name */}
                  <h2
                    className="font-bold text-xl mb-1 leading-snug"
                    style={{ fontFamily: 'Georgia, serif', color: N }}
                  >
                    {p.name}
                  </h2>

                  {/* Tagline */}
                  <p className="text-sm font-semibold mb-3" style={{ color: p.accent }}>
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#5a7a9f' }}>
                    {p.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to={p.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-6 group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: N, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-16 border-t" style={{ borderColor: 'rgba(0,46,93,0.1)' }}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: INK, opacity: 0.5 }}>
                Custom Solutions
              </p>
              <h3 className="font-bold text-xl" style={{ fontFamily: 'Georgia, serif', color: N }}>
                Need something built for your domain?
              </h3>
              <p className="text-sm mt-1" style={{ color: '#5a7a9f' }}>
                Our engineering team specialises in bespoke AI and geospatial systems.
              </p>
            </div>
            <Link
              to="/contact?type=demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-lg transition-all hover:opacity-90 flex-shrink-0"
              style={{ background: N, color: FROST }}
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default Products;
