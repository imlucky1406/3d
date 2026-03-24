import { useState } from "react";
import { PRODUCTS, CATEGORIES, CATEGORY_TO_PRODUCT } from "../data";
import { openWhatsAppForProduct } from "../utils/whatsapp";
import WhatsAppIcon from "../components/WhatsAppIcon";

export default function ViewProduct({ onView }) {
  const [productCategoryFilter, setProductCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts =
    !productCategoryFilter
      ? PRODUCTS
      : PRODUCTS.filter(
          (p) => CATEGORY_TO_PRODUCT[productCategoryFilter] === p.category
        );

  const productsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIdx = currentPage * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIdx, endIdx);

  const handleFilterChange = (filter) => {
    setProductCategoryFilter(filter);
    setCurrentPage(0);
  };

  return (
    <section
      className="section-pad"
      style={{ paddingTop: "clamp(88px, 14vw, 100px)", background: "#FDFCF8" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 34 }}>
          <h1 className="fr" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "#1C1C2E", marginBottom: 28 }}>
            All Products 🔥
          </h1>

          {/* Category Filter */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "nowrap",
              marginBottom: 34,
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              paddingBottom: 6,
              scrollbarWidth: "thin",
            }}
          >
            <button
              onClick={() => handleFilterChange("")}
              style={{
                padding: "10px 20px",
                flexShrink: 0,
                borderRadius: 999,
                border: productCategoryFilter === "" ? "2px solid #FF6B6B" : "2px solid #E8E6F0",
                background: productCategoryFilter === "" ? "#FF6B6B" : "#fff",
                color: productCategoryFilter === "" ? "#fff" : "#1C1C2E",
                cursor: "pointer",
                fontWeight: 700,
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                if (productCategoryFilter !== "") {
                  e.target.style.borderColor = "#FF6B6B";
                }
              }}
              onMouseLeave={(e) => {
                if (productCategoryFilter !== "") {
                  e.target.style.borderColor = "#E8E6F0";
                }
              }}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleFilterChange(cat.name)}
                style={{
                  padding: "10px 20px",
                  flexShrink: 0,
                  borderRadius: 999,
                  border: productCategoryFilter === cat.name ? `2px solid ${cat.accent}` : "2px solid #E8E6F0",
                  background: productCategoryFilter === cat.name ? cat.accent : "#fff",
                  color: productCategoryFilter === cat.name ? "#fff" : "#1C1C2E",
                  cursor: "pointer",
                  fontWeight: 700,
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  if (productCategoryFilter !== cat.name) {
                    e.target.style.borderColor = cat.accent;
                  }
                }}
                onMouseLeave={(e) => {
                  if (productCategoryFilter !== cat.name) {
                    e.target.style.borderColor = "#E8E6F0";
                  }
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <p style={{ color: "#6B6B8A", fontSize: 14, marginBottom: 20 }}>
            Showing {paginatedProducts.length} of {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Products Grid */}
        <div className="product-grid" style={{ gap: 24, marginBottom: 48 }}>
          {paginatedProducts.map((p, idx) => (
            <ProductCard
              key={p.id}
              p={p}
              onView={() => onView(p)}
              idx={idx}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#6B6B8A" }}>
            <p style={{ fontSize: 18 }}>No products found in this category.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredProducts.length > productsPerPage && (
          <div className="pagination-row" style={{ marginTop: 40 }}>
            <button
              onClick={() => {
                setCurrentPage((p) => Math.max(p - 1, 0));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentPage === 0}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: "2px solid #EAE8F2",
                background: currentPage === 0 ? "#F5F4F0" : "#fff",
                color: currentPage === 0 ? "#9B9BBB" : "#1C1C2E",
                cursor: currentPage === 0 ? "not-allowed" : "pointer",
                fontWeight: 700,
                fontSize: 14,
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 0) {
                  e.target.style.borderColor = "#FF6B6B";
                  e.target.style.color = "#FF6B6B";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 0) {
                  e.target.style.borderColor = "#EAE8F2";
                  e.target.style.color = "#1C1C2E";
                }
              }}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: currentPage === i ? "2px solid #FF6B6B" : "2px solid #EAE8F2",
                  background: currentPage === i ? "#FF6B6B" : "#fff",
                  color: currentPage === i ? "#fff" : "#1C1C2E",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 13,
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== i) {
                    e.target.style.borderColor = "#FF6B6B";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== i) {
                    e.target.style.borderColor = "#EAE8F2";
                  }
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => {
                setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentPage === totalPages - 1}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: "2px solid #EAE8F2",
                background: currentPage === totalPages - 1 ? "#F5F4F0" : "#fff",
                color: currentPage === totalPages - 1 ? "#9B9BBB" : "#1C1C2E",
                cursor: currentPage === totalPages - 1 ? "not-allowed" : "pointer",
                fontWeight: 700,
                fontSize: 14,
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages - 1) {
                  e.target.style.borderColor = "#FF6B6B";
                  e.target.style.color = "#FF6B6B";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== totalPages - 1) {
                  e.target.style.borderColor = "#EAE8F2";
                  e.target.style.color = "#1C1C2E";
                }
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const ProductCard = ({ p, onView, idx }) => {
  const [hov, setHov] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const totalImgs = Array.isArray(p.img) ? p.img.length : 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!totalImgs) return;
    setImgIdx((i) => (i - 1 + totalImgs) % totalImgs);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!totalImgs) return;
    setImgIdx((i) => (i + 1) % totalImgs);
  };

  return (
    <div
      onClick={onView}
      style={{
        background: "#fff",
        border: `2px solid ${hov ? p.accent + "33" : "#EAE8F2"}`,
        borderRadius: 24,
        padding: 22,
        cursor: "pointer",
        transform: hov ? "translateY(-10px)" : "none",
        transition: "transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s,border-color .35s",
        boxShadow: hov ? `0 24px 56px ${p.accent}15` : "0 2px 12px rgba(0,0,0,.04)",
        animation: "fadeUp .6s cubic-bezier(.22,1,.36,1) forwards",
        animationDelay: `${idx * 0.07}s`,
        opacity: 0,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        style={{
          height: 155,
          borderRadius: 18,
          marginBottom: 18,
          background: p.bg,
          border: `1.5px solid ${p.accent}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 60,
          position: "relative",
          overflow: "hidden",
          transition: "transform .35s",
          transform: hov ? "scale(1.05) rotate(2deg)" : "scale(1)",
        }}
      >
        {Array.isArray(p.img) ? (
          p.img[imgIdx].startsWith("/") ? (
            <img
              src={p.img[imgIdx]}
              alt={p.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center"
              }}
            />
          ) : (
            p.img[imgIdx]
          )
        ) : (
          p.img
        )}
        {totalImgs > 1 && (
          <>
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "none",
                background: "#FFFFFFDD",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "none",
                background: "#FFFFFFDD",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>
          </>
        )}
        {p.tag && (
          <div
            style={{
              position: "absolute",
              top: 9,
              right: 9,
              padding: "3px 11px",
              borderRadius: 999,
              background:
                p.tag === "BESTSELLER" ? "#FF9F43" : p.tag === "NEW" ? "#0ABFBC" : "#FF6B6B",
              color: "#fff",
              fontSize: 10,
              fontWeight: 800,
            }}
          >
            {p.tag}
          </div>
        )}
      </div>
      <div style={{ fontSize: 10, color: "#9B9BBB", marginBottom: 7, fontWeight: 800, letterSpacing: ".07em" }}>
        {p.category} · ⏱ {p.time}
      </div>
      <div style={{ fontWeight: 800, fontSize: 16, color: "#1C1C2E", marginBottom: 7 }}>
        {p.name}
      </div>
      <div style={{ fontSize: 13, color: "#6B6B8A", lineHeight: 1.6, marginBottom: 16 }}>
        {p.desc}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 900,
            fontSize: 21,
            color: "#1C1C2E",
          }}
        >
          ${p.price}
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            onClick={onView}
            style={{
              background: "#F5F4F0",
              border: "none",
              borderRadius: 10,
              padding: "8px 13px",
              cursor: "pointer",
              color: "#6B6B8A",
              fontSize: 12,
              fontWeight: 700,
              transition: "background .2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#EAE8F2")}
            onMouseLeave={(e) => (e.target.style.background = "#F5F4F0")}
          >
            Preview
          </button>
          <button
            type="button"
            title="Chat on WhatsApp"
            aria-label={`WhatsApp about ${p.name}`}
            onClick={(e) => {
              e.stopPropagation();
              openWhatsAppForProduct(p);
            }}
            style={{
              background: p.accent,
              border: "none",
              borderRadius: 10,
              width: 40,
              height: 36,
              padding: 0,
              cursor: "pointer",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 14px ${p.accent}66`,
              transition: "transform .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <WhatsAppIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
