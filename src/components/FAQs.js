import React, { useState } from "react";

const FAQS = [
  {
    id: 1,
    question: "How long does 3D printing take?",
    answer:
      "Print time depends on the size and complexity of your product. Most items take between 2-8 hours to print. Once complete, we handle post-processing, quality checks, and packaging. Your order ships within 3-7 business days from order confirmation.",
  },
  {
    id: 2,
    question: "What materials do you offer?",
    answer:
      "We offer 4 premium materials: PLA (biodegradable, vivid colours), PETG (food-safe, moisture-resistant), ABS (high impact resistance), and TPU (flexible, rubber-like). Each material has different strength characteristics suited for different applications.",
  },
  {
    id: 3,
    question: "Can I customize products?",
    answer:
      "Absolutely! You can customize colour, size, material, and add personalized text or engravings. If you have your own 3D model or design idea, we can work with STL files, OBJ files, or even reference images. Just submit a quote request.",
  },
  {
    id: 4,
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! For orders of 10+ units, we provide special bulk pricing. Contact our sales team directly or submit a quote request with bulk details, and we'll provide custom pricing for your large order.",
  },
  {
    id: 5,
    question: "What's your return policy?",
    answer:
      "We stand behind our quality. If you receive a damaged product, we'll reprint and reship at no cost. For custom orders, returns are accepted within 14 days if the product doesn't meet specifications. Check our full returns policy for details.",
  },
  {
    id: 6,
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking link via email. You can monitor real-time updates on your package's location and expected delivery date. We also send progress photos during the 3D printing process if requested.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      style={{
        background: "#fff",
        border: "2px solid #EAE8F2",
        borderRadius: 16,
        overflow: "hidden",
        transition: "all .3s",
        boxShadow: isOpen ? "0 8px 24px rgba(0,0,0,.08)" : "0 2px 8px rgba(0,0,0,.04)",
      }}
    >
      <button
        onClick={() => onToggle(faq.id)}
        style={{
          width: "100%",
          padding: "18px 24px",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "background .2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#FDFCF8")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
      >
        <span style={{ fontWeight: 800, fontSize: 16, color: "#1C1C2E" }}>
          {faq.question}
        </span>
        <div
          style={{
            fontSize: 20,
            color: "#FF6B6B",
            transition: "transform .3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
            marginLeft: 12,
          }}
        >
          ▼
        </div>
      </button>
      {isOpen && (
        <div
          style={{
            padding: "0 24px 18px 24px",
            borderTop: "1.5px solid #F5F4F0",
            color: "#6B6B8A",
            fontSize: 14,
            lineHeight: 1.75,
          }}
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default function FAQs() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section style={{ padding: "76px 40px", background: "#FDFCF8" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="slabel" style={{ display: "flex", justifyContent: "center" }}>
            ✦ Questions?
          </div>
          <h2
            className="fr"
            style={{
              fontSize: "clamp(26px,4vw,42px)",
              fontWeight: 900,
              color: "#1C1C2E",
              marginBottom: 16,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              color: "#6B6B8A",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Everything you need to know about our 3D printing services, materials, customization options, and shipping.
          </p>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {FAQS.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={toggleFAQ}
            />
          ))}
        </div>

        <div
          style={{
            marginTop: 44,
            padding: 28,
            background: "#FFF0E6",
            border: "2px solid #FFD4AA",
            borderRadius: 20,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 20, marginBottom: 12 }}>💬</div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 16,
              color: "#1C1C2E",
              marginBottom: 8,
            }}
          >
            Didn't find what you're looking for?
          </div>
          <p
            style={{
              color: "#6B6B8A",
              fontSize: 14,
              marginBottom: 16,
              lineHeight: 1.6,
            }}
          >
            Contact our friendly support team. We're here to help!
          </p>
          <button
            className="btn-coral"
            style={{
              fontSize: 14,
            }}
          >
            Get in Touch →
          </button>
        </div>
      </div>
    </section>
  );
}
