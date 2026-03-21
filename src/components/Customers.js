import React from "react";
import { TESTIMONIALS } from "../data";

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF9F43" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Customers() {
  return (
    <section className="section-pad" style={{ background: "#E8FFFB" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="slabel" style={{ display: "flex", justifyContent: "center" }}>
            ✦ Happy Customers
          </div>
          <h2
            className="fr"
            style={{
              fontSize: "clamp(26px,4vw,42px)",
              fontWeight: 900,
              color: "#1C1C2E",
            }}
          >
            What People Say 💬
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))",
            gap: 22,
          }}
        >
          {TESTIMONIALS.map((r) => (
            <div
              key={r.name}
              style={{
                background: "#fff",
                border: `2px solid ${r.accent}18`,
                borderRadius: 24,
                padding: 26,
                boxShadow: `0 6px 28px ${r.accent}0e`,
                transition: "transform .3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p
                style={{
                  color: "#6B6B8A",
                  fontSize: 14,
                  lineHeight: 1.75,
                  marginBottom: 18,
                }}
              >
                "{r.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: r.bg,
                    border: `2px solid ${r.accent}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 900,
                    color: r.accent,
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 14,
                      color: "#1C1C2E",
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#9B9BBB",
                      fontWeight: 600,
                    }}
                  >
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
