import { motion } from "motion/react";
import { Check } from "lucide-react";
import strUpload from "@/assets/tool-str-upload.png";
import strScore from "@/assets/tool-str-score.png";
import strEconomic from "@/assets/tool-str-economic.png";
import strControl from "@/assets/tool-str-control.png";
import kycUpload from "@/assets/tool-kyc-upload.png";

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand">Solutions</div>
          <h2 className="mt-3 text-3xl sm:text-5xl text-balance">
            Tools built for analysts, designed for compliance leaders.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Purpose-built compliance tooling that reduces investigation time, improves
            consistency, and strengthens financial crime controls.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          <ToolBlock
            index="01"
            title="Suspicious Transaction Intelligence Assistant"
            tag="STR Analyzer"
            description="An intelligent compliance tool that assists analysts with suspicious transaction investigations — analyzing transaction context, identifying risk indicators, and helping generate clear, structured STR narratives for escalation and reporting."
            benefits={[
              "Reduces investigation time",
              "Improves consistency in suspicious activity reporting",
              "Strengthens documentation quality",
              "Improves analyst efficiency",
            ]}
            images={[
              { src: strScore, alt: "STR Analyzer suspicion score view" },
              { src: strEconomic, alt: "Economic purpose test breakdown" },
              { src: strControl, alt: "Control irregularities breakdown" },
            ]}
          />
          <ToolBlock
            reverse
            index="02"
            title="Customer Risk Assessment Engine"
            tag="KYC Risk Engine"
            description="A risk assessment solution built to support customer due diligence — evaluating customer risk exposure across transaction behavior, customer profile, jurisdiction exposure, business nature, and compliance risk indicators."
            benefits={[
              "Enables faster onboarding decisions",
              "Improves consistency in customer risk classification",
              "Supports risk-based compliance controls",
              "Reduces manual assessment inefficiencies",
            ]}
            images={[
              { src: kycUpload, alt: "AI KYC Risk Assessment upload view" },
              { src: strUpload, alt: "Suspicious Transaction Analyzer input form" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ToolBlock({
  index, title, tag, description, benefits, images, reverse,
}: {
  index: string; title: string; tag: string; description: string;
  benefits: string[]; images: { src: string; alt: string }[]; reverse?: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <div>
        <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
          <span className="text-brand">{index}</span>
          <span className="h-px w-8 bg-border" />
          <span className="uppercase tracking-wider">{tag}</span>
        </div>
        <h3 className="mt-4 text-2xl sm:text-3xl text-balance">{title}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
        <ul className="mt-6 space-y-2.5">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -inset-6 bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl pointer-events-none" />
        <div className="relative grid gap-3">
          <div className="glass rounded-2xl p-2 overflow-hidden group">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full rounded-xl ring-1 ring-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          {images.length > 1 && (
            <div className={`grid gap-3 ${images.length > 2 ? "grid-cols-2" : "grid-cols-1"}`}>
              {images.slice(1).map((img) => (
                <div key={img.src} className="glass rounded-xl p-1.5 overflow-hidden group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-lg ring-1 ring-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
