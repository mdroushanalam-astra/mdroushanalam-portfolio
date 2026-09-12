import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logoVideo from "@/assets/logo-video.mp4";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      toast({ title: "Message Sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: "mdroushanalam.ai@gmail.com", href: "mailto:mdroushanalam.ai@gmail.com" },
    // { icon: MapPin, label: "Location", value: "India", href: undefined },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mdroushanalam", href: "https://www.linkedin.com/in/mdroushanalam" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        ref={(el) => {
          if (el) el.playbackRate = 0.8;
        }}
      >
        <source src={logoVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(180deg, hsl(220 40% 7% / 0.85) 0%, hsl(220 40% 7% / 0.75) 50%, hsl(220 40% 7% / 0.9) 100%)"
      }} />

      <div className="container mx-auto px-4 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Reach Out</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Get in Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactItems.map((item) => (
              <Card key={item.label} className="border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-xl hover:glow-royal transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-blue-gold flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/50">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.label === "LinkedIn" ? "_blank" : undefined} rel="noopener noreferrer" className="text-primary-foreground font-medium hover:text-gold transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 backdrop-blur-xl bg-primary-foreground/5 p-6 rounded-2xl border border-primary-foreground/10">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                className="bg-primary-foreground/10 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                className="bg-primary-foreground/10 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                maxLength={1000}
                rows={5}
                className="bg-primary-foreground/10 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Button type="submit" disabled={loading} className="w-full gradient-gold text-gold-foreground border-0 font-semibold hover:opacity-90">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
