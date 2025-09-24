// src/app/page.tsx
"use client";

import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import TrustAndTeamSection from "@/components/TrustAndTeamSection";
import WaitlistModal from "@/components/WaitlistModal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main className="antialiased">
        <MarqueeBanner />
        <HeroSection onJoinWaitlistClick={openModal} />
        <FeaturesSection />
        <HowItWorksSection />
        <TrustAndTeamSection />
        <FAQSection />
        <CTASection onJoinWaitlistClick={openModal} />
      </main>

      <AnimatePresence>
        {isModalOpen && <WaitlistModal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
}
