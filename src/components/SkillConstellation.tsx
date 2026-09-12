import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Brain, Code, Zap, Target, BarChart3, Rocket, Globe, Cpu, Lightbulb, Megaphone, Layers, Settings } from "lucide-react";

/* ───────── SKILL DATA ───────── */

const skills = [
  {
    name: "Strategic Thinking & Planning",
    level: 95,
    icon: Brain,
    color: "hsl(45, 93%, 47%)",
    description: "Systems-level thinking forged through UPSC preparation, applied to venture building, market positioning, and high-stakes business decisions.",
    featured: true,
  },
  {
    name: "AI-Powered Development",
    level: 92,
    icon: Code,
    color: "hsl(217, 91%, 60%)",
    description: "Building full-stack AI-powered applications, from intelligent web platforms to automated business systems, using cutting-edge AI tools and frameworks.",
    featured: true,
  },
  {
    name: "Prompt Engineering",
    level: 94,
    icon: Zap,
    color: "hsl(280, 70%, 55%)",
    description: "Crafting precision prompts for LLMs to deliver production-ready outputs. Fine-tuning AI behavior for client-specific workflows and business logic.",
    featured: true,
  },
  {
    name: "Machine Learning & AI",
    level: 90,
    icon: Cpu,
    color: "hsl(160, 84%, 39%)",
    description: "Hands-on experience in AI model training, evaluation, and deployment. Former AI Trainer at RWS Group, improving LLM accuracy and reasoning.",
    featured: true,
  },
  {
    name: "Business Transformation",
    level: 91,
    icon: Rocket,
    color: "hsl(340, 75%, 55%)",
    description: "End-to-end digitization of businesses using AI. Translating complex AI capabilities into actionable, revenue-driving upgrades for SMEs and startups.",
  },
  {
    name: "SEO / GEO Powered by AI",
    level: 88,
    icon: Globe,
    color: "hsl(200, 80%, 50%)",
    description: "Designing AI-driven content pipelines to grow organic traffic and local visibility. Integrating language-model-powered SEO and GEO strategies for global reach.",
  },
  {
    name: "Product Strategy",
    level: 93,
    icon: Target,
    color: "hsl(25, 90%, 55%)",
    description: "Identifying unsolved problems and designing products people actually need. Driving product vision and go-to-market strategy for Techgram and Gig-Lo.",
  },
  {
    name: "Revenue Growth Strategy",
    level: 87,
    icon: BarChart3,
    color: "hsl(140, 70%, 45%)",
    description: "Data-driven ad campaigns and AI-optimized growth strategies that have consistently boosted client revenue by 100%+ across diverse industries.",
  },
  {
    name: "Vibe Coding",
    level: 89,
    icon: Layers,
    color: "hsl(260, 70%, 60%)",
    description: "AI-assisted rapid development. Building functional prototypes and full products at speed using AI copilots and modern development workflows.",
  },
  {
    name: "AI Workflow Automation",
    level: 86,
    icon: Settings,
    color: "hsl(190, 80%, 45%)",
    description: "Designing custom AI workflows that automate repetitive processes, streamline operations, and free teams to focus on high-value creative work.",
  },
  {
    name: "Generative AI Applications",
    level: 91,
    icon: Lightbulb,
    color: "hsl(50, 90%, 50%)",
    description: "Deploying generative AI across content creation, customer experience, internal tools, and creative production for real business outcomes.",
  },
  {
    name: "Ad Campaigns & Creative",
    level: 85,
    icon: Megaphone,
    color: "hsl(0, 75%, 55%)",
    description: "Managing paid ad campaigns with AI-powered creative design, targeting, and optimization. Turning ad spend into measurable, scalable results.",
  },
];

const featured = skills.filter((s) => s.featured);
const secondary = skills.filter((s) => !s.featured);

/* ───────── ANIMATED PROGRESS BAR ───────── */

const ProgressBar = ({
  level,
  color,
  delay,
  isInView,
}: {
  level: number;
  color: string;
  delay: number;
  isInView: boolean;
}) => (
  <div className="relative w-full h-1.5 rounded-full overflow-hidden" style={{ background: "hsl(217 32% 17% / 0.6)" }}>
    <motion.div
      className="absolute inset-y-0 left-0 rounded-full"
      style={{ background: `linear-gradient(90deg, ${color}CC, ${color})` }}
      initial={{ width: "0%" }}
      animate={isInView ? { width: `${level}%` } : {}}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    />
    {/* Shimmer effect that loops */}
    <motion.div
      className="absolute inset-y-0 w-16 rounded-full"
      style={{ background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }}
      animate={{ x: ["-64px", "800px"] }}
      transition={{ duration: 3, repeat: Infinity, delay: delay + 1.5, repeatDelay: 3, ease: "easeInOut" }}
    />
    {/* Pulsing end dot */}
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
      style={{
        background: color,
        boxShadow: `0 0 8px ${color}80`,
        left: `${level}%`,
        marginLeft: "-5px",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? {
        opacity: [0, 1, 0.7, 1],
        scale: [0, 1, 0.85, 1],
      } : {}}
      transition={{
        duration: 2,
        delay: delay + 1.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  </div>
);

/* ───────── FEATURED SKILL CARD ───────── */

const FeaturedCard = ({
  skill,
  index,
  isInView,
}: {
  skill: typeof skills[0];
  index: number;
  isInView: boolean;
}) => {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-default"
    >
      <div
        className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden h-full transition-all duration-500"
        style={{
          borderColor: hovered ? `${skill.color}35` : undefined,
          boxShadow: hovered ? `0 12px 50px ${skill.color}12, 0 0 30px ${skill.color}08` : undefined,
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `radial-gradient(ellipse at 20% 0%, ${skill.color}0A, transparent 60%)` }}
        />

        <div className="relative">
          {/* Header row */}
          <div className="flex items-start gap-4 mb-5">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${skill.color}15` }}
              animate={hovered ? {
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              } : {}}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-5 h-5" style={{ color: skill.color }} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h4
                className="text-base md:text-lg font-bold text-white leading-tight mb-1 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {skill.name}
              </h4>
              <span
                className="text-xs font-mono tracking-wider"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[13px] text-white/50 leading-[1.7] mb-5">
            {skill.description}
          </p>

          {/* Progress bar */}
          <ProgressBar
            level={skill.level}
            color={skill.color}
            delay={index * 0.12}
            isInView={isInView}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ───────── SECONDARY SKILL CARD ───────── */

const SecondaryCard = ({
  skill,
  index,
  isInView,
}: {
  skill: typeof skills[0];
  index: number;
  isInView: boolean;
}) => {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-default"
    >
      <div
        className="glass-card rounded-xl p-5 md:p-6 relative overflow-hidden h-full transition-all duration-500"
        style={{
          borderColor: hovered ? `${skill.color}30` : undefined,
          boxShadow: hovered ? `0 8px 30px ${skill.color}10` : undefined,
        }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-30 group-hover:opacity-80 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600" style={{ background: `radial-gradient(ellipse at 20% 0%, ${skill.color}08, transparent 60%)` }} />

        <div className="relative">
          {/* Icon + Name */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${skill.color}12` }}
            >
              <Icon className="w-4 h-4" style={{ color: skill.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white leading-tight tracking-tight">
                {skill.name}
              </h4>
              <span
                className="text-[10px] font-mono tracking-wider"
                style={{ color: `${skill.color}BB` }}
              >
                {skill.level}%
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[12px] text-white/40 leading-[1.65] mb-4">
            {skill.description}
          </p>

          {/* Progress bar */}
          <ProgressBar
            level={skill.level}
            color={skill.color}
            delay={0.5 + index * 0.08}
            isInView={isInView}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ───────── MAIN COMPONENT ───────── */

const SkillConstellation = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={containerRef}
      id="skills"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 40% 7% / 0.97) 12%, hsl(220 40% 7% / 0.97) 88%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Ambient floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2.5 + 1,
              height: Math.random() * 2.5 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(217 91% 70% / ${0.08 + Math.random() * 0.12})`,
            }}
            animate={{
              y: [0, -(20 + Math.random() * 30), 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Breathing gradient orbs */}
      <motion.div
        className="absolute top-24 -left-40 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.05), transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 -right-40 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(45 93% 47% / 0.04), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-5">
            Capabilities
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills & <span className="text-gradient-gold">Expertise</span>
          </h2>
          <motion.div className="w-20 h-[2px] gradient-blue-gold mx-auto mt-7 rounded-full" />
          <p className="text-white/30 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            A hands-on skill set built through founding ventures, consulting for 50+ clients, and turning AI into real business impact.
          </p>
        </motion.div>

        {/* Featured skills (2x2 grid) */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-6">
          {featured.map((skill, i) => (
            <FeaturedCard key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Secondary skills (4-column grid) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondary.map((skill, i) => (
            <SecondaryCard key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom shimmer line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-16 md:mt-20 mx-auto max-w-3xl"
        >
          <div className="h-px w-full relative overflow-hidden rounded-full" style={{ background: "hsl(217 32% 17% / 0.5)" }}>
            <motion.div
              className="absolute inset-y-0 w-1/4 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(45 93% 47% / 0.5), hsl(217 91% 60% / 0.5), transparent)" }}
              animate={{ x: ["-25%", "500%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillConstellation;
