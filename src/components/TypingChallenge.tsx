import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Keyboard, Trophy, RotateCcw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const MISSION = "Building AI ventures that reshape society and democratize technology across India.";

interface LeaderboardEntry {
  name: string;
  wpm: number;
  accuracy: number;
  date: string;
}

const TypingChallenge = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Load leaderboard from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("typing-leaderboard");
    if (saved) setLeaderboard(JSON.parse(saved));
  }, []);

  const saveScore = useCallback((name: string) => {
    const entry: LeaderboardEntry = {
      name,
      wpm,
      accuracy,
      date: new Date().toLocaleDateString(),
    };
    const updated = [...leaderboard, entry].sort((a, b) => b.wpm - a.wpm).slice(0, 10);
    setLeaderboard(updated);
    localStorage.setItem("typing-leaderboard", JSON.stringify(updated));
    setShowNameInput(false);
    setShowLeaderboard(true);
  }, [wpm, accuracy, leaderboard]);

  const startGame = () => {
    setStarted(true);
    setFinished(false);
    setTyped("");
    setErrors(0);
    setTotalKeystrokes(0);
    setWpm(0);
    setAccuracy(100);
    setShowLeaderboard(false);
    setShowNameInput(false);
    setStartTime(Date.now());
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (finished) return;
    const value = e.target.value;
    const newKeystroke = totalKeystrokes + 1;
    setTotalKeystrokes(newKeystroke);

    // Check latest character
    const lastChar = value[value.length - 1];
    const expectedChar = MISSION[value.length - 1];
    if (lastChar !== expectedChar) {
      setErrors((prev) => prev + 1);
    }

    setTyped(value);
    const acc = Math.max(0, Math.round(((newKeystroke - errors - (lastChar !== expectedChar ? 1 : 0)) / newKeystroke) * 100));
    setAccuracy(acc);

    // Calculate WPM
    const elapsed = (Date.now() - startTime) / 1000 / 60;
    const words = value.length / 5;
    setWpm(elapsed > 0 ? Math.round(words / elapsed) : 0);

    // Check completion
    if (value.length >= MISSION.length) {
      setFinished(true);
      setShowNameInput(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, hsl(217 71% 12%) 0%, hsl(220 50% 5%) 70%)",
      }}
    >
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] opacity-10" style={{
          background: "radial-gradient(circle, hsl(45 93% 47%) 0%, transparent 70%)",
          filter: "blur(100px)",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">
            ⌨️ Interactive Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Typing Speed <span className="text-gradient-gold">Challenge</span>
          </h2>
          <p className="text-primary-foreground/40 text-sm max-w-md mx-auto">
            How fast can you type the mission statement? Race against yourself and climb the leaderboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-primary-foreground/10 backdrop-blur-xl"
          style={{
            background: "linear-gradient(135deg, hsl(220 40% 10% / 0.8) 0%, hsl(217 71% 15% / 0.6) 100%)",
          }}
        >
          <div className="p-6 md:p-8">
            {/* Text display */}
            <div className="mb-6 p-5 rounded-xl border border-primary-foreground/5 font-mono text-lg leading-relaxed relative" style={{
              background: "hsl(220 40% 7% / 0.6)",
            }}>
              {MISSION.split("").map((char, i) => {
                let color = "text-primary-foreground/25";
                if (i < typed.length) {
                  color = typed[i] === char ? "text-green-400" : "text-red-400 underline";
                } else if (i === typed.length) {
                  color = "text-gold bg-gold/20";
                }
                return (
                  <span key={i} className={`${color} transition-colors duration-75`}>
                    {char}
                  </span>
                );
              })}
              {started && !finished && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-gold ml-0.5 align-middle"
                />
              )}
            </div>

            {/* Hidden input */}
            <input
              ref={inputRef}
              type="text"
              value={typed}
              onChange={handleInput}
              className="sr-only"
              maxLength={MISSION.length}
              disabled={!started || finished}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />

            {/* Stats */}
            {started && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl" style={{ background: "hsl(217 91% 60% / 0.1)" }}>
                  <Zap className="w-4 h-4 mx-auto mb-1 text-royal" />
                  <div className="text-2xl font-bold text-primary-foreground font-mono">{wpm}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">WPM</div>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: "hsl(45 93% 47% / 0.1)" }}>
                  <Trophy className="w-4 h-4 mx-auto mb-1 text-gold" />
                  <div className="text-2xl font-bold text-primary-foreground font-mono">{accuracy}%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Accuracy</div>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: "hsl(120 60% 40% / 0.1)" }}>
                  <Keyboard className="w-4 h-4 mx-auto mb-1 text-green-400" />
                  <div className="text-2xl font-bold text-primary-foreground font-mono">
                    {Math.round((typed.length / MISSION.length) * 100)}%
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Progress</div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center">
              {!started && (
                <Button onClick={startGame} className="gradient-gold text-gold-foreground border-0 font-semibold px-8">
                  <Keyboard className="w-4 h-4 mr-2" /> Start Challenge
                </Button>
              )}
              {started && !finished && (
                <Button onClick={() => inputRef.current?.focus()} variant="outline" className="border-gold/30 text-gold">
                  Click here & start typing
                </Button>
              )}
              {finished && !showNameInput && (
                <Button onClick={startGame} className="gradient-royal text-royal-foreground border-0">
                  <RotateCcw className="w-4 h-4 mr-2" /> Try Again
                </Button>
              )}
              {(started || leaderboard.length > 0) && (
                <Button onClick={() => setShowLeaderboard(!showLeaderboard)} variant="ghost" className="text-primary-foreground/50">
                  <Trophy className="w-4 h-4 mr-2" /> Leaderboard
                </Button>
              )}
            </div>

            {/* Name input after completion */}
            <AnimatePresence>
              {showNameInput && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 flex flex-col items-center gap-3"
                >
                  <p className="text-gold text-sm font-medium">🎉 You finished at {wpm} WPM!</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className="px-4 py-2 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:border-gold/50"
                      maxLength={20}
                    />
                    <Button
                      onClick={() => saveScore(playerName || "Anonymous")}
                      className="gradient-gold text-gold-foreground border-0 text-sm"
                    >
                      Save Score
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Leaderboard */}
            <AnimatePresence>
              {showLeaderboard && leaderboard.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="rounded-xl border border-primary-foreground/10 overflow-hidden" style={{ background: "hsl(220 40% 7% / 0.6)" }}>
                    <div className="px-4 py-2 border-b border-primary-foreground/5">
                      <span className="text-xs font-mono text-gold uppercase tracking-wider">🏆 Top Scores</span>
                    </div>
                    {leaderboard.map((entry, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-primary-foreground/5 last:border-0">
                        <span className="text-sm font-bold text-gold w-6">{i + 1}.</span>
                        <span className="text-sm text-primary-foreground flex-1 truncate">{entry.name}</span>
                        <span className="text-sm font-mono text-royal font-bold">{entry.wpm} WPM</span>
                        <span className="text-xs text-muted-foreground">{entry.accuracy}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TypingChallenge;
