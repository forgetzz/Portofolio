import React from "react";
import { SITE } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="px-6 py-24 md:py-36 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display font-medium text-[44px] md:text-[64px] leading-[1.05] tracking-tight text-ink mb-6 text-balance">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[18px] text-muted max-w-md mb-10">
            Let's turn the idea into something people can actually use.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] uppercase tracking-wide bg-ink text-paper px-6 py-3.5 hover:bg-accent transition-colors"
            >
              Start a Project
            </a>
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-[15px] text-ink border-b border-ink hover:text-accent hover:border-accent transition-colors"
          >
            {SITE.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
