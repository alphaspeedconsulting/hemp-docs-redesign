import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wellness.jpg";
import productFlower from "@/assets/product-flower.jpg";
import productConcentrate from "@/assets/product-concentrate.jpg";
import productPreroll from "@/assets/product-preroll.jpg";
import productVape from "@/assets/product-vape.jpg";
import productRosin from "@/assets/product-rosin.jpg";
import { Link } from "react-router-dom";
import { Shield, Truck, Leaf, RefreshCw } from "lucide-react";

const categories = [
  { name: "Flower", emoji: "🌿" },
  { name: "Fresh Frozen Rosin", emoji: "❄️" },
  { name: "Concentrates", emoji: "💎" },
  { name: "Pre Rolls", emoji: "🔥" },
  { name: "Vapes", emoji: "💨" },
];

const products = [
  { name: "Thors Hammer – Flower", price: "$30–$60", image: productFlower, tag: "Popular" },
  { name: "Tropicana Zkittles", price: "$40–$45", image: productRosin, tag: "" },
  { name: "Diamond Sauce", price: "From $17", image: productConcentrate, tag: "Best Value" },
  { name: "510 Vape Cartridge", price: "$15", image: productVape, tag: "" },
  { name: "Blackberry Kush Rosin", price: "$40–$45", image: productRosin, tag: "New" },
  { name: "THCa Pre Rolls", price: "$15–$21", image: productPreroll, tag: "" },
];

const trustBadges = [
  { icon: Shield, text: "Money Back Guarantee" },
  { icon: Truck, text: "Free Shipping $50+" },
  { icon: Leaf, text: "All Natural" },
  { icon: RefreshCw, text: "Lab Tested" },
];

const LayoutWellness = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fefae0", color: "#344e41", fontFamily: "'Outfit', sans-serif" }}>
      {/* Announcement */}
      <div className="text-center py-2.5 text-sm" style={{ backgroundColor: "#344e41", color: "#fefae0" }}>
        🎁 Use code <strong>WELCOME</strong> at checkout for a free gift! &nbsp;|&nbsp; Free shipping on orders $50+
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(254,250,224,0.9)", borderBottom: "1px solid rgba(52,78,65,0.1)" }}>
        <Link to="/" className="text-sm opacity-50 hover:opacity-100 transition-opacity">← Back to Layouts</Link>
        <h1 className="text-xl font-semibold tracking-wide">
          Doc's Hemp <span className="font-light">RX</span>
        </h1>
        <div className="flex gap-6 text-sm opacity-60">
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Shop</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">About</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Contact</span>
        </div>
      </nav>

      {/* Category pills - sticky */}
      <div className="sticky top-[61px] z-40 py-3 px-8 flex justify-center gap-3 backdrop-blur-md" style={{ backgroundColor: "rgba(254,250,224,0.85)", borderBottom: "1px solid rgba(52,78,65,0.08)" }}>
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="px-5 py-2 rounded-full text-sm transition-all hover:scale-105 cursor-pointer"
            style={{ backgroundColor: "rgba(163,177,138,0.2)", border: "1px solid rgba(163,177,138,0.3)" }}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "70vh" }}>
        <img src={heroImg} alt="Natural hemp" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(254,250,224,0.7) 0%, rgba(254,250,224,0.3) 50%, transparent 100%)" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 self-start"
            style={{ backgroundColor: "rgba(163,177,138,0.3)", border: "1px solid rgba(163,177,138,0.4)" }}
          >
            <Shield className="w-4 h-4" /> Money Back Guarantee
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl font-semibold leading-tight mb-4"
          >
            Nature's Finest,<br />
            <span style={{ color: "#bc6c25" }}>Delivered to Your Door</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg opacity-70 mb-8 max-w-md"
          >
            Premium THCa products manufactured in-house. Dispensary quality at direct-to-consumer prices.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="self-start px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "#344e41", color: "#fefae0" }}
          >
            Explore Products →
          </motion.button>
        </div>
      </section>

      {/* Trust badges */}
      <div className="py-8 px-8 flex justify-center gap-12" style={{ backgroundColor: "rgba(163,177,138,0.15)" }}>
        {trustBadges.map((b) => (
          <div key={b.text} className="flex items-center gap-2 text-sm opacity-70">
            <b.icon className="w-4 h-4" style={{ color: "#bc6c25" }} />
            <span>{b.text}</span>
          </div>
        ))}
      </div>

      {/* Products */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#bc6c25" }}>Our Collection</p>
          <h3 className="text-3xl font-semibold">Featured Products</h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(52,78,65,0.08)" }}
            >
              <div className="relative overflow-hidden aspect-square" style={{ backgroundColor: "#f0edd4" }}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.tag && (
                  <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "#bc6c25", color: "#fefae0" }}>
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="font-medium text-base mb-1">{p.name}</p>
                <p className="text-lg font-semibold" style={{ color: "#bc6c25" }}>{p.price}</p>
                <button className="mt-3 w-full py-2.5 rounded-full text-sm font-medium transition-all opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: "#344e41", color: "#fefae0" }}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: "#344e41", color: "#fefae0" }}>
        <h3 className="text-3xl font-semibold mb-4">Have Questions?</h3>
        <p className="opacity-70 mb-8 max-w-md mx-auto">We're here to help. Reach out to us and we'll get back to you promptly.</p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105" style={{ backgroundColor: "#fefae0", color: "#344e41" }}>
            Email Us
          </button>
          <button className="px-8 py-3 rounded-full text-sm font-medium border transition-all hover:scale-105" style={{ borderColor: "rgba(254,250,224,0.3)" }}>
            FAQ
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8" style={{ backgroundColor: "#2d3f34", color: "rgba(254,250,224,0.5)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
          <p>Doc's Hemp RX &nbsp;•&nbsp; Highlands Ranch, CO</p>
          <p>© 2024 Doc's Hemp RX. All products contain no Δ9THC.</p>
          <p>hello@docshemprx.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LayoutWellness;
