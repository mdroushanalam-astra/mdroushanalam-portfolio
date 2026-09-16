const stack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "Express", "Supabase"] },
  { category: "AI and LLMs", items: ["OpenAI API", "Gemini API", "Hugging Face", "Fine-tuning pipelines", "Prompt engineering", "RLHF workflows"] },
  { category: "Automation", items: ["n8n", "Zapier", "Custom API workflows", "Webhook pipelines", "Data pipelines"] },
  { category: "Databases", items: ["PostgreSQL", "Supabase", "Firebase", "SQL"] },
  { category: "Cloud and Deploy", items: ["Vercel", "Git", "GitHub", "CI/CD"] },
  { category: "Growth", items: ["SEO", "GEO", "ASO", "Content systems", "Structured data"] },
];

const TechStackSection = () => (
  <section id="stack" className="relative py-32 bg-[#030608] overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)"}} />

    <div className="max-w-6xl mx-auto px-6">
      <p className="text-blue-400/60 text-xs tracking-[0.4em] uppercase mb-4">Tools and technologies</p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">The Stack</h2>
      </div>
      <p className="text-white/35 text-sm mb-16 italic">Tools are means, not identity. I use what the problem requires.</p>

      <div className="space-y-0 divide-y divide-white/5">
        {stack.map((s) => (
          <div key={s.category} className="group py-6 flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="sm:w-48 flex-shrink-0">
              <p className="text-white/40 text-xs tracking-widest uppercase">{s.category}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item}
                  className="text-white/55 text-xs px-3 py-1.5 border border-white/8 rounded-full hover:border-blue-400/30 hover:text-white/80 transition-all duration-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
