"use client";
import { useState, useEffect } from "react";

const LINKS = {
  guest: {
    ru: "https://forms.gle/r8SGqNSTDDjmmwvb9",
    en: "https://forms.gle/sc55d93PQ5JNguvz8",
  },
  media: {
    ru: "https://forms.gle/BAa9J37ZJiEcTtpE6",
    en: "https://forms.gle/DAsBge5bk3s1mmnr7",
  },
  participant: "https://forms.gle/5zGC9uzTPSb8gZ3J9",
};

export function openRegistrationModal() {
  window.dispatchEvent(new Event("openRegistrationModal"));
}

const OPTIONS = [
  {
    key: "guest" as const,
    icon: "👥",
    label: "Guest",
    desc: "Attend the championship as a spectator or guest",
    color: "#6b9fd4",
  },
  {
    key: "media" as const,
    icon: "📷",
    label: "Media",
    desc: "Register as press or media representative",
    color: "#c9a84c",
  },
  {
    key: "participant" as const,
    icon: "🏆",
    label: "Participant",
    desc: "Register your team to compete in the championship",
    color: "#0d1f4e",
  },
];

export default function RegistrationModal() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ru">("en");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const nav = navigator.language || "en";
    if (nav.startsWith("ru") || nav.startsWith("kk")) setLang("ru");

    const handler = () => setOpen(true);
    window.addEventListener("openRegistrationModal", handler);
    return () => window.removeEventListener("openRegistrationModal", handler);
  }, []);

  if (!open) return null;

  function getLink(key: "guest" | "media" | "participant") {
    if (key === "participant") return LINKS.participant;
    return LINKS[key][lang];
  }

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(13,31,78,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "2.5rem",
          maxWidth: "480px",
          width: "100%",
          boxShadow: "0 24px 80px rgba(13,31,78,0.22)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            color: "#6b7a99",
            fontSize: "1.2rem",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.4rem" }}>
            Registration
          </p>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0d1f4e", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
            Choose your category
          </h2>
        </div>
        <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #c9a84c, #6b9fd4)", marginBottom: "1.75rem", borderRadius: "2px" }} />

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {OPTIONS.map((opt) => (
            <a
              key={opt.key}
              href={getLink(opt.key)}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(opt.key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                borderRadius: "10px",
                border: `1.5px solid ${hovered === opt.key ? opt.color : "rgba(107,159,212,0.2)"}`,
                background: hovered === opt.key ? `${opt.color}08` : "#fafbfd",
                textDecoration: "none",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "1.6rem",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${opt.color}12`,
                  borderRadius: "10px",
                  flexShrink: 0,
                }}
              >
                {opt.icon}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0d1f4e", marginBottom: "2px" }}>
                  {opt.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6b7a99", lineHeight: 1.4 }}>
                  {opt.desc}
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: opt.color, flexShrink: 0, opacity: hovered === opt.key ? 1 : 0.4, transition: "opacity 0.2s" }}>
                <path d="M3 8H13M8 3L13 8L8 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        <p style={{ fontSize: "0.68rem", color: "#8299b8", textAlign: "center", marginTop: "1.25rem" }}>
          Astana FIDA Drone Soccer Championship · June 1, 2026
        </p>
      </div>
    </div>
  );
}
