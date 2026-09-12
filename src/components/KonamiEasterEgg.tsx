import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  delay: number;
}

const HackerOverlay = ({ onClose }: { onClose: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const hackerLines = [
    "$ sudo access --mode=hacker --user=visitor",
    "[AUTH] Biometric scan... ██████████ VERIFIED",
    "[SYS] Decrypting portfolio_secrets.enc...",
    "──────────────────────────────────────────",
    "🔓 CLASSIFIED INTEL UNLOCKED:",
    "",
    "  > Coffee consumed this year: 847 cups ☕",
    "  > Lines of code written: 142,387",
    "  > Bugs squashed: 3,291 🐛",
    "  > Stack Overflow visits: ∞",
    "  > Sleep schedule: ERROR_NOT_FOUND",
    "  > Motivation source: 'One more feature...'",
    "  > Secret superpower: Turning caffeine into code",
    "  > Hidden talent: Debugging at 3 AM",
    "",
    "──────────────────────────────────────────",
    "[WARN] You found the easter egg! 🥚",
    "[INFO] You are now an honorary hacker.",
    "[SYS] Deploying confetti.exe... 🎉",
    "",
    "  Press ESC or click anywhere to exit.",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < hackerLines.length) {
        setLines((prev) => [...prev, hackerLines[i]]);
        i++;
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      style={{ background: "rgba(0, 0, 0, 0.92)" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-2xl overflow-hidden border"
        style={{
          background: "linear-gradient(135deg, hsl(120 100% 5%) 0%, hsl(120 50% 3%) 100%)",
          borderColor: "hsl(120 100% 30% / 0.3)",
          boxShadow: "0 0 60px hsl(120 100% 30% / 0.15), inset 0 1px 0 hsl(120 100% 50% / 0.1)",
        }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "hsl(120 100% 30% / 0.2)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "hsl(0 80% 50%)" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "hsl(45 93% 47%)" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "hsl(120 80% 40%)" }} />
          <span className="ml-3 text-xs font-mono" style={{ color: "hsl(120 100% 60% / 0.6)" }}>
            hacker_mode.sh | visitor@roushan-portfolio
          </span>
        </div>

        {/* Terminal body */}
        <div ref={containerRef} className="p-5 h-[400px] overflow-y-auto font-mono text-sm leading-relaxed scrollbar-thin" style={{ color: "hsl(120 100% 65%)" }}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className="whitespace-pre-wrap"
              style={{
                color: line.startsWith("[WARN]")
                  ? "hsl(45 93% 60%)"
                  : line.startsWith("[SYS]")
                  ? "hsl(217 91% 70%)"
                  : line.startsWith("  >")
                  ? "hsl(120 80% 75%)"
                  : line.startsWith("──")
                  ? "hsl(120 100% 30% / 0.5)"
                  : "hsl(120 100% 65%)",
              }}
            >
              {line}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-2 h-4 mt-1"
            style={{ background: "hsl(120 100% 60%)" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const KonamiEasterEgg = () => {
  const [activated, setActivated] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const inputRef = useRef<string[]>([]);

  const triggerConfetti = useCallback(() => {
    const colors = [
      "hsl(45 93% 47%)",
      "hsl(217 91% 60%)",
      "hsl(120 80% 50%)",
      "hsl(0 80% 60%)",
      "hsl(280 80% 60%)",
      "hsl(180 80% 50%)",
    ];
    const pieces: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.8,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4000);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      inputRef.current.push(e.key);
      if (inputRef.current.length > KONAMI.length) {
        inputRef.current.shift();
      }
      if (inputRef.current.join(",") === KONAMI.join(",")) {
        setActivated(true);
        triggerConfetti();
        inputRef.current = [];
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [triggerConfetti]);

  return (
    <>
      {/* Confetti layer */}
      <AnimatePresence>
        {confetti.length > 0 && (
          <div className="fixed inset-0 z-[10001] pointer-events-none overflow-hidden">
            {confetti.map((c) => (
              <motion.div
                key={c.id}
                initial={{ x: `${c.x}vw`, y: "-5vh", rotate: 0, opacity: 1 }}
                animate={{
                  y: "110vh",
                  rotate: c.rotation + 720,
                  x: `${c.x + (Math.random() - 0.5) * 20}vw`,
                  opacity: [1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5 + Math.random(), delay: c.delay, ease: "easeIn" }}
                style={{
                  position: "absolute",
                  width: c.size,
                  height: c.size * 0.6,
                  background: c.color,
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Hacker overlay */}
      <AnimatePresence>
        {activated && (
          <HackerOverlay onClose={() => setActivated(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default KonamiEasterEgg;
