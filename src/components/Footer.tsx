import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Thinking", href: "/#proof-of-thinking" },
  { name: "Prototypes", href: "/#prototypes" },
  { name: "Ventures", href: "/#ventures" },
  { name: "Field Notes", href: "/#field-notes" },
  { name: "Astra Humanis", href: "https://astrahumanis.in", isSpecial: true, isExternal: true },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mdroushanalam" },
  { label: "GitHub", href: "https://github.com/mdroushanalam-astra" },
  { label: "X / Twitter", href: "https://x.com/mdroushanalam" },
  { label: "Email", href: "mailto:contact@mdroushanalam.in" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#071522] text-white py-20 px-6 sm:px-10 lg:px-16 border-t border-[#B9DCFF]/20 font-body overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Branding (Exact User Specification) */}
        <div className="mb-14 space-y-3">
          <p className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
            MD. ROUSHAN ALAM
          </p>
          <p className="text-xs font-mono font-bold tracking-widest text-[#F2B66D] uppercase">
            AI · PRODUCT · SYSTEMS
          </p>
          <p className="text-lg sm:text-xl font-medium text-[#DCEEFF] font-display">
            I build systems that make ambitious ideas executable.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#B9DCFF]/20 my-10" />

        {/* Navigation Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {navLinks.map((link) =>
              link.isSpecial ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F2B66D] font-bold hover:text-white transition-colors"
                >
                  <img src="/astra-logo-transparent.png" alt="" className="w-3.5 h-3.5 object-contain" />
                  <span>{link.name}</span>
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#DCEEFF]/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B9DCFF]/70 hover:text-[#F2B66D] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#B9DCFF]/20 my-10" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B9DCFF]/60">
          <p>&copy; 2026 Md. Roushan Alam. All rights reserved.</p>
          <p className="text-[#F2B66D]/80">Built with curiosity and conviction.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
