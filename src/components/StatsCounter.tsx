import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Rocket, Code, Coffee, Users } from "lucide-react";

const stats = [
  { label: "Lines of Code", value: 142387, icon: Code, suffix: "+", color: "hsl(217 91% 60%)" },
  { label: "Ventures Built", value: 2, icon: Rocket, suffix: "", color: "hsl(45 93% 47%)" },
  { label: "Cups of Coffee", value: 847, icon: Coffee, suffix: "+", color: "hsl(25 90% 55%)" },
  { label: "People Impacted", value: 10000, icon: Users, suffix: "+", color: "hsl(160 70% 45%)" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      // Ease-out cubic
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = Math.round(value * progress);
      setDisplay(current);
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, inView]);

  const formatNumber = (n: number) => {
    if (n >= 10000) return (n / 1000).toFixed(0) + "K";
    if (n >= 1000) return n.toLocaleString();
    return n.toString();
  };

  return (
    <span className="tabular-nums">
      {formatNumber(display)}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(217 71% 15% / 0.15) 50%, hsl(var(--background)) 100%)",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="text-center group"
              >
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" style={{
                    background: `radial-gradient(circle, ${stat.color} 0%, transparent 70%)`,
                    filter: "blur(12px)",
                    width: "60px",
                    height: "60px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }} />
                  <Icon className="w-7 h-7" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-mono">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
