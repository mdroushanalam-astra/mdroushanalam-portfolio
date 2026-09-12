import { motion, useScroll, useTransform } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import photo2 from "@/assets/photo2.png";
import { useRef } from "react";
import { Rocket, Cpu, Globe, Lightbulb, TrendingUp, Target, Zap, Building2, GraduationCap, Award, Briefcase, BarChart3 } from "lucide-react";

const photos = [photo2];

/* ───────── DATA ───────── */

const stats = [
  { value: "50+", label: "Client Projects Delivered", icon: TrendingUp },
  { value: "3", label: "Ventures Founded", icon: Building2 },
  { value: "100%+", label: "Revenue Growth for Clients", icon: BarChart3 },
  { value: "Global", label: "Impact & Reach", icon: Globe },
];

const ventures = [
  {
    name: "Freelance AI Consulting",
    role: "AI Consultant & Strategist",
    url: "mdroushanalam.in",
    desc: "Delivered 50+ client projects across sectors and geographies, including web development, custom software, AI-powered automation, SEO/GEO, and full end-to-end business digitization. Managed AI-optimized paid ad campaigns, boosting client revenue by 100%+.",
    accent: "hsl(217 91% 60%)",
  },
  {
    name: "Techgram",
    role: "Co-Founder & CSO",
    url: "techgramedu.in",
    desc: "Building the world's first AI-powered metaverse of education. Driving product vision, go-to-market strategy, AI feature integration, adaptive learning systems, and ecosystem partnerships.",
    accent: "hsl(45 93% 47%)",
  },
  {
    name: "Gig-Lo",
    role: "Founder & CSO",
    url: "giglo.in",
    desc: "A next-generation recruitment platform engineered to make hiring faster, smarter, and more user-friendly through AI-driven matching and standardized job frameworks. Leading product strategy and brand positioning.",
    accent: "hsl(160 84% 39%)",
  },
];

const expertise = [
  "AI Consulting & Business Transformation",
  "AI Model Training & Fine-Tuning",
  "Prompt Engineering",
  "Vibe Coding & AI-Assisted Development",
  "SEO / GEO Powered by AI",
  "Workflow Automation",
  "Paid Ad Campaigns & Ad Creative",
  "Revenue Growth Strategy",
  "Product Strategy & Market Positioning",
  "Generative AI Applications",
  "LLM Evaluation & Feedback",
  "EdTech & AI Product Strategy",
];

const credentials = [
  { title: "Generative AI: Introduction & Application", org: "Google (Coursera)", icon: GraduationCap },
  { title: "Artificial Intelligence Certification", org: "Outskill", icon: Award },
  { title: "AI Trainer — LLM Evaluation & Feedback", org: "RWS Group", icon: Cpu },
  { title: "Policy, Governance & Economics Research", org: "UPSC Civil Services Aspirant", icon: Briefcase },
];

/* ───────── ANIMATIONS ───────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ───────── COMPONENT ───────── */

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-28 md:py-36 bg-background relative overflow-hidden"
      aria-label="About Md. Roushan Alam"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px gradient-blue-gold opacity-50" />
      <div className="absolute top-40 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.025]" style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }} />
      <div className="absolute bottom-40 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.02]" style={{ background: "radial-gradient(circle, hsl(45 93% 47%), transparent 70%)" }} />

      <div className="container mx-auto px-4 max-w-7xl">

        {/* ════════ SECTION HEADER ════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20 md:mb-24"
        >
          <motion.p variants={fadeUp} custom={0} className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-5">
            Who I Am
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Founder Behind <br className="hidden md:block" />
            <span className="text-gradient-gold">the Vision</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-[2px] gradient-blue-gold mx-auto mt-7 rounded-full" />
        </motion.div>

        {/* ════════ HERO: PHOTO + NARRATIVE ════════ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">

          {/* Photo */}
          <motion.div style={{ y: imageY }} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(135deg, hsl(45 93% 47% / 0.12), hsl(217 91% 60% / 0.12))", filter: "blur(20px)" }} />

              <Carousel className="w-full max-w-md relative">
                <CarouselContent>
                  {photos.map((src, i) => (
                    <CarouselItem key={i}>
                      <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-white/10 relative">
                        <img src={src} alt="Md. Roushan Alam, Founder and AI Entrepreneur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-white font-semibold text-lg tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Md. Roushan Alam
                          </p>
                          <p className="text-white/70 text-[11px] tracking-[0.2em] uppercase mt-1">
                            Founder · AI Entrepreneur · Consultant
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} custom={0}>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">My Story</p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                Building Ventures That <br className="hidden sm:block" />
                <span className="text-gradient-gold">Transform Industries</span>
              </h3>
            </motion.div>

            <motion.p variants={fadeUp} custom={1} className="text-[15px] md:text-base text-muted-foreground leading-[1.9] tracking-[0.01em]">
              I'm an <strong className="text-foreground font-medium">AI-focused entrepreneur, consultant, and strategist</strong> with hands-on expertise in AI model training, vibe coding, AI-powered software development, and full business transformation using artificial intelligence. I'm equally at home advising businesses on AI adoption as I am executing end-to-end AI projects.
            </motion.p>

            <motion.p variants={fadeUp} custom={2} className="text-[15px] md:text-base text-muted-foreground leading-[1.9] tracking-[0.01em]">
              As a <strong className="text-foreground font-medium">freelance AI consultant</strong>, I've delivered <strong className="text-foreground font-medium">50+ client projects globally</strong>, driving measurable revenue growth through automation, intelligent systems, and digital-first strategy. From AI-powered SEO/GEO to custom AI workflows and paid ad campaigns that consistently boost client revenue by <strong className="text-foreground font-medium">100%+</strong>, I turn AI from buzzword to business value.
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="text-[15px] md:text-base text-muted-foreground leading-[1.9] tracking-[0.01em]">
              I also co-founded <strong className="text-foreground font-medium">Techgram</strong> (AI-powered metaverse of education) and founded <strong className="text-foreground font-medium">Gig-Lo</strong> (next-gen recruitment platform). My background as a <strong className="text-foreground font-medium">UPSC Civil Services aspirant</strong> gives me deep expertise in governance, economics, and strategic policy analysis, a foundation that most tech founders simply don't have.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex items-center gap-4 pt-3">
              <div className="w-12 h-[1px] bg-gold/40" />
              <p className="text-sm italic text-muted-foreground/70">
                "Making AI practical, impactful, and accessible for businesses of all sizes."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ════════ STATS ROW ════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="glass-card rounded-2xl p-6 md:p-8 text-center group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(45 93% 47% / 0.07), transparent 70%)" }} />
              <div className="relative">
                <stat.icon className="w-5 h-5 text-gold/50 mx-auto mb-4 group-hover:text-gold transition-colors duration-300" />
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.15em] uppercase font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ════════ VENTURES ════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="mb-28"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">Track Record</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ventures & <span className="text-gradient-gold">Experience</span>
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {ventures.map((v, i) => (
              <motion.div
                key={v.name}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-light rounded-2xl p-7 md:p-8 group cursor-default relative overflow-hidden h-full flex flex-col"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, ${v.accent}, transparent)` }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600" style={{ background: `radial-gradient(circle at 30% 0%, ${v.accent}0A, transparent 60%)` }} />

                <div className="relative flex-1 flex flex-col">
                  {/* Name & Role */}
                  <div className="mb-4">
                    <h4 className="text-lg md:text-xl font-bold text-foreground tracking-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {v.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: v.accent }}>
                      {v.role}
                    </p>
                  </div>

                  {/* URL */}
                  <div className="mb-4">
                    <span className="text-[11px] text-gold/70 font-medium">{v.url}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-[1.75] flex-1">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ════════ EXPERTISE GRID ════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="mb-28"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">What I Do</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Skills & <span className="text-gradient-gold">Expertise</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {expertise.map((skill, i) => (
              <motion.div
                key={skill}
                variants={scaleIn}
                custom={i}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl px-4 py-3.5 text-center cursor-default group"
              >
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-3 h-3 text-gold/40 group-hover:text-gold transition-colors duration-300 shrink-0" />
                  <p className="text-xs md:text-[13px] text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium leading-snug">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ════════ CREDENTIALS ════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">Credentials</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Education & <span className="text-gradient-gold">Certifications</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="glass-light rounded-2xl p-6 group cursor-default relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 0%, hsl(45 93% 47% / 0.06), transparent 70%)" }} />
                <div className="relative">
                  <cred.icon className="w-5 h-5 text-gold/50 mb-4 group-hover:text-gold transition-colors duration-300" />
                  <p className="text-sm font-semibold text-foreground mb-1.5 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {cred.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground/70 tracking-wide uppercase font-medium">
                    {cred.org}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
