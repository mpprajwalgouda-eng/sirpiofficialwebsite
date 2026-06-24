import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { performSearch, type SearchItem } from '../data/searchData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsMobileSearchOpen(false);
    setShowDropdown(false);
    setSearchQuery('');
  }, [location]);

  // Handle scroll for floating navbar effect and visibility
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background style
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update visibility on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down past threshold -> hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Live Search logic
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = performSearch(searchQuery);
      setSearchResults(results.slice(0, 5)); // Limit dropdown to 5 items
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setShowDropdown(false);
      setIsMobileSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Research', path: '/research' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3.5 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-[#021124]/95 backdrop-blur-md shadow-lg border-b border-white/10' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img
              src="/logo/sirpi-logo-white-transparent.png"
              alt="SIRPI - Visualize and Decide"
              className="h-10 w-auto transition-all"
            />
          </Link>

          {/* Desktop Nav Links & Search Box */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold text-xs tracking-wide transition-colors duration-200 py-1 ${
                    location.pathname === link.path
                      ? 'text-[#6eb4f7]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="relative flex items-center" ref={dropdownRef}>
              <div className="flex items-center relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  onFocus={() => { if(searchQuery.trim()) setShowDropdown(true) }}
                  placeholder="Search"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs rounded-lg pl-3 pr-8 py-2 w-56 focus:outline-none focus:border-[#6eb4f7] focus:ring-1 focus:ring-[#6eb4f7] transition-all"
                />
                <Search className="w-3.5 h-3.5 text-white/40 absolute right-3 pointer-events-none" />
              </div>

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {showDropdown && searchQuery.trim() && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-3 right-0 w-[400px] bg-[#021124] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {searchResults.length > 0 ? (
                      <div className="flex flex-col">
                        <div className="px-4 py-2 text-[10px] uppercase font-bold text-white/40 tracking-widest border-b border-white/10 bg-[#0a1628]/50">
                          Search Results
                        </div>
                        {searchResults.map((item) => (
                          <Link
                            key={item.id}
                            to={item.path}
                            className="px-4 py-3 border-b border-white/10 hover:bg-[#6eb4f7]/10 transition-colors flex flex-col gap-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm text-white">{item.title}</span>
                              <span className="text-[9px] uppercase tracking-wider text-[#6eb4f7] bg-[#6eb4f7]/10 px-2 py-0.5 rounded-full">{item.category}</span>
                            </div>
                             <span className="text-xs text-white/50 line-clamp-1">{item.description}</span>
                          </Link>
                        ))}
                        <Link 
                          to={`/search?q=${encodeURIComponent(searchQuery)}`}
                          className="px-4 py-2.5 text-xs text-center font-bold text-[#6eb4f7] hover:bg-[#6eb4f7]/5 transition-colors flex items-center justify-center gap-1"
                        >
                          View all results <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center text-sm text-white/50">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


          </div>

          {/* Mobile Menu & Search Toggles */}
          <div className="flex lg:hidden items-center space-x-2 z-50">
            <button
              onClick={() => { setIsMobileSearchOpen(!isMobileSearchOpen); setIsOpen(false); }}
              className={`focus:outline-none p-1.5 rounded-lg transition-colors ${isMobileSearchOpen ? 'text-[#6eb4f7] bg-[#6eb4f7]/10' : 'text-white/60 hover:text-white'}`}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => { setIsOpen(!isOpen); setIsMobileSearchOpen(false); }}
              className="text-white/60 hover:text-white focus:outline-none p-1.5 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {isMobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#021124] border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <div className="relative">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  placeholder="Search products, services, research..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm rounded-xl pl-10 pr-4 py-3.5 focus:outline-none focus:border-[#6eb4f7]"
                />
                <Search className="w-5 h-5 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>

              {searchQuery.trim() && (
                <div className="max-h-[60vh] overflow-y-auto bg-[#0a1628] rounded-xl border border-white/10 flex flex-col">
                  {searchResults.length > 0 ? (
                    <>
                      {searchResults.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className="px-4 py-4 border-b border-white/10 active:bg-[#6eb4f7]/10 flex flex-col gap-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-white">{item.title}</span>
                            <span className="text-[10px] uppercase tracking-wider text-[#6eb4f7]">{item.category}</span>
                          </div>
                          <span className="text-xs text-white/50 line-clamp-2">{item.description}</span>
                        </Link>
                      ))}
                      <Link 
                        to={`/search?q=${encodeURIComponent(searchQuery)}`}
                        className="px-4 py-4 text-sm font-bold text-center text-[#6eb4f7] border-t border-white/10"
                      >
                        See all results
                      </Link>
                    </>
                  ) : (
                    <div className="px-4 py-8 text-center text-sm text-white/50">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0a1628] border-b border-white/10 absolute top-full left-0 w-full shadow-2xl py-8"
          >
            <div className="px-6 space-y-4 flex flex-col items-start max-w-sm mx-auto relative">
              <div className="w-full space-y-6 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-1 text-sm font-semibold transition-colors ${
                      location.pathname === link.path ? 'text-[#6eb4f7]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
