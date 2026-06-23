import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Lock, Key, Users, BookOpen, Mail, LogOut, Download, Search, 
  RefreshCw, AlertCircle, FileText, ExternalLink 
} from 'lucide-react';
import SEO from '../components/SEO';
import GlassCard from '../components/GlassCard';
import { API_BASE_URL, UPLOADS_BASE_URL } from '../config';

const AdminDashboard: React.FC = () => {
  const { token, isAuthenticated, login, logout } = useAuth();
  
  // Auth Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  // Dashboard Data State
  const [metrics, setMetrics] = useState({ total_contacts: 0, total_applications: 0, total_subscribers: 0 });
  const [contacts, setContacts] = useState<any[]>([]);
  const [careers, setCareers] = useState<any[]>([]);
  const [newsletters, setNewsletters] = useState<any[]>([]);
  
  const [activeTab, setActiveTab] = useState<'contacts' | 'careers' | 'newsletter'>('contacts');
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingData, setLoadingData] = useState(false);
  const [errorData, setErrorData] = useState('');

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginStatus('loading');

    try {
      // FastAPI OAuth2PasswordRequestForm expects urlencoded payload
      const payload = new URLSearchParams();
      payload.append('username', username);
      payload.append('password', password);

      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      login(data.access_token);
      setLoginStatus('idle');
      setUsername('');
      setPassword('');
    } catch (err) {
      setLoginStatus('error');
    }
  };

  // Fetch Dashboard Metrics & Lists
  const fetchDashboardData = async () => {
    if (!token) return;
    setLoadingData(true);
    setErrorData('');

    try {
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      // 1. Fetch Metrics
      const metricsRes = await fetch(`${API_BASE_URL}/admin/metrics`, { headers });
      if (!metricsRes.ok) throw new Error('Failed to load metrics');
      const metricsData = await metricsRes.json();
      setMetrics(metricsData);

      // 2. Fetch Lists
      const contactsRes = await fetch(`${API_BASE_URL}/admin/contacts`, { headers });
      const careersRes = await fetch(`${API_BASE_URL}/admin/careers`, { headers });
      const newsletterRes = await fetch(`${API_BASE_URL}/admin/newsletter`, { headers });

      if (contactsRes.ok) setContacts(await contactsRes.json());
      if (careersRes.ok) setCareers(await careersRes.json());
      if (newsletterRes.ok) setNewsletters(await newsletterRes.json());

    } catch (err: any) {
      setErrorData(err.message || 'Failed to sync dashboard registries.');
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated, token]);

  // Handle CSV Export
  const handleExport = async (module: string) => {
    if (!token) return;
    try {
      const response = await fetch(`${API_BASE_URL}/admin/export/${module}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('CSV generation failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${module}_export_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      alert('Failed to export CSV. Please try again.');
    }
  };

  // Render Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
        <SEO title="Admin Login" description="Secure gateway portal access for SIRPI Technologies system administration." />
        
        <GlassCard hoverEffect={false} className="max-w-md w-full p-8 border-sirpi-muted/20  space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-sirpi-primary/10 border border-sirpi-primary/30 flex items-center justify-center mx-auto text-sirpi-secondary">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-display font-bold text-2xl text-sirpi-text">Security Gateway</h1>
            <p className="text-sirpi-muted text-xs">Enter credentials to unlock administrative controls.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-sirpi-muted tracking-wider">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full bg-sirpi-surface border border-sirpi-muted/20 rounded-xl py-3 px-4 text-sm text-sirpi-text focus:outline-none focus:border-sirpi-primary"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-sirpi-muted tracking-wider">Password</label>
              <div className="relative">
                <Key className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sirpi-muted" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-sirpi-surface border border-sirpi-muted/20 rounded-xl py-3 px-4 pr-10 text-sm text-sirpi-text focus:outline-none focus:border-sirpi-primary"
                />
              </div>
            </div>

            {loginStatus === 'error' && (
              <p className="text-rose-400 text-xs text-center">Invalid username or password. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={loginStatus === 'loading'}
              className="w-full py-3.5 bg-sirpi-primary hover:bg-sirpi-accent text-sirpi-text font-semibold rounded-xl text-sm transition-all"
            >
              {loginStatus === 'loading' ? 'Authenticating...' : 'Unlock Console'}
            </button>
          </form>
        </GlassCard>
      </div>
    );
  }

  // Filtered Lists for client search
  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (c.company && c.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
    c.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCareers = careers.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNewsletters = newsletters.filter(n => 
    n.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO title="System Operations Dashboard" description="SIRPI Admin Dashboard for reviewing contacts queries and job applications." />

      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sirpi-muted/20 pb-6">
          <div>
            <span className="text-sirpi-secondary text-xs uppercase font-bold tracking-widest">Admin Control Center</span>
            <h1 className="font-display font-bold text-3xl text-sirpi-text mt-1">Operations Console</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={fetchDashboardData}
              disabled={loadingData}
              className="p-2.5 rounded-xl bg-sirpi-surface border border-sirpi-muted/20 text-sirpi-text hover:bg-sirpi-text/10 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
            </button>
            
            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-sirpi-text transition-all text-xs font-semibold flex items-center gap-1.5"
            >
              <LogOut className="w-4 h-4" /> Lock Console
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard hoverEffect={false} className="p-6 flex items-center justify-between border-sirpi-muted/20 bg-white">
            <div className="space-y-1">
              <span className="text-sirpi-muted text-xs font-semibold uppercase tracking-wider">Contacts Queries</span>
              <div className="font-display font-bold text-3xl text-sirpi-text">{metrics.total_contacts}</div>
            </div>
            <div className="p-3 bg-sirpi-primary/10 rounded-xl text-sirpi-secondary">
              <Users className="w-6 h-6" />
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-6 flex items-center justify-between border-sirpi-muted/20 bg-white">
            <div className="space-y-1">
              <span className="text-sirpi-muted text-xs font-semibold uppercase tracking-wider">Careers Applications</span>
              <div className="font-display font-bold text-3xl text-sirpi-text">{metrics.total_applications}</div>
            </div>
            <div className="p-3 bg-sirpi-accent/10 rounded-xl text-sirpi-accent">
              <BookOpen className="w-6 h-6" />
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-6 flex items-center justify-between border-sirpi-muted/20 bg-white">
            <div className="space-y-1">
              <span className="text-sirpi-muted text-xs font-semibold uppercase tracking-wider">Newsletter Subs</span>
              <div className="font-display font-bold text-3xl text-sirpi-text">{metrics.total_subscribers}</div>
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Mail className="w-6 h-6" />
            </div>
          </GlassCard>
        </section>

        {/* Error alerting */}
        {errorData && (
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> <span>{errorData}</span>
          </div>
        )}

        {/* Console Controls (Tabs, Search, CSV Export) */}
        <section className="glass-card border-sirpi-muted/20 p-6 rounded-2xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Tabs */}
            <div className="flex space-x-1 bg-sirpi-surface p-1 rounded-xl border border-sirpi-muted/20 w-fit">
              {(['contacts', 'careers', 'newsletter'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSearchQuery('');
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                    activeTab === tab 
                      ? 'bg-sirpi-primary text-sirpi-text shadow-lg' 
                      : 'text-sirpi-muted hover:text-sirpi-text'
                  }`}
                >
                  {tab === 'newsletter' ? 'Subscribers' : tab}
                </button>
              ))}
            </div>

            {/* Search and Export */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-grow sm:flex-grow-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sirpi-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search current list..."
                  className="w-full sm:w-60 bg-sirpi-surface border border-sirpi-muted/20 rounded-xl py-2 pl-9 pr-4 text-xs text-sirpi-text focus:outline-none focus:border-sirpi-primary"
                />
              </div>

              <button
                onClick={() => handleExport(activeTab)}
                className="px-4 py-2 rounded-xl bg-sirpi-secondary hover:bg-sirpi-accent text-sirpi-text font-semibold transition-all text-xs flex items-center gap-1.5 shadow"
              >
                <Download className="w-3.5 h-3.5" /> Export CSV
              </button>
            </div>
          </div>

          {/* Tables */}
          <div className="overflow-x-auto border border-sirpi-muted/20 rounded-xl custom-scrollbar">
            
            {/* Contacts Table */}
            {activeTab === 'contacts' && (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-sirpi-surface border-b border-sirpi-muted/20 text-sirpi-text">
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold">Sender</th>
                    <th className="p-4 font-semibold">Company</th>
                    <th className="p-4 font-semibold">Phone</th>
                    <th className="p-4 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sirpi-muted">
                  {filteredContacts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-sirpi-muted">No contact submissions found.</td>
                    </tr>
                  ) : (
                    filteredContacts.map((c) => (
                      <tr key={c.id} className="hover:bg-sirpi-surface transition-colors">
                        <td className="p-4 whitespace-nowrap text-sirpi-secondary font-mono">{new Date(c.created_at).toLocaleString()}</td>
                        <td className="p-4 font-medium text-sirpi-text">
                          <div>{c.name}</div>
                          <div className="text-[10px] text-sirpi-muted">{c.email}</div>
                        </td>
                        <td className="p-4 whitespace-nowrap">{c.company || '—'}</td>
                        <td className="p-4 whitespace-nowrap">{c.phone || '—'}</td>
                        <td className="p-4 max-w-sm truncate leading-relaxed hover:text-sirpi-text cursor-pointer" title={c.message}>{c.message}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {/* Careers Table */}
            {activeTab === 'careers' && (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-sirpi-surface border-b border-sirpi-muted/20 text-sirpi-text">
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold">Candidate</th>
                    <th className="p-4 font-semibold">Position</th>
                    <th className="p-4 font-semibold">Resume / CV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sirpi-muted">
                  {filteredCareers.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-sirpi-muted">No applications found.</td>
                    </tr>
                  ) : (
                    filteredCareers.map((c) => (
                      <tr key={c.id} className="hover:bg-sirpi-surface transition-colors">
                        <td className="p-4 whitespace-nowrap text-sirpi-secondary font-mono">{new Date(c.created_at).toLocaleString()}</td>
                        <td className="p-4 font-medium text-sirpi-text">
                          <div>{c.name}</div>
                          <div className="text-[10px] text-sirpi-muted">{c.email}</div>
                        </td>
                        <td className="p-4 font-semibold text-sirpi-accent">{c.position}</td>
                        <td className="p-4 whitespace-nowrap">
                          {c.resume_url.startsWith('http') ? (
                            <a
                              href={c.resume_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-sirpi-secondary hover:underline font-semibold"
                            >
                              <ExternalLink className="w-3.5 h-3.5" /> External Link
                            </a>
                          ) : (
                            <a
                              href={`${UPLOADS_BASE_URL}${c.resume_url}`}
                              target="_blank"
                              rel="noreferrer"
                              download
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sirpi-primary/10 border border-sirpi-primary/20 text-sirpi-secondary hover:bg-sirpi-primary hover:text-sirpi-text transition-all font-semibold"
                            >
                              <FileText className="w-3.5 h-3.5" /> Download CV
                            </a>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {/* Newsletter Table */}
            {activeTab === 'newsletter' && (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-sirpi-surface border-b border-sirpi-muted/20 text-sirpi-text">
                    <th className="p-4 font-semibold">Date Subscribed</th>
                    <th className="p-4 font-semibold">Email Registry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sirpi-muted">
                  {filteredNewsletters.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="p-8 text-center text-sirpi-muted">No newsletter subscribers found.</td>
                    </tr>
                  ) : (
                    filteredNewsletters.map((n) => (
                      <tr key={n.id} className="hover:bg-sirpi-surface transition-colors">
                        <td className="p-4 whitespace-nowrap text-sirpi-secondary font-mono">{new Date(n.subscribed_at).toLocaleString()}</td>
                        <td className="p-4 font-medium text-sirpi-text">{n.email}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

          </div>
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
