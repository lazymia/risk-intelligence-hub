export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Chiamaka Osuji. Financial Crime Risk & Compliance.</div>
        <div className="flex items-center gap-5">
          <a href="mailto:hello.chiamaka@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://linkedin.com/in/chiamaka-osuji" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
