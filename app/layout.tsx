import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astana FIDA Drone Soccer Championship 2026",
  description:
    "International Drone Soccer Championship in Astana, Kazakhstan — June 1, 2026. Hosted by Kazakhstan Drone Soccer (KDS) under FIDA rules.",
  openGraph: {
    title: "Astana FIDA Drone Soccer Championship 2026",
    description:
      "International Drone Soccer Championship — June 1, 2026 · Astana, Kazakhstan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
