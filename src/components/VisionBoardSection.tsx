import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, GraduationCap, ShoppingBag, ChevronRight, Sparkles, Target, TrendingUp, Globe } from "lucide-react";

const visionNodes = [
  {
    id: "ai",
    icon: Brain,
    title: "Artificial Intelligence",
    color: "hsl(217 91% 60%)",
    tagline: "Making AI accessible to every Indian business",
    milestones: [
      { label: "Custom AI Agents", status: "active", detail: "Building intelligent automation for D2C, B2B, and government sectors" },
      { label: "AI Data Training", status: "active", detail: "Contributing to global language model refinement at RWS Group" },
      { label: "Enterprise AI Suite", status: "upcoming", detail: "Full-stack AI platform for Indian SMEs, launching 2027" },
      { label: "AI for Governance", status: "vision", detail: "Leveraging UPSC knowledge to build AI tools that improve public service delivery" },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Revolution",
    color: "hsl(45 93% 47%)",
    tagline: "Quality education shouldn't depend on your pin code",
    milestones: [
      { label: "Techgram Platform", status: "active", detail: "Connecting tier-2/3 students with mentors, courses, and career pathways" },
      { label: "AI Tutoring", status: "upcoming", detail: "Personalized AI tutors for competitive exam preparation" },
      { label: "Vernacular Learning", status: "upcoming", detail: "Education content in 10+ Indian languages powered by AI" },
      { label: "1M Students Impacted", status: "vision", detail: "The ultimate goal: democratize learning for a million students by 2030" },
    ],
  },
  {
    id: "commerce",
    icon: ShoppingBag,
    title: "Community Commerce",
    color: "hsl(150 60% 45%)",
    tagline: "Empowering every neighborhood entrepreneur",
    milestones: [
      { label: "Gig-Lo Marketplace", status: "active", detail: "Hyper-local platform connecting service providers with communities" },
      { label: "AI-Powered Matching", status: "upcoming", detail: "Smart algorithms to match demand with the right local providers" },
      { label: "100 Cities", status: "upcoming", detail: "Expanding Gig-Lo to 100 Indian cities by 2028" },
      { label: "Community Fund", status: "vision", detail: "Micro-financing for small businesses through the Gig-Lo ecosystem" },
    ],
  },
];

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  active: { bg: "bg-green-500/20", text: "text-green-400", label: "Active" },
  upcoming: { bg: "bg-gold/20", text: "text-gold", label: "In Progress" },
  vision: { bg: "bg-royal/20", text: "text-royal", label: "2027+" },
};

const VisionBoardSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="vision" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-1 gradient-blue-gold" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">The Roadmap</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vision <span className="text-gradient-gold">Board</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Click on each pillar to explore the roadmap, from what's live today to where we're heading.
          </p>
        </motion.div>

        {/* Nodes */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {visionNodes.map((node, i) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            return (
              <motion.button
                key={node.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveNode(isActive ? null : node.id)}
                className={`rounded-2xl p-6 text-left border transition-all duration-300 ${isActive
                    ? "border-gold/30 shadow-lg shadow-gold/5 scale-[1.02]"
                    : "border-border hover:border-border/80"
                  } bg-card`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{
                    background: `color-mix(in srgb, ${node.color} 15%, transparent)`,
                  }}>
                    <Icon className="h-6 w-6" style={{ color: node.color }} />
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-90" : ""}`}
                  />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-1">{node.title}</h3>
                <p className="text-muted-foreground text-sm">{node.tagline}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded roadmap */}
        <AnimatePresence mode="wait">
          {activeNode && (
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto overflow-hidden"
            >
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                {visionNodes
                  .filter((n) => n.id === activeNode)
                  .map((node) => (
                    <div key={node.id}>
                      <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="h-5 w-5 text-gold" />
                        <h3 className="text-foreground font-bold text-lg">{node.title} Roadmap</h3>
                      </div>
                      <div className="space-y-4">
                        {node.milestones.map((m, j) => {
                          const status = statusColors[m.status];
                          return (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              className="flex gap-4 items-start"
                            >
                              <div className="flex flex-col items-center mt-1">
                                <div className={`w-3 h-3 rounded-full ${status.bg} border border-current ${status.text}`} />
                                {j < node.milestones.length - 1 && <div className="w-px h-full bg-border mt-1" />}
                              </div>
                              <div className="flex-1 pb-4">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="text-foreground font-semibold text-sm">{m.label}</h4>
                                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${status.bg} ${status.text} font-medium`}>
                                    {status.label}
                                  </span>
                                </div>
                                <p className="text-muted-foreground text-sm">{m.detail}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VisionBoardSection;
