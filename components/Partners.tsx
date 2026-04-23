"use client";

export default function Partners() {
  return (
    <section
      id="partners"
      style={{
        padding: "6rem 2rem",
        background: "#f5f3ee",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-sep-center" />
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.75rem" }}>
            Official Support
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              color: "#0d1f4e",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Organizers & Partners
          </h2>
          <p style={{ fontSize: "1rem", color: "#6b7a99", maxWidth: "480px", margin: "0 auto" }}>
            The championship is organized by Kazakhstan Drone Soccer (KDS) in official partnership with FIDA.
          </p>
        </div>

        {/* Main partners */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: "0",
            marginBottom: "4rem",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(107,159,212,0.2)",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(13,31,78,0.06)",
          }}
        >
          {/* Organizer */}
          <div style={{ padding: "3rem 3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8299b8",
                marginBottom: "-0.5rem",
              }}
            >
              Organizer
            </div>
            <KDSLogoFull />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0d1f4e", marginBottom: "6px" }}>
                Kazakhstan Drone Soccer
              </div>
              <div style={{ fontSize: "0.82rem", color: "#6b7a99", lineHeight: 1.6 }}>
                The national federation of drone soccer in Kazakhstan,
                promoting the sport at all levels — from grassroots to elite competition.
              </div>
            </div>
            <a
              href="https://dronesoccer.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-navy"
              style={{ padding: "10px 20px", fontSize: "0.7rem" }}
            >
              dronesoccer.kz ↗
            </a>
          </div>

          {/* Divider */}
          <div style={{ background: "rgba(107,159,212,0.15)", width: "1px" }} />

          {/* International Partner */}
          <div style={{ padding: "3rem 3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8299b8",
                marginBottom: "-0.5rem",
              }}
            >
              International Partner
            </div>
            <FIDALogoFull />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0d1f4e", marginBottom: "6px" }}>
                FIDA
              </div>
              <div style={{ fontSize: "0.82rem", color: "#6b7a99", lineHeight: 1.6 }}>
                The Federation of International Drone Soccer Association — the global governing
                body for drone soccer, setting the rules and standards for international competition.
              </div>
            </div>
            <div className="btn-outline-navy" style={{ padding: "10px 20px", fontSize: "0.7rem", cursor: "default" }}>
              Official Partner
            </div>
          </div>
        </div>

        {/* Additional sponsors row */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8299b8",
              marginBottom: "1.5rem",
            }}
          >
            Supported By
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { name: "Akimat of Astana", sub: "City Authority" },
              { name: "Droned", sub: "Technology Partner" },
              { name: "Astana Hub", sub: "Innovation Partner" },
            ].map(({ name, sub }) => (
              <div key={name} style={{ textAlign: "center", opacity: 0.7 }}>
                <div
                  style={{
                    width: "80px",
                    height: "48px",
                    background: "rgba(107,159,212,0.1)",
                    border: "1px solid rgba(107,159,212,0.2)",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 8px",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    color: "#3a5080",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "4px",
                    textAlign: "center",
                  }}
                >
                  {name}
                </div>
                <div style={{ fontSize: "0.65rem", color: "#8299b8", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a partner CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(13,31,78,0.04), rgba(107,159,212,0.08))",
            border: "1px solid rgba(107,159,212,0.2)",
            borderRadius: "10px",
            padding: "2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#8299b8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
              Partnership Opportunities
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0d1f4e" }}>
              Interested in becoming a partner or sponsor?
            </div>
          </div>
          <a href="#contact" className="btn-navy">
            Contact Organizers
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #partners > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
          #partners > div > div:nth-child(3) > div:nth-child(2) { height: 1px !important; width: 80% !important; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

function KDSLogoFull() {
  return (
    <svg width="140" height="80" viewBox="0 0 140 80" fill="none" aria-label="KDS Logo">
      {/* Circle emblem */}
      <circle cx="30" cy="40" r="26" stroke="#0d1f4e" strokeWidth="1.5" fill="rgba(107,159,212,0.08)" />
      <circle cx="30" cy="40" r="10" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="30" cy="40" r="4" fill="#c9a84c" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line
          key={i}
          x1={30 + 12 * Math.cos((deg * Math.PI) / 180)}
          y1={40 + 12 * Math.sin((deg * Math.PI) / 180)}
          x2={30 + 20 * Math.sin((deg * Math.PI) / 180) * 0 + 20 * Math.cos((deg * Math.PI) / 180)}
          y2={40 + 20 * Math.sin((deg * Math.PI) / 180)}
          stroke="#6b9fd4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      {/* Text */}
      <text x="65" y="36" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fill="#0d1f4e" letterSpacing="-1">
        KDS
      </text>
      <text x="65" y="52" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600" fill="#6b9fd4" letterSpacing="1.5">
        DRONE SOCCER
      </text>
      <text x="65" y="63" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="500" fill="#8299b8" letterSpacing="1">
        KAZAKHSTAN
      </text>
    </svg>
  );
}

function FIDALogoFull() {
  return (
    <svg width="140" height="80" viewBox="0 0 140 80" fill="none" aria-label="FIDA Logo">
      {/* Drone ball icon */}
      <circle cx="30" cy="40" r="22" fill="none" stroke="#0d1f4e" strokeWidth="1.5" />
      <ellipse cx="30" cy="40" rx="22" ry="8" fill="none" stroke="#0d1f4e" strokeWidth="1" />
      <ellipse cx="30" cy="40" rx="8" ry="22" fill="none" stroke="#0d1f4e" strokeWidth="1" />
      {/* Mini drone */}
      <line x1="21" y1="38" x2="39" y2="42" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="21" y1="42" x2="39" y2="38" stroke="#c9a84c" strokeWidth="1.5" />
      {[21, 39].map((x, i) => [38, 42].map((y, j) => (
        <circle key={`${i}-${j}`} cx={x} cy={y} r={4} fill="none" stroke="#c9a84c" strokeWidth="1" />
      )))}
      <circle cx="30" cy="40" r="2.5" fill="#c9a84c" />
      {/* Text */}
      <text x="60" y="36" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fill="#0d1f4e" letterSpacing="-1">
        FIDA
      </text>
      <text x="60" y="52" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="600" fill="#6b9fd4" letterSpacing="0.8">
        INTERNATIONAL DRONE
      </text>
      <text x="60" y="63" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="500" fill="#8299b8" letterSpacing="0.8">
        SOCCER ASSOCIATION
      </text>
    </svg>
  );
}
