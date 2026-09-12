import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import techgramLogo from "@/assets/techgram-logo.png";
import gigloLogo from "@/assets/giglo-logo.png";
import { useRef, useState } from "react";

const ventures = [
  {
    name: "Techgram",
    tagline: "AI-Powered Multiverse of Learning",
    role: "Co-Founder & CSO",
    description: "Building the world's first AI-powered metaverse of education, connecting learners, educators, and institutions globally. Making world-class learning accessible, personalized, and transformative for every learner.",
    logo: techgramLogo,
    url: "https://www.techgramedu.in",
    status: "Coming Soon",
    live: false,
  },
  {
    name: "Gig-Lo",
    tagline: "Community-Powered Marketplace",
    role: "Founder & CSO",
    description: "A next-generation recruitment platform engineered to make hiring faster, smarter, and more user-friendly through AI-driven matching and standardized job frameworks. Redefining recruitment in India.",
    logo: gigloLogo,
    url: "https://giglo.in",
    status: "Coming Soon",
    live: false,
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`);
    setGlare({ x: x * 100, y: y * 100, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-lg z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsl(45 93% 80% / ${glare.opacity}) 0%, transparent 60%)`,
          transition: "opacity 0.15s ease-out",
        }}
      />
      {children}
    </div>
  );
};

const VenturesSection = () => {
  return (
    <section id="ventures" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(217 91% 60% / 0.03) 50%, hsl(var(--background)) 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Ventures</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Building the Future</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ventures.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <TiltCard className="relative h-full">
                <Card className="group relative overflow-hidden border-border/50 hover:border-royal/50 transition-all duration-500 hover:shadow-xl hover:shadow-royal/10 h-full bg-card">
                  {/* Top edge glow */}
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: "linear-gradient(90deg, transparent, hsl(217 91% 60% / 0.5), hsl(45 93% 47% / 0.5), transparent)",
                  }} />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge
                      variant={v.live ? "default" : "secondary"}
                      className={`text-xs font-medium ${v.live ? "bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600" : ""}`}
                    >
                      {v.status}
                    </Badge>
                  </div>
                  <CardContent className="p-8 pt-12">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300 border border-border/50 bg-background flex items-center justify-center p-2">
                      <img src={v.logo} alt={`${v.name} logo`} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{v.name}</h3>
                    <p className="text-royal text-sm font-medium mb-1">{v.tagline}</p>
                    <p className="text-xs text-muted-foreground mb-4">{v.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{v.description}</p>
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-royal hover:text-gold transition-colors"
                    >
                      Visit Website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto text-lg italic"
        >
          "Two ventures, one mission: harnessing technology to democratize opportunity, empower communities, and reshape how India learns, works, and grows."
        </motion.p>
      </div>
    </section>
  );
};

export default VenturesSection;
