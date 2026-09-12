import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { seedEntries, type SeedEntry } from "@/data/guestbookSeedData";

type Entry = {
  id: string;
  name: string;
  message: string;
  emoji: string;
  created_at: string;
};

const emojiOptions = [
  { icon: "👋", label: "Wave" },
  { icon: "🚀", label: "Rocket" },
  { icon: "🌟", label: "Star" },
  { icon: "🔥", label: "Fire" },
  { icon: "💜", label: "Heart" },
  { icon: "😄", label: "Smile" },
];

const GuestbookSection = () => {
  const [liveEntries, setLiveEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("👋");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const { data } = await supabase
      .from("guestbook_entries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);
    if (data) setLiveEntries(data);
  };

  // Merge live entries with seed entries, sorted by date descending
  const allEntries: Entry[] = (() => {
    const live = liveEntries.map((e) => ({ ...e }));
    const seed: Entry[] = seedEntries.map((s) => ({
      id: s.id,
      name: s.name,
      message: s.message,
      emoji: s.emoji,
      created_at: s.created_at,
    }));
    return [...live, ...seed].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  })();

  const submit = async () => {
    if (!name.trim() || !message.trim()) {
      toast({ title: "Please fill in your name and message", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("guestbook_entries").insert({ name: name.trim(), message: message.trim(), emoji });
    if (error) {
      toast({ title: "Failed to post", description: "Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Posted! 🎉", description: "Thanks for signing the guestbook!" });
      setName("");
      setMessage("");
      setEmoji("👋");
      fetchEntries();
    }
    setSubmitting(false);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  return (
    <section id="guestbook" className="py-12 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(220 40% 7%) 0%, hsl(217 71% 12%) 50%, hsl(220 40% 7%) 100%)",
    }}>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">Leave Your Mark</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visitor <span className="text-gradient-gold">Guestbook</span>
          </h2>
          <p className="text-primary-foreground/40 max-w-md mx-auto text-sm">
            Join {allEntries.length.toLocaleString()}+ builders, clients, and explorers who've left their mark.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-2xl p-6 backdrop-blur-xl border border-primary-foreground/10 sticky top-24" style={{
              background: "linear-gradient(135deg, hsl(217 71% 18% / 0.5) 0%, hsl(220 40% 8% / 0.8) 100%)",
            }}>
              <h3 className="text-primary-foreground font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Sign the Guestbook ✍️</h3>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mb-3 bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
              />
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave a message..."
                className="mb-3 bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 min-h-[80px]"
              />
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-foreground/50 text-xs">Pick an emoji:</span>
                {emojiOptions.map((e) => (
                  <button
                    key={e.icon}
                    onClick={() => setEmoji(e.icon)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all ${emoji === e.icon ? "bg-gold/20 scale-110 ring-1 ring-gold/50" : "hover:bg-primary-foreground/10"
                      }`}
                  >
                    {e.icon}
                  </button>
                ))}
              </div>
              <Button onClick={submit} disabled={submitting} className="w-full gradient-gold text-gold-foreground">
                <Send className="h-4 w-4 mr-2" /> {submitting ? "Posting..." : "Post Message"}
              </Button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-primary-foreground/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>{allEntries.length}+</p>
                  <p className="text-[10px] text-primary-foreground/40 uppercase tracking-wider">Messages</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>30+</p>
                  <p className="text-[10px] text-primary-foreground/40 uppercase tracking-wider">Countries</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Entries (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              ref={scrollRef}
              className="space-y-2.5 max-h-[600px] overflow-y-auto pr-2"
              style={{ scrollbarWidth: "thin", scrollbarColor: "hsl(217 91% 60% / 0.3) transparent" }}
            >
              {allEntries.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.8) }}
                  className="rounded-xl p-3.5 backdrop-blur-lg border border-primary-foreground/5 group hover:border-primary-foreground/10 transition-colors duration-300"
                  style={{ background: "hsl(217 71% 15% / 0.35)" }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl leading-none mt-0.5">{entry.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-primary-foreground font-semibold text-sm">{entry.name}</span>
                        <span className="text-primary-foreground/15 text-xs">·</span>
                        <span className="text-primary-foreground/25 text-[11px]">
                          {formatDate(entry.created_at)}
                        </span>
                        <span className="text-primary-foreground/15 text-[11px]">
                          {formatTime(entry.created_at)}
                        </span>
                      </div>
                      <p className="text-primary-foreground/55 text-[13px] leading-relaxed">{entry.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuestbookSection;
