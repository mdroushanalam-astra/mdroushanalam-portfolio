import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CTO, TechNova Solutions",
    message: "Roushan's vision for AI integration is remarkable. His ability to see the bigger picture while executing on details sets him apart from other entrepreneurs I've worked with.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director of Innovation, EduFirst",
    message: "Techgram is exactly what Indian education needs. Roushan's understanding of tier-2/3 city challenges, combined with his tech expertise, makes him uniquely positioned to solve this problem.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Angel Investor",
    message: "What impressed me most about Roushan was his UPSC background. It gave him a systems-thinking approach that most tech founders lack. His ventures show incredible promise.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Product Lead, AI Startup",
    message: "Working with Roushan on AI training projects was eye-opening. His deep understanding of both the technical and human sides of AI makes him a rare talent in this space.",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    role: "Founder, LocalBiz Platform",
    message: "Gig-Lo's approach to hyper-local commerce is brilliant. Roushan understands community dynamics in a way that global platforms simply can't replicate.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Singh",
    role: "Professor, IIT Delhi",
    message: "Roushan represents the new breed of Indian entrepreneurs: deeply rooted in social understanding yet forward-thinking in technology adoption. A true visionary.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-1 gradient-blue-gold" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Social Proof</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What People <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Endorsements from collaborators, mentors, and industry leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 border border-border bg-card shadow-sm hover:shadow-lg transition-shadow relative group"
            >
              <Quote className="h-8 w-8 text-gold/20 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                "{t.message}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-royal flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
