import { motion } from "framer-motion";
import { Calendar, Clock, Video, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(220 40% 7%) 0%, hsl(217 71% 15%) 50%, hsl(220 40% 7%) 100%)",
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Book a <span className="text-gradient-gold">Consultation</span>
          </h2>
          <p className="text-primary-foreground/40 max-w-md mx-auto text-sm">
            Schedule a 1-on-1 session to discuss AI solutions, startup advice, or collaboration opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Video,
              title: "Discovery Call",
              duration: "15 min",
              desc: "Quick intro call to understand your needs and explore potential synergies.",
              color: "hsl(217 91% 60%)",
            },
            {
              icon: Calendar,
              title: "Strategy Session",
              duration: "30 min",
              desc: "Deep-dive into your AI strategy, product roadmap, or business challenges.",
              color: "hsl(45 93% 47%)",
              featured: true,
            },
            {
              icon: Clock,
              title: "Extended Consultation",
              duration: "60 min",
              desc: "Comprehensive consulting session for complex AI implementation or startup mentoring.",
              color: "hsl(150 60% 45%)",
            },
          ].map((slot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl p-6 backdrop-blur-xl border text-center relative overflow-hidden ${
                slot.featured
                  ? "border-gold/30 shadow-[0_0_30px_hsl(45,93%,47%,0.1)]"
                  : "border-primary-foreground/10"
              }`}
              style={{
                background: "linear-gradient(135deg, hsl(217 71% 18% / 0.5) 0%, hsl(220 40% 8% / 0.7) 100%)",
              }}
            >
              {slot.featured && (
                <div className="absolute top-0 left-0 w-full h-0.5 gradient-gold" />
              )}
              <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{
                background: `${slot.color}15`,
              }}>
                <slot.icon className="h-7 w-7" style={{ color: slot.color }} />
              </div>
              <h3 className="text-primary-foreground font-bold text-lg mb-1">{slot.title}</h3>
              <p className="text-gold font-semibold text-sm mb-3">{slot.duration}</p>
              <p className="text-primary-foreground/50 text-sm mb-5">{slot.desc}</p>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full ${slot.featured ? "gradient-gold text-gold-foreground" : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"}`}
              >
                Book Now <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground/30 text-xs mt-8"
        >
          All sessions are conducted via Google Meet or Zoom. Timezone-flexible scheduling available.
        </motion.p>
      </div>
    </section>
  );
};

export default BookingSection;
