import { ImageResponse } from "next/og";

export const alt = "Rodantex — Control de flotas, llantas y mantenimiento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#17232F",
          color: "#F3F5F6",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 800, color: "#B8D957", marginBottom: 24 }}>rodantex</div>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>
          Controla tus llantas, mantenimientos y toda tu flota
        </div>
        <div style={{ fontSize: 30, color: "#5DC4B8", marginTop: 32 }}>
          Software de gestión de flotas · www.rodantex.com
        </div>
      </div>
    ),
    size,
  );
}
