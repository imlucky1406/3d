import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../data";

export default function Header({ scrolled }) {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navH, setNavH] = useState(64);

  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const update = () => setNavH(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [scrolled, mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = (e) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobile();
  };

  const goHash = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    closeMobile();
  };

  const goPath = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobile();
  };

  const linkStyle = {
    color: "#6B6B8A",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 700,
    transition: "color .2s",
  };

  return (
    <>
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        paddingTop: `max(${scrolled ? 12 : 16}px, env(safe-area-inset-top))`,
        paddingRight: `max(18px, env(safe-area-inset-right))`,
        paddingBottom: `max(${scrolled ? 12 : 16}px, env(safe-area-inset-bottom))`,
        paddingLeft: `max(18px, env(safe-area-inset-left))`,
        background: scrolled ? "rgba(253,252,248,.93)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1.5px solid #EAE8F2" : "none",
        transition: "all .3s",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        columnGap: 16,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer", minWidth: 0, gridColumn: 1 }}
        onClick={goHome}
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
      <div
        className="hide-m"
        style={{
          display: "flex",
          gap: "clamp(18px, 3vw, 32px)",
          flexWrap: "wrap",
          justifyContent: "center",
          justifySelf: "center",
          alignItems: "center",
          gridColumn: 2,
        }}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
          onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
        >
          Home
        </a>
        {NAV_LINKS.map((l) => {
          const id = l.toLowerCase().replace(/ /g, "-");
          return (
            <a
              key={l}
              href={`/#${id}`}
              onClick={(e) => {
                e.preventDefault();
                goHash(id);
              }}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
              onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
            >
              {l}
            </a>
          );
        })}
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            goPath("/about");
          }}
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
          onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
        >
          About
        </a>
        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            goPath("/contact");
          }}
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#FF6B6B")}
          onMouseLeave={(e) => (e.target.style.color = "#6B6B8A")}
        >
          Contact
        </a>
      </div>
      <button
        type="button"
        className="nav-burger"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-panel"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 44,
          height: 44,
          borderRadius: 12,
          border: "2px solid #EAE8F2",
          background: "#fff",
          cursor: "pointer",
          color: "#1C1C2E",
          fontSize: 20,
          fontWeight: 800,
          flexShrink: 0,
          gridColumn: 3,
          justifySelf: "end",
        }}
      >
        {mobileOpen ? "✕" : "☰"}
      </button>
    </nav>
    {mobileOpen && (
      <>
        <div
          role="presentation"
          onClick={closeMobile}
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            top: navH,
            zIndex: 101,
            background: "rgba(28,28,46,.45)",
            backdropFilter: "blur(4px)",
          }}
        />
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: navH,
            zIndex: 102,
            maxHeight: `min(70vh, calc(100dvh - ${navH}px))`,
            overflowY: "auto",
            background: "#FDFCF8",
            borderBottom: "1.5px solid #EAE8F2",
            boxShadow: "0 16px 48px rgba(0,0,0,.12)",
            padding: "12px clamp(14px, 4vw, 36px) max(16px, env(safe-area-inset-bottom))",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goHome();
            }}
            style={{
              ...linkStyle,
              padding: "14px 12px",
              borderRadius: 12,
              display: "block",
            }}
          >
            Home
          </a>
          {NAV_LINKS.map((l) => {
            const id = l.toLowerCase().replace(/ /g, "-");
            return (
              <a
                key={l}
                href={`/#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  goHash(id);
                }}
                style={{
                  ...linkStyle,
                  padding: "14px 12px",
                  borderRadius: 12,
                  display: "block",
                }}
              >
                {l}
              </a>
            );
          })}
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              goPath("/about");
            }}
            style={{
              ...linkStyle,
              padding: "14px 12px",
              borderRadius: 12,
              display: "block",
            }}
          >
            About
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              goPath("/contact");
            }}
            style={{
              ...linkStyle,
              padding: "14px 12px",
              borderRadius: 12,
              display: "block",
            }}
          >
            Contact
          </a>
          <a
            href="/viewproduct"
            onClick={(e) => {
              e.preventDefault();
              goPath("/viewproduct");
            }}
            style={{
              ...linkStyle,
              padding: "14px 12px",
              borderRadius: 12,
              display: "block",
              color: "#FF6B6B",
            }}
          >
            All products →
          </a>
        </div>
      </>
    )}
    </>
  );
}
