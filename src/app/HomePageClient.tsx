"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import MarqueeBanner from "@/components/MarqueeBanner";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeatureToggle from "@/components/FeatureToggle";
import PrivacySection from "@/components/PrivacySection"; // NEW
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer"; // NEW
import WaitlistModal from "@/components/WaitlistModal";

export default function HomePageClient() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <main className="antialiased font-sans text-slate-900">
                <MarqueeBanner />

                <Hero onJoinWaitlistClick={openModal} />

                {/* The "Why" */}
                <ProblemSection />

                {/* The "Solution" (Two Apps in One) */}
                <FeatureToggle />

                {/* The "Trust" (Dark Mode Contrast) */}
                <PrivacySection />

                {/* Social Proof / Objections */}
                <FAQSection />

                {/* Final Call to Action */}
                <CTASection onJoinWaitlistClick={openModal} />
            </main>
            
            <AnimatePresence>
                {isModalOpen && <WaitlistModal onClose={closeModal} />}
            </AnimatePresence>
        </>
    );
}