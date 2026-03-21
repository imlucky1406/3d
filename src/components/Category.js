import React from "react";
import { CATEGORIES } from "../data";

export default function Category() {
  return (
    <section className="section-pad" style={{ background: "#FFF4E6" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="slabel">✦ Browse by Category</div>
        <h2
          className="fr"
          style={{
            fontSize: "clamp(26px,4vw,42px)",
            fontWeight: 900,
            color: "#1C1C2E",
            marginBottom: 36,
          }}
        >
          Find Your Category
        </h2>
        <div
          className="g3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            gap: 18,
          }}
        >
          {CATEGORIES.map((c) => (
            <div
              key={c.name}
              style={{
                background: c.bg,
                border: `2px solid ${c.accent}20`,
                borderRadius: 22,
                padding: 26,
                cursor: "pointer",
                transition: "transform .3s,box-shadow .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${c.accent}22`;
                e.currentTarget.style.borderColor = `${c.accent}44`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = `${c.accent}20`;
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: "#fff",
                  boxShadow: `0 4px 14px ${c.accent}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  marginBottom: 14,
                }}
              >
                {c.icon}
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 15,
                  color: "#1C1C2E",
                  marginBottom: 4,
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#9B9BBB",
                  fontWeight: 700,
                }}
              >
                {c.count} products
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
