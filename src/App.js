import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import QuoteModal from "./components/QuoteModal";
import Home from "./pages/Home";
import ViewProduct from "./pages/ViewProduct";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;text-size-adjust:100%}
  body{font-family:'Nunito',sans-serif;background:#FDFCF8;color:#1C1C2E;overflow-x:hidden;padding-bottom:max(0px, env(safe-area-inset-bottom))}
  #root{min-height:100dvh}
  ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#F5F4F0}::-webkit-scrollbar-thumb{background:#FF9F43;border-radius:99px}
  .fr{font-family:'Fraunces',serif}
  .pill{display:inline-flex;align-items:center;gap:6px;background:#FFF0E6;border:1.5px solid #FFD4AA;border-radius:999px;padding:6px 16px;font-size:13px;font-weight:800;color:#FF6B6B}
  .btn-coral{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:#FF6B6B;color:#fff;border:none;border-radius:999px;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;cursor:pointer;transition:all .25s;box-shadow:0 6px 24px #FF6B6B44}
  .btn-coral:hover{transform:translateY(-3px);box-shadow:0 12px 36px #FF6B6B55}
  .btn-white{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;background:#fff;color:#1C1C2E;border:2px solid #E8E6F0;border-radius:999px;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;cursor:pointer;transition:all .25s}
  .btn-white:hover{border-color:#FF6B6B;transform:translateY(-3px);box-shadow:0 8px 28px rgba(255,107,107,.15)}
  .slabel{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#FF6B6B;font-weight:900;margin-bottom:12px}
  input,select,textarea{font-family:'Nunito',sans-serif;background:#F8F7F3;border:2px solid #EAE8F2;border-radius:14px;color:#1C1C2E;padding:11px 15px;width:100%;font-size:14px;font-weight:600;outline:none;transition:border-color .2s,box-shadow .2s}
  input:focus,select:focus,textarea:focus{border-color:#FF6B6B;box-shadow:0 0 0 4px #FF6B6B15}
  textarea{resize:vertical;min-height:80px}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pop{0%{transform:scale(.75);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
  .float{animation:float 3.8s ease-in-out infinite}
  .fu{animation:fadeUp .6s cubic-bezier(.22,1,.36,1) forwards;opacity:0}
  .modal-wrap{position:fixed;inset:0;background:rgba(253,252,248,.88);backdrop-filter:blur(14px);z-index:999;display:flex;align-items:center;justify-content:center;padding:max(12px, env(safe-area-inset-left)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-top))}
  .modal{background:#fff;border:2px solid #EAE8F2;border-radius:28px;padding:36px;max-width:540px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,.1);animation:pop .4s cubic-bezier(.22,1,.36,1)}
  @media(max-width:600px){.modal{padding:22px 18px;border-radius:20px}}
  .product-modal-fs{position:fixed;inset:0;z-index:1000;overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;background:linear-gradient(165deg,#FDFCF8 0%,#F6F3FA 42%,#FFF8F0 100%);padding:max(12px, env(safe-area-inset-top)) max(14px, env(safe-area-inset-right)) max(14px, env(safe-area-inset-bottom)) max(14px, env(safe-area-inset-left))}
  .product-modal-fs-inner{display:flex;flex-direction:column;width:100%;flex:1;min-height:0;max-height:100%;position:relative;gap:clamp(12px,2.5vw,22px)}
  .product-modal-panel{border-radius:clamp(16px,3.2vw,26px);overflow:hidden;border:1px solid #E8E6F0;background:#fff;box-shadow:0 12px 48px rgba(28,28,46,.09),0 2px 12px rgba(28,28,46,.05)}
  .product-modal-media.product-modal-panel{padding:clamp(18px,4vw,40px);box-sizing:border-box}
  .product-modal-details.product-modal-panel{border:none;box-shadow:0 4px 24px rgba(28,28,46,.04),0 1px 3px rgba(28,28,46,.03)}
  .product-modal-media{display:flex;flex-direction:column;min-height:0;min-width:0;position:relative}
  .product-modal-img-wrap{flex:1;min-height:0;width:100%;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
  .product-modal-details{display:flex;flex-direction:column;min-height:0;min-width:0;padding:clamp(18px,4vw,32px);overflow:hidden}
  @media(min-width:900px){
    .product-modal-fs-inner{flex-direction:row;align-items:stretch}
    .product-modal-media{flex:6 1 0;min-width:0;width:auto;max-width:none;height:auto;max-height:100%}
    .product-modal-details{flex:4 1 0;min-width:0;width:auto;max-width:none;height:auto;max-height:100%;justify-content:flex-start;padding:clamp(22px,4vw,40px);overflow-y:auto;-webkit-overflow-scrolling:touch}
  }
  @media(max-width:899px){
    .product-modal-fs{overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior-y:contain}
    .product-modal-fs-inner{flex:0 0 auto;min-height:0;max-height:none;height:auto;width:100%}
    .product-modal-media{flex:0 0 auto;height:min(42vh, 380px);min-height:220px;max-height:48vh}
    .product-modal-img-wrap{flex:1;min-height:0}
    .product-modal-details{flex:0 0 auto;overflow:visible;height:auto;min-height:0}
  }
  .product-modal-close{position:absolute;top:max(8px, env(safe-area-inset-top));right:max(8px, env(safe-area-inset-right));z-index:30;width:46px;height:46px;border-radius:14px;border:1.5px solid #EAE8F2;background:linear-gradient(180deg,#fff 0%,#FAFAFC 100%);cursor:pointer;font-size:18px;font-weight:800;color:#6B6B8A;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(28,28,46,.12),0 2px 8px rgba(28,28,46,.06);transition:color .2s,border-color .2s,transform .2s}
  .product-modal-close:hover{color:#FF6B6B;border-color:#FFD4AA;transform:scale(1.03)}
  .product-modal-close:active{transform:scale(.98)}
  .product-modal-close:focus-visible{outline:2px solid #FF6B6B;outline-offset:3px;color:#FF6B6B}
  .nav-burger{display:none!important;align-items:center;justify-content:center}
  @media(max-width:900px){.nav-burger{display:flex!important}}
  @media(max-width:900px){.two-col{grid-template-columns:1fr!important}.hide-m{display:none!important}}
  @media(max-width:600px){.g3{grid-template-columns:repeat(2,1fr)!important}}
  @media(max-width:400px){.g3{grid-template-columns:1fr!important}}
  .about-core-values-grid{display:grid;width:100%;gap:clamp(20px,3vw,28px);grid-template-columns:repeat(4,minmax(0,1fr))}
  @media(max-width:1024px){.about-core-values-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
  @media(max-width:480px){.about-core-values-grid{grid-template-columns:1fr!important}}
  .section-pad{padding:clamp(48px,8vw,76px) clamp(16px,4vw,40px)}
  .footer-pad{padding:clamp(40px,6vw,56px) clamp(16px,4vw,40px) 28px}
  .hero-home{min-height:100vh;min-height:100dvh;padding:clamp(96px,22vw,120px) clamp(16px,5vw,40px) clamp(48px,10vw,80px);box-sizing:border-box}
  @media(max-width:600px){.hero-stats{flex-wrap:wrap;justify-content:flex-start;gap:clamp(16px,4vw,24px)!important;margin-top:clamp(28px,6vw,42px)!important}}
  .product-grid{display:grid;width:100%;max-width:1200px;margin:0 auto;gap:22px;grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))}
  .products-home-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}
  @media(max-width:900px){.products-home-3{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
  @media(max-width:520px){.products-home-3{grid-template-columns:1fr!important}}
  .pagination-row{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;max-width:100%}
  @media(max-width:480px){.pagination-row{gap:6px}}
  .form-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  @media(max-width:540px){.form-grid-2{grid-template-columns:1fr!important}}
  img,video{max-width:100%;height:auto}
`;

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [custSize, setCustSize] = useState("M");
  const [custMat, setCustMat] = useState("PLA");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleQuoteSuccess = (size, mat) => {
    setCustSize(size);
    setCustMat(mat);
    setQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <style>{CSS}</style>

      <Header scrolled={scrolled} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onView={setActiveProduct}
              onQuoteOpen={() => setQuoteOpen(true)}
              onQuoteSuccess={handleQuoteSuccess}
            />
          }
        />
        <Route
          path="/viewproduct"
          element={
            <ViewProduct onView={setActiveProduct} />
          }
        />
        <Route
          path="/about"
          element={
            <About
            />
          }
        />
        <Route
          path="/privacy"
          element={
            <PrivacyPolicy
            />
          }
        />
        <Route
          path="/returns"
          element={
            <ReturnPolicy
            />
          }
        />
        <Route
          path="/terms"
          element={
            <TermsAndConditions
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
            />
          }
        />
      </Routes>

      <Footer />

      <ProductModal activeProduct={activeProduct} onClose={() => setActiveProduct(null)} />

      <QuoteModal
        quoteOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        custSize={custSize}
        custMat={custMat}
      />
    </BrowserRouter>
  );
}
//     body.append("Colour", custColor);
//     body.append("Custom text / instructions", custText || "(none)");
//     body.append("Email", email);
//     body.append("Phone", phone);
//     body.append("File uploaded", "Yes");
//     body.append("attachment", quoteFile);
//     try {
//       await fetch(`https://formsubmit.co/${FORMSUBMIT_EMAIL}`, { method: "POST", body });
//     } catch (err) {
//       console.error("Quote submit error:", err);
//     }
//     setQuoteOpen(true);
//     setQuoteErrors({ email: "", phone: "", file: "" });
//   };


//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,900&display=swap');
//     *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
//     html{scroll-behavior:smooth}
//     body{font-family:'Nunito',sans-serif;background:#FDFCF8;color:#1C1C2E;overflow-x:hidden}
//     ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#F5F4F0}::-webkit-scrollbar-thumb{background:#FF9F43;border-radius:99px}
//     .fr{font-family:'Fraunces',serif}
//     .pill{display:inline-flex;align-items:center;gap:6px;background:#FFF0E6;border:1.5px solid #FFD4AA;border-radius:999px;padding:6px 16px;font-size:13px;font-weight:800;color:#FF6B6B}
//     .btn-coral{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:#FF6B6B;color:#fff;border:none;border-radius:999px;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;cursor:pointer;transition:all .25s;box-shadow:0 6px 24px #FF6B6B44}
//     .btn-coral:hover{transform:translateY(-3px);box-shadow:0 12px 36px #FF6B6B55}
//     .btn-white{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;background:#fff;color:#1C1C2E;border:2px solid #E8E6F0;border-radius:999px;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;cursor:pointer;transition:all .25s}
//     .btn-white:hover{border-color:#FF6B6B;transform:translateY(-3px);box-shadow:0 8px 28px rgba(255,107,107,.15)}
//     .slabel{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#FF6B6B;font-weight:900;margin-bottom:12px}
//     input,select,textarea{font-family:'Nunito',sans-serif;background:#F8F7F3;border:2px solid #EAE8F2;border-radius:14px;color:#1C1C2E;padding:11px 15px;width:100%;font-size:14px;font-weight:600;outline:none;transition:border-color .2s,box-shadow .2s}
//     input:focus,select:focus,textarea:focus{border-color:#FF6B6B;box-shadow:0 0 0 4px #FF6B6B15}
//     textarea{resize:vertical;min-height:80px}
//     @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
//     @keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
//     @keyframes pop{0%{transform:scale(.75);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
//     .float{animation:float 3.8s ease-in-out infinite}
//     .fu{animation:fadeUp .6s cubic-bezier(.22,1,.36,1) forwards;opacity:0}
//     .modal-wrap{position:fixed;inset:0;background:rgba(253,252,248,.88);backdrop-filter:blur(14px);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px}
//     .modal{background:#fff;border:2px solid #EAE8F2;border-radius:28px;padding:36px;max-width:540px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,.1);animation:pop .4s cubic-bezier(.22,1,.36,1)}
//     @media(max-width:900px){.two-col{grid-template-columns:1fr!important}.hide-m{display:none!important}}
//     @media(max-width:600px){.g3{grid-template-columns:repeat(2,1fr)!important}}
//     @media(max-width:400px){.g3{grid-template-columns:1fr!important}}
//   `;

//   return (
//     <>
//       <style>{css}</style>

//       {/* NAV */}
//       <nav style={{
//         position:"fixed",top:0,left:0,right:0,zIndex:100,
//         padding: scrolled ? "11px 36px" : "18px 36px",
//         background: scrolled ? "rgba(253,252,248,.93)" : "transparent",
//         backdropFilter: scrolled ? "blur(20px)" : "none",
//         borderBottom: scrolled ? "1.5px solid #EAE8F2" : "none",
//         transition:"all .3s",
//         display:"flex",alignItems:"center",justifyContent:"space-between",
//       }}>
//         <div style={{display:"flex",alignItems:"center",gap:9}}>
//           <div style={{width:34,height:34,borderRadius:11,background:"linear-gradient(135deg,#FF6B6B,#FF9F43)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,boxShadow:"0 4px 12px #FF6B6B33"}}>🖨️</div>
//           <span className="fr" style={{fontSize:21,fontWeight:900,color:"#1C1C2E",letterSpacing:"-.01em"}}>Print<span style={{color:"#FF6B6B"}}>3D</span></span>
//         </div>
//         <div className="hide-m" style={{display:"flex",gap:32}}>
//           {NAV_LINKS.map(l => (
//             <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`} style={{color:"#6B6B8A",textDecoration:"none",fontSize:14,fontWeight:700,transition:"color .2s"}}
//               onMouseEnter={e=>e.target.style.color="#FF6B6B"} onMouseLeave={e=>e.target.style.color="#6B6B8A"}>{l}</a>
//           ))}
//         </div>
//         <button onClick={()=>setCartOpen(true)} style={{background:"#FF6B6B",border:"none",borderRadius:999,padding:"9px 20px",cursor:"pointer",color:"#fff",fontSize:14,fontWeight:800,display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px #FF6B6B44",transition:"transform .2s"}}
//           onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>
//           🛒 Cart {cartCount>0&&<span style={{background:"#fff",color:"#FF6B6B",borderRadius:999,fontSize:11,fontWeight:900,width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
//         </button>
//       </nav>

//       {/* HERO */}
//       <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"120px 40px 80px",background:"linear-gradient(155deg,#FFFDF8 0%,#FFF4E6 45%,#E8FFFB 100%)",gap:56,flexWrap:"wrap",position:"relative",overflow:"hidden"}}>
//         <div style={{position:"absolute",top:"-80px",right:"-100px",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#FFE8CC55,transparent 70%)",pointerEvents:"none"}}/>
//         <div style={{position:"absolute",bottom:"-60px",left:"-80px",width:360,height:360,borderRadius:"50%",background:"radial-gradient(circle,#CCF9F455,transparent 70%)",pointerEvents:"none"}}/>
//         <div style={{flex:1,minWidth:280,maxWidth:560,position:"relative"}}>
//           <div className="pill fu" style={{marginBottom:22}}>✨ Next-Gen 3D Manufacturing</div>
//           <h1 className="fr fu" style={{fontSize:"clamp(38px,6vw,68px)",fontWeight:900,lineHeight:1.07,color:"#1C1C2E",marginBottom:22,animationDelay:".1s"}}>
//             Innovative<br/><em style={{color:"#FF6B6B",fontStyle:"italic"}}>Products</em> Crafted<br/>with 3D Printing
//           </h1>
//           <p className="fu" style={{color:"#6B6B8A",fontSize:17,lineHeight:1.78,marginBottom:34,animationDelay:".18s",maxWidth:450}}>
//             From concept to creation in days. Every product precision-printed on-demand — infinitely customisable, shipped to your door.
//           </p>
//           <div className="fu" style={{display:"flex",gap:14,flexWrap:"wrap",animationDelay:".26s"}}>
//             <button className="btn-coral" onClick={()=>document.getElementById("products")?.scrollIntoView({behavior:"smooth"})}>Shop Products →</button>
//             <button className="btn-white" onClick={()=>document.getElementById("custom-order")?.scrollIntoView({behavior:"smooth"})}>✏️ Customise Yours</button>
//           </div>
//           <div className="fu" style={{display:"flex",gap:36,marginTop:42,animationDelay:".34s"}}>
//             {[["500+","Products","#FF6B6B"],["4.9 ★","Avg Rating","#FF9F43"],["2,000+","Happy Orders","#0ABFBC"]].map(([n,l,c])=>(
//               <div key={l}>
//                 <div className="fr" style={{fontSize:25,fontWeight:900,color:c}}>{n}</div>
//                 <div style={{fontSize:12,color:"#9B9BBB",fontWeight:700,marginTop:2}}>{l}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Hero visual */}
//         <div className="hide-m" style={{flex:"0 0 auto",position:"relative",width:400,height:400}}>
//           <div style={{position:"absolute",inset:0,margin:"auto",width:310,height:310,borderRadius:"50%",background:"radial-gradient(circle,#FFF0E6,#FFDDC0)",}}/>
//           <svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}} viewBox="0 0 400 400">
//             <circle cx="200" cy="200" r="158" fill="none" stroke="#FF9F43" strokeWidth="1.5" strokeDasharray="6 10" opacity=".45"/>
//             <circle cx="200" cy="200" r="100" fill="none" stroke="#0ABFBC" strokeWidth="1.5" strokeDasharray="4 8" opacity=".35"/>
//           </svg>
//           {PRODUCTS.slice(0,6).map((p,i)=>{
//             const angle=(i/6)*360-90, rad=angle*Math.PI/180, r=158;
//             const x=200+r*Math.cos(rad)-26, y=200+r*Math.sin(rad)-26;
//             return (
//               <div key={p.id} style={{position:"absolute",left:x,top:y,width:52,height:52,borderRadius:16,background:p.bg,border:`2px solid ${p.accent}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,boxShadow:`0 4px 14px ${p.accent}22`,animation:`float ${3+i*.4}s ease-in-out infinite`,animationDelay:`${i*.5}s`}}>{p.img[0]}</div>
//             );
//           })}
//           <div className="float" style={{position:"absolute",inset:0,margin:"auto",width:88,height:88,borderRadius:26,background:"linear-gradient(135deg,#FF6B6B,#FF9F43)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"0 12px 40px #FF6B6B44"}}>🖨️</div>
//         </div>
//       </section>

//       {/* FEATURED PRODUCTS */}
//       <section id="products" style={{padding:"76px 40px",background:"#FDFCF8"}}>
//         <div style={{maxWidth:1200,margin:"0 auto"}}>
//           <div className="slabel">✦ Featured Collection</div>
//           <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:34,flexWrap:"wrap",gap:12}}>
//             <h2 className="fr" style={{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#1C1C2E"}}>Trending Products 🔥</h2>
//             <span
//               onClick={()=>{ setViewAllProducts(!viewAllProducts); if (!viewAllProducts) setProductCategoryFilter(""); document.getElementById("products")?.scrollIntoView({behavior:"smooth"}); }}
//               style={{color:"#FF6B6B",fontSize:14,cursor:"pointer",fontWeight:800}}
//             >
//               {viewAllProducts ? "Show less" : "View all →"}
//             </span>
//           </div>
//           {viewAllProducts && (
//             <div style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:28,alignItems:"center"}}>
//               <span style={{fontSize:12,color:"#6B6B8A",fontWeight:800,marginRight:8}}>Filter by category:</span>
//               <button
//                 onClick={()=>setProductCategoryFilter("")}
//                 style={{
//                   padding:"8px 18px",borderRadius:999,border: productCategoryFilter === "" ? "2px solid #FF6B6B" : "2px solid #EAE8F2",
//                   background: productCategoryFilter === "" ? "#FF6B6B" : "#fff",color: productCategoryFilter === "" ? "#fff" : "#1C1C2E",
//                   fontSize:13,fontWeight:800,cursor:"pointer",fontFamily:"Nunito",transition:"all .2s"
//                 }}
//               >All</button>
//               {CATEGORIES.map(c=>(
//                 <button
//                   key={c.name}
//                   onClick={()=>setProductCategoryFilter(s=> s===c.name ? "" : c.name)}
//                   style={{
//                     padding:"8px 18px",borderRadius:999,border: productCategoryFilter === c.name ? `2px solid ${c.accent}` : "2px solid #EAE8F2",
//                     background: productCategoryFilter === c.name ? c.accent : "#fff",color: productCategoryFilter === c.name ? "#fff" : "#1C1C2E",
//                     fontSize:13,fontWeight:800,cursor:"pointer",fontFamily:"Nunito",transition:"all .2s",
//                     display:"inline-flex",alignItems:"center",gap:6
//                   }}
//                 >{c.icon} {c.name}</button>
//               ))}
//             </div>
//           )}
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:22}}>
//             {(viewAllProducts ? filteredProducts : PRODUCTS.slice(0,6)).map((p,i)=><ProductCard key={p.id} p={p} onAdd={addToCart} onView={()=>setActiveProduct(p)} idx={i}/>)}
//           </div>
//           {viewAllProducts && filteredProducts.length === 0 && (
//             <div style={{textAlign:"center",padding:"48px 20px",color:"#9B9BBB",fontSize:15,fontWeight:700}}>No products in this category yet.</div>
//           )}
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section id="how-it-works" style={{padding:"76px 40px",background:"#FFF8F0"}}>
//         <div style={{maxWidth:1100,margin:"0 auto"}}>
//           <div style={{textAlign:"center",marginBottom:52}}>
//             <div className="slabel" style={{display:"flex",justifyContent:"center"}}>✦ The Process</div>
//             <h2 className="fr" style={{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#1C1C2E"}}>How It Works</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:20}}>
//             {HOW_STEPS.map((s,i)=>(
//               <div key={s.n} style={{background:s.bg,border:`2px solid ${s.accent}20`,borderRadius:24,padding:26,position:"relative",overflow:"hidden",transition:"transform .3s,box-shadow .3s",cursor:"default"}}
//                 onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-7px)";e.currentTarget.style.boxShadow=`0 18px 48px ${s.accent}20`}}
//                 onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none"}}>
//                 <div style={{position:"absolute",top:-6,right:6,fontSize:68,fontWeight:900,opacity:.07,fontFamily:"Fraunces,serif",color:s.accent,userSelect:"none"}}>{s.n}</div>
//                 <div style={{width:54,height:54,borderRadius:17,background:"#fff",boxShadow:`0 4px 16px ${s.accent}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:25,marginBottom:18}}>{s.icon}</div>
//                 <div style={{fontWeight:800,fontSize:16,color:"#1C1C2E",marginBottom:9}}>{s.title}</div>
//                 <div style={{color:"#6B6B8A",fontSize:13,lineHeight:1.65}}>{s.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CUSTOM ORDER */}
//       <section id="custom-order" style={{padding:"76px 40px",background:"#FDFCF8"}}>
//         <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"center"}} className="two-col">
//           <div>
//             <div className="slabel">✦ Bring Your Vision to Life</div>
//             <h2 className="fr" style={{fontSize:"clamp(26px,4vw,40px)",fontWeight:900,color:"#1C1C2E",marginBottom:18,lineHeight:1.15}}>Custom Product<br/><em style={{color:"#FF6B6B"}}>On Demand</em></h2>
//             <p style={{color:"#6B6B8A",lineHeight:1.75,marginBottom:26,fontSize:15}}>Got an idea but no 3D model? Describe it. Have an STL file? Upload it. We handle everything — from slicing to shipping.</p>
//             {[["📁","Upload STL, OBJ or describe your idea"],["🎨","Choose from 15 filament colours"],["🧱","Select material: PLA, PETG, ABS, TPU"],["⚡","Quote back in under 2 hours"]].map(([ic,f])=>(
//               <div key={f} style={{display:"flex",alignItems:"center",gap:13,marginBottom:13}}>
//                 <div style={{width:36,height:36,borderRadius:11,background:"#FFF0E6",border:"1.5px solid #FFD4AA",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{ic}</div>
//                 <span style={{color:"#1C1C2E",fontSize:14,fontWeight:700}}>{f}</span>
//               </div>
//             ))}
//           </div>
//           {/* Customiser – submits to FormSubmit.co */}
//           <form
//             onSubmit={handleQuoteSubmit}
//             style={{background:"#fff",border:"2px solid #EAE8F2",borderRadius:26,padding:30,boxShadow:"0 8px 40px rgba(0,0,0,.06)"}}>
//             <div className="fr" style={{fontWeight:900,fontSize:19,color:"#1C1C2E",marginBottom:22}}>Live Product Customiser 🎨</div>
//             <div style={{height:160,borderRadius:18,marginBottom:22,background:`linear-gradient(135deg,${custColor}18,${custColor}08)`,border:`2px solid ${custColor}28`,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8}}>
//               <div className="float" style={{fontSize:56,filter:`drop-shadow(0 4px 14px ${custColor}55)`}}>🖨️</div>
//               <div style={{fontSize:11,color:"#9B9BBB",fontWeight:800,letterSpacing:".05em"}}>{custText||"Your Custom Product"} · {custSize} · {custMat}</div>
//             </div>
//             <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
//               <div>
//                 <label style={{fontSize:11,color:"#6B6B8A",display:"block",marginBottom:7,fontWeight:800}}>MATERIAL</label>
//                 <select name="Material" value={custMat} onChange={e=>setCustMat(e.target.value)}>{MATERIALS.map(m=><option key={m.name}>{m.name}</option>)}</select>
//               </div>
//               <div>
//                 <label style={{fontSize:11,color:"#6B6B8A",display:"block",marginBottom:7,fontWeight:800}}>SIZE</label>
//                 <select name="Size" value={custSize} onChange={e=>setCustSize(e.target.value)}>{["XS","S","M","L","XL"].map(s=><option key={s}>{s}</option>)}</select>
//               </div>
//             </div>
//             <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
//               <div>
//                 <label style={{fontSize:11,color:"#6B6B8A",display:"block",marginBottom:7,fontWeight:800}}>EMAIL <span style={{color:"#FF6B6B"}}>*</span></label>
//                 <input type="email" name="Email" placeholder="you@example.com" style={{borderColor: quoteErrors.email ? "#FF6B6B" : undefined}} onChange={()=>setQuoteErrors(prev=>({...prev, email:""}))} />
//                 {quoteErrors.email && <div style={{fontSize:11,color:"#FF6B6B",marginTop:4,fontWeight:700}}>{quoteErrors.email}</div>}
//               </div>
//               <div>
//                 <label style={{fontSize:11,color:"#6B6B8A",display:"block",marginBottom:7,fontWeight:800}}>PHONE <span style={{color:"#FF6B6B"}}>*</span></label>
//                 <input type="tel" name="Phone" placeholder="+1 555 000 0000" style={{borderColor: quoteErrors.phone ? "#FF6B6B" : undefined}} onChange={()=>setQuoteErrors(prev=>({...prev, phone:""}))} />
//                 {quoteErrors.phone && <div style={{fontSize:11,color:"#FF6B6B",marginTop:4,fontWeight:700}}>{quoteErrors.phone}</div>}
//               </div>
//             </div>
//             <div style={{marginBottom:12}}>
//               <label style={{fontSize:11,color:"#6B6B8A",display:"block",marginBottom:7,fontWeight:800}}>COLOUR</label>
//               <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>
//                 {["#FF6B6B","#FF9F43","#0ABFBC","#27AE60","#9B59B6","#E84393","#3498DB","#FBBF24"].map(c=>(
//                   <button key={c} type="button" onClick={()=>setCustColor(c)} style={{width:30,height:30,borderRadius:"50%",background:c,border:custColor===c?"3px solid #1C1C2E":"3px solid transparent",cursor:"pointer",transition:"transform .2s",transform:custColor===c?"scale(1.28)":"scale(1)",boxShadow:`0 2px 8px ${c}44`}}/>
//                 ))}
//               </div>
//             </div>
//             <div style={{marginBottom:12}}>
//               <label style={{fontSize:11,color:"#6B6B8A",display:"block",marginBottom:7,fontWeight:800}}>CUSTOM TEXT / INSTRUCTIONS</label>
//               <input name="Custom text / instructions" value={custText} onChange={e=>setCustText(e.target.value)} placeholder="e.g. Add my name 'Alex' in bold"/>
//             </div>
//             <div style={{marginBottom:20}}>
//               <label style={{fontSize:11,color:"#6B6B8A",display:"block",marginBottom:7,fontWeight:800}}>UPLOAD FILE (STL / OBJ / Image / GLTF / GLB) <span style={{color:"#FF6B6B"}}>*</span></label>
//               <div style={{border:`2px dashed ${quoteErrors.file ? "#FF6B6B" : uploaded ? "#27AE60" : "#D8D6EE"}`,borderRadius:14,padding:"10px 14px",background:uploaded ? "#EDFFF5" : "#F8F7F3",transition:"all .2s"}}>
//                 <input
//                   type="file"
//                   name="attachment"
//                   accept=".stl,.obj,.gltf,.glb,image/*"
//                   onChange={e=>{
//                     const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
//                     setQuoteFile(file);
//                     setUploaded(!!file);
//                     if (file) setQuoteErrors(prev=>({ ...prev, file: "" }));
//                   }}
//                   style={{width:"100%",fontSize:12}}
//                 />
//                 <div style={{marginTop:8,fontSize:11,color: quoteErrors.file ? "#FF6B6B" : "#9B9BBB",fontWeight:700}}>
//                   {uploaded && quoteFile ? `Selected: ${quoteFile.name}` : quoteErrors.file || "Attach a 3D file or reference image (required)"}
//                 </div>
//               </div>
//             </div>
//             <button type="submit" className="btn-coral" style={{width:"100%",justifyContent:"center",fontSize:16,padding:"15px"}}>🚀 Request a Quote</button>
//           </form>
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section style={{padding:"76px 40px",background:"#FFF4E6"}}>
//         <div style={{maxWidth:1200,margin:"0 auto"}}>
//           <div className="slabel">✦ Browse by Category</div>
//           <h2 className="fr" style={{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#1C1C2E",marginBottom:36}}>Find Your Category</h2>
//           <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:18}}>
//             {CATEGORIES.map(c=>(
//               <div key={c.name} style={{background:c.bg,border:`2px solid ${c.accent}20`,borderRadius:22,padding:26,cursor:"pointer",transition:"transform .3s,box-shadow .3s"}}
//                 onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow=`0 16px 40px ${c.accent}22`;e.currentTarget.style.borderColor=`${c.accent}44`}}
//                 onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=`${c.accent}20`}}>
//                 <div style={{width:52,height:52,borderRadius:16,background:"#fff",boxShadow:`0 4px 14px ${c.accent}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:14}}>{c.icon}</div>
//                 <div style={{fontWeight:800,fontSize:15,color:"#1C1C2E",marginBottom:4}}>{c.name}</div>
//                 <div style={{fontSize:12,color:"#9B9BBB",fontWeight:700}}>{c.count} products</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>




//       {/* MATERIALS */}
//       <section id="materials" style={{padding:"76px 40px",background:"#FDFCF8"}}>
//         <div style={{maxWidth:1100,margin:"0 auto"}}>
//           <div style={{textAlign:"center",marginBottom:52}}>
//             <div className="slabel" style={{display:"flex",justifyContent:"center"}}>✦ Built to Last</div>
//             <h2 className="fr" style={{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#1C1C2E"}}>Premium Materials 🧪</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:18}}>
//             {MATERIALS.map(m=>(
//               <div key={m.name} style={{background:m.bg,border:`2px solid ${m.accent}20`,borderRadius:22,padding:26,transition:"transform .3s,box-shadow .3s"}}
//                 onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow=`0 16px 40px ${m.accent}22`}}
//                 onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none"}}>
//                 <div style={{width:52,height:52,borderRadius:16,background:"#fff",boxShadow:`0 4px 14px ${m.accent}33`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>
//                   <div style={{width:22,height:22,borderRadius:"50%",background:m.accent}}/>
//                 </div>
//                 <div className="fr" style={{fontWeight:900,fontSize:22,color:"#1C1C2E",marginBottom:4}}>{m.name}</div>
//                 <div style={{fontSize:12,color:"#9B9BBB",fontWeight:700,marginBottom:10}}>{m.temp}{m.flex&&" · Flexible"}</div>
//                 <div style={{fontSize:13,color:"#6B6B8A",lineHeight:1.65,marginBottom:14}}>{m.desc}</div>
//                 <div style={{fontSize:10,color:"#9B9BBB",fontWeight:900,letterSpacing:".1em",marginBottom:6}}>STRENGTH INDEX</div>
//                 <div style={{background:"#fff",borderRadius:99,height:7,overflow:"hidden"}}>
//                   <div style={{width:`${m.strength}%`,height:"100%",background:m.accent,borderRadius:99,transition:"width 1s"}}/>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section style={{padding:"76px 40px",background:"#E8FFFB"}}>
//         <div style={{maxWidth:1000,margin:"0 auto"}}>
//           <div style={{textAlign:"center",marginBottom:44}}>
//             <div className="slabel" style={{display:"flex",justifyContent:"center"}}>✦ Happy Customers</div>
//             <h2 className="fr" style={{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#1C1C2E"}}>What People Say 💬</h2>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:22}}>
//             {TESTIMONIALS.map(r=>(
//               <div key={r.name} style={{background:"#fff",border:`2px solid ${r.accent}18`,borderRadius:24,padding:26,boxShadow:`0 6px 28px ${r.accent}0e`,transition:"transform .3s"}}
//                 onMouseEnter={e=>e.currentTarget.style.transform="translateY(-6px)"}
//                 onMouseLeave={e=>e.currentTarget.style.transform="none"}>
//                 <div style={{display:"flex",gap:3,marginBottom:14}}>{[...Array(5)].map((_,i)=><Star key={i}/>)}</div>
//                 <p style={{color:"#6B6B8A",fontSize:14,lineHeight:1.75,marginBottom:18}}>"{r.text}"</p>
//                 <div style={{display:"flex",alignItems:"center",gap:12}}>
//                   <div style={{width:42,height:42,borderRadius:"50%",background:r.bg,border:`2px solid ${r.accent}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:900,color:r.accent}}>{r.avatar}</div>
//                   <div>
//                     <div style={{fontWeight:800,fontSize:14,color:"#1C1C2E"}}>{r.name}</div>
//                     <div style={{fontSize:12,color:"#9B9BBB",fontWeight:600}}>{r.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{padding:"76px 40px",background:"linear-gradient(135deg,#FF6B6B 0%,#FF9F43 55%,#FFD580 100%)",textAlign:"center",position:"relative",overflow:"hidden"}}>
//         <div style={{position:"absolute",top:-70,left:-70,width:260,height:260,borderRadius:"50%",background:"rgba(255,255,255,.14)",pointerEvents:"none"}}/>
//         <div style={{position:"absolute",bottom:-50,right:-50,width:200,height:200,borderRadius:"50%",background:"rgba(255,255,255,.10)",pointerEvents:"none"}}/>
//         <div style={{maxWidth:640,margin:"0 auto",position:"relative"}}>
//           <div style={{fontSize:52,marginBottom:14}} className="float">🚀</div>
//           <h2 className="fr" style={{fontSize:"clamp(26px,5vw,50px)",fontWeight:900,color:"#fff",marginBottom:18,lineHeight:1.15}}>Turn Your Ideas into Reality with 3D Printing</h2>
//           <p style={{color:"rgba(255,255,255,.88)",fontSize:17,marginBottom:34,lineHeight:1.68}}>Join 2,000+ happy customers. Fast turnaround, premium materials, free revisions.</p>
//           <button onClick={()=>document.getElementById("custom-order")?.scrollIntoView({behavior:"smooth"})} style={{background:"#fff",color:"#FF6B6B",border:"none",borderRadius:999,padding:"17px 40px",fontSize:17,fontWeight:900,cursor:"pointer",fontFamily:"Nunito,sans-serif",transition:"all .25s",boxShadow:"0 8px 32px rgba(0,0,0,.15)"}}
//             onMouseEnter={e=>{e.target.style.transform="translateY(-4px)";e.target.style.boxShadow="0 16px 48px rgba(0,0,0,.2)"}}
//             onMouseLeave={e=>{e.target.style.transform="none";e.target.style.boxShadow="0 8px 32px rgba(0,0,0,.15)"}}>
//             ✨ Start Custom Order
//           </button>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer style={{padding:"56px 40px 28px",background:"#1C1C2E"}}>
//         <div style={{maxWidth:1200,margin:"0 auto"}}>
//           <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:36,marginBottom:44}} className="two-col">
//             <div>
//               <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:14}}>
//                 <div style={{width:32,height:32,borderRadius:10,background:"linear-gradient(135deg,#FF6B6B,#FF9F43)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>🖨️</div>
//                 <span className="fr" style={{fontSize:21,fontWeight:900,color:"#fff"}}>Print<span style={{color:"#FF6B6B"}}>3D</span></span>
//               </div>
//               <p style={{color:"rgba(255,255,255,.4)",fontSize:13,lineHeight:1.75,maxWidth:240}}>Premium 3D printed products, on demand. Crafted with precision, shipped with care. 🌟</p>
//             </div>
//             {[{title:"Products",links:["Home Decor","Office","Gaming","Gifts","Tools"]},{title:"Company",links:["About Us","Blog","Careers","Press"]},{title:"Support",links:["FAQ","Shipping","Returns","Contact"]}].map(col=>(
//               <div key={col.title}>
//                 <div style={{fontWeight:900,color:"#fff",marginBottom:14,fontSize:13,letterSpacing:".06em"}}>{col.title.toUpperCase()}</div>
//                 {col.links.map(l=>(
//                   <div key={l} style={{color:"rgba(255,255,255,.38)",fontSize:13,marginBottom:9,cursor:"pointer",fontWeight:600,transition:"color .2s"}}
//                     onMouseEnter={e=>e.target.style.color="#FF9F43"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.38)"}>{l}</div>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div style={{borderTop:"1.5px solid rgba(255,255,255,.08)",paddingTop:22,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
//             <div style={{color:"rgba(255,255,255,.28)",fontSize:12,fontWeight:600}}>© 2026 Print3D. All rights reserved.</div>
//             <div style={{color:"rgba(255,255,255,.28)",fontSize:12,fontWeight:600}}>Secure payments via Stripe 🔒</div>
//           </div>
//         </div>
//       </footer>

//       {/* CART DRAWER */}
//       {cartOpen&&(
//         <div style={{position:"fixed",inset:0,zIndex:200}}>
//           <div onClick={()=>setCartOpen(false)} style={{position:"absolute",inset:0,background:"rgba(28,28,46,.45)",backdropFilter:"blur(6px)"}}/>
//           <div style={{position:"absolute",right:0,top:0,bottom:0,width:360,background:"#fff",borderLeft:"2px solid #EAE8F2",padding:26,display:"flex",flexDirection:"column",boxShadow:"-16px 0 60px rgba(0,0,0,.10)"}}>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:26}}>
//               <div className="fr" style={{fontWeight:900,fontSize:21,color:"#1C1C2E"}}>Your Cart 🛒</div>
//               <button onClick={()=>setCartOpen(false)} style={{background:"#F5F4F0",border:"none",color:"#6B6B8A",fontSize:16,cursor:"pointer",borderRadius:10,width:34,height:34}}>✕</button>
//             </div>
//             {cart.length===0?(
//               <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"#9B9BBB",flexDirection:"column",gap:12}}>
//                 <div style={{fontSize:52}}>🛒</div>
//                 <div style={{fontWeight:800,fontSize:15}}>Your cart is empty</div>
//                 <div style={{fontSize:13}}>Add some awesome products!</div>
//               </div>
//             ):(
//               <>
//                 <div style={{flex:1,overflowY:"auto"}}>
//                   {cart.map(item=>(
//                     <div key={item.id} style={{display:"flex",gap:12,padding:"14px 0",borderBottom:"1.5px solid #F5F4F0"}}>
//                       <div style={{width:56,height:56,borderRadius:14,background:item.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{item.img}</div>
//                       <div style={{flex:1}}>
//                         <div style={{fontWeight:800,fontSize:13,color:"#1C1C2E",marginBottom:3}}>{item.name}</div>
//                         <div style={{color:"#9B9BBB",fontSize:12,fontWeight:700}}>Qty: {item.qty}</div>
//                       </div>
//                       <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6}}>
//                         <div className="fr" style={{fontWeight:900,color:"#FF6B6B",fontSize:15}}>${(item.price*item.qty).toFixed(2)}</div>
//                         <button onClick={()=>removeFromCart(item.id)} style={{background:"none",border:"none",color:"#BBB",cursor:"pointer",fontSize:12,fontWeight:700}}>Remove</button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{paddingTop:18}}>
//                   <div style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
//                     <span style={{color:"#6B6B8A",fontWeight:700}}>Total</span>
//                     <span className="fr" style={{fontWeight:900,fontSize:22,color:"#1C1C2E"}}>${cartTotal.toFixed(2)}</span>
//                   </div>
//                   <button className="btn-coral" style={{width:"100%",justifyContent:"center",padding:"15px",fontSize:15}}>Checkout with Stripe →</button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* PRODUCT MODAL */}
//       {activeProduct&&(
//         <div className="modal-wrap" onClick={()=>setActiveProduct(null)}>
//           <div className="modal" onClick={e=>e.stopPropagation()}>
//             <div style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
//               <div style={{display:"inline-block",padding:"4px 14px",borderRadius:999,background:activeProduct.bg,color:activeProduct.accent,border:`1.5px solid ${activeProduct.accent}33`,fontSize:12,fontWeight:800}}>{activeProduct.category}</div>
//               <button onClick={()=>setActiveProduct(null)} style={{background:"#F5F4F0",border:"none",color:"#6B6B8A",fontSize:16,cursor:"pointer",borderRadius:10,width:34,height:34}}>✕</button>
//             </div>
//             <div style={{height:190,borderRadius:20,marginBottom:22,background:activeProduct.bg,border:`2px solid ${activeProduct.accent}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:80,position:"relative",overflow:"hidden"}} className="float">
//               {(Array.isArray(activeProduct.img) ? activeProduct.img[modalImgIdx] : activeProduct.img) ?? ""}
//               {Array.isArray(activeProduct.img) && activeProduct.img.length > 1 && (
//                 <>
//                   <button
//                     type="button"
//                     onClick={()=>setModalImgIdx(i=>(i-1+activeProduct.img.length)%activeProduct.img.length)}
//                     style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",width:32,height:32,borderRadius:"50%",border:"none",background:"#FFFFFFDD",cursor:"pointer",fontSize:18,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 12px rgba(0,0,0,.12)"}}
//                   >‹</button>
//                   <button
//                     type="button"
//                     onClick={()=>setModalImgIdx(i=>(i+1)%activeProduct.img.length)}
//                     style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",width:32,height:32,borderRadius:"50%",border:"none",background:"#FFFFFFDD",cursor:"pointer",fontSize:18,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 12px rgba(0,0,0,.12)"}}
//                   >›</button>
//                 </>
//               )}
//             </div>
//             {activeProduct.tag&&<div style={{display:"inline-block",padding:"4px 14px",borderRadius:999,background:"#FF6B6B",color:"#fff",fontSize:11,fontWeight:800,marginBottom:12}}>{activeProduct.tag}</div>}
//             <h3 className="fr" style={{fontWeight:900,fontSize:24,color:"#1C1C2E",marginBottom:10}}>{activeProduct.name}</h3>
//             <p style={{color:"#6B6B8A",marginBottom:18,lineHeight:1.7,fontSize:14}}>{activeProduct.desc}</p>
//             <div style={{display:"flex",gap:20,marginBottom:26,flexWrap:"wrap"}}>
//               <span style={{fontSize:13,color:"#9B9BBB",fontWeight:700}}>⏱ Print time: <span style={{color:"#1C1C2E"}}>{activeProduct.time}</span></span>
//               <span style={{fontSize:13,color:"#9B9BBB",fontWeight:700}}>📦 Ships in 3–5 days</span>
//             </div>
//             <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:14}}>
//               <div className="fr" style={{fontWeight:900,fontSize:30,color:"#FF6B6B"}}>${activeProduct.price}</div>
//               <button className="btn-coral" onClick={()=>{addToCart(activeProduct);setActiveProduct(null);setCartOpen(true);}}>Add to Cart 🛒</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* QUOTE MODAL */}
//       {quoteOpen&&(
//         <div className="modal-wrap" onClick={()=>setQuoteOpen(false)}>
//           <div className="modal" style={{textAlign:"center"}} onClick={e=>e.stopPropagation()}>
//             <div style={{fontSize:60,marginBottom:14}}>🎉</div>
//             <h3 className="fr" style={{fontWeight:900,fontSize:24,color:"#1C1C2E",marginBottom:12}}>Quote Request Sent!</h3>
//             <p style={{color:"#6B6B8A",marginBottom:26,lineHeight:1.7,fontSize:14}}>
//               Thanks! We got your request for a <strong style={{color:"#FF6B6B"}}>{custSize}</strong> item in <strong style={{color:"#FF6B6B"}}>{custMat}</strong>. Our team will reply with pricing and timeline in under 2 hours. 🚀
//             </p>
//             <button className="btn-coral" onClick={()=>setQuoteOpen(false)} style={{margin:"0 auto"}}>✓ Awesome, Got It!</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function ProductCard({p,onAdd,onView,idx}){
//   const [hov,setHov]=useState(false);
//   const [imgIdx,setImgIdx]=useState(0);

//   const totalImgs = Array.isArray(p.img) ? p.img.length : 1;

//   const handlePrev = (e) => {
//     e.stopPropagation();
//     if (!totalImgs) return;
//     setImgIdx(i => (i - 1 + totalImgs) % totalImgs);
//   };

//   const handleNext = (e) => {
//     e.stopPropagation();
//     if (!totalImgs) return;
//     setImgIdx(i => (i + 1) % totalImgs);
//   };
  
//   return (
//     <div onClick={onView}
//       style={{background:"#fff",border:`2px solid ${hov?p.accent+"33":"#EAE8F2"}`,borderRadius:24,padding:22,cursor:"pointer",transform:hov?"translateY(-10px)":"none",transition:"transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s,border-color .35s",boxShadow:hov?`0 24px 56px ${p.accent}15`:"0 2px 12px rgba(0,0,0,.04)",animation:"fadeUp .6s cubic-bezier(.22,1,.36,1) forwards",animationDelay:`${idx*.07}s`,opacity:0}}
//       onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
//       <div style={{height:155,borderRadius:18,marginBottom:18,background:p.bg,border:`1.5px solid ${p.accent}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:60,position:"relative",overflow:"hidden",transition:"transform .35s",transform:hov?"scale(1.05) rotate(2deg)":"scale(1)"}}>
//         {(Array.isArray(p.img) ? p.img[imgIdx] : p.img) || ""}
//         {totalImgs > 1 && (
//           <>
//             <button
//               onClick={handlePrev}
//               style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",width:26,height:26,borderRadius:"50%",border:"none",background:"#FFFFFFDD",cursor:"pointer",fontSize:14,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}
//             >
//               ‹
//             </button>
//             <button
//               onClick={handleNext}
//               style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",width:26,height:26,borderRadius:"50%",border:"none",background:"#FFFFFFDD",cursor:"pointer",fontSize:14,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}
//             >
//               ›
//             </button>
//           </>
//         )}
//         {p.tag&&<div style={{position:"absolute",top:9,right:9,padding:"3px 11px",borderRadius:999,background:p.tag==="BESTSELLER"?"#FF9F43":p.tag==="NEW"?"#0ABFBC":"#FF6B6B",color:"#fff",fontSize:10,fontWeight:800}}>{p.tag}</div>}
//       </div>
//       <div style={{fontSize:10,color:"#9B9BBB",marginBottom:7,fontWeight:800,letterSpacing:".07em"}}>{p.category} · ⏱ {p.time}</div>
//       <div style={{fontWeight:800,fontSize:16,color:"#1C1C2E",marginBottom:7}}>{p.name}</div>
//       <div style={{fontSize:13,color:"#6B6B8A",lineHeight:1.6,marginBottom:16}}>{p.desc}</div>
//       <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
//         <div style={{fontFamily:"Fraunces,serif",fontWeight:900,fontSize:21,color:"#1C1C2E"}}>${p.price}</div>
//         <div style={{display:"flex",gap:7}}>
//           <button onClick={onView} style={{background:"#F5F4F0",border:"none",borderRadius:10,padding:"8px 13px",cursor:"pointer",color:"#6B6B8A",fontSize:12,fontWeight:700,transition:"background .2s"}}
//             onMouseEnter={e=>e.target.style.background="#EAE8F2"} onMouseLeave={e=>e.target.style.background="#F5F4F0"}>Preview</button>
//           <button onClick={()=>onAdd(p)} style={{background:p.accent,border:"none",borderRadius:10,padding:"8px 14px",cursor:"pointer",color:"#fff",fontSize:12,fontWeight:800,boxShadow:`0 4px 14px ${p.accent}44`,transition:"transform .2s"}}
//             onMouseEnter={e=>e.currentTarget.style.transform="scale(1.06)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>+ Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }