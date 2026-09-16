import { User, Milestone, Compass, Cpu, Target, Award } from "lucide-react";

interface MilestoneItem {
  period: string;
  role: string;
  italicWord: string;
  focus: string;
  description: string;
  takeaway: string;
  badge: string;
  icon: typeof Milestone;
}

const milestones: MilestoneItem[] = [
  {
    period: "FOUNDATIONAL RIGOR",
    role: "History & Human",
    italicWord: "Systems",
    focus: "Governance, Incentives & Institutional Dynamics",
    description:
      "Deep foundational study of how human societies organize, how institutional power flows, and why complex systems succeed or collapse over centuries.",
    takeaway: "Mastered systems-level thinking: software is useless if it does not solve real human coordination problems.",
    badge: "HUMAN SYSTEMS",
    icon: Compass,
  },
  {
    period: "INTELLECTUAL STAMINA",
    role: "Civil Services (UPSC)",
    italicWord: "Research",
    focus: "Analytical Synthesis & Ambiguity",
    description:
      "Intensive multi-year research synthesizing thousands of pages of policy, economics, science, and governance into precise structured insights under high pressure.",
    takeaway: "Built relentless stamina and the ability to dissect any ambiguous domain into actionable first principles.",
    badge: "SYNTHESIS & RIGOR",
    icon: Target,
  },
  {
    period: "FRONTIER AI EVALUATION",
    role: "AI Trainer :",
    italicWord: "RWS Group",
    focus: "RLHF, Model Alignment & Verification",
    description:
      "Hands-on alignment, evaluation, and quality auditing of frontier generative AI systems. Curated high-precision domain prompts, fine-tuning datasets, and hallucination guardrails.",
    takeaway: "Understood where modern language models actually fail, how to benchmark them rigorously, and how to adapt them for production.",
    badge: "MODEL ALIGNMENT",
    icon: Cpu,
  },
  {
    period: "THE BUILDER ERA",
    role: "AI Product",
    italicWord: "Builder",
    focus: "Building Astra Humanis & Full-Stack Intelligent Products",
    description:
      "Unifying full-stack engineering, specialized model fine-tuning, automated operations, and distribution. Building Astra Humanis to explore ambient machine perception.",
    takeaway: "Disciplined execution: turning raw ideas into working, scalable digital reality.",
    badge: "VENTURE & ENGINEERING",
    icon: Award,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#E8DFD8]/60 overflow-hidden border-y border-[#D4C4B5]/60">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4C4B5] bg-[#FAF8F5] mb-5 shadow-xs">
            <User className="w-3.5 h-3.5 text-[#C68B25]" />
            <span className="text-[11px] font-bold tracking-widest text-[#3A2E2B] uppercase font-sans-editorial">
              THE TRAJECTORY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A2E2B] tracking-tight font-serif-editorial leading-[1.2] mb-6">
            From Understanding Human Systems to <span className="italic text-[#C68B25] font-normal">Building Intelligent Ones</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A3B37] font-normal font-sans-editorial leading-relaxed">
            Most engineers understand code. Few understand human systems, analytical synthesis, and product economics equally well. That non-linear path is my greatest competitive edge.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Warm Brass Center Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-[#D4C4B5] pointer-events-none" />

          <div className="space-y-12">
            {milestones.map((m, index) => {
              const Icon = m.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={m.period}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-[#D4C4B5] bg-[#FAF8F5] flex items-center justify-center text-[#C68B25] shadow-sm z-10 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] rounded-3xl border border-[#D4C4B5] bg-[#FAF8F5] p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#C68B25] uppercase">
                        {m.period}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#E8DFD8] text-[#3A2E2B] uppercase">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#3A2E2B] font-serif-editorial mb-1">
                      {m.role} <span className="italic font-normal text-[#C68B25]">{m.italicWord}</span>
                    </h3>
                    <p className="text-xs font-semibold text-[#3A2E2B]/80 font-sans-editorial mb-4">
                      {m.focus}
                    </p>

                    <p className="text-xs sm:text-sm text-[#4A3B37] leading-relaxed font-sans-editorial mb-5">
                      {m.description}
                    </p>

                    {/* Takeaway Insight Callout */}
                    <div className="p-4 rounded-2xl bg-[#E8DFD8]/60 border border-[#D4C4B5] text-xs text-[#3A2E2B] font-medium font-sans-editorial leading-relaxed">
                      <span className="font-bold text-[#C68B25] uppercase tracking-wider block text-[10px] mb-1">
                        Core Takeaway
                      </span>
                      {m.takeaway}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
