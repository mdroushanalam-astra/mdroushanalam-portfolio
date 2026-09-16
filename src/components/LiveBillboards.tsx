import { useState, useEffect } from "react";

const LiveBillboards = () => {
  const [time, setTime] = useState({
    ist: "",
    utc: "",
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST time (UTC+5:30)
      const istString = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour12: false,
      });
      // UTC time
      const utcString = now.toLocaleTimeString("en-GB", {
        timeZone: "UTC",
        hour12: false,
      });
      setTime({
        ist: istString,
        utc: utcString,
        seconds: now.getSeconds(),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* --- LEFT BILLBOARD: Moonlit Mountains Live Scenery + Telemetry HUD --- */}
      <div
        className="absolute pointer-events-none overflow-hidden select-none"
        style={{
          left: "2.75%",
          top: "4.8%",
          width: "13.45%",
          height: "60.8%",
          clipPath: "polygon(0% 0%, 100% 19.2%, 97.5% 97.5%, 0% 100%)",
        }}
      >
        {/* Living base scenery with subtle parallax breathing */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-billboard-drift"
          style={{
            backgroundImage: "url('/screen_left.png')",
          }}
        />

        {/* Drifting moonlit mist and cloud fog layers */}
        <div
          className="absolute inset-0 animate-mist-flow pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 40% 60%, rgba(130, 200, 255, 0.28) 0%, rgba(60, 140, 240, 0.12) 45%, transparent 75%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Sweeping moonlit god-ray */}
        <div
          className="absolute inset-0 animate-godray-sweep pointer-events-none"
          style={{
            background:
              "linear-gradient(125deg, transparent 20%, rgba(180, 225, 255, 0.18) 45%, transparent 65%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Micro-LED subpixel screen texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22) 0px, rgba(0, 0, 0, 0.22) 1px, transparent 1px, transparent 2px)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Vertical digital refresh scanline */}
        <div
          className="absolute inset-x-0 h-16 animate-scanline pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(140, 210, 255, 0.25), transparent)",
            mixBlendMode: "screen",
          }}
        />

        {/* Live Digital HUD Telemetry Overlay (3D Angled) */}
        <div
          className="absolute inset-0 p-3 flex flex-col justify-between text-white pointer-events-none"
          style={{
            transform: "perspective(800px) rotateY(10deg)",
            transformOrigin: "left center",
            fontFamily: "monospace",
            textShadow: "0 0 8px rgba(0, 180, 255, 0.8)",
          }}
        >
          {/* Top HUD Header */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-[9px] text-cyan-300 font-semibold tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                LIVE FEED
              </span>
              <span className="text-[8px] text-cyan-200/70 border border-cyan-400/30 px-1 py-0.5 rounded">
                CAM 01
              </span>
            </div>
            <p className="text-[8px] text-cyan-100/60 tracking-widest uppercase">
              NAVE SENSOR · 8K HDR
            </p>
          </div>

          {/* Corner target bracket */}
          <div className="flex justify-between items-center opacity-40 px-1">
            <span className="text-[10px] text-cyan-300">+</span>
            <span className="text-[10px] text-cyan-300">+</span>
          </div>

          {/* Mid Audio / Seismic Live Activity Waveform */}
          <div className="space-y-1.5 px-1 my-auto">
            <div className="flex items-end gap-0.5 h-6">
              {[40, 70, 25, 90, 60, 80, 45, 100, 65, 30, 85, 50, 95, 35].map(
                (h, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-300 rounded-t-sm"
                    style={{
                      height: `${((h + (time.seconds * 13 * (idx + 1))) % 85) + 15}%`,
                      opacity: 0.75,
                      transition: "height 0.25s ease",
                    }}
                  />
                )
              )}
            </div>
            <p className="text-[7px] text-cyan-200/50 tracking-wider">
              SPECTRAL FLUX: ACTIVE
            </p>
          </div>

          {/* Bottom HUD Footer */}
          <div className="space-y-1 pb-1 border-t border-cyan-500/20 pt-1.5">
            <div className="flex items-center justify-between text-[9px] text-cyan-200 font-bold">
              <span>{time.ist || "17:30:00"} IST</span>
              <span className="text-[8px] text-emerald-400">60 FPS</span>
            </div>
            <p className="text-[7.5px] text-cyan-100/50 tracking-tight">
              23.7957° N, 86.4304° E
            </p>
            <div className="flex justify-between items-center text-[7px] text-cyan-400/80 tracking-wider">
              <span>SYS: NOMINAL</span>
              <span>SYNCED</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT BILLBOARD: Cosmic Deep Space Live Scenery + Telemetry HUD --- */}
      <div
        className="absolute pointer-events-none overflow-hidden select-none"
        style={{
          left: "83.8%",
          top: "4.8%",
          width: "12.4%",
          height: "60.8%",
          clipPath: "polygon(0% 19.2%, 100% 0%, 100% 100%, 2.5% 97.5%)",
        }}
      >
        {/* Living base starry scenery with cosmic breathing */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-billboard-drift"
          style={{
            backgroundImage: "url('/screen_right.png')",
          }}
        />

        {/* Pulsing cosmic nebula clouds */}
        <div
          className="absolute inset-0 animate-mist-flow pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 30%, rgba(90, 160, 255, 0.24) 0%, rgba(40, 80, 200, 0.1) 50%, transparent 80%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Shooting star trail across space */}
        <div
          className="absolute top-[20%] left-[-20%] w-[140%] h-[1px] animate-shooting-star pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(200, 235, 255, 0.9), transparent)",
            transform: "rotate(-18deg)",
            filter: "blur(0.5px)",
          }}
        />

        {/* Micro-LED subpixel screen texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22) 0px, rgba(0, 0, 0, 0.22) 1px, transparent 1px, transparent 2px)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Vertical digital refresh scanline */}
        <div
          className="absolute inset-x-0 h-16 animate-scanline pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(140, 210, 255, 0.25), transparent)",
            mixBlendMode: "screen",
          }}
        />

        {/* Live Digital HUD Telemetry Overlay (3D Angled) */}
        <div
          className="absolute inset-0 p-3 flex flex-col justify-between text-white pointer-events-none"
          style={{
            transform: "perspective(800px) rotateY(-10deg)",
            transformOrigin: "right center",
            fontFamily: "monospace",
            textShadow: "0 0 8px rgba(70, 160, 255, 0.8)",
          }}
        >
          {/* Top HUD Header */}
          <div className="space-y-1 pt-1 text-right">
            <div className="flex items-center justify-between text-[9px] text-blue-300 font-semibold tracking-wider">
              <span className="text-[8px] text-blue-200/70 border border-blue-400/30 px-1 py-0.5 rounded">
                NODE 0x8F
              </span>
              <span className="flex items-center gap-1.5">
                ASTRA HUMANIS
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#60a5fa]" />
              </span>
            </div>
            <p className="text-[8px] text-blue-100/60 tracking-widest uppercase">
              ORBITAL PERCEPTION
            </p>
          </div>

          {/* Corner target bracket */}
          <div className="flex justify-between items-center opacity-40 px-1">
            <span className="text-[10px] text-blue-300">+</span>
            <span className="text-[10px] text-blue-300">+</span>
          </div>

          {/* Mid Radar Orbital Sweep Radar Widget */}
          <div className="flex flex-col items-center my-auto py-1">
            <div className="relative w-12 h-12 rounded-full border border-blue-400/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-blue-400/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              {/* Radar beam line */}
              <div
                className="absolute inset-0 rounded-full animate-radar-sweep pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 70%, rgba(96, 165, 250, 0.45) 100%)",
                }}
              />
            </div>
            <p className="text-[7.5px] text-blue-200/60 mt-1 tracking-widest">
              APOGEE: 420.8 KM
            </p>
          </div>

          {/* Bottom HUD Footer */}
          <div className="space-y-1 pb-1 border-t border-blue-500/20 pt-1.5 text-right">
            <div className="flex items-center justify-between text-[9px] text-blue-200 font-bold">
              <span className="text-[8px] text-cyan-300">INC 51.6°</span>
              <span>{time.utc || "12:00:00"} UTC</span>
            </div>
            <p className="text-[7.5px] text-blue-100/50 tracking-tight">
              VELOCITY: 7.66 KM/S
            </p>
            <div className="flex justify-between items-center text-[7px] text-blue-400/80 tracking-wider">
              <span>CORE: ACTIVE</span>
              <span>ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveBillboards;
