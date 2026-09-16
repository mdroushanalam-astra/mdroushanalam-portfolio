import { useState, useEffect } from "react";
import { Compass } from "lucide-react";

const morphWords = [
  { word: "IDEA", label: "01 / Conception", desc: "Abstract thought and human ambition" },
  { word: "SYSTEM", label: "02 / Architecture", desc: "Interlocking logic and resilient infrastructure" },
  { word: "PRODUCT", label: "03 / Reality", desc: "Working, intuitive digital interfaces" },
  { word: "IMPACT", label: "04 / Outcome", desc: "Autonomous scale and measurable adoption" },
];

const ThesisSection = () => {
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % morphWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const current = morphWords[activeWordIdx];

  return (
    <section id="thesis" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Architectural Canvas (Clear Sky + Minimalist Pavilion) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-02-thesis.jpg"
          alt="Modern Architecture under Clear Blue Sky"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-105"
        />
        {/* Soft sky-blue gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/80 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,238,255,0.7)_0%,transparent_70%)]" />
      </div>

      {/* Flowing Animated Topographic Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path
            d="M-100 250 C 300 150, 600 350, 1000 200 C 1200 120, 1400 280, 1600 220"
            stroke="#B9DCFF"
            strokeWidth="1.5"
            className="animate-topographic-wave"
          />
          <path
            d="M-100 350 C 250 280, 700 480, 1100 300 C 1300 220, 1500 380, 1600 320"
            stroke="#DCEEFF"
            strokeWidth="2"
            className="animate-topographic-wave"
            style={{ animationDuration: "30s" }}
          />
          <path
            d="M-100 500 C 400 400, 800 600, 1200 420 C 1350 350, 1500 520, 1600 460"
            stroke="#B9DCFF"
            strokeWidth="1.5"
            className="animate-topographic-wave"
            style={{ animationDuration: "50s" }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Subtitle Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF] bg-[#DCEEFF]/50 backdrop-blur-sm mb-6 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#071522]" />
            <span className="text-[11px] font-bold tracking-widest text-[#071522] uppercase font-display">
              02 / THE THESIS
            </span>
          </div>

          {/* Large Architectural Thesis Statements */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#071522] font-display leading-[1.15]">
              Ideas are easy to imagine.
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#071522]/80 font-display leading-[1.15]">
              Making them real is the work.
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#071522]/60 font-body pt-2">
              I build the technology between the two.
            </p>
          </div>
        </div>

        {/* Huge Floating 3D Typographic Word Transformation */}
        <div className="my-16 max-w-4xl mx-auto rounded-3xl border border-[#DCEEFF] bg-[#F8FAFC]/85 backdrop-blur-xl p-10 sm:p-16 text-center shadow-[0_20px_60px_rgba(7,21,34,0.06)] relative overflow-hidden group">
          {/* Subtle Ambient Light Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DCEEFF]/60 rounded-full blur-[100px] pointer-events-none" />

          <span className="text-xs font-mono font-bold tracking-widest text-[#071522]/60 uppercase block mb-4">
            THE CONTINUOUS METAMORPHOSIS : {current.label}
          </span>

          {/* Big 3D Typography */}
          <div className="h-28 sm:h-36 flex items-center justify-center">
            <div
              key={current.word}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#071522] font-display transition-all duration-700 transform scale-100 drop-shadow-[0_10px_25px_rgba(185,220,255,0.8)]"
              style={{
                textShadow: "0 2px 0 #DCEEFF, 0 4px 0 #B9DCFF, 0 6px 0 rgba(7, 21, 34, 0.15)",
              }}
            >
              {current.word}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#071522]/70 font-body max-w-md mx-auto mt-4">
            {current.desc}
          </p>

          {/* Morph Indicator Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {morphWords.map((item, idx) => (
              <button
                key={item.word}
                onClick={() => setActiveWordIdx(idx)}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  activeWordIdx === idx
                    ? "w-8 bg-[#071522]"
                    : "w-2 bg-[#DCEEFF] hover:bg-[#B9DCFF]"
                }`}
                aria-label={`Go to ${item.word}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
