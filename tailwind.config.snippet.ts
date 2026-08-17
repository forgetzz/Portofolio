/**
 * Merge this into your existing tailwind.config.ts — don't replace the
 * whole file. Only the `theme.extend` values below are new; everything
 * else in your current config should stay as-is.
 *
 * Fonts: load Fraunces (display), Inter (body), and IBM Plex Mono
 * (labels/numbers) via next/font in app/layout.tsx, then map each to
 * a CSS variable (--font-display, --font-body, --font-mono) the way
 * next/font does automatically. Example:
 *
 *   import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
 *   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
 *   const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
 *   const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });
 *
 *   // in the <html> or <body> className:
 *   className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
 */
export const themeExtend = {
  colors: {
    ink: "#0F0F0E",
    paper: "#FDFDFC",
    muted: "#6E6D68",
    line: "#E4E3DE",
    accent: "#B3401A",
  },
  fontFamily: {
    display: ["var(--font-display)", "ui-serif", "serif"],
    body: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
    mono: ["var(--font-mono)", "ui-monospace", "monospace"],
  },
};
