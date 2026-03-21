import React from "react";
import { HOW_STEPS } from "../data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad" style={{ background: "#FFF8F0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="slabel" style={{ display: "flex", justifyContent: "center" }}>
            ✦ The Process
          </div>
          <h2
            className="fr"
            style={{
              fontSize: "clamp(26px,4vw,42px)",
              fontWeight: 900,
              color: "#1C1C2E",
            }}
          >
            How It Works
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
          {HOW_STEPS.map((s, i) => (
            <div
              key={s.n}
              style={{
                background: s.bg,
                border: `2px solid ${s.accent}20`,
                borderRadius: 24,
                padding: 26,
                position: "relative",
                overflow: "hidden",
                transition: "transform .3s,box-shadow .3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-7px)";
                e.currentTarget.style.boxShadow = `0 18px 48px ${s.accent}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -6,
                  right: 6,
                  fontSize: 68,
                  fontWeight: 900,
                  opacity: 0.07,
                  fontFamily: "Fraunces,serif",
                  color: s.accent,
                  userSelect: "none",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 17,
                  background: "#fff",
                  boxShadow: `0 4px 16px ${s.accent}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 25,
                  marginBottom: 18,
                }}
              >
                {s.icon}
              </div>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#1C1C2E", marginBottom: 9 }}>
                {s.title}
              </div>
              <div style={{ color: "#6B6B8A", fontSize: 13, lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
