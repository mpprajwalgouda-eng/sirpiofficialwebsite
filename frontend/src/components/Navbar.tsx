import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Dropdown data ───────────────────────────────────────────────────────────
const navItems = [
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Wind Energy Solutions',           path: '/services/wind-energy' },
      { label: 'AI & Machine Learning',           path: '/services/ai-ml' },
      { label: 'Geospatial Engineering',          path: '/services/geospatial' },
      { label: 'Data Science & Analytics',        path: '/services/data-science' },
      { label: 'Enterprise Software',             path: '/services/enterprise-software' },
      { label: 'Cloud & Digital Transformation',  path: '/services/cloud-transformation' },
    ],
  },
  {
    name: 'Products',
    path: '/products',
    dropdown: [
      { label: 'WindVista',         path: '/products/windvista' },
      { label: 'AOP Basic & PRO',   path: '/products/aop' },
      { label: 'URAI',              path: '/products/urai' },
      { label: 'BRAID',             path: '/products/braid' },
      { label: 'CodeToCognition',   path: '/products/code2cognition' },
      { label: 'AI Tutor',          path: '/products/ai-tutor' },
    ],
  },
  {
    name: 'Industries',
    path: '/industries',
    dropdown: [
      { label: 'Wind Energy',    path: '/industries#wind-energy' },
      { label: 'Telecom',        path: '/industries#telecom' },
      { label: 'Healthcare',     path: '/industries#healthcare' },
      { label: 'Manufacturing',  path: '/industries#manufacturing' },
      { label: 'Government',     path: '/industries#government' },
      { label: 'Research',       path: '/industries#research' },
    ],
  },
  {
    name: 'Case Studies',
    path: '/case-studies',
    dropdownOnly: true,
    dropdown: [
      { label: 'WindVista',       path: '/case-studies/windvista' },
      { label: 'URAI',            path: '/case-studies/urai' },
      { label: 'AOP Basic & PRO', path: '/case-studies/aop' },
      { label: 'AI Tutor',        path: '/case-studies/ai-tutor' },
    ],
  },
  { name: 'Careers',    path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Which desktop dropdown is open (by nav item name)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Which mobile accordion section is open
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);

    // Scroll to hash element after navigation (with small delay for page render)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const attempt = (retries: number) => {
        const el = document.getElementById(id);
        if (el) {
          const navHeight = navbarRef.current?.offsetHeight ?? 76;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
          window.scrollTo({ top, behavior: 'smooth' });
        } else if (retries > 0) {
          setTimeout(() => attempt(retries - 1), 150);
        }
      };
      setTimeout(() => attempt(5), 100);
    }
  }, [location]);

  // Scroll hide/show + background
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
        setActiveDropdown(null);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside the whole navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3.5 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#021124]/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">

          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img
              src="/logo/sirpi-logo-white-transparent.png"
              alt="SIRPI - Visualize and Decide"
              className="h-10 w-auto transition-all brightness-200"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) =>
              item.dropdown ? (
                /* Dropdown item */
                <div key={item.path} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className={`flex items-center gap-1 font-semibold text-xs tracking-wide transition-colors duration-200 px-3 py-2 rounded ${
                      location.pathname === item.path || location.pathname.startsWith(item.path)
                        ? 'text-[#6eb4f7]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown Panel */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-1 min-w-[220px] bg-[#021124]/60 backdrop-blur-md shadow-2xl border border-white/10 rounded-sm z-50 overflow-hidden"
                      >
                        {item.dropdown.map((sub, idx) =>
                          (sub as any).divider ? (
                            <div key={idx} style={{ fontSize: 10, fontWeight: 700, color: '#9AA5B4', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 16px 4px', borderTop: idx > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', marginTop: idx > 0 ? 4 : 0 }}>
                              {sub.label}
                            </div>
                          ) : (
                            <Link
                              key={idx}
                              to={sub.path}
                              className="block px-5 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Plain link */
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold text-xs tracking-wide transition-colors duration-200 px-3 py-2 ${
                    location.pathname === item.path
                      ? 'text-[#6eb4f7]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/60 hover:text-white focus:outline-none p-1.5 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-200 absolute top-full left-0 w-full shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="divide-y divide-gray-100">
              {navItems.map((item) =>
                item.dropdown ? (
                  /* Mobile accordion item */
                  <div key={item.path}>
                    <button
                      onClick={() => setMobileExpanded(prev => (prev === item.name ? null : item.name))}
                      className="w-full flex items-center justify-between px-6 py-4 text-sm font-bold text-[#021124] hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          mobileExpanded === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {item.dropdown.map((sub, idx) =>
                            (sub as any).divider ? (
                              <div key={idx} style={{ fontSize: 10, fontWeight: 700, color: '#9AA5B4', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '10px 32px 4px', borderTop: idx > 0 ? '1px solid #f0f0f0' : 'none' }}>
                                {sub.label}
                              </div>
                            ) : (
                              <Link
                                key={idx}
                                to={sub.path}
                                className="block px-10 py-3 text-sm font-semibold text-[#05325d] hover:bg-gray-100 transition-colors border-b border-gray-100"
                              >
                                {sub.label}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  /* Mobile plain link */
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-6 py-4 text-sm font-bold transition-colors ${
                      location.pathname === item.path
                        ? 'text-[#6eb4f7]'
                        : 'text-[#021124] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
