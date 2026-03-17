import React from "react";

export default function TermsAndConditions() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "140px 40px 80px",
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
            📜 Please Read Carefully
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
            Terms &amp; Conditions
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
          padding: "100px 40px",
          background: "#FDFCF8",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {[
            {
              title: "1. Introduction",
              content:
                "These Terms and Conditions ('Terms') govern your use of the Print3D website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use Print3D.",
            },
            {
              title: "2. Services",
              content:
                "Print3D provides on-demand 3D printing, customisation, and related services. We may modify, suspend, or discontinue any part of the services at any time, with or without notice, while always attempting to honour existing confirmed orders.",
            },
            {
              title: "3. Orders & Acceptance",
              content:
                "When you place an order, you are making an offer to purchase a product or service. We reserve the right to accept or reject any order. Acceptance occurs when we send an order confirmation email or start production of your print.",
            },
            {
              title: "4. Pricing & Payments",
              content:
                "All prices are shown in your selected currency and include applicable taxes where required, unless stated otherwise. We may change prices at any time, but confirmed orders will not be affected. Payments are processed securely through our payment partners. By submitting payment information, you represent that you are authorised to use the selected payment method.",
            },
            {
              title: "5. Custom Models & Intellectual Property",
              content:
                "When you upload a 3D model or design, you represent that you own the necessary rights or have permission to use that content. You retain ownership of your designs, but grant Print3D a limited licence to use, modify, and print the files solely for the purpose of fulfilling your order.",
            },
            {
              title: "6. Prohibited Content",
              content:
                "You agree not to submit or request prints that are illegal, infringe on the intellectual property of others, promote hate or violence, or are intended for weapons or harmful use. We may cancel any order that violates this policy.",
            },
            {
              title: "7. Production Tolerances",
              content:
                "3D printing involves physical tolerances. Minor variations in colour, surface finish, or dimensions within reasonable manufacturing limits are normal and do not constitute defects. If critical tolerances are required, please clearly communicate them before ordering.",
            },
            {
              title: "8. Shipping & Delivery",
              content:
                "Estimated delivery times are provided for convenience and are not guaranteed. Delays may occur due to technical issues, high demand, or courier problems. Risk of loss passes to you once the order is handed over to the shipping carrier.",
            },
            {
              title: "9. Returns & Refunds",
              content:
                "Our Return & Refund Policy explains when returns, refunds, or reprints are available. By placing an order, you agree to review and be bound by that policy in addition to these Terms.",
            },
            {
              title: "10. Limitation of Liability",
              content:
                "To the maximum extent permitted by law, Print3D is not liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services. Our total liability for any claim related to an order is limited to the amount you paid for that order.",
            },
            {
              title: "11. User Accounts",
              content:
                "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately of any unauthorised use or security breach.",
            },
            {
              title: "12. Changes to These Terms",
              content:
                "We may update these Terms from time to time. When we do, we will update the 'Last updated' date at the top of this page. Your continued use of the services after changes are posted constitutes acceptance of the revised Terms.",
            },
            {
              title: "13. Governing Law",
              content:
                "These Terms are governed by the laws of the jurisdiction in which Print3D operates, without regard to conflict of law principles. Any disputes will be handled by the competent courts in that jurisdiction.",
            },
            {
              title: "14. Contact",
              content:
                "If you have questions about these Terms & Conditions, please contact us at legal@print3d.com.",
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

