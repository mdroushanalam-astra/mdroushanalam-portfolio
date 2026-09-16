import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const milestones = [
  { id: "hero", label: "01 Hero", position: 0 },
  { id: "thesis", label: "02 Thesis", position: 8 },
  { id: "capabilities", label: "03 Capabilities", position: 17 },
  { id: "system", label: "04 System", position: 26 },
  { id: "work", label: "05 Work", position: 35 },
  { id: "intelligence", label: "06 Intelligence", position: 45 },
  { id: "tech", label: "07 Stack", position: 54 },
  { id: "philosophy", label: "08 Thinking", position: 63 },
  { id: "notes", label: "09 Notes", position: 72 },
  { id: "astra", label: "10 Astra", position: 81 },
  { id: "about", label: "11 About", position: 90 },
  { id: "contact", label: "12 Contact", position: 98 },
];

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setProgress(v * 100);
      setVisible(v > 0.01);
    });
    return unsub;
  }, [scrollYProgress]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 pointer-events-none"
    >
      {/* Track */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Fill */}
      <motion.div
        className="absolute top-0 left-0 h-full origin-left shadow-[0_0_12px_rgba(242,182,109,0.5)]"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #38BDF8 0%, #DCEEFF 50%, #F2B66D 100%)",
        }}
      />

      {/* Glow at tip */}
      <motion.div
        className="absolute top-0 h-1 w-10 blur-sm"
        style={{
          left: `${progress}%`,
          transform: "translateX(-50%)",
          background: "#F2B66D",
        }}
      />

      {/* Subtle milestone notches */}
      <div className="absolute inset-0">
        {milestones.map((m) => (
          <div
            key={m.id}
            className="absolute top-1/2 -translate-y-1/2 group pointer-events-auto"
            style={{ left: `${m.position}%` }}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                progress >= m.position
                  ? "bg-[#F2B66D] scale-110 shadow-[0_0_8px_#F2B66D]"
                  : "bg-slate-400/40 scale-90"
              }`}
            />
            {/* Label on hover */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-[10px] font-mono tracking-wider text-slate-700 whitespace-nowrap bg-white/95 backdrop-blur-md px-2 py-0.5 rounded shadow-sm border border-slate-200">
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
