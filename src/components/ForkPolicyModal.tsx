import React, { useState } from 'react';
import { X, GitFork, Download, Copy, Check, Terminal, FileCode, CheckCircle2 } from 'lucide-react';
import { DRAFT_BILL_FULL_TEXT, WHITEPAPER_META } from '../data/whitepaperData';

interface ForkPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForkPolicyModal: React.FC<ForkPolicyModalProps> = ({ isOpen, onClose }) => {
  const [selectedLicense, setSelectedLicense] = useState<'cc0' | 'mit'>('cc0');
  const [targetSovereignty, setTargetSovereignty] = useState<string>('greece');
  const [copiedCli, setCopiedCli] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  if (!isOpen) return null;

  const adaptationTemplates: Record<string, { nation: string; body: string; act: string; notes: string }> = {
    greece: {
      nation: "Hellenic Republic (Greece)",
      body: "Ministry of Culture / Acropolis Museum, Athens",
      act: "Bilateral Co-Funding Treaty & Parthenon Sculptures Reunification Protocol",
      notes: "50/50 matching funds for Pentelic marble quarrying and 7-axis robotic milling; physical originals reunited with Acropolis frieze; dual-custody OpenUSD digital twin."
    },
    nigeria: {
      nation: "Federal Republic of Nigeria",
      body: "National Commission for Museums and Monuments (NCMM) / Edo Museum of West African Art (EMOWAA)",
      act: "Benin Bronzes Sovereign Restitution and Heritage Technology Transfer Agreement",
      notes: "100% UK ODA grant funded under OECD DAC guidelines; vacuum investment casting replicas retained in London; MA-XRF copper-tin metallurgy data transferred."
    },
    india: {
      nation: "Republic of India",
      body: "Archaeological Survey of India (ASI) / Ministry of Culture",
      act: "Amaravati Stupa Sculptures and Colonial Heritage Restitution Framework",
      notes: "Sub-micron photogrammetric scan of limestone relief slabs; high-precision CNC reproduction for British Museum gallery; originals returned to Andhra Pradesh."
    },
    egypt: {
      nation: "Arab Republic of Egypt",
      body: "Supreme Council of Antiquities / Grand Egyptian Museum (GEM)",
      act: "Rosetta Stone Trilingual Stela Repatriation & Micro-CT Epigraphy Protocol",
      notes: "Micro-CT internal scan and ultra-high resolution multispectral epigraphic imaging; granite synthetic replica installed in Enlightenment Gallery."
    }
  };

  const selectedTemplate = adaptationTemplates[targetSovereignty];

  const githubExportScript = `# 1. Clone or initialize your policy fork repository
git init cultural-heritage-restitution-policy
cd cultural-heritage-restitution-policy

# 2. Download the Ground Truth Framework Bundle
curl -sO https://littlefluffydog.com/r2/export/whitepaper.md
curl -sO https://littlefluffydog.com/r2/export/draft_bill.md
curl -sO https://littlefluffydog.com/r2/export/c2pa_manifest.json
curl -sO https://littlefluffydog.com/r2/export/financial_model.csv

# 3. Commit under ${selectedLicense.toUpperCase()} license
echo "Licensed under ${selectedLicense === 'cc0' ? 'Creative Commons Zero v1.0 Universal' : 'MIT License'}" > LICENSE
git add .
git commit -m "feat: initial commit of sovereign heritage restitution framework"
git branch -M main

# 4. Push to your organization's GitHub
gh repo create cultural-heritage-r2-${targetSovereignty} --public --source=. --remote=origin --push`;

  const handleCopyCli = () => {
    navigator.clipboard.writeText(githubExportScript);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const handleDownloadAll = () => {
    const bundleText = `# CULTURAL HERITAGE RESTITUTION AND ADVANCED MANUFACTURING POLICY REPOSITORY
# Sovereign Adaptation: ${selectedTemplate.nation}
# Governing License: ${selectedLicense.toUpperCase()}
# Single Source of Truth: ${WHITEPAPER_META.domainUrl}

=========================================
SECTION 1: STATUTORY DRAFT BILL
=========================================
${DRAFT_BILL_FULL_TEXT}

=========================================
SECTION 2: SOVEREIGN ADAPTATION DIRECTIVE
=========================================
Target Sovereign State: ${selectedTemplate.nation}
Designated Cultural Authority: ${selectedTemplate.body}
Instrument: ${selectedTemplate.act}
Technical & Financial Framework: ${selectedTemplate.notes}
`;

    const element = document.createElement("a");
    const file = new Blob([bundleText], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = `policy_fork_${targetSovereignty}_${selectedLicense}.md`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-stone-900 text-amber-200">
              <GitFork className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                Fork This Policy: Open-Source Governance Framework
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                Adapt the Replicate &amp; Repatriate capability model for international parliaments, ministries &amp; advocacy groups.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm font-sans">
          
          {/* License Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2 font-mono">
              1. Choose Open Governance License
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedLicense('cc0')}
                className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                  selectedLicense === 'cc0'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs">CC0 1.0 Universal</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300">
                    Recommended
                  </span>
                </div>
                <p className={`text-[11px] mt-1 ${selectedLicense === 'cc0' ? 'text-stone-300' : 'text-stone-500'}`}>
                  Public Domain Dedication. Fully unencumbered compliance with THJ v Sheridan appellate case law.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLicense('mit')}
                className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                  selectedLicense === 'mit'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <span className="font-semibold text-xs">MIT Permissive License</span>
                <p className={`text-[11px] mt-1 ${selectedLicense === 'mit' ? 'text-stone-300' : 'text-stone-500'}`}>
                  Requires attribution notice in derivative software, CAD toolpaths, and legislative briefs.
                </p>
              </button>
            </div>
          </div>

          {/* Sovereign Adaptation Presets */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2 font-mono">
              2. Target Legislature / Origin State Adaptation
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'greece', name: 'Greece (Acropolis)' },
                { id: 'nigeria', name: 'Nigeria (Benin)' },
                { id: 'india', name: 'India (Amaravati)' },
                { id: 'egypt', name: 'Egypt (Rosetta)' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTargetSovereignty(item.id)}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer text-xs ${
                    targetSovereignty === item.id
                      ? 'bg-amber-900 text-white border-amber-900 font-medium'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Adaptation Details Box */}
            <div className="mt-3 p-3.5 bg-stone-50 rounded-lg border border-stone-200 space-y-1 text-xs">
              <div className="font-medium text-stone-900">
                {selectedTemplate.nation} · {selectedTemplate.body}
              </div>
              <div className="text-stone-600 font-sans leading-relaxed">
                {selectedTemplate.notes}
              </div>
            </div>
          </div>

          {/* GitHub CLI Terminal Snippet */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 font-mono flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-stone-700" />
                3. Clone / Fork via GitHub CLI
              </span>
              <button
                onClick={handleCopyCli}
                className="flex items-center gap-1 text-xs text-amber-900 hover:text-amber-950 font-semibold cursor-pointer"
              >
                {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCli ? 'Copied CLI Command' : 'Copy Commands'}</span>
              </button>
            </div>

            <pre className="p-3 bg-stone-900 text-stone-200 rounded-lg font-mono text-[11px] overflow-x-auto select-all border border-stone-800">
              {githubExportScript}
            </pre>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-200" />
              <span>Download Complete Policy Bundle (.MD)</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
