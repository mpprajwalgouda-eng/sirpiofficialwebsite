import React, { useState } from 'react';
import { Calendar, MapPin, Upload, CheckCircle, AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { API_BASE_URL } from '../config';
import Card from '../components/Card';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  desc: string;
  img: string;
}

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', position: 'Senior Machine Learning Engineer' });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const openPositions: JobPosition[] = [
    {
      title: 'Senior Machine Learning Engineer',
      department: 'AI Research',
      location: 'Bengaluru, India (Hybrid)',
      type: 'Full-Time',
      desc: 'Architect time-series predictive autoencoders and NLP RAG indices. Requires 3+ years PyTorch and FastAPI experience.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Geospatial Software Engineer',
      department: 'GIS Platform',
      location: 'Singapore (Remote)',
      type: 'Full-Time',
      desc: 'Implement high-speed coordinate transformations and compliant OGC tile servers. Expertise in Go, C++ and GDAL required.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'AI Research Intern',
      department: 'Innovation Labs',
      location: 'Bengaluru, India (On-Site)',
      type: 'Internship (6 Months)',
      desc: 'Assist research leaders in coding physics-guided neural network loss parameters. Strong statistical Python foundations required.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const benefits = [
    { label: 'Flexible Workspace', detail: 'Hybrid & Remote workspace options tailored to your workflow', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop' },
    { label: 'Health & Wellness', detail: 'Competitive health insurance & wellness allowances', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
    { label: 'Learning Budget', detail: 'Annual budgets for books, courses, and AI conferences', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
    { label: 'Premium Equipment', detail: 'High-end workstations: MacBook Pro / Dedicated GPU clusters', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext !== 'pdf' && ext !== 'doc' && ext !== 'docx') {
        setStatus('error'); setMessage('Only PDF and Word documents are allowed.'); return;
      }
      setResumeFile(file); setStatus('idle'); setMessage('');
    }
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) { setStatus('error'); setMessage('Please upload a resume file.'); return; }
    setStatus('uploading'); setMessage('Uploading resume to secure server...');
    try {
      const uploadData = new FormData();
      uploadData.append('file', resumeFile);
      const uploadResponse = await fetch(`${API_BASE_URL}/careers/upload`, { method: 'POST', body: uploadData });
      if (!uploadResponse.ok) { const err = await uploadResponse.json(); throw new Error(err.detail || 'Failed to upload resume.'); }
      const { resume_url } = await uploadResponse.json();
      setStatus('submitting'); setMessage('Submitting your job application profile...');
      const applyResponse = await fetch(`${API_BASE_URL}/careers/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, position: formData.position, resume_url }),
      });
      if (!applyResponse.ok) throw new Error('Failed to submit application registry.');
      setStatus('success'); setMessage('Application submitted successfully!');
      setFormData({ name: '', email: '', position: 'Senior Machine Learning Engineer' }); setResumeFile(null);
    } catch (err: any) {
      setStatus('error'); setMessage(err.message || 'Something went wrong during application.');
    }
  };

  const inputCls = 'w-full bg-white border border-[#c8c0aa] py-3 px-4 text-sm text-[#021124] focus:outline-none focus:border-[#05325d] transition-colors placeholder:text-[#aaa]';
  const labelCls = 'text-[10px] uppercase font-bold text-[#777] tracking-wider block mb-1.5';

  return (
    <>
      <SEO
        title="Careers & Open Positions"
        description="Join SIRPI Technologies. Explore open jobs in Machine Learning, Geospatial systems, and Enterprise React/FastAPI software engineering."
      />

      <div className="bg-[#f5f0e8]">

        {/* ── PAGE HEADER ── */}
        <section className="bg-[#021124] pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#6eb4f7] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Join Our Team</p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-3xl">
              Build the Core<br />
              <span className="text-[#6eb4f7]">Infrastructure</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mt-6 max-w-xl">
              We look for developers and data scientists who enjoy mathematical puzzles, clean codebases, and building production-ready architectures.
            </p>
          </div>
        </section>

        {/* ── CULTURE + BENEFITS — Suzlon image cards ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 border-b border-[#c8c0aa]">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Culture text */}
            <div className="lg:w-1/3">
              <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Work Culture</p>
              <h2 className="font-bold text-4xl sm:text-5xl text-[#021124] leading-tight mb-6">
                Engineering-First<br />Environment
              </h2>
              <p className="text-[#555] text-sm leading-relaxed">
                At SIRPI, we avoid corporate hierarchy and meetings that could be emails. Engineers manage their own projects and take ownership of development workflows from design to Docker deployment. We prioritise clean APIs, thorough test coverage, and documentation.
              </p>
            </div>

            {/* Right: Benefits — Suzlon image cards */}
            <div className="lg:w-2/3">
              <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-6">Employee Benefits</p>
              <div className="grid grid-cols-2 gap-1">
                {benefits.map((b, i) => (
                  <Card
                    key={i}
                    img={b.img}
                    title={b.label}
                    description={b.detail}
                    height="h-52"
                    gradient="strong"
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS — Suzlon image cards ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 border-b border-[#c8c0aa]">
          <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Open Roles</p>
          <h2 className="font-bold text-4xl sm:text-5xl text-[#021124] mb-12">Current Openings</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {openPositions.map((job, i) => (
              <div key={i} className="group">
                {/* Suzlon image card */}
                <Card
                  img={job.img}
                  title={job.title}
                  description={job.desc}
                  tag={job.department}
                  height="h-72"
                  gradient="strong"
                  className="w-full"
                />

                {/* Info strip below card */}
                <div className="bg-white border-t-0 px-5 py-4 flex items-center justify-between border border-[#e0d8cc]">
                  <div className="flex items-center gap-4 text-xs text-[#777]">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{job.type}</span>
                  </div>
                  <button
                    onClick={() => { setFormData(p => ({ ...p, position: job.title })); document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#05325d] hover:gap-2.5 transition-all"
                  >
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── APPLICATION FORM ── */}
        <section id="application-form" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 scroll-mt-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#05325d] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Apply</p>
            <h2 className="font-bold text-4xl sm:text-5xl text-[#021124] mb-4">Join the Registry</h2>
            <p className="text-[#555] text-sm mb-10">Complete the fields below and attach your CV. We review applications within 3 business days.</p>

            <div className="border border-[#c8c0aa] bg-white">
              <form onSubmit={handleApply} className="p-8 sm:p-12 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Alex Mercer" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="alex.mercer@gmail.com" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Desired Position *</label>
                  <select value={formData.position} onChange={e => setFormData({ ...formData, position: e.target.value })} className={inputCls}>
                    {openPositions.map(p => <option key={p.title} value={p.title}>{p.title} ({p.department})</option>)}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Upload Resume (PDF, DOC, DOCX) *</label>
                  <div className="relative border border-dashed border-[#c8c0aa] p-8 hover:border-[#05325d] transition-colors flex flex-col items-center justify-center bg-[#f5f0e8] cursor-pointer">
                    <input type="file" required onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                    <Upload className="w-8 h-8 text-[#aaa] mb-2" />
                    <span className="text-sm font-semibold text-[#021124]">{resumeFile ? resumeFile.name : 'Select or drag file here'}</span>
                    <span className="text-xs text-[#777] mt-1">Max 5MB · PDF, DOC, DOCX</span>
                  </div>
                </div>

                {status !== 'idle' && (
                  <div className="p-4 border border-[#c8c0aa] flex items-center gap-3 text-xs leading-relaxed bg-[#f5f0e8]">
                    {(status === 'uploading' || status === 'submitting') && <RefreshCw className="w-4 h-4 text-[#05325d] animate-spin flex-shrink-0" />}
                    {status === 'success' && <CheckCircle className="w-4 h-4 text-[#05325d] flex-shrink-0" />}
                    {status === 'error' && <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                    <span className={status === 'error' ? 'text-red-500' : 'text-[#555]'}>{message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'uploading' || status === 'submitting'}
                  className="w-full py-4 bg-[#05325d] hover:bg-[#03203f] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  Submit Application Profile
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Careers;
