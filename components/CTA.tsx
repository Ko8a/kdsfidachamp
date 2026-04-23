"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background illustration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <svg width="900" height="600" viewBox="0 0 900 600" fill="none" aria-hidden="true" style={{ opacity: 0.04 }}>
          <circle cx="450" cy="300" r="280" stroke="#0d1f4e" strokeWidth="2" />
          <circle cx="450" cy="300" r="200" stroke="#0d1f4e" strokeWidth="1.5" />
          <circle cx="450" cy="300" r="120" stroke="#0d1f4e" strokeWidth="1" />
          <circle cx="450" cy="300" r="50" stroke="#c9a84c" strokeWidth="1" />
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <line key={deg} x1="450" y1="20" x2="450" y2="580"
              stroke="#0d1f4e" strokeWidth="0.8"
              transform={`rotate(${deg} 450 300)`} />
          ))}
        </svg>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Main CTA block */}
        <div
          style={{
            background: "linear-gradient(160deg, #0d1f4e 0%, #1a3370 60%, #0d2960 100%)",
            borderRadius: "16px",
            padding: "4rem 3.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(13,31,78,0.2)",
          }}
        >
          {/* Background ornament on the card */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.15)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "1px solid rgba(107,159,212,0.12)",
              pointerEvents: "none",
            }}
          />

          {/* Badge */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "40px",
                padding: "6px 16px",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#e8c96a",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#c9a84c", display: "inline-block" }} />
              Registrations Open
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Ready to Compete?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.75,
            }}
          >
            Register your team for the Astana FIDA Drone Soccer Championship 2026 and be part of
            history. Spots are limited — don&apos;t miss your chance to compete in Astana.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              href="https://forms.gle/eVFWM75XRVicQgrj6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "0.85rem", padding: "16px 32px" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L16 9L9 17M1 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Register Your Team
            </a>
            <a
              href="mailto:info@dronesoccer.kz"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1.5px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Contact Organizers
            </a>
          </div>

          {/* Contact info row */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2rem",
            }}
          >
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3h12v10a2 2 0 01-2 2H5a2 2 0 01-2-2V3zM3 7h12" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
                label: "Email",
                value: "info@dronesoccer.kz",
                href: "mailto:info@dronesoccer.kz",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
                    <path d="M9 2v7l4 2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
                label: "Website",
                value: "dronesoccer.kz",
                href: "https://dronesoccer.kz",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5A6 6 0 019 13.5L5 17l1-4A6 6 0 019 1.5z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinejoin="round" />
                    <circle cx="9" cy="7.5" r="1.5" fill="rgba(255,255,255,0.5)" />
                  </svg>
                ),
                label: "Location",
                value: "Astana, Kazakhstan",
                href: "#venue",
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease",
                }}
              >
                {icon}
                <div>
                  <div style={{ fontSize: "0.62rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {label}
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social / Follow strip */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8299b8", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Follow Updates
          </span>
          {[
            { name: "Instagram", icon: "📸" },
            { name: "YouTube", icon: "▶️" },
            { name: "Telegram", icon: "✈️" },
          ].map(({ name, icon }) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ee",
                border: "1px solid rgba(107,159,212,0.2)",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#0d1f4e",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {icon} {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
