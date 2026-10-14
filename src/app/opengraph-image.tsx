import { ImageResponse } from "next/og";

export const alt = "Indra Prayoga (Yuka) — Creative Developer & Systems Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d1017",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.08) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(56, 189, 248, 0.08) 2%, transparent 0%)",
          backgroundSize: "60px 60px",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Ambient Accent Glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#38bdf8",
              fontSize: "15px",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            [ OPERATOR // @YUKAATSU ]
          </div>

          <div
            style={{
              color: "#71717a",
              fontSize: "14px",
              letterSpacing: "0.2em",
              fontFamily: "monospace",
            }}
          >
            PRECISION LAB // ID.UTC+7
          </div>
        </div>

        {/* Center Main Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: "68px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            <span>Indra Prayoga</span>
            <span style={{ color: "#71717a", fontWeight: 400, marginLeft: "20px" }}>/Yuka</span>
          </div>

          <div
            style={{
              fontSize: "26px",
              color: "#a1a1aa",
              fontWeight: 500,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Frontend, Backend &amp; Creative Developer. Building web applications with Next.js, Laravel &amp; TypeScript — Creator of tsrossa.
          </div>
        </div>

        {/* Bottom Telemetry Card */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 28px",
            borderRadius: "16px",
            backgroundColor: "rgba(17, 21, 30, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              ts
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700 }}>
                Flagship: tsrossa Direct-to-DAC Audio Engine
              </span>
              <span style={{ color: "#a1a1aa", fontSize: "13px", fontFamily: "monospace" }}>
                C++17 usbfs Bypass · POSIX mlock · 0.0 dBFS Bit-Perfect
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#10b981",
              fontSize: "13px",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            v1.4.0-BETA // ONLINE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
