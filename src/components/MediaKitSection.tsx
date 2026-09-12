import { motion } from "framer-motion";
import { Download, Copy, FileText, Image, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import headshot from "@/assets/headshot.png";

const bio = `Md. Roushan Alam is a Founder, AI Entrepreneur, and UPSC Civil Service aspirant. He is the Co-Founder & CSO of Techgram, and Founder & CSO of Gig-Lo. With a background in UPSC Civil Services preparation and a BA in History from BBMKU Dhanbad, he bridges humanities insight with technology innovation. As a freelance AI consultant, he has completed 50+ client projects across sectors and geographies.`;

const shortBio = `Founder | AI Entrepreneur | Co-Founder of Techgram & Founder of Gig-Lo | Ideas & Perspectives.`;

const MediaKitSection = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: `${label} copied!`, description: "Pasted to your clipboard." });
  };

  return (
    <section id="media-kit" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gradient-blue-gold" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">For Press & Collaborations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Media <span className="text-gradient-gold">Kit</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Download brand assets, copy bio snippets, and access everything you need for press features or partnerships.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio snippets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 border border-border bg-card"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-gold" />
              <h3 className="text-foreground font-semibold">Bio Snippets</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">Short Bio (1 line)</span>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(shortBio, "Short bio")} className="h-7 text-xs">
                    <Copy className="h-3 w-3 mr-1" /> Copy
                  </Button>
                </div>
                <p className="text-foreground text-sm bg-muted/50 rounded-lg p-3">{shortBio}</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">Full Bio</span>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bio, "Full bio")} className="h-7 text-xs">
                    <Copy className="h-3 w-3 mr-1" /> Copy
                  </Button>
                </div>
                <p className="text-foreground text-sm bg-muted/50 rounded-lg p-3">{bio}</p>
              </div>
            </div>
          </motion.div>

          {/* Brand Assets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 border border-border bg-card"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image className="h-5 w-5 text-gold" />
              <h3 className="text-foreground font-semibold">Brand Assets</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border p-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <img src={logo} alt="Brand Logo" className="w-12 h-12 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium text-sm">Brand Logo</p>
                  <p className="text-muted-foreground text-xs">PNG • Transparent background</p>
                </div>
              </div>

              <div className="rounded-xl border border-border p-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <img src={headshot} alt="Headshot" className="w-16 h-16 object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium text-sm">Headshot</p>
                  <p className="text-muted-foreground text-xs">PNG • Professional photo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Color palette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 border border-border bg-card"
          >
            <h3 className="text-foreground font-semibold mb-4">Brand Colors</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Navy", color: "hsl(220 40% 13%)", hex: "#121E2E" },
                { name: "Royal Blue", color: "hsl(217 91% 60%)", hex: "#3B82F6" },
                { name: "Gold", color: "hsl(45 93% 47%)", hex: "#E8A307" },
                { name: "White", color: "hsl(210 40% 98%)", hex: "#F8FAFC" },
              ].map((c) => (
                <button
                  key={c.name}
                  onClick={() => copyToClipboard(c.hex, c.name)}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:bg-muted transition-colors"
                >
                  <div className="w-6 h-6 rounded-full border border-border" style={{ background: c.color }} />
                  <div className="text-left">
                    <p className="text-foreground text-xs font-medium">{c.name}</p>
                    <p className="text-muted-foreground text-[10px]">{c.hex}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 border border-border bg-card"
          >
            <h3 className="text-foreground font-semibold mb-4">Venture Links</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Techgram", url: "https://techgramedu.in" },
                { name: "Gig-Lo", url: "https://giglo.in" },
              ].map((l) => (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 hover:bg-muted transition-colors text-sm text-foreground"
                >
                  {l.name} <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaKitSection;
