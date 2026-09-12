import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({ email: email.trim() });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "Already subscribed!", description: "You're already on the list." });
        } else {
          throw error;
        }
      } else {
        toast({ title: "Subscribed!", description: "Welcome to the movement." });
      }
      setEmail("");
    } catch {
      toast({ title: "Error", description: "Something went wrong. Try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, hsl(220 40% 13%) 0%, hsl(217 71% 25%) 60%, hsl(45 93% 47% / 0.15) 100%)"
    }}>
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 3 + i % 3,
              height: 3 + i % 3,
              backgroundColor: i % 2 === 0 ? "hsl(45 93% 47% / 0.3)" : "hsl(217 91% 60% / 0.2)",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 opacity-20" style={{
        background: "radial-gradient(ellipse at 50% 50%, hsl(45 93% 47% / 0.2) 0%, transparent 60%)"
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join the Movement
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Get insights on AI, entrepreneurship, and building ventures that matter. Join founders, thinkers, and innovators.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
            />
            <Button type="submit" disabled={loading} className="gradient-gold text-gold-foreground hover:opacity-90 px-6">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
