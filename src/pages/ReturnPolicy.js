import React from "react";

export default function ReturnPolicy() {
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
            📦 Hassle-Free Returns
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
            Return & Refund Policy
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
              title: "1. Overview",
              content:
                "Because every Print3D product is made-to-order using 3D printing, many items are customised or produced specifically for you. We always aim for perfection, and this policy explains when returns, refunds, or reprints are available.",
            },
            {
              title: "2. Eligibility for Returns",
              content:
                "You may be eligible for a return or reprint if your item arrives damaged, defective, incorrect compared to the approved model or description, or significantly delayed due to an issue on our side. Normal variations inherent to 3D printing (minor layer lines, small surface artefacts) are not considered defects.",
            },
            {
              title: "3. Custom & Personalised Orders",
              content:
                "Custom and personalised prints (for example: your own STL files, custom text, bespoke dimensions or colours) are generally non-refundable once production has started. If there is a printing or quality issue caused by us, we will offer a free reprint or an appropriate partial refund instead of a simple change-of-mind return.",
            },
            {
              title: "4. Reporting an Issue",
              content:
                "If there is a problem with your order, please contact us within 7 days of delivery with your order number, a description of the issue, and clear photos of the product and packaging. This helps our team quickly assess the situation and propose a solution.",
            },
            {
              title: "5. Accepted Resolutions",
              content:
                "Depending on the issue, we may offer: a free reprint of the item, a partial refund, a full refund, or a store credit for a future order. We will always try to repair the situation in the way that best matches the problem while being fair and transparent.",
            },
            {
              title: "6. Return Shipping",
              content:
                "If we ask you to send an item back for inspection, we will provide instructions and, where appropriate, a prepaid return label. Items must be returned in their original condition and packaging. Unauthorised returns may not be accepted or refunded.",
            },
            {
              title: "7. Non-Returnable Items",
              content:
                "We cannot accept returns for items that have been used, modified, exposed to high heat or chemicals, or damaged due to incorrect handling or installation. Clearance items, prototypes, and test prints are also non-returnable unless they arrive damaged in transit.",
            },
            {
              title: "8. Colour & Material Variations",
              content:
                "Filament colours and finishes may vary slightly between batches and screens. Minor differences in shade, gloss, or texture are normal and not considered a defect. We always try to match your chosen colour and material as closely as possible.",
            },
            {
              title: "9. Order Cancellations",
              content:
                "Because printing often begins shortly after your order is placed, cancellations are only possible before production has started. If you wish to cancel, please contact us as soon as possible. Once printing is in progress, we may not be able to cancel or refund the order in full.",
            },
            {
              title: "10. Contact",
              content:
                "If you have any questions about this Return & Refund Policy or need help with an existing order, please contact us at support@print3d.com. Our team will be happy to assist you.",
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

