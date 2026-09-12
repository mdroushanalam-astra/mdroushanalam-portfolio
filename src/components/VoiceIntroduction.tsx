import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Mic } from "lucide-react";

const BIO_TEXT = `I'm Md. Roushan Alam, a Founder and AI Entrepreneur. My journey from four years of rigorous UPSC preparation to founding two ventures has been anything but conventional. I believe technology can reshape how societies learn, work, and grow. Through Techgram and Gig-Lo, I'm building the future, one innovation at a time.`;

const VoiceIntroduction = () => {
  const [playing, setPlaying] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [progress, setProgress] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(BIO_TEXT);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      // Try to find a good English voice
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(
        (v) => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Daniel") || v.name.includes("Male"))
      ) || voices.find((v) => v.lang.startsWith("en"));
      if (preferred) utterance.voice = preferred;

      utterance.onstart = () => {
        setSpeaking(true);
        setPlaying(true);
        setProgress(0);
        const totalLength = BIO_TEXT.length;
        let charIndex = 0;
        intervalRef.current = setInterval(() => {
          charIndex += 3;
          setProgress(Math.min(charIndex / totalLength, 1));
        }, 50);
      };

      utterance.onend = () => {
        setSpeaking(false);
        setPlaying(false);
        setProgress(1);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };

      utterance.onerror = () => {
        setSpeaking(false);
        setPlaying(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-3"
      >
        <button
          onClick={playing ? stopSpeaking : startSpeaking}
          className="group relative flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 hover:border-royal/50 transition-all duration-300 bg-card/80 backdrop-blur-sm"
        >
          {/* Pulse ring when speaking */}
          {speaking && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-royal/30"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}

          {playing ? (
            <VolumeX className="w-4 h-4 text-royal" />
          ) : (
            <Volume2 className="w-4 h-4 text-muted-foreground group-hover:text-royal transition-colors" />
          )}

          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            {playing ? "Stop" : "🎙️ Listen to My Story"}
          </span>

          {/* Waveform mini */}
          {speaking && (
            <div className="flex items-center gap-[1px] h-4 ml-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-[2px] rounded-full bg-royal"
                  animate={{ height: [3, 8 + Math.random() * 8, 3] }}
                  transition={{ duration: 0.4 + Math.random() * 0.3, repeat: Infinity, delay: i * 0.08 }}
                />
              ))}
            </div>
          )}
        </button>

        {/* Progress bar */}
        {playing && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="h-1 rounded-full bg-border overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress * 100}%`,
                background: "linear-gradient(90deg, hsl(217 91% 60%), hsl(45 93% 47%))",
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default VoiceIntroduction;
