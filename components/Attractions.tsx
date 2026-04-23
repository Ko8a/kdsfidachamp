"use client";

const attractions = [
  {
    name: "Baiterek",
    subtitle: "Symbol of Astana",
    desc: "The iconic 105-meter monument tower with a golden observation sphere — the definitive symbol of modern Astana and Kazakhstan's aspirations.",
    icon: <BaiterekMini />,
    color: "#c9a84c",
  },
  {
    name: "Khan Shatyr",
    subtitle: "World's Largest Tent",
    desc: "A monumental transparent tent structure covering 140,000 m² — housing a shopping center, beach resort, and entertainment complex.",
    icon: <KhanShatyrMini />,
    color: "#6b9fd4",
  },
  {
    name: "Nur Alem / EXPO",
    subtitle: "Sphere of Future",
    desc: "The world's largest spherical building, built for EXPO 2017 in Astana. Now a museum of future energy and sustainable technology.",
    icon: <NurAlemMini />,
    color: "#6b9fd4",
  },
  {
    name: "Palace of Peace & Reconciliation",
    subtitle: "Pyramid of Harmony",
    desc: "A stunning 62-meter glass pyramid by Norman Foster, hosting the Congress of World and Traditional Religions — a masterpiece of architecture.",
    icon: <PyramidMini />,
    color: "#c9a84c",
  },
  {
    name: "National Museum",
    subtitle: "Kazakhstan's Story",
    desc: "The largest museum in Central Asia, showcasing over 44,000 artefacts spanning Kazakhstan's history from ancient times to the present.",
    icon: <MuseumMini />,
    color: "#6b9fd4",
  },
];

export default function Attractions() {
  return (
    <section
      id="astana"
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(160deg, #0d1f4e 0%, #1a3370 60%, #0d2960 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ornament */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%236b9fd4' stroke-width='0.4' opacity='0.08'%3E%3Cpath d='M40 5 L40 75 M5 40 L75 40'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Floating decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.12)",
          animation: "spin-slow 20s linear infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "3%",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          border: "1px solid rgba(107,159,212,0.15)",
          animation: "spin-slow 15s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-sep-center" />
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem" }}>
            Discover Kazakhstan
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Discover Astana
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "0 auto" }}>
            Beyond the championship — explore one of the world's most extraordinary modern capitals.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {attractions.slice(0, 3).map((a) => (
            <AttractionCard key={a.name} attraction={a} />
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
          {attractions.slice(3).map((a) => (
            <AttractionCard key={a.name} attraction={a} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #astana > div > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
          #astana > div > div:nth-child(4) { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
        @media (max-width: 600px) {
          #astana > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function AttractionCard({ attraction }: { attraction: (typeof attractions)[0] }) {
  return (
    <div
      className="attraction-card"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      {/* Illustration area */}
      <div
        style={{
          height: "180px",
          background: "rgba(255,255,255,0.03)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
        }}
      >
        {attraction.icon}
        {/* Color accent dot */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: attraction.color,
            animation: "blink 3s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: attraction.color,
            marginBottom: "6px",
          }}
        >
          {attraction.subtitle}
        </div>
        <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", marginBottom: "0.6rem" }}>
          {attraction.name}
        </h3>
        <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
          {attraction.desc}
        </p>
      </div>
    </div>
  );
}

/* Mini SVG illustrations for each attraction */
function BaiterekMini() {
  return (
    <svg width="100" height="160" viewBox="0 0 100 160" fill="none" aria-hidden="true">
      {/* Legs */}
      <path d="M 35 155 Q 42 110 46 78" stroke="#6b9fd4" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M 65 155 Q 58 110 54 78" stroke="#6b9fd4" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.8" />
      {/* Column */}
      <line x1="50" y1="45" x2="50" y2="78" stroke="#6b9fd4" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      {/* Sphere */}
      <circle cx="50" cy="38" r="22" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="50" cy="38" r="22" fill="rgba(201,168,76,0.15)" />
      <circle cx="50" cy="38" r="8" fill="#c9a84c" opacity="0.5" />
      {/* Branches */}
      <path d="M 50 17 Q 50 5 50 2" stroke="#6b9fd4" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 20 Q 34 12 26 4" stroke="#6b9fd4" strokeWidth="2" strokeLinecap="round" />
      <path d="M 50 20 Q 66 12 74 4" stroke="#6b9fd4" strokeWidth="2" strokeLinecap="round" />
      {[26, 74].map((x, i) => <circle key={i} cx={x} cy={4} r={3} fill="#c9a84c" />)}
      <circle cx={50} cy={1} r={3} fill="#c9a84c" />
    </svg>
  );
}

function KhanShatyrMini() {
  return (
    <svg width="120" height="160" viewBox="0 0 120 160" fill="none" aria-hidden="true">
      <path d="M 20 155 Q 35 100 55 50 L 60 20 L 65 50 Q 85 100 100 155 Z"
        fill="rgba(107,159,212,0.1)" stroke="#6b9fd4" strokeWidth="1.5" />
      {[0.25, 0.5, 0.75].map((t, i) => {
        const y = 155 - t * 135;
        const hw = (1 - t) * 40;
        return <line key={i} x1={60 - hw} y1={y} x2={60 + hw} y2={y} stroke="#6b9fd4" strokeWidth="0.7" strokeOpacity="0.6" />;
      })}
      <line x1="60" y1="20" x2="60" y2="5" stroke="#6b9fd4" strokeWidth="1.5" />
      <circle cx="60" cy="4" r="3.5" fill="#c9a84c" />
    </svg>
  );
}

function NurAlemMini() {
  return (
    <svg width="140" height="160" viewBox="0 0 140 160" fill="none" aria-hidden="true">
      <circle cx="70" cy="75" r="55" fill="rgba(107,159,212,0.1)" stroke="#6b9fd4" strokeWidth="1.5" />
      <ellipse cx="70" cy="75" rx="55" ry="20" fill="none" stroke="#6b9fd4" strokeWidth="0.8" strokeOpacity="0.5" />
      <ellipse cx="70" cy="55" rx="44" ry="14" fill="none" stroke="#6b9fd4" strokeWidth="0.7" strokeOpacity="0.4" />
      <ellipse cx="70" cy="95" rx="44" ry="14" fill="none" stroke="#6b9fd4" strokeWidth="0.7" strokeOpacity="0.4" />
      <ellipse cx="70" cy="75" rx="20" ry="55" fill="none" stroke="#6b9fd4" strokeWidth="0.8" strokeOpacity="0.5" />
      <ellipse cx="70" cy="75" rx="77" ry="8" fill="none" stroke="#c9a84c" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="70" y1="130" x2="70" y2="148" stroke="#6b9fd4" strokeWidth="2.5" />
      <rect x="40" y="148" width="60" height="6" fill="none" stroke="#6b9fd4" strokeWidth="1" />
    </svg>
  );
}

function PyramidMini() {
  return (
    <svg width="140" height="160" viewBox="0 0 140 160" fill="none" aria-hidden="true">
      <path d="M 70 15 L 130 145 L 10 145 Z" fill="rgba(107,159,212,0.08)" stroke="#6b9fd4" strokeWidth="1.5" />
      {[0.3, 0.6, 0.85].map((t, i) => {
        const y = 15 + t * 130;
        const hw = t * 60;
        return <line key={i} x1={70 - hw} y1={y} x2={70 + hw} y2={y} stroke="#6b9fd4" strokeWidth="0.7" strokeOpacity="0.4" />;
      })}
      {/* Glass panels suggestion */}
      <path d="M 70 15 L 110 145" stroke="#6b9fd4" strokeWidth="0.7" strokeOpacity="0.3" />
      <path d="M 70 15 L 30 145" stroke="#6b9fd4" strokeWidth="0.7" strokeOpacity="0.3" />
      <circle cx="70" cy="15" r="6" fill="#c9a84c" />
    </svg>
  );
}

function MuseumMini() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none" aria-hidden="true">
      {/* Main building */}
      <rect x="20" y="55" width="120" height="75" fill="rgba(107,159,212,0.08)" stroke="#6b9fd4" strokeWidth="1.2" />
      {/* Columns */}
      {[35, 55, 75, 95, 115].map((x, i) => (
        <rect key={i} x={x} y="55" width="8" height="75" fill="rgba(107,159,212,0.12)" stroke="#6b9fd4" strokeWidth="0.8" />
      ))}
      {/* Pediment */}
      <path d="M 10 55 L 80 15 L 150 55 Z" fill="rgba(107,159,212,0.06)" stroke="#6b9fd4" strokeWidth="1.2" />
      {/* Dome on top */}
      <ellipse cx="80" cy="14" rx="20" ry="10" fill="rgba(201,168,76,0.15)" stroke="#c9a84c" strokeWidth="1" />
      {/* Steps */}
      <rect x="15" y="128" width="130" height="6" fill="none" stroke="#6b9fd4" strokeWidth="1" />
      <rect x="10" y="133" width="140" height="6" fill="none" stroke="#6b9fd4" strokeWidth="1" />
    </svg>
  );
}
