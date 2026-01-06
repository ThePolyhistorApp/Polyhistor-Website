"use client";

import { useModal } from "@/context/ModalContext";

// Components
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeatureToggle from "@/components/FeatureToggle";
import Hero from "@/components/Hero";
import PrivacySection from "@/components/PrivacySection";
import ProblemSection from "@/components/ProblemSection";


export default function HomePageClient() {
    const { openModal } = useModal();

    return (
        <>
            <main className="antialiased font-sans text-slate-900">

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
        </>
    );
}