import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, XCircle, AlertCircle, TrendingUp, Zap, Target, Users } from 'lucide-react';

export default function SystemsReimaginedSection() {
  const [showReimagined, setShowReimagined] = useState(false);

  return (
    <section id="systems-reimagined" className="py-24 bg-white text-[#071522]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-sm tracking-wider text-[#F2B66D] mb-4 uppercase">05 / If I Owned The Problem</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Systems I Would Build</h2>
          <p className="text-lg md:text-xl font-body text-slate-600">
            This is not a hypothetical exercise. This is how I would redesign a real acquisition system if I owned the problem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 bg-slate-50 p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="mb-6 lg:mb-0">
            <h3 className="font-display text-xl font-bold mb-2">B2B SaaS Acquisition Funnel</h3>
            <p className="font-body text-slate-600 text-sm">Comparing traditional operations against an AI-orchestrated architecture.</p>
            <div className="mt-4 inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-200">
              <span className="font-mono text-xs font-semibold text-blue-800 tracking-wide uppercase">Independent Systems Research</span>
            </div>
          </div>
          
          <div className="flex bg-slate-200 p-1 rounded-xl">
            <button
              onClick={() => setShowReimagined(false)}
              className={`px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all ${
                !showReimagined ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Current State
            </button>
            <button
              onClick={() => setShowReimagined(true)}
              className={`px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all ${
                showReimagined ? 'bg-[#071522] text-[#F2B66D] shadow-md' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Reimagined System
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Funnel Display */}
          <div className="relative">
            {!showReimagined ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col items-center space-y-2 bg-slate-50 p-8 rounded-2xl border border-slate-200"
              >
                <FunnelNode 
                  title="Organic/Paid Traffic" 
                  metric="10,000 visitors/month"
                  status="neutral"
                />
                <FlowArrow />
                <FunnelNode 
                  title="Generic Landing Page" 
                  metric="3% conversion = 300 leads"
                  status="warning"
                />
                <FlowArrow />
                <FunnelNode 
                  title="Static Lead Form" 
                  metric="40% completion = 120 submissions"
                  status="danger"
                />
                <FlowArrow />
                <FunnelNode 
                  title="Manual Sales Review" 
                  metric="Takes 48 to 72 hours"
                  status="danger"
                />
                <FlowArrow />
                <FunnelNode 
                  title="Cold Email Outreach" 
                  metric="12% response rate"
                  status="warning"
                />
                <FlowArrow />
                <FunnelNode 
                  title="Sales Call" 
                  metric="20% close rate = ~3 customers"
                  status="neutral"
                />
                
                <div className="mt-8 p-6 bg-slate-100 rounded-xl border border-slate-200 w-full text-center">
                  <p className="font-mono text-sm text-slate-500 uppercase mb-2">Net Result</p>
                  <p className="font-display text-3xl font-bold text-slate-800">0.03%</p>
                  <p className="font-body text-sm text-slate-600 mt-1">Visitor-to-Customer Conversion</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col items-center space-y-2 bg-[#040B13] p-8 rounded-2xl border border-[#071522] shadow-2xl relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#38BDF8] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
                
                <FunnelNode 
                  title="Organic/Paid Traffic" 
                  metric="10,000 visitors/month"
                  status="reimagined"
                />
                <FlowArrow active />
                <FunnelNode 
                  title="AI Intent Classification" 
                  metric="Behavioral scoring in real-time"
                  status="reimagined"
                />
                <FlowArrow active />
                <FunnelNode 
                  title="Personalized Experience" 
                  metric="Dynamic content matching role/industry"
                  status="reimagined"
                />
                <FlowArrow active />
                <FunnelNode 
                  title="Intelligent Qualification" 
                  metric="Automated ICP matching + intent signals"
                  status="reimagined"
                />
                <FlowArrow active />
                <FunnelNode 
                  title="AI Sales Brief" 
                  metric="Company context, pain points generated"
                  status="reimagined"
                />
                <FlowArrow active />
                <FunnelNode 
                  title="Human Sales Intervention" 
                  metric="Armed with full intelligence context"
                  status="reimagined"
                />
                <FlowArrow active />
                <FunnelNode 
                  title="Customer Won" 
                  metric="With onboarding automation & feedback loop"
                  status="success"
                />
                
                <div className="mt-8 p-6 bg-gradient-to-br from-[#071522] to-[#0a1f33] rounded-xl border border-[#F2B66D]/30 w-full text-center relative z-10">
                  <p className="font-mono text-sm text-[#38BDF8] uppercase mb-2">Projected Result</p>
                  <p className="font-display text-4xl font-bold text-[#F2B66D]">0.12 - 0.18%</p>
                  <p className="font-body text-sm text-slate-300 mt-1">Visitor-to-Customer (4x to 6x Improvement)</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Reasoning Display */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold mb-8">Architectural Reasoning</h3>
            
            <div className="space-y-8">
              <ReasoningNode 
                icon={Target}
                title="Eliminating the 'MQL Definition' Trap"
                description="Traditional funnels suffer when marketing qualifies leads based on arbitrary form fills. AI classification scores genuine behavioral intent and firmographic fit, ensuring sales only speaks to actual buyers."
              />
              <ReasoningNode 
                icon={Zap}
                title="Speed to Lead & Real-time Personalization"
                description="Friction kills conversion. Waiting 48 hours for a manual lead review causes prospects to look elsewhere. Automating qualification and personalizing content immediately captures intent while it is highest."
              />
              <ReasoningNode 
                icon={Users}
                title="Arming Humans with Context"
                description="Sales reps spend hours researching prospects. Generative AI briefs synthesize company data, recent news, and matching pain points instantly, shifting human effort from research to relationship building."
              />
              <ReasoningNode 
                icon={TrendingUp}
                title="The Feedback Loop"
                description="Unlike static forms, an AI architecture routes post-close usage data back into the qualification model. The system continually self-corrects its targeting parameters based on what actually converts."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FunnelNode({ title, metric, status }: { title: string, metric: string, status: 'neutral' | 'warning' | 'danger' | 'reimagined' | 'success' }) {
  let bgClass = "bg-white border-slate-200 text-slate-800";
  let icon = null;
  
  if (status === 'warning') {
    bgClass = "bg-amber-50 border-amber-200 text-amber-900";
    icon = <AlertCircle className="w-4 h-4 text-amber-500" />;
  } else if (status === 'danger') {
    bgClass = "bg-red-50 border-red-200 text-red-900";
    icon = <XCircle className="w-4 h-4 text-red-500" />;
  } else if (status === 'reimagined') {
    bgClass = "bg-[#071522] border-[#38BDF8]/30 text-white shadow-[0_0_15px_rgba(56,189,248,0.1)]";
    icon = <Zap className="w-4 h-4 text-[#F2B66D]" />;
  } else if (status === 'success') {
    bgClass = "bg-emerald-950 border-emerald-500/30 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
    icon = <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
  }

  return (
    <div className={`w-full max-w-sm p-4 rounded-xl border flex flex-col items-center text-center z-10 transition-colors ${bgClass}`}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="font-display font-semibold">{title}</span>
      </div>
      <span className={`font-mono text-xs ${status === 'reimagined' || status === 'success' ? 'text-slate-400' : 'text-slate-500'}`}>
        {metric}
      </span>
    </div>
  );
}

function FlowArrow({ active = false }: { active?: boolean }) {
  return (
    <div className="flex justify-center -my-1 z-0 relative">
      <div className={`h-8 w-px ${active ? 'bg-gradient-to-b from-[#38BDF8] to-[#F2B66D]' : 'bg-slate-300'}`}></div>
      <ArrowDown className={`absolute bottom-0 translate-y-1/2 w-4 h-4 rounded-full ${active ? 'bg-[#040B13] text-[#F2B66D]' : 'bg-slate-50 text-slate-400'}`} />
    </div>
  );
}

function ReasoningNode({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-[#DCEEFF] flex items-center justify-center text-[#071522]">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-bold text-[#071522] mb-2">{title}</h4>
        <p className="font-body text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
