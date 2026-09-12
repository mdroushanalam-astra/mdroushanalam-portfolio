import { createContext, useContext, useMemo } from "react";

type Mood = "morning" | "afternoon" | "evening" | "night";

interface MoodData {
  mood: Mood;
  greeting: string;
  emoji: string;
  accentHue: number;
}

const getMood = (): MoodData => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { mood: "morning", greeting: "Good Morning", emoji: "☀️", accentHue: 45 };
  if (hour >= 12 && hour < 17) return { mood: "afternoon", greeting: "Good Afternoon", emoji: "🌤️", accentHue: 30 };
  if (hour >= 17 && hour < 21) return { mood: "evening", greeting: "Good Evening", emoji: "🌅", accentHue: 15 };
  return { mood: "night", greeting: "Welcome, Night Owl", emoji: "🌙", accentHue: 240 };
};

const MoodContext = createContext<MoodData>(getMood());

export const useMood = () => useContext(MoodContext);

export const MoodProvider = ({ children }: { children: React.ReactNode }) => {
  const mood = useMemo(() => getMood(), []);
  return <MoodContext.Provider value={mood}>{children}</MoodContext.Provider>;
};

export default MoodProvider;
