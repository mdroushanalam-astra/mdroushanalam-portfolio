import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "AI Entrepreneurship", level: 88, color: "from-royal to-accent" },
  { name: "Strategic Planning", level: 92, color: "from-gold to-royal" },
  { name: "Ideas & Perspectives", level: 85, color: "from-royal to-gold" },
  { name: "Market Analysis", level: 80, color: "from-accent to-royal" },
  { name: "Product Vision", level: 90, color: "from-gold to-accent" },
  { name: "Public Policy", level: 75, color: "from-royal to-gold" },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(217 91% 60% / 0.03) 50%, hsl(var(--background)) 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          style={{ y: y2, scale }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Expertise</h2>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: y1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-light rounded-2xl p-6 hover:shadow-lg hover:shadow-royal/10 transition-all duration-300 group"
            >
              {/* Circular gauge */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
                    <motion.circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - s.level / 100) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1 + 0.3 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(217 91% 60%)" />
                        <stop offset="100%" stopColor="hsl(45 93% 47%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-foreground">{s.level}%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground text-center">{s.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
