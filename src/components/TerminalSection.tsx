import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const terminalLines = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "md_roushan_alam | Founder | AI Entrepreneur" },
  { type: "command", text: "$ cat ventures.json" },
  { type: "output", text: '{\n  "techgram": { "status": "BUILDING", "domain": "EdTech" },\n  "gig_lo": { "status": "BUILDING", "domain": "Recruitment" }\n}' },
  { type: "command", text: "$ stats --career" },
  { type: "output", text: "┌─────────────────────────────────┐\n│ Startups Founded:     2         │\n│ UPSC Prep Years:      4         │\n│ Client Projects:      50+       │\n│ Cities Impacted:      100+      │\n│ Blog Articles:        12+       │\n│ Certifications:       4         │\n└─────────────────────────────────┘" },
  { type: "command", text: "$ echo $MISSION" },
  { type: "output", text: "Build ventures & share ideas that reshape society \ud83d\ude80" },
  { type: "command", text: "$ uptime --journey" },
  { type: "output", text: "Running since 2021 | 5 years of relentless building" },
  { type: "command", text: "$ cat /etc/philosophy" },
  { type: "output", text: '"Technology without empathy is incomplete. Build for people, not just users."' },
  { type: "command", text: "$ ls ~/skills/" },
  { type: "output", text: "product_building/  ideas_perspectives/  ai_consulting/  strategy/  public_policy/  communication/" },
  { type: "command", text: "$ ping -c 3 inspiration" },
  { type: "output", text: "64 bytes from techgram: icmp_seq=1 ttl=64 time=0.012 ms\n64 bytes from gig-lo: icmp_seq=2 ttl=64 time=0.015 ms\n64 bytes from innovation: icmp_seq=3 ttl=64 time=0.011 ms" },
  { type: "command", text: "$ git log --oneline -5" },
  { type: "output", text: "a3f21b4 feat: launch Gig-Lo recruitment platform MVP\n8e1c9d2 fix: optimize AI agent response time\n5b7a3e1 feat: add student onboarding to Techgram\n1a4e7b3 init: begin UPSC preparation journey" },
  { type: "command", text: "$ neofetch" },
  { type: "output", text: "OS:      Founder Linux 5.0\nHost:    Everywhere\nKernel:  ambition-driven\nUptime:  5 years\nShell:   hustle/24x7\nTheme:   Royal Blue + Gold [Dark]" },
  { type: "command", text: "$ echo 'Restarting loop...'" },
  { type: "output", text: "Restarting loop..." },
  { type: "command", text: "$ clear && echo '--- CYCLE RESTART ---'" },
  { type: "output", text: "--- CYCLE RESTART ---\n" },
];

type DisplayedLine = { type: string; text: string };

const TerminalSection = () => {
  const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const idx = lineIndex % terminalLines.length;
    const line = terminalLines[idx];

    // On cycle restart, clear displayed lines
    if (idx === 0 && lineIndex > 0) {
      setDisplayedLines([]);
    }

    if (line.type === "command") {
      setIsTyping(true);
      let i = 0;
      const fullText = line.text;
      const interval = setInterval(() => {
        if (i < fullText.length) {
          setCurrentText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setDisplayedLines((prev) => [...prev, line]);
          setCurrentText("");
          setTimeout(() => setLineIndex((v) => v + 1), 300);
        }
      }, 40);
      return () => clearInterval(interval);
    } else {
      setDisplayedLines((prev) => [...prev, line]);
      setTimeout(() => setLineIndex((v) => v + 1), 800);
    }
  }, [lineIndex, started]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines, currentText]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(220 50% 5%) 0%, hsl(220 40% 7%) 50%, hsl(220 50% 5%) 100%)",
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">Behind The Scenes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            The <span className="text-gradient-gold">Terminal</span>
          </h2>
          <p className="text-primary-foreground/40 max-w-md mx-auto text-sm">
            A peek into the system: stats, philosophy, and mission, streaming endlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-primary-foreground/10 shadow-2xl shadow-royal/10">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: "hsl(220 30% 12%)" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: "hsl(0 70% 55%)" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "hsl(45 80% 55%)" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "hsl(140 60% 45%)" }} />
              </div>
              <div className="flex-1 text-center">
                <span className="text-primary-foreground/30 text-xs font-mono flex items-center justify-center gap-1.5">
                  <TerminalIcon className="h-3 w-3" /> roushan@portfolio ~ zsh
                </span>
              </div>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="p-5 font-mono text-sm leading-relaxed h-[400px] overflow-y-auto"
              style={{
                background: "hsl(220 40% 5%)",
                scrollbarWidth: "thin",
                scrollbarColor: "hsl(217 91% 60% / 0.2) transparent",
              }}
            >
              {displayedLines.map((line, i) => (
                <div key={i} className="mb-1">
                  {line.type === "command" ? (
                    <span style={{ color: "hsl(140 60% 55%)" }}>{line.text}</span>
                  ) : (
                    <pre className="text-primary-foreground/70 whitespace-pre-wrap text-xs">{line.text}</pre>
                  )}
                </div>
              ))}
              {isTyping && (
                <div>
                  <span style={{ color: "hsl(140 60% 55%)" }}>{currentText}</span>
                  <span style={{ color: "hsl(140 60% 55%)" }} className="animate-pulse">▊</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
