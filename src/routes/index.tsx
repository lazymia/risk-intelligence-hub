import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Solutions } from "@/components/site/Solutions";
import { Expertise } from "@/components/site/Expertise";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiamaka Osuji — Financial Crime Risk & Compliance Consultant" },
      {
        name: "description",
        content:
          "AML, KYC, fraud risk, and transaction monitoring expertise — helping organizations build stronger controls, reduce fraud exposure, and improve compliance efficiency.",
      },
      { property: "og:title", content: "Chiamaka Osuji — Financial Crime Risk & Compliance" },
      {
        property: "og:description",
        content:
          "Consulting in AML, KYC/KYB, fraud risk, transaction monitoring, and financial crime operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Solutions />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
