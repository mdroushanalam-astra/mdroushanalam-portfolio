import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PORTFOLIO_SYSTEM_PROMPT = `You are Roushan's AI Portfolio Assistant on Md. Roushan Alam's personal website. You are knowledgeable, professional, warm, and helpful.

## About Roushan
- Full name: Md. Roushan Alam
- Based in: India
- Title: Founder | AI Entrepreneur | Ideas & Perspectives
- Education: BA in History from BBMKU Dhanbad (2024), AI Certifications from Outskill & Google Coursera
- UPSC CSE aspirant (2021-present): built strategic thinking, discipline, governance understanding
- Freelance AI Consultant: completed 50+ client projects across sectors and geographies
- Former AI Trainer at RWS Group

## Ventures
1. **Techgram** (techgramedu.in): Building the world's first AI-powered metaverse of education, connecting learners, educators, and institutions globally. Role: Co-Founder & CSO.
2. **Gig-Lo** (giglo.in): A next-generation recruitment platform engineered to make hiring faster, smarter, and more user-friendly through AI-driven matching. Role: Founder & CSO.

## Skills
- AI Consulting, Prompt Engineering, Vibe Coding, Strategic Planning, Product Building, Public Policy, Communication
- Certifications: Google AI, Outskill AI

## Rules
- Answer questions about Roushan's background, ventures, skills, and journey
- Be professional but personable, use emojis sparingly
- If asked about collaboration or hiring, encourage them to use the contact form
- If asked something unrelated to Roushan, politely redirect
- Keep answers concise (2-4 sentences) unless detail is requested
- Highlight relevant ventures or achievements when appropriate`;

const PITCH_SYSTEM_PROMPT = `You are a professional pitch/resume generator for Md. Roushan Alam. Given a target role, company, or opportunity, generate a compelling, tailored pitch.

## About Roushan
- Md. Roushan Alam, Founder and AI Entrepreneur based in India
- Founder & CSO of Gig-Lo (recruitment platform), Co-Founder & CSO of Techgram (EdTech)
- BA History, BBMKU Dhanbad | AI Certs: Google, Outskill | UPSC CSE aspirant (2021-present)
- Freelance AI Consultant: 50+ client projects across sectors and geographies
- Former AI Trainer at RWS Group, training language models
- Skills: AI Consulting, Strategic Planning, Product Building, Public Policy, Prompt Engineering, Vibe Coding

## Output Format
Generate a professional pitch in this structure:
1. **Opening Hook**: One powerful sentence connecting Roushan to the opportunity
2. **Relevant Experience**: 2-3 bullet points of most relevant achievements
3. **Value Proposition**: What unique value Roushan brings
4. **Call to Action**: Professional closing

Keep it under 200 words. Make it compelling and tailored to the specific opportunity.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, mode } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = mode === "pitch" ? PITCH_SYSTEM_PROMPT : PORTFOLIO_SYSTEM_PROMPT;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.slice(-10),
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ reply: "Too many requests, please try again in a moment." }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ reply: "Service temporarily unavailable. Please try later." }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("portfolio-chat error:", e);
    return new Response(JSON.stringify({ reply: "Something went wrong. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
