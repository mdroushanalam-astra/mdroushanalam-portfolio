import { motion } from "framer-motion";
import { Award, BookOpen, Brain, Briefcase, Code, Globe, Lightbulb, Rocket, Shield, Target, Trophy, Zap } from "lucide-react";

const achievements = [
  {
    icon: Shield,
    title: "UPSC CSE Aspirant",
    desc: "4 years of India's toughest examination preparation",
    color: "hsl(217 91% 60%)",
    unlocked: true,
  },
  {
    icon: BookOpen,
    title: "BA History Graduate",
    desc: "BBMKU Dhanbad | Class of 2024",
    color: "hsl(45 93% 47%)",
    unlocked: true,
  },
  {
    icon: Brain,
    title: "Google AI Certified",
    desc: "AI & Machine Learning Certification via Coursera",
    color: "hsl(150 60% 45%)",
    unlocked: true,
  },
  {
    icon: Award,
    title: "Outskill AI Certified",
    desc: "Advanced AI & Prompt Engineering",
    color: "hsl(280 70% 55%)",
    unlocked: true,
  },
  {
    icon: Code,
    title: "AI Data Trainer",
    desc: "RWS Group | Training next-gen language models",
    color: "hsl(200 80% 50%)",
    unlocked: true,
  },
  {
    icon: Rocket,
    title: "2x Startup Founder",
    desc: "Techgram • Gig-Lo",
    color: "hsl(350 70% 55%)",
    unlocked: true,
  },
  {
    icon: Globe,
    title: "EdTech Pioneer",
    desc: "Co-founded Techgram for Tier-2/3 India",
    color: "hsl(170 60% 45%)",
    unlocked: true,
  },
  {
    icon: Lightbulb,
    title: "AI Solutions Architect",
    desc: "D2C, B2B & Government AI deployments",
    color: "hsl(30 80% 55%)",
    unlocked: true,
  },
  {
    icon: Target,
    title: "Strategic Thinker",
    desc: "Governance & policy expertise from UPSC",
    color: "hsl(217 71% 40%)",
    unlocked: true,
  },
  {
    icon: Trophy,
    title: "Community Builder",
    desc: "Gig-Lo | Redefining recruitment in India",
    color: "hsl(45 80% 55%)",
    unlocked: true,
  },
  {
    icon: Zap,
    title: "Full-Stack Visionary",
    desc: "Bridging humanities insight with tech innovation",
    color: "hsl(260 60% 55%)",
    unlocked: true,
  },
  {
    icon: Briefcase,
    title: "Future: IPO Ready",
    desc: "Building ventures for scale | the journey continues",
    color: "hsl(0 0% 50%)",
    unlocked: false,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden" style={{
      background: "radial-gradient(ellipse at 50% 50%, hsl(217 71% 12%) 0%, hsl(220 50% 5%) 60%, hsl(240 30% 3%) 100%)",
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">Milestones Unlocked</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Achievements & <span className="text-gradient-gold">Badges</span>
          </h2>
          <p className="text-primary-foreground/40 max-w-md mx-auto text-sm">
            Every badge tells a story of dedication, skill, and relentless pursuit.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, type: "spring" }}
                whileHover={a.unlocked ? { scale: 1.05, y: -5 } : {}}
                className={`relative rounded-2xl p-5 text-center border transition-all ${a.unlocked
                    ? "border-primary-foreground/10 backdrop-blur-xl cursor-default"
                    : "border-primary-foreground/5 opacity-40 grayscale"
                  }`}
                style={{
                  background: a.unlocked
                    ? "linear-gradient(135deg, hsl(217 71% 18% / 0.5) 0%, hsl(220 40% 8% / 0.7) 100%)"
                    : "hsl(220 40% 8% / 0.4)",
                }}
              >
                {a.unlocked && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold flex items-center justify-center shadow-[0_0_10px_hsl(45,93%,47%,0.5)]">
                    <span className="text-[10px]">✓</span>
                  </div>
                )}
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{
                    background: `${a.color}20`,
                    boxShadow: a.unlocked ? `0 0 20px ${a.color}30` : "none",
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: a.color }} />
                </div>
                <h3 className="text-primary-foreground font-semibold text-sm mb-1">{a.title}</h3>
                <p className="text-primary-foreground/40 text-xs leading-relaxed">{a.desc}</p>
                {!a.unlocked && (
                  <span className="text-primary-foreground/20 text-[10px] uppercase tracking-wider mt-2 block">🔒 Locked</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
