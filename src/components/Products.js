import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data";

const ProductCard = ({ p, onAdd, onView, idx }) => {
  const [hov, setHov] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const totalImgs = Array.isArray(p.img) ? p.img.length : 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!totalImgs) return;
    setImgIdx((i) => (i - 1 + totalImgs) % totalImgs);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!totalImgs) return;
    setImgIdx((i) => (i + 1) % totalImgs);
  };

  return (
    <div
      onClick={onView}
      style={{
        background: "#fff",
        border: `2px solid ${hov ? p.accent + "33" : "#EAE8F2"}`,
        borderRadius: 24,
        padding: 22,
        cursor: "pointer",
        transform: hov ? "translateY(-10px)" : "none",
        transition: "transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s,border-color .35s",
        boxShadow: hov ? `0 24px 56px ${p.accent}15` : "0 2px 12px rgba(0,0,0,.04)",
        animation: "fadeUp .6s cubic-bezier(.22,1,.36,1) forwards",
        animationDelay: `${idx * 0.07}s`,
        opacity: 0,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        style={{
          height: 155,
          borderRadius: 18,
          marginBottom: 18,
          background: p.bg,
          border: `1.5px solid ${p.accent}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // fontSize: 60,
          position: "relative",
          overflow: "hidden",
          // transition: "transform .35s",
          transform: hov ? "scale(1.05) rotate(2deg)" : "scale(1)",
        }}
      >
        {Array.isArray(p.img) ? (
          p.img[imgIdx].startsWith("/") ? (
            <img
              src={p.img[imgIdx]}
              alt={p.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center"
              }}
            />
          ) : (
            p.img[imgIdx]
          )
        ) : (
          p.img
        )}
        {totalImgs > 1 && (
          <>
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "none",
                background: "#FFFFFFDD",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "none",
                background: "#FFFFFFDD",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>
          </>
        )}
        {p.tag && (
          <div
            style={{
              position: "absolute",
              top: 9,
              right: 9,
              padding: "3px 11px",
              borderRadius: 999,
              background:
                p.tag === "BESTSELLER" ? "#FF9F43" : p.tag === "NEW" ? "#0ABFBC" : "#FF6B6B",
              color: "#fff",
              fontSize: 10,
              fontWeight: 800,
            }}
          >
            {p.tag}
          </div>
        )}
      </div>
      <div style={{ fontSize: 10, color: "#9B9BBB", marginBottom: 7, fontWeight: 800, letterSpacing: ".07em" }}>
        {p.category} · ⏱ {p.time}
      </div>
      <div style={{ fontWeight: 800, fontSize: 16, color: "#1C1C2E", marginBottom: 7 }}>
        {p.name}
      </div>
      <div style={{ fontSize: 13, color: "#6B6B8A", lineHeight: 1.6, marginBottom: 16 }}>
        {p.desc}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 900,
            fontSize: 21,
            color: "#1C1C2E",
          }}
        >
          ${p.price}
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            onClick={onView}
            style={{
              background: "#F5F4F0",
              border: "none",
              borderRadius: 10,
              padding: "8px 13px",
              cursor: "pointer",
              color: "#6B6B8A",
              fontSize: 12,
              fontWeight: 700,
              transition: "background .2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#EAE8F2")}
            onMouseLeave={(e) => (e.target.style.background = "#F5F4F0")}
          >
            Preview
          </button>
          <button
            onClick={() => onAdd(p)}
            style={{
              background: p.accent,
              border: "none",
              borderRadius: 10,
              padding: "8px 14px",
              cursor: "pointer",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
              boxShadow: `0 4px 14px ${p.accent}44`,
              transition: "transform .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Products({ onAdd, onView }) {
  const navigate = useNavigate();

  return (
    <section id="products" style={{ padding: "76px 40px", background: "#FDFCF8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="slabel">✦ Featured Collection</div>
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: 34,
                    flexWrap: "wrap",
                    gap: 12,
                }}
                >
                <h2
                    className="fr"
                    style={{
                    fontSize: "clamp(26px,4vw,42px)",
                    fontWeight: 900,
                    color: "#1C1C2E",
                    }}
                >
                    Trending Products 🔥
                </h2>
                <span
                    onClick={() => {navigate("/viewproduct"); window.scrollTo({ top: 0, behavior: "smooth" });}}
                    
                    style={{ color: "#FF6B6B", fontSize: 14, cursor: "pointer", fontWeight: 800 }}
                >
                    View all →
                </span>
            </div>
        </div>
        <div style={{ display: "grid", width: "80%", margin: "0 auto", gridTemplateColumns: "repeat(3,minmax(300px,1fr))", gap: 22 }}>
          {PRODUCTS.slice(0, 6).map((p, i) => (
            <ProductCard key={p.id} p={p} onAdd={onAdd} onView={() => onView(p)} idx={i} />
          ))}
        </div>
    </section>
  );
}
