import { useState } from "react";
import { Terminal, Layers, Cpu, Workflow, TrendingUp, Sparkles } from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  subtitle: string;
  icon: typeof Layers;
  orbits: string[];
}

const techCategories: TechCategory[] = [
  {
    id: "product",
    name: "PRODUCT",
    subtitle: "Full-Stack Architecture & Cloud",
    icon: Layers,
    orbits: ["Frontend Architecture", "Resilient Backend", "Typed REST & GraphQL APIs", "PostgreSQL & Vector Databases", "Edge Cloud Deployment"],
  },
  {
    id: "intelligence",
    name: "INTELLIGENCE",
    subtitle: "Reasoning & Model Adaptation",
    icon: Cpu,
    orbits: ["LLM Orchestration", "Hybrid Vector RAG", "Autonomous Agents", "LoRA / QLoRA Adaptation", "Computer Vision Feeds"],
  },
  {
    id: "automation",
    name: "AUTOMATION",
    subtitle: "Distributed Event Orchestration",
    icon: Workflow,
    orbits: ["Event-Driven Workflows", "API Bridges & Webhooks", "Data ETL Pipelines", "Idempotent Retry Queues", "Real-Time Telemetry"],
  },
  {
    id: "growth",
    name: "GROWTH",
    subtitle: "AI Search & Organic Reach",
    icon: TrendingUp,
    orbits: ["Search Engine Optimization (SEO)", "Generative Engine Optimization (GEO)", "App Store Optimization (ASO)", "Attribution Analytics", "Programmatic Content Engines"],
  },
];

const concreteStack = [
  "TypeScript", "Next.js", "React", "Python", "PyTorch", "Hugging Face", "LoRA/QLoRA",
  "LangChain", "OpenAI API", "PostgreSQL", "Supabase", "Redis", "FastAPI", "Node.js", "Docker", "Tailwind CSS"
];

const TechnologySection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const current = techCategories[activeCategory];

  return (
    <section id="technology" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Architectural Canvas (Modern Geometric Lines under Sky) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-07-technology.jpg"
          alt="Modern Architectural Technology Facade under Blue Sky"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/85 to-[#F8FAFC]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF] bg-[#DCEEFF]/50 backdrop-blur-sm mb-6 shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-[#071522]" />
            <span className="text-[11px] font-bold tracking-widest text-[#071522] uppercase font-display">
              07 / TECHNOLOGY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#071522] font-display mb-4 leading-tight">
            The tools are secondary. The system is primary.
          </h2>

          <p className="text-base sm:text-lg text-[#071522]/70 font-body leading-relaxed max-w-2xl mx-auto">
            Tools change constantly. What endures is the ability to orchestrate the right primitives into an integrated, self-healing system.
          </p>
        </div>

        {/* 4 Interactive Constellation Orbit Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "border-[#071522] bg-[#071522] text-white shadow-xl scale-102"
                    : "border-[#DCEEFF] bg-[#F8FAFC]/80 text-[#071522] hover:bg-[#DCEEFF]/30 hover:border-[#B9DCFF]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-5 h-5 ${isActive ? "text-[#F2B66D]" : "text-[#071522]"}`} />
                  <span className={`text-[10px] font-mono ${isActive ? "text-[#B9DCFF]" : "text-[#071522]/60"}`}>
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold font-display tracking-tight">{cat.name}</h3>
                  <p className={`text-[11px] font-body mt-1 leading-tight ${isActive ? "text-[#DCEEFF]" : "text-[#071522]/60"}`}>
                    {cat.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Orbiting Planetary Display */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#DCEEFF] bg-[#F8FAFC]/90 backdrop-blur-xl p-8 sm:p-12 shadow-sm mb-16 text-center">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#DCEEFF]">
            <span className="text-xs font-mono font-bold tracking-widest text-[#071522]/60 uppercase">
              ACTIVE ORBITAL CLUSTER : {current.name}
            </span>
            <span className="text-xs font-mono font-bold text-[#071522] bg-[#DCEEFF] px-3 py-1 rounded-full">
              {current.orbits.length} ARCHITECTURAL CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {current.orbits.map((tech) => (
              <div
                key={tech}
                className="p-4 rounded-2xl border border-[#DCEEFF] bg-[#DCEEFF]/20 hover:bg-[#071522] hover:text-white hover:border-[#071522] transition-all duration-200 text-xs sm:text-sm font-bold font-display flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2B66D]" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Concrete Selected Stack (Underneath) */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#DCEEFF] bg-[#DCEEFF]/30 p-8 text-center shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#071522] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F2B66D]" />
            <span>SELECTED PRODUCTION STACK</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {concreteStack.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#F8FAFC] border border-[#DCEEFF] text-[#071522]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
