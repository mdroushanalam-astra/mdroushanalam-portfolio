import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot.png";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";
import MoodBanner from "@/components/MoodBanner";

const roles = [
  "Co-Founder & CSO @ Techgram",
  "Founder @ Gig-Lo",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero | Md. Roushan Alam, Founder and AI Entrepreneur">
      {/* Gradient background with blue/white/gold mix */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-40" style={{
        background: "radial-gradient(ellipse at 70% 30%, hsl(45 93% 47% / 0.25) 0%, transparent 50%)"
      }} />
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(ellipse at 20% 80%, hsl(217 91% 60% / 0.3) 0%, transparent 50%)"
      }} />
      <div className="absolute inset-0 opacity-20" style={{
        background: "radial-gradient(ellipse at 80% 70%, hsl(0 0% 100% / 0.15) 0%, transparent 40%)"
      }} />

      <ParticleBackground />
      <MoodBanner />

      <div className="container mx-auto px-4 relative z-10">
        <article itemScope itemType="https://schema.org/Person" className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Glassmorphic card behind content */}
            <div className="glass rounded-3xl p-8 md:p-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gold font-semibold mb-4 tracking-widest uppercase text-base md:text-lg"
              >
                ✦ Founder | AI Entrepreneur | Ideas & Perspectives ✦
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-2">
                <span className="sr-only">Md. Roushan Alam | </span>
                <span className="text-primary-foreground" itemProp="description">Building Ventures That </span>
                <span className="text-gradient-gold">Reshape Society</span>
              </h1>
              <p className="text-primary-foreground/60 text-sm md:text-base mb-4" itemProp="name">
                <strong>Md. Roushan Alam</strong> | <span itemProp="jobTitle">Founder | AI Entrepreneur</span>
              </p>
              <meta itemProp="url" content="https://mdroushanalam.in" />
              <meta itemProp="email" content="mdroushanalam.ai@gmail.com" />
              <div className="h-8 mb-8">
                <p className="text-primary-foreground/80 text-lg md:text-xl" aria-live="polite">
                  {text}
                  <span className="text-gold animate-pulse">|</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton>
                  <Button
                    size="lg"
                    onClick={() => document.getElementById("ventures")?.scrollIntoView({ behavior: "smooth" })}
                    className="gradient-gold text-gold-foreground border-0 text-base px-8 font-semibold hover:opacity-90 transition-opacity"
                  >
                    Explore My Vision <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}
                    className="border-gold/50 text-gold bg-white/10 hover:bg-white/20 text-base px-8 font-semibold"
                  >
                    Read My Blog <BookOpen className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
              </div>
              {/* Command palette hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-4 text-primary-foreground/30 text-xs flex items-center gap-1.5 justify-center lg:justify-start"
              >
                Press <kbd className="inline-flex items-center gap-0.5 border border-primary-foreground/20 rounded px-1.5 py-0.5 font-mono text-[10px]"><Command className="w-2.5 h-2.5" />K</kbd> for quick navigation
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold/50 shadow-2xl glow-gold">
                <img src={headshot} alt="Md. Roushan Alam | Founder and AI Entrepreneur based in India" className="w-full h-full object-cover" itemProp="image" />
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
