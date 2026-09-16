import { Sparkles, ArrowRight, Layers, Cpu, Workflow, Compass } from "lucide-react";

interface Pillar {
  id: string;
  step: string;
  title: string;
  italicWord: string;
  tagline: string;
  transformation: string;
  capabilities: string[];
  icon: typeof Layers;
}

const pillars: Pillar[] = [
  {
    id: "products",
    step: "01",
    title: "Digital Product",
    italicWord: "Architecture",
    tagline: "From abstract concept to scalable production platform.",
    transformation:
      "Most software projects fail in the translation between product vision and system architecture. I engineer full-stack platforms with modern frameworks, resilient databases, and intuitive design.",
    capabilities: ["Full-Stack Next.js & React", "TypeScript Architecture", "PostgreSQL & Supabase", "Clean User Experience"],
    icon: Layers,
  },
  {
    id: "llm",
    step: "02",
    title: "Domain-Adapted",
    italicWord: "Intelligence",
    tagline: "Fine-tuned SLMs and deterministic reasoning guardrails.",
    transformation:
      "Frontier models are generalists that hallucinate. I adapt small language models (SLMs) and LoRA weights on domain corpora to give software reliable, cost-effective reasoning.",
    capabilities: ["Domain SLM Fine-Tuning", "LoRA & QLoRA Adaptation", "RAG & Vector Grounding", "RLHF Evaluation Benchmarks"],
    icon: Cpu,
  },
  {
    id: "automation",
    step: "03",
    title: "Self-Healing",
    italicWord: "Operations",
    tagline: "Event-driven pipelines that eliminate operational friction.",
    transformation:
      "Autonomous systems must withstand real-world failure. I architect webhook networks, queue orchestrations, and automated alerting loops that run silently without manual babysitting.",
    capabilities: ["Event-Driven Webhooks", "Queue Orchestration", "API Integrations", "Idempotent Retry Logic"],
    icon: Workflow,
  },
  {
    id: "growth",
    step: "04",
    title: "Generative Search &",
    italicWord: "Discovery",
    tagline: "Engineered for both traditional indexes and AI engines.",
    transformation:
      "Building software is half the battle; ensuring it gets found is the other. I design programmatic discovery stacks with structured data optimized for Perplexity, SearchGPT, and Google.",
    capabilities: ["Generative Engine Optimization", "Programmatic Architecture", "Semantic JSON-LD & Schema", "Data-Driven Distribution"],
    icon: Compass,
  },
];

const WhatIDoSection = () => {
  return (
    <section id="what-i-do" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4C4B5] bg-[#E8DFD8]/60 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#C68B25]" />
            <span className="text-[11px] font-bold tracking-widest text-[#3A2E2B] uppercase font-sans-editorial">
              CORE DISCIPLINES & CRAFT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A2E2B] tracking-tight font-serif-editorial leading-[1.2] mb-6">
            Transforming Complex Ideas into <span className="italic text-[#C68B25] font-normal">Living Systems</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A3B37] font-normal font-sans-editorial leading-relaxed">
            I do not sell fragmented hours or isolated scripts. I take end-to-end responsibility for engineering software that solves real coordination problems, operates autonomously, and scales gracefully.
          </p>
        </div>

        {/* Editorial Composition: Editorial Art Banner + 4 Capability Monoliths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Feature Column: High-End Conceptual Sculpture */}
          <div className="lg:col-span-4 rounded-3xl border border-[#D4C4B5] bg-[#E8DFD8]/70 p-6 flex flex-col justify-between shadow-sm">
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square bg-[#D4C4B5]/40 shadow-inner">
              <img
                src="/editorial-craft.jpg"
                alt="Architectural Balance & Craft"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E2B]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#3A2E2B]/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  CRAFT & FORM
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-serif-editorial text-lg font-bold text-[#3A2E2B]">
                The Architectural <span className="italic font-normal text-[#C68B25]">Imperative</span>
              </p>
              <p className="text-xs sm:text-sm text-[#4A3B37] leading-relaxed font-sans-editorial">
                Code without structure is liability. Every system is conceived like tactile architecture: durable foundation, intuitive balance, and zero wasted motion.
              </p>
              <div className="pt-4 border-t border-[#D4C4B5]/70 flex items-center justify-between text-xs font-bold text-[#3A2E2B]">
                <span>METHODOLOGY</span>
                <span className="text-[#C68B25]">FIRST PRINCIPLES</span>
              </div>
            </div>
          </div>

          {/* Right 4 Capability Monoliths Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-3xl border border-[#D4C4B5] bg-[#E8DFD8]/50 hover:bg-[#E8DFD8]/90 p-8 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    {/* Step & Icon Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#C68B25]">
                        {pillar.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D4C4B5] flex items-center justify-center text-[#3A2E2B] group-hover:border-[#C68B25] group-hover:text-[#C68B25] transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#3A2E2B] font-serif-editorial mb-2">
                      {pillar.title} <span className="italic font-normal text-[#C68B25]">{pillar.italicWord}</span>
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-[#3A2E2B]/80 font-sans-editorial mb-4">
                      {pillar.tagline}
                    </p>

                    {/* Transformation Details */}
                    <p className="text-xs text-[#4A3B37] leading-relaxed font-sans-editorial mb-6">
                      {pillar.transformation}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="pt-4 border-t border-[#D4C4B5]/60 space-y-2">
                    {pillar.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#4A3B37] font-sans-editorial">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A036]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Editorial Quote Ribbon */}
        <div className="rounded-2xl border border-[#D4C4B5] bg-[#E8DFD8]/70 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-xs">
          <p className="text-xl sm:text-2xl font-normal text-[#3A2E2B] font-serif-editorial italic leading-snug mb-3">
            "We do not build technology for what it is. We build it for what it enables a human being to perceive and create."
          </p>
          <p className="text-xs font-bold tracking-widest text-[#C68B25] uppercase font-sans-editorial">
            The Astra Philosophy : Built in India, Shipped Globally
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
