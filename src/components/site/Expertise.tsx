import { motion } from "motion/react";
import {
  ShieldCheck, Search, Activity, AlertTriangle, UserCheck, Building2, Cog,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "AML & KYC Operations", desc: "End-to-end AML programs, KYC reviews, and ongoing monitoring." },
  { icon: AlertTriangle, title: "Fraud Risk Analysis", desc: "Identifying fraud typologies and strengthening detection controls." },
  { icon: Activity, title: "Transaction Monitoring", desc: "Rules tuning, alert triage, and reduction of false positives." },
  { icon: Search, title: "Suspicious Activity Investigations", desc: "Deep-dive investigations, SAR/STR narratives, and escalation." },
  { icon: UserCheck, title: "Customer Risk Assessment", desc: "Risk-based scoring across profile, behavior, and jurisdiction." },
  { icon: Building2, title: "KYB / Due Diligence", desc: "Beneficial ownership, source of funds, and entity verification." },
  { icon: Cog, title: "Compliance Operations Optimization", desc: "QA, workflow design, and operational efficiency improvements." },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand">Expertise</div>
          <h2 className="mt-3 text-3xl sm:text-5xl text-balance">
            A full-stack financial crime risk capability.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="group relative rounded-2xl glass p-6 hover:bg-white/[0.04] transition-colors"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 ring-1 ring-brand/25 text-brand group-hover:bg-brand/20 transition-colors">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight" style={{ fontFamily: "var(--font-sans)" }}>
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
