import React from 'react';
import { ArrowRight, Eye, FileText, Vote, Share2, ShieldCheck, ExternalLink } from 'lucide-react';
import { WHITEPAPER_META } from '../data/whitepaperData';

interface HeroSectionProps {
  onExplore3D: () => void;
  onReadBill: () => void;
  onSignPetition: () => void;
  onOpenShare: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore3D,
  onReadBill,
  onSignPetition,
  onOpenShare,
}) => {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 border-b border-stone-200">
      {/* Background subtle atmospheric grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#D6CEBE 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Archival metadata kicker - unboxed, no pill badges */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-stone-500 uppercase tracking-widest font-mono mb-3">
          <span className="text-amber-900 font-semibold">UK National Capability Framework</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-stone-800 font-medium">www.littlefluffydog.com/repatriate</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <a
            href={WHITEPAPER_META.petitionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 hover:text-emerald-950 font-bold underline underline-offset-2 flex items-center gap-1"
          >
            <span>Live Parliament Petition #{WHITEPAPER_META.petitionId}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Memorable Campaign Slogan */}
        <div className="mb-4">
          <span className="text-sm sm:text-base font-serif italic text-amber-950/90 font-medium">
            "Return the Original. Keep the Twin. Build the Future."
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-stone-900 leading-[1.08] text-balance">
              Transitioning Cultural Custody from Physical Hoarding to Technological Stewardship.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-700 font-light leading-relaxed max-w-2xl text-pretty">
              An operational policy and industrial blueprint to resolve long-standing restitution disputes—including the Parthenon Sculptures and Benin Bronzes—through sub-micron metrology digital twins, C2PA cryptographic provenance, and 7-axis robotic material synthesis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onExplore3D}
                className="flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all cursor-pointer hover:translate-y-[-1px]"
              >
                <Eye className="w-4 h-4 text-amber-200" />
                <span>Launch Proof-of-Physics 3D</span>
              </button>

              <button
                onClick={onReadBill}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>Read Draft Restitution Bill</span>
              </button>

              <a
                href={WHITEPAPER_META.petitionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg shadow-sm transition-all cursor-pointer hover:translate-y-[-1px]"
                title="Sponsor and sign official UK Parliamentary petition"
              >
                <Vote className="w-4 h-4 text-emerald-200" />
                <span>Sign Petition #{WHITEPAPER_META.petitionId} ↗</span>
              </a>

              <button
                onClick={onOpenShare}
                className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-medium text-amber-900 hover:text-amber-950 hover:bg-amber-100/60 rounded-lg transition-colors cursor-pointer"
                title="View memorable URLs and share hooks"
              >
                <Share2 className="w-4 h-4 text-amber-800" />
                <span>Share</span>
              </button>
            </div>

            {/* Adjacent Quantitative Proof Strip */}
            <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 tabular-nums">
                  £13.5M
                </div>
                <div className="text-xs text-stone-500 font-sans mt-0.5">
                  Net Savings / Asset (89%)
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 tabular-nums">
                  3,100
                </div>
                <div className="text-xs text-stone-500 font-sans mt-0.5">
                  High-Tech FTE UK Jobs
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 tabular-nums">
                  &lt; 10 µm
                </div>
                <div className="text-xs text-stone-500 font-sans mt-0.5">
                  Sub-Micron Laser Metrology
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900">
                  C2PA + CC0
                </div>
                <div className="text-xs text-stone-500 font-sans mt-0.5">
                  Dual-Custody IP Protocol
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Graphic Preview Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-stone-300 bg-stone-900 text-stone-100 p-6 shadow-xl overflow-hidden">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 text-xs text-stone-400 font-mono">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  C2PA Provenance Manifest
                </span>
                <span className="tabular-nums">AMRC-NPL-2026.04</span>
              </div>

              {/* Visual simulated artifact metrology snapshot */}
              <div className="my-5 relative rounded-lg bg-black/60 p-4 border border-stone-800 flex flex-col items-center justify-center text-center min-h-[220px]">
                {/* SVG Artistic Wireframe / Point Cloud Representation */}
                <svg className="w-44 h-44 text-amber-200/80 drop-shadow-[0_0_12px_rgba(251,191,36,0.25)]" viewBox="0 0 200 200" fill="none">
                  {/* Classical equine Selene horse contour in dots and lines */}
                  <path d="M40 140 C 50 110, 70 85, 95 70 C 120 55, 140 50, 160 55 C 170 65, 175 80, 165 95 C 150 115, 130 135, 100 150 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"/>
                  <circle cx="100" cy="100" r="65" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="85" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" strokeDasharray="4 6"/>
                  
                  {/* Point cloud density clusters */}
                  <g fill="#FDE68A" opacity="0.85">
                    <circle cx="95" cy="70" r="1.5"/>
                    <circle cx="110" cy="65" r="1.2"/>
                    <circle cx="125" cy="60" r="1.8"/>
                    <circle cx="140" cy="60" r="1.4"/>
                    <circle cx="155" cy="70" r="1.5"/>
                    <circle cx="160" cy="85" r="1.6"/>
                    <circle cx="145" cy="100" r="1.3"/>
                    <circle cx="130" cy="115" r="1.5"/>
                    <circle cx="115" cy="130" r="1.7"/>
                    <circle cx="95" cy="140" r="1.4"/>
                    <circle cx="75" cy="130" r="1.2"/>
                    <circle cx="60" cy="115" r="1.5"/>
                    <circle cx="75" cy="95" r="1.3"/>
                    <circle cx="90" cy="90" r="1.6"/>
                    <circle cx="105" cy="85" r="1.8"/>
                    <circle cx="120" cy="80" r="1.4"/>
                    <circle cx="135" cy="85" r="1.5"/>
                    <circle cx="145" cy="90" r="1.2"/>
                    <circle cx="100" cy="100" r="2.0"/>
                    <circle cx="115" cy="105" r="1.5"/>
                    <circle cx="85" cy="110" r="1.4"/>
                    <circle cx="100" cy="120" r="1.5"/>
                  </g>
                  
                  {/* Laser scanning triangulation beam */}
                  <line x1="20" y1="40" x2="180" y2="40" stroke="#38BDF8" strokeWidth="1" opacity="0.75" />
                  <line x1="100" y1="40" x2="100" y2="160" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
                </svg>

                <div className="mt-2 text-xs font-mono text-stone-300">
                  Pentelic Marble Digital Twin · Selene Horse Head
                </div>
                <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                  148.2M Data Points · Spatial Deviation &lt; 0.008mm
                </div>
              </div>

              {/* Hardware & Statutory Verification Grid */}
              <div className="space-y-2 text-xs font-mono text-stone-400">
                <div className="flex justify-between items-center py-1 border-b border-stone-800">
                  <span className="text-stone-500">Capture Spectrum:</span>
                  <span className="text-stone-300">Blue Laser (450nm) + Micro-CT</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-800">
                  <span className="text-stone-500">Hardware HSM:</span>
                  <span className="text-stone-300">Thales Luna PCIe (FIPS 140-3)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-800">
                  <span className="text-stone-500">Physical Replica:</span>
                  <span className="text-stone-300">7-Axis Robotor Diamond Milling</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-stone-500">Repatriation Term:</span>
                  <span className="text-amber-400 font-semibold">100% Zero-Cost Sovereign Return</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-400">Interactive WebGL viewer available</span>
                <button
                  onClick={onExplore3D}
                  className="text-xs font-sans font-medium text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
                >
                  Enter Metrology Lab
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
