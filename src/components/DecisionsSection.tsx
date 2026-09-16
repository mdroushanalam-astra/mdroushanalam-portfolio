import React, { useState } from "react";
import { Terminal } from "lucide-react";

export default function DecisionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const decisions = [
    {
      id: 1,
      title: "Why Small Specialized Models outperform monolithic LLMs in production",
      reasoning:
        "Latency (12ms vs 800ms), cost per inference ($0.001 vs $0.03), domain accuracy after fine-tuning (94% vs 87%), data privacy (runs on your infrastructure), and predictability (deterministic outputs for classification tasks). Massive models like GPT-4 are excellent for broad, open-ended reasoning, but they are overkill for the repetitive, specific tasks that dominate production workloads.",
      verdict: "Use the largest model for exploration. Use the smallest model that works for production.",
    },
    {
      id: 2,
      title: "Why event-driven async architectures scale where synchronous polling fails",
      reasoning:
        "Polling wastes resources checking for changes that haven't happened. At scale (10,000+ events/hour), polling creates O(n) load regardless of actual event frequency. Event-driven systems decouple the connection from the processing thread. The system reacts only to real changes, utilizing resources efficiently. Dead letter queues handle failures gracefully, and idempotent event handlers prevent duplicate processing.",
      verdict: "Move from a proactive polling model to a reactive event-driven model for high concurrency.",
    },
    {
      id: 3,
      title: "Why an AI agent must never have unconstrained financial autonomy",
      reasoning:
        "A 0.1% error rate on 10,000 transactions is 10 wrong financial decisions. AI confidence scores do not map linearly to actual correctness. Human approval gates for financial actions above a threshold are not a limitation; they are a feature. The cost of a false positive (unnecessary human review) is minutes. The cost of a false negative (unauthorized transaction) is potentially catastrophic.",
      verdict: "Always enforce human-in-the-loop validation for high-stakes operational workflows.",
    },
    {
      id: 4,
      title: "Why certain operational workflows must remain intentionally human",
      reasoning:
        "Not everything that can be automated should be. Customer escalation handling, ethical judgment calls, relationship-dependent negotiations, and creative strategy require contextual understanding that current AI cannot reliably provide. Automating these creates brittleness, not efficiency.",
      verdict: "Automate the deterministic execution. Leave the probabilistic judgment to humans.",
    },
    {
      id: 5,
      title: "Why 90% of AI SaaS products are fragile wrappers destined for commoditization",
      reasoning:
        "If your product is 'GPT-4 + a prompt + a UI', then OpenAI's next API update makes you obsolete. Durable AI products have: proprietary data flywheels, domain-specific fine-tuned models, workflow integration that creates switching costs, and feedback loops that improve with usage.",
      verdict: "Build moats in your data pipelines and workflow integrations, not your prompts.",
    },
    {
      id: 6,
      title: "Why data schema design matters more than prompt engineering",
      reasoning:
        "Prompt engineering optimizes the last mile. Data schema design determines whether the right information reaches the model at all. A perfectly engineered prompt on poorly structured data produces confident nonsense. A mediocre prompt on well-structured, clean, contextually rich data produces useful outputs. Most AI product failures are data architecture failures disguised as model failures.",
      verdict: "Structure your data meticulously before you start writing complex prompts.",
    },
  ];

  return (
    <section id="decisions" className="py-24 bg-white text-slate-900 border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-sm text-slate-500 mb-4 tracking-wider">
            11 / DECISIONS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Judgment is the hardest thing to fake.
          </h2>
          <p className="text-slate-600 font-body md:text-lg max-w-3xl">
            These are architectural and strategic decisions I have made or would make, with reasoning. They reveal how I think about tradeoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decisions.map((decision) => {
            const isExpanded = expandedId === decision.id;
            return (
              <div
                key={decision.id}
                onClick={() => setExpandedId(isExpanded ? null : decision.id)}
                className={`group cursor-pointer rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-300 bg-white hover:shadow-md flex flex-col ${
                  isExpanded ? "shadow-md ring-1 ring-[#071522]/5" : ""
                }`}
              >
                <div className="flex flex-col h-full border-l-4 border-l-[#071522] p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-1 bg-[#F8FAFC] p-2 rounded-lg border border-[#E2E8F0] group-hover:bg-[#071522] group-hover:text-white transition-colors">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-[#071522] leading-tight">
                      {decision.title}
                    </h3>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-mono text-sm text-slate-600 mb-6 mt-2 leading-relaxed">
                        {decision.reasoning}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-dashed border-[#E2E8F0]">
                    <p className="font-body text-xs font-bold text-[#071522] uppercase tracking-wide">
                      Verdict: {decision.verdict}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
