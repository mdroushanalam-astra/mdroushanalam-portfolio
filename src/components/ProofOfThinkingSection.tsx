import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Database, Settings, ChevronRight, BarChart3, Binary, Building2, BookOpen } from 'lucide-react';

const investigations = [
  {
    id: "smart-city",
    number: "01",
    title: "What happens when AI becomes the operating layer of a city?",
    icon: Building2,
    coreQuestion: "How do we transition from fragmented municipal IT systems to a unified AI orchestration layer without compromising citizen privacy?",
    findings: [
      "McKinsey data projects IoT and smart city applications could generate $1.7 to $4.5 trillion in global economic impact annually.",
      "Effective AI coordination can improve key city metrics like commute times and emergency response by 10 to 30 percent.",
      "The failure of top-down projects like Sidewalk Toronto shows that decentralized, citizen-centric data architectures are required."
    ],
    architecture: [
      "Sensor Mesh",
      "City Data Lake",
      "Inference Engine",
      "Service APIs",
      "Citizen Interfaces",
      "Feedback Loop"
    ],
    economics: "Potential 60-80% reduction in municipal waste management costs through predictive routing, alongside significant traffic decongestion savings."
  },
  {
    id: "edtech-arch",
    number: "02",
    title: "Redesigning the architecture of a modern AI education platform",
    icon: BookOpen,
    coreQuestion: "How can we architect systems that actually solve Bloom's 2-sigma problem instead of just creating conversational chatbots?",
    findings: [
      "Bloom's 1984 study proved that 1-on-1 mastery tutoring improves student performance by two standard deviations (moving students from the 50th to 98th percentile).",
      "Current EdTech platforms suffer from severe fragmentation, forcing students to navigate 7 or more different applications to learn effectively.",
      "True AI tutoring requires dynamic student state tracking, not just static RAG (Retrieval-Augmented Generation) setups."
    ],
    architecture: [
      "Concept Dependency Graph",
      "Diagnostic Assessment",
      "Adaptive Path Selection",
      "Socratic SLM Tutor",
      "Mastery Verification",
      "Spaced Repetition"
    ],
    economics: "Dramatically lowers the barrier to elite-level personalized education, potentially reducing the per-student tutoring cost to near zero at scale."
  },
  {
    id: "sme-waste",
    number: "03",
    title: "Where traditional businesses are quietly losing crores to manual operations",
    icon: Settings,
    coreQuestion: "How much capital is trapped in manual data entry workflows, and how can agentic AI replace these brittle processes?",
    findings: [
      "Industry data shows manual invoice processing costs businesses between $12 and $40 per invoice due to labor and error reconciliation.",
      "Transitioning to AI and RPA automated solutions can drive costs down to $1 to $3 per invoice, yielding 60-80% direct cost savings.",
      "Traditional RPA fails when formats change; modern AI agents can parse unstructured data with 90% touchless processing rates."
    ],
    architecture: [
      "Invoice Arrival",
      "AI Agent Parsing",
      "LLM Context Extraction",
      "Automated Entry",
      "Exception Review",
      "Payment Processing"
    ],
    economics: "For an SME spending 200 hours a month on manual invoice processing, automation reclaims over 2,400 hours annually, saving substantial operational overhead."
  }
];

export default function ProofOfThinkingSection() {
  const [activeId, setActiveId] = useState("smart-city");

  return (
    <section id="proof-of-thinking" className="py-24 bg-[#F8FAFC] text-[#071522] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#071522] blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#38BDF8] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-sm tracking-wider text-[#F2B66D] mb-4 uppercase">04 / Proof of Thinking</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#040B13]">Original Investigations</h2>
          <p className="text-lg md:text-xl font-body text-slate-600">
            I do not have case studies from clients. Instead, here are problems I chose to investigate, deconstruct, and design solutions for.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {investigations.map((inv) => {
              const isActive = activeId === inv.id;
              const Icon = inv.icon;
              return (
                <button
                  key={inv.id}
                  onClick={() => setActiveId(inv.id)}
                  className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? "border-[#F2B66D] bg-white shadow-lg ring-1 ring-[#F2B66D]/20" 
                      : "border-[#E2E8F0] bg-white/50 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-sm font-bold text-slate-400">{inv.number}</span>
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#F2B66D]" : "text-slate-400"}`} />
                  </div>
                  <h3 className={`font-display font-bold leading-tight ${isActive ? "text-[#071522]" : "text-slate-600"}`}>
                    {inv.title}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {investigations.map((inv) => {
                if (inv.id !== activeId) return null;
                return (
                  <motion.div
                    key={inv.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 shadow-xl"
                  >
                    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-100 border border-slate-200">
                      <span className="font-mono text-xs font-semibold text-slate-600 tracking-wide uppercase">Independent Research</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-[#071522] mb-8">
                      {inv.title}
                    </h3>

                    <div className="mb-10">
                      <h4 className="font-mono text-sm tracking-widest text-[#F2B66D] uppercase mb-4">The Core Question</h4>
                      <p className="text-xl font-body text-slate-700 leading-relaxed border-l-4 border-[#F2B66D] pl-6 py-2 bg-slate-50/50">
                        "{inv.coreQuestion}"
                      </p>
                    </div>

                    <div className="mb-10">
                      <h4 className="font-mono text-sm tracking-widest text-[#F2B66D] uppercase mb-4">Key Findings</h4>
                      <ul className="space-y-4">
                        {inv.findings.map((finding, idx) => (
                          <li key={idx} className="flex gap-4 items-start">
                            <span className="mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#DCEEFF] text-[#071522]">
                              <ChevronRight className="w-4 h-4" />
                            </span>
                            <span className="font-body text-slate-700">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-10">
                      <h4 className="font-mono text-sm tracking-widest text-[#F2B66D] uppercase mb-6">System Architecture</h4>
                      <div className="flex flex-wrap gap-2 md:gap-4 items-center bg-slate-50 p-6 rounded-xl border border-slate-100">
                        {inv.architecture.map((node, idx) => (
                          <React.Fragment key={idx}>
                            <div className="px-4 py-2 bg-[#071522] text-white rounded-lg font-mono text-sm font-medium shadow-sm">
                              {node}
                            </div>
                            {idx < inv.architecture.length - 1 && (
                              <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm tracking-widest text-[#F2B66D] uppercase mb-4">Economic Impact</h4>
                      <div className="flex gap-4 items-start bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                        <BarChart3 className="w-6 h-6 text-[#D9A036] flex-shrink-0 mt-1" />
                        <p className="font-body text-slate-700">{inv.economics}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
