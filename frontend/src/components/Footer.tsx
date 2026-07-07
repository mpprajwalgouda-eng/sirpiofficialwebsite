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
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-display">Socials</h4>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/sirpi_datascience/" target="_blank" rel="noreferrer" className="text-sirpi-muted hover:text-sirpi-secondary transition-colors text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                  Instagram
                </a>
                <a href="https://www.facebook.com/SirpiDataScience/" target="_blank" rel="noreferrer" className="text-sirpi-muted hover:text-sirpi-secondary transition-colors text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/sirpidatascience/" target="_blank" rel="noreferrer" className="text-sirpi-muted hover:text-sirpi-secondary transition-colors text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                  LinkedIn
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
