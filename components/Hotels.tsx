"use client";

const hotels = [
  {
    name: "The Ritz-Carlton Astana",
    category: "Ultra Luxury",
    desc: "Iconic 5-star property at the heart of Astana's financial district, offering unparalleled service and panoramic city views.",
    amenities: ["🍽️ Fine Dining", "🏊 Pool", "💆 Spa", "🅿️ Parking", "💼 Business Center"],
    stars: 5,
    photo: "/kdsfidachamp/hotel-ritz.jpg",
  },
  {
    name: "The St. Regis Astana",
    category: "Luxury",
    desc: "Sophisticated elegance in the Nurly Tau business complex, featuring butler service and world-class facilities.",
    amenities: ["🍽️ Restaurant", "🏋️ Fitness", "💆 Spa", "🍸 Bar", "🚖 Concierge"],
    stars: 5,
    photo: "/kdsfidachamp/hotel-stregis.jpg",
  },
  {
    name: "Sheraton Astana Hotel",
    category: "Upscale",
    desc: "A modern international hotel offering comfort and connectivity, ideally positioned near major attractions.",
    amenities: ["🍽️ Restaurant", "🏊 Pool", "🏋️ Gym", "🛜 High-speed WiFi", "🅿️ Parking"],
    stars: 5,
    photo: "/kdsfidachamp/hotel-sheraton.jpg",
  },
  {
    name: "Hilton Astana",
    category: "Upscale",
    desc: "Contemporary design meets Kazakh hospitality at the Hilton, steps from Astana's famous riverside promenade.",
    amenities: ["🍽️ Dining", "🏋️ Fitness Center", "💼 Business Lounge", "🛜 WiFi", "🎭 Events"],
    stars: 5,
    photo: "/kdsfidachamp/hotel-hilton.webp",
  },
  {
    name: "Wyndham Garden Astana",
    category: "Premium",
    desc: "A comfortable and well-appointed hotel providing excellent value with easy access to the city's key destinations.",
    amenities: ["🍽️ Restaurant", "🏋️ Gym", "🛜 WiFi", "🅿️ Parking", "🌿 Garden"],
    stars: 4,
    photo: "/kdsfidachamp/hotel-wyndham.webp",
  },
];

export default function Hotels() {
  return (
    <section
      id="hotels"
      style={{
        padding: "6rem 2rem",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%236b9fd4' stroke-width='0.4' opacity='0.12'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-sep-center" />
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.75rem" }}>
            Accommodation
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
            Recommended Hotels
          </h2>
          <p style={{ fontSize: "1rem", color: "#6b7a99", maxWidth: "480px", margin: "0 auto" }}>
            Astana offers world-class accommodation. These hotels are recommended for championship participants and guests.
          </p>
        </div>

        {/* Hotels grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {hotels.slice(0, 3).map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {hotels.slice(3).map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            fontSize: "0.78rem",
            color: "#8299b8",
            fontStyle: "italic",
          }}
        >
          Accommodation is at participants&apos; own expense. KDS does not have preferential rates with listed hotels.
          Book early to secure availability during the championship period.
        </p>
      </div>

      <style>{`
        .hotel-card:hover .hotel-photo { transform: scale(1.06); }
        @media (max-width: 900px) {
          #hotels > div > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
          #hotels > div > div:nth-child(4) { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
        @media (max-width: 600px) {
          #hotels > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function HotelCard({ hotel }: { hotel: (typeof hotels)[0] }) {
  return (
    <div className="hotel-card">
      {/* Top color bar */}
      <div
        style={{
          height: "4px",
          background: "linear-gradient(90deg, #c9a84c, #6b9fd4)",
        }}
      />

      {/* Photo */}
      <div
        style={{
          height: "180px",
          position: "relative",
          overflow: "hidden",
          background: "#dce8f4",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hotel.photo}
          alt={hotel.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            transition: "transform 0.5s ease",
          }}
          className="hotel-photo"
        />
        {/* Gradient overlay at bottom */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(255,255,255,0.92)",
            borderRadius: "6px",
            padding: "4px 10px",
            fontSize: "0.62rem",
            fontWeight: 700,
            color: "#c9a84c",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          {hotel.category}
        </div>
        {/* Stars */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "14px",
            display: "flex",
            gap: "2px",
          }}
        >
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <span key={i} style={{ color: "#f5d97e", fontSize: "0.8rem", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>★</span>
          ))}
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0d1f4e", marginBottom: "0.5rem", lineHeight: 1.3 }}>
          {hotel.name}
        </h3>
        <p style={{ fontSize: "0.82rem", color: "#6b7a99", lineHeight: 1.65, marginBottom: "1rem" }}>
          {hotel.desc}
        </p>

        {/* Amenities */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "1.25rem" }}>
          {hotel.amenities.map((a) => (
            <span
              key={a}
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "#3a5080",
                background: "#f0f4f8",
                padding: "3px 8px",
                borderRadius: "4px",
                border: "1px solid rgba(107,159,212,0.15)",
              }}
            >
              {a}
            </span>
          ))}
        </div>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#1a3370",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "1.5px solid rgba(107,159,212,0.4)",
            paddingBottom: "2px",
            transition: "color 0.3s ease, border-color 0.3s ease",
          }}
        >
          View Hotel
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10M6 2L10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

