"use client";
import { useLang } from "@/lib/i18n";

export default function Attractions() {
  const { t } = useLang();

  const PHOTOS = ["/place-baiterek.jpg","/place-khanshatyr.jpg","/place-nuralem.jpg","/place-pyramid.jpg","/place-museum.jpg"];
  const places = t.attractions.places.map((p, i) => ({ ...p, photo: PHOTOS[i] }));

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
            {t.attractions.label}
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
            {t.attractions.title}
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "0 auto" }}>
            {t.attractions.subtitle}
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
          {places.slice(0, 3).map((a) => (
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
          {places.slice(3).map((a) => (
            <AttractionCard key={a.name} attraction={a} />
          ))}
        </div>
      </div>

      <style>{`
        .attraction-card:hover .attraction-photo { transform: scale(1.07); }
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

type AttractionEntry = {
  name: string;
  subtitle: string;
  desc: string;
  photo: string;
  color?: string;
};

function AttractionCard({ attraction }: { attraction: AttractionEntry }) {
  const color = (attraction as { color?: string }).color ?? "#6b9fd4";
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
      {/* Photo */}
      <div style={{ height: "190px", position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={attraction.photo}
          alt={attraction.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            transition: "transform 0.5s ease",
          }}
          className="attraction-photo"
        />
        {/* Dark overlay so the card stays consistent with the dark section */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,78,0.75) 0%, rgba(13,31,78,0.15) 60%, transparent 100%)" }} />
        {/* Color accent bar at bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: color, opacity: 0.8 }} />
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: color,
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
