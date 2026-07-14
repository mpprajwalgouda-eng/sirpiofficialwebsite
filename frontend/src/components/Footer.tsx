import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { API_BASE_URL } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B16] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-sirpi-primary/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center">
              <img
                src="/logo/sirpi-logo-white-transparent.png"
                alt="SIRPI"
                className="h-10 w-auto brightness-200"
              />
            </Link>
            <p className="text-sirpi-muted text-sm leading-relaxed">
              Empowering organizations with AI-driven products and data solutions. Turning complexity into clarity, and insights into real impact.
            </p>
            
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-display">Follow Us</h4>
              <div className="flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sirpi_datascience/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SIRPI on Instagram"
                  className="group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/SirpiDataScience/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SIRPI on Facebook"
                  className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  style={{ background: '#1877F2' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/sirpidatascience/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SIRPI on LinkedIn"
                  className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  style={{ background: '#0A66C2' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-display">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-sirpi-muted hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sirpi-muted hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-sirpi-muted hover:text-white transition-colors">Services</Link></li>
              <li>
                <a href="https://code2cognition.sirpi.co.in/" target="_blank" rel="noreferrer" className="text-sirpi-muted hover:text-white transition-colors flex items-center gap-1.5">
                  AI Upskilling Academy <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><Link to="/about" className="text-sirpi-muted hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sirpi-muted hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4 text-sm">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-display">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:contact@sirpi.io" className="flex items-start gap-3 text-sirpi-muted hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@sirpi.io</span>
              </a>
              <a href="tel:+918073085989" className="flex items-start gap-3 text-sirpi-muted hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 8073085989</span>
              </a>
              <div className="flex items-start gap-3 text-sirpi-muted">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed"><strong className="text-white font-medium">Main Branch:</strong><br/>No. 29, 1st floor, 7th Cross Road, Ranna Rd, Pampa Extension, Hebbal Kempapura, Bengaluru, Karnataka 560024</span>
              </div>
              <div className="flex items-start gap-3 text-sirpi-muted">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed"><strong className="text-white font-medium">Sub Branch:</strong><br/>Hampapura Mane, 3rd Floor, No. 59 (Old No. 23/29), 10th Cross, Margosa Road, Malleswaram, Near Vijayalakshmi Hotel, Bengaluru, Karnataka 560003</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sirpi-muted">
            &copy; {new Date().getFullYear()} SIRPI Products and Services Private Limited. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-sirpi-muted">
            <a href="https://www.sirpi.io/privacypolicy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <Link to="/admin" className="hover:text-white transition-colors flex items-center gap-1">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
