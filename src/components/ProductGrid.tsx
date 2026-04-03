import { useMemo } from "react";
import { PRODUCTS, TX_BANNED_CATEGORIES } from "@/data/products";
import type { EffectTag } from "@/data/products";
import EffectNavigator from "./EffectNavigator";
import ProductCard from "./ProductCard";
import { WP_BASE } from "@/lib/links";

interface Props {
  selectedState: string;
  activeEffect: EffectTag | null;
  onEffectChange: (tag: EffectTag | null) => void;
}

const ProductGrid = ({ selectedState, activeEffect, onEffectChange }: Props) => {
  const isTX = selectedState === "TX";

  const filtered = useMemo(() => {
    let list = PRODUCTS;

    // State filter: hide TX-banned product categories
    if (isTX) {
      list = list.filter((p) => !TX_BANNED_CATEGORIES.includes(p.category));
    }

    // Effect filter
    if (activeEffect) {
      list = list.filter((p) => p.effectTags.includes(activeEffect));
    }

    return list;
  }, [isTX, activeEffect]);

  return (
    <section className="py-24 px-8 bg-brand-accent/5">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent">
          Our Collection
        </h3>
        <p className="text-center text-3xl mb-10 font-light font-display text-brand-text">
          Featured <span className="text-brand-accent">THCa Products</span>
        </p>

        {isTX && (
          <p className="text-center text-xs tracking-wider text-brand-text/40 mb-8 border border-brand-accent/15 rounded-sm py-2 px-4 max-w-xl mx-auto">
            Showing products available in Texas. Smokable flower &amp; pre-rolls
            are excluded per TX DSHS 2026 rules.
          </p>
        )}

        <EffectNavigator active={activeEffect} onChange={onEffectChange} />

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-text/40 tracking-wide">
              No products match this filter.{" "}
              <button
                onClick={() => onEffectChange(null)}
                className="text-brand-accent underline underline-offset-2"
              >
                Clear filter
              </button>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                showCompliance={isTX}
                animationIndex={i}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-14">
          <a
            href={WP_BASE + "/shop/"}
            className="inline-block px-12 py-4 text-sm tracking-[0.3em] uppercase transition-all hover:scale-105 border border-brand-accent text-brand-accent"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
