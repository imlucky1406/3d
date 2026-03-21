import React from "react";
import { MATERIALS } from "../data";

export default function Materials() {
  return (
    <section id="materials" className="section-pad" style={{ background: "#FDFCF8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="slabel" style={{ display: "flex", justifyContent: "center" }}>
            ✦ Built to Last
          </div>
          <h2
            className="fr"
            style={{
              fontSize: "clamp(26px,4vw,42px)",
              fontWeight: 900,
              color: "#1C1C2E",
            }}
          >
            Premium Materials 🧪
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 18,
          }}
        >
          {MATERIALS.map((m) => (
            <div
              key={m.name}
              style={{
                background: m.bg,
                border: `2px solid ${m.accent}20`,
                borderRadius: 22,
                padding: 26,
                transition: "transform .3s,box-shadow .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${m.accent}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: "#fff",
                  boxShadow: `0 4px 14px ${m.accent}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: m.accent,
                  }}
                />
              </div>
              <div
                className="fr"
                style={{
                  fontWeight: 900,
                  fontSize: 22,
                  color: "#1C1C2E",
                  marginBottom: 4,
                }}
              >
                {m.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#9B9BBB",
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                {m.temp}
                {m.flex && " · Flexible"}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#6B6B8A",
                  lineHeight: 1.65,
                  marginBottom: 14,
                }}
              >
                {m.desc}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#9B9BBB",
                  fontWeight: 900,
                  letterSpacing: ".1em",
                  marginBottom: 6,
                }}
              >
                STRENGTH INDEX
              </div>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 99,
                  height: 7,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${m.strength}%`,
                    height: "100%",
                    background: m.accent,
                    borderRadius: 99,
                    transition: "width 1s",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
