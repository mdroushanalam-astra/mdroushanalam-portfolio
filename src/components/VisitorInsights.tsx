import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X } from "lucide-react";

const VisitorInsights = () => {
  const [info, setInfo] = useState<{ city?: string; country?: string; flag?: string } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.city) {
          setInfo({
            city: data.city,
            country: data.country_name,
            flag: data.country_code ? String.fromCodePoint(...[...data.country_code.toUpperCase()].map((c: string) => 0x1f1e6 + c.charCodeAt(0) - 65)) : "🌍",
          });
          setTimeout(() => setVisible(true), 2000);
        }
      } catch {
        // silently fail
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), 50000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!info) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed top-[72px] right-4 z-[51] rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg border border-border/30"
          style={{ background: "hsl(var(--card) / 0.95)", backdropFilter: "blur(16px)" }}
        >
          <Globe className="w-4 h-4 text-primary shrink-0" />
          <div className="text-xs">
            <p className="text-foreground font-medium">
              Welcome from {info.city} {info.flag}
            </p>
            <p className="text-muted-foreground">{info.country}</p>
          </div>
          <button onClick={() => setVisible(false)} className="text-muted-foreground/40 hover:text-muted-foreground ml-2">
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VisitorInsights;
