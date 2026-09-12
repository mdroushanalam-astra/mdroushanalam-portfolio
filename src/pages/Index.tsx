import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsCounter from "@/components/StatsCounter";
import VenturesSection from "@/components/VenturesSection";
import TimelineMapSection from "@/components/TimelineMapSection";
import TerminalSection from "@/components/TerminalSection";
import SkillConstellation from "@/components/SkillConstellation";
import VisionBoardSection from "@/components/VisionBoardSection";
import TypingChallenge from "@/components/TypingChallenge";
import BlogSection from "@/components/BlogSection";
import GuestbookSection from "@/components/GuestbookSection";
import BookingSection from "@/components/BookingSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PortfolioChatbot from "@/components/PortfolioChatbot";
import NowWorkingWidget from "@/components/NowWorkingWidget";
import MouseTrail from "@/components/MouseTrail";
import MusicVisualizer from "@/components/MusicVisualizer";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import CommandPalette from "@/components/CommandPalette";
import CinematicReveal from "@/components/CinematicReveal";
import SpotlightCursor from "@/components/SpotlightCursor";
import VisitorInsights from "@/components/VisitorInsights";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ResumeDownload from "@/components/ResumeDownload";
import { MoodProvider } from "@/components/MoodEngine";

const Index = () => {
  return (
    <MoodProvider>
      <div className="min-h-screen bg-background">
        <MouseTrail />
        <SpotlightCursor />
        <KonamiEasterEgg />
        <CommandPalette />
        <VisitorInsights />
        <ScrollProgressBar />


        <Navbar />
        <HeroSection />
        <CinematicReveal type="blur">
          <AboutSection />
        </CinematicReveal>
        <CinematicReveal type="scale" delay={0.1}>
          <StatsCounter />
        </CinematicReveal>
        <CinematicReveal type="fade">
          <VenturesSection />
        </CinematicReveal>
        <CinematicReveal type="slide-up">
          <TimelineMapSection />
        </CinematicReveal>

        <CinematicReveal type="blur" delay={0.1}>
          <SkillConstellation />
        </CinematicReveal>
        <CinematicReveal type="scale">
          <VisionBoardSection />
        </CinematicReveal>
        <CinematicReveal type="fade">
          <TypingChallenge />
        </CinematicReveal>
        <CinematicReveal type="slide-up">
          <BlogSection />
        </CinematicReveal>
        <CinematicReveal type="blur">
          <GuestbookSection />
        </CinematicReveal>

        <CinematicReveal type="fade">
          <NewsletterSection />
        </CinematicReveal>
        <CinematicReveal type="scale">
          <ContactSection />
        </CinematicReveal>
        <Footer />
        <PortfolioChatbot />

      </div>
    </MoodProvider>
  );
};

export default Index;
