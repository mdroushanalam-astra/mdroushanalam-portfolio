import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="gradient-navy py-12 relative" aria-label="Footer | Md. Roushan Alam" itemScope itemType="https://schema.org/WPFooter">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Md. Roushan Alam
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Founder | AI Entrepreneur | Ideas & Perspectives
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              BBMKU · Techgram · Gig-Lo
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["about", "ventures", "blog", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-primary-foreground/60 hover:text-gold transition-colors capitalize"
              >
                {id}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mdroushanalam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md. Roushan Alam on LinkedIn"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
            >
              <Linkedin className="h-4 w-4 text-primary-foreground" />
            </a>
            <a
              href="mailto:mdroushanalam.ai@gmail.com"
              aria-label="Email Md. Roushan Alam"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
            >
              <Mail className="h-4 w-4 text-primary-foreground" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Md. Roushan Alam. All rights reserved. |{" "}
            <a href="https://mdroushanalam.in" className="hover:text-gold transition-colors">mdroushanalam.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
