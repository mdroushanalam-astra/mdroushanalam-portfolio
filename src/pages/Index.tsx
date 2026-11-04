import HeroSection from "@/components/HeroSection";
import WorldviewSection from "@/components/WorldviewSection";
import CapabilitiesSystemSection from "@/components/CapabilitiesSystemSection";
import ProofOfThinkingSection from "@/components/ProofOfThinkingSection";
import SystemsReimaginedSection from "@/components/SystemsReimaginedSection";
import PrototypesSection from "@/components/PrototypesSection";
import SystemDeconstructionLab from "@/components/SystemDeconstructionLab";
import ThinkWithMeSection from "@/components/ThinkWithMeSection";
import ArchitectureThinkingSection from "@/components/ArchitectureThinkingSection";
import DecisionsSection from "@/components/DecisionsSection";
import FieldNotesSection from "@/components/FieldNotesSection";
import AboutRoushanSection from "@/components/AboutRoushanSection";
import OperatingSystemSection from "@/components/OperatingSystemSection";
import CommercialSection from "@/components/CommercialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="bg-[#F8FAFC] text-[#071522] min-h-screen selection:bg-[#F2B66D]/30 selection:text-[#071522]">
      <Navbar />
      <HeroSection />
      <WorldviewSection />
      <CapabilitiesSystemSection />
      <ProofOfThinkingSection />
      <SystemsReimaginedSection />
      <PrototypesSection />
      <SystemDeconstructionLab />
      <ThinkWithMeSection />
      <ArchitectureThinkingSection />
      <DecisionsSection />
      <FieldNotesSection />
      <AboutRoushanSection />
      <OperatingSystemSection />
      <CommercialSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
