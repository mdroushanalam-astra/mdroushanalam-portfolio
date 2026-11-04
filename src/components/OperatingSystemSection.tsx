import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Observe',
    desc: 'What is actually happening? Not what people say is happening. Not what the brief claims. What is the observable reality of the system?'
  },
  {
    num: '02',
    title: 'Deconstruct',
    desc: 'What system produces the current outcome? What are the inputs, processes, decision points, and outputs? Where are the friction points, delays, and failure modes?'
  },
  {
    num: '03',
    title: 'Locate Leverage',
    desc: 'Where can a small intervention create a disproportionate change? Not every problem needs a massive solution. The best systems find the one point where minimal effort produces maximum impact.'
  },
  {
    num: '04',
    title: 'Build',
    desc: 'What is the smallest functioning system that can test the hypothesis? Not the final product. The minimum viable proof that the leverage point works.'
  },
  {
    num: '05',
    title: 'Measure',
    desc: 'Did reality agree with the model? What happened that was expected? What happened that was not? What does the data say vs. what does intuition say?'
  },
  {
    num: '06',
    title: 'Iterate',
    desc: 'What should change based on what we measured? This is not failure. This is the system working. Each iteration makes the model more accurate and the system more resilient.'
  }
];

export default function OperatingSystemSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="operating-system" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="font-mono text-sm text-[#071522]/60 tracking-wider mb-4">13 / OPERATING SYSTEM</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#071522]">
            How I approach a problem
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-[#E2E8F0]"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.num}
                className="relative flex items-start group"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div 
                  className={`relative z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-white border-2 rounded-full transition-colors duration-300 ${
                    activeStep === index ? 'border-[#F2B66D] text-[#F2B66D]' : 'border-[#E2E8F0] text-[#071522]/40'
                  }`}
                >
                  <span className="font-mono text-xl md:text-3xl font-bold">{step.num}</span>
                </div>
                
                <div className="ml-8 md:ml-12 pt-2 md:pt-6">
                  <h3 className={`text-2xl md:text-3xl font-display font-bold mb-4 transition-colors duration-300 ${
                    activeStep === index ? 'text-[#F2B66D]' : 'text-[#071522]'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-[#071522]/70 font-body text-lg leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
