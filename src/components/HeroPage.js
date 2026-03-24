import React from "react";
import { PRODUCTS } from "../data";
import customImg from "../assets/image/3D-printer.png";


export default function HeroPage() {
  return (
    <section
      className="hero-home"
      style={{
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(155deg,#FFFDF8 0%,#FFF4E6 45%,#E8FFFB 100%)",
        gap: "clamp(24px, 5vw, 56px)",
        flexWrap: "wrap",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-100px",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle,#FFE8CC55,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-80px",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle,#CCF9F455,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ flex: 1, minWidth: "min(100%, 280px)", maxWidth: 560, position: "relative" }}>
        <div className="pill fu" style={{ marginBottom: 22 }}>
          ✨ Next-Gen 3D Manufacturing
        </div>
        <h1
          className="fr fu"
          style={{
            fontSize: "clamp(38px,6vw,68px)",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#1C1C2E",
            marginBottom: 22,
            animationDelay: ".1s",
          }}
        >
          Innovative
          <br />
          <em style={{ color: "#FF6B6B", fontStyle: "italic" }}>Products</em>{" "}
          Crafted
          <br />
          with 3D Printing
        </h1>
        <p
          className="fu"
          style={{
            color: "#6B6B8A",
            fontSize: 17,
            lineHeight: 1.78,
            marginBottom: 34,
            animationDelay: ".18s",
            maxWidth: 450,
          }}
        >
          From concept to creation in days. Every product precision-printed on-demand — infinitely
          customisable, shipped to your door.
        </p>
        <div
          className="fu"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", animationDelay: ".26s" }}
        >
          <button
            className="btn-coral"
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Products →
          </button>
          <button
            className="btn-white"
            onClick={() =>
              document.getElementById("custom-order")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ✏️ Customise Yours
          </button>
        </div>
        <div
          className="fu hero-stats"
          style={{ display: "flex", gap: 36, marginTop: 42, animationDelay: ".34s" }}
        >
          {[
            ["500+", "Products", "#FF6B6B"],
            ["4.9 ★", "Avg Rating", "#FF9F43"],
            ["2,000+", "Happy Orders", "#0ABFBC"],
          ].map(([n, l, c]) => (
            <div key={l}>
              <div className="fr" style={{ fontSize: 25, fontWeight: 900, color: c }}>
                {n}
              </div>
              <div style={{ fontSize: 12, color: "#9B9BBB", fontWeight: 700, marginTop: 2 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hero visual */}
      <div
        className="hide-m"
        style={{
          flex: "0 0 auto",
          position: "relative",
          width: 400,
          height: 400,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            width: 310,
            height: 310,
            borderRadius: "50%",
            background: "radial-gradient(circle,#FFF0E6,#FFDDC0)",
          }}
        />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="158" fill="none" stroke="#FF9F43" strokeWidth="1.5" strokeDasharray="6 10" opacity=".45" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#0ABFBC" strokeWidth="1.5" strokeDasharray="4 8" opacity=".35" />
        </svg>
        {PRODUCTS.slice(0, 5).map((p, i) => {
          const angle = (i / 5) * 360 - 90,
            rad = (angle * Math.PI) / 180,
            r = 158;
          const x = 200 + r * Math.cos(rad) - 26,
            y = 200 + r * Math.sin(rad) - 26;
          return (
            <div
              key={p.id}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: 52,
                height: 52,
                borderRadius: 16,
                background: p.bg,
                border: `2px solid ${p.accent}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                boxShadow: `0 4px 14px ${p.accent}22`,
                animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <img
                src={p.img[0]}
                alt={p.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain"
                }}
              />
            </div>
          );
        })}
        <div
          className="float"
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            width: 88,
            height: 88,
            borderRadius: 26,
            background: "linear-gradient(135deg,#FF6B6B,#FF9F43)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            boxShadow: "0 12px 40px #FF6B6B44",
          }}
        >
          <img src={customImg} alt="Custom 3D Print" style={{ width: 60, height: 60, objectFit: "contain" }} />
        </div>
      </div>
    </section>
  );
}
