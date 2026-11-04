import React from 'react';

export default function AboutRoushanSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-sm text-[#071522]/60 tracking-wider mb-2">12 / ABOUT</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#071522]">
            Md. Roushan Alam
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#D9A036] tracking-wider uppercase mt-2 mb-4">
            Why I work this way
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-2/3 space-y-8">
            <p className="text-xl md:text-2xl font-body text-[#071522] leading-[1.8]">
              I became interested in technology from the outside rather than through a traditional engineering path. I studied history. Not computer science. Not engineering. History. How civilizations organize, how institutions consolidate power, how complex systems succeed or collapse over centuries.
            </p>
            <p className="text-xl md:text-2xl font-body text-[#071522]/80 leading-[1.8]">
              That background forced me to learn something I now consider useful: technology is not the starting point. The starting point is the problem. What follows is understanding the system that produces the problem, finding the leverage point within that system, and choosing the smallest amount of technology capable of changing it.
            </p>
            <p className="text-xl md:text-2xl font-body text-[#071522]/80 leading-[1.8]">
              My path has been unconventional. History graduate. UPSC research fellow. AI model trainer at RWS Group, where I learned exactly where frontier language models fail. Then product builder, bringing together software engineering, AI systems, and growth infrastructure.
            </p>
            <p className="text-xl md:text-2xl font-body text-[#071522] leading-[1.8] font-medium">
              Today I build at the intersection of intelligence, product, and systems. I am also developing Astra Humanis as a long-term exploration into ambient machine perception.
            </p>

            <div className="mt-12 p-6 border-l-4 border-[#F2B66D] bg-[#F8FAFC]">
              <p className="font-mono text-lg text-[#071522]">
                "I studied history. I became obsessed with systems. Then I started building them."
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 border border-[#E2E8F0] rounded-2xl overflow-hidden bg-[#F8FAFC] shadow-sm">
              <div className="relative aspect-square">
                <img 
                  src="/roushan-headshot.jpg" 
                  alt="Md. Roushan Alam" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://ui-avatars.com/api/?name=Md+Roushan+Alam&size=500&background=071522&color=fff';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold tracking-wider text-[#071522]">ACTIVE BUILDER</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-[#071522]">Md. Roushan Alam</h3>
                <p className="text-xs font-mono text-slate-500 mb-4">AI Product Builder</p>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">Trajectory</h4>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#F2B66D] mt-2 shrink-0"></div>
                    <div>
                      <div className="font-bold text-[#071522]">Building Astra Humanis</div>
                      <div className="text-sm text-[#071522]/60">Present</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#38BDF8] mt-2 shrink-0"></div>
                    <div>
                      <div className="font-bold text-[#071522]">Full-Stack AI Product Builder</div>
                      <div className="text-sm text-[#071522]/60">Present</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#E2E8F0] mt-2 shrink-0"></div>
                    <div>
                      <div className="font-bold text-[#071522]">AI Trainer, RWS Group</div>
                      <div className="text-sm text-[#071522]/60">RLHF, Model Alignment, Benchmark Verification</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#E2E8F0] mt-2 shrink-0"></div>
                    <div>
                      <div className="font-bold text-[#071522]">UPSC / Civil Services Research</div>
                      <div className="text-sm text-[#071522]/60">Research Fellow</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#E2E8F0] mt-2 shrink-0"></div>
                    <div>
                      <div className="font-bold text-[#071522]">BA History, BBMKU</div>
                      <div className="text-sm text-[#071522]/60">Graduation</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
