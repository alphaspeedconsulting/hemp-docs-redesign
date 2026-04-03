import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { Product } from "@/data/products";
import { WP_BASE } from "@/lib/links";

const EFFECT_COLOR_VARS: Record<string, string> = {
  relaxation: "--effect-relaxation",
  sleep: "--effect-sleep",
  focus: "--effect-focus",
  euphoria: "--effect-euphoria",
  creative: "--effect-creative",
  social: "--effect-social",
};

const EFFECT_LABELS: Record<string, string> = {
  relaxation: "Relaxing",
  sleep: "Sleepy",
  focus: "Focused",
  euphoria: "Euphoric",
  creative: "Creative",
  social: "Social",
};

interface Props {
  product: Product;
  /** When true, show TX non-compliance warning on banned products */
  showCompliance: boolean;
  animationIndex?: number;
}

const ProductCard = ({ product, showCompliance, animationIndex = 0 }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={animationIndex}
    variants={fadeUp}
    className="group cursor-pointer"
  >
    {/* Image */}
    <div className="relative overflow-hidden rounded-sm aspect-square mb-4 bg-brand-base-light">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Badge (Staff Pick / New / Exotic) */}
      {product.badge && (
        <span className="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold bg-brand-accent text-brand-base">
          {product.badge}
        </span>
      )}

      {/* Farm Bill Compliant badge */}
      {product.txCompliant && (
        <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-[9px] tracking-wider uppercase rounded-sm bg-brand-base/80 border border-effect-focus/50 text-effect-focus">
          <ShieldCheck className="w-3 h-3" />
          Δ9 &lt; 0.3%
        </span>
      )}

      {/* TX non-compliant warning overlay */}
      {showCompliance && !product.txCompliant && (
        <div className="absolute inset-0 bg-brand-base/70 flex items-center justify-center">
          <span className="text-xs tracking-[0.2em] uppercase text-brand-text/60 text-center px-4">
            Not available<br />in Texas
          </span>
        </div>
      )}

      {/* Quick-add on hover (shown only for compliant products or non-TX) */}
      {(!showCompliance || product.txCompliant) && (
        <a
          href={WP_BASE + product.wooUrl}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 text-[10px] tracking-[0.2em] uppercase bg-brand-accent text-brand-base font-semibold"
        >
          + Add
        </a>
      )}
    </div>

    {/* Meta */}
    <p className="text-xs tracking-[0.2em] uppercase text-brand-text/50 mb-1">
      {product.category}
    </p>
    <a href={WP_BASE + product.wooUrl} className="text-lg font-light font-display text-brand-text mb-1 hover:text-brand-accent transition-colors block">
      {product.name}
    </a>
    {product.strainName && (
      <p className="text-xs italic text-brand-text/40 mb-2">{product.strainName}</p>
    )}

    {/* Effect tags (first 2) */}
    <div className="flex flex-wrap gap-1.5 mb-2">
      {product.effectTags.slice(0, 2).map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase rounded-sm border"
          style={{
            borderColor: `hsl(var(${EFFECT_COLOR_VARS[tag]}) / 0.4)`,
            color: `hsl(var(${EFFECT_COLOR_VARS[tag]}))`,
          }}
        >
          {EFFECT_LABELS[tag]}
        </span>
      ))}
    </div>

    {/* Price + THCa % + COA */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-brand-accent">{product.price}</p>
        {product.thcaPercent && (
          <p className="text-[10px] tracking-wider text-brand-text/40 font-mono mt-0.5">
            {product.thcaPercent}
          </p>
        )}
      </div>
      {product.coaUrl && (
        <a
          href={WP_BASE + product.coaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-wider uppercase text-brand-text/40 hover:text-brand-accent transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          View COA
        </a>
      )}
    </div>
  </motion.div>
);

export default ProductCard;
