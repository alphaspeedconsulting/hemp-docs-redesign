import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { CATEGORIES } from "@/data/products";

const CategoryScroller = () => (
  <section className="py-24 px-8 bg-brand-base">
    <h3 className="text-center text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent">
      Shop by Category
    </h3>
    <p className="text-center text-3xl mb-14 font-light font-display text-brand-text">
      Find Your <span className="text-brand-accent">Perfect Product</span>
    </p>

    <div className="flex gap-6 overflow-x-auto pb-4 max-w-6xl mx-auto scrollbar-none">
      {CATEGORIES.map((cat, i) => (
        <motion.a
          key={cat.name}
          href={cat.href}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          variants={fadeUp}
          className="flex-shrink-0 w-48 md:w-56 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-sm mb-4 aspect-[3/4] border border-brand-accent/20">
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-brand-accent/30 to-transparent" />
          </div>
          <p className="text-center text-sm tracking-[0.2em] uppercase text-brand-text/80">
            {cat.name}
          </p>
          <p className="text-center text-xs text-brand-text/40 mt-1">{cat.desc}</p>
        </motion.a>
      ))}
    </div>
  </section>
);

export default CategoryScroller;
