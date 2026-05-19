import { motion } from "motion/react";

const stats = [
  { v: "AML", l: "Investigations & SAR/STR drafting" },
  { v: "KYC/KYB", l: "Due diligence & onboarding" },
  { v: "Fraud", l: "Monitoring & risk controls" },
  { v: "QA", l: "Process improvement & ops" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand">About</div>
            <h2 className="mt-3 text-3xl sm:text-5xl text-balance">
              Compliance built with operational rigor and an engineer's mindset.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chiamaka Osuji is an AML compliance professional with experience across
              investigations, KYC/KYB due diligence, fraud monitoring, suspicious activity
              analysis, transaction monitoring, customer risk assessments, sanctions
              screening, QA process improvement, and incident management.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              She combines compliance expertise with operational excellence and
              technology-driven thinking — helping organizations strengthen controls,
              improve investigations, and reduce financial crime risk.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-xl glass p-4"
                >
                  <div className="text-sm font-medium text-brand">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
