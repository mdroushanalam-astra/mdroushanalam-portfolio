import { Globe2, Sparkles, ArrowRight, Radio, Eye, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const AstraTeaserSection = () => {
  return (
    <section id="astra-teaser" className="relative py-40 px-4 sm:px-6 lg:px-8 bg-[#071522] text-white overflow-hidden">
      {/* Background Architectural Canvas (Orbital Curvature & Deep Space Atmosphere) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-section-10-astrateaser.jpg"
          alt="Earth Horizon & Deep Space Sky"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071522] via-[#071522]/80 to-[#071522]" />
        {/* Soft celestial starlight flares */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#B9DCFF]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F2B66D]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Transition Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B9DCFF]/30 bg-[#081B2E]/80 backdrop-blur-md mb-6 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-[#F2B66D] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-[#B9DCFF] uppercase font-display">
              10 / WORLD 02 : THE TECHNOLOGICAL FRONTIER
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-display mb-6 leading-tight">
            Beyond the screen.
          </h2>

          <p className="text-lg sm:text-2xl text-[#DCEEFF]/90 font-body leading-relaxed max-w-2xl mx-auto">
            What happens when intelligence can perceive the world, understand it and help us act within it?
          </p>
        </div>

        {/* Monolithic Planetary Observatory Card featuring Official Astra Logo */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#B9DCFF]/30 bg-[#081B2E]/80 backdrop-blur-2xl p-8 sm:p-14 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.7)] relative overflow-hidden group">
          {/* Subtle Top Starlight Edge */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F2B66D] to-transparent opacity-75" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Astra Official Logo with Orbital Aura */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-[#071522]/90 border border-[#B9DCFF]/20 shadow-inner relative overflow-hidden">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                {/* Outer pulsing ring */}
                <div className="absolute inset-0 rounded-full border border-[#B9DCFF]/20 animate-spin" style={{ animationDuration: "35s" }} />
                <div className="absolute inset-3 rounded-full border border-dashed border-[#F2B66D]/30 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
                
                {/* Official Astra Logo */}
                <img
                  src="/astra-logo-transparent.png"
                  alt="Astra Humanis Official Logo"
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain relative z-10 drop-shadow-[0_0_25px_rgba(242,182,109,0.5)]"
                />
              </div>

              <div className="mt-4 space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#F2B66D] uppercase">
                  OFFICIAL LOGOMARK
                </span>
                <p className="text-xs text-[#DCEEFF]/70 font-body">
                  Celestial Systems &middot; Humanis Spark
                </p>
              </div>
            </div>

            {/* Right: Vision Statements & Telemetry Nodes */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#F2B66D] uppercase block mb-1">
                  VENTURE EXPLORATION
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                  Astra Humanis
                </h3>
                <p className="text-sm font-semibold text-[#B9DCFF] font-display mt-1 tracking-wider uppercase">
                  Engineering the Future
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#DCEEFF]/80 leading-relaxed font-body">
                Astra Humanis is an exploratory venture focused on intelligent systems that can perceive physical and digital environments through sensor networks, computer vision, and real-world signals: assisting human beings in making critical decisions.
              </p>

              {/* Ambient Nodes Row */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center font-mono text-[10px] sm:text-[11px]">
                <div className="p-3 rounded-2xl bg-[#071522]/80 border border-[#B9DCFF]/20">
                  <span className="text-[#B9DCFF] block">SEE</span>
                  <span className="text-white font-bold">Multimodal</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#071522]/80 border border-[#B9DCFF]/20">
                  <span className="text-[#F2B66D] block">UNDERSTAND</span>
                  <span className="text-white font-bold">Spatial SLMs</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#071522]/80 border border-[#B9DCFF]/20">
                  <span className="text-emerald-400 block">ACT</span>
                  <span className="text-white font-bold">Closed-Loop</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link
                  to="/astra-humanis"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F2B66D] hover:bg-[#e0a256] text-[#071522] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(242,182,109,0.4)] transform hover:scale-105"
                >
                  <span>Explore the vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstraTeaserSection;
