import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { API_BASE_URL } from '../config';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe. Please try again.');
      }

      setStatus('success');
      setMessage('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong.');
    }
  };

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
                className="h-10 w-auto"
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

          {/* Newsletter Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-display">Get Enterprise AI & Geospatial Insights</h4>
            <p className="text-sirpi-muted text-xs leading-relaxed">
              Receive exclusive engineering whitepapers and wind energy analytics updates directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email"
                className="w-full bg-sirpi-surface/80 border border-white/10 rounded-xl py-2.5 pl-4 pr-10 text-xs text-white placeholder-sirpi-muted focus:outline-none focus:border-sirpi-primary transition-colors focus:ring-1 focus:ring-sirpi-primary"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-1 top-1 bottom-1 px-3 bg-sirpi-primary rounded-lg text-white hover:bg-sirpi-accent transition-all flex items-center justify-center disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {status === 'success' && (
              <p className="text-emerald-400 text-[11px] flex items-center gap-1">
                <CheckCircle className="w-3 h-3 flex-shrink-0" /> {message}
              </p>
            )}
            {status === 'error' && (
              <p className="text-rose-400 text-[11px] flex items-center gap-1">
                <AlertCircle className="w-3 h-3 flex-shrink-0" /> {message}
              </p>
            )}
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
