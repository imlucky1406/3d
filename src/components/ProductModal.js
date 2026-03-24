import React, { useState, useEffect } from "react";
import ModelViewer from "./ModelViewer";
import { openWhatsAppForProduct } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ProductModal({ activeProduct, onClose }) {
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    if (activeProduct) {
      setModalImgIdx(0);
      setShow3D(false);
    }
  }, [activeProduct]);

  useEffect(() => {
    if (!activeProduct) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeProduct]);

  useEffect(() => {
    if (!activeProduct) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeProduct, onClose]);

  if (!activeProduct) return null;

  const arrowBtn = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 42,
    height: 42,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,.85)",
    background: "rgba(255,255,255,.94)",
    cursor: "pointer",
    fontSize: 20,
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 18px rgba(28,28,46,.12), 0 1px 4px rgba(28,28,46,.08)",
    zIndex: 5,
    transition: "transform .2s, box-shadow .2s",
  };

  return (
    <div className="product-modal-fs" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
      <div className="product-modal-fs-inner">
        <button type="button" className="product-modal-close" onClick={onClose} aria-label="Close product details">
          ✕
        </button>

        <div className="product-modal-media product-modal-panel">
          <div
            className="product-modal-img-wrap"
            style={{
              background: activeProduct.bg,
              boxShadow: `inset 0 0 0 1px ${activeProduct.accent}28`,
            }}
          >
            {show3D ? (
              <div style={{ position: "absolute", inset: 0, minHeight: 200 }}>
                <ModelViewer key={activeProduct.model} model={activeProduct.model} fillContainer />
              </div>
            ) : Array.isArray(activeProduct.img) ? (
              activeProduct.img[modalImgIdx].startsWith("/") ? (
                <img
                  src={activeProduct.img[modalImgIdx]}
                  alt={activeProduct.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              ) : (
                <span style={{ fontSize: "clamp(48px, 15vmin, 120px)", lineHeight: 1 }}>{activeProduct.img[modalImgIdx]}</span>
              )
            ) : (
              <span style={{ fontSize: "clamp(48px, 15vmin, 120px)", lineHeight: 1 }}>{activeProduct.img}</span>
            )}

            {Array.isArray(activeProduct.img) && activeProduct.img.length > 1 && !show3D && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setModalImgIdx((i) => (i - 1 + activeProduct.img.length) % activeProduct.img.length)
                  }
                  style={{ ...arrowBtn, left: 16 }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => setModalImgIdx((i) => (i + 1) % activeProduct.img.length)}
                  style={{ ...arrowBtn, right: 16 }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>

        <div className="product-modal-details product-modal-panel">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: 999,
                background: activeProduct.bg,
                color: activeProduct.accent,
                border: `1.5px solid ${activeProduct.accent}33`,
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              {activeProduct.category}
            </div>
            {activeProduct.tag && (
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: 999,
                  background: "#FF6B6B",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 800,
                }}
              >
                {activeProduct.tag}
              </div>
            )}
          </div>
          <h3
            id="product-modal-title"
            className="fr"
            style={{
              fontWeight: 900,
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#1C1C2E",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            {activeProduct.name}
          </h3>
          <p
            style={{
              color: "#5C5C78",
              marginBottom: 18,
              lineHeight: 1.65,
              fontSize: 15,
            }}
          >
            {activeProduct.desc}
          </p>
          <div
            style={{
              display: "flex",
              gap: 20,
              marginBottom: 16,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 14, color: "#9B9BBB", fontWeight: 700 }}>
              ⏱ Print time: <span style={{ color: "#1C1C2E" }}>{activeProduct.time}</span>
            </span>
            <span style={{ fontSize: 14, color: "#9B9BBB", fontWeight: 700 }}>📦 Ships in 3–5 days</span>
          </div>
          <div
            className="product-modal-actions"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              paddingTop: 18,
              marginTop: 8,
              borderTop: "1px solid rgba(28, 28, 46, 0.06)",
            }}
          >
            <div
              className="fr"
              style={{
                fontWeight: 900,
                fontSize: "clamp(26px, 5vw, 34px)",
                color: "#FF6B6B",
              }}
            >
              ${activeProduct.price}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                type="button"
                style={{
                  background: show3D ? activeProduct.bg : "#F5F4F0",
                  border: show3D ? `2px solid ${activeProduct.accent}` : "1px solid #D1D1D1",
                  borderRadius: 10,
                  padding: "12px 20px",
                  cursor: activeProduct.model ? "pointer" : "not-allowed",
                  color: "#6B6B8A",
                  fontSize: 13,
                  fontWeight: 700,
                  minHeight: 44,
                }}
                disabled={!activeProduct.model}
                onClick={() => setShow3D((prev) => !prev)}
              >
                {show3D ? "Go Back" : "360° View 🔄"}
              </button>
              <button
                type="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "12px 22px",
                  fontSize: 14,
                  minHeight: 44,
                  fontWeight: 800,
                  fontFamily: "Nunito, sans-serif",
                  background: activeProduct.accent,
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  cursor: "pointer",
                  boxShadow: `0 6px 20px ${activeProduct.accent}55`,
                  transition: "transform .2s, box-shadow .2s",
                }}
                onClick={() => {
                  openWhatsAppForProduct(activeProduct);
                  onClose();
                }}
              >
                <WhatsAppIcon size={22} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
