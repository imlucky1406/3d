import React from "react";

export default function QuoteModal({ quoteOpen, onClose, custSize, custMat }) {
  if (!quoteOpen) return null;

  return (
    <div
      className="modal-wrap"
      onClick={onClose}
    >
      <div className="modal" style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ fontSize: 60, marginBottom: 14 }}>🎉</div>
        <h3
          className="fr"
          style={{
            fontWeight: 900,
            fontSize: 24,
            color: "#1C1C2E",
            marginBottom: 12,
          }}
        >
          Quote Request Sent!
        </h3>
        <p
          style={{
            color: "#6B6B8A",
            marginBottom: 26,
            lineHeight: 1.7,
            fontSize: 14,
          }}
        >
          Thanks! We got your request for a <strong style={{ color: "#FF6B6B" }}>{custSize}</strong> item
          in <strong style={{ color: "#FF6B6B" }}>{custMat}</strong>. Our team will reply with pricing and
          timeline in under 2 hours. 🚀
        </p>
        <button className="btn-coral" onClick={onClose} style={{ margin: "0 auto" }}>
          ✓ Awesome, Got It!
        </button>
      </div>
    </div>
  );
}
