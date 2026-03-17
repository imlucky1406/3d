import React, { useState, useEffect } from "react";
import ModelViewer from "./ModelViewer";

export default function ProductModal({ activeProduct, onClose, onAddToCart }) {
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    if (activeProduct) {setModalImgIdx(0);setShow3D(false);}
  }, [activeProduct]);

  if (!activeProduct) return null;

  return (
    <div
      className="modal-wrap"
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
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
          <button
            onClick={onClose}
            style={{
              background: "#F5F4F0",
              border: "none",
              color: "#6B6B8A",
              fontSize: 16,
              cursor: "pointer",
              borderRadius: 10,
              width: 34,
              height: 34,
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            height: 190,
            borderRadius: 20,
            marginBottom: 22,
            background: activeProduct.bg,
            border: `2px solid ${activeProduct.accent}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
            position: "relative",
            overflow: "hidden",
          }}
          className="float"
        >
        {show3D ? (
            <ModelViewer key={activeProduct.model} model={activeProduct.model} />
        ) : (Array.isArray(activeProduct.img) ? (
          activeProduct.img[modalImgIdx].startsWith("/") ? (
            <img
              src={activeProduct.img[modalImgIdx]}
              alt={activeProduct.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center"
              }}
            />
          ) : (
            activeProduct.img[modalImgIdx]
          )
        ) : (
          activeProduct.img
        ))
        }
          {Array.isArray(activeProduct.img) && activeProduct.img.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setModalImgIdx((i) =>
                    (i - 1 + activeProduct.img.length) % activeProduct.img.length
                  )
                }
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "none",
                  background: "#FFFFFFDD",
                  cursor: "pointer",
                  fontSize: 18,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,.12)",
                }}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() =>
                  setModalImgIdx((i) => (i + 1) % activeProduct.img.length)
                }
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "none",
                  background: "#FFFFFFDD",
                  cursor: "pointer",
                  fontSize: 18,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,.12)",
                }}
              >
                ›
              </button>
            </>
          )}
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
              marginBottom: 12,
            }}
          >
            {activeProduct.tag}
          </div>
        )}
        <h3
          className="fr"
          style={{
            fontWeight: 900,
            fontSize: 24,
            color: "#1C1C2E",
            marginBottom: 10,
          }}
        >
          {activeProduct.name}
        </h3>
        <p
          style={{
            color: "#6B6B8A",
            marginBottom: 18,
            lineHeight: 1.7,
            fontSize: 14,
          }}
        >
          {activeProduct.desc}
        </p>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 26,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 13, color: "#9B9BBB", fontWeight: 700 }}>
            ⏱ Print time: <span style={{ color: "#1C1C2E" }}>{activeProduct.time}</span>
          </span>
          <span style={{ fontSize: 13, color: "#9B9BBB", fontWeight: 700 }}>
            📦 Ships in 3–5 days
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <div
            className="fr"
            style={{
              fontWeight: 900,
              fontSize: 30,
              color: "#FF6B6B",
            }}
          >
            ${activeProduct.price}
          </div>
            <div style={{ display: "flex", gap: 10 }}>
                <button
                style={{
                    background: show3D ? activeProduct.bg : "#F5F4F0",
                    border: show3D
                    ? `2px solid ${activeProduct.accent}`
                    : "1px solid #D1D1D1",
                    borderRadius: 10,
                    padding: "13px 22px",
                    cursor: "pointer",
                    color: "#6B6B8A",
                    fontSize: 12,
                    fontWeight: 700,
                }}
                disabled={!activeProduct.model}
                onClick={() => setShow3D((prev) => !prev)}
                >
                {show3D ? "Go Back" : "360° View 🔄"}
                </button>
                <button
                    style={{
                    background: activeProduct.accent,
                    border: "none",
                    borderRadius: 10,
                    padding: "8px 14px",
                    cursor: "pointer",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 800,
                    boxShadow: `0 4px 14px ${activeProduct.accent}44`,
                    transition: "transform .2s",
                    }}
                    onClick={() => {
                    onAddToCart(activeProduct);
                    onClose();
                    }}
                >
                    Add to Cart 🛒
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
