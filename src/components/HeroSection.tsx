import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import AtmosphericParticles from "./AtmosphericParticles";

// Coordinated key light sources from cathedral architecture
const torchLights = [
  // Far left wall sconces and balconies
  { left: "21.5%", top: "22%", size: "80px", delay: "0s", dur: "3.4s" },
  { left: "29.2%", top: "34%", size: "90px", delay: "0.8s", dur: "4.1s" },
  { left: "32.6%", top: "32%", size: "75px", delay: "1.5s", dur: "3.8s" },
  // Left prominent street-style lantern post
  { left: "29.7%", top: "54.8%", size: "110px", delay: "0.2s", dur: "3.6s", isKeyLantern: true },
  // Left alcove wall lamps
  { left: "20.2%", top: "63.5%", size: "95px", delay: "1.2s", dur: "4.5s" },
  { left: "24.5%", top: "69.2%", size: "70px", delay: "2.1s", dur: "3.9s" },
  { left: "37.5%", top: "65.8%", size: "65px", delay: "0.5s", dur: "4.3s" },
  { left: "42.8%", top: "56.4%", size: "70px", delay: "1.7s", dur: "3.7s" },

  // Left and Right floor pedestal floodlights
  { left: "3.8%", top: "82.5%", size: "120px", delay: "0.4s", dur: "4.8s", isFloorWash: true },
  { left: "14.2%", top: "81.0%", size: "130px", delay: "1.9s", dur: "5.1s", isFloorWash: true },
  { left: "84.5%", top: "81.0%", size: "130px", delay: "1.1s", dur: "4.6s", isFloorWash: true },

  // Right prominent street-style lantern post
  { left: "74.8%", top: "54.2%", size: "110px", delay: "0.7s", dur: "3.5s", isKeyLantern: true },
  // Right floating lantern and chandeliers
  { left: "78.4%", top: "48.2%", size: "75px", delay: "1.4s", dur: "4.2s" },
  { left: "79.2%", top: "66.5%", size: "85px", delay: "2.3s", dur: "3.8s" },
  { left: "64.8%", top: "65.5%", size: "75px", delay: "0.9s", dur: "4.4s" },
  { left: "59.8%", top: "56.2%", size: "70px", delay: "1.6s", dur: "3.9s" },

  // Upper right gothic gallery arches
  { left: "70.2%", top: "33%", size: "85px", delay: "0.3s", dur: "4.0s" },
  { left: "79.0%", top: "31%", size: "90px", delay: "1.8s", dur: "4.7s" },
];

// Living city lights on the right billboard Earth
const cityLightNodes = [
  { left: "62%", top: "65%", delay: "0s", dur: "2.4s", size: "2.5px" },
  { left: "74%", top: "62%", delay: "0.7s", dur: "3.1s", size: "3px" },
  { left: "81%", top: "68%", delay: "1.3s", dur: "2.8s", size: "2px" },
  { left: "58%", top: "72%", delay: "1.9s", dur: "3.5s", size: "3px" },
  { left: "69%", top: "75%", delay: "0.4s", dur: "2.2s", size: "2.5px" },
  { left: "84%", top: "74%", delay: "2.1s", dur: "2.9s", size: "2px" },
  { left: "72%", top: "82%", delay: "1.1s", dur: "3.3s", size: "3.5px" },
  { left: "64%", top: "86%", delay: "1.6s", dur: "2.6s", size: "2px" },
  { left: "52%", top: "78%", delay: "0.9s", dur: "3.0s", size: "2.5px" },
  { left: "79%", top: "85%", delay: "2.3s", dur: "3.2s", size: "2px" },
];

const HeroSection = () => {
  const globeRef = useRef<HTMLVideoElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.playbackRate = 0.65;
      globeRef.current.play().catch(() => {});
    }

    // Buttery-smooth 3D mouse parallax loop with lerp
    let animId: number;
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      targetOffset.current = { x: nx, y: ny };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let curX = 0;
    let curY = 0;
    const lerp = () => {
      curX += (targetOffset.current.x - curX) * 0.05;
      curY += (targetOffset.current.y - curY) * 0.05;
      setOffset({ x: curX, y: curY });
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#03060c] select-none"
    >
      {/* --- 16:9 Coordinate-Locked Scene Stage with 3D Depth Parallax --- */}
      <div
        className="absolute left-1/2 top-1/2 pointer-events-none overflow-hidden"
        style={{
          width: "max(100vw, calc(100vh * (16 / 9)))",
          height: "max(100vh, calc(100vw * (9 / 16)))",
          transform: `translate(calc(-50% + ${offset.x * 5}px), calc(-50% + ${offset.y * 3}px))`,
          transition: "transform 0.06s linear",
        }}
      >
        <div className="relative w-full h-full">
          {/* 1. Base Cathedral Background Image */}
          <img
            src="/hero-cathedral.jpg"
            alt="Cathedral"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 2. Emissive Screen Light Spills (Casting living light onto stone pillars & floor) */}
          {/* Left Emissive Light Spill */}
          <div
            className="absolute pointer-events-none animate-emissive-spill"
            style={{
              left: "1.8%",
              top: "12%",
              width: "18%",
              height: "56%",
              background:
                "radial-gradient(ellipse at 35% 50%, rgba(56, 160, 255, 0.28) 0%, rgba(20, 80, 220, 0.1) 50%, transparent 75%)",
              filter: "blur(20px)",
              mixBlendMode: "screen",
            }}
          />
          {/* Right Emissive Light Spill */}
          <div
            className="absolute pointer-events-none animate-emissive-spill"
            style={{
              left: "81%",
              top: "10%",
              width: "18%",
              height: "58%",
              background:
                "radial-gradient(ellipse at 65% 50%, rgba(70, 170, 255, 0.28) 0%, rgba(30, 90, 230, 0.1) 50%, transparent 75%)",
              filter: "blur(20px)",
              mixBlendMode: "screen",
            }}
          />

          {/* 3. Left Billboard: YOU */}
          <div
            className="absolute pointer-events-none overflow-hidden flex flex-col justify-center px-4"
            style={{
              left: "2.73%",
              top: "4.86%",
              width: "13.28%",
              height: "59.4%",
              clipPath: "polygon(0% 0%, 100% 19.2%, 97.5% 97.5%, 0% 100%)",
            }}
          >
            {/* Subtle Brand Projection Text */}
            <div className="relative z-10 text-center space-y-2 select-none opacity-85 transform -rotate-1">
              <span className="text-[9px] font-mono tracking-widest text-[#B9DCFF] uppercase block">
                SYSTEMS STUDIO
              </span>
              <p className="text-xs sm:text-sm font-bold text-white tracking-tight font-display">
                Md. Roushan Alam
              </p>
              <span className="text-[10px] font-bold text-[#F2B66D] uppercase block tracking-wider">
                AI Product Builder
              </span>
              <div className="w-8 h-px bg-[#B9DCFF]/40 mx-auto my-1" />
              <p className="text-[8px] font-mono text-[#DCEEFF] leading-tight">
                Deconstructing Complex Problems<br />Into Living Systems
              </p>
            </div>
            {/* Micro-LED subpixel raster grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.18) 0px, rgba(0, 0, 0, 0.18) 1px, transparent 1px, transparent 2px)",
                mixBlendMode: "multiply",
              }}
            />
            {/* Glass light sheen sweeping diagonally */}
            <div
              className="absolute -inset-full animate-glass-sheen pointer-events-none"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, 0.18) 48%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0.18) 52%, transparent 70%)",
                mixBlendMode: "screen",
              }}
            />
            {/* Vertical refresh scanline */}
            <div
              className="absolute inset-x-0 h-16 animate-raster-scan pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(140, 210, 255, 0.22), transparent)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* 4. Right Billboard: ASTRA HUMANIS (Living Screen Projection Effects) */}
          <div
            className="absolute pointer-events-none overflow-hidden flex flex-col items-center justify-center px-3"
            style={{
              left: "83.8%",
              top: "4.86%",
              width: "12.4%",
              height: "59.4%",
              clipPath: "polygon(0% 19.2%, 100% 0%, 100% 100%, 2.5% 97.5%)",
            }}
          >
            {/* Ambient Screen Starlight Glow */}
            <div className="relative z-10 text-center space-y-1 select-none opacity-60 transform rotate-1 pointer-events-none">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F2B66D] mx-auto animate-ping" />
            </div>
            {/* Micro-LED subpixel raster grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.18) 0px, rgba(0, 0, 0, 0.18) 1px, transparent 1px, transparent 2px)",
                mixBlendMode: "multiply",
              }}
            />
            {/* Living twinkling city lights on Earth curvature */}
            {cityLightNodes.map((city, i) => (
              <div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: city.left,
                  top: city.top,
                  width: city.size,
                  height: city.size,
                  background:
                    "radial-gradient(circle, rgba(255, 235, 170, 1) 0%, rgba(255, 180, 70, 0.8) 60%, transparent 100%)",
                  boxShadow: "0 0 6px rgba(255, 200, 100, 0.9)",
                  animation: `starGlint ${city.dur} ease-in-out infinite alternate ${city.delay}`,
                }}
              />
            ))}
            {/* Vertical refresh scanline */}
            <div
              className="absolute inset-x-0 h-16 animate-raster-scan pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(140, 210, 255, 0.22), transparent)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* 5. Full Architecture Illuminating Glow Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none animate-candle-1"
            style={{
              backgroundImage: "url('/lights_layer.png')",
              mixBlendMode: "screen",
              opacity: 0.85,
              filter: "blur(0.5px) brightness(1.25) contrast(1.15)",
            }}
          />

          {/* 6. Secondary Softer Bloom for Deep Atmospheric Warmth */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none animate-candle-2"
            style={{
              backgroundImage: "url('/lights_layer.png')",
              mixBlendMode: "screen",
              opacity: 0.65,
              filter: "blur(8px) brightness(1.4)",
            }}
          />

          {/* 7. Pulsing Radial Glow Orbs at Key Lanterns & Torches */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {torchLights.map((torch, i) => (
              <div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: torch.left,
                  top: torch.top,
                  width: torch.size,
                  height: torch.size,
                  transform: "translate(-50%, -50%)",
                  background: torch.isFloorWash
                    ? "radial-gradient(circle at 50% 60%, rgba(255, 175, 55, 0.45) 0%, rgba(255, 130, 20, 0.18) 45%, transparent 70%)"
                    : torch.isKeyLantern
                    ? "radial-gradient(circle at 50% 50%, rgba(255, 240, 190, 0.75) 0%, rgba(255, 170, 50, 0.45) 30%, rgba(230, 110, 15, 0.18) 55%, transparent 75%)"
                    : "radial-gradient(circle at 50% 50%, rgba(255, 210, 120, 0.55) 0%, rgba(255, 150, 40, 0.3) 38%, transparent 70%)",
                  filter: torch.isKeyLantern ? "blur(3px)" : "blur(6px)",
                  animation: `lanternPulse ${torch.dur} ease-in-out infinite alternate ${torch.delay}`,
                }}
              />
            ))}
          </div>

          {/* 8. Volumetric Blue God-Rays Projecting from Archway behind Globe */}
          <div
            className="absolute pointer-events-none animate-godray-breath -z-10"
            style={{
              left: "calc(50% + 5px)",
              top: "56%",
              width: "clamp(340px, 36vw, 560px)",
              height: "clamp(340px, 36vw, 560px)",
              transform: "translate(-50%, -50%)",
              background:
                "conic-gradient(from 225deg at 50% 55%, transparent 0deg, rgba(80, 180, 255, 0.22) 18deg, transparent 35deg, rgba(120, 210, 255, 0.28) 52deg, transparent 70deg, rgba(60, 150, 255, 0.18) 88deg, transparent 110deg)",
              filter: "blur(18px)",
              mixBlendMode: "screen",
            }}
          />

          {/* 9. Radiating Water Waves on Wet Stone Floor beneath Globe */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "calc(50% + 5px)",
              top: "73%",
              transform: "translate(-50%, -50%) scaleY(0.28)",
              width: "clamp(220px, 24vw, 360px)",
              height: "clamp(220px, 24vw, 360px)",
            }}
          >
            <div
              className="absolute inset-0 rounded-full border border-cyan-400/50 animate-water-ripple-1"
              style={{
                boxShadow: "0 0 16px rgba(56, 160, 255, 0.6), inset 0 0 16px rgba(56, 160, 255, 0.3)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-blue-400/40 animate-water-ripple-2"
              style={{
                boxShadow: "0 0 16px rgba(56, 160, 255, 0.5), inset 0 0 16px rgba(56, 160, 255, 0.2)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-cyan-300/30 animate-water-ripple-3"
              style={{
                boxShadow: "0 0 14px rgba(56, 160, 255, 0.4)",
              }}
            />
          </div>

          {/* 10. Wet Floor Water Reflection Caustics and Shimmer */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none animate-floor-glisten"
            style={{
              height: "28%",
              background:
                "radial-gradient(ellipse at 50% 80%, rgba(255, 170, 60, 0.12) 0%, rgba(60, 150, 255, 0.1) 40%, transparent 75%)",
              mixBlendMode: "screen",
            }}
          />

          {/* 11. 3D Spinning Globe with Holographic Orbital Projection Rings */}
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: "calc(50% + 5px)",
              top: "63.2%",
              transform: `translate(calc(-50% + ${offset.x * 7}px), calc(-50% + ${offset.y * 5}px)) translateZ(0)`,
              width: "clamp(160px, 16.5vw, 240px)",
              height: "clamp(160px, 16.5vw, 240px)",
              transition: "transform 0.06s linear",
            }}
          >
            {/* Spinning Video Globe */}
            <video
              ref={globeRef}
              src="/globe-clean.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = 0.65;
              }}
              className="w-full h-full object-contain"
              style={{
                mixBlendMode: "screen",
                filter:
                  "brightness(1.1) contrast(1.08) saturate(1.04) hue-rotate(-2deg)",
                maskImage:
                  "radial-gradient(circle at 50% 50%, black 52%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 50%, black 52%, transparent 72%)",
                transform: "translateZ(0)",
              }}
            />

            {/* --- Holographic Orbital Projection Ring 1 (Tilted 3D Cyan Ring) --- */}
            <div
              className="absolute pointer-events-none animate-orbit-ring"
              style={{
                left: "-18%",
                top: "-18%",
                width: "136%",
                height: "136%",
                transformStyle: "preserve-3d",
                transform: "rotateX(72deg) rotateY(-18deg)",
              }}
            >
              <div
                className="w-full h-full rounded-full border border-dashed border-cyan-400/65"
                style={{
                  boxShadow:
                    "0 0 16px rgba(56, 180, 255, 0.65), inset 0 0 12px rgba(56, 180, 255, 0.35)",
                }}
              >
                {/* Orbital satellite coordinate node */}
                <div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300"
                  style={{
                    boxShadow: "0 0 12px #22d3ee, 0 0 20px #06b6d4",
                  }}
                />
              </div>
            </div>

            {/* --- Holographic Orbital Projection Ring 2 (Counter-rotating Inner Ring) --- */}
            <div
              className="absolute pointer-events-none animate-orbit-ring-reverse"
              style={{
                left: "-8%",
                top: "-8%",
                width: "116%",
                height: "116%",
                transformStyle: "preserve-3d",
                transform: "rotateX(66deg) rotateY(15deg)",
              }}
            >
              <div
                className="w-full h-full rounded-full border border-dotted border-blue-400/55"
                style={{
                  boxShadow: "0 0 14px rgba(96, 165, 250, 0.5)",
                }}
              >
                {/* Secondary orbital satellite coordinate node */}
                <div
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-300"
                  style={{
                    boxShadow: "0 0 10px #60a5fa, 0 0 16px #3b82f6",
                  }}
                />
              </div>
            </div>
          </div>

                    {/* 12. Standing Persona Grounded on Foreground Cathedral Floor */}
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: "33.5%",
              top: "89.8%",
              transform: `translate(calc(-50% + ${offset.x * 6.5}px), calc(-100% + ${offset.y * 4.5}px)) translateZ(0)`,
              width: "clamp(126px, 14.2vw, 172px)",
              transition: "transform 0.06s linear",
            }}
          >
            {/* Ambient Occlusion Shoe Contact Shadows on the Wet Stone Floor */}
            <div
              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[94%] h-6 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 75%)",
                filter: "blur(3.5px)",
                transform: "scaleY(0.28)",
              }}
            />

            {/* Wet Floor Inverted Reflection */}
            <div
              className="absolute top-[99%] left-0 w-full pointer-events-none overflow-hidden"
              style={{
                height: "50%",
                opacity: 0.30,
                transform: "scaleY(-1)",
                maskImage: "linear-gradient(to top, black 0%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 80%)",
                filter: "blur(1.8px)",
              }}
            >
              <img
                src="/person-standing.png"
                alt=""
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Ambient Lighting Interaction (Cyan from Globe on right, Gold from Lantern on left) */}
            <div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle at 85% 45%, rgba(56, 180, 255, 0.22) 0%, transparent 65%)",
                mixBlendMode: "screen",
              }}
            />

            {/* Standing Persona Silhouette Figure */}
            <img
              src="/person-standing.png"
              alt="Md Roushan Alam standing"
              className="w-full h-auto object-contain block relative z-10"
              style={{
                filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.65)) drop-shadow(2px 0 10px rgba(56, 180, 255, 0.32))",
              }}
            />
          </div>

          {/* 13. Atmospheric Ambient Floating Particles Layer */}
          <AtmosphericParticles />
        </div>
      </div>

            {/* --- Center Typography (Exact User Specification) --- */}
      <div className="absolute top-[13%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center px-4 w-full max-w-2xl pointer-events-auto select-text font-body">
        {/* Name Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2 font-display drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          MD. ROUSHAN ALAM
        </h1>

        {/* Small Title */}
        <p className="text-xs sm:text-sm font-bold tracking-widest text-[#F2B66D] uppercase mb-3 font-mono drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          AI · PRODUCT · SYSTEMS
        </p>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 font-display drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          I build systems that make ambitious ideas executable.
        </h2>

        {/* Small Supporting Text */}
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg font-normal tracking-normal mb-6 font-body drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          AI systems. Digital products. Growth infrastructure. I work at the intersection of technology, product and business, turning complex problems into systems that can actually operate.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#proof-of-thinking"
            className="px-6 py-3 rounded-full bg-[#F2B66D] hover:bg-[#e0a256] text-[#071522] font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(242,182,109,0.4)]"
          >
            Explore the work &rarr;
          </a>
          <a
            href="#methodology"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-[#F2B66D]/60 bg-[#071522]/80 hover:bg-[#071522] text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            See how I think &rarr;
          </a>

          {/* Social Links Dock */}
          <div className="flex items-center gap-2 mt-2 sm:mt-0 sm:ml-2 sm:pl-3 sm:border-l sm:border-slate-700/60">
            {/* GitHub */}
            <a
              href="https://github.com/mdroushanalam-astra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mdroushanalam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/mdroushanalam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Mail */}
            <a
              href="mailto:contact@mdroushanalam.in"
              aria-label="Send Email"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* --- Pulsating Scroll Down Indicator --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <a
          href="#thesis"
          className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
          aria-label="Scroll to What I Do section"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase not-italic text-slate-400 group-hover:text-cyan-300 transition-colors">
            Scroll to Explore
          </span>
          <div className="w-8 h-8 rounded-full border border-slate-700/80 group-hover:border-cyan-400/60 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all animate-bounce">
            <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </div>

      {/* --- Top Global Navigation Bar --- */}
      <Navbar />

      {/* --- Aesthetic Vignette & Smooth Bottom Transition to Cloud White Canvas --- */}
      <div
        className="absolute inset-x-0 bottom-0 h-36 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(7, 21, 34, 0.6) 45%, #F8FAFC 100%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
