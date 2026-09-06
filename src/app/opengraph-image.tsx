import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = `${profile.fullName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated Open Graph image. Mirrors the site's editorial system:
 * warm paper background, oversized name, single accent mark.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f3f0ea",
          color: "#17150f",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#5f5950",
          }}
        >
          <span>Portfolio / 01</span>
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#c4451c",
              }}
            />
            {profile.domains.join(" / ").toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 148,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {profile.firstName}
          </div>
          <div
            style={{
              fontSize: 148,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              fontWeight: 600,
              textTransform: "uppercase",
              marginLeft: 120,
            }}
          >
            {profile.lastName}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #17150f",
            paddingTop: 28,
            fontSize: 30,
          }}
        >
          <span>{profile.role}</span>
          <span style={{ color: "#5f5950", fontSize: 26 }}>{profile.statement}</span>
        </div>
      </div>
    ),
    size,
  );
}
