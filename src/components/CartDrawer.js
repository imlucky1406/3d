import React from "react";

export default function CartDrawer({ cartOpen, onClose, cart, onRemove, cartTotal }) {
  return (
    <>
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
          <div
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(28,28,46,.45)",
              backdropFilter: "blur(6px)",
            }}
          />
          <div
            className="cart-drawer-panel"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              background: "#fff",
              borderLeft: "2px solid #EAE8F2",
              padding: "clamp(18px, 5vw, 26px)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-16px 0 60px rgba(0,0,0,.10)",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
              <div className="fr" style={{ fontWeight: 900, fontSize: 21, color: "#1C1C2E" }}>
                Your Cart 🛒
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "#F5F4F0",
                  border: "none",
                  color: "#6B6B8A",
                  fontSize: 16,
                  cursor: "pointer",
                  borderRadius: 10,
                  width: 34,
                  height: 34,
                }}
              >
                ✕
              </button>
            </div>
            {cart.length === 0 ? (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9B9BBB",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ fontSize: 52 }}>🛒</div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Your cart is empty</div>
                <div style={{ fontSize: 13 }}>Add some awesome products!</div>
              </div>
            ) : (
              <>
                <div style={{ flex: 1, overflowY: "auto" }}>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        gap: 12,
                        padding: "14px 0",
                        borderBottom: "1.5px solid #F5F4F0",
                      }}
                    >
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: 14,
                          background: item.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 26,
                          flexShrink: 0,
                        }}
                      >
                        <img src={item.img[0]} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "contain" }}/>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: 800,
                            fontSize: 13,
                            color: "#1C1C2E",
                            marginBottom: 3,
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          style={{
                            color: "#9B9BBB",
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: 6,
                        }}
                      >
                        <div
                          className="fr"
                          style={{
                            fontWeight: 900,
                            color: "#FF6B6B",
                            fontSize: 15,
                          }}
                        >
                          ${(item.price * item.qty).toFixed(2)}
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#BBB",
                            cursor: "pointer",
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ paddingTop: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 18,
                    }}
                  >
                    <span style={{ color: "#6B6B8A", fontWeight: 700 }}>Total</span>
                    <span
                      className="fr"
                      style={{
                        fontWeight: 900,
                        fontSize: 22,
                        color: "#1C1C2E",
                      }}
                    >
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="btn-coral"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "15px",
                      fontSize: 15,
                    }}
                  >
                    Checkout with Stripe →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
