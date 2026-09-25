import { ImageResponse } from "next/og";

export const alt = "Mohammad Haroon — MERN Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#171b20", color: "#f5f2eb", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#b9dc88", fontSize: 24, letterSpacing: 4 }}>PORTFOLIO / HAROON.LIVE</div>
      <div style={{ display: "flex", fontSize: 80, fontWeight: 700, marginTop: 32 }}>Mohammad Haroon</div>
      <div style={{ display: "flex", fontSize: 40, marginTop: 20 }}>MERN Stack Web Developer</div>
      <div style={{ display: "flex", fontSize: 25, marginTop: 46, color: "#b9dc88" }}>React · Node.js · MongoDB · AI Applications</div>
    </div>,
    size,
  );
}
