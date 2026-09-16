import { useState } from "react";
import { Cpu, Network, Sparkles, CheckCircle2, Sliders, Shield } from "lucide-react";

const specializedCapabilities = [
  {
    title: "Model Adaptation",
    desc: "Adapting open weights to bespoke enterprise logic and specialized terminology.",
  },
  {
    title: "Fine-Tuning (LoRA / QLoRA)",
    desc: "Parameter-efficient parameter tuning yielding high domain precision at 1/20th the cost.",
  },
  {
    title: "RAG Systems",
    desc: "Deterministic hybrid vector retrieval eliminating drift and guaranteeing verifiable citations.",
  },
  {
    title: "Domain-Specific Models",
    desc: "Focused compact SLMs running at the edge without heavy cloud dependence.",
  },
  {
    title: "AI Agents & Tool Calling",
    desc: "Autonomous reasoning planners capable of multi-step execution across databases and APIs.",
  },
  {
    title: "Rigorous Evaluation",
    desc: "RLHF alignment benchmarks, hallucination audits, and production safety guardrails.",
  },
];

const IntelligenceSection = () => {
  const [convergenceRatio, setConvergenceRatio] = useState(75);

  return (
    <section id="intelligence" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Architectural Canvas (Curved Modern Architectural Lattice & Sky) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-06-intelligence.jpg"
          alt="Modern Architecture Curved Lattice under Sky"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/85 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,238,255,0.7)_0%,transparent_75%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF] bg-[#DCEEFF]/50 backdrop-blur-sm mb-6 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-[#071522]" />
            <span className="text-[11px] font-bold tracking-widest text-[#071522] uppercase font-display">
              06 / INTELLIGENCE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#071522] font-display mb-6 leading-tight">
            Intelligence shouldn't be one-size-fits-all.
          </h2>

          <p className="text-base sm:text-lg text-[#071522]/80 font-body leading-relaxed mb-6">
            General-purpose models are powerful. But many real problems require intelligence shaped around a particular domain, workflow or objective.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071522] text-white text-xs font-mono font-bold">
            <span className="text-[#F2B66D]">Capability :</span>
            <span>Specialized AI</span>
          </div>
        </div>

        {/* The Neural Convergence Model & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Interactive Neural Convergence Canvas */}
          <div className="lg:col-span-6 rounded-3xl border border-[#DCEEFF] bg-[#F8FAFC]/90 backdrop-blur-xl p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#071522]/60 uppercase">
                INTERACTIVE CONVERGENCE SIMULATOR
              </span>
              <span className="text-xs font-mono font-bold text-[#F2B66D] bg-[#071522] px-2.5 py-1 rounded-md">
                {convergenceRatio > 60 ? "FOCUSED SLM" : "GENERAL LLM"}
              </span>
            </div>

            {/* Visual Particle / Node Field */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-[#071522] p-6 flex items-center justify-center overflow-hidden shadow-inner">
              {/* Diffuse general particles */}
              <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{ opacity: Math.max(0.1, (100 - convergenceRatio) / 100) }}
              >
                <div className="w-full h-full bg-[radial-gradient(#B9DCFF_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* Converged Specialized Model Core */}
              <div
                className="relative z-10 transition-all duration-500 rounded-3xl border border-[#F2B66D] bg-[#081B2E] p-6 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(242,182,109,0.3)]"
                style={{
                  transform: `scale(${0.7 + (convergenceRatio / 100) * 0.4})`,
                  width: "70%",
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F2B66D] text-[#071522] flex items-center justify-center mb-3 shadow-md">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  Domain-Specialized SLM
                </h4>
                <p className="text-[11px] font-mono text-[#B9DCFF] mt-1">
                  1/20th Latency &middot; Zero Drift &middot; Edge Capable
                </p>
              </div>
            </div>

            {/* Slider to interactively adjust convergence */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-mono text-[#071522]/80">
                <span>General Intelligence</span>
                <span className="font-bold text-[#071522]">&rarr; Focused Intelligence</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={convergenceRatio}
                onChange={(e) => setConvergenceRatio(Number(e.target.value))}
                className="w-full h-2 bg-[#DCEEFF] rounded-lg appearance-none cursor-pointer accent-[#071522]"
              />
            </div>
          </div>

          {/* Right Capabilities Grid: 6 Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specializedCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-[#DCEEFF] bg-[#F8FAFC]/80 p-6 transition-all duration-200 hover:border-[#071522]/30 hover:bg-[#DCEEFF]/20 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2 text-[#071522]">
                  <CheckCircle2 className="w-4 h-4 text-[#F2B66D] shrink-0" />
                  <h4 className="text-sm font-bold font-display">{cap.title}</h4>
                </div>
                <p className="text-xs text-[#071522]/70 leading-relaxed font-body">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
