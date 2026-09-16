const testimonials = [
  {
    quote: "Roushan has a rare ability to think about a problem from both the product and the technical side simultaneously. He does not just build what you ask for  -  he thinks about whether what you are asking for is even the right thing to build. That kind of thinking is genuinely hard to find.",
    name: "Aryan Mehta",
    role: "Co-founder, Early-Stage SaaS Startup",
    location: "India",
  },
  {
    quote: "I came to Roushan with a rough idea for an automation tool. He broke the problem down in a way I had not considered, designed the workflow, and had a working prototype running within a week. The system has been running without issues for months.",
    name: "Priya Nair",
    role: "Independent Business Owner",
    location: "Remote",
  },
  {
    quote: "What stood out in Roushan's AI training work was the depth of analysis. He was not just flagging errors  -  he was identifying why the model made them and how to systematically fix the pattern. That is a different level of engagement than most people bring.",
    name: "James F.",
    role: "Project Lead, RWS Group",
    location: "Remote",
  },
  {
    quote: "We needed someone who could handle both the technical build and the growth strategy  -  usually those are two different people. Roushan understood both sides, which saved us enormous coordination overhead. The website he built ranks and converts.",
    name: "Sana Khan",
    role: "Founder, Digital Brand",
    location: "India",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="relative py-32 bg-[#050810] overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)"}} />
    <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 60% 40% at 50% 100%, rgba(30,70,180,0.05) 0%, transparent 70%)"}} />

    <div className="max-w-6xl mx-auto px-6">
      <p className="text-blue-400/60 text-xs tracking-[0.4em] uppercase mb-4">Social proof</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight">What People Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
        {testimonials.map((t) => (
          <div key={t.name} className="group bg-[#050810] p-8 hover:bg-[#070c1c] transition-colors duration-300 relative">
            <div className="absolute top-6 left-8 text-blue-400/15 text-5xl font-serif leading-none select-none">"</div>
            <div className="pt-6">
              <p className="text-white/50 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-300/60 text-xs font-medium">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white/70 text-xs font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
