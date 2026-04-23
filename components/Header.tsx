"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Venue", href: "#venue" },
  { label: "Hotels", href: "#hotels" },
  { label: "Astana", href: "#astana" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(245,243,238,0.97)"
          : "rgba(245,243,238,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled
          ? "1px solid rgba(107,159,212,0.25)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 4px 24px rgba(13,31,78,0.07)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <KdsLogo />
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "#6b9fd4", textTransform: "uppercase", lineHeight: 1 }}>
              Kazakhstan
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 900, color: "#0d1f4e", letterSpacing: "0.05em", lineHeight: 1.1 }}>
              KDS
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a
            href="https://forms.gle/eVFWM75XRVicQgrj6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "8px 18px", fontSize: "0.7rem" }}
          >
            Register Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#0d1f4e",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "opacity 0 scale(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(245,243,238,0.98)",
            borderTop: "1px solid rgba(107,159,212,0.2)",
            padding: "1.5rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "0.85rem" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://forms.gle/eVFWM75XRVicQgrj6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ alignSelf: "flex-start" }}
          >
            Register Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function KdsLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="21" stroke="#0d1f4e" strokeWidth="1.5" fill="rgba(107,159,212,0.08)" />
      {/* Simplified Kazakh sun/ornament */}
      <circle cx="22" cy="22" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="3" fill="#c9a84c" />
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <line
          key={i}
          x1={22 + 10 * Math.cos((deg * Math.PI) / 180)}
          y1={22 + 10 * Math.sin((deg * Math.PI) / 180)}
          x2={22 + 16 * Math.cos((deg * Math.PI) / 180)}
          y2={22 + 16 * Math.sin((deg * Math.PI) / 180)}
          stroke="#6b9fd4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
