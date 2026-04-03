import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroEarthy from "@/assets/hero-earthy.jpg";
import heroStreet from "@/assets/hero-street.jpg";
import heroWellness from "@/assets/hero-wellness.jpg";

const layouts = [
  {
    id: 1,
    name: "Earthy Premium",
    subtitle: "Editorial Dispensary",
    description: "High-end cannabis brand meets editorial magazine. Deep forest greens, warm golds, and serif typography.",
    image: heroEarthy,
    path: "/layout-earthy",
    accent: "#c9a96e",
    bg: "#0d1f0d",
  },
  {
    id: 2,
    name: "Street Pharma",
    subtitle: "Bold Brutalist",
    description: "Streetwear meets dispensary. Jet black with electric purple accent, bold typography, asymmetric grids.",
    image: heroStreet,
    path: "/layout-street",
    accent: "#8b5cf6",
    bg: "#0a0a0a",
  },
  {
    id: 3,
    name: "Clean Wellness",
    subtitle: "Modern Apothecary",
    description: "Clean wellness aesthetic. Soft sage and cream tones, rounded elements, trust-forward design.",
    image: heroWellness,
    path: "/layout-wellness",
    accent: "#bc6c25",
    bg: "#fefae0",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111", color: "#eee", fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Header */}
      <div className="text-center py-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-sm tracking-[0.5em] uppercase mb-4"
        >
          Doc's Hemp RX — Layout Concepts
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold tracking-tight"
        >
          3 Design Directions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg"
        >
          Click any card to explore the full layout
        </motion.p>
      </div>

      {/* Layout Cards */}
      <div className="max-w-6xl mx-auto px-8 pb-20 grid grid-cols-3 gap-8">
        {layouts.map((layout, i) => (
          <motion.div
            key={layout.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
          >
            <Link to={layout.path} className="block group">
              <div
                className="rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl"
                style={{ border: `1px solid rgba(255,255,255,0.1)` }}
              >
                {/* Preview image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={layout.image}
                    alt={layout.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${layout.bg}, transparent)` }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: layout.accent, color: layout.bg }}
                    >
                      Layout {layout.id}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <h2 className="text-xl font-bold mb-1">{layout.name}</h2>
                  <p className="text-sm mb-3" style={{ color: layout.accent }}>{layout.subtitle}</p>
                  <p className="text-sm opacity-50 leading-relaxed">{layout.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: layout.accent }}>
                    View Full Layout →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;
