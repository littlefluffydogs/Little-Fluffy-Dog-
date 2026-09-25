import React, { useState } from 'react';
import { X, Share2, Copy, Check, ExternalLink, Sparkles, MessageSquare, Newspaper, Send, Vote, CheckCircle2 } from 'lucide-react';
import { WHITEPAPER_META } from '../data/whitepaperData';

interface ShareCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareCampaignModal: React.FC<ShareCampaignModalProps> = ({ isOpen, onClose }) => {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [copiedSocial, setCopiedSocial] = useState<string | null>(null);
  const [copiedPetition, setCopiedPetition] = useState(false);

  if (!isOpen) return null;

  const primaryUrl = "https://www.littlefluffydog.com/repatriate";
  const petitionUrl = WHITEPAPER_META.petitionUrl;

  const memorableUrls = [
    {
      slug: "/repatriate",
      url: "https://www.littlefluffydog.com/repatriate",
      label: "Campaign Headline (Recommended)",
      desc: "Instantly communicates the moral, diplomatic, and sovereign resolution to journalists and MPs."
    },
    {
      slug: "/r2",
      url: "https://www.littlefluffydog.com/r2",
      label: "Engineering Shorthand",
      desc: "Compact technical moniker standing for 'Replicate & Repatriate'."
    },
    {
      slug: "/restitution",
      url: "https://www.littlefluffydog.com/restitution",
      label: "Statutory / Legal Policy",
      desc: "Ideal for parliamentary briefs, legal scholars, and select committee submissions."
    },
    {
      slug: "/heritage",
      url: "https://www.littlefluffydog.com/heritage",
      label: "Institutional / Museum",
      desc: "Curator-friendly slug for cultural heritage conferences and academic circles."
    }
  ];

  const socialSnippets = [
    {
      id: "petition",
      title: "Direct UK Parliament Petition Sign & Sponsor Hook",
      icon: Vote,
      text: `Sign & sponsor official UK Parliamentary Petition #${WHITEPAPER_META.petitionId}: Amend the British Museum Act 1963 to enable restitution upon sub-micron digital twin capture and robotic replica synthesis.\n\nSign on Parliament: ${petitionUrl}\nRead the full strategic feasibility study: https://www.littlefluffydog.com/repatriate`
    },
    {
      id: "headline",
      title: "Headline Press & X/Twitter Hook",
      icon: MessageSquare,
      text: `Return the Original. Keep the Twin. Build the Future.\n\nHow the UK can resolve the Parthenon Marbles and Benin Bronzes disputes while building a domestic £275M advanced manufacturing and robotics ecosystem: https://www.littlefluffydog.com/repatriate\n\nOfficial Petition: ${petitionUrl} #ReplicateRepatriate #UKMfg`
    },
    {
      id: "parliament",
      title: "MP & Parliamentary Brief Hook",
      icon: Send,
      text: `Why hoard contested colonial artifacts at £15M per asset when we can create sub-micron digital twins, robotic identical replicas, and save the UK Treasury £13.5M per piece? Explore the draft bill and petition at https://www.littlefluffydog.com/repatriate`
    },
    {
      id: "tech",
      title: "Deep Tech & Catapult Hook",
      icon: Newspaper,
      text: `Sub-micron metrology (<10µm), C2PA cryptographic provenance, and 7-axis robotic marble carving: the UK's blueprint for turning heritage restitution into dual-use aerospace and defense manufacturing. Full open study: https://www.littlefluffydog.com/repatriate`
    }
  ];

  const handleCopyUrl = (url: string, slugKey: string) => {
    navigator.clipboard.writeText(url);
    setCopiedSlug(slugKey);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSocial(id);
    setTimeout(() => setCopiedSocial(null), 2000);
  };

  const handleCopyPetition = () => {
    navigator.clipboard.writeText(petitionUrl);
    setCopiedPetition(true);
    setTimeout(() => setCopiedPetition(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-900/10 text-amber-900">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                Share Campaign &amp; Official Petition
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                "Return the Original. Keep the Twin. Build the Future."
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
          
          {/* Live Petition Direct Link Box */}
          <div className="p-4 rounded-xl border border-emerald-700/30 bg-emerald-50/70 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Vote className="w-4 h-4 text-emerald-800" />
                <span className="font-semibold text-emerald-950 text-xs">
                  Official UK Parliament Petition #{WHITEPAPER_META.petitionId}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase bg-emerald-700 text-white px-2 py-0.5 rounded font-bold">
                Live on Parliament.uk
              </span>
            </div>

            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              Direct official sponsor &amp; signature link registered on the UK Parliament petitions platform:
            </p>

            <div className="p-2.5 bg-white rounded border border-emerald-700/20 font-mono text-[11px] text-stone-800 break-all select-all flex items-center justify-between gap-2">
              <span className="truncate">{petitionUrl}</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={petitionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Petition on Parliament.uk</span>
              </a>

              <button
                onClick={handleCopyPetition}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs font-medium transition-colors cursor-pointer"
              >
                {copiedPetition ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                <span>{copiedPetition ? 'Copied Petition Link' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Memorable Slug Options */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 font-mono">
                Memorable Policy Domain Slugs
              </label>
              <span className="text-[11px] text-amber-900 font-medium">
                Host Domain: www.littlefluffydog.com
              </span>
            </div>

            <div className="space-y-2">
              {memorableUrls.map((item) => (
                <div
                  key={item.slug}
                  className={`p-3 rounded-lg border transition-colors flex items-center justify-between gap-3 ${
                    item.slug === '/repatriate'
                      ? 'bg-amber-50/70 border-amber-900/30'
                      : 'bg-stone-50/70 border-stone-200'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-stone-900 text-xs">
                        {item.url}
                      </span>
                      {item.slug === '/repatriate' && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-900 text-white font-medium">
                          Best / Most Memorable
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-stone-600 font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopyUrl(item.url, item.slug)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-medium shadow-2xs transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedSlug === item.slug ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Pre-Formed Shareable Social & Press Hooks */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2 font-mono">
              Pre-Formatted Copy Hooks for Press, MPs &amp; Social
            </label>

            <div className="space-y-3">
              {socialSnippets.map((snip) => {
                const IconComponent = snip.icon;
                return (
                  <div key={snip.id} className="p-3.5 rounded-lg border border-stone-200 bg-stone-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-medium text-stone-900 text-xs">
                        <IconComponent className="w-3.5 h-3.5 text-amber-800" />
                        <span>{snip.title}</span>
                      </div>

                      <button
                        onClick={() => handleCopyText(snip.text, snip.id)}
                        className="flex items-center gap-1 text-[11px] text-amber-900 hover:text-amber-950 font-medium cursor-pointer"
                      >
                        {copiedSocial === snip.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-stone-500" />
                            <span>Copy Hook</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-stone-600 font-mono bg-white p-2.5 rounded border border-stone-200 whitespace-pre-line select-all">
                      {snip.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-500 font-mono">
            {primaryUrl}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

