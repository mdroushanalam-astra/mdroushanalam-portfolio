import { motion } from "framer-motion";
import { useMood } from "@/components/MoodEngine";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const MoodBanner = () => {
  const { greeting, emoji } = useMood();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("ai-mood-quote", {
          body: { greeting },
        });
        if (!error && data?.quote) setQuote(data.quote);
      } catch {
        setQuote("Building the future, one AI venture at a time.");
      }
    };
    fetchQuote();
  }, [greeting]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute top-20 left-1/2 -translate-x-1/2 z-20 text-center"
    >
      <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 font-medium glass rounded-full px-5 py-2">
        <span>{emoji}</span>
        <span>{greeting}</span>
        {quote && (
          <>
            <span className="text-primary-foreground/30">•</span>
            <span className="text-primary-foreground/50 italic text-xs max-w-[200px] truncate">{quote}</span>
          </>
        )}
      </span>
    </motion.div>
  );
};

export default MoodBanner;
