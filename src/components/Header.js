import React from "react";
<<<<<<< HEAD
import { NavLink, useNavigate } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 800ef92 (printer)
import { NAV_LINKS } from "../data";

export default function Header({ scrolled, cartCount, onCartOpen }) {
  const navigate = useNavigate();
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "11px 36px" : "18px 36px",
        background: scrolled ? "rgba(253,252,248,.93)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1.5px solid #EAE8F2" : "none",
        transition: "all .3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer" }}
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 11,
            background: "linear-gradient(135deg,#FF6B6B,#FF9F43)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17,
            boxShadow: "0 4px 12px #FF6B6B33",
          }}
        >
          🖨️
        </div>
        <span
          className="fr"
          style={{
            fontSize: 21,
            fontWeight: 900,
            color: "#1C1C2E",
            letterSpacing: "-.01em",
          }}
        >
          Print<span style={{ color: "#FF6B6B" }}>3D</span>
        </span>
      </div>
      <div className="hide-m" style={{ display: "flex", gap: 32 }}>
        <a
<<<<<<< HEAD
=======
          href="/"
>>>>>>> 800ef92 (printer)
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            color: "#6B6B8A",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 700,
            transition: "color .2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
          onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
        >
          Home
        </a>
<<<<<<< HEAD
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href="#"
            onClick={(e) => {
              e.preventDefault();

              const id = l.toLowerCase().replace(/ /g, "-");

=======
        {NAV_LINKS.map((l) => {
          const id = l.toLowerCase().replace(/ /g, "-");
          return (
          <a
            key={l}
            href={`/#${id}`}
            onClick={(e) => {
              e.preventDefault();

>>>>>>> 800ef92 (printer)
              navigate("/");

              setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            style={{
              color: "#6B6B8A",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 700,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
            onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
          >
            {l}
          </a>
<<<<<<< HEAD
        ))}
        <a
=======
          );
        })}
        <a
          href="/about"
>>>>>>> 800ef92 (printer)
          onClick={(e) => {
            e.preventDefault();
            navigate("/about");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            color: "#6B6B8A",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 700,
            transition: "color .2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
          onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
        >
          About
        </a>
        <a
<<<<<<< HEAD
=======
          href="/contact"
>>>>>>> 800ef92 (printer)
          onClick={(e) => {
            e.preventDefault();
            navigate("/contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            color: "#6B6B8A",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 700,
            transition: "color .2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
          onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
        >
          Contact
        </a>

      </div>
      <button
        onClick={onCartOpen}
        style={{
          background: "#FF6B6B",
          border: "none",
          borderRadius: 999,
          padding: "9px 20px",
          cursor: "pointer",
          color: "#fff",
          fontSize: 14,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          gap: 8,
          boxShadow: "0 4px 16px #FF6B6B44",
          transition: "transform .2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
      >
        🛒 Cart{" "}
        {cartCount > 0 && (
          <span
            style={{
              background: "#fff",
              color: "#FF6B6B",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 900,
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
}
