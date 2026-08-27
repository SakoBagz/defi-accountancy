import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(145deg, #f7f5f0 0%, #eef6f5 45%, #1d2a3a 45%, #15202b 100%)",
          color: "#f7f5f0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 120,
            maxWidth: 560,
            marginLeft: "auto",
          }}
        >
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 26,
              color: "#b7c9c7",
              fontFamily: "sans-serif",
            }}
          >
            {siteConfig.descriptor}
          </div>
        </div>
      </div>
    ),
    size
  );
}
