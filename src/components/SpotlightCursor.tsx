import { useEffect, useRef } from "react";

const SpotlightCursor = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className="fixed pointer-events-none z-[9990] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(45 93% 47% / 0.06) 0%, hsl(217 91% 60% / 0.03) 40%, transparent 70%)",
        opacity: 0,
      }}
    />
  );
};

export default SpotlightCursor;
