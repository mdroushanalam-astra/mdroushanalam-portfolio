import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const milestones = [
  { id: "hero", label: "Intro", position: 0 },
  { id: "about", label: "About", position: 12 },
  { id: "ventures", label: "Ventures", position: 28 },
  { id: "journey", label: "Journey", position: 42 },
  { id: "skills", label: "Skills", position: 55 },
  { id: "blog", label: "Blog", position: 72 },
  { id: "contact", label: "Contact", position: 90 },
];

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setProgress(v * 100);
      setVisible(v > 0.02);
    });
    return unsub;
  }, [scrollYProgress]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[52] h-1 pointer-events-none"
    >
      {/* Track */}
      <div className="absolute inset-0 bg-border/30" />

      {/* Fill */}
      <motion.div
        className="absolute top-0 left-0 h-full origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, hsl(217 91% 60%) 0%, hsl(45 93% 47%) 100%)",
        }}
      />

      {/* Glow at tip */}
      <motion.div
        className="absolute top-0 h-1 w-8 blur-sm"
        style={{
          left: `${progress}%`,
          transform: "translateX(-50%)",
          background: "hsl(45 93% 47%)",
        }}
      />

      {/* Milestone dots */}
      <div className="absolute inset-0">
        {milestones.map((m) => (
          <div
            key={m.id}
            className="absolute top-1/2 -translate-y-1/2 group"
            style={{ left: `${m.position}%` }}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress >= m.position
                  ? "bg-gold scale-125 shadow-[0_0_6px_hsl(45_93%_47%/0.6)]"
                  : "bg-muted-foreground/30 scale-100"
              }`}
            />
            {/* Label on hover */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[9px] font-mono text-muted-foreground whitespace-nowrap bg-card/90 backdrop-blur-sm px-1.5 py-0.5 rounded border border-border/50">
                {m.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollProgressBar;
