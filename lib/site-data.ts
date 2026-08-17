/**
 * FORGETZ STUDIO — design plan
 * ------------------------------------------------------------------
 * Color   ink #0F0F0E · paper #FDFDFC · muted #6E6D68 · line #E4E3DE
 *         accent (brick/rust) #B3401A — used once as a signature color,
 *         never as a gradient.
 * Type    Fraunces (display serif, set large, used with restraint) +
 *         Inter (body) + IBM Plex Mono (index numbers, labels, meta).
 * Layout  Asymmetric editorial grid, hairline borders, no cards-for-
 *         everything. Numbers are used only where order is real
 *         information: the project index and the process timeline.
 * Signature  The Selected Work section reads like a catalogue index —
 *         a running "01 / 06" counter beside each project, one large
 *         featured spread, the rest alternating image/text. Nothing
 *         else on the page repeats that device.
 * ------------------------------------------------------------------
 */

export const SITE = {
  name: "Forgetz Studio",
  domain: "https://forgetzstudio.com",
  email: "forget.noxa90@gmail.com",
  whatsapp: "https://wa.me/6289602203266",
  github: "https://github.com/forgetzz",
  location: "Makassar, Indonesia",
  description:
    "Forgetz Studio designs and builds websites, web applications, mobile apps, and AI-powered products for businesses and startups.",
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: "Web" | "Mobile" | "AI / Blockchain";
  image: string;
  link?: string;
  featured?: boolean;
};

// Real, currently-shipped work — no invented clients, metrics, or logos.
export const PROJECTS: Project[] = [
  {
    slug: "nekoswap",
    title: "Nekoswap",
    description:
      "A decentralized finance platform for secure, automated token swaps, built around transparent on-chain execution.",
    tech: ["React", "Next.js", "Solidity", "TypeScript"],
    category: "AI / Blockchain",
    image: "LL.png",
    link: "https://nekoswap.org",
    featured: true,
  },
  {
    slug: "asb-family-web",
    title: "ASB Family",
    description:
      "A membership platform for a multi-level marketing business — registration, referral tracking, and a member dashboard for managing a growing network.",
    tech: ["Next.js", "Node.js", "Express", "Firebase"],
    category: "Web",
    image: "/projects/5.png",
    link: "https://asbfamilyy.vercel.app/",
  },
  {
    slug: "big-dipper-machinery",
    title: "Big Dipper Machinery",
    description:
      "Company profile site for a heavy-machinery business in Makassar — product catalogue, services, and direct contact.",
    tech: ["Next.js", "Firestore"],
    category: "Web",
    image: "/projects/11.png",
    link: "https://loadermakassar.id",
  },
  {
    slug: "klinik-medica",
    title: "Klinik Medica",
    description:
      "A clinic website covering services, doctors, and patient contact information, built for clarity over decoration.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    category: "Web",
    image: "/projects/14.png",
    link: "https://klinikmedica.github.io",
  },
  {
    slug: "asbgo",
    title: "Asbgo",
    description:
      "A React Native app for transfers, payments, and real-time notifications — designed to be quick to use, not just quick to look at.",
    tech: ["React Native", "Expo", "Firebase"],
    category: "Mobile",
    image: "/projects/2.png",
    link: "https://play.google.com/store/apps/details?id=com.forgetzz.asbgo&hl=id",
  },
  {
    slug: "roket-store",
    title: "Roket Store",
    description:
      "A mobile marketplace for buying and selling game top-ups, with real-time order processing and secure transactions.",
    tech: ["React Native", "Node.js", "Firebase"],
    category: "Mobile",
    image: "/projects/3.png",
    link: "https://play.google.com/store/apps/details?id=com.zerogic.RoketStore&hl=id",
  },
];

export const SERVICES = [
  {
    index: "01",
    title: "Web Development",
    description:
      "Marketing sites and company profiles built for speed, clarity, and search visibility.",
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "Dashboards, internal tools, and platforms with real logic behind the interface — auth, data, and integrations included.",
  },
  {
    index: "03",
    title: "Mobile Applications",
    description:
      "Android and cross-platform apps with React Native, from first screen to store listing.",
  },
  {
    index: "04",
    title: "AI Applications",
    description:
      "Products built around language models and retrieval — assistants, document workflows, and AI-native features.",
  },
];

export const TECHNOLOGY = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "NestJS", "PostgreSQL", "Firebase"],
  AI: ["LangChain", "LangGraph", "Qdrant", "AI APIs"],
};

export const PROCESS = [
  {
    index: "01",
    title: "Understand",
    description: "Understand the problem, the users, and what the project actually needs to do.",
  },
  {
    index: "02",
    title: "Design",
    description: "Work out the structure, the UX, and a visual direction that fits.",
  },
  {
    index: "03",
    title: "Build",
    description: "Develop the product with technology that matches the problem, not the trend.",
  },
  {
    index: "04",
    title: "Launch",
    description: "Test, deploy, and keep improving once it's in people's hands.",
  },
];

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
