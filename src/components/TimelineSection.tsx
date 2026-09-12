import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import timelineUpsc from "@/assets/timeline-upsc.jpg";
import timelineGraduation from "@/assets/timeline-graduation.jpg";
import timelineAi from "@/assets/timeline-ai.jpg";
import timelineVentures from "@/assets/timeline-ventures.jpg";

const milestones = [
  {
    year: "2021",
    title: "UPSC CSE Preparation Begins",
    image: timelineUpsc,
    desc: "Embarked on one of India's toughest examinations: the UPSC Civil Services Exam. This grueling journey demanded 14-hour study days, mastering subjects from Indian polity and economics to world history and ethics. It forged an unbreakable discipline, razor-sharp analytical thinking, and a profound understanding of governance, public policy, and nation-building. The UPSC journey wasn't just about an exam; it was a crucible that shaped a strategic, resilient mindset ready to tackle any challenge.",
    alt: "Young student studying intensely for UPSC Civil Services Examination surrounded by books",
  },
  {
    year: "2024",
    title: "Graduated BA History | BBMKU Dhanbad",
    image: timelineGraduation,
    desc: "Completed Bachelor of Arts in History from Binod Bihari Mahto Koyalanchal University, Dhanbad. This academic pursuit provided deep perspectives on the rise and fall of civilizations, the mechanics of statecraft, colonial and post-colonial policy frameworks, and the behavioral patterns that drive human societies. History became the lens through which leadership, strategy, and vision could be understood, a foundation for building ventures that shape the future.",
    alt: "Graduation ceremony at BBMKU Dhanbad university with degree scroll",
  },
  {
    year: "2025",
    title: "AI Mastery & Techgram Co-Founded",
    image: timelineAi,
    desc: "Earned cutting-edge AI certifications from Outskill and Google Coursera, diving deep into machine learning, neural networks, and generative AI. Joined RWS Group as an AI Data Trainer, contributing to the refinement of language models powering global AI systems. Simultaneously co-founded Techgram, an ambitious EdTech platform designed to revolutionize how students access quality education, mentorship, and career guidance across India's tier-2 and tier-3 cities.",
    alt: "Professional working with AI interfaces and holographic neural network displays",
  },
  {
    year: "2026",
    title: "Gig-Lo Founded",
    image: timelineVentures,
    desc: "Launched Gig-Lo, a next-generation recruitment platform engineered to make hiring faster, smarter, and more user-friendly through AI-driven matching. This venture represents a vision to redefine recruitment standards in India's gig and professional workforce ecosystem.",
    alt: "Entrepreneur overlooking futuristic cityscape with startup ventures launching",
  },
];

const STOP_DURATION = 10000; // 10 seconds per stop
const TRAVEL_DURATION = 1.2; // seconds for train to travel between stops

const TypewriterText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (!isActive) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [text, isActive]);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className="text-primary-foreground/70 text-sm leading-relaxed">
      {displayed}
      <span className={`inline-block w-0.5 h-4 bg-gold ml-0.5 align-middle transition-opacity ${cursor ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

const TrainSVG = () => (
  <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_hsl(45,93%,47%,0.6)]">
    {/* Body */}
    <rect x="4" y="6" width="52" height="18" rx="4" fill="url(#trainGrad)" stroke="hsl(45,93%,47%)" strokeWidth="1" />
    {/* Front */}
    <path d="M56 10 L62 14 L62 18 L56 22 Z" fill="url(#trainGrad)" stroke="hsl(45,93%,47%)" strokeWidth="1" />
    {/* Windows */}
    <rect x="10" y="10" width="8" height="6" rx="1.5" fill="hsl(217,91%,80%)" opacity="0.7" />
    <rect x="22" y="10" width="8" height="6" rx="1.5" fill="hsl(217,91%,80%)" opacity="0.7" />
    <rect x="34" y="10" width="8" height="6" rx="1.5" fill="hsl(217,91%,80%)" opacity="0.7" />
    {/* Headlight */}
    <circle cx="60" cy="16" r="2" fill="hsl(45,93%,70%)" />
    {/* Wheels */}
    <circle cx="14" cy="26" r="3" fill="hsl(220,40%,30%)" stroke="hsl(45,93%,47%)" strokeWidth="0.8" />
    <circle cx="30" cy="26" r="3" fill="hsl(220,40%,30%)" stroke="hsl(45,93%,47%)" strokeWidth="0.8" />
    <circle cx="46" cy="26" r="3" fill="hsl(220,40%,30%)" stroke="hsl(45,93%,47%)" strokeWidth="0.8" />
    {/* Smoke stack */}
    <rect x="46" y="2" width="4" height="5" rx="1" fill="hsl(217,71%,25%)" stroke="hsl(45,93%,47%)" strokeWidth="0.5" />
    <defs>
      <linearGradient id="trainGrad" x1="0" y1="6" x2="0" y2="24">
        <stop offset="0%" stopColor="hsl(217,71%,30%)" />
        <stop offset="100%" stopColor="hsl(220,40%,15%)" />
      </linearGradient>
    </defs>
  </svg>
);

const SmokeParticles = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="absolute -top-6 left-[46px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-foreground/20"
          initial={{ opacity: 0.6, scale: 0.3, x: 0, y: 0 }}
          animate={{
            opacity: [0.6, 0.3, 0],
            scale: [0.3, 0.8, 1.2],
            x: [0, -8 - i * 4, -20 - i * 6],
            y: [0, -10 - i * 3, -20 - i * 5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const stationPositions = milestones.map((_, i) => (i / (milestones.length - 1)) * 100);

  const moveToNext = useCallback(() => {
    if (isPaused) return;
    setIsMoving(true);
    setTimeout(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % milestones.length;
        return next;
      });
      setIsMoving(false);
    }, TRAVEL_DURATION * 1000);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(moveToNext, STOP_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, isMoving, isPaused, moveToNext]);

  const goToStation = (index: number) => {
    if (index === activeIndex || isMoving) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsMoving(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsMoving(false);
    }, TRAVEL_DURATION * 1000);
  };

  const trainX = stationPositions[activeIndex];

  return (
    <section
      id="journey"
      className="py-24 md:py-32 relative overflow-hidden"
      aria-label="Career journey timeline"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, hsl(217 71% 15%) 0%, hsl(220 50% 5%) 60%, hsl(240 30% 3%) 100%)",
      }}
    >
      {/* Ambient glow effects */}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">
            The Journey Through Time
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            From <span className="text-gradient-gold">Aspiration</span> to <span className="text-gradient-royal">Innovation</span>
          </h2>
          <p className="text-primary-foreground/40 max-w-lg mx-auto text-sm">
            Board the express and travel through the defining chapters of a relentless pursuit, each station a milestone that shaped who I am.
          </p>
        </motion.header>

        {/* Horizontal Train Track Area */}
        <div className="relative max-w-3xl mx-auto" ref={trackRef}>
          {/* The railroad track */}
          <div className="relative h-16 mb-8">
            {/* Track base */}
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full" style={{
              background: "linear-gradient(90deg, transparent 0%, hsl(217 91% 40% / 0.4) 10%, hsl(217 91% 40% / 0.4) 90%, transparent 100%)",
            }} />
            {/* Track glow line (progress) */}
            <motion.div
              className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(217 91% 60%) 0%, hsl(45 93% 47%) 100%)",
                boxShadow: "0 0 20px hsl(217 91% 60% / 0.5), 0 0 40px hsl(45 93% 47% / 0.2)",
              }}
              animate={{ width: `${trainX}%` }}
              transition={{ duration: TRAVEL_DURATION, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            {/* Sleepers / ties */}
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full"
                style={{
                  left: `${(i / 39) * 100}%`,
                  background: "hsl(217 91% 60% / 0.15)",
                }}
              />
            ))}

            {/* Station markers */}
            {milestones.map((m, i) => (
              <button
                key={m.year}
                onClick={() => goToStation(i)}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 group cursor-pointer"
                style={{ left: `${stationPositions[i]}%` }}
                aria-label={`Go to ${m.year} | ${m.title}`}
              >
                <motion.div
                  className="w-5 h-5 rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: i === activeIndex ? "hsl(45 93% 47%)" : "hsl(217 91% 60% / 0.4)",
                    background: i === activeIndex
                      ? "radial-gradient(circle, hsl(45 93% 60%) 0%, hsl(217 91% 60%) 100%)"
                      : "hsl(220 40% 10%)",
                    boxShadow: i === activeIndex ? "0 0 20px hsl(45 93% 47% / 0.6)" : "none",
                  }}
                  animate={i === activeIndex ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ duration: 1, repeat: i === activeIndex ? Infinity : 0 }}
                />
                <span className={`absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono font-bold transition-colors duration-300 whitespace-nowrap ${i === activeIndex ? "text-gold" : "text-primary-foreground/30"
                  }`}>
                  {m.year}
                </span>
              </button>
            ))}

            {/* The Train */}
            <motion.div
              className="absolute top-1/2 -translate-y-[70%] -translate-x-1/2 z-20"
              animate={{ left: `${trainX}%` }}
              transition={{ duration: TRAVEL_DURATION, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative">
                <SmokeParticles active={isMoving} />
                <motion.div
                  animate={isMoving ? { y: [0, -1, 0, 1, 0] } : { y: 0 }}
                  transition={isMoving ? { duration: 0.2, repeat: Infinity } : {}}
                >
                  <TrainSVG />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-xs text-primary-foreground/40 hover:text-gold transition-colors border border-primary-foreground/10 hover:border-gold/30 rounded-full px-4 py-1.5 backdrop-blur-sm"
              aria-label={isPaused ? "Resume auto-play" : "Pause auto-play"}
            >
              {isPaused ? "▶ Resume" : "⏸ Pause"}
            </button>
          </div>

          {/* Card Display Area */}
          <div className="relative min-h-[420px] md:min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeIndex}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-4xl mx-auto"
              >
                {/* Card glow */}
                <div className="absolute -inset-1 rounded-3xl opacity-40" style={{
                  background: "linear-gradient(135deg, hsl(217 91% 60% / 0.2) 0%, hsl(45 93% 47% / 0.15) 100%)",
                  filter: "blur(20px)",
                }} />

                <div
                  className="relative rounded-3xl overflow-hidden backdrop-blur-2xl border border-primary-foreground/10"
                  style={{
                    background: "linear-gradient(135deg, hsl(217 71% 18% / 0.7) 0%, hsl(220 40% 8% / 0.9) 100%)",
                  }}
                >
                  {/* Top shimmer line */}
                  <div className="absolute top-0 left-0 w-full h-px" style={{
                    background: "linear-gradient(90deg, transparent 0%, hsl(217 91% 60% / 0.5) 30%, hsl(45 93% 47% / 0.5) 70%, transparent 100%)",
                  }} />

                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <motion.img
                        src={milestones[activeIndex].image}
                        alt={milestones[activeIndex].alt}
                        className="w-full h-56 md:h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0" style={{
                        background: "linear-gradient(90deg, transparent 60%, hsl(220 40% 8% / 0.9) 100%)",
                      }} />
                      <div className="absolute inset-0 md:hidden" style={{
                        background: "linear-gradient(180deg, transparent 50%, hsl(220 40% 8% / 0.9) 100%)",
                      }} />
                      {/* Year badge on image */}
                      <div className="absolute top-4 left-4">
                        <motion.span
                          className="text-gold font-bold text-4xl font-mono drop-shadow-[0_0_15px_hsl(45,93%,47%,0.5)]"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {milestones[activeIndex].year}
                        </motion.span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                      <motion.h3
                        className="text-primary-foreground font-bold text-xl md:text-2xl mb-4"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {milestones[activeIndex].title}
                      </motion.h3>

                      <div className="min-h-[140px]">
                        <TypewriterText
                          text={milestones[activeIndex].desc}
                          isActive={!isMoving}
                        />
                      </div>

                      {/* Progress bar showing time at station */}
                      <div className="mt-6">
                        <div className="h-0.5 w-full bg-primary-foreground/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: "linear-gradient(90deg, hsl(217 91% 60%) 0%, hsl(45 93% 47%) 100%)",
                            }}
                            initial={{ width: "0%" }}
                            animate={{ width: isPaused ? undefined : "100%" }}
                            transition={{
                              duration: STOP_DURATION / 1000,
                              ease: "linear",
                            }}
                            key={`progress-${activeIndex}-${isPaused}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10" style={{
                    background: "radial-gradient(circle at bottom right, hsl(45 93% 47% / 0.5) 0%, transparent 70%)",
                  }} />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Station navigation dots (mobile friendly) */}
          <div className="flex justify-center gap-3 mt-8">
            {milestones.map((m, i) => (
              <button
                key={m.year}
                onClick={() => goToStation(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-gold w-6 shadow-[0_0_10px_hsl(45,93%,47%,0.5)]" : "bg-primary-foreground/20 hover:bg-primary-foreground/40"
                  }`}
                aria-label={`View ${m.year}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
