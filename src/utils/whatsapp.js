import { WHATSAPP_BUSINESS_NUMBER } from "../data";

/**
 * Opens WhatsApp chat with a prefilled message about a product.
 */
export function openWhatsAppForProduct(product) {
  const phone = String(WHATSAPP_BUSINESS_NUMBER || "").replace(/\D/g, "");
  if (!phone) return;
  const msg = `Hi, I saw your product (${product.name}). I’d like to know more about it—price, material, and delivery details. Please share the information.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
