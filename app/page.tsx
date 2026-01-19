import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImpactSection from "@/components/ImpactSection";
import WhoItsForSection from "@/components/WhoItsForSection";

export default function Home() {
  return (
    <div className="bg-[#f8f6f2]">
      <HeroSection />

      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorksSection />
      </section>

      <section id="who-its-for" className="scroll-mt-24">
        <WhoItsForSection />
      </section>

      <section id="benefits" className="scroll-mt-24">
        <BenefitsSection />
      </section>

      <section id="impact" className="scroll-mt-24">
        <ImpactSection />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FAQSection />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
