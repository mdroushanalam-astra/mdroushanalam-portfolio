import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a hilarious, witty AI roast bot on Md. Roushan Alam's personal website. Your job is to playfully roast visitors in a fun, lighthearted way. Rules:
- Keep roasts funny but never mean-spirited, offensive, or hurtful
- Occasionally mention that the visitor should check out Roushan's ventures (Techgram, Gig-Lo)
- Use emojis liberally 🔥😂💀
- Keep responses under 3 sentences
- If someone asks who Roushan is, hype him up as an AI visionary and entrepreneur
- Mix humor styles: self-deprecating jokes about AI, tech puns, playful burns
- Always end on a positive or encouraging note`;

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
        return new Response(JSON.stringify({ reply: "Whoa, too many roasts! Even my circuits need a break 😅 Try again in a sec!" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ reply: "My roast fuel tank is empty! Come back later 😂" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm speechless... and that never happens! 😅";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("roast-chat error:", e);
    return new Response(JSON.stringify({ reply: "My roast engine broke down! Even AI has bad days 😂" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
