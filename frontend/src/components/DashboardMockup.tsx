import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Wind, Map, BarChart3, Database, Zap } from 'lucide-react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-2">
          <Wind className="w-4 h-4 text-blue-400" /> WindVista Enterprise
        </div>
        <div className="flex gap-2">
          <div className="h-2 w-16 bg-slate-700 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Left Column - Metrics */}
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-white/5 border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-400 font-medium">Energy Production</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">142.5 MW</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span>+12.4% vs last hour</span>
            </div>
            {/* Mini Chart */}
            <div className="mt-3 flex items-end gap-1 h-10">
              {[40, 60, 45, 80, 50, 90, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="flex-1 bg-emerald-400/80 rounded-t-sm"
                />
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-400 font-medium">Active Turbines</span>
              <Wind className="w-4 h-4 text-blue-400 animate-spin-slow" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">204 / 210</div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
              <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '97%' }} />
            </div>
          </div>
        </div>

        {/* Middle Column - Map / Geospatial */}
        <div className="md:col-span-2 p-4 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-4 relative z-10">
            <span className="text-xs text-slate-400 font-medium">Geospatial Insights & Live Tracking</span>
            <Map className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="flex-grow relative rounded-md overflow-hidden bg-slate-800/50 border border-white/5">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Data flow lines and nodes */}
            <div className="absolute inset-0">
               {/* Nodes */}
               <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] animate-pulse" />
               <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
               <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] animate-pulse" />

               {/* Connecting lines (SVG) */}
               <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                 <path d="M 25% 25% L 50% 50% L 75% 66%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
               </svg>
            </div>

            {/* Overlay metric box */}
            <div className="absolute bottom-3 right-3 bg-slate-900/80 p-2 rounded border border-white/10 backdrop-blur-sm">
              <div className="text-[10px] text-slate-400 mb-1">Site Alpha Performance</div>
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-sm font-bold text-white">98.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Data stream / Logs */}
        <div className="md:col-span-3 p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <Database className="w-4 h-4 text-purple-400" />
             <span className="text-xs text-slate-400">Live AI Data Stream</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
             <motion.span
               animate={{ opacity: [1, 0.5, 1] }}
               transition={{ duration: 1.5, repeat: Infinity }}
             >
               Processing telemetry...
             </motion.span>
             <span className="text-emerald-500">SYS_OK</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardMockup;
