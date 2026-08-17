import React from "react";
import { PROCESS } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 md:py-32 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display font-medium text-[36px] md:text-[44px] tracking-tight text-ink mb-16">
            Process
          </h2>
        </Reveal>

        <div className="max-w-2xl">
          {PROCESS.map((step, i) => (
            <Reveal key={step.index} delay={i * 70}>
              <div
                className={`flex gap-6 md:gap-10 py-8 border-t border-line ${
                  i === PROCESS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-[13px] text-accent w-8 shrink-0 pt-1">
                  {step.index}
                </span>
                <div>
                  <h3 className="font-display font-medium text-[22px] tracking-tight text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
