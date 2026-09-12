import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Arjun Mehta",
    role: "CTO",
    company: "TechStartup India",
    text: "Roushan's strategic vision is unmatched. He doesn't just build products; he builds ecosystems. Working with him on AI integration was a masterclass in forward-thinking leadership.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Head of Education",
    company: "EduFuture Foundation",
    text: "What sets Roushan apart is his rare ability to bridge humanities and technology. His EdTech vision through Techgram is exactly what India's education system needs: accessible, personalized, and deeply human.",
    avatar: "PS",
  },
  {
    name: "Vikram Patel",
    role: "Managing Director",
    company: "Innovation Capital",
    text: "I've mentored dozens of founders, and Roushan stands out for his discipline and relentless execution. His UPSC background gives him a strategic depth most tech founders simply don't have.",
    avatar: "VP",
  },
  {
    name: "Sneha Iyer",
    role: "AI Research Lead",
    company: "DeepTech Labs",
    text: "Roushan's understanding of AI isn't just theoretical. He applies it with precision to real-world problems. His work is proof that you can build impactful AI solutions from India for the world.",
    avatar: "SI",
  },
];

const WaveformBar = ({ active }: { active: boolean }) => (
  <div className="flex items-center gap-[2px] h-8">
    {Array.from({ length: 32 }).map((_, i) => (
      <motion.div
        key={i}
        className="w-[2px] rounded-full"
        style={{
          background: `linear-gradient(180deg, hsl(217 91% 60%) 0%, hsl(45 93% 47%) 100%)`,
        }}
        animate={active ? {
          height: [4, 8 + Math.random() * 20, 4, 12 + Math.random() * 16, 4],
        } : { height: 4 }}
        transition={{
          duration: 0.8 + Math.random() * 0.6,
          repeat: Infinity,
          delay: i * 0.03,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const TestimonialCarousel = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(217 91% 60% / 0.04) 50%, hsl(var(--background)) 100%)",
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Voices</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What People Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card p-8 md:p-10">
            {/* Top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{
              background: "linear-gradient(90deg, transparent, hsl(217 91% 60% / 0.3), hsl(45 93% 47% / 0.3), transparent)",
            }} />

            {/* Waveform decoration */}
            <div className="flex justify-center mb-6 opacity-40">
              <WaveformBar active={isInView} />
            </div>

            {/* Quote */}
            <div className="relative min-h-[120px]">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold/20" />
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-foreground text-lg leading-relaxed italic pl-6"
              >
                "{t.text}"
              </motion.p>
            </div>

            {/* Author */}
            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm" style={{
                background: "linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(45 93% 47%) 100%)",
                color: "white",
              }}>
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-royal" : "bg-border hover:bg-muted-foreground/50"
                      }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-royal/50 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-royal/50 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
