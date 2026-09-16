import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, TrendingDown, Clock, DollarSign, ArrowRight, Zap, CheckCircle2, AlertTriangle, Activity } from 'lucide-react';

const scenarios = [
  {
    id: "invoice",
    title: "Invoice Processing",
    subtitle: "50-person company",
    current: [
      { step: "Receive invoice (email)", time: "" },
      { step: "Manual data entry", time: "8 min" },
      { step: "Spreadsheet matching", time: "12 min" },
      { step: "Manager approval", time: "Avg 6hr delay" },
      { step: "Accounting entry", time: "5 min" },
      { step: "Payment scheduling", time: "3 min" }
    ],
    metrics: { vol: "~400/mo", hours: "~200 hrs/mo", cost: "$4,000/mo" },
    friction: [
      { issue: "Data entry errors", metric: "4.2% rate" },
      { issue: "Approval delays", metric: "Avg 6 hours" },
      { issue: "Duplicate payments", metric: "1.8% rate" }
    ],
    automated: [
      { step: "Email ingestion", time: "Instant" },
      { step: "AI extraction", time: "30 sec" },
      { step: "Auto-matching", time: "Instant" },
      { step: "Smart routing", time: "Rules/Exceptions" },
      { step: "Accounting API", time: "Instant" },
      { step: "Scheduled payment", time: "Automated" }
    ],
    projected: { hours: "15 hrs/mo", savings: "~$3,700/mo", lift: "94% error reduction" }
  },
  {
    id: "support",
    title: "Support Ticket Routing",
    subtitle: "SaaS, 1000 tickets/month",
    current: [
      { step: "Ticket arrives", time: "" },
      { step: "Agent reads", time: "3 min" },
      { step: "Agent categorizes", time: "1 min" },
      { step: "Search knowledge base", time: "5 min" },
      { step: "Draft response", time: "8 min" },
      { step: "Supervisor review", time: "15 min (complex)" }
    ],
    metrics: { vol: "1000/mo", hours: "4.2hr avg res", cost: "$18,000/mo" },
    friction: [
      { issue: "Misrouting", metric: "23% rate" },
      { issue: "Knowledge search fail", metric: "34% rate" },
      { issue: "Response inconsistency", metric: "High" }
    ],
    automated: [
      { step: "AI classification", time: "Instant" },
      { step: "Auto-response", time: "60% of tickets" },
      { step: "RAG-powered draft", time: "For novel issues" },
      { step: "Confidence gate", time: ">0.85 threshold" },
      { step: "Human review", time: "Low-confidence only" }
    ],
    projected: { hours: "600 human tickets", savings: "60% cost reduction", lift: "$7,200/mo final cost" }
  },
  {
    id: "lead",
    title: "B2B Lead Qualification",
    subtitle: "200 inbound leads/month",
    current: [
      { step: "Form submission", time: "" },
      { step: "SDR manual research", time: "20 min" },
      { step: "ICP scoring", time: "Spreadsheet" },
      { step: "Email outreach", time: "Manual" },
      { step: "Follow-up", time: "3-5 touches" },
      { step: "Meeting booking", time: "" }
    ],
    metrics: { vol: "200/mo", hours: "~67 hrs/mo", cost: "$2,680/mo" },
    friction: [
      { issue: "Response time", metric: "48 hours avg" },
      { issue: "Leads go cold", metric: "50% loss" },
      { issue: "Qualification", metric: "Inconsistent" }
    ],
    automated: [
      { step: "Form submission", time: "Instant" },
      { step: "AI enrichment", time: "Company, stack, signals" },
      { step: "Automated ICP scoring", time: "Instant" },
      { step: "Personalized response", time: "< 5 minutes" },
      { step: "Intent prioritization", time: "Top 20% focus" }
    ],
    projected: { hours: "12 hrs/mo research", savings: "$2,200/mo", lift: "40% conversion lift" }
  }
];

export default function SystemDeconstructionLab() {
  const [activeScenario, setActiveScenario] = useState(0);
  const data = scenarios[activeScenario];

  return (
    <section id="deconstruction-lab" className="py-24 bg-[#071522] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-[#38BDF8] font-mono text-sm tracking-wider uppercase mb-4 block">
            07 / INTERACTIVE LAB
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            System Deconstruction
          </h2>
          <p className="text-lg text-slate-400 font-body max-w-2xl leading-relaxed">
            Select a common business bottleneck below to see how strategic AI implementation transforms the architecture and unit economics.
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap gap-4 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(idx)}
              className={`px-6 py-3 rounded-full text-sm font-display transition-all duration-300 ${
                activeScenario === idx
                  ? 'bg-[#D9A036] text-[#040B13] font-bold shadow-[0_0_20px_rgba(217,160,54,0.3)]'
                  : 'bg-[#040B13] text-slate-300 border border-slate-800 hover:border-slate-600'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Current State Column */}
          <div className="space-y-8">
            <div className="bg-[#040B13] border border-slate-800 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-200">Current Manual Workflow</h3>
                  <p className="text-sm text-slate-500 font-mono mt-1">{data.subtitle}</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg text-slate-400">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              {/* Flow Steps */}
              <div className="space-y-3 mb-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-800 z-0"></div>
                {data.current.map((step, i) => (
                  <div key={i} className="relative z-10 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                      <span className="text-xs font-mono text-slate-400">{i + 1}</span>
                    </div>
                    <div className="flex-1 bg-slate-900/50 rounded-lg px-4 py-2 flex justify-between items-center border border-slate-800/50">
                      <span className="text-sm font-body text-slate-300">{step.step}</span>
                      {step.time && <span className="text-xs font-mono text-slate-500">{step.time}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Friction & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4">
                  <h4 className="text-xs font-mono text-red-400 uppercase mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Friction Hotspots
                  </h4>
                  <ul className="space-y-2">
                    {data.friction.map((f, i) => (
                      <li key={i} className="text-sm flex justify-between text-slate-300">
                        <span>{f.issue}</span>
                        <span className="text-red-400 font-mono text-xs">{f.metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-3 flex items-center gap-2">
                    <TrendingDown className="w-3 h-3" /> Monthly Baseline
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Volume:</span><span className="font-mono">{data.metrics.vol}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Time:</span><span className="font-mono">{data.metrics.hours}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Cost:</span><span className="font-mono text-red-400">{data.metrics.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Automated State Column */}
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-[#071522] to-[#040B13] border border-[#0A2740] rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#38BDF8] to-[#D9A036]"></div>
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Automated Architecture</h3>
                  <p className="text-sm text-[#38BDF8] font-mono mt-1">Proposed AI Intervention</p>
                </div>
                <div className="p-3 bg-[#0A2740] rounded-lg text-[#38BDF8]">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              {/* Flow Steps */}
              <div className="space-y-3 mb-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-[#0A2740] z-0"></div>
                {data.automated.map((step, i) => (
                  <div key={i} className="relative z-10 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0A2740] border border-[#103A5E] flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-[#38BDF8]" />
                    </div>
                    <div className="flex-1 bg-[#0A2740]/30 rounded-lg px-4 py-2 flex justify-between items-center border border-[#103A5E]/50">
                      <span className="text-sm font-body text-slate-200">{step.step}</span>
                      <span className="text-xs font-mono text-[#38BDF8]">{step.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ROI Summary */}
              <div className="bg-[#D9A036]/10 border border-[#D9A036]/20 rounded-xl p-5">
                <h4 className="text-xs font-mono text-[#D9A036] uppercase mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Projected ROI & Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-slate-400 font-mono mb-1">New Manual Time</p>
                    <p className="text-lg font-display font-bold text-white">{data.projected.hours}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono mb-1">Monthly Savings</p>
                    <p className="text-lg font-display font-bold text-[#38BDF8]">{data.projected.savings}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono mb-1">Performance Lift</p>
                    <p className="text-sm font-display font-bold text-[#D9A036] leading-tight">{data.projected.lift}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
