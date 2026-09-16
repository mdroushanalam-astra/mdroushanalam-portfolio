import React, { useState, useMemo } from 'react';
import { Target, Zap, Activity, Building, Users, TrendingUp, Sparkles, Send, Check } from 'lucide-react';

interface CompanyPreset {
  name: string;
  domain: string;
  headcount: number;
  industry: string;
  signals: string[];
}

const PRESETS: CompanyPreset[] = [
  {
    name: "Linear Systems",
    domain: "linearsys.io",
    headcount: 85,
    industry: "Developer Tools & SaaS",
    signals: ["Hiring 8 Distributed Engineers", "Website Traffic +65% MoM", "Migrating from Zendesk"]
  },
  {
    name: "Aegis Health",
    domain: "aegishealth.co",
    headcount: 320,
    industry: "Digital Health & Compliance",
    signals: ["Raised $18M Series B", "Opening EU Headquarters", "SOC2 Audit in Progress"]
  },
  {
    name: "RapidCourier Logistics",
    domain: "rapidcourier.in",
    headcount: 540,
    industry: "Logistics & Supply Chain",
    signals: ["Manual Dispatch Bottlenecks", "Fleet Expansion 40%", "Hiring Frozen on Support"]
  }
];

export default function SalesIntelligenceSandbox() {
  const [companyName, setCompanyName] = useState("Linear Systems");
  const [domain, setDomain] = useState("linearsys.io");
  const [headcount, setHeadcount] = useState(85);
  const [industry, setIndustry] = useState("Developer Tools & SaaS");
  const [selectedSignals, setSelectedSignals] = useState<string[]>([
    "Hiring 8 Distributed Engineers",
    "Website Traffic +65% MoM"
  ]);
  const [copied, setCopied] = useState(false);

  const availableSignals = [
    "Hiring 8 Distributed Engineers",
    "Website Traffic +65% MoM",
    "Raised $18M Series B",
    "Migrating from Zendesk",
    "Opening EU Headquarters",
    "Manual Dispatch Bottlenecks"
  ];

  const applyPreset = (preset: CompanyPreset) => {
    setCompanyName(preset.name);
    setDomain(preset.domain);
    setHeadcount(preset.headcount);
    setIndustry(preset.industry);
    setSelectedSignals(preset.signals);
  };

  const toggleSignal = (signal: string) => {
    if (selectedSignals.includes(signal)) {
      setSelectedSignals(selectedSignals.filter(s => s !== signal));
    } else {
      setSelectedSignals([...selectedSignals, signal]);
    }
  };

  // Real calculation logic
  const analysis = useMemo(() => {
    let icpScore = 45;

    // Headcount logic: 40-400 is optimal enterprise sweet spot
    if (headcount >= 50 && headcount <= 350) {
      icpScore += 35;
    } else if (headcount > 350 && headcount <= 800) {
      icpScore += 25;
    } else if (headcount < 30) {
      icpScore += 10;
    } else {
      icpScore += 15;
    }

    // Signal scoring
    const signalScore = selectedSignals.length * 7;
    const finalScore = Math.min(99, Math.max(20, icpScore + signalScore));

    let tier = "Moderate Intent";
    let tierColor = "text-amber-500 bg-amber-50 border-amber-200";
    if (finalScore >= 85) {
      tier = "High Buying Surge";
      tierColor = "text-emerald-600 bg-emerald-50 border-emerald-200";
    } else if (finalScore < 60) {
      tier = "Low / Research Stage";
      tierColor = "text-slate-500 bg-slate-50 border-slate-200";
    }

    // Dynamic executive briefing generation
    const wedge = headcount > 200 
      ? `Operational consolidation: reduce redundant software licenses across their ${headcount} employees.`
      : `High-velocity engineering leverage: automate manual workflows before headcount crosses 150.`;

    const emailHook = `Noticed ${companyName} has ${selectedSignals.length > 0 ? selectedSignals[0].toLowerCase() : 'rapid expansion underway'}. Most ${industry.toLowerCase()} teams at this stage hit a steep coordination tax between operations and engineering. We built an autonomous pipeline that eliminated that friction.`;

    return {
      score: finalScore,
      tier,
      tierColor,
      wedge,
      emailHook
    };
  }, [companyName, domain, headcount, industry, selectedSignals]);

  const handleCopy = () => {
    navigator.clipboard.writeText(analysis.emailHook);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 lg:p-8 border border-slate-800 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">Live Simulation Active</span>
          </div>
          <h4 className="text-xl font-display font-bold text-white mt-1">Real-Time B2B Intent & Scoring Engine</h4>
        </div>
        
        {/* Preset chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-1">Load Preset:</span>
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Inputs vs Real-time Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left column: Interactive parameter controls */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Target Entity</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D9A036]"
              />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="domain.com"
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D9A036]"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Estimated Headcount</label>
              <span className="font-mono text-xs text-[#38BDF8] font-bold">{headcount} Employees</span>
            </div>
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#D9A036]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Detected Market Signals</label>
            <div className="flex flex-wrap gap-2">
              {availableSignals.map((signal) => {
                const active = selectedSignals.includes(signal);
                return (
                  <button
                    key={signal}
                    onClick={() => toggleSignal(signal)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                      active
                        ? 'bg-[#071522] border-[#38BDF8] text-[#38BDF8]'
                        : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {active ? '+ ' : ''}{signal}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: Dynamic Computed Output */}
        <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div>
                <span className="text-xs font-mono text-slate-400">Calculated ICP Score</span>
                <div className="text-4xl font-display font-extrabold text-white mt-1">
                  {analysis.score}<span className="text-lg text-slate-500 font-normal">/100</span>
                </div>
              </div>
              <div className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold border ${analysis.tierColor}`}>
                {analysis.tier}
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">Recommended Strategic Wedge</span>
                <p className="text-sm font-body text-slate-200 leading-relaxed bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                  {analysis.wedge}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Autonomous Outreach Hook</span>
                  <button
                    onClick={handleCopy}
                    className="text-xs font-mono text-[#D9A036] hover:text-[#f3b544] flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-300 bg-slate-900/90 p-3 rounded-lg border border-slate-800 leading-relaxed italic">
                  "{analysis.emailHook}"
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Inference: Heuristic Pipeline</span>
            <span>Latency: 4ms (Local Exec)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
