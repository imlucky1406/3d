import React, { useState } from "react";
import { MATERIALS } from "../data";
import customImg from "../assets/image/3D-printer.png";

export default function CustomOrder({ onQuoteOpen, onQuoteSuccess }) {
  const [custColor, setCustColor] = useState("#FF6B6B");
  const [custSize, setCustSize] = useState("M");
  const [custText, setCustText] = useState("");
  const [custMat, setCustMat] = useState("PLA");
  const [uploaded, setUploaded] = useState(false);
  const [quoteFile, setQuoteFile] = useState(null);
  const [quoteErrors, setQuoteErrors] = useState({ email: "", phone: "", file: "" });

  const FORMSUBMIT_EMAIL = "mrningstr50@gmail.com";

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
<<<<<<< HEAD
    const email = (form.Email && form.Email.value || "").trim();
    const phone = (form.Phone && form.Phone.value || "").trim();
=======
    const email = (form.Email?.value ?? "").trim();
    const phone = (form.Phone?.value ?? "").trim();
>>>>>>> 800ef92 (printer)
    const fileRequired = !quoteFile;
    const errs = {
      email: !email ? "This field is required" : "",
      phone: !phone ? "This field is required" : "",
      file: fileRequired ? "This field is required" : "",
    };
    setQuoteErrors(errs);
    if (errs.email || errs.phone || errs.file) return;

    const body = new FormData();
    body.append("_subject", "Print3D – New Quote Request");
    body.append("_captcha", "false");
    body.append("_template", "table");
    body.append("Material", custMat);
    body.append("Size", custSize);
    body.append("Colour", custColor);
    body.append("Custom text / instructions", custText || "(none)");
    body.append("Email", email);
    body.append("Phone", phone);
    body.append("File uploaded", "Yes");
    body.append("attachment", quoteFile);

    try {
      await fetch(`https://formsubmit.co/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        body,
      });
    } catch (err) {
      console.error("Quote submit error:", err);
    }

    onQuoteSuccess(custSize, custMat);
    setQuoteErrors({ email: "", phone: "", file: "" });
  };

  return (
    <section id="custom-order" style={{ padding: "76px 40px", background: "#FDFCF8" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="two-col"
      >
        <div>
          <div className="slabel">✦ Bring Your Vision to Life</div>
          <h2
            className="fr"
            style={{
              fontSize: "clamp(26px,4vw,40px)",
              fontWeight: 900,
              color: "#1C1C2E",
              marginBottom: 18,
              lineHeight: 1.15,
            }}
          >
            Custom Product
            <br />
            <em style={{ color: "#FF6B6B" }}>On Demand</em>
          </h2>
          <p
            style={{
              color: "#6B6B8A",
              lineHeight: 1.75,
              marginBottom: 26,
              fontSize: 15,
            }}
          >
            Got an idea but no 3D model? Describe it. Have an STL file? Upload it. We handle
            everything — from slicing to shipping.
          </p>
          {[
            ["📁", "Upload STL, OBJ or describe your idea"],
            ["🎨", "Choose from 15 filament colours"],
            ["🧱", "Select material: PLA, PETG, ABS, TPU"],
            ["⚡", "Quote back in under 2 hours"],
          ].map(([ic, f]) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 13 }}>
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
                  fontSize: 15,
                  flexShrink: 0,
                }}
              >
                {ic}
              </div>
              <span style={{ color: "#1C1C2E", fontSize: 14, fontWeight: 700 }}>{f}</span>
            </div>
          ))}
        </div>

        {/* Customiser Form */}
        <form
          onSubmit={handleQuoteSubmit}
          style={{
            background: "#fff",
            border: "2px solid #EAE8F2",
            borderRadius: 26,
            padding: 30,
            boxShadow: "0 8px 40px rgba(0,0,0,.06)",
          }}
        >
          <div
            className="fr"
            style={{
              fontWeight: 900,
              fontSize: 19,
              color: "#1C1C2E",
              marginBottom: 22,
            }}
          >
            Live Product Customiser 🎨
          </div>
          <div
            style={{
              height: 160,
              borderRadius: 18,
              marginBottom: 22,
              background: `linear-gradient(135deg,${custColor}18,${custColor}08)`,
              border: `2px solid ${custColor}28`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div className="float" style={{ fontSize: 56, filter: `drop-shadow(0 4px 14px ${custColor}55)` }}>
              <img src={customImg} alt="Custom 3D Print" style={{ width: 100, height: 100, objectFit: "contain" }} />
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#9B9BBB",
                fontWeight: 800,
                letterSpacing: ".05em",
              }}
            >
              {custText || "Your Custom Product"} · {custSize} · {custMat}
            </div>
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
                MATERIAL
              </label>
              <select
                name="Material"
                value={custMat}
                onChange={(e) => setCustMat(e.target.value)}
              >
                {MATERIALS.map((m) => (
                  <option key={m.name}>{m.name}</option>
                ))}
              </select>
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
                SIZE
              </label>
              <select
                name="Size"
                value={custSize}
                onChange={(e) => setCustSize(e.target.value)}
              >
                {["XS", "S", "M", "L", "XL"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
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
                EMAIL <span style={{ color: "#FF6B6B" }}>*</span>
              </label>
              <input
                type="email"
                name="Email"
                placeholder="you@example.com"
                style={{ borderColor: quoteErrors.email ? "#FF6B6B" : undefined }}
                onChange={() => setQuoteErrors((prev) => ({ ...prev, email: "" }))}
              />
              {quoteErrors.email && (
                <div
                  style={{
                    fontSize: 11,
                    color: "#FF6B6B",
                    marginTop: 4,
                    fontWeight: 700,
                  }}
                >
                  {quoteErrors.email}
                </div>
              )}
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
                PHONE <span style={{ color: "#FF6B6B" }}>*</span>
              </label>
              <input
                type="tel"
                name="Phone"
                placeholder="+1 555 000 0000"
                style={{ borderColor: quoteErrors.phone ? "#FF6B6B" : undefined }}
                onChange={() => setQuoteErrors((prev) => ({ ...prev, phone: "" }))}
              />
              {quoteErrors.phone && (
                <div
                  style={{
                    fontSize: 11,
                    color: "#FF6B6B",
                    marginTop: 4,
                    fontWeight: 700,
                  }}
                >
                  {quoteErrors.phone}
                </div>
              )}
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
              COLOUR
            </label>
            <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
              {[
                "#FF6B6B",
                "#FF9F43",
                "#0ABFBC",
                "#27AE60",
                "#9B59B6",
                "#E84393",
                "#3498DB",
                "#FBBF24",
              ].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCustColor(c)}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: c,
                    border: custColor === c ? "3px solid #1C1C2E" : "3px solid transparent",
                    cursor: "pointer",
                    transition: "transform .2s",
                    transform: custColor === c ? "scale(1.28)" : "scale(1)",
                    boxShadow: `0 2px 8px ${c}44`,
                  }}
                />
              ))}
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
              CUSTOM TEXT / INSTRUCTIONS
            </label>
            <input
              name="Custom text / instructions"
              value={custText}
              onChange={(e) => setCustText(e.target.value)}
              placeholder="e.g. Add my name 'Alex' in bold"
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                fontSize: 11,
                color: "#6B6B8A",
                display: "block",
                marginBottom: 7,
                fontWeight: 800,
              }}
            >
              UPLOAD FILE (STL / OBJ / Image / GLTF / GLB){" "}
              <span style={{ color: "#FF6B6B" }}>*</span>
              <span style={{ display: "block", marginTop: 4, fontSize: 10, color: "#FF6B6B", fontWeight: 900 }}>
                Max file size: 20 MB
              </span>
            </label>
            <div
              style={{
                border: `2px dashed ${
                  quoteErrors.file ? "#FF6B6B" : uploaded ? "#27AE60" : "#D8D6EE"
                }`,
                borderRadius: 14,
                padding: "10px 14px",
                background: uploaded ? "#EDFFF5" : "#F8F7F3",
                transition: "all .2s",
              }}
            >
              <input
                type="file"
                name="attachment"
                accept=".stl,.obj,.gltf,.glb,image/*"
                onChange={(e) => {
                  const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
                  if (file) {
                    const fileSizeInMB = file.size / (1024 * 1024);
                    if (fileSizeInMB > 20) {
                      setQuoteErrors((prev) => ({ ...prev, file: "File size exceeds 20 MB limit" }));
                      setQuoteFile(null);
                      setUploaded(false);
                      return;
                    }
                  }
                  setQuoteFile(file);
                  setUploaded(!!file);
                  if (file) setQuoteErrors((prev) => ({ ...prev, file: "" }));
                }}
                style={{ width: "100%", fontSize: 12 }}
              />
              <div
                style={{
                  marginTop: 8,
                  fontSize: 11,
                  color: quoteErrors.file ? "#FF6B6B" : "#9B9BBB",
                  fontWeight: 700,
                }}
              >
                {uploaded && quoteFile
                  ? `Selected: ${quoteFile.name}`
                  : quoteErrors.file || "Attach a 3D file or reference image (Max 20 MB). Required *"}
              </div>
            </div>
          </div>
          <button type="submit" className="btn-coral" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "15px" }}>
            🚀 Request a Quote
          </button>
        </form>
      </div>
    </section>
  );
}
