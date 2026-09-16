import { Globe2, Radio, Cpu, Activity, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AstraHumanisSection = () => {
  return (
    <section id="astra-humanis" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Main Monolithic Observatory HUD Card */}
        <div className="rounded-3xl border border-[#D4C4B5] bg-[#E8DFD8]/60 p-8 sm:p-12 lg:p-16 shadow-sm relative overflow-hidden">
          {/* Top Telemetry Beacon Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#D4C4B5]">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#D4C4B5] flex items-center justify-center text-[#3A2E2B] shadow-xs">
                <Globe2 className="w-6 h-6 text-[#C68B25]" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#C68B25] uppercase block">
                  BUILDING ASTRA HUMANIS
                </span>
                <span className="text-xl font-bold text-[#3A2E2B] font-serif-editorial tracking-tight">
                  Autonomous Planetary Perception
                </span>
              </div>
            </div>

            {/* Live Telemetry Status Pills */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#D4C4B5] bg-[#FAF8F5] text-xs font-mono font-bold text-[#3A2E2B]">
                <Activity className="w-3.5 h-3.5 text-[#C68B25] animate-pulse" />
                <span>VENTURE: ACTIVE RESEARCH</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#D4C4B5] bg-[#FAF8F5] text-xs font-mono font-bold text-[#3A2E2B]">
                <Radio className="w-3.5 h-3.5 text-[#D9A036]" />
                <span>PERCEPTION CORE</span>
              </div>
            </div>
          </div>

          {/* Central Vision & Editorial Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            {/* Left Column: Conceptual Celestial Image */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#D4C4B5] bg-[#FAF8F5] shadow-sm aspect-square relative">
              <img
                src="/editorial-astra.jpg"
                alt="Celestial Armillary & Planetary Perception"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E2B]/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#3A2E2B]/80 px-3 py-1 rounded-md backdrop-blur-sm">
                  PLANETARY INSTRUMENTATION
                </span>
              </div>
            </div>

            {/* Right Column: Mission Text & Readout */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3A2E2B] font-serif-editorial leading-tight">
                A More Intelligent Way to <span className="italic font-normal text-[#C68B25]">Understand the World</span>
              </h3>
              <p className="text-sm sm:text-base text-[#4A3B37] leading-relaxed font-sans-editorial">
                Astra Humanis is my long-term venture into ambient machine intelligence. We build systems that perceive complex physical and digital environments, interpret what is unfolding in real time, and assist humans in making high-stakes decisions with clarity.
              </p>

              {/* Core Feature Tags */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#D4C4B5] text-xs font-semibold text-[#3A2E2B] font-sans-editorial">
                  Multimodal Sensor Fusion
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#D4C4B5] text-xs font-semibold text-[#3A2E2B] font-sans-editorial">
                  Edge SLM Inference
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#D4C4B5] text-xs font-semibold text-[#3A2E2B] font-sans-editorial">
                  Proactive Human Assistance
                </span>
              </div>

              {/* Telemetry Progress Bars */}
              <div className="rounded-2xl border border-[#D4C4B5] bg-[#FAF8F5] p-5 space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[#4A3B37] mb-1">
                    <span className="font-bold">PERCEPTION INGESTION LATENCY</span>
                    <span className="text-[#C68B25] font-bold">&lt; 85ms</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-[#E8DFD8] overflow-hidden">
                    <div className="h-full bg-[#D9A036] rounded-full w-[94%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[#4A3B37] mb-1">
                    <span className="font-bold">REASONING ACCURACY</span>
                    <span className="text-[#C68B25] font-bold">99.4%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-[#E8DFD8] overflow-hidden">
                    <div className="h-full bg-[#C68B25] rounded-full w-[98%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[#4A3B37] mb-1">
                    <span className="font-bold">AUTONOMOUS DISPATCH</span>
                    <span className="text-[#3A2E2B] font-bold">DETERMINISTIC</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-[#E8DFD8] overflow-hidden">
                    <div className="h-full bg-[#3A2E2B] rounded-full w-[100%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Row with Dedicated Page Routing */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[#D4C4B5]">
            <div className="flex items-center gap-2 text-xs text-[#4A3B37] font-sans-editorial">
              <Sparkles className="w-4 h-4 text-[#C68B25]" />
              <span>Explore the complete planetary perception manifesto, architecture, and telemetry</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="text-xs font-bold text-[#3A2E2B] hover:text-[#C68B25] uppercase tracking-wider transition-colors font-sans-editorial"
              >
                Discuss Astra
              </a>
              <Link
                to="/astra-humanis"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D9A036] hover:bg-[#C68B25] text-[#3A2E2B] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_2px_15px_rgba(217,160,54,0.3)] cursor-pointer"
              >
                <span>Enter Astra Humanis Deep Dive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstraHumanisSection;
