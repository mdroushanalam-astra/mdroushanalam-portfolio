import React from 'react';

const CapabilitiesSystemSection = () => {
  return (
    <section id="capabilities" className="relative w-full bg-white py-32 px-6 sm:px-10 lg:px-16 overflow-hidden font-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Section tag */}
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest text-[#D9A036] uppercase font-mono border border-[#D9A036]/30 px-4 py-2 rounded-full">
            03 / WHAT I TURN INTO SYSTEMS
          </span>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Pillar 1: Intelligence */}
          <div className="flex flex-col h-full border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#071522] py-8 px-8 border-b-4 border-[#F2B66D]">
              <h3 className="text-2xl font-bold text-white font-display tracking-tight">Intelligence</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center space-y-6">
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                AI agents that handle domain-specific reasoning
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Knowledge systems that surface the right information at the right moment
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Decision-support tools that reduce ambiguity for operators
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Workflow automation that replaces repetitive cognitive labor
              </p>
            </div>
          </div>

          {/* Pillar 2: Products */}
          <div className="flex flex-col h-full border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#071522] py-8 px-8 border-b-4 border-[#F2B66D]">
              <h3 className="text-2xl font-bold text-white font-display tracking-tight">Products</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center space-y-6">
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Web applications architected for real user workflows
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                MVPs designed to test a hypothesis, not demonstrate features
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Internal platforms that reduce operational friction
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                AI-native products where intelligence is the interface
              </p>
            </div>
          </div>

          {/* Pillar 3: Growth */}
          <div className="flex flex-col h-full border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#071522] py-8 px-8 border-b-4 border-[#F2B66D]">
              <h3 className="text-2xl font-bold text-white font-display tracking-tight">Growth</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center space-y-6">
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Acquisition systems that compound instead of scale linearly
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Conversion infrastructure built on behavioral data
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Customer lifecycle workflows triggered by real intent signals
              </p>
              <p className="text-[#071522] font-medium flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1 text-lg leading-none">●</span>
                Experimentation frameworks that make decisions measurable
              </p>
            </div>
          </div>

        </div>

        {/* Anchor Line */}
        <div className="text-center w-full">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#071522] font-display tracking-tight">
            Technology is the medium. The outcome is the product.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSystemSection;
