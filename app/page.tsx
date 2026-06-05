"use client";

import React, { useEffect, useRef, useState } from "react";

interface EcoItem {
  id: number;
  label: string;
  sublabel: string;
  url: string;
  icon: string;
  color: string;
  glow: string;
  orbit: 1 | 2 | 3;
  startDeg: number;
}

const ITEMS: EcoItem[] = [
  // Orbit 1
  {
    id: 1,
    label: "Learn",
    sublabel: "Learn with forgetzstudio",
    url: "https://learn.forgetzstudio.com",
    icon: "📖",
    color: "#5de5a0",
    glow: "rgba(93,229,160,0.35)",
    orbit: 1,
    startDeg: 0,
  },
  {
    id: 2,
    label: "Service",
    sublabel: "service us",
    url: "https://forgetzstudio.com/service",
    icon: "🛠️",
    color: "#5da0e5",
    glow: "rgba(93,160,229,0.35)",
    orbit: 1,
    startDeg: 180,
  },

  // Orbit 2
  {
    id: 3,
    label: "Business",
    sublabel: "Business Center",
    url: "https://forgetzstudio.com/business",
    icon: "🤝",
    color: "#a05de5",
    glow: "rgba(160,93,229,0.35)",
    orbit: 2,
    startDeg: 0,
  },
  {
    id: 4,
    label: "Shop",
    sublabel: "forgetzstudio shop",
    url: "https://shop.forgetzstudio.com",
    icon: "🛒",
    color: "#e5a05d",
    glow: "rgba(229,160,93,0.35)",
    orbit: 2,
    startDeg: 120,
  },
  {
    id: 5,
    label: "Projects",
    sublabel: "Projects Finish",
    url: "https://forgetzstudio.com/projects",
    icon: "</>",
    color: "#e5645d",
    glow: "rgba(229,100,93,0.35)",
    orbit: 2,
    startDeg: 240,
  },

  // Orbit 3
  {
    id: 6,
    label: "Ai Platfrom",
    sublabel: "New Ai",
    url: "https://ai.forgetzstudio.com",
    icon: "📦",
    color: "#5de5dc",
    glow: "rgba(93,229,220,0.35)",
    orbit: 3,
    startDeg: 0,
  },
  {
    id: 7,
    label: "Blockchain Projects",
    sublabel: "Cryptocurrency",
    url: "https://crypto.forgetzstudio.com",
    icon: "₿",
    color: "#5de5a0",
    glow: "rgba(93,229,160,0.35)",
    orbit: 3,
    startDeg: 72,
  },
  {
    id: 8,
    label: "Games",
    sublabel: "Games forgetzstudio",
    url: "https:/games.forgetzstudio.com",
    icon: "🎮",
    color: "#5da0e5",
    glow: "rgba(93,160,229,0.35)",
    orbit: 3,
    startDeg: 144,
  },
  {
    id: 9,
    label: "Kontak",
    sublabel: "WhatsApp Us",
    url: "https://wa.me/6289602203266",
    icon: "📞",
    color: "#5de5a0",
    glow: "rgba(93,229,160,0.35)",
    orbit: 3,
    startDeg: 288,
  },
  {
    id: 10,
    label: "APK STORE",
    sublabel: "APK STORE",
    url: "https://forgetzstudio.com/apkStore",
    icon: "📞",
    color: "#5de5a0",
    glow: "rgba(93,229,160,0.35)",
    orbit: 3,
    startDeg: 288,
  },
];

const ORBIT_DURATION: Record<1 | 2 | 3, number> = {
  1: 8000,
  2: 14000,
  3: 20000,
};

function getOrbitRadius(orbit: 1 | 2 | 3) {
  if (typeof window === "undefined") {
    return {
      1: 120,
      2: 200,
      3: 270,
    }[orbit];
  }

  const isMobile = window.innerWidth <= 680;

  if (isMobile) {
    return {
      1: 75,
      2: 125,
      3: 170,
    }[orbit];
  }

  return {
    1: 120,
    2: 200,
    3: 270,
  }[orbit];
}

function useOrbitAngle(startDeg: number, duration: number) {
  const [angle, setAngle] = useState(startDeg);

  const raf = useRef<number>(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const tick = (time: number) => {
      if (!startTime.current) {
        startTime.current = time - (startDeg / 360) * duration;
      }

      const elapsed = time - startTime.current;

      setAngle((elapsed / duration) * 360);

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf.current);
  }, [startDeg, duration]);

  return angle;
}

function OrbitIcon({ item }: { item: EcoItem }) {
  const angle = useOrbitAngle(
    item.startDeg,
    ORBIT_DURATION[item.orbit]
  );

  const radius = getOrbitRadius(item.orbit);

  const rad = (angle * Math.PI) / 180;

  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  const [hovered, setHovered] = useState(false);

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth <= 680;

  const iconSize = isMobile ? 54 : 76;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${
          hovered ? 1.15 : 1
        })`,
        transition:
          "transform 0.2s ease, box-shadow 0.2s ease",
        width: iconSize,
        height: iconSize,
        borderRadius: "50%",
        background:
          "linear-gradient(135deg, #0d1f18, #091a12)",
        border: `1.5px solid ${item.color}66`,
        boxShadow: hovered
          ? `0 0 28px ${item.glow}`
          : `0 0 10px ${item.glow}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        zIndex: hovered ? 30 : 15,
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={item.sublabel}
    >
      <span
        style={{
          fontSize: isMobile ? 20 : 28,
          lineHeight: 1,
        }}
      >
        {item.icon}
      </span>

      <span
        style={{
          fontSize: isMobile ? 7 : 9,
          fontWeight: 500,
          color: item.color,
          marginTop: 4,
          letterSpacing: 0.3,
          whiteSpace: "nowrap",
          fontFamily: "inherit",
        }}
      >
        {item.label}
      </span>

      {hovered && (
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? 60 : 82,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(8,18,14,0.97)",
            border: `1px solid ${item.color}55`,
            borderRadius: 8,
            padding: "5px 10px",
            whiteSpace: "nowrap",
            fontSize: 11,
            color: item.color,
            fontFamily: "inherit",
            pointerEvents: "none",
            zIndex: 50,
          }}
        >
          {item.sublabel}
        </div>
      )}
    </a>
  );
}

function Stars() {
  const stars = useRef(
    Array.from({ length: 70 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.8 + 0.6,
      delay: Math.random() * 4,
      dur: 2 + Math.random() * 3,
    }))
  );

  return (
    <>
      {stars.current.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "white",
            opacity: 0.4,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

export default function EcosystemPortal() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;800&display=swap');

        html,
        body,
        #__next {
          margin: 0;
          padding: 0;
          height: 100%;
          background: #060d0a;
        }

        .portal-root {
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              ellipse at 40% 40%,
              #0d1f18 0%,
              #060d0a 60%
            ),
            radial-gradient(
              ellipse at 80% 80%,
              #0a0f1e 0%,
              transparent 60%
            );

          position: relative;
          overflow: hidden;
          padding: 60px 20px;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.65;
          }
        }

        @keyframes pulse-out {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }

          100% {
            transform: scale(2.8);
            opacity: 0;
          }
        }

        .orbit-container {
          position: relative;
          width: 620px;
          height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .center-logo {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background:
            linear-gradient(
              135deg,
              #1a3a28,
              #0d2218
            );

          border: 2.5px solid rgba(93,229,160,0.5);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          z-index: 20;

          cursor: pointer;
          text-decoration: none;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .center-logo:hover {
          transform: scale(1.06);

          box-shadow:
            0 0 50px rgba(93,229,160,0.3);
        }

        .center-logo img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
        }

        .pulse {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 1px solid rgba(93,229,160,0.4);
          animation: pulse-out 2.8s ease-out infinite;
          z-index: 5;
        }

        .pulse2 {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 1px solid rgba(93,229,160,0.4);
          animation: pulse-out 2.8s ease-out 1.4s infinite;
          z-index: 5;
        }

        .eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: #5de5a0;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .main-title {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -1px;
          margin-bottom: 4px;
          text-align: center;
        }

        .main-title span {
          color: #5de5a0;
        }

        .tagline {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 2px;
          margin-bottom: 36px;
          text-align: center;
        }

        .footer-note {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 1px;
          margin-top: 28px;
          text-align: center;
        }

        .deco-line {
          position: absolute;
          width: 1px;
          height: 60px;
          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(93,229,160,0.3),
              transparent
            );
        }

        @media (max-width: 680px) {

          .portal-root {
            padding: 30px 10px;
            overflow-x: hidden;
          }

          .orbit-container {
            width: 100vw;
            height: 100vw;
            max-width: 380px;
            max-height: 380px;
          }

          .main-title {
            font-size: 24px;
          }

          .tagline {
            font-size: 8px;
            letter-spacing: 1px;
            margin-bottom: 20px;
          }

          .center-logo {
            width: 90px;
            height: 90px;
          }

          .center-logo img {
            width: 55px;
            height: 55px;
          }

          .pulse,
          .pulse2 {
            width: 90px;
            height: 90px;
          }

          .footer-note {
            font-size: 8px;
            margin-top: 18px;
          }
        }
      `}</style>

      <div className="portal-root">
        <Stars />

        <div
          className="deco-line"
          style={{
            left: "10%",
            top: "15%",
            transform: "rotate(30deg)",
          }}
        />

        <div
          className="deco-line"
          style={{
            right: "12%",
            top: "20%",
            transform: "rotate(-20deg)",
          }}
        />

        <div
          className="deco-line"
          style={{
            left: "20%",
            bottom: "15%",
            transform: "rotate(-40deg)",
          }}
        />

        <div className="eyebrow">
          Digital Ecosystem
        </div>

        <h1 className="main-title">
          Forgetz<span>Studio</span>
        </h1>

        <p className="tagline">
          — web · mobile · blockchain · studio —
        </p>

        <div className="orbit-container">
          <div className="pulse" />
          <div className="pulse2" />

          <a
            className="center-logo"
            href="https://forgetzstudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/log.png"
              alt="ForgetzStudio"
              onError={(e) => {
                const t = e.currentTarget;

                t.style.display = "none";

                const fallback =
                  t.nextElementSibling as HTMLElement;

                if (fallback) {
                  fallback.style.display = "flex";
                }
              }}
            />

            <div
              style={{
                display: "none",
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "#1a3a28",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
              }}
            >
              💻
            </div>
          </a>

          {ITEMS.map((item) => (
            <OrbitIcon
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <p className="footer-note">
          tap icon to visit · click logo for main site
        </p>
      </div>
    </>
  );
}