"use client";
import React, { useState } from "react";
interface Business {
  id: number;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  url: string;
  category:
    | "Studio"
    | "Marketplace"
    | "Platform"
    | "Mobile App"
    | "E-Commerce"
    | "Service"
    | "Startup";

  tags: string[];

  upvotes: number;

  status:
    | "live"
    | "beta"
    | "coming-soon";
}

const BUSINESSES: Business[] = [
  {
    id: 1,
    name: "Aromatica Parfume",
    tagline: "Premium perfume & fragrance brand",
    description:
      "Modern perfume brand offering long-lasting fragrances with elegant packaging and luxury scent collections for daily wear and special occasions.",

    icon: "🌸",

    url: "https://www.tiktok.com/@thearvayor?is_from_webapp=1&sender_device=pc",

    category: "E-Commerce",

    tags: [
      "Perfume",
      "Fragrance",
      "Beauty",
    ],

    upvotes: 248,

    status: "live",
  },

  {
    id: 2,
    name: "Aspct Clothing",
    tagline: "Modern streetwear fashion brand",

    description:
      "Contemporary clothing brand focused on minimalist streetwear, premium quality apparel, and modern lifestyle fashion collections.",

    icon: "👕",

    url: "https://aspct.xyz",

    category: "Marketplace",

    tags: [
      "Fashion",
      "Streetwear",
      "Clothing",
    ],

    upvotes: 182,

    status: "live",
  },

  {
    id: 3,
    name: "StayBarbershop",

    tagline:
      "Professional barbershop & grooming service",

    description:
      "Modern barbershop experience with professional haircuts, beard styling, grooming treatments, and online booking system for customers.",

    icon: "✂️",

    url: "https://staybarber.vercel.app",

    category: "Service",

    tags: [
      "Barbershop",
      "Haircut",
      "Grooming",
    ],

    upvotes: 134,

    status: "live",
  },

];

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  live:  { bg: "rgba(93,229,160,0.15)", color: "#5de5a0", label: "Live" },
  beta:  { bg: "rgba(93,160,229,0.15)", color: "#5da0e5", label: "Beta" },
  soon:  { bg: "rgba(229,160,93,0.15)", color: "#e5a05d", label: "Soon" },
};

function UpvoteButton({ count, id }: { count: number; id: number }) {
  const [voted, setVoted] = useState(false);
  const [n, setN] = useState(count);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!voted) { setVoted(true); setN((x) => x + 1); }
        else { setVoted(false); setN((x) => x - 1); }
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        minWidth: 52,
        padding: "8px 10px",
        borderRadius: 10,
        border: voted ? "1.5px solid #5de5a0" : "1.5px solid rgba(255,255,255,0.1)",
        background: voted ? "rgba(93,229,160,0.12)" : "rgba(255,255,255,0.04)",
        color: voted ? "#5de5a0" : "rgba(255,255,255,0.5)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 14, lineHeight: 1 }}>▲</span>
      <span style={{ fontSize: 12, fontWeight: 600, fontFamily: "inherit", lineHeight: 1 }}>{n}</span>
    </button>
  );
}

function BusinessCard({ biz }: { biz: Business }) {
  const status = STATUS_STYLE[biz.status];
  return (
    <a
      href={biz.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "18px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        textDecoration: "none",
        transition: "background 0.18s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(93,229,160,0.04)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {/* icon */}
      <div style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        flexShrink: 0,
      }}>
        {biz.icon}
      </div>

      {/* content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 3 }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#fff", fontFamily: "inherit" }}>
            {biz.name}
          </span>
          <span style={{
            fontSize: 10,
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: 6,
            background: status.bg,
            color: status.color,
            letterSpacing: 0.5,
            fontFamily: "inherit",
          }}>
            {status.label}
          </span>
          <span style={{
            fontSize: 10,
            padding: "2px 8px",
            borderRadius: 6,
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "inherit",
          }}>
            {biz.category}
          </span>
        </div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", lineHeight: 1.4, fontFamily: "inherit" }}>
          {biz.tagline}
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {biz.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 20,
              background: "rgba(93,229,160,0.08)",
              color: "#5de5a0",
              border: "1px solid rgba(93,229,160,0.2)",
              fontFamily: "inherit",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* upvote */}
    
    </a>
  );
}

export default function BusinessCenterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = BUSINESSES.filter((b) => {
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || b.name.toLowerCase().includes(q) || b.tagline.toLowerCase().includes(q) || b.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  }).sort((a, b) => b.upvotes - a.upvotes);

  return (
    <>
      <style>{`
    
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body, #__next {
          background: #060d0a;
          min-height: 100%;
        }

        .bc-root {
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          background: radial-gradient(ellipse at 20% 0%, #0d1f18 0%, #060d0a 55%),
                      radial-gradient(ellipse at 80% 100%, #0a0f1e 0%, transparent 55%);
          color: #fff;
        }

        .bc-header {
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 48px 24px 32px;
          max-width: 860px;
          margin: 0 auto;
        }

        .bc-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: #5de5a0;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .bc-title {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .bc-title span { color: #5de5a0; }

        .bc-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 1px;
          margin-bottom: 28px;
        }

        .bc-search {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .bc-search::placeholder { color: rgba(255,255,255,0.25); }
        .bc-search:focus { border-color: rgba(93,229,160,0.5); }

        .bc-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          padding: 20px 24px;
          max-width: 860px;
          margin: 0 auto;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .bc-filter-btn {
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.45);
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .bc-filter-btn:hover {
          border-color: rgba(93,229,160,0.4);
          color: #5de5a0;
        }
        .bc-filter-btn.active {
          background: rgba(93,229,160,0.12);
          border-color: rgba(93,229,160,0.5);
          color: #5de5a0;
        }

        .bc-list {
          max-width: 860px;
          margin: 0 auto;
        }

        .bc-count {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 1px;
          padding: 14px 20px 4px;
        }

        .bc-empty {
          padding: 60px 20px;
          text-align: center;
          color: rgba(255,255,255,0.25);
          font-family: 'Space Mono', monospace;
          font-size: 12px;
        }

        .bc-footer {
          max-width: 860px;
          margin: 0 auto;
          padding: 28px 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .bc-footer a {
          color: #5de5a0;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .bc-title { font-size: 28px; }
        }
      `}</style>

      <div className="bc-root">
        <div className="bc-header">
          <div className="bc-eyebrow">Business Center</div>
          <h1 className="bc-title">
            Forgetz<span>Studio</span><br />
            Ecosystem Business
          </h1>
          <p className="bc-subtitle">
            — {BUSINESSES.length} products 
          </p>
          <input
            className="bc-search"
            placeholder="Search products, tags, or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

   

        <div className="bc-list">
          <div className="bc-count">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
          {filtered.length === 0 ? (
            <div className="bc-empty">No products found.</div>
          ) : (
            filtered.map((biz) => <BusinessCard key={biz.id} biz={biz} />)
          )}
        </div>

        <div className="bc-footer">
          <span>© 2025 ForgetzStudio · All rights reserved</span>
          <a href="https://forgetzstudio.com" target="_blank" rel="noopener noreferrer">
            forgetzstudio.com ↗
          </a>
        </div>
      </div>
    </>
  );
}