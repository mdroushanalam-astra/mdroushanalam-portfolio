import React from 'react';
import { Cpu, Layout, TrendingUp, FlaskConical } from 'lucide-react';

const engagements = [
  {
    title: 'AI Systems',
    icon: <Cpu className="w-8 h-8 text-[#F2B66D]" />,
    desc: 'Autonomous agents, enterprise knowledge retrieval, intelligent workflow automation, decision-support tooling. For teams that need machine intelligence integrated into real operations.'
  },
  {
    title: 'Digital Products',
    icon: <Layout className="w-8 h-8 text-[#38BDF8]" />,
    desc: 'High-leverage MVPs, responsive web applications, internal operational platforms, AI-native interfaces. For founders and teams that need ideas turned into working software.'
  },
  {
    title: 'Growth Infrastructure',
    icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
    desc: 'Programmatic acquisition systems, conversion optimization, intent-based customer workflows, experimentation frameworks. For businesses that need growth that compounds.'
  },
  {
    title: 'Strategic Prototyping',
    icon: <FlaskConical className="w-8 h-8 text-[#071522]/60" />,
    desc: 'Turn an uncertain idea into something testable. Research the problem space, design the system architecture, build a working prototype, and identify the key risks. For decision-makers evaluating whether to invest in a full build.'
  }
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-sm text-[#071522]/60 tracking-wider mb-4">14 / WHAT I CAN BUILD WITH YOU</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#071522] max-w-3xl leading-tight">
            Engagements are scoped around the problem, not the number of hours.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engagements.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl border border-[#E2E8F0] hover:border-[#071522]/20 transition-all shadow-sm hover:shadow-md"
            >
              <div className="mb-6 bg-[#F8FAFC] w-16 h-16 rounded-xl flex items-center justify-center border border-[#E2E8F0]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-[#071522] mb-4">
                {item.title}
              </h3>
              <p className="text-[#071522]/70 font-body text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
