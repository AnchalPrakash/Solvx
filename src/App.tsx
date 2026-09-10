import React, { useState, useEffect } from 'react';
import { 
  Activity, BarChart2, Layers, Map, Navigation, 
  Thermometer, Droplet, Target, Globe, Database, 
  Anchor, ArrowRight, Terminal, ChevronRight,
  ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

// --- Shared UI Components ---
const SectionHeader: React.FC<{ tag: string; title: string; description?: string }> = ({ tag, title, description }) => (
  <div className="mb-12 md:mb-16 max-w-3xl">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4]"></div>
      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{tag}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 drop-shadow-md">{title}</h2>
    {description && <p className="text-gray-300 text-lg leading-relaxed drop-shadow-sm">{description}</p>}
  </div>
);

// --- 1. Navbar ---
const Navbar: React.FC = () => (
  <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
    <div className="max-w-[90rem] mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-cyan-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            <div className="w-2 h-2 bg-black"></div>
          </div>
          <span className="text-white font-mono font-bold tracking-widest text-lg drop-shadow-md">SOLV<span className="text-cyan-500">X</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-300 drop-shadow-md">
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">ARCHITECTURE</a>
          <a href="#variables" className="hover:text-cyan-400 transition-colors">TELEMETRY</a>
          <a href="#validation" className="hover:text-cyan-400 transition-colors">VALIDATION</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-cyan-300 drop-shadow-md">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]"></div>
          SYSTEM ONLINE
        </div>
        <button className="px-4 py-1.5 bg-white text-black font-mono text-xs font-bold hover:bg-cyan-500 hover:text-white transition-colors flex items-center gap-2 shadow-lg">
          LAUNCH VIEWER <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </nav>
);

// --- 2. Hero (Abstract Visualization) ---
const Hero: React.FC = () => (
  <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 px-6 border-b border-white/10 bg-transparent overflow-hidden">
    <div className="max-w-[90rem] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      
      {/* Left Column - Copy & CTAs */}
      <div className="pr-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 border border-white/20 bg-black/40 backdrop-blur-md text-[10px] font-mono text-cyan-400 uppercase tracking-widest shadow-lg">
          <Terminal size={12} />
          System Active // v1.0
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.05] uppercase drop-shadow-2xl">
          See the Ocean <br />
          <span className="text-cyan-400 text-opacity-90">Beyond the Surface.</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-xl drop-shadow-lg">
          A browser-based platform that brings ocean model predictions and real-world observations together across location, depth and time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3.5 bg-cyan-600/90 backdrop-blur-sm text-white font-mono text-sm hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border border-cyan-400/50">
            LAUNCH EXPLORER <ChevronRight size={16} />
          </button>
          <button className="px-6 py-3.5 border border-white/30 bg-black/50 backdrop-blur-md text-white font-mono text-sm hover:bg-white/[0.15] transition-colors flex items-center justify-center gap-2 shadow-lg">
            EXPLORE THE PLATFORM
          </button>
        </div>
      </div>
      
      {/* Right Column - Abstract 3D Visualization Placeholder */}
      <div className="relative aspect-square md:aspect-video lg:aspect-square max-h-[550px] w-full border border-white/20 bg-[#020202]/70 backdrop-blur-lg overflow-hidden flex flex-col group rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Top UI Bar */}
        <div className="h-8 border-b border-white/10 bg-black/80 flex items-center px-4 justify-between z-30">
          <div className="text-[10px] font-mono text-gray-400 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_#4ade80]"></div>
            CANVAS_PLACEHOLDER
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-sm border border-white/30"></div>
            <div className="w-2 h-2 rounded-sm border border-white/30"></div>
          </div>
        </div>

        {/* Abstract Data Visualization */}
        <div className="flex-1 relative w-full h-full overflow-hidden bg-gradient-to-b from-transparent to-[#05131a]/60">
          
          {/* Model Field Grid (Perspective) */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40 origin-bottom transform perspective-[800px] rotateX-[60deg] scale-[2]">
            <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-transparent to-[#020202]/30 z-10"></div>

          {/* Abstract Ocean Currents (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-10 opacity-70" preserveAspectRatio="none">
            <path d="M -100,100 C 150,200 350,50 600,150 C 850,250 1000,100 1200,150" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4"/>
            <path d="M 0,250 C 250,150 450,350 700,200 C 950,50 1100,300 1200,250" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <path d="M -50,400 C 200,450 400,300 650,450 C 900,600 1100,350 1200,400" fill="none" stroke="#06b6d4" strokeWidth="1" />
          </svg>

          {/* Observation Data Points */}
          <div className="absolute top-[25%] left-[30%] z-20 flex flex-col items-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
            <div className="w-px h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
            <span className="absolute left-4 top-0 text-[9px] font-mono text-white bg-black/80 backdrop-blur-md px-1.5 py-0.5 border border-white/30 whitespace-nowrap">ARGO_774</span>
          </div>

          <div className="absolute top-[55%] left-[65%] z-20 flex flex-col items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
            <div className="w-px h-20 bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
            <span className="absolute right-4 top-0 text-[9px] font-mono text-cyan-400 bg-black/80 backdrop-blur-md px-1.5 py-0.5 border border-cyan-500/40 whitespace-nowrap">GLIDER_TRK</span>
          </div>

          {/* Contextual UI Overlay */}
          <div className="absolute bottom-5 left-5 z-30">
            <div className="flex items-center gap-3 mb-2 opacity-90">
              <div className="text-[9px] font-mono text-cyan-400 flex items-center gap-1"><Thermometer size={10}/> TEMP</div>
              <div className="text-[9px] font-mono text-blue-400 flex items-center gap-1"><Navigation size={10}/> CURRENTS</div>
            </div>
            <div className="text-[10px] font-mono text-gray-300 border-l-2 border-cyan-500/50 pl-2.5 bg-black/50 backdrop-blur-md py-1.5 pr-3 shadow-lg">
              DEPTH: 0m to -2000m <br/>
              TIME: +48H FORECAST
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
);

// --- 3. The Core Problem & Solution (Architecture) ---
const Architecture: React.FC = () => (
  <section id="architecture" className="py-24 px-6 border-b border-white/10 bg-transparent">
    <div className="max-w-[90rem] mx-auto">
      <SectionHeader 
        tag="The Disconnect" 
        title="Breaking Data Silos in Oceanography" 
        description="Currently, validating numerical spatial models against sparse physical observations requires heavy local compute and custom Python/MATLAB pipelines. SolvX unifies them in the browser."
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 border border-white/10 bg-black/60 backdrop-blur-md shadow-xl">
          <Database className="text-cyan-600 mb-6" size={24} />
          <h3 className="text-lg font-medium text-white mb-3">Numerical Models</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            High-resolution spatial predictions (NetCDF/Zarr) that drift from reality over time. Hard to visualize volumetrically without local rendering setups.
          </p>
        </div>
        <div className="p-8 border border-white/10 bg-black/60 backdrop-blur-md shadow-xl">
          <Anchor className="text-cyan-600 mb-6" size={24} />
          <h3 className="text-lg font-medium text-white mb-3">In-Situ Observations</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Highly accurate, sparse point-data from autonomous floats and gliders. Difficult to overlay directly onto 3D grid models for situational awareness.
          </p>
        </div>
        <div className="p-8 border border-cyan-500/40 bg-cyan-950/40 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl"></div>
          <Target className="text-cyan-400 mb-6" size={24} />
          <h3 className="text-lg font-medium text-white mb-3">The SolvX Synthesis</h3>
          <p className="text-cyan-100/80 text-sm leading-relaxed">
            Zero-install, hardware-accelerated projection of multidimensional datasets into a single 3D coordinate system. Time-synced and ready for visual analysis.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- 4. Ocean Variables (High Density) ---
const Variables: React.FC = () => {
  const vars = [
    { icon: <Thermometer size={18}/>, id: 'TEMP', name: 'Temperature', unit: '°C' },
    { icon: <Droplet size={18}/>, id: 'SALT', name: 'Salinity', unit: 'PSU' },
    { icon: <Navigation size={18}/>, id: 'CURR', name: 'Ocean Currents', unit: 'm/s (U, V)' },
    { icon: <Activity size={18}/>, id: 'CHL', name: 'Chlorophyll', unit: 'mg/m³' },
    { icon: <Map size={18}/>, id: 'LAT/LON', name: 'Coordinates', unit: 'Degrees' },
    { icon: <Layers size={18}/>, id: 'DEPTH', name: 'Bathymetry', unit: 'Meters' }
  ];
  return (
    <section id="variables" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <SectionHeader 
            tag="Telemetry Data" 
            title="Supported Ocean Variables" 
            description="The platform ingests, normalizes, and maps critical physical and biogeochemical parameters across a unified Z-axis."
          />
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max">
          {vars.map((v) => (
            <div key={v.id} className="p-5 border border-white/20 bg-black/50 backdrop-blur-md hover:bg-black/70 hover:border-cyan-500/50 transition-all flex flex-col group shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div className="text-cyan-500 group-hover:text-cyan-300 group-hover:scale-110 transition-all">{v.icon}</div>
                <span className="text-[10px] font-mono text-gray-500 group-hover:text-cyan-400/50">{v.id}</span>
              </div>
              <h4 className="text-gray-100 text-sm font-medium mb-1 drop-shadow-sm">{v.name}</h4>
              <span className="text-[11px] font-mono text-gray-400">{v.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. Observation Systems & Validation (Scientific Dashboard) ---
const Validation: React.FC = () => {
  const depthData = [
    { depth: '100m', model: '15.42', obs: '15.45', diff: '+0.03', trend: 'warm' },
    { depth: '200m', model: '12.80', obs: '12.65', diff: '-0.15', trend: 'cool' },
    { depth: '300m', model: '10.15', obs: '10.35', diff: '+0.20', trend: 'warm' },
    { depth: '500m', model: '7.40', obs: '7.42', diff: '+0.02', trend: 'warm' }
  ];

  return (
    <section id="validation" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader 
          tag="Ground Truth" 
          title="Model vs Observation Synthesis" 
          description="Instantly quantify discrepancies by projecting physical telemetry tracks directly against numerical model isosurfaces."
        />
        
        {/* Scientific Analysis Interface */}
        <div className="border border-white/20 bg-black/60 backdrop-blur-xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.05]">
            <div className="flex items-center gap-3 text-[10px] font-mono text-gray-300 uppercase tracking-widest">
              <Activity size={12} className="text-cyan-400" />
              <span>Delta Calculation Engine</span>
            </div>
            <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 border border-cyan-500/30">
              [ ILLUSTRATIVE_DATA_ONLY ]
            </div>
          </div>

          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="p-6 lg:p-8 flex flex-col justify-between bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/[0.05] to-transparent">
              <div>
                <h3 className="text-sm font-mono text-white mb-2 flex items-center gap-2 drop-shadow-md">
                  <Target size={14} className="text-cyan-400"/> PARAMETERS
                </h3>
                <ul className="text-xs font-mono text-gray-300 space-y-2 mb-8 border-l border-white/20 pl-3 drop-shadow-sm">
                  <li>VAR: Temperature (°C)</li>
                  <li>REF: Argo Float ID_774</li>
                  <li>MOD: HYCOM Global 1/12°</li>
                  <li>LOC: 45.00° N, -130.00° W</li>
                </ul>
              </div>
              
              <div className="p-4 border border-rose-500/30 bg-rose-950/40 backdrop-blur-md relative overflow-hidden shadow-inner">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><BarChart2 size={16} className="text-rose-400" /></div>
                  <div>
                    <div className="text-[10px] font-mono text-rose-300 mb-1 tracking-wider uppercase">Automated Insight</div>
                    <div className="text-sm text-white font-medium mb-1 drop-shadow-md">Subsurface Warm Bias Detected</div>
                    <p className="text-xs text-rose-100/70 leading-relaxed">
                      Model under-predicts cooling rate between 200m and 300m thermocline layer. Max deviation of <span className="text-rose-300 font-mono font-bold">+0.20°C</span> observed at 300m.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-6 lg:p-8">
              <div className="w-full">
                <div className="grid grid-cols-4 gap-4 pb-4 border-b border-white/20 text-[10px] font-mono text-cyan-200 uppercase tracking-widest text-right drop-shadow-md">
                  <div className="text-left">Depth Z</div>
                  <div>Model (Pred)</div>
                  <div>Argo (Obs)</div>
                  <div>Δ Difference</div>
                </div>
                
                <div className="divide-y divide-white/10">
                  {depthData.map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 py-4 text-sm font-mono items-center hover:bg-white/[0.05] transition-colors text-right">
                      <div className="text-left text-gray-200 flex items-center gap-2">
                        <Layers size={14} className="text-cyan-400"/> {row.depth}
                      </div>
                      <div className="text-gray-300">{row.model}</div>
                      <div className="text-white font-bold">{row.obs}</div>
                      <div className={`font-bold flex items-center justify-end gap-1 ${row.trend === 'warm' ? 'text-rose-400' : 'text-cyan-400'}`}>
                        {row.diff}
                        {row.trend === 'warm' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-gray-400">
                  <span>* Absolute delta values mapped to volumetric rendering space.</span>
                  <button className="text-cyan-400 hover:text-white transition-colors uppercase tracking-widest font-bold">
                    Export CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. Applications & Tech Stack ---
const TechImpact: React.FC = () => (
  <section className="py-24 px-6 border-b border-white/10 bg-transparent">
    <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16">
      
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Globe className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]" size={20} />
          <h2 className="text-xl font-medium text-white drop-shadow-md">Scientific Impact</h2>
        </div>
        <div className="space-y-8">
          {[
            { title: "Climate Modeling", desc: "Validate boundary conditions for long-term ocean-atmosphere coupled models." },
            { title: "Marine Navigation", desc: "Provide real-time surface current maps validated by glider tracks for routing." },
            { title: "Ecological Monitoring", desc: "Track hypoxia and chlorophyll blooms via integrated BGC data and modeling." }
          ].map((item, i) => (
            <div key={i} className="pl-5 border-l-2 border-cyan-900/50 bg-black/20 p-3 rounded-r-md backdrop-blur-sm shadow-sm">
              <h4 className="text-white text-sm font-medium mb-1.5 drop-shadow-sm">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]" size={20} />
          <h2 className="text-xl font-medium text-white drop-shadow-md">System Architecture</h2>
        </div>
        <div className="p-6 border border-white/20 bg-black/60 backdrop-blur-md shadow-xl space-y-4 font-mono text-xs">
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Frontend_UI</span> 
            <span className="text-gray-100 font-bold">React + TS + Tailwind</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Renderer</span> 
            <span className="text-cyan-400 font-bold">Three.js / WebGL</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Data_Processing</span> 
            <span className="text-gray-100 font-bold">Python + Xarray + Zarr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Pipeline_Orchestration</span> 
            <span className="text-gray-100 font-bold">GitHub Actions / Vercel</span>
          </div>
        </div>
      </div>

    </div>
  </section>
);

// --- 7. Final CTA & Footer ---
const Footer: React.FC = () => (
  <>
    <section className="py-32 px-6 bg-transparent text-center border-b border-white/10 flex flex-col items-center">
      <div className="w-12 h-12 border border-white/30 bg-black/50 backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <div className="w-4 h-4 bg-cyan-500 animate-pulse"></div>
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 drop-shadow-lg">
        Analyze the Ocean. <br /> In your browser.
      </h2>
      <p className="text-gray-300 max-w-lg mx-auto mb-10 text-lg drop-shadow-md">
        Stop writing static visualization scripts. Interact with the data.
      </p>
      <button className="px-8 py-4 bg-white text-black font-mono text-sm font-bold hover:bg-cyan-500 hover:text-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        INITIALIZE PLATFORM <ChevronRight size={16} />
      </button>
    </section>

    <footer className="py-8 px-6 bg-transparent flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-gray-400 font-mono text-[10px] uppercase tracking-widest drop-shadow-md">
        © {new Date().getFullYear()} SolvX System — Hackathon Build
      </div>
      <div className="flex gap-6 text-gray-300 text-[10px] font-mono uppercase tracking-widest drop-shadow-md">
        <a href="#" className="hover:text-cyan-400 transition-colors">Repository</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Data Sources</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Team</a>
      </div>
    </footer>
  </>
);

// --- Main App Composer (With Scroll Depth Effect) ---
const App: React.FC = () => {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollDepth(Math.min(Math.max(progress, 0), 1)); // Clamps between 0 and 1
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-200 font-sans selection:bg-cyan-900/50 selection:text-cyan-50 relative">
      
      {/* 1. Global Fixed Background Image */}
      <div 
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat transition-opacity duration-300"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2560&auto=format&fit=crop')" }}
      ></div>

      {/* 2. Global Depth Gradient Overlay (Gets darker as you scroll) */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none transition-all duration-100"
        style={{
          background: `linear-gradient(to bottom, rgba(1, 17, 29, ${0.7 + (scrollDepth * 0.25)}), rgba(0, 0, 0, ${0.85 + (scrollDepth * 0.15)}))`
        }}
      ></div>

      {/* 3. Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Architecture />
        <Variables />
        <Validation />
        <TechImpact />
        <Footer />
      </div>
      
      {/* 4. Scroll Depth Indicator (UI Polish) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none mix-blend-screen hidden xl:flex">
        <div className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest rotate-90 mb-8 drop-shadow-md">Surface</div>
        <div className="w-px h-32 bg-white/20 relative shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          <div 
            className="absolute top-0 left-0 w-full bg-cyan-400 transition-all duration-100 shadow-[0_0_10px_#06b6d4]"
            style={{ height: `${scrollDepth * 100}%` }}
          ></div>
        </div>
        <div className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest -rotate-90 mt-8 drop-shadow-md">Abyss</div>
      </div>
    </div>
  );
};

export default App;
