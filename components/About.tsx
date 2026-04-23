"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ornament */}
      <div
        style={{
          position: "absolute",
          right: -80,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" aria-hidden="true">
          <circle cx="250" cy="250" r="200" stroke="#0d1f4e" strokeWidth="2" />
          <circle cx="250" cy="250" r="150" stroke="#0d1f4e" strokeWidth="2" />
          <circle cx="250" cy="250" r="100" stroke="#0d1f4e" strokeWidth="2" />
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <line key={deg} x1="250" y1="50" x2="250" y2="450"
              stroke="#0d1f4e" strokeWidth="1"
              transform={`rotate(${deg} 250 250)`} />
          ))}
        </svg>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: text */}
          <div>
            <div className="section-sep" />
            <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.75rem" }}>
              About the Event
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                color: "#0d1f4e",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Where Technology
              <br />Meets Sport
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#3a5080", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The Astana FIDA Drone Soccer Championship 2026 is an official international
              competition held in the capital of Kazakhstan under the rules and standards
              of the Federation of International Drone Soccer Association (FIDA).
            </p>
            <p style={{ fontSize: "1.05rem", color: "#3a5080", lineHeight: 1.8, marginBottom: "2rem" }}>
              Uniting national teams and clubs from around the world, the championship
              showcases drone engineering excellence, athletic strategy, and the spirit
              of international sportsmanship — all set against the iconic skyline of Astana.
            </p>

            {/* Key facts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {[
                { num: "Jun 1", label: "Championship Day" },
                { num: "FIDA", label: "Official Standards" },
                { num: "INT'L", label: "Participation" },
                { num: "2026", label: "Edition" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  style={{
                    borderLeft: "2px solid #c9a84c",
                    paddingLeft: "1rem",
                  }}
                >
                  <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0d1f4e", lineHeight: 1 }}>
                    {num}
                  </div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8299b8", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "4px" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {aboutFeatures.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  padding: "1.25rem",
                  background: "#f5f3ee",
                  borderRadius: "8px",
                  border: "1px solid rgba(107,159,212,0.15)",
                  transition: "all 0.3s ease",
                }}
                className="card-lift"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, rgba(13,31,78,0.06), rgba(107,159,212,0.12))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0d1f4e", marginBottom: "4px" }}>
                    {title}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#6b7a99", lineHeight: 1.6 }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

const aboutFeatures = [
  {
    icon: "🏆",
    title: "International Competition",
    desc: "National teams and clubs from across the globe compete under unified FIDA rules.",
  },
  {
    icon: "🚁",
    title: "FIDA-Certified Balls Only",
    desc: "All participating drones must be FIDA-approved official drone soccer balls.",
  },
  {
    icon: "🌍",
    title: "Sports & Culture",
    desc: "A full cultural program for international guests — experience Kazakhstan beyond the game.",
  },
  {
    icon: "🤝",
    title: "Industry Networking",
    desc: "Connect with drone sports professionals, educators, and innovators from around the world.",
  },
];
