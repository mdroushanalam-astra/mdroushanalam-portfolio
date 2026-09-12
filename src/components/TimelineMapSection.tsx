import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import timelineUpsc from "@/assets/timeline-upsc.jpg";
import timelineGraduation from "@/assets/timeline-graduation.jpg";
import timelineAi from "@/assets/timeline-ai.jpg";
import timelineVentures from "@/assets/timeline-ventures.jpg";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  x: number; // percentage position on map
  y: number;
  icon: string;
  region: string;
}

const milestones: Milestone[] = [
  {
    year: "2021",
    title: "UPSC CSE Preparation Begins",
    image: timelineUpsc,
    desc: "Embarked on India's toughest examination: the UPSC Civil Services Exam. 14-hour study days forged an unbreakable discipline, razor-sharp analytical thinking, and a profound understanding of governance and public policy.",
    alt: "Student studying for UPSC Civil Services Examination",
    x: 15,
    y: 55,
    icon: "📚",
    region: "The Scholar's Realm",
  },
  {
    year: "2024",
    title: "Graduated BA History | BBMKU Dhanbad",
    image: timelineGraduation,
    desc: "Completed BA History from BBMKU, Dhanbad. Gained deep perspectives on civilizations, statecraft, colonial frameworks, and behavioral patterns that drive societies, a foundation for ventures that shape the future.",
    alt: "Graduation ceremony at BBMKU Dhanbad",
    x: 38,
    y: 35,
    icon: "🎓",
    region: "The Academy",
  },
  {
    year: "2025",
    title: "AI Mastery & Techgram Co-Founded",
    image: timelineAi,
    desc: "Earned AI certifications from Outskill & Google Coursera. Joined RWS Group as AI Data Trainer. Co-founded Techgram, an EdTech platform revolutionizing student access to quality education across India.",
    alt: "Working with AI interfaces and neural networks",
    x: 62,
    y: 60,
    icon: "🤖",
    region: "The Innovation District",
  },
  {
    year: "2026",
    title: "Gig-Lo Founded",
    image: timelineVentures,
    desc: "Launched Gig-Lo, a next-generation recruitment platform engineered to make hiring faster, smarter, and more user-friendly through AI-driven matching and standardized job frameworks.",
    alt: "Entrepreneur with futuristic startup ventures",
    x: 85,
    y: 40,
    icon: "🚀",
    region: "The Frontier",
  },
];

const TimelineMapSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleZoom = useCallback((dir: number) => {
    setZoom((z) => Math.max(0.8, Math.min(2, z + dir * 0.2)));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: dragStart.current.panX + (e.clientX - dragStart.current.x) / zoom,
      y: dragStart.current.panY + (e.clientY - dragStart.current.y) / zoom,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const navigateTo = (index: number) => {
    setActiveIndex(index);
    const m = milestones[index];
    // Center on the milestone
    setPan({ x: -(m.x - 50) * 3, y: -(m.y - 50) * 2 });
    setZoom(1.3);
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-12 md:py-16 relative overflow-hidden"
      aria-label="Interactive career journey map"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, hsl(217 71% 15%) 0%, hsl(220 50% 5%) 60%, hsl(240 30% 3%) 100%)",
      }}
    >
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-15" style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{
          background: "radial-gradient(circle, hsl(45 93% 47% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">
            🗺️ Explore The Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            The <span className="text-gradient-gold">Adventure</span> Map
          </h2>
          <p className="text-primary-foreground/40 max-w-lg mx-auto text-sm">
            Click markers to explore each era. Drag to pan, zoom to dive deeper into the story.
          </p>
        </motion.header>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Zoom controls */}
          <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
            <button onClick={() => handleZoom(1)} className="w-8 h-8 rounded-lg flex items-center justify-center border border-primary-foreground/10 backdrop-blur-sm hover:border-gold/30 transition-colors" style={{ background: "hsl(220 40% 10% / 0.8)" }}>
              <ZoomIn className="w-4 h-4 text-primary-foreground/60" />
            </button>
            <button onClick={() => handleZoom(-1)} className="w-8 h-8 rounded-lg flex items-center justify-center border border-primary-foreground/10 backdrop-blur-sm hover:border-gold/30 transition-colors" style={{ background: "hsl(220 40% 10% / 0.8)" }}>
              <ZoomOut className="w-4 h-4 text-primary-foreground/60" />
            </button>
            <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); setActiveIndex(null); }} className="w-8 h-8 rounded-lg flex items-center justify-center border border-primary-foreground/10 backdrop-blur-sm hover:border-gold/30 transition-colors text-[10px] text-primary-foreground/40 font-mono" style={{ background: "hsl(220 40% 10% / 0.8)" }}>
              RST
            </button>
          </div>

          {/* Map area */}
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden border border-primary-foreground/10 select-none"
            style={{
              height: "500px",
              background: "linear-gradient(135deg, hsl(220 40% 8%) 0%, hsl(217 71% 12%) 50%, hsl(220 35% 10%) 100%)",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />

            {/* Pannable/zoomable layer */}
            <div
              className="absolute inset-0 transition-transform duration-300"
              style={{
                transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                transformOrigin: "center center",
              }}
            >
              {/* Connection paths between milestones */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="hsl(45 93% 47%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {milestones.slice(0, -1).map((m, i) => {
                  const next = milestones[i + 1];
                  const midX = (m.x + next.x) / 2;
                  const midY = Math.min(m.y, next.y) - 10;
                  return (
                    <path
                      key={i}
                      d={`M ${m.x} ${m.y} Q ${midX} ${midY} ${next.x} ${next.y}`}
                      stroke="url(#pathGrad)"
                      strokeWidth="0.3"
                      fill="none"
                      strokeDasharray="1 1"
                    />
                  );
                })}
              </svg>

              {/* Region labels */}
              {milestones.map((m, i) => (
                <div
                  key={`region-${i}`}
                  className="absolute text-[8px] font-mono uppercase tracking-[0.2em] text-primary-foreground/10 pointer-events-none"
                  style={{ left: `${m.x}%`, top: `${m.y - 12}%`, transform: "translateX(-50%)" }}
                >
                  {m.region}
                </div>
              ))}

              {/* Milestone markers */}
              {milestones.map((m, i) => (
                <button
                  key={i}
                  onClick={() => navigateTo(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                  style={{ left: `${m.x}%`, top: `${m.y}%` }}
                  aria-label={`${m.year}: ${m.title}`}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      width: 48,
                      height: 48,
                      left: -12,
                      top: -12,
                      border: `2px solid ${activeIndex === i ? "hsl(45 93% 47%)" : "hsl(217 91% 60% / 0.3)"}`,
                    }}
                    animate={activeIndex === i ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Marker */}
                  <motion.div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs relative z-10 transition-all duration-300"
                    whileHover={{ scale: 1.3 }}
                    style={{
                      background: activeIndex === i
                        ? "linear-gradient(135deg, hsl(45 93% 47%), hsl(217 91% 60%))"
                        : "hsl(220 40% 15%)",
                      border: `2px solid ${activeIndex === i ? "hsl(45 93% 47%)" : "hsl(217 91% 60% / 0.5)"}`,
                      boxShadow: activeIndex === i
                        ? "0 0 20px hsl(45 93% 47% / 0.5), 0 0 40px hsl(217 91% 60% / 0.2)"
                        : "0 0 10px hsl(217 91% 60% / 0.2)",
                    }}
                  >
                    <span className="text-[10px]">{m.icon}</span>
                  </motion.div>
                  {/* Year label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className={`text-[10px] font-mono font-bold ${activeIndex === i ? "text-gold" : "text-primary-foreground/30"}`}>
                      {m.year}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Compass */}
            <div className="absolute bottom-4 left-4 opacity-20">
              <div className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-foreground/40" />
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mt-4">
            {milestones.map((m, i) => (
              <button
                key={i}
                onClick={() => navigateTo(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all font-mono ${activeIndex === i
                  ? "border-gold/50 text-gold bg-gold/10"
                  : "border-primary-foreground/10 text-primary-foreground/30 hover:text-primary-foreground/60"
                  }`}
              >
                {m.year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mt-8"
            >
              <div
                className="rounded-2xl overflow-hidden border border-primary-foreground/10 backdrop-blur-xl"
                style={{
                  background: "linear-gradient(135deg, hsl(217 71% 18% / 0.7) 0%, hsl(220 40% 8% / 0.9) 100%)",
                }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={milestones[activeIndex].image}
                      alt={milestones[activeIndex].alt}
                      className="w-full h-52 md:h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{
                      background: "linear-gradient(90deg, transparent 50%, hsl(220 40% 8% / 0.9) 100%)",
                    }} />
                    <div className="absolute top-4 left-4">
                      <span className="text-gold font-bold text-3xl font-mono drop-shadow-[0_0_15px_hsl(45,93%,47%,0.5)]">
                        {milestones[activeIndex].year}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-[10px] text-royal font-mono uppercase tracking-wider mb-2">
                      {milestones[activeIndex].region}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-4">
                      {milestones[activeIndex].title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">
                      {milestones[activeIndex].desc}
                    </p>
                    <div className="flex gap-2 mt-6">
                      <button
                        onClick={() => navigateTo(Math.max(0, activeIndex - 1))}
                        disabled={activeIndex === 0}
                        className="text-xs flex items-center gap-1 text-primary-foreground/30 hover:text-gold disabled:opacity-20 transition-colors"
                      >
                        <ChevronLeft className="w-3 h-3" /> Prev
                      </button>
                      <button
                        onClick={() => navigateTo(Math.min(milestones.length - 1, activeIndex + 1))}
                        disabled={activeIndex === milestones.length - 1}
                        className="text-xs flex items-center gap-1 text-primary-foreground/30 hover:text-gold disabled:opacity-20 transition-colors"
                      >
                        Next <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TimelineMapSection;
