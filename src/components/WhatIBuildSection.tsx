import { useState } from "react";
import { Layers, Cpu, Workflow, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface Stage {
  num: string;
  key: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: typeof Layers;
}

const stages: Stage[] = [
  {
    num: "01",
    key: "BUILD",
    name: "Turn ideas into products.",
    subtitle: "Architecture to Deployment",
    description:
      "I design and develop digital products, web applications and software systems from architecture to deployment.",
    tags: ["Web", "Full Stack", "SaaS", "APIs", "Software"],
    icon: Layers,
  },
  {
    num: "02",
    key: "INTELLIGENCE",
    name: "Give software intelligence.",
    subtitle: "Specialized AI Systems",
    description:
      "I build AI-powered applications and explore specialized AI systems for focused domains, workflows and problems.",
    tags: ["LLMs", "RAG", "AI Agents", "Model Adaptation", "AI Applications"],
    icon: Cpu,
  },
  {
    num: "03",
    key: "AUTOMATE",
    name: "Make systems work for you.",
    subtitle: "Frictionless Workflows",
    description:
      "I connect AI, APIs and software to turn repetitive processes into intelligent workflows.",
    tags: ["AI Automation", "APIs", "Workflows", "Integrations", "Data"],
    icon: Workflow,
  },
  {
    num: "04",
    key: "GROW",
    name: "Make products discoverable.",
    subtitle: "Organic & Generative Reach",
    description:
      "I build organic and AI-era discovery systems that help products get found, understood and adopted.",
    tags: ["SEO", "GEO", "ASO", "Content", "Conversion"],
    icon: TrendingUp,
  },
];

const WhatIBuildSection = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="capabilities" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Architectural Canvas (Modern Sky Architecture) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-03-whatibuild.jpg"
          alt="Modern Architecture under Clear Blue Sky"
          className="w-full h-full object-cover object-bottom opacity-20 filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/85 to-[#F8FAFC]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF] bg-[#DCEEFF]/50 backdrop-blur-sm mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#071522]" />
            <span className="text-[11px] font-bold tracking-widest text-[#071522] uppercase font-display">
              03 / WHAT I BUILD
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#071522] font-display mb-6 leading-tight">
            From thought to system.
          </h2>

          <p className="text-base sm:text-lg text-[#071522]/70 font-body leading-relaxed">
            I do not offer disconnected services. I take an idea through four interconnected stages of one continuous system: from raw thought to scalable human impact.
          </p>
        </div>

        {/* Continuous Pipeline Visual Signature: IDEA -> BUILD -> INTELLIGENCE -> AUTOMATION -> GROWTH -> IMPACT */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl border border-[#DCEEFF] bg-[#F8FAFC]/90 backdrop-blur-md shadow-xs">
          <div className="flex items-center justify-between overflow-x-auto pb-2 gap-2 text-center text-xs font-mono font-bold tracking-wider text-[#071522]">
            <span className="px-3 py-1.5 rounded-full bg-[#DCEEFF] text-[#071522]">IDEA</span>
            <span className="text-[#B9DCFF]">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[#071522] text-white">01 BUILD</span>
            <span className="text-[#B9DCFF]">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[#071522] text-white">02 INTELLIGENCE</span>
            <span className="text-[#B9DCFF]">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[#071522] text-white">03 AUTOMATE</span>
            <span className="text-[#B9DCFF]">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[#071522] text-white">04 GROW</span>
            <span className="text-[#B9DCFF]">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[#F2B66D] text-[#071522]">IMPACT</span>
          </div>
        </div>

        {/* 4 Continuous Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isHovered = activeStage === idx;

            return (
              <div
                key={stage.num}
                onMouseEnter={() => setActiveStage(idx)}
                className={`rounded-3xl border p-8 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isHovered
                    ? "border-[#071522] bg-[#DCEEFF]/40 shadow-lg -translate-y-1.5"
                    : "border-[#DCEEFF] bg-[#F8FAFC]/80 hover:border-[#B9DCFF] hover:bg-[#DCEEFF]/20"
                }`}
              >
                <div>
                  {/* Step & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#071522]/60">
                      {stage.num} : {stage.key}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                        isHovered ? "bg-[#071522] text-white" : "bg-[#DCEEFF] text-[#071522]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#071522] font-display mb-1.5">
                    {stage.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#071522]/60 font-body mb-4">
                    {stage.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#071522]/80 leading-relaxed font-body mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-[#DCEEFF] flex flex-wrap gap-1.5">
                  {stage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[#F8FAFC] border border-[#DCEEFF] text-[#071522]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuildSection;
