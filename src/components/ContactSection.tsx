import React, { useState } from 'react';
import { ArrowRight, Mail, Linkedin, Github, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', problem: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-[#040B13] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="font-mono text-sm text-[#F2B66D] tracking-wider mb-6">16 / INITIATE</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-6">
              Have an expensive problem?
            </h2>
            <p className="text-lg md:text-xl font-body text-white/70 mb-10 max-w-lg leading-relaxed">
              Tell me what is happening. I will tell you how I would deconstruct it.
            </p>
            
            <a 
              href="mailto:contact@mdroushanalam.in"
              className="inline-flex items-center gap-3 bg-[#F2B66D] text-[#040B13] px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-colors group shadow-lg shadow-[#F2B66D]/20"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Directory */}
            <div className="mt-12 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Direct Channels
              </span>

              <a 
                href="mailto:contact@mdroushanalam.in" 
                className="flex items-center gap-3 text-slate-300 hover:text-[#F2B66D] transition-colors py-1.5"
              >
                <Mail className="w-4 h-4 text-[#F2B66D] shrink-0" />
                <span className="font-mono text-sm">contact@mdroushanalam.in</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">General</span>
              </a>

              <a 
                href="mailto:mdroushanalam.ai@gmail.com" 
                className="flex items-center gap-3 text-slate-300 hover:text-[#F2B66D] transition-colors py-1.5"
              >
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="font-mono text-sm">mdroushanalam.ai@gmail.com</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Direct</span>
              </a>

              <a 
                href="mailto:mdroushan@astrahumanis.in" 
                className="flex items-center gap-3 text-slate-300 hover:text-[#F2B66D] transition-colors py-1.5"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-sm">mdroushan@astrahumanis.in</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Astra</span>
              </a>
            </div>

            {/* Social & Ventures Links */}
            <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm font-mono text-slate-400">
              <a 
                href="https://www.linkedin.com/in/mdroushanalam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/mdroushanalam-astra" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://astrahumanis.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#F2B66D] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#F2B66D]" />
                <span>astrahumanis.in</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#071522] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-display font-bold mb-6 text-white">Leave a Brief</h3>
            
            {submitted ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-800 rounded-xl text-emerald-200">
                <h4 className="font-bold font-display text-lg mb-2 text-white">Brief Received</h4>
                <p className="text-sm font-body leading-relaxed mb-4">
                  Thank you. I review incoming problem statements personally. You can also reach me directly at contact@mdroushanalam.in.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Name or Organization</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F2B66D] transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah / Acme Technologies"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">What is the operational problem?</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F2B66D] transition-colors resize-none leading-relaxed"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder="Describe the workflow, bottlenecks, or ambition you want to turn into an autonomous system..."
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">How can I reach you?</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F2B66D] transition-colors"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="email@company.com or phone"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-[#040B13] font-bold py-3.5 rounded-lg hover:bg-[#F2B66D] transition-colors text-sm uppercase tracking-wider mt-2 font-mono"
                >
                  Dispatch Brief
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
