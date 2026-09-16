import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Zap, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  num: string;
  title: string;
  category: string;
  oneLiner: string;
  sequence: {
    problem: string;
    system: string;
    outcome: string;
  };
  metric: string;
  metricLabel: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "omni-agent",
    num: "01",
    title: "OmniAgent Workflow System",
    category: "Autonomous Systems & Agent Tool Calling",
    oneLiner: "Manual enterprise support triage was causing 48-hour latency bottlenecks.",
    sequence: {
      problem: "Manual multi-stage triage loops",
      system: "Deterministic LangChain & Vector RAG router",
      outcome: "Autonomous sub-second task synthesis",
    },
    metric: "10x",
    metricLabel: "Operational Speedup",
    techStack: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "Pinecone", "Tailwind CSS"],
    liveUrl: "https://omni-agent.demo.app",
    githubUrl: "https://github.com/mdroushanalam/omni-agent",
  },
  {
    id: "niche-slm",
    num: "02",
    title: "Domain-Adapted SLM Parser",
    category: "Specialized Intelligence & Fine-Tuning",
    oneLiner: "Frontier generalist models cost 20x more and suffered schema hallucinations.",
    sequence: {
      problem: "Expensive, drifting frontier model APIs",
      system: "LoRA/QLoRA adapted 7B model on legal corpora",
      outcome: "99.2% schema compliance at 1/20th cost",
    },
    metric: "99.2%",
    metricLabel: "Domain Accuracy",
    techStack: ["Python", "PyTorch", "Hugging Face", "LoRA/QLoRA", "FastAPI", "Docker"],
    liveUrl: "https://slm-parser.demo.app",
    githubUrl: "https://github.com/mdroushanalam/domain-slm-finetuning",
  },
  {
    id: "event-pipeline",
    num: "03",
    title: "Self-Healing Operations Engine",
    category: "Automation & Event-Driven Backend",
    oneLiner: "Unsynchronized third-party payment and CRM webhooks created silent dropouts.",
    sequence: {
      problem: "Silent webhook dropout and payment drift",
      system: "Idempotent Redis queue with dead-letter retries",
      outcome: "99.99% fault-tolerant delivery across 150K events",
    },
    metric: "99.99%",
    metricLabel: "Pipeline Reliability",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Supabase", "Redis", "Webhooks"],
    liveUrl: "https://pipeline.demo.app",
    githubUrl: "https://github.com/mdroushanalam/self-healing-pipeline",
  },
  {
    id: "geo-discovery",
    num: "04",
    title: "Programmatic GEO Discovery Stack",
    category: "Organic Discovery & AI-Era Reach",
    oneLiner: "Modern web products were invisible to generative search engines like Perplexity.",
    sequence: {
      problem: "Zero citation in generative AI answers",
      system: "Programmatic SSR with semantic JSON-LD schema",
      outcome: "+340% search and generative citation surge",
    },
    metric: "+340%",
    metricLabel: "Organic Reach Surge",
    techStack: ["Next.js", "SSR", "Structured Data", "Schema.org", "Analytics Engine"],
    liveUrl: "https://geo-growth.demo.app",
    githubUrl: "https://github.com/mdroushanalam/geo-growth-architecture",
  },
];

const SelectedWorkSection = () => {
  return (
    <section id="work" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Architectural Canvas (Modern Terrace & Reflecting Water) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-05-selectedwork.jpg"
          alt="Modern Architecture Terrace overlooking Clear Sky"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/85 to-[#F8FAFC]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF] bg-[#DCEEFF]/50 backdrop-blur-sm mb-6 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#071522]" />
            <span className="text-[11px] font-bold tracking-widest text-[#071522] uppercase font-display">
              05 / SELECTED WORK
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#071522] font-display mb-4 leading-tight">
            Proof of work.
          </h2>
          <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#071522]/60 mb-6">
            THINGS I'VE BUILT : SOLVING REAL-WORLD BOTTLENECKS
          </p>

          <p className="text-base sm:text-lg text-[#071522]/70 font-body leading-relaxed">
            Every project is engineered as a complete experience. Not static code, but an interconnected system solving a specific real-world problem.
          </p>
        </div>

        {/* Project Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl border border-[#DCEEFF] bg-[#F8FAFC]/90 backdrop-blur-xl p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#071522]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#071522]/60 uppercase">
                    PROJECT / {study.num}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#071522] text-xs font-mono font-bold">
                    <span className="text-[#F2B66D]">&#9679;</span>
                    <span>{study.metric} {study.metricLabel}</span>
                  </div>
                </div>

                {/* Title & Category */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#071522] font-display mb-1 group-hover:text-[#081B2E] transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs font-semibold text-[#071522]/60 font-body mb-4">
                  {study.category}
                </p>

                {/* Problem Statement */}
                <p className="text-xs sm:text-sm text-[#071522]/80 leading-relaxed font-body mb-6">
                  {study.oneLiner}
                </p>

                {/* The Sequence: Problem -> System -> Outcome */}
                <div className="p-4 rounded-2xl bg-[#DCEEFF]/35 border border-[#DCEEFF] space-y-2 mb-6 text-xs font-body">
                  <div className="flex items-start gap-2 text-[#071522]/70">
                    <span className="font-mono font-bold text-[#071522] shrink-0">Problem :</span>
                    <span>{study.sequence.problem}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#071522]">
                    <span className="font-mono font-bold text-[#071522] shrink-0">System :</span>
                    <span className="font-medium">{study.sequence.system}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#071522]">
                    <span className="font-mono font-bold text-[#F2B66D] shrink-0">Outcome :</span>
                    <span className="font-bold text-[#071522]">{study.sequence.outcome}</span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[#F8FAFC] border border-[#DCEEFF] text-[#071522]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#DCEEFF]">
                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071522] hover:bg-[#081B2E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F2B66D]" />
                  </a>
                )}
                {study.githubUrl && (
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] hover:bg-[#DCEEFF] text-[#071522] border border-[#DCEEFF] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Astra Humanis Special Teaser Monolith */}
        <div className="rounded-3xl border border-[#071522] bg-[#071522] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
          {/* Ambient Orbital Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F2B66D]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B9DCFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F2B66D]/40 bg-[#081B2E] text-xs font-mono font-bold text-[#F2B66D] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE LONG-TERM FRONTIER : WORLD 02</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white mb-3">
              Some ideas are bigger than a project.
            </h3>

            <p className="text-sm sm:text-base text-[#DCEEFF]/80 leading-relaxed font-body mb-8">
              Astra Humanis is an exploration into what happens when intelligence moves beyond the screen and into ambient real-world perception.
            </p>

            <Link
              to="/astra-humanis"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F2B66D] hover:bg-[#e0a256] text-[#071522] font-bold text-xs uppercase tracking-wider transition-all shadow-md group-hover:scale-105"
            >
              <span>Enter Astra Humanis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
