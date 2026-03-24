import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(96px, 18vw, 140px) clamp(16px, 5vw, 40px) clamp(48px, 10vw, 80px)",
          background: "linear-gradient(155deg,#FFFDF8 0%,#F0F8FF 45%,#E8FFFB 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-100px",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle,#E3F2FD99,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 800, textAlign: "center", position: "relative" }}>
          <div className="pill fu" style={{ marginBottom: 24, justifyContent: "center" }}>
            🔒 Your Privacy Matters
          </div>
          <h1
            className="fr"
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              fontWeight: 900,
              color: "#1C1C2E",
              marginBottom: 24,
              lineHeight: 1.1,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "clamp(16px,2vw,18px)",
              color: "#4A4A5E",
              lineHeight: 1.72,
              fontWeight: 500,
            }}
          >
            Last updated: March 17, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: "clamp(48px, 10vw, 100px) clamp(16px, 5vw, 40px)",
          background: "#FDFCF8",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {[
            {
              title: "1. Introduction",
              content:
                "Print3D ('we', 'us', 'our') operates the Print3D website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information. Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our services.",
            },
            {
              title: "2. Information We Collect",
              content:
                "We collect information you provide directly (name, email, phone, address), information from transactions (order details, payment info), technical information (IP address, browser type, device info), and cookies/tracking data. We collect this to process orders, communicate with you, improve our services, and comply with legal obligations.",
            },
            {
              title: "3. How We Use Your Information",
              content:
                "We use your information to process and fulfill orders, send transactional emails, respond to inquiries, improve our website and services, send marketing communications (with your consent), detect and prevent fraud, and comply with legal requirements. You can opt-out of marketing emails at any time.",
            },
            {
              title: "4. Information Sharing",
              content:
                "We do not sell your personal information. We may share information with service providers (payment processors, shipping partners), legal authorities when required, and successors if Print3D is acquired. All third parties are bound by confidentiality agreements.",
            },
            {
              title: "5. Data Security",
              content:
                "We implement appropriate technical and organizational measures to protect your information, including encryption, secure servers, and access controls. However, no transmission over the internet is 100% secure. We encourage you to protect your passwords.",
            },
            {
              title: "6. Your Rights",
              content:
                "You have the right to access, correct, or delete your personal information. You may also opt-out of communications and request we stop processing your data. To exercise these rights, contact us at privacy@print3d.com.",
            },
            {
              title: "7. Cookies",
              content:
                "We use cookies to enhance your experience, remember preferences, and analyze website usage. You can control cookies through your browser settings, though some features may not work properly.",
            },
            {
              title: "8. Third-Party Links",
              content:
                "Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing personal information.",
            },
            {
              title: "9. Children's Privacy",
              content:
                "Our services are not directed to children under 18. We do not knowingly collect information from children. If we become aware of such collection, we will delete the information promptly.",
            },
            {
              title: "10. Changes to This Policy",
              content:
                "We may update this policy periodically. We will notify you of significant changes via email or by posting on our website. Your continued use of our services constitutes acceptance of the updated policy.",
            },
            {
              title: "11. Contact Us",
              content:
                "If you have questions about this privacy policy or our privacy practices, please contact us at privacy@print3d.com or write to us at Print3D, 123 Main Street, Tech City, TC 12345.",
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2
                className="fr"
                style={{
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#FF6B6B",
                  marginBottom: 12,
                }}
              >
                {section.title}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#5C5C6E",
                  lineHeight: 1.8,
                }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
