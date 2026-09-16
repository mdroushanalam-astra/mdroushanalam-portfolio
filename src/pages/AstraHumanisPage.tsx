import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Globe, Eye, Cpu, Zap, Activity, Radio, Sparkles, ShieldCheck } from "lucide-react";

interface JourneyStage {
  step: string;
  name: string;
  category: string;
  tagline: string;
  detail: string;
  telemetry: string;
}

const journeyStages: JourneyStage[] = [
  {
    step: "01",
    name: "EARTH",
    category: "Physical Reality",
    tagline: "The living habitat of human civilization",
    detail: "Complex physical environments, cities, oceanic systems, supply corridors, and human gatherings generating continuous unmapped friction.",
    telemetry: "PLANETARY SCALE",
  },
  {
    step: "02",
    name: "DATA",
    category: "Raw Signals",
    tagline: "Unstructured telemetry streams",
    detail: "High-cadence satellite radar, atmospheric sensors, transit feeds, and digital event transactions streaming without synthesis.",
    telemetry: "PETABYTE INGESTION",
  },
  {
    step: "03",
    name: "PERCEPTION (SEE)",
    category: "Multimodal Sensing",
    tagline: "Computer vision, satellite feeds, sensor arrays",
    detail: "Real-world environmental signals transformed into spatial embeddings, moving beyond text windows into ambient physical perception.",
    telemetry: "< 85ms LATENCY",
  },
  {
    step: "04",
    name: "INTELLIGENCE (UNDERSTAND)",
    category: "Spatial AI & Reasoning",
    tagline: "Data fusion, SLMs, causal graphs",
    detail: "Domain-adapted models synthesize multimodal signals into structured causal hypotheses, understanding what is unfolding in real time.",
    telemetry: "99.4% PRECISION",
  },
  {
    step: "05",
    name: "DECISION (ACT)",
    category: "Contextual Prioritization",
    tagline: "Decision engines, safety guardrails, automation",
    detail: "Calculates probability vectors, eliminates noise, and presents decisive alternatives to prevent catastrophic human oversight.",
    telemetry: "DETERMINISTIC",
  },
  {
    step: "06",
    name: "ACTION",
    category: "Closed-Loop Execution",
    tagline: "Autonomous dispatch & human-machine collaboration",
    detail: "Dispatches automated interventions, triggers emergency protocols, and provides proactive guidance directly to operators on the ground.",
    telemetry: "CLOSED-LOOP",
  },
  {
    step: "07",
    name: "HUMAN IMPACT",
    category: "Enduring Outcome",
    tagline: "Preserving lives, resilience, and planetary flourishing",
    detail: "The ultimate purpose of artificial intelligence: not generating synthetic chatter, but amplifying human agency and planetary stewardship.",
    telemetry: "FLOURISHING",
  },
];

const AstraHumanisPage = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(2); // Default to Perception

  const active = journeyStages[activeStageIdx];

  return (
    <div className="relative min-h-screen bg-[#071522] text-white selection:bg-[#F2B66D] selection:text-[#071522] font-body overflow-x-hidden">
      {/* Background Deep Space Planetary Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img
          src="/sky-arch-astrateaser.jpg"
          alt="Earth Orbital Curvature"
          className="w-full h-full object-cover opacity-25 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071522] via-[#071522]/70 to-[#071522]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#B9DCFF]/10 rounded-full blur-[160px]" />
      </div>

      {/* Standalone Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#071522]/85 border-b border-[#B9DCFF]/20 px-6 sm:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/astra-logo-transparent.png" alt="Astra Logo" className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(242,182,109,0.5)]" />
            <div>
              <span className="text-sm font-black tracking-widest text-white font-display block uppercase">
                ASTRA HUMANIS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#F2B66D] block uppercase">
                Engineering the Future
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://astrahumanis.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2B66D] hover:bg-[#e0a256] text-[#071522] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Visit astrahumanis.in</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#B9DCFF] hover:text-white transition-colors uppercase group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Portfolio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Exploration Journey */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-36">
        {/* Hero Opening Statement */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F2B66D]/40 bg-[#081B2E] text-xs font-mono font-bold text-[#F2B66D] mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE LONG-TERM TECHNOLOGICAL FRONTIER : WORLD 02</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white font-display mb-6 leading-tight">
            A more intelligent way to understand the world.
          </h1>

          <p className="text-base sm:text-xl text-[#DCEEFF]/90 font-body leading-relaxed max-w-3xl mx-auto mb-10">
            Astra Humanis is a long-term exploration into intelligent systems capable of perceiving complex environments, understanding what is happening and helping humans make better decisions.
          </p>

          <div className="p-8 sm:p-10 rounded-3xl border border-[#B9DCFF]/25 bg-[#081B2E]/80 backdrop-blur-xl shadow-2xl max-w-2xl mx-auto text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-[#F2B66D] uppercase block mb-2">
              THE MANIFESTO STATEMENT
            </span>
            <p className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
              "Intelligence should not live only inside a chat window."
            </p>
          </div>
        </div>

        {/* The 3-Phase Perception Engine (SEE -> UNDERSTAND -> ACT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 max-w-5xl mx-auto">
          {/* Phase 01: SEE */}
          <div className="rounded-3xl border border-[#B9DCFF]/25 bg-[#081B2E]/85 p-8 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#071522] border border-[#B9DCFF]/30 flex items-center justify-center text-[#B9DCFF] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#B9DCFF] tracking-widest uppercase block mb-1">
              PHASE 01
            </span>
            <h3 className="text-2xl font-bold font-display text-white mb-4">
              SEE
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DCEEFF]/80 font-body">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B9DCFF]" /> Computer vision</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B9DCFF]" /> Satellite data</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B9DCFF]" /> Sensors</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B9DCFF]" /> Real-world signals</li>
            </ul>
          </div>

          {/* Phase 02: UNDERSTAND */}
          <div className="rounded-3xl border border-[#F2B66D]/35 bg-[#081B2E]/85 p-8 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#071522] border border-[#F2B66D]/40 flex items-center justify-center text-[#F2B66D] mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#F2B66D] tracking-widest uppercase block mb-1">
              PHASE 02
            </span>
            <h3 className="text-2xl font-bold font-display text-white mb-4">
              UNDERSTAND
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DCEEFF]/80 font-body">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F2B66D]" /> Spatial AI</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F2B66D]" /> Specialized SLMs</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F2B66D]" /> Data fusion</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F2B66D]" /> Causal reasoning</li>
            </ul>
          </div>

          {/* Phase 03: ACT */}
          <div className="rounded-3xl border border-emerald-500/35 bg-[#081B2E]/85 p-8 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#071522] border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase block mb-1">
              PHASE 03
            </span>
            <h3 className="text-2xl font-bold font-display text-white mb-4">
              ACT
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DCEEFF]/80 font-body">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Decision systems</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Automation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Human-machine collaboration</li>
            </ul>
          </div>
        </div>

        {/* 18. ASTRA'S VISUAL JOURNEY (EARTH -> DATA -> PERCEPTION -> INTELLIGENCE -> DECISION -> ACTION -> HUMAN IMPACT) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#F2B66D] uppercase block mb-2">
              THE SYSTEMIC DESCENT & ELEVATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Astra's Visual Journey
            </h2>
            <p className="text-sm text-[#DCEEFF]/70 font-body mt-2">
              Scrolling through a world that becomes progressively more intelligent.
            </p>
          </div>

          {/* Journey Steps Array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-12">
            {journeyStages.map((stg, i) => {
              const isSelected = activeStageIdx === i;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveStageIdx(i)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#F2B66D] bg-[#F2B66D] text-[#071522] shadow-[0_0_20px_rgba(242,182,109,0.4)] scale-102"
                      : "border-[#B9DCFF]/20 bg-[#081B2E]/60 text-[#DCEEFF] hover:border-[#B9DCFF]"
                  }`}
                >
                  <span className={`text-[10px] font-mono block ${isSelected ? "text-[#071522]/80 font-bold" : "text-[#B9DCFF]/60"}`}>
                    {stg.step}
                  </span>
                  <p className="text-xs font-bold font-display my-1">{stg.name}</p>
                  <span className={`text-[9px] font-mono ${isSelected ? "text-[#071522]" : "text-[#F2B66D]"}`}>
                    {stg.telemetry}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Interactive Card */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-[#B9DCFF]/25 bg-[#081B2E]/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B9DCFF]/20">
              <span className="text-xs font-mono font-bold tracking-widest text-[#F2B66D] uppercase">
                STAGE {active.step} : {active.category}
              </span>
              <span className="text-xs font-mono text-[#B9DCFF]">
                TELEMETRY : {active.telemetry}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              {active.name} : {active.tagline}
            </h3>

            <p className="text-base text-[#DCEEFF]/90 leading-relaxed font-body">
              {active.detail}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto pt-10 border-t border-[#B9DCFF]/20 space-y-6">
          <img src="/astra-logo-transparent.png" alt="Astra Logo" className="w-16 h-16 object-contain mx-auto drop-shadow-[0_0_20px_rgba(242,182,109,0.5)]" />
          <h4 className="text-xl font-bold font-display text-white">
            Interested in the Astra Humanis thesis or research?
          </h4>
          <div className="flex justify-center gap-4">
            <Link
              to="/#contact"
              className="px-8 py-3.5 rounded-full bg-[#F2B66D] hover:bg-[#e0a256] text-[#071522] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Start a conversation &rarr;
            </Link>
            <Link
              to="/"
              className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Main Portfolio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AstraHumanisPage;
