import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Printer, 
  ScrollText, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Cpu, 
  Landmark, 
  Scale, 
  Globe 
} from 'lucide-react';
import { 
  WHITEPAPER_META, 
  TRL_ROADMAP_DATA, 
  REFERENCES_LIST, 
  DRAFT_BILL_FULL_TEXT 
} from '../data/whitepaperData';

type WhitepaperTab = 'reader' | 'bill' | 'trl' | 'markdown' | 'references';

export const WhitepaperReader: React.FC = () => {
  const [activeTab, setActiveTab] = useState<WhitepaperTab>('reader');
  const [copiedMd, setCopiedMd] = useState(false);
  const [refFilter, setRefFilter] = useState<string>('All');

  const fullMarkdownString = `# ${WHITEPAPER_META.title}
## ${WHITEPAPER_META.subtitle}
**Author:** ${WHITEPAPER_META.author} | **Date:** ${WHITEPAPER_META.date} | **Hub:** ${WHITEPAPER_META.domainUrl}

---

### 1. Executive Feasibility Summary
The national cultural institutions of the United Kingdom maintain stewardship over some of the world's most historically significant cultural artifacts, including the Parthenon Sculptures, the Benin Bronzes, and the Rosetta Stone. However, maintaining physical custody over contested colonial-era artifacts exposes the nation to persistent diplomatic friction, legal challenges, reputational erosion, and significant multi-decadal security and conservation expenditures.

This strategic feasibility study evaluates a transformative framework: the UK-led "Replicate & Repatriate" national capability model. The core thesis asserts that by transitioning from physical artifact hoarding to dynamic technological stewardship, the UK can resolve long-standing restitution disputes while establishing an advanced domestic industrial ecosystem in sub-micron metrology, spatial computing, robotic fabrication, and material science.

Under this operational framework, advanced non-destructive analytical metrology and automated robotic manufacturing technologies are deployed to capture sub-micron digital twins and fabricate material-identical physical replicas of contested artifacts. The physical originals are unconditionally repatriated to their sovereign nations of origin. Simultaneously, the UK retains shared non-exclusive rights to the digital twin assets and places high-fidelity physical replicas on public display within UK institutions.

Seed Capital Expenditure (CapEx) allocated to this pipeline flows directly into the UK's advanced manufacturing infrastructure, specifically targeting translational research facilities such as the High Value Manufacturing Catapult (HVMC) network. This investment generates compounding returns through dual-use technology spinoffs across aerospace metrology, precision defense manufacturing, nuclear robotics, and trust-verifiable spatial computing architecture.

---

### 2. Vector 1: Technological Architecture & Metrology Infrastructure
Capturing an artifact's full geometric, internal, and chemical state requires a multi-sensor diagnostic suite capable of non-destructive characterization across multiple spatial scales.

- **Surface Optical Metrology:** Sub-micron 3D laser triangulation scanners paired with blue structured light photogrammetry arrays operating at 450nm (minimizing sub-surface light scattering on crystalline marble such as Pentelic or Carrara marble, achieving surface mesh resolutions < 10 µm).
- **Industrial Micro-CT Scanning:** Industrial X-ray Computed Tomography exposes sub-surface stress fractures, material density variations, internal restoration pins, and casting voids without physical core sampling.
- **Elemental & Molecular Diagnostics:**
  - Macro X-ray Fluorescence (MA-XRF) & Portable XRF (pXRF) for spatial elemental mapping and alloy composition.
  - Hyperspectral Imaging (HSI) & Fiber Optics Reflectance Spectroscopy (FORS) (350nm - 2500nm).
  - Micro-Raman & Fourier Transform Infrared (FTIR) Spectroscopy for molecular identification.
- **Physical Synthesis:** 7-axis robotic CNC milling cells (Robotor) carving authentic Pentelic marble, metal binder jetting additive manufacturing combined with vacuum investment casting for bronze, and micro-dispensing inkjet polychromy aging.
- **Cryptographic Provenance:** C2PA manifests bound via Hardware Security Modules (HSMs) on scanners, OpenUSD, and glTF 2.0.

---

### 3. Vector 2: Economic ROI & Industrial Capability Building
Transforms recurring museum indemnity, storage, and legal liabilities into durable UK advanced manufacturing assets:
- **Aerospace & Space Engineering:** Sub-micron optical metrology translates directly to quality assurance for jet turbine blades and composite aerostructures.
- **Nuclear Decommissioning:** Multi-axis toolpaths and closed-loop algorithms enable autonomous tele-operation and milling in hazardous nuclear environments.
- **Defense Metrology:** C2PA hardware signing provides tamper-proof provenance for aerial reconnaissance and terrain mapping.
- **Biomedical Engineering:** Binder-jet additive manufacturing accelerates production of custom bio-compatible bone implants.
- **Tiered Financing:** 50/50 cost sharing with G20 wealthy partners (e.g. Greece for Parthenon sculptures); 100% UK funding via Official Development Assistance (ODA) budget under OECD DAC rules for developing nations (e.g. Nigeria for Benin Bronzes).
- **30-Year Horizon:** Converts £15,000,000 in legacy physical retention costs to £1,500,000 under Replicate & Repatriate (£13,500,000 net savings / 89% cost reduction per major asset).

---

### 4. Vector 3: Legislative & Institutional Governance Reform
- **Statutory Modernization:** Amends British Museum Act 1963 Section 3(4) and Section 5; amends National Heritage Act 1983 Section 6.
- **Post-THJ v Sheridan [2023] EWCA Civ 1354 Jurisprudence:** Eliminates "skill and labour" copyright over raw 3D scans. Establishes Dual-Custody Spatial Governance: Raw scans released into Public Domain under Creative Commons Zero (CC0); C2PA manifest enforces provenance; commercial VR/AR creative derivatives protected with 50/50 profit sharing with origin sovereign states.
- **Ethical Restitution:** 100% zero-cost repatriation. No custody fees, transport charges, or buy-back demands.

---

### 5. Vector 4: Geopolitical, Soft Power & Diplomatic Strategy
- Converts multi-decadal legal stagnation into proactive cultural diplomacy.
- Unlocks bilateral trade, defense, and energy treaties across Mediterranean, West Africa, and South Asia.
- Positions the UK as global standard-setter and exporter of advanced heritage engineering.

---

### 6. Draft Legislative Brief
${DRAFT_BILL_FULL_TEXT}
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(fullMarkdownString);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const element = document.createElement("a");
    const file = new Blob([fullMarkdownString], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = "Strategic_Feasibility_Study_Replicate_Repatriate_UK.md";
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredReferences = refFilter === 'All' 
    ? REFERENCES_LIST 
    : REFERENCES_LIST.filter(r => r.category === refFilter);

  return (
    <section id="whitepaper" className="py-16 md:py-24 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header with Tab Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-stone-200 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-900 mb-2">
              <ScrollText className="w-3.5 h-3.5 text-amber-800" />
              <span>Whitepaper &amp; Statutory Repository</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Official Ground Truth Document</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 text-balance">
              Strategic Feasibility Study &amp; Draft Parliamentary Bill.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 font-light max-w-2xl text-pretty">
              The complete unassailable research study, technical metrology pipeline, technology readiness roadmap, and statutory amendments to the British Museum Act 1963.
            </p>
          </div>

          {/* Action Utilities */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md shadow-xs transition-colors cursor-pointer"
              title="Print document or save as clean PDF"
            >
              <Printer className="w-3.5 h-3.5 text-stone-500" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md shadow-xs transition-colors cursor-pointer"
              title="Download unedited Markdown source"
            >
              <Download className="w-3.5 h-3.5 text-stone-500" />
              <span>Download .MD</span>
            </button>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pb-4 border-b border-stone-200">
          <button
            onClick={() => setActiveTab('reader')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'reader'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>01. Editorial Reading View</span>
          </button>

          <button
            onClick={() => setActiveTab('bill')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'bill'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>02. Draft Restitution Bill</span>
          </button>

          <button
            onClick={() => setActiveTab('trl')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'trl'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>03. TRL &amp; Metrology Roadmap</span>
          </button>

          <button
            onClick={() => setActiveTab('markdown')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'markdown'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>04. Raw Markdown Source</span>
          </button>

          <button
            onClick={() => setActiveTab('references')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'references'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>05. Works Cited ({REFERENCES_LIST.length})</span>
          </button>
        </div>

        {/* Tab 1: Editorial Reader */}
        {activeTab === 'reader' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Asymmetric Prose Column (70%) */}
            <article className="lg:col-span-8 space-y-12 text-stone-800 leading-relaxed font-serif">
              
              {/* Executive Summary */}
              <section id="summary" className="space-y-4">
                <div className="text-xs uppercase font-sans tracking-widest text-amber-900 font-semibold">
                  Section 1 · Executive Feasibility Summary
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-stone-900 leading-snug">
                  The National Capability Thesis
                </h3>
                
                <p className="text-base sm:text-lg text-stone-700 leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
                  The national cultural institutions of the United Kingdom maintain stewardship over some of the world's most historically significant cultural artifacts, including the Parthenon Sculptures, the Benin Bronzes, and the Rosetta Stone. However, maintaining physical custody over contested colonial-era artifacts exposes the nation to persistent diplomatic friction, legal challenges, reputational erosion, and significant multi-decadal security and conservation expenditures.
                </p>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                  This strategic feasibility study evaluates a transformative framework: the UK-led <strong>"Replicate &amp; Repatriate"</strong> national capability model. The core thesis asserts that by transitioning from physical artifact hoarding to dynamic technological stewardship, the UK can resolve long-standing restitution disputes while establishing an advanced domestic industrial ecosystem in sub-micron metrology, spatial computing, robotic fabrication, and material science.
                </p>

                {/* Editorial Pull Quote */}
                <div className="my-8 py-4 px-6 border-l-2 border-amber-900 bg-amber-50/50 rounded-r-lg">
                  <p className="text-xl italic text-stone-900 font-serif leading-snug">
                    "Seed capital allocated to this pipeline flows directly into the High Value Manufacturing Catapult network—compounding returns across aerospace metrology, defense sensing, and nuclear robotics."
                  </p>
                  <div className="mt-2 text-xs font-sans text-stone-500 uppercase tracking-wider">
                    Executive Summary · Strategic Feasibility Study 2026
                  </div>
                </div>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                  Under this operational framework, advanced non-destructive analytical metrology and automated robotic manufacturing technologies are deployed to capture sub-micron digital twins and fabricate material-identical physical replicas of contested artifacts. The physical originals are unconditionally repatriated to their sovereign nations of origin. Simultaneously, the UK retains shared non-exclusive rights to the digital twin assets and places high-fidelity physical replicas on public display within UK institutions.
                </p>
              </section>

              <hr className="border-stone-200" />

              {/* Vector 1: Metrology */}
              <section className="space-y-4">
                <div className="text-xs uppercase font-sans tracking-widest text-amber-900 font-semibold">
                  Section 2 · Vector 1: Technological Architecture
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-stone-900 leading-snug">
                  Sub-Micron Metrology &amp; Precision Material Replication
                </h3>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                  Capturing an artifact's full geometric, internal, and chemical state requires a multi-sensor diagnostic suite capable of non-destructive characterization across multiple spatial scales. Operating in the blue light spectrum (λ ≈ 450 nm) minimizes sub-surface light scattering on translucent crystalline materials such as Pentelic or Carrara marble, achieving spatial surface mesh resolutions below 10 µm.
                </p>

                <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                  <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 space-y-1.5">
                    <strong className="text-stone-900 block text-sm">Industrial Micro-CT</strong>
                    <p className="text-stone-600">Exposes sub-surface stress fractures, material density variations, internal restoration pins, and casting voids without physical core sampling.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 space-y-1.5">
                    <strong className="text-stone-900 block text-sm">MA-XRF &amp; FORS Spectroscopy</strong>
                    <p className="text-stone-600">Macro X-ray fluorescence and fiber optics reflectance spectroscopy map inorganic pigments and trace copper-tin-zinc ratios.</p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                  Translating metrological datasets into physical replicas requires hybrid manufacturing processes tailored to specific material substrates. For lithic assets, high-fidelity marble carving utilizes 7-axis robotic CNC milling cells (Robotor) equipped with diamond-coated rotary tools, sourced from historic quarry veins such as Mount Pentelicus. For metallic assets such as the Benin Bronzes, physical synthesis employs metal binder jetting additive manufacturing combined with precision investment vacuum casting.
                </p>
              </section>

              <hr className="border-stone-200" />

              {/* Vector 3: Legislation & THJ v Sheridan */}
              <section className="space-y-4">
                <div className="text-xs uppercase font-sans tracking-widest text-amber-900 font-semibold">
                  Section 3 · Vector 3: Governance &amp; Post-Sheridan Jurisprudence
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-stone-900 leading-snug">
                  Dual-Custody Spatial Governance &amp; Statutory Modernization
                </h3>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                  Under the Court of Appeal ruling in <em>THJ Systems Ltd v Sheridan [2023] EWCA Civ 1354</em>, UK copyright law aligned strictly with European Union originality standards. Copyright protection requires a work to constitute the "author's own intellectual creation," reflecting free and creative authorial choices. This precedent eliminated the historical "skill and labour" doctrine for non-creative digital scans.
                </p>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                  Consequently, raw 3D laser scans and volumetric meshes of public domain artifacts do not generate new copyright protection. The UK framework establishes a tripartite governance architecture:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-stone-700 text-base font-sans">
                  <li><strong>Raw Spatial Metrology Data:</strong> Dedicated to the public domain under Creative Commons Zero (CC0).</li>
                  <li><strong>Cryptographic Provenance Manifests:</strong> C2PA metadata permanently bound to digital assets to guarantee institutional provenance.</li>
                  <li><strong>Commercial VR/AR Derivative Products:</strong> Curated virtual environments retain derivative copyright, with commercial revenues split 50/50 with origin state cultural ministries.</li>
                </ul>
              </section>

            </article>

            {/* Asymmetric Margin Sidebar Column (30%) */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Document Overview Box */}
              <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-4 shadow-xs">
                <h4 className="text-xs uppercase font-mono tracking-wider text-stone-400 pb-2 border-b border-stone-100">
                  Document Identity
                </h4>
                <div className="space-y-2 text-xs font-sans text-stone-600">
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Classification:</span>
                    <span className="font-medium text-stone-900">Strategic Feasibility Study</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Domain URL:</span>
                    <span className="font-mono text-amber-900 font-medium">www.littlefluffydog.com/repatriate</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Jurisprudence:</span>
                    <span className="text-stone-900">THJ v Sheridan [2023]</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-stone-400">License:</span>
                    <span className="font-semibold text-emerald-700">CC0 1.0 Public Domain</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('bill')}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
                >
                  <Scale className="w-3.5 h-3.5 text-stone-700" />
                  <span>View Proposed Statutory Bill</span>
                </button>
              </div>

              {/* Research Facilities Spinoff Note */}
              <div className="rounded-xl border border-amber-900/20 bg-amber-50/60 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-900">
                  <Cpu className="w-4 h-4 text-amber-800" />
                  <span>Translational Spinoff Facilities</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Seed investment directly targets facilities within the <strong>High Value Manufacturing Catapult (HVMC)</strong>, including the Advanced Manufacturing Research Centre (AMRC) in Sheffield and Warwick Manufacturing Group (WMG).
                </p>
                <div className="pt-2 text-[11px] text-stone-500 font-sans">
                  Dual-use applications include jet turbine blade inspection, composite aerostructures, and nuclear decommissioning robotics.
                </div>
              </div>

              {/* Ethical Standards Callout */}
              <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero-Cost Sovereign Repatriation</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Origin states are never subjected to custody fees, "buy-back" demands, or operational scanning charges. All costs are fully absorbed via UK capability CapEx, G20 50/50 matching, or OECD DAC Official Development Assistance (ODA).
                </p>
              </div>

            </aside>
          </div>
        )}

        {/* Tab 2: Draft Restitution Bill */}
        {activeTab === 'bill' && (
          <div id="draft-bill" className="mt-8 rounded-xl border border-stone-300 bg-white p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
            
            <div className="border-b-2 border-stone-900 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-1">
                  Draft Parliamentary Legislation · 2026 Session
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Cultural Heritage Restitution and Advanced Manufacturing Bill
                </h3>
              </div>
              <div className="text-xs font-mono text-stone-500 whitespace-nowrap">
                Bill Ref: CHRAM-2026-UK
              </div>
            </div>

            <div className="space-y-8 font-serif text-stone-800 leading-relaxed">
              
              <div className="p-4 bg-stone-50 border-l-2 border-stone-800 italic text-stone-700 text-sm sm:text-base">
                A BILL TO Grant boards of trustees of national museums and heritage institutions explicit authority to de-accession and transfer legal title of contested cultural artifacts contingent upon the creation of accredited physical replicas and cryptographic digital twins; to amend the British Museum Act 1963 and the National Heritage Act 1983; and for connected purposes.
              </div>

              {/* Clause 1: British Museum Act 1963 */}
              <div className="space-y-3">
                <h4 className="text-lg font-serif font-bold text-stone-900">
                  1. Statutory Amendment 1: Amendment to the British Museum Act 1963
                </h4>
                <div className="pl-4 border-l border-stone-300 space-y-2 text-sm sm:text-base font-sans">
                  <p className="font-semibold text-stone-900 font-serif">
                    Insertion of Section 5A (De-accessioning under the National Capability Framework):
                  </p>
                  <p>
                    (1) Notwithstanding section 3(4) and section 5(1) of this Act, the Trustees of the British Museum may divest, transfer, or permanently de-accession any object vested in them and contained within the collections of the Museum if the conditions set out in subsection (2) are satisfied.
                  </p>
                  <p>(2) The conditions referred to in subsection (1) are that—</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-stone-700">
                    <li>(a) A formal request for the return of the object has been submitted by a recognized sovereign state or cultural representative body;</li>
                    <li>(b) The Trustees are satisfied that the object has undergone full sub-micron 3D metrological capture, volumetric micro-CT analysis, and non-destructive elemental characterization in accordance with National Capability Standards;</li>
                    <li>(c) A verified, C2PA-compliant cryptographic digital twin asset has been registered within the National Heritage Spatial Registry; and</li>
                    <li>(d) A material-identical physical replica has been fabricated and certified by an accredited manufacturing body as suitable for public display in place of the original object.</li>
                  </ul>
                  <p>
                    (3) Upon completion of the conditions in subsection (2), legal title to the physical original shall transfer unconditionally to the designated recipient authority. The Board of Trustees shall retain a non-exclusive, perpetual right to utilize the generated digital twin asset for public display, education, and academic research.
                  </p>
                </div>
              </div>

              {/* Clause 2: National Heritage Act 1983 */}
              <div className="space-y-3">
                <h4 className="text-lg font-serif font-bold text-stone-900">
                  2. Statutory Amendment 2: Amendment to the National Heritage Act 1983
                </h4>
                <div className="pl-4 border-l border-stone-300 space-y-2 text-sm sm:text-base font-sans">
                  <p className="font-semibold text-stone-900 font-serif">
                    Insertion of Section 6A (Powers of Trustees of V&amp;A, Science Museum, and Royal Armouries):
                  </p>
                  <p>
                    (1) The Board of Trustees of the Victoria and Albert Museum, the Science Museum Group, and the Royal Armouries shall have power to dispose of any object vested in them if such disposal is executed pursuant to an accredited Replicate &amp; Repatriate Agreement.
                  </p>
                  <p>(2) An Agreement under subsection (1) must mandate that—</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-stone-700">
                    <li>(a) The full operational cost of scanning, digital twin generation, robotic fabrication, and transport is absorbed by the institutional capability framework or allocated grant funding streams; and</li>
                    <li>(b) The physical original is transferred free of all custody fees, storage indemnities, or purchase demands.</li>
                  </ul>
                </div>
              </div>

              {/* Explanatory Notes & Fiduciary Protections */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <h4 className="text-lg font-serif font-bold text-stone-900">
                  3. Explanatory Notes and Fiduciary Protections
                </h4>
                <p className="text-stone-700 text-sm sm:text-base">
                  The proposed statutory amendments resolve the legal impasses that currently restrict national museum trustees. By explicitly defining sub-micron scanning and high-fidelity physical replication as statutory prerequisites for disposal, the legislation ensures that de-accessioning cannot occur arbitrarily or result in the loss of educational value.
                </p>
                <p className="text-stone-700 text-sm sm:text-base">
                  Furthermore, the Act clarifies that transferring physical originals under an accredited capability agreement—while securing material-identical display replicas and open-access digital twins—fully satisfies the statutory duty of trustees to care for, preserve, and exhibit public collections. Finally, the statutory text explicitly incorporates the legal standards established in <em>THJ Systems v Sheridan [2023] EWCA Civ 1354</em>.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: TRL Roadmap */}
        {activeTab === 'trl' && (
          <div id="trl-roadmap" className="mt-8 space-y-8">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-serif font-medium text-stone-900">
                Technology Readiness Level (TRL) Roadmap
              </h3>
              <p className="mt-1 text-sm text-stone-600 font-sans">
                Translating experimental academic research into robust industrial catapult facilities across a 5-year timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRL_ROADMAP_DATA.map((h, idx) => (
                <div key={idx} className="rounded-xl border border-stone-200 bg-white p-6 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
                      {h.horizon} · {h.timeline}
                    </span>
                    <span className="text-xs font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-700 border border-stone-200">
                      {h.targetTrl}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-semibold text-stone-900">
                    {h.technicalFocusArea}
                  </h4>

                  <ul className="space-y-2 text-xs font-sans text-stone-600">
                    {h.primaryDeliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Diagnostic Instrumentation Matrix */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <h4 className="text-base font-serif font-semibold text-stone-900">
                Multi-Sensor Metrological Instrumentation Suite
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="font-semibold text-stone-900">450nm Blue Laser</div>
                  <div className="text-stone-500 mt-1">Eliminates translucent subsurface scattering on Pentelic marble. &lt; 10 µm mesh resolution.</div>
                </div>
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="font-semibold text-stone-900">Industrial Micro-CT</div>
                  <div className="text-stone-500 mt-1">Volumetric X-ray tomography revealing casting voids, density gradients, and repair pins.</div>
                </div>
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="font-semibold text-stone-900">MA-XRF &amp; FTIR</div>
                  <div className="text-stone-500 mt-1">Non-destructive elemental mapping of copper-tin alloys and ancient polychrome mineral binders.</div>
                </div>
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="font-semibold text-stone-900">7-Axis Robotor CNC</div>
                  <div className="text-stone-500 mt-1">Automated diamond milling with laser interferometric closed-loop real-time toolpath correction.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Raw Markdown */}
        {activeTab === 'markdown' && (
          <div className="mt-8 rounded-xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-600">
                <FileText className="w-4 h-4 text-amber-900" />
                <span>Raw Markdown Repository · Ground Truth Document</span>
              </div>

              <button
                onClick={handleCopyMarkdown}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
              >
                {copiedMd ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
                <span>{copiedMd ? 'Copied to Clipboard' : 'Copy Full Markdown'}</span>
              </button>
            </div>

            <pre className="p-4 bg-stone-900 text-stone-200 rounded-lg text-xs font-mono max-h-[500px] overflow-auto whitespace-pre-wrap select-all">
              {fullMarkdownString}
            </pre>
          </div>
        )}

        {/* Tab 5: Works Cited */}
        {activeTab === 'references' && (
          <div className="mt-8 rounded-xl border border-stone-200 bg-white p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-4">
              <div>
                <h3 className="text-lg font-serif font-medium text-stone-900">
                  Statutory, Academic &amp; Industrial Works Cited
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  40 primary citations spanning museum acts, metrology standards, OECD ODA rules, and appellate case law.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-sans">
                {['All', 'Statutory', 'Metrology', 'Manufacturing', 'Diplomacy & Ethics'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setRefFilter(cat)}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      refFilter === cat ? 'bg-white font-medium text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredReferences.map((ref) => (
                <div key={ref.id} className="p-3.5 rounded-lg border border-stone-100 hover:border-stone-300 bg-stone-50/50 transition-colors flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-amber-900">
                        [{ref.id}]
                      </span>
                      <span className="text-[11px] font-sans text-stone-400">
                        {ref.category}
                      </span>
                    </div>
                    <p className="text-xs font-serif text-stone-800 leading-snug">
                      {ref.title}
                    </p>
                  </div>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-stone-400 hover:text-stone-900 transition-colors shrink-0"
                    title={`Open citation: ${ref.title}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
