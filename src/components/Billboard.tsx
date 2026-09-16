import { useEffect, useRef, ReactNode } from "react";

interface BillboardProps {
  side: "left" | "right";
  topLines: string[];
  visual: string;
  middleLines: string[];
  bottomLines: string[];
  isQuote?: boolean;
}

const Billboard = ({
  side,
  topLines,
  visual,
  middleLines,
  bottomLines,
  isQuote = false,
}: BillboardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle floating animation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let frame: number;
    let start = 0;
    const offset = side === "left" ? 0 : Math.PI;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;
      el.style.transform = `translateY(${Math.sin(t * 0.4 + offset) * 6}px)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [side]);

  return (
    <div
      ref={containerRef}
      className={`absolute top-[7vh] ${
        side === "left" ? "left-[1.5vw]" : "right-[1.5vw]"
      } w-[13vw] max-w-[210px] h-[84vh] flex flex-col`}
      style={{
        background: "linear-gradient(180deg, rgba(5,8,20,0.88) 0%, rgba(3,6,18,0.92) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          side === "left"
            ? "inset -1px 0 0 rgba(255,255,255,0.03), 0 0 40px rgba(0,80,200,0.08)"
            : "inset 1px 0 0 rgba(255,255,255,0.03), 0 0 40px rgba(0,80,200,0.08)",
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Glowing top edge */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(100,160,255,0.5), transparent)",
        }}
      />

      {/* Top text section */}
      <div className="px-3 pt-4 pb-2 flex-shrink-0">
        {topLines.map((line, i) => (
          <p
            key={i}
            className="text-white/75 font-light leading-tight"
            style={{
              fontSize: "clamp(9px, 0.95vw, 13px)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.35,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Visual section */}
      <div className="flex-1 relative overflow-hidden mx-0 my-1 min-h-0">
        <img
          src={visual}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.65, filter: "brightness(0.7) saturate(0.85)" }}
        />
        {/* Scan line overlay for digital effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          }}
        />
        {/* Gradient overlays top/bottom */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[rgba(5,8,20,0.9)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[rgba(3,6,18,0.9)] to-transparent" />
      </div>

      {/* Middle caption lines */}
      <div className="px-3 py-2 flex-shrink-0">
        {middleLines.map((line, i) => (
          <p
            key={i}
            className="text-white/60 font-light leading-tight"
            style={{
              fontSize: "clamp(8px, 0.85vw, 11px)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Bottom text section */}
      <div className="px-3 pb-4 flex-shrink-0 border-t border-white/5 pt-2 mt-1">
        {isQuote ? (
          <p
            className="text-white/45 font-light not-italic leading-snug"
            style={{ fontSize: "clamp(8px, 0.85vw, 11px)", lineHeight: 1.5 }}
          >
            {bottomLines.join(" ")}
          </p>
        ) : (
          bottomLines.map((line, i) => (
            <p
              key={i}
              className="text-white/55 font-light leading-tight"
              style={{
                fontSize: "clamp(9px, 0.9vw, 12px)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                lineHeight: 1.3,
              }}
            >
              {line}
            </p>
          ))
        )}
      </div>

      {/* Glowing bottom edge */}
      <div
        className="h-px w-full flex-shrink-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
        }}
      />
    </div>
  );
};

export default Billboard;
