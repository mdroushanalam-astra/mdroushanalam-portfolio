import React, { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

export default function SelectedVenturesSection() {
  const [activeVenture, setActiveVenture] = useState<number | null>(0);

  const ventures = [
    {
      name: "TechGram",
      label: "Independent Venture | Education Technology",
      color: "border-blue-500",
      bgHover: "hover:bg-blue-50",
      activeBg: "bg-blue-50/50",
      problem:
        "Education is fragmented. Students use separate apps for lectures, notes, doubt resolution, practice, and career discovery. No unified intelligent learning environment exists.",
      explored:
        "Designing an AI-native educational ecosystem that combines adaptive tutoring, structured content delivery, doubt resolution, and career pathway mapping in one platform.",
      built:
        "An AI-powered learning environment featuring a personalized 'super teacher' for real-time guidance, progress tracking tools for parents, and a curriculum framework prioritizing both academics and future-ready skills.",
      learned:
        "Building an EdTech platform is fundamentally a content supply and distribution problem before it becomes a technology problem. The AI layer only creates value if the underlying pedagogical model is sound.",
      change:
        "Start with one subject, one audience, one learning outcome. Prove the adaptive engine works for a narrow use case before expanding.",
    },
    {
      name: "Giglo",
      label: "Independent Venture | Recruitment & Gig Economy",
      color: "border-green-500",
      bgHover: "hover:bg-green-50",
      activeBg: "bg-green-50/50",
      problem:
        "Traditional recruitment is slow, expensive, and inefficient. Small businesses and gig workers lack a modern matching platform.",
      explored:
        "Building a next-generation recruitment and gig economy platform that matches talent with opportunities using intelligent qualification.",
      built:
        "A streamlined matching engine and localized marketplace interface designed to connect small businesses with temporary staff rapidly, minimizing the friction of traditional hiring workflows.",
      learned:
        "Marketplace dynamics are brutal. The cold-start problem (no workers without jobs, no jobs without workers) is the actual product challenge, not the technology.",
      change:
        "Focus on one vertical (e.g., home services or delivery) and build dense supply before expanding categories.",
    },
    {
      name: "Astra Humanis",
      label: "Long-Term Frontier | Ambient Intelligence",
      color: "border-[#F2B66D]",
      bgHover: "hover:bg-amber-50",
      activeBg: "bg-amber-50/50",
      problem:
        "Current AI lives inside chat windows and dashboards. It processes text. It does not perceive the physical world, understand spatial context, or make decisions in real-time environments.",
      explored:
        "Engineering systems where machine cognition moves beyond screens into multimodal sensor fusion, spatial understanding, and proactive decision assistance in physical environments.",
      built:
        "Early-stage research and architecture design. This is a long-term exploration, not a commercial product.",
      learned:
        "The hardware-software divide is the primary bottleneck. True ambient intelligence requires robust edge computing and reliable sensor arrays, not just large models in the cloud.",
      change:
        "Focus heavily on the constraints of edge inference and sensor reliability before attempting to model complex spatial reasoning.",
    },
  ];

  return (
    <section id="ventures" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-sm text-slate-500 mb-4 tracking-wider">
            10 / SELECTED VENTURES
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Things I have built and am building
          </h2>
          <p className="text-slate-600 font-body md:text-lg max-w-3xl">
            These are not client projects. These are independent ventures at various stages. I describe them honestly: what the problem was, what I explored, what worked, what did not, and what I would change.
          </p>
        </div>

        <div className="space-y-6">
          {ventures.map((venture, index) => {
            const isActive = activeVenture === index;
            return (
              <div
                key={venture.name}
                className={`border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300 bg-white ${
                  isActive ? "shadow-md" : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setActiveVenture(isActive ? null : index)}
                  className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors border-l-4 ${venture.color} ${
                    isActive ? venture.activeBg : `bg-white ${venture.bgHover}`
                  }`}
                >
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {venture.name}
                    </h3>
                    <p className="font-mono text-xs text-slate-500 mt-1">
                      {venture.label}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isActive && (
                  <div className="px-6 py-6 border-t border-[#E2E8F0] space-y-6 bg-white">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        The Problem
                      </h4>
                      <p className="font-body text-slate-700">{venture.problem}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          What I Explored
                        </h4>
                        <p className="font-body text-slate-700">{venture.explored}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          {venture.name === "Astra Humanis" ? "Current Status" : "What I Built"}
                        </h4>
                        <p className="font-body text-slate-700">{venture.built}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-lg border border-[#E2E8F0]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                        {venture.name === "Astra Humanis" ? "Why It Matters" : "What I Learned"}
                      </h4>
                      <p className="font-body text-slate-800 font-medium">
                        {venture.learned}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        What I Would Change
                      </h4>
                      <p className="font-body text-slate-700">{venture.change}</p>
                    </div>

                    {venture.url && (
                      <div className="pt-4 border-t border-[#E2E8F0]">
                        <a
                          href={venture.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#071522] hover:bg-slate-800 text-white text-xs font-mono font-bold transition-all shadow-sm"
                        >
                          <span>{venture.urlText}</span>
                          <span className="text-[#F2B66D]">&rarr;</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
