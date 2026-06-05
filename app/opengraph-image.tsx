import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.copy.es.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #0c4a6e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #6366f1, #0ea5e9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            FC
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.65)" }}>
            {siteConfig.location}
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 900,
          }}
        >
          {siteConfig.copy.es.jobTitle}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          React · Next.js · NestJS · TypeScript · Supabase
        </div>
      </div>
    ),
    { ...size }
  );
}
