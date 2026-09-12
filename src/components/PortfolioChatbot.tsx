import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

type Message = { role: "user" | "assistant"; content: string };
type Mode = "chat" | "pitch";

const PortfolioChatbot = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("chat");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm Roushan's AI assistant. Ask me anything about his ventures, skills, or journey, or switch to Pitch Mode to generate a custom pitch!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const switchMode = (newMode: Mode) => {
    setMode(newMode);
    setMessages([
      {
        role: "assistant",
        content: newMode === "pitch"
          ? "🎯 Pitch Mode activated! Tell me the role, company, or opportunity and I'll generate a tailored pitch for Roushan."
          : "Hi! 👋 I'm Roushan's AI assistant. Ask me anything about his ventures, skills, or journey!",
      },
    ]);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("portfolio-chat", {
        body: {
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          mode,
        },
      });
      if (error) throw error;
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "I couldn't process that. Try again!" }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-gold text-gold-foreground shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI assistant"
      >
        {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl border border-border"
            style={{ background: "hsl(var(--card))", maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="gradient-navy p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">AI Portfolio Assistant</p>
                  <p className="text-primary-foreground/60 text-xs">Ask about Roushan • Generate Pitches</p>
                </div>
              </div>
              {/* Mode toggle */}
              <div className="flex gap-1 bg-primary-foreground/10 rounded-lg p-0.5">
                <button
                  onClick={() => switchMode("chat")}
                  className={`flex-1 text-xs py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    mode === "chat" ? "bg-primary-foreground/20 text-primary-foreground font-semibold" : "text-primary-foreground/50"
                  }`}
                >
                  <MessageCircle className="h-3 w-3" /> Chat
                </button>
                <button
                  onClick={() => switchMode("pitch")}
                  className={`flex-1 text-xs py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    mode === "pitch" ? "bg-primary-foreground/20 text-primary-foreground font-semibold" : "text-primary-foreground/50"
                  }`}
                >
                  <FileText className="h-3 w-3" /> Pitch Generator
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                      m.role === "user"
                        ? "gradient-royal text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm">
                    <span className="animate-pulse">{mode === "pitch" ? "Generating pitch..." : "Thinking..."}</span>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={mode === "pitch" ? "Enter role or company..." : "Ask about Roushan..."}
                className="text-sm"
                disabled={loading}
              />
              <Button size="sm" onClick={send} disabled={loading} className="gradient-gold text-gold-foreground px-3">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioChatbot;
