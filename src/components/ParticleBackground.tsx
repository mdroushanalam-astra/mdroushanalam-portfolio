import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 10,
  color: i % 3 === 0 ? "hsl(45 93% 47% / 0.3)" : i % 3 === 1 ? "hsl(217 91% 60% / 0.2)" : "hsl(0 0% 100% / 0.15)",
}));

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Large glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, hsl(45 93% 47% / 0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.1) 0%, transparent 70%)", animationDelay: "1.5s" }} />
    </div>
  );
};

export default ParticleBackground;
