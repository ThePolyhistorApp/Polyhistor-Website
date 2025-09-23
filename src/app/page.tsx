import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import TrustAndTeamSection from "@/components/TrustAndTeamSection";

export default function HomePage() {
  return (
    <main className="antialiased">
      <MarqueeBanner />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustAndTeamSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
