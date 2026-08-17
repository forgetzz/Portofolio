import React from "react";
import { NAV, SITE } from "@/lib/site-data";

// NOTE: LinkedIn and Instagram were listed in the brief's footer spec,
// but I don't have real URLs for either — add them here once you have
// the handles rather than leaving placeholder links live:
// { label: "LinkedIn", href: "https://linkedin.com/in/..." }
// { label: "Instagram", href: "https://instagram.com/..." }
const SOCIALS = [
  { label: "GitHub", href: SITE.github },
  { label: "Email", href: `mailto:${SITE.email}` },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-display text-[16px] text-ink">Forgetz Studio</p>
          <p className="font-mono text-[11px] text-muted mt-1">
            © {new Date().getFullYear()} · {SITE.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-wide text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-x-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[12px] uppercase tracking-wide text-muted hover:text-ink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
