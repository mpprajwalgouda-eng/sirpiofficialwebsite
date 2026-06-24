import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, User, Building, MessageSquare, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { API_BASE_URL } from '../config';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('type') === 'consultation') {
      setFormData(prev => ({ ...prev, message: 'Hello SIRPI Team, I would like to schedule an initial consultation session to discuss our corporate data and AI integration requirements.' }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit message.');
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full bg-white border border-[#c8c0aa] py-3 pl-10 pr-4 text-sm text-[#021124] focus:outline-none focus:border-[#05325d] transition-colors placeholder:text-[#aaa]';
  const labelCls = 'text-[10px] uppercase font-bold text-[#777] tracking-wider block mb-1.5';

  return (
    <>
      <SEO
        title="Contact Our Engineering Team"
        description="Get in touch with SIRPI Technologies. Request a product demonstration or schedule an enterprise AI integration consultation."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#021124] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Contact Us</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-2xl">
              Connect With<br />
              <span className="text-[#6eb4f7]">Our Team</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mt-6 max-w-xl">
              We look forward to answering your inquiries about custom AI deployments, WindVista SaaS trials, or geospatial mapping integration.
            </p>
          </div>
        </section>

        {/* ── FORM + OFFICE INFO ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#c8c0aa]">

            {/* Form Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white border-r border-[#c8c0aa]">
              <h2 className="font-bold text-2xl text-[#021124] mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>Your Name *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa]" />
                      <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa]" />
                      <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" className={inputCls} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa]" />
                      <input type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} placeholder="WindCorp Global" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa]" />
                      <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Your Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#aaa]" />
                    <textarea rows={5} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Detail your operational goals or system requirements here..." className="w-full bg-white border border-[#c8c0aa] py-3 pl-10 pr-4 text-sm text-[#021124] focus:outline-none focus:border-[#05325d] transition-colors placeholder:text-[#aaa]" />
                  </div>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-[#e8f5e9] border border-[#05325d]/20 text-[#05325d] text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    Your message has been submitted. Our engineering coordinators will reach out shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Failed to submit message. Please verify network connections and try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {status === 'loading' ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Office Info Column */}
            <div className="lg:col-span-5 bg-[#f5f0e8]">
              <div className="p-8 sm:p-12 border-b border-[#c8c0aa]">
                <h3 className="font-bold text-xl text-[#021124] mb-6">Our Offices</h3>
                <div className="space-y-5">
                  {[
                    { icon: <MapPin className="w-5 h-5 text-[#05325d] mt-1" />, content: <><p className="font-bold text-sm text-[#021124]">Main Branch</p><p className="mt-0.5 text-xs text-[#777] leading-relaxed">No. 29, 1st floor, 7th Cross Road, Ranna Rd,<br/>Pampa Extension, Hebbal Kempapura,<br/>Bengaluru, Karnataka 560024</p></> },
                    { icon: <MapPin className="w-5 h-5 text-[#05325d] mt-1" />, content: <><p className="font-bold text-sm text-[#021124]">Sub Branch</p><p className="mt-0.5 text-xs text-[#777] leading-relaxed">Hampapura Mane, 3rd Floor, No. 59 (Old No. 23/29),<br/>10th Cross, Margosa Road, Malleswaram,<br/>Near Vijayalakshmi Hotel, Bengaluru, Karnataka 560003</p></> },
                    { icon: <Phone className="w-5 h-5 text-[#05325d] mt-0.5" />, content: <p className="text-sm text-[#555]">+91 8073085989</p> },
                    { icon: <Mail className="w-5 h-5 text-[#05325d] mt-0.5" />, content: <p className="text-sm text-[#555]">contact@sirpi.io</p> },
                    { icon: <Clock className="w-5 h-5 text-[#05325d] mt-0.5" />, content: <p className="text-sm text-[#555]">Mon – Fri · 09:00–18:00 IST</p> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">{item.icon}<div>{item.content}</div></div>
                  ))}
                </div>
              </div>

              {/* Location block */}
              <div className="p-8 sm:p-12">
                <h3 className="font-bold text-base text-[#021124] mb-4">Location</h3>
                <div className="bg-[#021124] h-48 flex items-center justify-center border border-[#c8c0aa]">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#6eb4f7] mx-auto mb-2" />
                    <p className="font-bold text-sm text-white">Bengaluru, Karnataka</p>
                    <p className="text-slate-400 text-xs mt-1">India</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;
