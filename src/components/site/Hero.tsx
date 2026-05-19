import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

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
          AML/CFT Compliance Analyst
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
            Hire me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
