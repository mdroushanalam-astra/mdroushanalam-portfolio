import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Database, Brain, Zap, Target, ArrowDown, Activity, 
  Users, Shield, MessageSquare, Workflow, GitMerge, Search, Layers, 
  CheckCircle2, ArrowRight, Play, LayoutGrid
} from 'lucide-react';

import SalesIntelligenceSandbox from './prototypes/SalesIntelligenceSandbox';
import CustomerSupportSandbox from './prototypes/CustomerSupportSandbox';
import OperationsInvoiceSandbox from './prototypes/OperationsInvoiceSandbox';
import SocraticEducationSandbox from './prototypes/SocraticEducationSandbox';

const prototypes = [
  {
    id: "sales-intelligence",
    title: "AI Sales Intelligence System",
    tag: "Applied AI Experiment",
    hasLiveSandbox: true,
    sandboxComponent: SalesIntelligenceSandbox,
    problem: "Sales teams waste 40% of time on unqualified leads and manual research.",
    whyFails: "Existing tools provide static data dumps, not contextual intelligence. CRM enrichment is batch, not real-time. No intent signal synthesis.",
    architecture: [
      { name: "Event Ingestion", icon: Activity, desc: "Job postings, tech stack changes, funding rounds" },
      { name: "Signal Classification", icon: Brain, desc: "Small fine-tuned classifier, not GPT" },
      { name: "Account Scoring Model", icon: Target, desc: "Real-time probability scoring" },
      { name: "Dynamic Briefing", icon: Zap, desc: "Contextual insight generation" },
      { name: "CRM Push API", icon: Database, desc: "Bi-directional sync" }
    ],
    keyDecision: "Why a 70M-parameter classifier outperforms GPT-4 for intent scoring (latency: 12ms vs 800ms, cost: $0.001 vs $0.03 per classification, accuracy: 94% vs 87% on domain-specific signals after fine-tuning).",
    next: "Real-time Slack alerts, meeting prep automation, competitive intelligence layer."
  },
  {
    id: "customer-support",
    title: "AI Customer Support Agent",
    tag: "Applied AI Experiment",
    hasLiveSandbox: true,
    sandboxComponent: CustomerSupportSandbox,
    problem: "Tier-1 support costs $15-25 per ticket. 60-70% of tickets are repetitive.",
    whyFails: "Rule-based trees break on novel queries. Generic LLMs hallucinate product details. No confidence-aware escalation.",
    architecture: [
      { name: "Ticket Classifier", icon: GitMerge, desc: "Deterministic rules for known categories" },
      { name: "Knowledge Retrieval", icon: Search, desc: "Vector search over docs with citation" },
      { name: "Response Generator", icon: MessageSquare, desc: "SLM with confidence score" },
      { name: "Confidence Gate", icon: Shield, desc: "If <0.85, route to human" },
      { name: "Human Agent Dashboard", icon: Users, desc: "With AI-suggested response" }
    ],
    keyDecision: "Separating deterministic routing from LLM reasoning reduces hallucination by 73% and cost by 60%.",
    next: "Proactive support (detecting issues before tickets), sentiment-aware escalation."
  },
  {
    id: "business-operations",
    title: "Business Operations Automation Engine",
    tag: "Applied AI Experiment",
    hasLiveSandbox: true,
    sandboxComponent: OperationsInvoiceSandbox,
    problem: "Mid-size companies lose 20-30% of operational capacity to manual data movement between systems.",
    whyFails: "Brittle screen-scraping breaks on UI changes. No exception handling intelligence. Synchronous orchestration creates cascading failures.",
    architecture: [
      { name: "Event-Driven Ingestion", icon: Zap, desc: "Email webhook, file upload, API trigger" },
      { name: "Document AI Extraction", icon: Search, desc: "Invoice fields, PO matching" },
      { name: "Business Rules Engine", icon: Workflow, desc: "Approval routing, threshold checks" },
      { name: "System Integration Layer", icon: Server, desc: "Accounting, ERP, CRM APIs" },
      { name: "Audit Trail & Exception Queue", icon: Shield, desc: "Human review dashboard" }
    ],
    keyDecision: "Why event-driven async with dead letter queues beats synchronous RPA (99.7% vs 94% reliability at scale).",
    next: "Self-healing workflows (auto-retry with adapted extraction), predictive exception routing."
  },
  {
    id: "education-environment",
    title: "AI-Native Education Environment",
    tag: "Independent Systems Research",
    hasLiveSandbox: true,
    sandboxComponent: SocraticEducationSandbox,
    problem: "1-on-1 tutoring produces 2 standard deviations improvement (Bloom 1984) but is economically impossible to scale.",
    whyFails: "Coursera has <15% completion rates. Video lectures are passive. No adaptive pacing. Generic LLMs don't track learner state.",
    architecture: [
      { name: "Concept Dependency Graph", icon: GitMerge, desc: "Prerequisite mapping" },
      { name: "Diagnostic Assessment", icon: Target, desc: "Identify knowledge gaps" },
      { name: "Socratic Dialogue Engine", icon: MessageSquare, desc: "SLM fine-tuned to ask, not tell" },
      { name: "Mastery Verification", icon: CheckCircle2, desc: "Spaced retrieval testing" },
      { name: "Progress Analytics", icon: Activity, desc: "Adaptive path selection" }
    ],
    keyDecision: "Why the tutor must ask questions, not give answers (retrieval practice produces 50% better retention than re-reading).",
    next: "Multi-modal content generation, peer learning matching, institutional analytics."
  },
  {
    id: "research-workspace",
    title: "Autonomous AI Research Workspace",
    tag: "Independent Systems Research",
    hasLiveSandbox: false,
    problem: "Researchers spend 60% of time finding and reading papers, 40% on actual synthesis.",
    whyFails: "Naive RAG loses context at chunk boundaries. Citation hallucination rates of 15-30%. No persistent knowledge state across sessions.",
    architecture: [
      { name: "Multi-Source Ingestion", icon: Layers, desc: "arxiv, PubMed, patents, market reports" },
      { name: "Semantic Chunking", icon: Workflow, desc: "Respect paragraph/section boundaries" },
      { name: "Retrieval-Augmented Synthesis", icon: Brain, desc: "With mandatory citation verification" },
      { name: "Knowledge Graph Builder", icon: GitMerge, desc: "Entities, relationships, contradictions" },
      { name: "Session Memory", icon: Database, desc: "Persistent research context" }
    ],
    keyDecision: "Why semantic chunking with overlap beats fixed-size chunking (23% improvement in retrieval relevance).",
    next: "Automated literature review generation, contradiction detection, research gap identification."
  }
];

export default function PrototypesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState<'architecture' | 'sandbox'>('architecture');

  const currentProto = prototypes[activeTab];
  const SandboxComponent = currentProto.sandboxComponent;

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    // If new tab doesn't have live sandbox, revert to architecture
    if (!prototypes[index].hasLiveSandbox) {
      setViewMode('architecture');
    }
  };

  return (
    <section id="prototypes" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[#D9A036] font-mono text-sm tracking-wider uppercase mb-4 block">
            06 / PROTOTYPES & LIVE SANDBOXES
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#071522] mb-4">
                Architecture Labs
              </h2>
              <p className="text-lg text-slate-600 font-body max-w-2xl leading-relaxed">
                Functional architectures, not hypothetical slides. Test the interactive sandboxes live directly in your browser.
              </p>
            </div>

            {/* View Mode Toggle Switch */}
            {currentProto.hasLiveSandbox && (
              <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300">
                <button
                  onClick={() => setViewMode('architecture')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    viewMode === 'architecture'
                      ? 'bg-[#071522] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  Blueprint Architecture
                </button>
                <button
                  onClick={() => setViewMode('sandbox')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    viewMode === 'sandbox'
                      ? 'bg-[#D9A036] text-[#071522] font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Launch Live Sandbox
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Selector */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {prototypes.map((proto, index) => (
              <button
                key={proto.id}
                onClick={() => handleTabChange(index)}
                className={`text-left px-6 py-5 rounded-xl transition-all duration-300 border ${
                  activeTab === index 
                    ? 'bg-[#071522] text-white border-[#071522] shadow-xl shadow-slate-200' 
                    : 'bg-white text-slate-600 border-[#E2E8F0] hover:border-[#D9A036] hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono ${activeTab === index ? 'text-[#F2B66D]' : 'text-slate-400'}`}>
                    {proto.tag}
                  </span>
                  {proto.hasLiveSandbox && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider font-semibold">
                      Live Sandbox
                    </span>
                  )}
                </div>
                <h3 className={`font-display font-semibold text-lg ${activeTab === index ? 'text-white' : 'text-[#071522]'}`}>
                  {proto.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Prototype Display */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {viewMode === 'sandbox' && SandboxComponent ? (
                <motion.div
                  key={`sandbox-${activeTab}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <SandboxComponent />
                </motion.div>
              ) : (
                <motion.div
                  key={`arch-${activeTab}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 shadow-sm"
                >
                  <div className="mb-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <h3 className="text-3xl font-display font-bold text-[#071522]">
                        {currentProto.title}
                      </h3>
                      {currentProto.hasLiveSandbox && (
                        <button
                          onClick={() => setViewMode('sandbox')}
                          className="text-xs font-mono px-3.5 py-1.5 rounded-lg bg-[#071522] text-[#F2B66D] hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          Test Live Engine
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-[#071522] font-body text-lg">{currentProto.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-2">Why Existing Solutions Fail</h4>
                        <p className="text-slate-600 font-body">{currentProto.whyFails}</p>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Flow Diagram */}
                  <div className="mb-10">
                    <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-6">System Architecture</h4>
                    <div className="relative flex flex-col gap-4">
                      {/* Background line connecting nodes */}
                      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#DCEEFF] z-0"></div>
                      
                      {currentProto.architecture.map((node, i) => {
                        const Icon = node.icon;
                        return (
                          <div key={i} className="relative z-10 flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-[#071522] flex items-center justify-center shrink-0 border-4 border-white shadow-sm transition-transform group-hover:scale-110">
                              <Icon className="w-5 h-5 text-[#38BDF8]" />
                            </div>
                            <div className="pt-2">
                              <h5 className="font-display font-semibold text-[#071522]">{node.name}</h5>
                              <p className="text-sm text-slate-500 font-body mt-1">{node.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                    <div>
                      <h4 className="text-sm font-mono text-[#D9A036] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4" /> Key Decision
                      </h4>
                      <p className="text-sm text-slate-700 font-body leading-relaxed">
                        {currentProto.keyDecision}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-[#38BDF8] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" /> What I would Build Next
                      </h4>
                      <p className="text-sm text-slate-700 font-body leading-relaxed">
                        {currentProto.next}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
