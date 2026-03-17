import rose1 from "./assets/image/rose1.png";
import rose2 from "./assets/image/rose2.png";
import rose3 from "./assets/image/rose3.png";
// import dog1 from "./assets/3d/labrador_retriever_puppy/textures/Dog_all_mat.001_baseColor.png";
import dog1 from "./assets/image/3D-printer.png";
import dog2 from "./assets/3d/Rose/images/Cover.jpg";
import dog3 from "./assets/3d/Rose/images/Cover.jpg";

// src/data.js
export const NAV_LINKS = ["Products", "How It Works", "Custom Order", "Materials",];

export const PRODUCTS = [
  { id: 1, name: "Helical Desk Organizer", price: 34.99, tag: "BESTSELLER", category: "Office", time: "4h 20m", desc: "Geometric spiral design with 6 compartments. PLA+, ultra-smooth finish.", accent: "#FF6B6B", bg: "#FFF0F0", img: [dog1, dog2, dog3], model:"/3D/labrador_retriever_puppy/scene.gltf",},
  { id: 2, name: "Floating Shelf Bracket", price: 28.99, tag: "NEW", category: "Home Decor", time: "3h 10m", desc: "Minimal cantilever shelf support. Matte PETG, load-bearing 5kg.", accent: "#0ABFBC", bg: "#E6FFFE", img: [rose2,"🔌","📱", "🪪", "🌿","🗂️"], model: "/3D/labrador_retriever_puppy/scene.gltf", },
  { id: 3, name: "Cable Management Hub", price: 22.99, tag: "", category: "Office", time: "2h 45m", desc: "Route up to 8 cables cleanly. Tool-free snap fit design.", accent: "#FF9F43", bg: "#FFF4E6", img: [dog1], model: "/3D/labrador_retriever_puppy/scene.gltf", },
  { id: 4, name: "Phone Stand Pro", price: 19.99, tag: "HOT", category: "Tech", time: "1h 55m", desc: "Adjustable 0–90° tilt, fits all phone sizes. Rubberised ABS base.", accent: "#9B59B6", bg: "#F5EEFF", img: [rose3], model: "/3D/labrador_retriever_puppy/scene.gltf", },
  { id: 5, name: "Custom Nameplate", price: 16.99, tag: "", category: "Gifts", time: "2h 00m", desc: "Personalised with any name or message. 15 filament colours available.", accent: "#E84393", bg: "#FFF0F7", img: [rose1,rose2,rose3], model: "/3D/Rose/files/Rose.stl", },
  { id: 6, name: "Modular Planter", price: 39.99, tag: "NEW", category: "Home Decor", time: "5h 30m", desc: "Stackable hexagonal cells. Water-resistant PETG, drainage slots.", accent: "#27AE60", bg: "#EDFFF5", img: ["🌿"] },
  { id: 7, name: "Floating Shelf Bracket", price: 28.99, tag: "NEW", category: "Home Decor", time: "3h 10m", desc: "Minimal cantilever shelf support. Matte PETG, load-bearing 5kg.", accent: "#0ABFBC", bg: "#E6FFFE", img: ["🏠","🔌","📱", "🪪", "🌿","🗂️"] },
  { id: 8, name: "Helical Desk Organizer", price: 34.99, tag: "BESTSELLER", category: "Office", time: "4h 20m", desc: "Geometric spiral design with 6 compartments. PLA+, ultra-smooth finish.", accent: "#FF6B6B", bg: "#FFF0F0", img: ["🗂️","🏠","🔌","📱", "🪪", "🌿"] },
  { id: 9, name: "Cable Management Hub", price: 22.99, tag: "", category: "Office", time: "2h 45m", desc: "Route up to 8 cables cleanly. Tool-free snap fit design.", accent: "#FF9F43", bg: "#FFF4E6", img: ["🔌"] },
  { id: 10, name: "Phone Stand Pro", price: 19.99, tag: "HOT", category: "Tech", time: "1h 55m", desc: "Adjustable 0–90° tilt, fits all phone sizes. Rubberised ABS base.", accent: "#9B59B6", bg: "#F5EEFF", img: ["📱"] },
  { id: 11, name: "Custom Nameplate", price: 16.99, tag: "", category: "Gifts", time: "2h 00m", desc: "Personalised with any name or message. 15 filament colours available.", accent: "#E84393", bg: "#FFF0F7", img: ["🪪"] },
  { id: 12, name: "Modular Planter", price: 39.99, tag: "NEW", category: "Home Decor", time: "5h 30m", desc: "Stackable hexagonal cells. Water-resistant PETG, drainage slots.", accent: "#27AE60", bg: "#EDFFF5", img: ["🌿"] },
  { id: 13, name: "Floating Shelf Bracket", price: 28.99, tag: "NEW", category: "Home Decor", time: "3h 10m", desc: "Minimal cantilever shelf support. Matte PETG, load-bearing 5kg.", accent: "#0ABFBC", bg: "#E6FFFE", img: ["🏠","🔌","📱", "🪪", "🌿","🗂️"] },

];

export const CATEGORIES = [
  { name: "Home Decor", icon: "🏡", count: 24, accent: "#FF9F43", bg: "#FFF0F0" },
  { name: "Office Accessories", icon: "💼", count: 18, accent: "#0ABFBC", bg: "#E6FFFE" },
  { name: "Gaming Gear", icon: "🎮", count: 12, accent: "#9B59B6", bg: "#F5EEFF" },
  { name: "Personalised Gifts", icon: "🎁", count: 31, accent: "#E84393", bg: "#FFF0F7" },
  { name: "Tech Stands", icon: "📲", count: 15, accent: "#27AE60", bg: "#EDFFF5" },
];

export const CATEGORY_TO_PRODUCT = {
  "Home Decor": "Home Decor",
  "Office Accessories": "Office",
  "Gaming Gear": "Gaming",
  "Personalised Gifts": "Gifts",
  "Tech Stands": "Tech",
};

export const MATERIALS = [
  { name: "PLA", temp: "180–220°C", strength: 72, accent: "#FF6B6B", bg: "#FFF0F0", desc: "Biodegradable, vivid colours. Perfect for decor & gifts." },
  { name: "PETG", temp: "220–250°C", strength: 85, accent: "#0ABFBC", bg: "#E6FFFE", desc: "Food-safe, moisture-resistant. Ideal for functional parts." },
  { name: "ABS", temp: "230–260°C", strength: 90, accent: "#FF9F43", bg: "#FFF4E6", desc: "High impact resistance & heat tolerance. Best for mechanical parts." },
  { name: "TPU", temp: "210–230°C", strength: 60, flex: true, accent: "#27AE60", bg: "#EDFFF5", desc: "Rubber-like flexibility. Cases, grips & wearables." },
];

export const HOW_STEPS = [
  { n: "01", icon: "🎯", title: "Choose a Product", desc: "Browse catalogue or start from scratch with your own idea.", accent: "#FF6B6B", bg: "#FFF0F0" },
  { n: "02", icon: "✏️", title: "Customise Design", desc: "Pick colour, material, size and add personalised text or upload STL.", accent: "#0ABFBC", bg: "#E6FFFE" },
  { n: "03", icon: "🖨️", title: "We 3D Print It", desc: "Our printers get to work. Real-time progress updates sent to you.", accent: "#FF9F43", bg: "#FFF4E6" },
  { n: "04", icon: "📦", title: "Delivered to You", desc: "Carefully packaged and tracked delivery in 3–7 business days.", accent: "#27AE60", bg: "#EDFFF5" },
];

export const TESTIMONIALS = [
  { name: "Sarah K.", role: "Interior Designer", text: "The planter arrived perfectly printed. The detail is jaw-dropping — already ordered three more colourways.", avatar: "SK", accent: "#FF6B6B", bg: "#FFF0F0" },
  { name: "Marcus T.", role: "Software Engineer", text: "Cable hub is a desk game-changer. Ordered a custom version with my logo on Friday, had it Tuesday.", avatar: "MT", accent: "#0ABFBC", bg: "#E6FFFE" },
  { name: "Priya R.", role: "Content Creator", text: "Gifted the nameplate to my mum and she cried. The packaging alone felt premium. 10/10 will reorder.", avatar: "PR", accent: "#E84393", bg: "#FFF0F7" },
];