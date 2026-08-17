import React from "react";
import { SITE } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32 border-b border-line">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-wide text-muted">
              About
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <p className="font-display font-medium text-[28px] md:text-[34px] leading-[1.25] tracking-tight text-ink mb-8 text-balance">
              Forgetz Studio is one person's practice, not a headcount —
              design, engineering, and AI handled by the same hands that
              write the code.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="max-w-lg space-y-5 text-[16px] leading-relaxed text-muted">
              <p>
                Based in {SITE.location}, working across web and mobile since
                2019. Most projects start as a real business problem — an
                admin panel, a point-of-sale system, a way to take orders
                online — and get built to actually hold up once people
                depend on them.
              </p>
              <p>
                More recently that's meant pairing the usual web stack with
                AI: retrieval, document workflows, and agent-style features,
                built with the same care as everything else — not bolted on
                because it's trending.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
