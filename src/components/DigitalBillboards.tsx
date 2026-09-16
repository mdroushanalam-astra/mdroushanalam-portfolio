import { useState, useEffect } from "react";

const liveNewsItems = [
  {
    tag: "FRONTIER AI",
    headline: "Autonomous agent architectures reach 94% benchmark completion in multi-step workflows.",
    time: "Just now",
  },
  {
    tag: "ASTRA HUMANIS",
    headline: "Real-world multimodal perception systems advancing toward sensor fusion infrastructure.",
    time: "3m ago",
  },
  {
    tag: "GROWTH",
    headline: "Generative Engine Optimization (GEO) reshapes AI search visibility standards globally.",
    time: "11m ago",
  },
  {
    tag: "AUTOMATION",
    headline: "Domain-specific LLM fine-tuning pipelines reduce manual operations by 70%.",
    time: "24m ago",
  },
  {
    tag: "INFERENCE",
    headline: "Edge model architectures achieve sub-10ms latency thresholds on localized systems.",
    time: "38m ago",
  },
];

const missionLogs = [
  { id: "01", title: "PERCEPTION", status: "ONLINE", desc: "Multi-sensor fusion" },
  { id: "02", title: "REASONING", status: "ACTIVE", desc: "Domain LLM pipelines" },
  { id: "03", title: "ACTION", status: "READY", desc: "Autonomous closed loop" },
  { id: "04", title: "SYSTEMS", status: "SYNCED", desc: "Beyond-screen infra" },
];

export const LeftBillboard = () => {
  const [timeStr, setTimeStr] = useState("");
  const [activeNewsIdx, setActiveNewsIdx] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNewsIdx((prev) => (prev + 1) % liveNewsItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentNews = liveNewsItems[activeNewsIdx];

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-2 select-none"
      style={{
        transform: "skewY(22.5deg)",
        transformOrigin: "top left",
      }}
    >
      {/* Top Header */}
      <div className="border-b border-cyan-400/35 pb-1">
        <div className="flex items-center justify-between text-[6.5px] font-mono tracking-widest text-cyan-300">
          <span className="flex items-center gap-1 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE INTEL
          </span>
          <span className="text-white font-bold">{timeStr || "17:15:00"}</span>
        </div>
        <div className="flex items-center justify-between text-[5.5px] text-cyan-200/60 font-mono mt-0.5">
          <span>DISPATCH FEED</span>
          <span className="text-emerald-400 font-semibold">24/7 ACTIVE</span>
        </div>
      </div>

      {/* Real-time Spectrum Visualizer */}
      <div className="my-1">
        <div className="flex items-end justify-between h-3 gap-0.5 px-1 py-0.5 bg-black/35 border border-cyan-400/20 rounded">
          {[35, 75, 50, 90, 60, 80, 45, 95, 60, 85, 45, 70, 85, 40].map(
            (h, idx) => (
              <div
                key={idx}
                className="w-full bg-gradient-to-t from-cyan-400 to-blue-300 rounded-t"
                style={{
                  height: `${h}%`,
                  animation: `lanternPulse ${1.1 + (idx % 4) * 0.3}s ease-in-out infinite alternate`,
                }}
              />
            )
          )}
        </div>
      </div>

      {/* Live News Card */}
      <div className="my-0.5 bg-black/45 border border-cyan-400/30 rounded p-1.5 shadow-lg backdrop-blur-[2px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[5.5px] px-1 py-0.2 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 font-mono tracking-wider font-bold">
            {currentNews.tag}
          </span>
          <span className="text-[5.5px] text-white/50 font-mono">
            {currentNews.time}
          </span>
        </div>
        <p
          key={activeNewsIdx}
          className="text-[6.8px] text-white/95 font-sans font-medium leading-tight"
          style={{
            textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(100,200,255,0.4)",
          }}
        >
          {currentNews.headline}
        </p>
      </div>

      {/* Bottom Telemetry */}
      <div className="border-t border-cyan-400/35 pt-1 font-mono text-[5.5px] text-white/60">
        <div className="flex justify-between items-center text-cyan-300 mb-0.5">
          <span>SCRAPER STATUS</span>
          <span className="text-emerald-400 font-semibold">INGEST READY</span>
        </div>
        <div className="truncate text-cyan-400/70 font-semibold tracking-wider">
          BUILD &gt; AUTO &gt; SCALE
        </div>
      </div>
    </div>
  );
};

export const RightBillboard = () => {
  const [activeLogIdx, setActiveLogIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogIdx((prev) => (prev + 1) % missionLogs.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const currentLog = missionLogs[activeLogIdx];

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-2 select-none"
      style={{
        transform: "skewY(-24.5deg)",
        transformOrigin: "top left",
      }}
    >
      {/* Top Header */}
      <div className="border-b border-cyan-400/35 pb-1">
        <div className="flex items-center justify-between text-[6.5px] font-mono text-cyan-300">
          <span className="font-bold tracking-widest">ASTRA HUMANIS</span>
          <span className="flex items-center gap-1 text-[5.5px] text-rose-400 font-bold">
            <span className="w-1 h-1 rounded-full bg-rose-500 animate-ping" />
            REC
          </span>
        </div>
        <div className="flex items-center justify-between text-[5.5px] text-cyan-200/60 font-mono mt-0.5">
          <span>FPS: 60.0</span>
          <span>PING: 12ms</span>
        </div>
      </div>

      {/* Telemetry Orbit */}
      <div className="my-0.5 bg-black/45 border border-cyan-400/25 rounded p-1 text-[5.5px] font-mono text-white/80 space-y-0.5 backdrop-blur-[2px]">
        <div className="flex justify-between text-cyan-300 font-bold">
          <span>ORBIT:</span>
          <span>GEO-SYNC</span>
        </div>
        <div className="flex justify-between text-white/70">
          <span>LAT:</span>
          <span>28.6139° N</span>
        </div>
        <div className="flex justify-between text-white/70">
          <span>LON:</span>
          <span>77.2090° E</span>
        </div>
      </div>

      {/* Mission Log Card */}
      <div className="my-0.5 bg-black/45 border border-cyan-400/30 rounded p-1.5 shadow-lg backdrop-blur-[2px]">
        <div className="flex items-center justify-between text-[5.5px] font-mono mb-0.5">
          <span className="text-cyan-300 font-bold">LOG {currentLog.id}</span>
          <span className="text-emerald-400 text-[5px] px-1 bg-emerald-500/20 border border-emerald-400/30 rounded font-semibold">
            {currentLog.status}
          </span>
        </div>
        <p className="text-[6.8px] text-white font-mono font-bold leading-tight">
          {currentLog.title}
        </p>
        <p className="text-[5.5px] text-white/60 font-mono mt-0.5">
          {currentLog.desc}
        </p>
      </div>

      {/* Bottom Readout */}
      <div className="border-t border-cyan-400/35 pt-1 font-mono text-[5.5px] text-white/60">
        <div className="flex justify-between text-cyan-300 mb-0.5 font-bold">
          <span>CYCLE:</span>
          <span className="text-white">LOOP 04</span>
        </div>
        <div className="text-[5.5px] tracking-wider text-cyan-300 truncate">
          A MORE HUMAN TOMORROW
        </div>
      </div>
    </div>
  );
};
