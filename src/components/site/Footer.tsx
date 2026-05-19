import portrait from "@/assets/chiamaka.jpg";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src={portrait}
            alt="Chiamaka Osuji"
            className="h-14 w-14 rounded-md object-cover ring-1 ring-white/10"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="font-serif italic text-sm text-foreground">Chiamaka Osuji</span>
            <span>© {new Date().getFullYear()} · AML/CFT Compliance Analyst</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href="mailto:hello.chiamaka@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://linkedin.com/in/chiamaka-osuji" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
