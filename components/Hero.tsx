"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #f8f6f1 0%, #eef2f8 40%, #f5f3ee 100%)",
        paddingTop: "72px",
      }}
    >
      {/* Full-bleed SVG illustration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <AstanaSkylineSVG />
      </div>

      {/* Ornament top-left */}
      <div style={{ position: "absolute", top: 80, left: 0, opacity: 0.15, pointerEvents: "none" }}>
        <KazakhCornerOrnament />
      </div>
      {/* Ornament top-right */}
      <div style={{ position: "absolute", top: 80, right: 0, opacity: 0.15, transform: "scaleX(-1)", pointerEvents: "none" }}>
        <KazakhCornerOrnament />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          paddingTop: "6rem",
          paddingBottom: "20rem",
        }}
      >
        {/* FIDA badge */}
        <div className="animate-fadeIn" style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(13,31,78,0.06)",
              border: "1px solid rgba(107,159,212,0.4)",
              borderRadius: "40px",
              padding: "6px 16px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1a3370",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#c9a84c", display: "inline-block", animation: "blink 2.4s ease-in-out infinite" }} />
            Official FIDA Event · June 1, 2026
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="animate-fadeUp opacity-0-init"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#0d1f4e",
            letterSpacing: "-0.02em",
            maxWidth: "780px",
            marginBottom: "1.5rem",
          }}
        >
          Astana FIDA
          <br />
          <span className="text-gold-shimmer">Drone Soccer</span>
          <br />
          Championship 2026
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fadeUp opacity-0-init d-200"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "#3a5080",
            fontWeight: 400,
            maxWidth: "520px",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}
        >
          International drone soccer tournament under FIDA rules — where
          sport, technology and Kazakh culture meet in the heart of Astana.
        </p>

        {/* Meta pills */}
        <div
          className="animate-fadeUp opacity-0-init d-300"
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}
        >
          {[
            { icon: "📅", text: "June 1, 2026" },
            { icon: "📍", text: "Astana, Kazakhstan" },
            { icon: "🌐", text: "International Competition" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#fff",
                border: "1px solid rgba(107,159,212,0.25)",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#0d1f4e",
                boxShadow: "0 2px 8px rgba(13,31,78,0.06)",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="animate-fadeUp opacity-0-init d-400"
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
        >
          <a
            href="https://forms.gle/eVFWM75XRVicQgrj6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L15 8L8 15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Register Now
          </a>
          <a href="#program" className="btn-outline-navy">
            Event Program
          </a>
          <a href="#contact" className="btn-navy" style={{ background: "transparent", border: "1.5px solid rgba(13,31,78,0.3)", color: "#0d1f4e" }}>
            Contact Organizers
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3a5080", fontWeight: 600 }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, #6b9fd4, transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Astana skyline SVG                                                   */
/* ------------------------------------------------------------------ */
function AstanaSkylineSVG() {
  return (
    <svg
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMax meet"
      style={{ width: "100%", maxHeight: "80vh", minHeight: "480px" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef2f8" stopOpacity="0" />
          <stop offset="100%" stopColor="#d6e4f4" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c96a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b9fd4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6b9fd4" stopOpacity="0.04" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="sphereGold" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f5e4a0" />
          <stop offset="50%" stopColor="#e8c96a" />
          <stop offset="100%" stopColor="#a07820" />
        </radialGradient>
        <radialGradient id="sphereBlue" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="rgba(107,159,212,0.3)" />
          <stop offset="100%" stopColor="rgba(107,159,212,0.05)" />
        </radialGradient>
      </defs>

      {/* Sky overlay */}
      <rect x="0" y="0" width="1400" height="700" fill="url(#skyGrad)" />

      {/* Cloud lines */}
      <CloudLines />

      {/* Background city silhouette */}
      <CityBackground />

      {/* KHAN SHATYR — left */}
      <KhanShatyr x={220} y={680} />

      {/* NUR ALEM — right */}
      <NurAlem cx={1130} cy={530} r={110} />

      {/* Additional building right side */}
      <g opacity="0.4">
        <rect x="1260" y="500" width="18" height="180" fill="none" stroke="#6b9fd4" strokeWidth="1" />
        <rect x="1285" y="520" width="12" height="160" fill="none" stroke="#6b9fd4" strokeWidth="0.8" />
        <rect x="1250" y="480" width="50" height="8" fill="none" stroke="#6b9fd4" strokeWidth="0.8" />
      </g>

      {/* BAITEREK — center */}
      <Baiterek cx={700} baseY={680} />

      {/* Floating drone balls */}
      <g className="animate-float" style={{ transformOrigin: "420px 210px" }}>
        <DroneBall cx={420} cy={210} r={52} />
      </g>
      <g className="animate-floatB" style={{ transformOrigin: "950px 175px" }}>
        <DroneBall cx={950} cy={175} r={42} />
      </g>
      <g className="animate-float" style={{ animationDelay: "2s", transformOrigin: "300px 360px" }}>
        <DroneBall cx={300} cy={360} r={28} />
      </g>

      {/* Gold accent lines */}
      <GoldAccentLines />

      {/* Bottom ground line */}
      <line x1="0" y1="680" x2="1400" y2="680" stroke="#6b9fd4" strokeWidth="0.8" strokeOpacity="0.35" />
    </svg>
  );
}

function CloudLines() {
  return (
    <g opacity="0.35" stroke="#6b9fd4" strokeWidth="0.8" fill="none">
      {/* Cloud 1 — top left */}
      <path d="M 50 180 Q 100 165 150 175 Q 180 165 210 175 Q 240 165 270 178" />
      <path d="M 80 195 Q 130 182 175 192" />
      {/* Cloud 2 — top right */}
      <path d="M 1100 130 Q 1150 116 1210 128 Q 1250 116 1300 130" />
      <path d="M 1120 148 Q 1170 135 1230 146" />
      {/* Sweeping arc lines */}
      <path d="M 0 320 Q 350 260 700 290 Q 1050 320 1400 270" strokeWidth="0.5" opacity="0.5" />
      <path d="M 0 370 Q 350 310 700 345 Q 1050 375 1400 320" strokeWidth="0.4" opacity="0.4" />
    </g>
  );
}

function CityBackground() {
  return (
    <g opacity="0.18" stroke="#6b9fd4" strokeWidth="1" fill="rgba(107,159,212,0.04)">
      {/* Simple rectangular building silhouettes */}
      {[
        [60, 600, 30, 80], [95, 580, 25, 100], [125, 590, 35, 90],
        [170, 570, 25, 110], [200, 600, 20, 80], [230, 565, 30, 115],
        [1050, 580, 30, 100], [1085, 560, 25, 120], [1120, 595, 35, 85],
        [1165, 570, 28, 110], [1200, 585, 22, 95],
        [450, 620, 20, 60], [480, 600, 30, 80], [520, 610, 25, 70],
        [820, 615, 20, 65], [845, 600, 28, 80], [880, 620, 22, 60],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y - h} width={w} height={h} />
      ))}
    </g>
  );
}

function KhanShatyr({ x, y }: { x: number; y: number }) {
  const tipX = x;
  const tipY = y - 420;
  const leftBase = x - 110;
  const rightBase = x + 110;

  return (
    <g opacity="0.75">
      {/* Main tent body */}
      <path
        d={`M ${leftBase} ${y} Q ${leftBase + 30} ${y - 200} ${tipX} ${tipY}`}
        fill="none"
        stroke="#6b9fd4"
        strokeWidth="1.5"
      />
      <path
        d={`M ${rightBase} ${y} Q ${rightBase - 30} ${y - 200} ${tipX} ${tipY}`}
        fill="none"
        stroke="#6b9fd4"
        strokeWidth="1.5"
      />
      {/* Fill */}
      <path
        d={`M ${leftBase} ${y} Q ${leftBase + 30} ${y - 200} ${tipX} ${tipY} Q ${rightBase - 30} ${y - 200} ${rightBase} ${y} Z`}
        fill="url(#blueGrad)"
        stroke="none"
      />
      {/* Cable lines */}
      {[0.2, 0.4, 0.6, 0.8].map((t, i) => {
        const ly = y - t * 420;
        const spread = (1 - t) * 110;
        return (
          <line
            key={i}
            x1={tipX - spread * 0.95}
            y1={ly + 4}
            x2={tipX + spread * 0.95}
            y2={ly + 4}
            stroke="#6b9fd4"
            strokeWidth="0.7"
            strokeOpacity="0.5"
          />
        );
      })}
      {/* Mast above tip */}
      <line x1={tipX} y1={tipY} x2={tipX} y2={tipY - 50} stroke="#6b9fd4" strokeWidth="2" />
      <circle cx={tipX} cy={tipY - 55} r={5} fill="#c9a84c" />
      {/* Base platform */}
      <rect x={leftBase - 10} y={y - 12} width={220 + 20} height={12} fill="none" stroke="#6b9fd4" strokeWidth="1" />
    </g>
  );
}

function NurAlem({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g opacity="0.8">
      {/* Main sphere */}
      <circle cx={cx} cy={cy} r={r} fill="url(#sphereBlue)" stroke="#6b9fd4" strokeWidth="1.5" />
      {/* Horizontal rings */}
      {[-0.5, 0, 0.5].map((t, i) => {
        const ry = Math.sqrt(1 - t * t) * r * 0.4;
        const rx = Math.sqrt(1 - t * t) * r;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy + t * r}
            rx={rx}
            ry={ry}
            fill="none"
            stroke="#6b9fd4"
            strokeWidth="0.7"
            strokeOpacity="0.6"
          />
        );
      })}
      {/* Vertical arcs */}
      {[-0.5, 0, 0.5].map((t, i) => (
        <ellipse
          key={i}
          cx={cx + t * r * 0.5}
          cy={cy}
          rx={Math.sqrt(1 - t * t * 0.25) * r * 0.4}
          ry={r}
          fill="none"
          stroke="#6b9fd4"
          strokeWidth="0.7"
          strokeOpacity="0.5"
          transform={`rotate(${t * 30} ${cx} ${cy})`}
        />
      ))}
      {/* Equatorial ring highlight */}
      <ellipse cx={cx} cy={cy} rx={r * 1.1} ry={r * 0.12} fill="none" stroke="#c9a84c" strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Support tower */}
      <line x1={cx} y1={cy + r} x2={cx} y2={cy + r + 50} stroke="#6b9fd4" strokeWidth="3" />
      <rect x={cx - 60} y={cy + r + 48} width={120} height={10} fill="none" stroke="#6b9fd4" strokeWidth="1.2" />
      {/* Flag/antenna */}
      <line x1={cx} y1={cy - r} x2={cx} y2={cy - r - 20} stroke="#c9a84c" strokeWidth="1.5" />
    </g>
  );
}

function Baiterek({ cx, baseY }: { cx: number; baseY: number }) {
  const sphereY = baseY - 300;
  const tipY = baseY - 560;

  return (
    <g>
      {/* Base legs */}
      <path
        d={`M ${cx - 90} ${baseY} Q ${cx - 60} ${baseY - 150} ${cx - 12} ${sphereY + 55}`}
        fill="none"
        stroke="#6b9fd4"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d={`M ${cx + 90} ${baseY} Q ${cx + 60} ${baseY - 150} ${cx + 12} ${sphereY + 55}`}
        fill="none"
        stroke="#6b9fd4"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Cross-braces */}
      {[0.3, 0.6].map((t, i) => {
        const y = baseY - t * (baseY - sphereY - 55);
        const spread = (1 - t) * 78;
        return (
          <line key={i} x1={cx - spread} y1={y} x2={cx + spread} y2={y}
            stroke="#6b9fd4" strokeWidth="1" strokeOpacity="0.4" />
        );
      })}
      {/* Main column (below sphere) */}
      <rect x={cx - 7} y={sphereY + 55} width={14} height={baseY - sphereY - 55} fill="#6b9fd4" opacity="0.2" />
      {/* Sphere */}
      <circle cx={cx} cy={sphereY} r={52} fill="url(#sphereGold)" filter="url(#glow)" opacity="0.9" />
      <circle cx={cx} cy={sphereY} r={52} fill="none" stroke="#c9a84c" strokeWidth="2" />
      {/* Sphere latitude lines */}
      <ellipse cx={cx} cy={sphereY} rx={52} ry={18} fill="none" stroke="#a07820" strokeWidth="0.8" strokeOpacity="0.6" />
      <ellipse cx={cx} cy={sphereY - 18} rx={42} ry={12} fill="none" stroke="#a07820" strokeWidth="0.6" strokeOpacity="0.4" />
      {/* Main column (above sphere) */}
      <line x1={cx} y1={sphereY - 52} x2={cx} y2={tipY + 40} stroke="#6b9fd4" strokeWidth="6" strokeLinecap="round" opacity="0.75" />
      {/* BRANCHES — 5 symmetric arms */}
      {[
        { angle: -90, len: 120, thick: 4 }, // center top
        { angle: -65, len: 100, thick: 3.5 },
        { angle: -115, len: 100, thick: 3.5 },
        { angle: -45, len: 80, thick: 2.5 },
        { angle: -135, len: 80, thick: 2.5 },
      ].map(({ angle, len, thick }, i) => {
        const startY = sphereY - 45 - i * 4;
        const rad = (angle * Math.PI) / 180;
        const ex = cx + len * Math.cos(rad);
        const ey = startY + len * Math.sin(rad);
        // Slight curve
        const mx = cx + (len * 0.5) * Math.cos(rad) + (i < 2 ? 8 : -8) * Math.cos(rad + Math.PI / 2);
        const my = startY + (len * 0.5) * Math.sin(rad);
        return (
          <g key={i}>
            <path
              d={`M ${cx} ${startY} Q ${mx} ${my} ${ex} ${ey}`}
              fill="none"
              stroke="#6b9fd4"
              strokeWidth={thick}
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Tip globe */}
            <circle cx={ex} cy={ey} r={6} fill="#c9a84c" opacity="0.9" />
          </g>
        );
      })}
      {/* Needle above branches */}
      <line x1={cx} y1={tipY + 40} x2={cx} y2={tipY} stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      <circle cx={cx} cy={tipY - 4} r={5} fill="#c9a84c" opacity="0.95" />
    </g>
  );
}

function DroneBall({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      {/* Outer sphere */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#6b9fd4" strokeWidth="1.8" opacity="0.85" />
      {/* Horizontal ring */}
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.35} fill="none" stroke="#6b9fd4" strokeWidth="1.2" opacity="0.6" />
      {/* Vertical ring */}
      <ellipse cx={cx} cy={cy} rx={r * 0.35} ry={r} fill="none" stroke="#6b9fd4" strokeWidth="1.2" opacity="0.6" />
      {/* Drone body (X shape) */}
      <line x1={cx - r * 0.4} y1={cy - r * 0.1} x2={cx + r * 0.4} y2={cy + r * 0.1} stroke="#c9a84c" strokeWidth="1.5" opacity="0.9" />
      <line x1={cx - r * 0.4} y1={cy + r * 0.1} x2={cx + r * 0.4} y2={cy - r * 0.1} stroke="#c9a84c" strokeWidth="1.5" opacity="0.9" />
      {/* Rotor circles */}
      {[
        [-0.38, -0.08],
        [0.38, 0.08],
        [-0.38, 0.08],
        [0.38, -0.08],
      ].map(([dx, dy], i) => (
        <circle
          key={i}
          cx={cx + dx * r}
          cy={cy + dy * r}
          r={r * 0.14}
          fill="none"
          stroke="#c9a84c"
          strokeWidth="1.2"
          opacity="0.85"
        />
      ))}
      {/* Center body */}
      <circle cx={cx} cy={cy} r={r * 0.1} fill="#c9a84c" opacity="0.8" />
      {/* Inner sphere glow */}
      <circle cx={cx} cy={cy} r={r * 0.7} fill="rgba(107,159,212,0.06)" />
    </g>
  );
}

function GoldAccentLines() {
  return (
    <g fill="none" stroke="#c9a84c" strokeOpacity="0.2" strokeWidth="1">
      {/* Flowing curves */}
      <path d="M 0 450 Q 200 380 400 420 Q 600 460 800 400 Q 1000 340 1200 390 Q 1350 415 1400 400" />
      <path d="M 0 470 Q 300 400 600 440 Q 900 480 1200 430 Q 1350 410 1400 420" />
      {/* Corner ornament lines top-right */}
      <path d="M 1350 100 Q 1380 130 1370 160 Q 1360 180 1380 200" strokeOpacity="0.15" />
      <path d="M 1370 90 Q 1400 120 1390 155" strokeOpacity="0.12" />
    </g>
  );
}

function KazakhCornerOrnament() {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" aria-hidden="true">
      <path d="M 10 10 Q 40 0 80 20 Q 120 40 160 20 Q 180 10 190 30 Q 200 50 180 70 Q 160 90 140 70 Q 120 50 100 70 Q 80 90 60 70 Q 40 50 20 70 Q 0 90 10 110 Q 20 130 40 120" stroke="#0d1f4e" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M 20 20 L 50 50 M 60 10 L 80 40 M 100 15 L 110 45" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <circle cx="80" cy="80" r="20" stroke="#0d1f4e" strokeWidth="0.8" fill="none" />
      <circle cx="80" cy="80" r="8" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
    </svg>
  );
}
