import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Thinking", href: "/#proof-of-thinking" },
  { label: "Prototypes", href: "/#prototypes" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Field Notes", href: "/#field-notes" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between transition-all duration-300 font-body ${
          scrolled || mobileMenuOpen
            ? "bg-[#071522]/95 backdrop-blur-xl border-b border-slate-800 shadow-xl"
            : "bg-transparent"
        }`}
      >
        {/* Brand identity */}
        <Link to="/" className="flex items-center gap-2.5 select-none group" onClick={closeMobile}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#F2B66D] shadow-[0_0_8px_rgba(242,182,109,0.8)]" />
          <span className="text-xs sm:text-sm font-bold tracking-wider font-display text-white group-hover:text-[#F2B66D] transition-colors uppercase">
            Md. Roushan Alam
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold font-mono tracking-wide text-slate-300 hover:text-[#F2B66D] transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Distinctive Astra Humanis Link */}
          <a
            href="https://astrahumanis.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide border transition-all duration-300 bg-slate-900 text-white border-[#F2B66D]/40 hover:border-[#F2B66D] hover:shadow-[0_0_15px_rgba(242,182,109,0.3)] group"
          >
            <img src="/astra-logo-transparent.png" alt="Astra Logo" className="w-3.5 h-3.5 object-contain" />
            <span className="text-[#F2B66D]">Astra Humanis</span>
          </a>
        </div>

        {/* Right action & mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            onClick={closeMobile}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F2B66D] hover:bg-[#e0a256] text-[#071522] text-xs font-bold uppercase tracking-wider transition-all shadow-sm group font-mono"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Hamburger toggle button for Mobile & Tablet */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 z-40 bg-[#071522]/98 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200 font-body">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="text-sm font-mono font-medium text-slate-300 hover:text-[#F2B66D] py-2 border-b border-slate-800/60 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://astrahumanis.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="flex items-center justify-between py-2.5 text-sm font-mono text-[#F2B66D] font-bold border-b border-slate-800/60"
            >
              <span className="flex items-center gap-2">
                <img src="/astra-logo-transparent.png" alt="Astra Logo" className="w-4 h-4 object-contain" />
                Astra Humanis
              </span>
              
            </a>

            <div className="pt-2 text-xs font-mono text-slate-500 flex justify-between">
              <span>Md. Roushan Alam</span>
              <span>AI Product Builder</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
