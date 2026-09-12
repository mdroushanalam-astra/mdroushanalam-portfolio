import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Command, Moon, Sun, Music, MessageCircle, BookOpen, Briefcase, User, Mail, Sparkles, Map, Code, Eye, Newspaper } from "lucide-react";
import { useTheme } from "next-themes";

interface PaletteItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: "navigate" | "action" | "tool";
}

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const items: PaletteItem[] = [
    { id: "hero", label: "Go to Top", description: "Scroll to hero section", icon: <ArrowRight className="w-4 h-4" />, action: () => scrollTo("hero"), category: "navigate" },
    { id: "about", label: "About", description: "Learn about Roushan", icon: <User className="w-4 h-4" />, action: () => scrollTo("about"), category: "navigate" },
    { id: "ventures", label: "Ventures", description: "Explore startups & projects", icon: <Briefcase className="w-4 h-4" />, action: () => scrollTo("ventures"), category: "navigate" },
    { id: "journey", label: "Journey", description: "Timeline & milestones", icon: <Map className="w-4 h-4" />, action: () => scrollTo("journey"), category: "navigate" },
    { id: "terminal", label: "Terminal", description: "Interactive terminal", icon: <Code className="w-4 h-4" />, action: () => scrollTo("terminal"), category: "navigate" },
    { id: "skills", label: "Skills", description: "Technical capabilities", icon: <Sparkles className="w-4 h-4" />, action: () => scrollTo("skills"), category: "navigate" },
    { id: "vision", label: "Vision Board", description: "Future goals & aspirations", icon: <Eye className="w-4 h-4" />, action: () => scrollTo("vision"), category: "navigate" },
    { id: "blog", label: "Blog", description: "Read articles & insights", icon: <BookOpen className="w-4 h-4" />, action: () => scrollTo("blog"), category: "navigate" },
    { id: "newsletter", label: "Newsletter", description: "Subscribe to updates", icon: <Newspaper className="w-4 h-4" />, action: () => scrollTo("newsletter"), category: "navigate" },
    { id: "contact", label: "Contact", description: "Get in touch", icon: <Mail className="w-4 h-4" />, action: () => scrollTo("contact"), category: "navigate" },
    {
      id: "theme",
      label: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      description: "Toggle appearance",
      icon: theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />,
      action: () => { setTheme(theme === "dark" ? "light" : "dark"); setOpen(false); },
      category: "action",
    },
    {
      id: "chatbot",
      label: "Open AI Assistant",
      description: "Chat with Roushan's AI",
      icon: <MessageCircle className="w-4 h-4" />,
      action: () => { setOpen(false); document.querySelector<HTMLButtonElement>('[aria-label="Open AI assistant"]')?.click(); },
      category: "tool",
    },
  ];

  const filtered = items.filter(
    (i) =>
      i.label.toLowerCase().includes(query.toLowerCase()) ||
      i.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") setOpen(false);
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleItemKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      filtered[selectedIndex].action();
    }
  };

  const categoryLabel = (cat: string) => {
    switch (cat) {
      case "navigate": return "Navigation";
      case "action": return "Actions";
      case "tool": return "Tools";
      default: return cat;
    }
  };

  const grouped = filtered.reduce<Record<string, PaletteItem[]>>((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9999] w-[90vw] max-w-lg"
          >
            <div
              className="rounded-2xl border border-border/50 shadow-2xl overflow-hidden"
              style={{
                background: "hsl(var(--card) / 0.95)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                  onKeyDown={handleItemKeyDown}
                  placeholder="Search commands, sections, actions..."
                  className="flex-1 bg-transparent text-foreground text-sm outline-none placeholder:text-muted-foreground/60"
                />
                <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-72 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="text-center text-muted-foreground text-sm py-8">No results found</p>
                ) : (
                  Object.entries(grouped).map(([cat, items]) => (
                    <div key={cat}>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold px-3 py-1.5">
                        {categoryLabel(cat)}
                      </p>
                      {items.map((item) => {
                        flatIndex++;
                        const idx = flatIndex;
                        return (
                          <button
                            key={item.id}
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                              selectedIndex === idx
                                ? "bg-primary/10 text-foreground"
                                : "text-muted-foreground hover:bg-muted/50"
                            }`}
                          >
                            <span className={selectedIndex === idx ? "text-primary" : "text-muted-foreground/60"}>
                              {item.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{item.label}</p>
                              <p className="text-xs text-muted-foreground/60 truncate">{item.description}</p>
                            </div>
                            {selectedIndex === idx && (
                              <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-border/50 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground/50">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                  <span>ESC Close</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
