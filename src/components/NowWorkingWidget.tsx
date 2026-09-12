import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Code, Zap, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Techgram",
    task: "Designing student onboarding flow",
    progress: 45,
    status: "Design Phase",
    color: "hsl(45 93% 47%)",
    url: "https://techgramedu.in",
  },
  {
    name: "Gig-Lo",
    task: "Marketplace MVP development",
    progress: 30,
    status: "Building",
    color: "hsl(150 60% 45%)",
    url: "https://giglo.in",
  },
];

const NowWorkingWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) return;
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isExpanded]);

  const current = projects[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative rounded-2xl overflow-hidden border border-border shadow-xl text-left"
        style={{
          background: "hsl(var(--card))",
          width: isExpanded ? "280px" : "240px",
        }}
      >
        {/* Top accent bar */}
        <div className="h-0.5 w-full" style={{ background: current.color }} />

        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <Activity className="h-4 w-4 text-green-400" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Now Working On</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-foreground font-semibold text-sm">{current.name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{current.task}</p>

              {/* Progress bar */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: current.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${current.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">{current.progress}%</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Expanded details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-3 pt-3 border-t border-border space-y-2">
                  {projects.map((p, i) => (
                    <a
                      key={i}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors text-xs ${i === currentIndex ? "bg-muted" : "hover:bg-muted/50"
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                        <span className="text-foreground font-medium">{p.name}</span>
                      </div>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Track dots */}
          <div className="flex justify-center gap-1 mt-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full transition-all ${i === currentIndex ? "bg-foreground w-3" : "bg-muted-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default NowWorkingWidget;
