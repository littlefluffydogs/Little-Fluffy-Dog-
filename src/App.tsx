/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProofOfPhysicsViewer } from './components/ProofOfPhysicsViewer';
import { RoiModelCalculator } from './components/RoiModelCalculator';
import { WhitepaperReader } from './components/WhitepaperReader';
import { PetitionCampaignSection } from './components/PetitionCampaignSection';
import { Footer } from './components/Footer';
import { ShareCampaignModal } from './components/ShareCampaignModal';
import { ForkPolicyModal } from './components/ForkPolicyModal';

export default function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isForkModalOpen, setIsForkModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenFork={() => setIsForkModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExplore3D={() => scrollToSection('proof-of-physics')}
          onReadBill={() => scrollToSection('draft-bill')}
          onSignPetition={() => scrollToSection('petition')}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* Interactive Proof-of-Physics 3D WebGL Viewer & C2PA Inspector */}
        <ProofOfPhysicsViewer />

        {/* 10-Year Economic Model & Catapult Spinoff Calculator */}
        <RoiModelCalculator />

        {/* Strategic Feasibility Study & Draft Legislation Whitepaper Reader */}
        <WhitepaperReader />

        {/* Phase 2: UK Parliamentary Petition Campaign Hub */}
        <PetitionCampaignSection />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenFork={() => setIsForkModalOpen(true)}
      />

      {/* Share Campaign & Memorable URLs Modal */}
      <ShareCampaignModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Fork Policy CC0 / MIT Modal */}
      <ForkPolicyModal
        isOpen={isForkModalOpen}
        onClose={() => setIsForkModalOpen(false)}
      />
    </div>
  );
}
