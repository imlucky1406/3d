import React from "react";
import Banner from "../components/Banner";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "90vh",
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
        <div style={{ maxWidth: 700, textAlign: "center", position: "relative" }}>
          <div className="pill fu" style={{ marginBottom: 24, justifyContent: "center" }}>
            🎯 Our Mission
          </div>
          <h1
            className="fr fu"
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              fontWeight: 900,
              color: "#1C1C2E",
              marginBottom: 24,
              lineHeight: 1.1,
            }}
          >
            We Bring Your Imagination to Life
          </h1>
          <p
            style={{
              fontSize: "clamp(16px,2vw,19px)",
              color: "#4A4A5E",
              lineHeight: 1.72,
              marginBottom: 32,
              fontWeight: 500,
            }}
          >
            Print3D is a team of passionate creators dedicated to making 3D printing
            accessible, affordable, and incredible. From concept to delivery, we handle
            every detail so you can focus on building something amazing.
          </p>
          <button
            className="btn-coral"
            onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
            style={{ cursor: "pointer" }}
          >
            Learn Our Story
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section
        id="story"
        style={{
          padding: "100px 40px",
          background: "#FDFCF8",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
            className="two-col"
          >
            {/* Left: Text */}
            <div>
              <div className="slabel">Our Story</div>
              <h2
                className="fr"
                style={{
                  fontSize: "clamp(32px,5vw,48px)",
                  fontWeight: 900,
                  color: "#1C1C2E",
                  marginBottom: 24,
                  lineHeight: 1.2,
                }}
              >
                From Dreams to Details
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#5C5C6E",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                Print3D started in 2021 when our founder realized that 3D printing was the
                future of manufacturing — but it was complex, expensive, and inaccessible to
                most people.
              </p>
              <p
                style={{
                  fontSize: 17,
                  color: "#5C5C6E",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                We decided to change that. Today, we've printed over <strong>50,000+ custom
                objects</strong> for designers, entrepreneurs, and makers worldwide. Each
                project tells a story — and we're proud to be part of yours.
              </p>
              <p
                style={{
                  fontSize: 17,
                  color: "#5C5C6E",
                  lineHeight: 1.8,
                }}
              >
                From architectural models to personalized gifts, our printers work 24/7 to
                bring imagination to reality. Quality, precision, and passion — that's the
                Print3D difference.
              </p>
            </div>

            {/* Right: Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              {[
                { num: "500+", label: "Projects Completed", accent: "#FF6B6B", bg: "#FFF0F0" },
                { num: "2,400+", label: "Happy Customers", accent: "#0ABFBC", bg: "#E6FFFE" },
                { num: "24/7", label: "Production Time", accent: "#FF9F43", bg: "#FFF4E6" },
                { num: "3-7 Days", label: "Avg Delivery", accent: "#27AE60", bg: "#EDFFF5" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: stat.bg,
                    border: `2px solid ${stat.accent}33`,
                    borderRadius: 20,
                    padding: 32,
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at top right,${stat.accent}11,transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    className="fr"
                    style={{
                      fontSize: "clamp(24px,4vw,36px)",
                      fontWeight: 900,
                      color: stat.accent,
                      marginBottom: 8,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#5C5C6E",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          padding: "100px 40px",
          background: "linear-gradient(135deg,#F8FAFE 0%,#FFF8F0 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="slabel">Why We Do It</div>
            <h2
              className="fr"
              style={{
                fontSize: "clamp(32px,5vw,48px)",
                fontWeight: 900,
                color: "#1C1C2E",
                marginBottom: 16,
              }}
            >
              Our Core Values
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "#5C5C6E",
                maxWidth: 580,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              At the heart of everything we do are these four pillars.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 28,
            }}
            className="g3"
          >
            {[
              {
                icon: "⚡",
                title: "Speed",
                desc: "Fast prototyping without compromise. From order to delivery in 3–7 days.",
                accent: "#FF6B6B",
                bg: "#FFF0F0",
              },
              {
                icon: "💎",
                title: "Quality",
                desc: "Premium materials and precision printing. Every print is perfection.",
                accent: "#0ABFBC",
                bg: "#E6FFFE",
              },
              {
                icon: "🤝",
                title: "Transparency",
                desc: "Real-time updates, honest pricing, no hidden fees. What you see is what you get.",
                accent: "#FF9F43",
                bg: "#FFF4E6",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "Eco-friendly materials and responsible manufacturing practices.",
                accent: "#27AE60",
                bg: "#EDFFF5",
              },
            ].map((value, i) => (
              <div
                key={i}
                style={{
                  background: value.bg,
                  border: `2px solid ${value.accent}33`,
                  borderRadius: 24,
                  padding: 32,
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all .3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px ${value.accent}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at top right,${value.accent}15,transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ fontSize: 48, marginBottom: 16 }}>{value.icon}</div>
                <h3
                  className="fr"
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#1C1C2E",
                    marginBottom: 12,
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#5C5C6E",
                    lineHeight: 1.6,
                  }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section
        style={{
          padding: "100px 40px",
          background: "#FDFCF8",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="slabel">The Crew</div>
            <h2
              className="fr"
              style={{
                fontSize: "clamp(32px,5vw,48px)",
                fontWeight: 900,
                color: "#1C1C2E",
                marginBottom: 16,
              }}
            >
              Meet the Experts Behind Print3D
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "#5C5C6E",
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Our diverse team brings together expertise in engineering, design, and customer
              service. We're obsessed with getting every detail right.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 28,
            }}
            className="g3"
          >
            {[
              { name: "Alex Chen", role: "Founder & CEO", emoji: "👨‍💼", accent: "#FF6B6B" },
              { name: "Jordan Park", role: "Head of Engineering", emoji: "👩‍🔧", accent: "#0ABFBC" },
              { name: "Maya Patel", role: "Design Lead", emoji: "👩‍🎨", accent: "#FF9F43" },
              { name: "David Silva", role: "Customer Success", emoji: "👨‍💻", accent: "#27AE60" },
            ].map((member, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    fontSize: 64,
                    marginBottom: 16,
                    borderRadius: "50%",
                    width: 100,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    background: `${member.accent}15`,
                    border: `2px solid ${member.accent}33`,
                  }}
                >
                  {member.emoji}
                </div>
                <h3
                  className="fr"
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#1C1C2E",
                    marginBottom: 6,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: member.accent,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section
        style={{
          padding: "100px 40px",
          background: "linear-gradient(135deg,#F0FAFF 0%,#FFF0E6 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div className="slabel">The Advantage</div>
            <h2
              className="fr"
              style={{
                fontSize: "clamp(32px,5vw,48px)",
                fontWeight: 900,
                color: "#1C1C2E",
                marginBottom: 16,
              }}
            >
              Why Choose Print3D?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
            className="two-col"
          >
            {[
              { icon: "🎯", title: "Custom Solutions", desc: "From ready-made designs to fully bespoke creations tailored to your vision." },
              { icon: "🏆", title: "Expert Craftsmanship", desc: "50,000+ projects completed with 99.2% customer satisfaction rate." },
              { icon: "💰", title: "Fair Pricing", desc: "Transparent pricing with no surprises. Competitive rates for premium quality." },
              { icon: "🚀", title: "Fast Turnaround", desc: "Average 3–7 day delivery. Rush options available for urgent projects." },
              { icon: "♻️", title: "Premium Materials", desc: "PLA, PETG, ABS, TPU, and specialty filaments from trusted suppliers." },
              { icon: "📱", title: "Real-Time Updates", desc: "Track your print in real-time with photos and progress notifications." },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: 28,
                  background: "rgba(255,255,255,.6)",
                  border: "2px solid rgba(255,255,255,.8)",
                  borderRadius: 20,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontSize: 40, flex: "0 0 60px" }}>{feature.icon}</div>
                <div>
                  <h3
                    className="fr"
                    style={{
                      fontSize: 18,
                      fontWeight: 900,
                      color: "#1C1C2E",
                      marginBottom: 8,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#5C5C6E",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <Banner />
    </>
  );
}
