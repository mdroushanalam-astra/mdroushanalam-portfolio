import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full border border-border overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, hsl(220 40% 10%) 0%, hsl(240 30% 15%) 100%)"
          : "linear-gradient(135deg, hsl(45 93% 80%) 0%, hsl(200 80% 85%) 100%)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark/light mode"
    >
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
        animate={{
          left: isDark ? "calc(100% - 26px)" : "2px",
          background: isDark ? "hsl(240 30% 20%)" : "hsl(45 93% 55%)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-blue-300" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-yellow-800" />
        )}
      </motion.div>

      {/* Stars for dark mode */}
      {isDark && (
        <>
          <div className="absolute top-1.5 left-2 w-1 h-1 rounded-full bg-white/60" />
          <div className="absolute top-3.5 left-4 w-0.5 h-0.5 rounded-full bg-white/40" />
          <div className="absolute bottom-1.5 left-1.5 w-0.5 h-0.5 rounded-full bg-white/30" />
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
