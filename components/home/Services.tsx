import React from "react";
import { SERVICES } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 md:py-32 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display font-medium text-[36px] md:text-[44px] tracking-tight text-ink mb-16">
            Services
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 60}>
              <div
                className={`group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-line ${
                  i === SERVICES.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="md:col-span-2 font-mono text-[13px] text-accent">
                  {service.index}
                </span>
                <h3 className="md:col-span-4 font-display font-medium text-[24px] md:text-[28px] tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="md:col-span-6 text-[15px] leading-relaxed text-muted max-w-md">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
