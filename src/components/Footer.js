import React from "react";
import { useNavigate } from "react-router-dom";

const FOOTER_LINKS = {
  "About Us": "/about",
  "Contact": "/contact",
  "Returns": "/returns",
  "Privacy Policy": "/privacy",
  "Terms of Service": "/terms",
};

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer style={{ padding: "56px 40px 28px", background: "#1C1C2E" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 36,
            marginBottom: 44,
          }}
          className="two-col"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginBottom: 14,
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  background: "linear-gradient(135deg,#FF6B6B,#FF9F43)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                🖨️
              </div>
              <span className="fr" style={{ fontSize: 21, fontWeight: 900, color: "#fff" }}>
                Print<span style={{ color: "#FF6B6B" }}>3D</span>
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,.4)",
                fontSize: 13,
                lineHeight: 1.75,
                maxWidth: 240,
              }}
            >
              Premium 3D printed products, on demand. Crafted with precision, shipped with care. 🌟
            </p>
          </div>
          {[
            {
              title: "Products",
              links: ["Home Decor", "Office", "Gaming", "Gifts", "Tools"],
            },
            {
              title: "Company",
              links: ["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service"],
            },
            {
              title: "Support",
              links: ["FAQ", "Shipping", "Returns", "Contact"],
            },
          ].map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontWeight: 900,
                    color: "#fff",
                    marginBottom: 14,
                    fontSize: 13,
                    letterSpacing: ".06em",
                  }}
                >
                  {col.title.toUpperCase()}
                </div>
                {col.links.map((l) => {
                  const path = FOOTER_LINKS[l];
                  return (
                    <div
                      key={l}
                      style={{
                        color: "rgba(255,255,255,.38)",
                        fontSize: 13,
                        marginBottom: 9,
                        cursor: path ? "pointer" : "default",
                        fontWeight: 600,
                        transition: "color .2s",
                      }}
                      onClick={() => {
                        if (path) {
                          navigate(path);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      onMouseEnter={(e) => {
                        if (path) e.target.style.color = "#FF9F43";
                      }}
                      onMouseLeave={(e) => {
                        if (path) e.target.style.color = "rgba(255,255,255,.38)";
                      }}
                    >
                      {l}
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
        <div
          style={{
            borderTop: "1.5px solid rgba(255,255,255,.08)",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div style={{ color: "rgba(255,255,255,.28)", fontSize: 12, fontWeight: 600 }}>
            © 2026 Print3D. All rights reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,.28)", fontSize: 12, fontWeight: 600 }}>
            Secure payments via Stripe 🔒
          </div>
        </div>
      </div>
    </footer>
  );
}
