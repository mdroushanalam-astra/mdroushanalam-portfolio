import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type RevealType = "fade" | "blur" | "scale" | "slide-up" | "curtain";

interface CinematicRevealProps {
  children: React.ReactNode;
  type?: RevealType;
  delay?: number;
  className?: string;
}

const variants: Record<RevealType, { hidden: Record<string, any>; visible: Record<string, any> }> = {
  fade: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  curtain: {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
  },
};

const CinematicReveal = ({ children, type = "blur", delay = 0, className = "" }: CinematicRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const v = variants[type];

  return (
    <motion.div
      ref={ref}
      initial={v.hidden}
      animate={isInView ? v.visible : v.hidden}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default CinematicReveal;
