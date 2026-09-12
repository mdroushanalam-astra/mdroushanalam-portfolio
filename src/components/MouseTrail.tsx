import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const prevMouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const createParticle = useCallback((x: number, y: number, vx: number, vy: number) => {
    const isGold = Math.random() > 0.4;
    return {
      x,
      y,
      vx: vx * 0.3 + (Math.random() - 0.5) * 2,
      vy: vy * 0.3 + (Math.random() - 0.5) * 2,
      life: 1,
      maxLife: 40 + Math.random() * 30,
      size: 2 + Math.random() * 4,
      hue: isGold ? 45 : 217,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      prevMouseRef.current = { ...mouseRef.current };
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const dx = mouseRef.current.x - prevMouseRef.current.x;
      const dy = mouseRef.current.y - prevMouseRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const count = Math.min(Math.floor(speed / 3) + 1, 5);

      for (let i = 0; i < count; i++) {
        const t = i / count;
        const px = prevMouseRef.current.x + dx * t;
        const py = prevMouseRef.current.y + dy * t;
        particlesRef.current.push(createParticle(px, py, dx, dy));
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.vy += 0.05; // subtle gravity

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;
        const size = p.size * (1 - progress * 0.5);

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
        const sat = p.hue === 45 ? "93%" : "91%";
        const light = p.hue === 45 ? "47%" : "60%";
        gradient.addColorStop(0, `hsla(${p.hue}, ${sat}, ${light}, ${alpha * 0.8})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, ${sat}, ${light}, ${alpha * 0.3})`);
        gradient.addColorStop(1, `hsla(${p.hue}, ${sat}, ${light}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${sat}, 85%, ${alpha})`;
        ctx.fill();
      }

      // Keep particle count reasonable
      if (particles.length > 200) {
        particles.splice(0, particles.length - 200);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default MouseTrail;
