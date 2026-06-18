import { ImageResponse } from "next/og";

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
          padding: "64px",
          background: "#000000",
          color: "white",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 8, color: "#C8FF00" }}>STACK STUDIO</div>
        <div style={{ marginTop: 24, fontSize: 64, fontWeight: 700, maxWidth: 900, lineHeight: 1.1 }}>
          We Build Digital Products That Scale
        </div>
        <div style={{ marginTop: 20, fontSize: 24, color: "#888888" }}>
          Next-gen web, mobile & AI solutions
        </div>
      </div>
    ),
    { ...size },
  );
}
