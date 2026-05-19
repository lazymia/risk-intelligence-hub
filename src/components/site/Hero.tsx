import { motion } from "motion/react";
import { ArrowUpRight, Activity, ShieldAlert, TrendingUp } from "lucide-react";
import portrait from "@/assets/chiamaka.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="mx-auto max-w-6xl px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Financial Crime Risk & Compliance Consultant
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-balance text-4xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-4xl"
        >
          Protecting organizations from financial crime with{" "}
          <span className="brand-gradient-text">smarter risk intelligence</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          AML, KYC, fraud risk, transaction monitoring, and financial crime operations
          expertise — helping businesses build stronger controls, reduce fraud exposure,
          and improve compliance efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#solutions"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground hover:bg-brand-glow transition-colors"
          >
            View my work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Contact me
          </a>
        </motion.div>

        {/* Dashboard mock */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 relative"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 items-stretch">
            <DashboardPanel />
            <PortraitCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <div className="relative glass rounded-2xl p-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/10">
        <img
          src={portrait}
          alt="Chiamaka Osuji, AML & Financial Crime Compliance Professional"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Chiamaka Osuji</div>
            <div className="text-xs text-muted-foreground">AML · KYC · Fraud Risk</div>
          </div>
          <span className="rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-wider text-brand">
            Available
          </span>
        </div>
      </div>
    </div>
  );
}

function DashboardPanel() {
  const rows = [
    { id: "TX-04812", risk: 86, type: "Wire · Outbound", flag: "High", color: "destructive" },
    { id: "TX-04795", risk: 64, type: "ACH · Inbound", flag: "Review", color: "warning" },
    { id: "TX-04781", risk: 22, type: "Card · POS", flag: "Clear", color: "brand" },
    { id: "TX-04772", risk: 71, type: "Wire · Cross-border", flag: "High", color: "destructive" },
  ];

  return (
    <div className="relative glass rounded-2xl p-5 ring-brand/0 hover:ring-brand transition-all duration-500">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            risk-intelligence/console
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Live</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <Stat icon={<Activity className="h-4 w-4" />} label="Alerts triaged" value="1,284" delta="+12%" />
        <Stat icon={<ShieldAlert className="h-4 w-4" />} label="STRs filed" value="46" delta="+3" />
        <Stat icon={<TrendingUp className="h-4 w-4" />} label="False positive rate" value="9.4%" delta="-2.1%" positive />
      </div>

      <div className="rounded-xl border border-white/5 bg-background/40 overflow-hidden">
        <div className="grid grid-cols-[1fr_1fr_auto_auto] px-4 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-white/5">
          <div>Transaction</div><div>Type</div><div>Risk</div><div className="pl-6">Flag</div>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="grid grid-cols-[1fr_1fr_auto_auto] items-center px-4 py-3 text-sm border-b border-white/5 last:border-0"
          >
            <div className="font-mono text-xs">{r.id}</div>
            <div className="text-muted-foreground text-xs">{r.type}</div>
            <div className="flex items-center gap-2 w-24">
              <div className="h-1.5 w-16 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${r.risk}%`,
                    background:
                      r.risk > 75
                        ? "var(--destructive)"
                        : r.risk > 50
                        ? "var(--chart-3)"
                        : "var(--brand)",
                  }}
                />
              </div>
              <span className="text-xs font-mono tabular-nums">{r.risk}</span>
            </div>
            <div className="pl-6">
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  r.color === "destructive"
                    ? "bg-destructive/15 text-destructive"
                    : r.color === "warning"
                    ? "bg-chart-3/15 text-chart-3"
                    : "bg-brand/15 text-brand"
                }`}
              >
                {r.flag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Stat({
  icon, label, value, delta, positive,
}: { icon: React.ReactNode; label: string; value: string; delta: string; positive?: boolean }) {
  return (
    <div className="rounded-xl border border-white/5 bg-background/40 p-3">
      <div className="flex items-center justify-between text-muted-foreground">
        <span>{icon}</span>
        <span className={`text-[10px] font-mono ${positive ? "text-brand" : "text-muted-foreground"}`}>
          {delta}
        </span>
      </div>
      <div className="mt-2 text-lg font-medium tracking-tight">{value}</div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  );
}
