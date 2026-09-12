import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RESUME_DATA = {
  name: "Md. Roushan Alam",
  title: "Founder | AI Entrepreneur",
  location: "India",
  email: "mdroushanalam.ai@gmail.com",
  summary: "Founder, AI Entrepreneur, and UPSC Civil Service aspirant building two ventures that bridge technology, education, and recruitment. Combining strategic thinking from UPSC preparation with hands-on AI consulting expertise (50+ client projects) to create solutions that reshape society.",
  ventures: [
    { name: "Techgram", role: "Co-Founder & CSO", url: "techgramedu.in", desc: "AI-powered metaverse of education, connecting learners, educators, and institutions globally" },
    { name: "Gig-Lo", role: "Founder & CSO", url: "giglo.in", desc: "Next-gen recruitment platform for faster, smarter, AI-driven hiring" },
  ],
  education: [
    { degree: "BA in History", institution: "BBMKU Dhanbad", year: "2024" },
    { degree: "AI Certifications", institution: "Google Coursera & Outskill", year: "2024" },
  ],
  skills: ["AI Consulting", "Prompt Engineering", "Vibe Coding", "Strategic Planning", "Product Building", "Public Policy", "Market Analysis", "Product Vision", "Communication"],
  experience: [
    { role: "Freelance AI Consultant", company: "Independent", desc: "50+ client projects across sectors: web development, AI-powered automation, SEO/GEO, business digitization" },
    { role: "AI Trainer", company: "RWS Group", desc: "Trained and evaluated AI/LLM outputs, improving model accuracy and reasoning quality" },
  ],
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { targetRole } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    let tailoredSummary = RESUME_DATA.summary;

    if (targetRole) {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: "Generate a 2-sentence professional summary for Md. Roushan Alam tailored to the given role. He's a Founder and AI Entrepreneur, Co-Founder of Techgram (EdTech), Founder of Gig-Lo (recruitment platform), and freelance AI consultant with 50+ client projects. Keep it powerful and concise.",
            },
            { role: "user", content: `Target role: ${targetRole}` },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        tailoredSummary = data.choices?.[0]?.message?.content?.trim() || RESUME_DATA.summary;
      }
    }

    // Generate HTML resume
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${RESUME_DATA.name} - Resume</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; color: #1a1a2e; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; }
  .header { text-align: center; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 3px solid #2563eb; }
  .name { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 700; color: #1a1a2e; }
  .title { font-size: 16px; color: #2563eb; font-weight: 600; margin-top: 4px; }
  .contact { font-size: 12px; color: #666; margin-top: 8px; }
  .summary { font-size: 14px; color: #444; margin-bottom: 28px; padding: 16px; background: #f8f9ff; border-left: 4px solid #d4a017; border-radius: 0 8px 8px 0; }
  h2 { font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #2563eb; margin-bottom: 12px; margin-top: 24px; }
  .venture { margin-bottom: 16px; }
  .venture-name { font-weight: 600; font-size: 14px; }
  .venture-role { font-size: 13px; color: #d4a017; font-weight: 500; }
  .venture-desc { font-size: 13px; color: #555; }
  .venture-url { font-size: 11px; color: #2563eb; }
  .edu-item { margin-bottom: 8px; }
  .edu-degree { font-weight: 600; font-size: 14px; }
  .edu-inst { font-size: 13px; color: #555; }
  .skills-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-tag { font-size: 12px; background: linear-gradient(135deg, #2563eb15, #d4a01715); border: 1px solid #2563eb30; padding: 4px 12px; border-radius: 20px; font-weight: 500; }
  .exp-role { font-weight: 600; font-size: 14px; }
  .exp-company { font-size: 13px; color: #d4a017; }
  .exp-desc { font-size: 13px; color: #555; }
  .footer { margin-top: 32px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 16px; }
</style>
</head>
<body>
  <div class="header">
    <div class="name">${RESUME_DATA.name}</div>
    <div class="title">${RESUME_DATA.title}</div>
    <div class="contact">${RESUME_DATA.location} · ${RESUME_DATA.email}</div>
  </div>
  <div class="summary">${tailoredSummary}</div>
  
  <h2>Ventures</h2>
  ${RESUME_DATA.ventures.map(v => `
  <div class="venture">
    <div class="venture-name">${v.name} <span class="venture-role">| ${v.role}</span></div>
    <div class="venture-desc">${v.desc}</div>
    <div class="venture-url">${v.url}</div>
  </div>`).join("")}
  
  <h2>Experience</h2>
  ${RESUME_DATA.experience.map(e => `
  <div style="margin-bottom:12px">
    <div class="exp-role">${e.role} <span class="exp-company">@ ${e.company}</span></div>
    <div class="exp-desc">${e.desc}</div>
  </div>`).join("")}
  
  <h2>Education</h2>
  ${RESUME_DATA.education.map(e => `
  <div class="edu-item">
    <div class="edu-degree">${e.degree} <span class="edu-inst">| ${e.institution} (${e.year})</span></div>
  </div>`).join("")}
  
  <h2>Skills</h2>
  <div class="skills-grid">
    ${RESUME_DATA.skills.map(s => `<span class="skill-tag">${s}</span>`).join("")}
  </div>
  
  <div class="footer">Generated from roushanalam.com · ${new Date().toLocaleDateString()}</div>
</body>
</html>`;

    return new Response(JSON.stringify({ html }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-resume error:", e);
    return new Response(JSON.stringify({ error: "Failed to generate resume" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
