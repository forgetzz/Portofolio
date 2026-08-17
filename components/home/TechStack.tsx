import React from "react";
import { TECHNOLOGY } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function TechStack() {
  const groups = Object.entries(TECHNOLOGY);

  return (
    <section className="px-6 py-24 md:py-32 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display font-medium text-[36px] md:text-[44px] tracking-tight text-ink mb-16">
            Technology
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {groups.map(([group, items], i) => (
            <Reveal key={group} delay={i * 80}>
              <p className="font-mono text-[12px] uppercase tracking-wide text-accent mb-5">
                {group}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-[17px] text-ink font-display border-t border-line pt-3 first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
