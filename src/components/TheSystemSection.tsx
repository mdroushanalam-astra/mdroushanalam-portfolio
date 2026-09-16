import { useState } from "react";
import { Network, User, Layers, Cpu, TrendingUp, Workflow, Database, Zap } from "lucide-react";

interface SystemNode {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: typeof User;
  connections: string[];
}

const systemNodes: SystemNode[] = [
  {
    id: "user",
    name: "USER",
    category: "The Origin",
    desc: "Human needs, workflows, coordinates, and real-world friction.",
    icon: User,
    connections: ["product"],
  },
  {
    id: "product",
    name: "PRODUCT",
    category: "The Living Core",
    desc: "The central interface where human intent meets computational reality.",
    icon: Layers,
    connections: ["software", "ai", "growth"],
  },
  {
    id: "software",
    name: "SOFTWARE",
    category: "The Foundation",
    desc: "Reliable, typed architectures, APIs, and scalable infrastructure.",
    icon: Network,
    connections: ["automation"],
  },
  {
    id: "ai",
    name: "AI & SLMs",
    category: "The Reasoning",
    desc: "Domain-adapted intelligence, RAG vector grounding, and guardrails.",
    icon: Cpu,
    connections: ["automation"],
  },
  {
    id: "growth",
    name: "GROWTH",
    category: "The Discovery",
    desc: "Generative search citation (GEO), SEO, and programmatic reach.",
    icon: TrendingUp,
    connections: ["automation"],
  },
  {
    id: "automation",
    name: "AUTOMATION",
    category: "The Engine",
    desc: "Self-healing event-driven pipelines running without human bottleneck.",
    icon: Workflow,
    connections: ["data"],
  },
  {
    id: "data",
    name: "DATA & FEEDBACK",
    category: "The Truth",
    desc: "Real-time telemetry, user signals, and continuous model feedback.",
    icon: Database,
    connections: ["impact"],
  },
  {
    id: "impact",
    name: "IMPACT",
    category: "The Outcome",
    desc: "Measurable transformation, operational speedup, and lasting value.",
    icon: Zap,
    connections: [],
  },
];

const TheSystemSection = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("product");

  const activeNode = systemNodes.find((n) => n.id === activeNodeId) || systemNodes[1];

  return (
    <section id="system" className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#071522] text-white overflow-hidden">
      {/* Background Architectural Canvas (Modern Geometric Structural Facade) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-04-thesystem.jpg"
          alt="System Architecture against Sky"
          className="w-full h-full object-cover object-center opacity-15 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071522] via-[#071522]/85 to-[#071522]" />
        {/* Soft cyan and amber ambient orbital glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B9DCFF]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F2B66D]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF]/30 bg-[#081B2E]/70 backdrop-blur-md mb-6 shadow-sm">
            <Network className="w-3.5 h-3.5 text-[#F2B66D]" />
            <span className="text-[11px] font-bold tracking-widest text-[#B9DCFF] uppercase font-display">
              04 / THE SYSTEM
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display mb-6 leading-tight">
            I don't think in isolated tools.
          </h2>

          <p className="text-base sm:text-lg text-[#DCEEFF]/80 font-body leading-relaxed max-w-2xl mx-auto">
            A product is rarely just software. It is a system of people, technology, data, intelligence, distribution and feedback.
          </p>
        </div>

        {/* 3D Constellation Network Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Interactive Constellation Grid */}
          <div className="lg:col-span-8 rounded-3xl border border-[#B9DCFF]/20 bg-[#081B2E]/70 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Ambient Star Coordinates */}
            <div className="absolute top-4 right-6 text-[10px] font-mono text-[#B9DCFF]/40">
              COORD: 28.6139° N, 77.2090° E // CELESTIAL MESH
            </div>

            {/* Constellation Nodes Array */}
            <div className="space-y-8 max-w-2xl mx-auto">
              {/* Level 1: USER */}
              <div className="flex justify-center">
                <ConstellationButton
                  node={systemNodes[0]}
                  isActive={activeNodeId === systemNodes[0].id}
                  onClick={() => setActiveNodeId(systemNodes[0].id)}
                />
              </div>

              <ConnectorLine />

              {/* Level 2: PRODUCT */}
              <div className="flex justify-center">
                <ConstellationButton
                  node={systemNodes[1]}
                  isActive={activeNodeId === systemNodes[1].id}
                  onClick={() => setActiveNodeId(systemNodes[1].id)}
                  highlight
                />
              </div>

              <ConnectorLine />

              {/* Level 3: SOFTWARE, AI, GROWTH */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <ConstellationButton
                  node={systemNodes[2]}
                  isActive={activeNodeId === systemNodes[2].id}
                  onClick={() => setActiveNodeId(systemNodes[2].id)}
                />
                <ConstellationButton
                  node={systemNodes[3]}
                  isActive={activeNodeId === systemNodes[3].id}
                  onClick={() => setActiveNodeId(systemNodes[3].id)}
                />
                <ConstellationButton
                  node={systemNodes[4]}
                  isActive={activeNodeId === systemNodes[4].id}
                  onClick={() => setActiveNodeId(systemNodes[4].id)}
                />
              </div>

              <ConnectorLine />

              {/* Level 4: AUTOMATION */}
              <div className="flex justify-center">
                <ConstellationButton
                  node={systemNodes[5]}
                  isActive={activeNodeId === systemNodes[5].id}
                  onClick={() => setActiveNodeId(systemNodes[5].id)}
                />
              </div>

              <ConnectorLine />

              {/* Level 5: DATA -> IMPACT */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <ConstellationButton
                  node={systemNodes[6]}
                  isActive={activeNodeId === systemNodes[6].id}
                  onClick={() => setActiveNodeId(systemNodes[6].id)}
                />
                <ConstellationButton
                  node={systemNodes[7]}
                  isActive={activeNodeId === systemNodes[7].id}
                  onClick={() => setActiveNodeId(systemNodes[7].id)}
                  accent
                />
              </div>
            </div>
          </div>

          {/* Right Node Detail Card */}
          <div className="lg:col-span-4 rounded-3xl border border-[#B9DCFF]/20 bg-[#081B2E]/90 backdrop-blur-xl p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#B9DCFF]/20">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#F2B66D] uppercase">
                ACTIVE NODE TELEMETRY
              </span>
              <div className="w-3 h-3 rounded-full bg-[#F2B66D] animate-ping" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#B9DCFF]">
                {activeNode.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                {activeNode.name}
              </h3>
            </div>

            <p className="text-sm text-[#DCEEFF]/90 leading-relaxed font-body">
              {activeNode.desc}
            </p>

            <div className="pt-4 border-t border-[#B9DCFF]/20 text-xs font-mono space-y-2">
              <div className="flex justify-between text-[#B9DCFF]">
                <span>STATUS</span>
                <span className="text-emerald-400 font-bold">SYNCHRONIZED</span>
              </div>
              <div className="flex justify-between text-[#B9DCFF]">
                <span>COUPLING</span>
                <span className="text-[#F2B66D]">TIGHTLY INTEGRATED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConnectorLine = () => (
  <div className="flex justify-center my-1 pointer-events-none">
    <div className="w-0.5 h-6 bg-gradient-to-b from-[#B9DCFF]/60 via-[#F2B66D]/60 to-[#B9DCFF]/60" />
  </div>
);

interface ConstellationButtonProps {
  node: SystemNode;
  isActive: boolean;
  onClick: () => void;
  highlight?: boolean;
  accent?: boolean;
}

const ConstellationButton = ({ node, isActive, onClick, highlight, accent }: ConstellationButtonProps) => {
  const Icon = node.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full py-3.5 px-4 rounded-2xl border text-center transition-all duration-300 flex items-center justify-center gap-2.5 font-display text-xs sm:text-sm font-bold tracking-wide cursor-pointer ${
        isActive
          ? "border-[#F2B66D] bg-[#F2B66D] text-[#071522] shadow-[0_0_25px_rgba(242,182,109,0.5)] scale-105"
          : highlight
          ? "border-[#B9DCFF]/60 bg-[#071522] text-white hover:border-[#F2B66D] hover:bg-[#071522]/90"
          : accent
          ? "border-[#F2B66D]/60 bg-[#071522] text-[#F2B66D] hover:bg-[#F2B66D]/10"
          : "border-[#B9DCFF]/30 bg-[#071522]/60 text-[#DCEEFF] hover:border-[#B9DCFF] hover:text-white"
      }`}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span>{node.name}</span>
    </button>
  );
};

export default TheSystemSection;
