"use client";
import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  category: string;
  year: number;
  client?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ASB Family",
    description: "Full-stack MLM web & mobile app with payment gateway, member dashboard, referral tracking, and real-time reporting.",
    image: "/projects/1.png",
    technologies: ["React", "Node.js", "Firebase", "Next.js", "MongoDB"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.forgetzz.asbapps",
    category: "Mobile",
    year: 2024,
    client: "PT ASB",
  },
  {
    id: 2,
    title: "Asbgo",
    description: "Mobile wallet app with transfer, payment, and real-time push notification features. Built with React Native & Expo.",
    image: "/projects/2.png",
    technologies: ["React Native", "Expo", "Firebase", "NoSQL"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.forgetzz.asbgo",
    category: "Mobile",
    year: 2024,
    client: "PT ASB",
  },
  {
    id: 3,
    title: "Roket Store",
    description: "Mobile app for buying and selling game chips with secure transactions and real-time order processing.",
    image: "/projects/3.png",
    technologies: ["React Native", "Expo", "Firebase", "NoSQL"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.zerogic.RoketStore",
    category: "Mobile",
    year: 2023,
  },
  {
    id: 4,
    title: "ASB Family Web",
    description: "MLM web platform with user registration, referral system, member network tree, and commission management.",
    image: "/projects/5.png",
    technologies: ["Next.js", "Firebase", "Node.js", "Express.js", "NoSQL"],
    liveUrl: "https://asbfamilyy.vercel.app/",
    category: "Web App",
    year: 2024,
    client: "PT ASB",
  },
  {
    id: 5,
    title: "Big Dipper Machinery",
    description: "Company profile website for heavy machinery business showcasing products, services, and contact information.",
    image: "/projects/11.png",
    technologies: ["Next.js", "Firebase", "Firestore"],
    liveUrl: "https://loadermakassar.id",
    category: "Web",
    year: 2024,
    client: "PT BDMI",
  },
  {
    id: 6,
    title: "Nekoswap",
    description: "DeFi platform enabling secure, transparent, automated transactions via smart contracts on EVM networks.",
    image: "/projects/as.png",
    technologies: ["React", "Next.js", "Solidity", "TypeScript", "Web3.js"],
    liveUrl: "https://nekoswap.org",
    category: "Web3",
    year: 2023,
  },
  {
    id: 7,
    title: "Stay Barbershop",
    description: "Modern barbershop website with service showcase, haircut gallery, pricing table, and online contact form.",
    image: "/projects/12.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://staybarber.vercel.app",
    category: "Web",
    year: 2024,
  },
  {
    id: 8,
    title: "Aspct Marketplace",
    description: "Full marketplace platform for buying and selling products with modern UI and seamless user experience.",
    image: "/projects/9.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://aspct.xyz",
    category: "Web App",
    year: 2024,
  },
  {
    id: 9,
    title: "Ataya Agung Pratama",
    description: "Company website for AC service business with service catalog, team profile, and customer contact system.",
    image: "/projects/7.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://www.aapserviceac.com/",
    category: "Web",
    year: 2024,
    client: "PT AAP",
  },
  {
    id: 10,
    title: "Zerogic Token",
    description: "Cryptocurrency token website with tokenomics, roadmap, utility info, and ecosystem documentation.",
    image: "/projects/15.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://zerogic.github.io",
    category: "Web3",
    year: 2023,
  },
  {
    id: 11,
    title: "Klinik Medica",
    description: "Professional clinic website with service info, doctor profiles, schedule, and patient contact details.",
    image: "/projects/14.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://klinikmedica.github.io",
    category: "Web",
    year: 2024,
    client: "Drg. Fatmawati",
  },
  {
    id: 12,
    title: "Barbershop POS",
    description: "Point-of-sale web app for barbershops: transaction management, service pricing, and daily sales reports.",
    image: "/projects/6.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://barber-apk.vercel.app",
    category: "Web App",
    year: 2024,
  },
  {
    id: 13,
    title: "Letter Generator",
    description: "Web app for generating formal and custom letters automatically with editable templates and export options.",
    image: "/projects/13.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "/",
    category: "Web App",
    year: 2023,
  },
  {
    id: 14,
    title: "APK Store",
    description: "Web-based Android app directory for browsing and downloading curated APKs organized by category.",
    image: "/projects/8.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://forgetzz.vercel.app/",
    category: "Web App",
    year: 2023,
  },
  {
    id: 15,
    title: "Used Motorcycle Market",
    description: "Listing platform for buying and selling used motorcycles with detailed product pages and seller contact.",
    image: "/projects/10.png",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://forgetzz.vercel.app/",
    category: "Web",
    year: 2024,
  },
  {
    id: 16,
    title: "Smart Contract Dev",
    description: "Custom smart contract development for DeFi, ERC-20 tokens, staking, and decentralized systems on EVM chains.",
    image: "/projects/16.png",
    technologies: ["Solidity", "Hardhat", "Web3.js", "EVM", "Blockchain"],
    liveUrl: "https://polygonscan.com/token/0x4a7db095d7d56de8af219a5ae9c0b3be11f240f5#code",
    category: "Web3",
    year: 2023,
  },
];

const CATEGORIES = ["All", "Web", "Web App", "Mobile", "Web3"];

const CAT_COLOR: Record<string, { bg: string; color: string }> = {
  Web:     { bg: "rgba(93,160,229,0.12)", color: "#5da0e5" },
  "Web App": { bg: "rgba(93,229,220,0.12)", color: "#5de5dc" },
  Mobile:  { bg: "rgba(93,229,160,0.12)", color: "#5de5a0" },
  Web3:    { bg: "rgba(160,93,229,0.12)", color: "#a05de5" },
};

function ProjectCard({ project }: { project: Project }) {
  const cat = CAT_COLOR[project.category] ?? { bg: "rgba(255,255,255,0.08)", color: "#fff" };

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        overflow: "hidden",
        textDecoration: "none",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(93,229,160,0.35)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* image */}
      <div style={{ position: "relative", width: "100%", paddingTop: "56%", background: "#0d1f18", overflow: "hidden" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* overlay badges */}
        <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 6 }}>
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            padding: "3px 9px",
            borderRadius: 6,
            background: cat.bg,
            color: cat.color,
            backdropFilter: "blur(8px)",
            fontFamily: "inherit",
            letterSpacing: 0.5,
          }}>
            {project.category}
          </span>
        </div>
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <span style={{
            fontSize: 10,
            fontWeight: 600,
            padding: "3px 9px",
            borderRadius: 6,
            background: "rgba(0,0,0,0.55)",
            color: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
            fontFamily: "inherit",
          }}>
            {project.year}
          </span>
        </div>
      </div>

      {/* content */}
      <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3, fontFamily: "inherit" }}>
            {project.title}
          </h3>
          <span style={{ fontSize: 16, flexShrink: 0, opacity: 0.6 }}>↗</span>
        </div>

        {project.client && (
          <span style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "monospace",
            letterSpacing: 0.5,
            marginBottom: 8,
          }}>
            Client: {project.client}
          </span>
        )}

        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: "0 0 14px", fontFamily: "inherit" }}>
          {project.description}
        </p>

        {/* tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} style={{
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontFamily: "inherit",
            }}>
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span style={{
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "inherit",
            }}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const filtered = PROJECTS
    .filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q
        || p.title.toLowerCase().includes(q)
        || p.description.toLowerCase().includes(q)
        || p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    })
    .sort((a, b) => sort === "newest" ? b.year - a.year : a.year - b.year);

  return (
    <>
      <style>{`
   

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #__next { background: #060d0a; min-height: 100%; }

        .pj-root {
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          background:
            radial-gradient(ellipse at 10% 0%, #0d1f18 0%, #060d0a 50%),
            radial-gradient(ellipse at 90% 100%, #0a0f1e 0%, transparent 50%);
          color: #fff;
          padding-bottom: 60px;
        }

        .pj-header {
          max-width: 1080px;
          margin: 0 auto;
          padding: 52px 24px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .pj-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: #5de5a0;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .pj-title {
          font-size: 44px;
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.05;
          margin-bottom: 10px;
        }
        .pj-title span { color: #5de5a0; }

        .pj-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
          margin-bottom: 28px;
        }

        .pj-controls {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .pj-search {
          flex: 1;
          min-width: 200px;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s;
        }
        .pj-search::placeholder { color: rgba(255,255,255,0.22); }
        .pj-search:focus { border-color: rgba(93,229,160,0.4); }

        .pj-sort {
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.6);
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          outline: none;
          cursor: pointer;
        }
        .pj-sort option { background: #0d1f18; }

        .pj-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          padding: 18px 24px;
          max-width: 1080px;
          margin: 0 auto;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .pj-filter-btn {
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.4);
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .pj-filter-btn:hover { border-color: rgba(93,229,160,0.4); color: #5de5a0; }
        .pj-filter-btn.active {
          background: rgba(93,229,160,0.12);
          border-color: rgba(93,229,160,0.5);
          color: #5de5a0;
        }

        .pj-body {
          max-width: 1080px;
          margin: 0 auto;
          padding: 28px 24px 0;
        }

        .pj-meta {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.22);
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .pj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .pj-empty {
          text-align: center;
          padding: 80px 20px;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.2);
        }

        .pj-footer {
          max-width: 1080px;
          margin: 40px auto 0;
          padding: 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .pj-footer a { color: #5de5a0; text-decoration: none; }

        @media (max-width: 600px) {
          .pj-title { font-size: 30px; }
          .pj-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="pj-root">
        <div className="pj-header">
          <div className="pj-eyebrow">Portfolio</div>
          <h1 className="pj-title">
            Our <span>Projects</span>
          </h1>
          <p className="pj-subtitle">
            — {PROJECTS.length} projects · web · mobile · web3 · custom —
          </p>
          <div className="pj-controls">
            <input
              className="pj-search"
              placeholder="Search by name, tech, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="pj-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        <div className="pj-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pj-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="pj-body">
          <div className="pj-meta">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
          </div>
          {filtered.length === 0 ? (
            <div className="pj-empty">No projects found for this filter.</div>
          ) : (
            <div className="pj-grid">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>

        <div className="pj-footer">
          <span>© 2025 ForgetzStudio · All rights reserved</span>
          <a href="https://forgetzstudio.com" target="_blank" rel="noopener noreferrer">
            forgetzstudio.com ↗
          </a>
        </div>
      </div>
    </>
  );
}