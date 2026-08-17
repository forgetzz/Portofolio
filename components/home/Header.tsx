"use client";

import React, { useState } from "react";
import { NAV } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight text-ink">
          Forgetz Studio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-wide text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[12px] uppercase tracking-wide border border-ink px-4 py-2 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            Start a Project
          </a>
        </nav>

        <button
          className="md:hidden font-mono text-[12px] uppercase tracking-wide text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 bg-paper">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[13px] uppercase tracking-wide text-muted"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-mono text-[13px] uppercase tracking-wide text-ink"
          >
            Start a Project →
          </a>
        </nav>
      )}
    </header>
  );
}
