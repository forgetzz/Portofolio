import React from "react";
import { PROJECTS } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function SelectedProjects() {
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const rest = PROJECTS.filter((p) => p.slug !== featured.slug);
  const total = PROJECTS.length;

  return (
    <section id="work" className="px-6 py-24 md:py-32 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 gap-4">
            <h2 className="font-display font-medium text-[36px] md:text-[44px] tracking-tight text-ink">
              Selected Work
            </h2>
            <span className="font-mono text-[12px] text-muted whitespace-nowrap">
              01 / {String(total).padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        {/* Featured project — large editorial spread */}
        <Reveal>
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-24 md:mb-32"
          >
            <div className="md:col-span-7 border border-line overflow-hidden bg-white">
              <img
                src={featured.image}
                alt={`${featured.title} screenshot`}
                className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-5">
              <p className="font-mono text-[12px] uppercase tracking-wide text-accent mb-3">
                {featured.category}
              </p>
              <h3 className="font-display font-medium text-[32px] md:text-[40px] leading-[1.05] tracking-tight text-ink mb-4 group-hover:text-accent transition-colors">
                {featured.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-muted mb-6 max-w-sm">
                {featured.description}
              </p>
              <p className="font-mono text-[12px] text-muted">
                {featured.tech.join(" / ")}
              </p>
            </div>
          </a>
        </Reveal>

        {/* Secondary projects — alternating rows */}
        <div className="flex flex-col">
          {rest.map((project, i) => {
            const reversed = i % 2 === 1;
            const index = String(i + 2).padStart(2, "0");
            return (
              <Reveal key={project.slug}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center py-10 border-t border-line ${
                    i === rest.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div
                    className={`md:col-span-4 border border-line overflow-hidden bg-white ${
                      reversed ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  <div
                    className={`md:col-span-7 ${reversed ? "md:order-1" : ""}`}
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="font-mono text-[12px] text-muted">
                        {index}
                      </span>
                      <h3 className="font-display font-medium text-[24px] md:text-[28px] tracking-tight text-ink group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[15px] leading-relaxed text-muted mb-3 max-w-md">
                      {project.description}
                    </p>
                    <p className="font-mono text-[11px] text-muted uppercase tracking-wide">
                      {project.category} — {project.tech.join(" / ")}
                    </p>
                  </div>

                  <div className="hidden md:flex md:col-span-1 justify-end">
                    <span className="font-mono text-[12px] text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-opacity">
                      ↗
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
