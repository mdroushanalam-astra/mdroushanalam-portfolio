import { useState } from "react";
import { ExternalLink, Github, Layers, Zap } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  metric: string;
  metricLabel: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "omni-agent",
    title: "OmniAgent Workflow System",
    tagline: "Multi-agent enterprise loop with autonomous tool execution.",
    category: "AI Systems & Agents",
    metric: "10x",
    metricLabel: "Operational Speedup",
    description:
      "Engineered an autonomous multi-agent system coordinating vector RAG, dynamic tool calling, and automated synthesis. Replaced manual triage loops with deterministic task execution.",
    techStack: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "Pinecone", "Tailwind CSS"],
    liveUrl: "https://omni-agent.demo.app",
    githubUrl: "https://github.com/mdroushanalam/omni-agent",
  },
  {
    id: "niche-slm",
    title: "Domain-Adapted SLM Parser",
    tagline: "Fine-tuned 7B model for deterministic contract & JSON extraction.",
    category: "LLMs & Model Training",
    metric: "99.2%",
    metricLabel: "Domain Accuracy",
    description:
      "Adapted an open 7B foundation model using LoRA/QLoRA on domain-specific corpora. Achieved near-perfect schema compliance at 1/20th the inference cost of frontier generalist APIs.",
    techStack: ["Python", "PyTorch", "Hugging Face", "LoRA/QLoRA", "FastAPI", "Docker"],
    liveUrl: "https://slm-parser.demo.app",
    githubUrl: "https://github.com/mdroushanalam/domain-slm-finetuning",
  },
  {
    id: "event-pipeline",
    title: "Self-Healing Operations Engine",
    tagline: "Event-driven webhook orchestrator handling 150K+ monthly events.",
    category: "Automation & Backend",
    metric: "99.99%",
    metricLabel: "Pipeline Reliability",
    description:
      "Built a fault-tolerant automation engine connecting payments, databases, and operational alert channels. Features automated dead-letter retries, idempotency keys, and instant Slack telemetry.",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Supabase", "Redis", "Webhooks"],
    liveUrl: "https://pipeline.demo.app",
    githubUrl: "https://github.com/mdroushanalam/self-healing-pipeline",
  },
  {
    id: "growth-engine",
    title: "Programmatic GEO Discovery Stack",
    tagline: "Search architecture optimized for both Google and Generative AI engines.",
    category: "Growth & Distribution",
    metric: "+340%",
    metricLabel: "Organic Reach Growth",
    description:
      "Engineered automated programmatic landing page architecture with structured semantic JSON-LD. Designed specifically for citation in Perplexity, SearchGPT, and traditional search indexes.",
    techStack: ["Next.js", "SSR", "Structured Data", "Schema.org", "Analytics Engine"],
    liveUrl: "https://geo-growth.demo.app",
    githubUrl: "https://github.com/mdroushanalam/geo-growth-architecture",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = ["all", "AI Systems & Agents", "LLMs & Model Training", "Automation & Backend", "Growth & Distribution"];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4C4B5] bg-[#E8DFD8]/60 mb-5 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#C68B25]" />
            <span className="text-[11px] font-bold tracking-widest text-[#3A2E2B] uppercase font-sans-editorial">
              SELECTED PRODUCTION EVIDENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A2E2B] tracking-tight font-serif-editorial leading-[1.2] mb-6">
            Engineered for <span className="italic text-[#C68B25] font-normal">Impact & Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A3B37] font-normal font-sans-editorial leading-relaxed">
            A curated selection of platforms, intelligent models, and automated systems built to resolve genuine operational bottlenecks.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all font-sans-editorial cursor-pointer ${
                activeTab === cat
                  ? "bg-[#D9A036] text-[#3A2E2B] shadow-xs"
                  : "bg-[#E8DFD8]/60 text-[#4A3B37] border border-[#D4C4B5] hover:bg-[#E8DFD8] hover:text-[#3A2E2B]"
              }`}
            >
              {cat === "all" ? "All Systems" : cat}
            </button>
          ))}
        </div>

        {/* Showcase Grid: Warm Sand Monoliths with Warm Ochre Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-[#D4C4B5] bg-[#E8DFD8]/50 hover:bg-[#E8DFD8]/80 p-8 sm:p-10 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#C68B25] uppercase">
                    {project.category}
                  </span>
                  {/* Metric Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#D4C4B5] text-[#3A2E2B] text-xs font-mono font-bold">
                    <Zap className="w-3 h-3 text-[#D9A036]" />
                    <span>{project.metric} {project.metricLabel}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-[#3A2E2B] font-serif-editorial mb-2 group-hover:text-[#C68B25] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-[#3A2E2B]/80 font-sans-editorial mb-4">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4A3B37] leading-relaxed font-sans-editorial mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-[#FAF8F5] border border-[#D4C4B5] text-[#4A3B37]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#D4C4B5]/70">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] hover:bg-[#D9A036] text-[#3A2E2B] border border-[#D4C4B5] text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
                  >
                    <span>View System</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C68B25]" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] hover:bg-[#E8DFD8] text-[#3A2E2B] border border-[#D4C4B5] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
