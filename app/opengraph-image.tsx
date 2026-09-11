import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0b100e";
const FG = "#eef3ed";
const MUTED = "#9baa9f";
const ACCENT = "#4ecf9a";
const BORDER = "#26352c";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          backgroundImage: `linear-gradient(${BORDER}55 1px, transparent 1px), linear-gradient(90deg, ${BORDER}55 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          padding: "72px 80px",
          color: FG,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              fontSize: 30,
              letterSpacing: -2,
            }}
          >
            cr<span style={{ color: ACCENT }}>.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: ACCENT, fontSize: 20, letterSpacing: 2 }}>
            <div style={{ display: "flex", width: 10, height: 10, borderRadius: 5, background: ACCENT }} />
            {profile.availability}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 34, color: MUTED }}>{profile.name}</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 14, fontSize: 82, letterSpacing: -3, lineHeight: 1.08 }}>
            <div style={{ display: "flex" }}>Complex systems.</div>
            <div style={{ display: "flex", color: ACCENT }}>Clear solutions.</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${BORDER}`, paddingTop: 30 }}>
          <div style={{ display: "flex", fontSize: 26, color: MUTED }}>{profile.title}</div>
          <div style={{ display: "flex", gap: 12 }}>
            {["Risk", "Liquidity", "Capital"].map((module) => (
              <div
                key={module}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  fontSize: 22,
                  color: MUTED,
                }}
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
