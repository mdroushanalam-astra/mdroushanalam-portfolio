import { useState } from "react";
import { Compass, Map, Network, Cog, UserCheck, Star, ArrowRight } from "lucide-react";

interface Principle {
  num: string;
  statement: string;
  detail: string;
  visualType: string;
  visualLabel: string;
  icon: typeof Compass;
}

const principles: Principle[] = [
  {
    num: "01",
    statement: "Understand before building.",
    detail: "The first solution isn't always the right problem. True velocity comes from extreme clarity before a single line of code is written.",
    visualType: "maps",
    visualLabel: "TOPOGRAPHIC CARTOGRAPHY",
    icon: Map,
  },
  {
    num: "02",
    statement: "Think in systems.",
    detail: "A product exists inside an ecosystem, not inside a codebase. Software, data, human incentives, and distribution must harmonize.",
    visualType: "networks",
    visualLabel: "INTERCONNECTED MESH",
    icon: Network,
  },
  {
    num: "03",
    statement: "Use technology as leverage.",
    detail: "Automate what machines can do. Preserve human judgment where it matters. The goal of automation is human focus, not complexity.",
    visualType: "machines",
    visualLabel: "DETERMINISTIC LEVERAGE",
    icon: Cog,
  },
  {
    num: "04",
    statement: "Build for the real world.",
    detail: "Beautiful technology means little if it doesn't create useful change. Systems must withstand network drops, noisy inputs, and edge failure.",
    visualType: "human silhouettes",
    visualLabel: "HUMAN COORDINATION",
    icon: UserCheck,
  },
  {
    num: "05",
    statement: "Stay curious about what comes next.",
    detail: "The most interesting problems often exist just beyond today's capabilities. Building Astra Humanis is proof of that lifelong curiosity.",
    visualType: "stars",
    visualLabel: "CELESTIAL HORIZON",
    icon: Star,
  },
];

const HowIThinkSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const current = principles[activeIdx];

  return (
    <section id="thoughts" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Architectural Canvas (Modern Sanctuary with Reflecting Water & Sky) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-08-howithink.jpg"
          alt="Architectural Sanctuary under Clear Blue Sky"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/85 to-[#F8FAFC]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF] bg-[#DCEEFF]/50 backdrop-blur-sm mb-6 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#071522]" />
            <span className="text-[11px] font-bold tracking-widest text-[#071522] uppercase font-display">
              08 / HOW I THINK
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#071522] font-display mb-4 leading-tight">
            The way I approach problems.
          </h2>

          <p className="text-base sm:text-lg text-[#071522]/70 font-body leading-relaxed">
            A digital philosophy exhibition. Unconventional backgrounds yield unconventional competitive leverage.
          </p>
        </div>

        {/* Exhibition Layout: Interactive Principles List + Changing Visual Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: 5 Giant Principles */}
          <div className="lg:col-span-7 space-y-4">
            {principles.map((p, idx) => {
              const isActive = activeIdx === idx;
              const Icon = p.icon;

              return (
                <div
                  key={p.num}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#071522] bg-[#071522] text-white shadow-xl -translate-y-1"
                      : "border-[#DCEEFF] bg-[#F8FAFC]/80 text-[#071522] hover:bg-[#DCEEFF]/30 hover:border-[#B9DCFF]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? "text-[#F2B66D]" : "text-[#071522]/60"}`}>
                      PRINCIPLE / {p.num}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#B9DCFF]" : "text-[#071522]/60"}`} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight mb-2">
                    {p.statement}
                  </h3>

                  <p className={`text-xs sm:text-sm font-body leading-relaxed ${isActive ? "text-[#DCEEFF]/90" : "text-[#071522]/70"}`}>
                    {p.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: The Changing Visual Exhibition Canvas */}
          <div className="lg:col-span-5 rounded-3xl border border-[#DCEEFF] bg-[#F8FAFC]/90 backdrop-blur-xl p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCEEFF] mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#071522]/60 uppercase">
                  PHILOSOPHIC VISUAL
                </span>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#DCEEFF] text-[#071522]">
                  {current.visualLabel}
                </span>
              </div>

              {/* Dynamic Abstract Artifact Representation */}
              <div className="h-64 sm:h-72 rounded-2xl bg-[#071522] text-white p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B9DCFF_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F2B66D]/20 border border-[#F2B66D] flex items-center justify-center mx-auto text-[#F2B66D] shadow-[0_0_30px_rgba(242,182,109,0.4)]">
                    <current.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-white">
                    {current.statement}
                  </h4>
                  <p className="text-xs font-mono text-[#B9DCFF] max-w-xs mx-auto">
                    {current.visualType} &rarr; First-principles convergence
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DCEEFF] mt-6 flex items-center justify-between text-xs font-mono text-[#071522]/60">
              <span>EXPLORATION DEPTH</span>
              <span className="text-[#071522] font-bold">0{activeIdx + 1} / 05</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThinkSection;
