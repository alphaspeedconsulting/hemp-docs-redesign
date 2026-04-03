import { motion } from "framer-motion";
import heroImg from "@/assets/hero-street.jpg";
import productFlower from "@/assets/product-flower.jpg";
import productConcentrate from "@/assets/product-concentrate.jpg";
import productPreroll from "@/assets/product-preroll.jpg";
import productVape from "@/assets/product-vape.jpg";
import productRosin from "@/assets/product-rosin.jpg";
import { Link } from "react-router-dom";

const categories = [
  { name: "Flower", image: productFlower },
  { name: "Rosin", image: productRosin },
  { name: "Concentrates", image: productConcentrate },
  { name: "Pre Rolls", image: productPreroll },
  { name: "Vapes", image: productVape },
];

const products = [
  { name: "THORS HAMMER", category: "FLOWER", price: "$30", image: productFlower },
  { name: "TROPICANA ZKITTLES", category: "LIVE ROSIN", price: "$40", image: productRosin },
  { name: "DIAMOND SAUCE", category: "CONCENTRATE", price: "$17", image: productConcentrate },
  { name: "510 CART", category: "VAPE", price: "$15", image: productVape },
  { name: "BLACKBERRY KUSH", category: "LIVE ROSIN", price: "$40", image: productRosin },
  { name: "PRE ROLLS", category: "PRE ROLL", price: "$15", image: productPreroll },
];

const LayoutStreet = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0a", color: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Top bar */}
      <div className="text-center py-2 text-xs tracking-[0.5em] uppercase" style={{ backgroundColor: "#8b5cf6" }}>
        FREE GIFT WITH CODE: WELCOME
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6" style={{ borderBottom: "2px solid #1a1a1a" }}>
        <Link to="/" className="text-xs tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity">← BACK</Link>
        <h1 className="text-3xl font-black tracking-[-0.02em] uppercase">
          DOC'S
        </h1>
        <div className="flex gap-8 text-xs tracking-[0.3em] uppercase opacity-40">
          <span className="hover:opacity-100 cursor-pointer transition-opacity">Shop</span>
          <span className="hover:opacity-100 cursor-pointer transition-opacity">About</span>
          <span className="hover:opacity-100 cursor-pointer transition-opacity">Cart (0)</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] overflow-hidden">
        <img src={heroImg} alt="Hemp flower" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,0.9))" }} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[8rem] font-black leading-[0.85] tracking-[-0.04em] uppercase"
          >
            PREMIUM<br />
            <span style={{ color: "#8b5cf6" }}>THCa</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm tracking-[0.5em] uppercase"
          >
            Manufacturer Direct &nbsp;•&nbsp; Money Back Guarantee
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 px-14 py-5 text-sm font-bold tracking-[0.4em] uppercase transition-all hover:scale-105"
            style={{ backgroundColor: "#8b5cf6", color: "#0a0a0a" }}
          >
            SHOP NOW
          </motion.button>
        </div>
      </section>

      {/* Categories - asymmetric grid */}
      <section className="py-20 px-8">
        <div className="grid grid-cols-2 gap-2 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group ${i === 0 ? "row-span-2" : ""}`}
              style={{ border: "2px solid #1a1a1a" }}
            >
              <div className={`${i === 0 ? "h-full min-h-[500px]" : "h-60"} relative`}>
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-3xl font-black uppercase tracking-tight">{cat.name}</p>
                    <div className="mt-2 h-0.5 w-0 group-hover:w-16 transition-all duration-500" style={{ backgroundColor: "#8b5cf6" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-8">
        <div className="flex items-center gap-4 mb-12 max-w-6xl mx-auto">
          <h3 className="text-4xl font-black uppercase tracking-tight">ALL PRODUCTS</h3>
          <div className="flex-1 h-px" style={{ backgroundColor: "#1a1a1a" }} />
          <span className="text-xs tracking-[0.3em] uppercase opacity-40">30 ITEMS</span>
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer"
              style={{ border: "2px solid #1a1a1a" }}
            >
              <div className="relative overflow-hidden aspect-square" style={{ backgroundColor: "#111" }}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1" style={{ backgroundColor: "#8b5cf6", color: "#0a0a0a", fontWeight: 700 }}>
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <p className="text-sm font-bold tracking-wide uppercase">{p.name}</p>
                <p className="text-lg font-black" style={{ color: "#8b5cf6" }}>{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8" style={{ borderTop: "2px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-2xl font-black uppercase">DOC'S</p>
          <p className="text-xs tracking-[0.3em] uppercase opacity-30">© 2024 DOC'S HEMP — HIGHLANDS RANCH, CO</p>
          <p className="text-xs opacity-30">hello@docs-hemp.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LayoutStreet;
