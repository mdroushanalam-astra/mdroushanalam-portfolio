import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function ArchitectureThinkingSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      title: "BUSINESS PROBLEM",
      description: "What is the actual outcome someone needs?",
    },
    {
      title: "DECOMPOSITION",
      description: "What system currently produces this outcome? Where does it fail?",
    },
    {
      title: "DATA ARCHITECTURE",
      description: "What information exists? What is missing? How should it flow?",
    },
    {
      title: "INTELLIGENCE LAYER",
      description: "Where does reasoning need to happen? What kind of reasoning?",
    },
    {
      title: "AUTOMATION ENGINE",
      description: "What can be made deterministic? What should stay probabilistic?",
    },
    {
      title: "HUMAN OVERSIGHT",
      description: "Where must a human remain in the loop? What decisions cannot be delegated?",
    },
    {
      title: "PRODUCT INTERFACE",
      description: "How does the system communicate with the people who use it?",
    },
    {
      title: "MEASUREMENT",
      description: "How do we know if reality matched the model?",
    },
    {
      title: "ITERATION",
      description: "What should change based on what we measured?",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#071522] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-sm text-[#F2B66D] mb-4 tracking-wider">
            09 / FROM PROBLEM TO SYSTEM
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            I don't start with technology. I start with the system the technology needs to create.
          </h2>
        </div>

        <div className="relative flex flex-col items-center">
          {nodes.map((node, index) => (
            <React.Fragment key={node.title}>
              <div
                className={`w-full md:w-3/4 p-6 rounded-xl border backdrop-blur transition-all duration-300 cursor-default
                  ${
                    activeNode === index
                      ? "bg-white/10 border-[#F2B66D]/50 shadow-[0_0_30px_rgba(242,182,109,0.15)]"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }
                `}
                onMouseEnter={() => setActiveNode(index)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <h3
                  className={`font-display text-xl font-bold mb-2 tracking-wide transition-colors duration-300 ${
                    activeNode === index ? "text-[#F2B66D]" : "text-white"
                  }`}
                >
                  {node.title}
                </h3>
                <p className="text-slate-400 font-body text-sm md:text-base">
                  {node.description}
                </p>
              </div>

              {index < nodes.length - 1 && (
                <div className="flex flex-col items-center justify-center h-12 md:h-16">
                  <div
                    className={`w-px h-full transition-colors duration-300 ${
                      activeNode === index || activeNode === index + 1
                        ? "bg-[#F2B66D]"
                        : "bg-white/20"
                    }`}
                  />
                  <ArrowDown
                    className={`absolute mt-6 md:mt-8 w-4 h-4 transition-colors duration-300 ${
                      activeNode === index || activeNode === index + 1
                        ? "text-[#F2B66D]"
                        : "text-white/20"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
