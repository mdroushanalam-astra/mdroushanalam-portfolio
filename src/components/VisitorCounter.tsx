import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Eye, Globe2 } from "lucide-react";

const VisitorCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const [locations] = useState(() => [
    { city: "Mumbai", flag: "🇮🇳" },
    { city: "Delhi", flag: "🇮🇳" },
    { city: "Bangalore", flag: "🇮🇳" },
    { city: "San Francisco", flag: "🇺🇸" },
    { city: "London", flag: "🇬🇧" },
    { city: "Singapore", flag: "🇸🇬" },
    { city: "Dubai", flag: "🇦🇪" },
    { city: "Tokyo", flag: "🇯🇵" },
  ]);
  const [activeLocations, setActiveLocations] = useState<number[]>([0, 2, 4]);

  // Simulated live counter
  useEffect(() => {
    if (!inView) return;
    // Initial count
    setCount(Math.floor(Math.random() * 5) + 12);

    const interval = setInterval(() => {
      setCount((c) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(5, Math.min(30, c + change));
      });
    }, 5000);

    const locationInterval = setInterval(() => {
      setActiveLocations((prev) => {
        const newSet = [...prev];
        const removeIdx = Math.floor(Math.random() * newSet.length);
        newSet.splice(removeIdx, 1);
        let newLoc: number;
        do {
          newLoc = Math.floor(Math.random() * locations.length);
        } while (newSet.includes(newLoc));
        newSet.push(newLoc);
        return newSet;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(locationInterval);
    };
  }, [inView, locations.length]);

  return (
    <div ref={ref} className="fixed top-20 right-4 z-30 hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
        className="rounded-xl border border-border/30 backdrop-blur-xl p-3 w-[180px]"
        style={{
          background: "hsl(var(--card) / 0.85)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="relative">
            <Eye className="w-3.5 h-3.5 text-royal" />
            <motion.div
              className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Live Now</span>
        </div>

        <div className="flex items-baseline gap-1 mb-3">
          <motion.span
            key={count}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-foreground font-mono"
          >
            {count}
          </motion.span>
          <span className="text-[10px] text-muted-foreground">visitors</span>
        </div>

        <div className="space-y-1.5">
          {activeLocations.map((locIdx, i) => {
            const loc = locations[locIdx];
            return (
              <motion.div
                key={`${locIdx}-${i}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1.5"
              >
                <Globe2 className="w-2.5 h-2.5 text-muted-foreground/50" />
                <span className="text-[10px] text-muted-foreground truncate">{loc.flag} {loc.city}</span>
                <motion.div
                  className="w-1 h-1 rounded-full bg-emerald-500 ml-auto"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default VisitorCounter;
