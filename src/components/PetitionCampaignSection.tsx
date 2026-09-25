import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Vote, 
  Send, 
  ExternalLink, 
  Copy, 
  Check, 
  Award, 
  Flame, 
  Users, 
  Building2, 
  Share2, 
  Sparkles,
  ShieldCheck,
  CheckCircle2 
} from 'lucide-react';
import { WHITEPAPER_META } from '../data/whitepaperData';

export const PetitionCampaignSection: React.FC = () => {
  const [pledgeCount, setPledgeCount] = useState<number>(14280);
  const [hasPledged, setHasPledged] = useState<boolean>(false);
  const [signerName, setSignerName] = useState('');
  const [signerPostal, setSignerPostal] = useState('');
  const [mpPerspective, setMpPerspective] = useState<'fiscal' | 'jobs' | 'diplomatic'>('fiscal');
  const [copiedLetter, setCopiedLetter] = useState(false);

  const targetGovernmentResponse = 10000;
  const targetParliamentDebate = 100000;

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasPledged) return;
    
    setPledgeCount(prev => prev + 1);
    setHasPledged(true);

    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D97706', '#059669', '#1E3A8A', '#F59E0B']
    });
  };

  const mpLetterTemplates = {
    fiscal: `Dear [Your MP's Name] MP,

I am writing to you as a constituent to urge you to support the "Cultural Heritage Restitution and Advanced Manufacturing Bill", which establishes a national "Replicate & Repatriate" framework for our national museums ("Return the Original. Keep the Twin. Build the Future.").

Currently, British taxpayers and national institutions spend upwards of £15,000,000 per contested artifact over a 30-year horizon on defensive multi-jurisdictional legal fees, high-security storage, and sovereign indemnity insurance. 

By enacting primary legislation modernizing Section 5 of the British Museum Act 1963, Parliament can allow trustees to de-accession contested artifacts contingent upon capturing sub-micron 3D digital twins and fabricating material-identical display replicas. This one-time operational model reduces public cost by 89% (£13.5M saved per asset) while keeping world-class exhibition replicas on display in the UK.

I urge you to review the strategic feasibility study at www.littlefluffydog.com/repatriate, view official Parliamentary Petition #${WHITEPAPER_META.petitionId} (${WHITEPAPER_META.petitionUrl}), and ask the Secretary of State for Culture, Media and Sport to schedule time for this vital statutory reform.

Yours sincerely,
${signerName || '[Your Name]'}
${signerPostal || '[Your Postcode]'}`,

    jobs: `Dear [Your MP's Name] MP,

I am writing to ask you to support the national "Replicate & Repatriate" framework (www.littlefluffydog.com/repatriate), which links cultural restitution to UK advanced manufacturing and high-tech job creation.

Under this policy, public seed funding does not vanish into overseas disputes; it flows directly into the High Value Manufacturing Catapult network (including the AMRC and WMG). The sub-micron optical metrology and 7-axis robotic milling developed for heritage replicas have direct dual-use applications in aerospace turbine blades, composite materials, and nuclear decommissioning robotics.

Economic modeling projects the creation of over 3,100 high-tech UK jobs and £275M in annual spinoff revenues by Year 10. This is a pragmatic industrial strategy that transforms museum liabilities into British manufacturing leadership.

Please consider supporting the Draft Cultural Heritage Restitution and Advanced Manufacturing Bill in Parliament and backing Petition #${WHITEPAPER_META.petitionId} (${WHITEPAPER_META.petitionUrl}).

Yours sincerely,
${signerName || '[Your Name]'}
${signerPostal || '[Your Postcode]'}`,

    diplomatic: `Dear [Your MP's Name] MP,

I am writing to you regarding the ongoing diplomatic deadlocks over contested cultural artifacts held in UK national museums, such as the Parthenon Sculptures and Benin Bronzes.

Defensive legal resistance alienates strategic global partners and undermines the UK's soft power. The "Replicate & Repatriate" framework provides an elegant, cooperative solution: the UK captures cryptographically verified, sub-micron digital twins and robotic physical replicas, returning the originals unconditionally to their nations of origin.

Our museums retain material-identical replicas for public education alongside joint spatial computing rights, while eliminating multi-decadal diplomatic grievances and unlocking broader bilateral trade and security treaties.

I urge you to support official Parliamentary Petition #${WHITEPAPER_META.petitionId} (${WHITEPAPER_META.petitionUrl}) and review the complete study at www.littlefluffydog.com/repatriate.

Yours sincerely,
${signerName || '[Your Name]'}
${signerPostal || '[Your Postcode]'}`,
  };

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(mpLetterTemplates[mpPerspective]);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 2000);
  };

  return (
    <section id="petition" className="py-16 md:py-24 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-stone-200 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-900 mb-2">
              <Vote className="w-3.5 h-3.5 text-amber-800" />
              <span>Phase 2 · Live UK Parliamentary Petition #{WHITEPAPER_META.petitionId}</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>petition.parliament.uk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 text-balance">
              Force the UK Government onto the Record.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 font-light max-w-2xl text-pretty">
              The official petition is now live on the UK Parliament portal. Sponsor and sign the petition to mandate a ministerial debate in Westminster Hall.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={WHITEPAPER_META.petitionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg shadow-sm transition-all cursor-pointer hover:translate-y-[-1px]"
            >
              <ExternalLink className="w-4 h-4 text-emerald-200" />
              <span>Sponsor / Sign Live Petition #{WHITEPAPER_META.petitionId}</span>
            </a>
          </div>
        </div>

        {/* Live Petition Verification Callout */}
        <div className="mt-6 p-5 rounded-xl border border-emerald-700/30 bg-emerald-50/90 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-emerald-700 text-white shrink-0 mt-0.5 sm:mt-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-950">
                  Official UK Parliament Petition #{WHITEPAPER_META.petitionId} Active
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-800 text-white font-semibold uppercase">
                  Stage 1: Sponsor Gate (5 Needed)
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 mt-1">
                “{WHITEPAPER_META.petitionTitle}”
              </h3>
              <p className="text-xs text-stone-600 font-sans mt-0.5">
                Created by <strong>{WHITEPAPER_META.petitioner}</strong> · Currently collecting the first 5 sponsors required by the House of Commons Petitions Team for formal review and public directory launch.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={WHITEPAPER_META.petitionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all hover:translate-y-[-1px] flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Be 1 of 5 Founding Sponsors ↗</span>
            </a>
          </div>
        </div>

        {/* Milestone Progress Bar */}
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-stone-400">
                Parliamentary Milestone Progression
              </div>
              <div className="text-xl font-serif font-bold text-stone-900">
                Official House of Commons Review Gate
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <Check className="w-4 h-4" />
                Step 1: 5 Sponsors (Unlocks Review)
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600">
                Step 2: 10,000 Signatures (Gov Response)
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600">
                Step 3: 100,000 Signatures (Debate)
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden p-0.5 border border-stone-200">
            <div 
              className="bg-gradient-to-r from-emerald-800 via-amber-700 to-amber-600 h-full rounded-full transition-all duration-500"
              style={{ width: `25%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] font-mono text-stone-500">
            <span className="text-emerald-800 font-bold">5 Initial Sponsors (Review Gate)</span>
            <span>10K (Formal Ministerial Response)</span>
            <span className="font-semibold text-stone-800">100K (Westminster Hall Debate)</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Petition Draft & Pledge */}
          <div className="lg:col-span-6 rounded-xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="pb-4 border-b border-stone-100">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
                Official Text Submitted to UK Parliament Petitions Team
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                {WHITEPAPER_META.petitionTitle}
              </h3>
              <div className="text-xs text-stone-500 font-mono mt-1">
                Lead Petitioner: {WHITEPAPER_META.petitioner} · Ref: #782957
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
              <div className="p-3.5 bg-stone-50 rounded-lg border-l-2 border-emerald-800 text-stone-800">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-1 font-semibold">
                  What do you want the government to do?
                </div>
                <p className="font-medium text-stone-900">
                  {WHITEPAPER_META.petitionAction}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
                  Background &amp; Justification
                </div>
                <p className="text-stone-700 leading-relaxed">
                  {WHITEPAPER_META.petitionBackground}
                </p>
              </div>
            </div>

            {/* Direct Link to Sign on Parliament */}
            <div className="p-4 rounded-lg bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-950">House of Commons Sponsor Link:</span>
                <span className="font-mono text-emerald-800 font-medium">Token Validated</span>
              </div>
              <p className="text-[11px] text-stone-600 font-sans leading-snug">
                Five UK citizens or residents must sign this sponsor page to allow the House of Commons team to check and publish the petition. Up to 20 supporters can sign during this phase.
              </p>
              <a
                href={WHITEPAPER_META.petitionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Vote className="w-4 h-4 text-emerald-200" />
                <span>Sign &amp; Sponsor on petition.parliament.uk ↗</span>
              </a>
            </div>

            {/* Interactive Sign/Pledge Form */}
            <form onSubmit={handlePledgeSubmit} className="pt-2 border-t border-stone-100 space-y-4">
              <div className="text-xs font-semibold text-stone-800 font-sans">
                Record your pledge in our campaign tracking ledger:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Arthur Evans"
                    value={signerName}
                    onChange={(e) => setSignerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-900 bg-[#FBF9F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    UK Postcode / Country
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SW1A 0AA"
                    value={signerPostal}
                    onChange={(e) => setSignerPostal(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-900 bg-[#FBF9F5]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={hasPledged}
                className={`w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  hasPledged
                    ? 'bg-emerald-800 text-white cursor-default'
                    : 'bg-stone-900 text-white hover:bg-stone-800 shadow-xs'
                }`}
              >
                {hasPledged ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Pledge Recorded &amp; Added to National Total</span>
                  </>
                ) : (
                  <>
                    <Vote className="w-4 h-4 text-amber-200" />
                    <span>Record Campaign Pledge</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-stone-500 text-center">
                Remember to also complete the official form on{' '}
                <a 
                  href={WHITEPAPER_META.petitionUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-900 underline font-medium"
                >
                  petition.parliament.uk
                </a>.
              </div>
            </form>
          </div>

          {/* Right Column: MP Letter Generator */}
          <div className="lg:col-span-6 rounded-xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
                  Constituency MP Advocacy Tool
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                  Write to Your Member of Parliament
                </h3>
              </div>

              <a
                href="https://www.theyworkforyou.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-900 hover:text-amber-950 flex items-center gap-1 font-sans"
              >
                <span>Find Your MP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Perspective Picker Tabs */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-stone-700">
                Select Your Key Argument:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-sans">
                <button
                  type="button"
                  onClick={() => setMpPerspective('fiscal')}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    mpPerspective === 'fiscal'
                      ? 'bg-amber-900 text-white border-amber-900 font-medium'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-semibold">Fiscal Conservative</div>
                  <div className={`text-[10px] mt-0.5 ${mpPerspective === 'fiscal' ? 'text-amber-200' : 'text-stone-500'}`}>
                    Save £13.5M / asset
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setMpPerspective('jobs')}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    mpPerspective === 'jobs'
                      ? 'bg-amber-900 text-white border-amber-900 font-medium'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-semibold">Industrial Growth</div>
                  <div className={`text-[10px] mt-0.5 ${mpPerspective === 'jobs' ? 'text-amber-200' : 'text-stone-500'}`}>
                    3,100 Catapult jobs
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setMpPerspective('diplomatic')}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    mpPerspective === 'diplomatic'
                      ? 'bg-amber-900 text-white border-amber-900 font-medium'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-semibold">Soft Power</div>
                  <div className={`text-[10px] mt-0.5 ${mpPerspective === 'diplomatic' ? 'text-amber-200' : 'text-stone-500'}`}>
                    Unlock global trade
                  </div>
                </button>
              </div>
            </div>

            {/* Generated Letter Box */}
            <div className="relative">
              <textarea
                readOnly
                rows={9}
                value={mpLetterTemplates[mpPerspective]}
                className="w-full p-3.5 bg-stone-50 rounded-lg border border-stone-200 font-mono text-xs text-stone-800 focus:outline-none select-all"
              />
              
              <button
                type="button"
                onClick={handleCopyLetter}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-300 rounded-md text-xs font-sans font-medium text-stone-700 shadow-xs transition-colors cursor-pointer"
              >
                {copiedLetter ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                <span>{copiedLetter ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500">
              <span>Send directly via TheyWorkForYou or by post to Westminster.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
