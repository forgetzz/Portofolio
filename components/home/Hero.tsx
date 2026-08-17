import React from "react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent mb-6">
                Forgetz Studio
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display font-medium text-[13vw] md:text-[64px] lg:text-[72px] leading-[1.02] tracking-tight text-ink text-balance">
                Digital products built to be useful.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted">
                We design and build websites, web applications, mobile apps,
                and AI-powered products for businesses and startups.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="font-mono text-[12px] uppercase tracking-wide bg-ink text-paper px-6 py-3.5 hover:bg-accent transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="font-mono text-[12px] uppercase tracking-wide border border-ink text-ink px-6 py-3.5 hover:border-accent hover:text-accent transition-colors"
                >
                  Start a Project
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={280} className="md:pl-6">
              <div className="border border-line bg-white">
                <img
                  src="LL.png"
                  alt="Nekoswap product interface, one of Forgetz Studio's recent builds"
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
              <p className="mt-3 font-mono text-[11px] text-muted uppercase tracking-wide">
                Recent work — Nekoswap
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
