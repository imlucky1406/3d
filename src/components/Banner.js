import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  const handleCustomOrder = () => {
    const element = document.getElementById("custom-order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("custom-order")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <section
      className="section-pad"
      style={{
        background: "linear-gradient(135deg,#FF6B6B 0%,#FF9F43 55%,#FFD580 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -70,
          left: -70,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(255,255,255,.14)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255,255,255,.10)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            fontSize: 52,
            marginBottom: 14,
          }}
          className="float"
        >
          🚀
        </div>
        <h2
          className="fr"
          style={{
            fontSize: "clamp(26px,5vw,50px)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: 18,
            lineHeight: 1.15,
          }}
        >
          Turn Your Ideas into Reality with 3D Printing
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,.88)",
            fontSize: 17,
            marginBottom: 34,
            lineHeight: 1.68,
          }}
        >
          Join 2,000+ happy customers. Fast turnaround, premium materials, free revisions.
        </p>
        <button
          onClick={handleCustomOrder}
          style={{
            background: "#fff",
            color: "#FF6B6B",
            border: "none",
            borderRadius: 999,
            padding: "17px 40px",
            fontSize: 17,
            fontWeight: 900,
            cursor: "pointer",
            fontFamily: "Nunito,sans-serif",
            transition: "all .25s",
            boxShadow: "0 8px 32px rgba(0,0,0,.15)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-4px)";
            e.target.style.boxShadow = "0 16px 48px rgba(0,0,0,.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "none";
            e.target.style.boxShadow = "0 8px 32px rgba(0,0,0,.15)";
          }}
        >
          ✨ Start Custom Order
        </button>
      </div>
    </section>
  );
}
