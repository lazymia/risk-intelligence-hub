import { useState } from "react";
import { Mail, ArrowUpRight, Send } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12 lg:p-16">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 relative">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-brand">Hire</div>
              <h2 className="mt-3 text-3xl sm:text-5xl text-balance">
                Bring my AML/CFT expertise to your team.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Looking to hire for a full-time role, contract, or advisory engagement?
                Share a few details about the opportunity and I'll respond within two
                business days.
              </p>

              <div className="mt-10 space-y-3">
                <a
                  href="mailto:hello.chiamaka@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-background/40 px-4 py-3 hover:border-brand/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-brand" />
                    <span className="text-sm">hello.chiamaka@gmail.com</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/chiamaka-osuji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-background/40 px-4 py-3 hover:border-brand/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="h-4 w-4 text-brand" />
                    <span className="text-sm">linkedin.com/in/chiamaka-osuji</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Inquiry from ${data.get("name")}`);
                const body = encodeURIComponent(
                  `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
                );
                window.location.href = `mailto:hello.chiamaka@gmail.com?subject=${subject}&body=${body}`;
                setSent(true);
              }}
              className="rounded-2xl border border-white/5 bg-background/40 p-6 space-y-4"
            >
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Company" name="company" placeholder="Organization" required={false} />
              <Field label="Role / Opportunity" name="role" placeholder="e.g. AML Analyst, Contract, Advisory" required={false} />
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  Tell me about the opportunity
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Scope, engagement type, timeline…"
                  className="mt-2 w-full rounded-lg bg-background/60 border border-white/10 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-medium text-brand-foreground hover:bg-brand-glow transition-colors"
              >
                {sent ? "Opening your mail client…" : "Send hiring inquiry"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required = true,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg bg-background/60 border border-white/10 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition"
      />
    </div>
  );
}
