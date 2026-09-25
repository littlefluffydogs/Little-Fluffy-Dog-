import React from 'react';
import { Share2, GitFork } from 'lucide-react';

interface HeaderProps {
  onOpenShare: () => void;
  onOpenFork: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenShare, onOpenFork }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-serif font-bold tracking-tight text-stone-900 hover:text-amber-900 transition-colors whitespace-nowrap"
        >
          Replicate &amp; Repatriate
        </a>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#summary" className="hover:text-stone-950 transition-colors">
            Study
          </a>
          <a href="#proof-of-physics" className="hover:text-stone-950 transition-colors">
            Proof-of-Physics
          </a>
          <a href="#trl-roadmap" className="hover:text-stone-950 transition-colors">
            Architecture
          </a>
          <a href="#roi-model" className="hover:text-stone-950 transition-colors">
            10-Yr ROI
          </a>
          <a href="#draft-bill" className="hover:text-stone-950 transition-colors">
            Draft Bill
          </a>
          <a href="#petition" className="hover:text-stone-950 transition-colors">
            Petition
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenShare}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
            title="Share campaign and view memorable URLs"
          >
            <Share2 className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden sm:inline">Share Campaign</span>
            <span className="sm:hidden">Share</span>
          </button>

          <button
            onClick={onOpenFork}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            title="Fork and export policy framework (CC0 / MIT)"
          >
            <GitFork className="w-3.5 h-3.5 text-amber-200" />
            <span>Fork Policy</span>
          </button>
        </div>
      </div>
    </header>
  );
};
