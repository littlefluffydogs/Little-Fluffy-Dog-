import React from 'react';
import { Share2, GitFork } from 'lucide-react';
import { WHITEPAPER_META } from '../data/whitepaperData';

interface FooterProps {
  onOpenShare: () => void;
  onOpenFork: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShare, onOpenFork }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 text-xs font-sans border-t border-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-base font-serif font-bold text-stone-100 tracking-tight">
              Replicate &amp; Repatriate (R2)
            </div>
            <p className="text-stone-400 font-light leading-relaxed max-w-sm">
              "Return the Original. Keep the Twin. Build the Future." Strategic Feasibility Study and operational policy campaign establishing a UK-led national capability framework.
            </p>
            <div className="pt-1 font-mono text-[11px] text-amber-300">
              Ground Truth Hub: {WHITEPAPER_META.domainUrl}
            </div>
          </div>

          {/* Quick Anchors */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-semibold text-stone-200 uppercase tracking-wider text-[11px] font-mono">
              Framework Sections
            </div>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#summary" className="hover:text-stone-100 transition-colors">Executive Summary</a></li>
              <li><a href="#proof-of-physics" className="hover:text-stone-100 transition-colors">Proof-of-Physics 3D WebGL</a></li>
              <li><a href="#trl-roadmap" className="hover:text-stone-100 transition-colors">TRL &amp; Engineering Pipeline</a></li>
              <li><a href="#roi-model" className="hover:text-stone-100 transition-colors">10-Year Macroeconomic Model</a></li>
              <li><a href="#draft-bill" className="hover:text-stone-100 transition-colors">Draft Restitution Bill</a></li>
              <li><a href="#petition" className="hover:text-stone-100 transition-colors">UK Parliamentary Petition</a></li>
            </ul>
          </div>

          {/* Operational Tools */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-stone-200 uppercase tracking-wider text-[11px] font-mono">
              Deployment &amp; Governance
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Hosted on Google Cloud at <code className="text-stone-200">www.littlefluffydog.com/repatriate</code>. Built under open-source governance (CC0 1.0 Universal).
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={onOpenShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-amber-300" />
                <span>Share Campaign Link</span>
              </button>
              <button
                onClick={onOpenFork}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors cursor-pointer"
              >
                <GitFork className="w-3.5 h-3.5 text-amber-300" />
                <span>Fork Policy Repository</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            Published by the Replicate &amp; Repatriate Policy Working Group · Licensed under Creative Commons Zero (CC0 1.0 Universal).
          </div>
          <div className="flex items-center gap-4">
            <span>THJ Systems v Sheridan [2023] EWCA Civ 1354 Compliant</span>
            <span>·</span>
            <span>C2PA Standard v1.4</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
