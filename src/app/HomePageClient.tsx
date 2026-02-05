"use client";

import { useModal } from "@/context/ModalContext";

// Components
import CTASection from "@/components/CTASection";
import ChaosSection from "@/components/ChaosSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import SocialProofSection from "@/components/SocialProofSection";
import TrojanHorseSection from "@/components/TrojanHorseSection";

export default function HomePageClient() {
    const { openModal } = useModal();

    return (
        <>
            <main className="antialiased font-sans text-slate-900">
                {/* Consumer-First Hero */}
                <Hero onJoinWaitlistClick={openModal} />

                {/* The Chaos - Problem Section */}
                <ChaosSection />

                {/* The Solution - Consumer Features */}
                <FeaturesSection />

                {/* Social Proof & Testimonials */}
                <SocialProofSection />

                {/* Bridge to Enterprise */}
                <TrojanHorseSection />

                {/* FAQ Section */}
                <FAQSection />

                {/* Final Call to Action */}
                <CTASection onJoinWaitlistClick={openModal} />
            </main>
        </>
    );
}