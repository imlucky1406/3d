import React from "react";

export default function Contact() {
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
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-100px",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle,#CCF9F455,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 800, textAlign: "center", position: "relative" }}>
          <div className="pill fu" style={{ marginBottom: 24, justifyContent: "center" }}>
            📬 Talk to the Print3D Team
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
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "clamp(16px,2vw,18px)",
              color: "#4A4A5E",
              lineHeight: 1.72,
              fontWeight: 500,
            }}
          >
            Questions about an order, a custom idea, or our 3D printing process? Send us a
            message and we&apos;ll get back to you as soon as possible.
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
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
          }}
          className="two-col"
        >
          {/* Contact Form */}
          <div>
            <div className="slabel">✦ Send us a message</div>
            <h2
              className="fr"
              style={{
                fontSize: "clamp(28px,4vw,40px)",
                fontWeight: 900,
                color: "#1C1C2E",
                marginBottom: 16,
              }}
            >
              We&apos;re here to help
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#5C5C6E",
                lineHeight: 1.7,
                marginBottom: 26,
              }}
            >
              Use the form below to reach our support team. We typically reply within one
              business day.
            </p>

            <form
              action="https://formsubmit.co/mrningstr50@gmail.com"
              method="POST"
              style={{
                background: "#fff",
                border: "2px solid #EAE8F2",
                borderRadius: 26,
                padding: 30,
                boxShadow: "0 8px 40px rgba(0,0,0,.06)",
              }}
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="Print3D – New Contact Message" />
              {/* <input type="hidden" name="_captcha" value="false" /> */}
              <input type="hidden" name="_template" value="table" />

              <div
                className="fr"
                style={{
                  fontWeight: 900,
                  fontSize: 19,
                  color: "#1C1C2E",
                  marginBottom: 22,
                }}
              >
                Contact Print3D Support 💬
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div>
                  <label
                    style={{
                      fontSize: 11,
                      color: "#6B6B8A",
                      display: "block",
                      marginBottom: 7,
                      fontWeight: 800,
                    }}
                  >
                    FULL NAME <span style={{ color: "#FF6B6B" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Alex Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: 11,
                      color: "#6B6B8A",
                      display: "block",
                      marginBottom: 7,
                      fontWeight: 800,
                    }}
                  >
                    EMAIL <span style={{ color: "#FF6B6B" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label
                  style={{
                    fontSize: 11,
                    color: "#6B6B8A",
                    display: "block",
                    marginBottom: 7,
                    fontWeight: 800,
                  }}
                >
                  SUBJECT <span style={{ color: "#FF6B6B" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Subject"
                  placeholder="Question about my order / new project idea"
                  required
                />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label
                  style={{
                    fontSize: 11,
                    color: "#6B6B8A",
                    display: "block",
                    marginBottom: 7,
                    fontWeight: 800,
                  }}
                >
                  MESSAGE <span style={{ color: "#FF6B6B" }}>*</span>
                </label>
                <textarea
                  name="Message"
                  placeholder="Tell us how we can help. If this is about an order, include your order number."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-coral"
                style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "15px" }}
              >
                ✉️ Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="slabel">✦ Other ways to reach us</div>
            <h3
              className="fr"
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: "#1C1C2E",
                marginBottom: 18,
              }}
            >
              Prefer email or social?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "#5C5C6E",
                lineHeight: 1.7,
                marginBottom: 22,
              }}
            >
              You can also connect with us using the details below. For anything related to
              active orders, the form is usually fastest.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 26 }}>
              <div style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 11,
                    background: "#FFF0E6",
                    border: "1.5px solid #FFD4AA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  📧
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#1C1C2E",
                      marginBottom: 4,
                    }}
                  >
                    Email
                  </div>
                  <div style={{ fontSize: 14, color: "#6B6B8A", fontWeight: 600 }}>
                    support@print3d.com
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 11,
                    background: "#E6FFFE",
                    border: "1.5px solid #0ABFBC44",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  📍
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#1C1C2E",
                      marginBottom: 4,
                    }}
                  >
                    Studio
                  </div>
                  <div style={{ fontSize: 14, color: "#6B6B8A", fontWeight: 600 }}>
                    Print3D Studio, Tech Park<br />
                    123 Maker Street, Innovation City
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 11,
                    background: "#F0F4FF",
                    border: "1.5px solid #4C6FFF44",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  ⏱️
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#1C1C2E",
                      marginBottom: 4,
                    }}
                  >
                    Hours
                  </div>
                  <div style={{ fontSize: 14, color: "#6B6B8A", fontWeight: 600 }}>
                    Monday – Friday: 9:00 – 18:00<br />
                    Weekend production for rush orders.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

