import React from 'react';

const WorldviewSection = () => {
  return (
    <section id="worldview" className="relative w-full min-h-screen bg-[#F8FAFC] py-32 px-6 sm:px-10 lg:px-16 overflow-hidden flex flex-col items-center justify-center font-body">
      {/* Very low opacity background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.15]" 
        style={{ backgroundImage: "url('/bg-section-02-thesis.jpg')" }} 
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Section tag */}
        <div className="mb-12 text-center">
          <span className="text-sm font-bold tracking-widest text-[#D9A036] uppercase font-mono border border-[#D9A036]/30 px-4 py-2 rounded-full">
            02 / THE WORLDVIEW
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#071522] tracking-tight font-display mb-4">
            Most businesses don't have a technology problem.
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D9A036] tracking-tight font-display">
            They have a translation problem.
          </p>
        </div>

        {/* Translation Visual & Nodes */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 mb-24">
          
          {/* Left nodes (Inputs) */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 animate-[float_6s_ease-in-out_infinite]">
              <p className="text-[#071522] font-semibold">An idea exists in someone's head.</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 animate-[float_6s_ease-in-out_infinite_1s]">
              <p className="text-[#071522] font-semibold">A business problem exists in the organization.</p>
            </div>
          </div>

          {/* Central Prism/Funnel Visual */}
          <div className="relative w-40 h-64 lg:w-48 lg:h-72 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/10 to-[#F2B66D]/20 rounded-full blur-xl" />
            <div className="relative w-full h-full border-x-2 border-[#071522]/10" style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)" }}>
              <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#071522]/5 to-transparent" />
              <div className="absolute bottom-0 w-full h-1 bg-[#D9A036]" />
            </div>
          </div>

          {/* Right nodes (Inputs) */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 animate-[float_6s_ease-in-out_infinite_0.5s]">
              <p className="text-[#071522] font-semibold">A customer has an unmet need.</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 animate-[float_6s_ease-in-out_infinite_1.5s]">
              <p className="text-[#071522] font-semibold">Data sits somewhere unused.</p>
            </div>
          </div>
          
        </div>

        {/* Anchor statements */}
        <div className="text-center max-w-3xl flex flex-col items-center">
          <p className="text-xl sm:text-2xl text-[#071522]/70 font-medium mb-6">
            The difficult part is translating these things into a functioning system.
          </p>
          <div className="h-px w-16 bg-[#D9A036] mb-6" />
          <p className="text-2xl sm:text-3xl font-bold text-[#071522] font-display">
            That's the work I do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldviewSection;
