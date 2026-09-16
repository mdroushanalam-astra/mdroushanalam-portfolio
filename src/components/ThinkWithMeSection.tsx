import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Search, Workflow, SplitSquareHorizontal, Settings, LineChart, ChevronDown, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Understand the Workflow",
    icon: Search,
    content: "What is actually happening? We must map every touchpoint from ticket creation to resolution. We identify who touches it, how long each step takes, what information is needed, and what tools are used. This creates our baseline ground truth."
  },
  {
    id: 2,
    title: "Identify the Repetition",
    icon: Workflow,
    content: "Next, we categorize tickets. Which are identical questions with identical answers? Which require reasoning but follow a pattern? Which are genuinely novel? Research shows customer support is typically 60-70% repetitive, 20-25% patterned, and 10-15% novel."
  },
  {
    id: 3,
    title: "Separate Deterministic from Reasoning Work",
    icon: SplitSquareHorizontal,
    content: "Deterministic issues (password resets, billing inquiries, feature location) need rules, not intelligence. Reasoning issues (debugging, integration issues, product feedback) need context-aware AI. Novel issues (complaints, feature requests, edge cases) need human empathy and judgment."
  },
  {
    id: 4,
    title: "Design the AI Intervention",
    icon: Lightbulb,
    content: "The goal is not to replace humans, but to augment the system. We deploy auto-resolution for deterministic tickets. We draft responses for reasoning tickets for human review. We route novel tickets directly to senior agents with full context pre-loaded, eliminating triage time."
  },
  {
    id: 5,
    title: "Engineer Escalation Boundaries",
    icon: Settings,
    content: "The AI must know what it doesn't know. We implement confidence scoring on every response. Below 0.85 confidence: route to a human with an AI-drafted suggestion. Below 0.5: route directly without a draft. We never let AI respond autonomously on critical topics like billing, legal, or account deletion."
  },
  {
    id: 6,
    title: "Measure Economic Yield",
    icon: LineChart,
    content: "Before: Rs. 30L/year, 4.2hr resolution, declining CSAT. After (projected): Rs. 12L/year (60% reduction), 1.8hr avg resolution (with 40% instant), and CSAT improvement from faster resolution. Net savings: Rs. 18L/year. Implementation cost: Rs. 8-12L one-time."
  }
];

export default function ThinkWithMeSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5">
            <span className="text-[#D9A036] font-mono text-sm tracking-wider uppercase mb-4 block">
              08 / THINK WITH ME
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#071522] mb-6">
              Methodology in Action
            </h2>
            <p className="text-lg text-slate-600 font-body mb-10 leading-relaxed">
              How I approach solving complex operational bottlenecks. Let's walk through a real-world scenario step by step.
            </p>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#38BDF8] rounded-l-2xl"></div>
              <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4">The Scenario</h3>
              <p className="text-[#071522] font-body text-lg leading-relaxed italic">
                "A SaaS company is spending Rs. 30 lakh per year on customer support. 70% of tickets are repetitive. Resolution time averages 4.2 hours. Customer satisfaction is dropping."
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Stepper */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Vertical line behind steps */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#E2E8F0] z-0"></div>

              <div className="space-y-4">
                {steps.map((step) => {
                  const isActive = activeStep === step.id;
                  const isPast = activeStep > step.id;
                  const Icon = step.icon;

                  return (
                    <div 
                      key={step.id} 
                      className={`relative z-10 flex gap-6 cursor-pointer group transition-all duration-300 ${isActive ? 'bg-white shadow-xl shadow-slate-200/50 rounded-2xl p-6 border-l-4 border-l-[#D9A036] border-y border-r border-[#E2E8F0]' : 'p-4'}`}
                      onClick={() => setActiveStep(step.id)}
                    >
                      {/* Step Indicator */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm transition-colors duration-300 ${
                        isActive ? 'bg-[#071522] text-[#D9A036]' : 
                        isPast ? 'bg-[#38BDF8] text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {isPast ? <CheckCircle2 className="w-5 h-5" /> : <span className="font-mono text-sm font-bold">{step.id}</span>}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-3">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-display font-semibold text-xl ${isActive ? 'text-[#071522]' : 'text-slate-600 group-hover:text-[#071522]'}`}>
                            {step.title}
                          </h4>
                          {!isActive && <ChevronDown className="w-5 h-5 text-slate-300" />}
                        </div>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-4 text-slate-600 font-body leading-relaxed">
                                {step.content}
                              </p>
                              
                              {step.id < steps.length && (
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveStep(step.id + 1);
                                  }}
                                  className="mt-6 text-sm font-mono text-[#38BDF8] flex items-center gap-2 hover:text-[#071522] transition-colors"
                                >
                                  Next Step <ChevronDown className="w-4 h-4 -rotate-90" />
                                </button>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
