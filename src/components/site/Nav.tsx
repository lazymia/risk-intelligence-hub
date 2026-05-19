import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#expertise", label: "Expertise" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-[var(--shadow-elevated)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-serif italic text-lg tracking-tight">
              Chiamaka Osuji
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground hover:bg-brand-glow transition-colors"
          >
            Hire
          </a>
        </div>
      </div>
    </header>
  );
}
