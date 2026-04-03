import productFlower from "@/assets/product-flower.jpg";
import productConcentrate from "@/assets/product-concentrate.jpg";
import productPreroll from "@/assets/product-preroll.jpg";
import productVape from "@/assets/product-vape.jpg";
import productRosin from "@/assets/product-rosin.jpg";
import heroEarthy from "@/assets/hero-earthy.jpg";
import indoorGrow from "@/assets/indoor-grow.jpg";
import indoorMacro from "@/assets/indoor-flower-macro.jpg";
import handTrimmed from "@/assets/hand-trimmed.jpg";

/** Effect moods mapped to CSS variable names (--effect-*) in brand-tokens.css */
export type EffectTag =
  | "relaxation"
  | "sleep"
  | "focus"
  | "euphoria"
  | "creative"
  | "social";

export interface Product {
  id: string;
  name: string;
  category: string;
  /** Deferred — will be populated from WooCommerce product attribute */
  thcaPercent?: string;
  price: string;
  image: string;
  badge?: string;
  effectTags: EffectTag[];
  /** Whether the product is legal in Texas under current DSHS rules */
  txCompliant: boolean;
  coaUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "thors-hammer",
    name: "Thors Hammer",
    category: "Indoor Flower",
    price: "$30–$60",
    image: productFlower,
    badge: "Staff Pick",
    effectTags: ["relaxation", "sleep"],
    txCompliant: false, // smokable flower — TX ban active
  },
  {
    id: "tropicana-zkittles",
    name: "Tropicana Zkittles",
    category: "Live Rosin",
    price: "$40–$45",
    image: productRosin,
    badge: "New",
    effectTags: ["euphoria", "creative"],
    txCompliant: true,
  },
  {
    id: "diamond-sauce",
    name: "Diamond Sauce",
    category: "Concentrate",
    price: "$17",
    image: productConcentrate,
    effectTags: ["euphoria", "social"],
    txCompliant: true,
  },
  {
    id: "live-resin-cart",
    name: "510 Live Resin Cart",
    category: "Vape",
    price: "$15",
    image: productVape,
    effectTags: ["focus", "creative"],
    txCompliant: true,
  },
  {
    id: "blackberry-kush",
    name: "Blackberry Kush",
    category: "Indoor Flower",
    price: "$30–$60",
    image: productFlower,
    badge: "Exotic",
    effectTags: ["relaxation", "sleep"],
    txCompliant: false, // smokable flower — TX ban active
  },
  {
    id: "thca-prerolls",
    name: "THCa Pre Rolls",
    category: "Pre Roll",
    price: "$15–$21",
    image: productPreroll,
    effectTags: ["social", "relaxation"],
    txCompliant: false, // pre-rolls — TX ban active
  },
];

export interface Category {
  name: string;
  image: string;
  desc: string;
  /** Real WooCommerce category URL on docs-hemp.com */
  href: string;
}

export const CATEGORIES: Category[] = [
  { name: "THCa Vapes", image: productVape, desc: "Live resin carts", href: "/product-category/vapes/" },
  { name: "Concentrates", image: productConcentrate, desc: "Diamonds & sauce", href: "/product-category/concentrates/" },
  { name: "Fresh Frozen Rosin", image: productRosin, desc: "Solventless extracts", href: "/product-category/fresh-frozen-rosin/" },
  { name: "Pre-Rolls", image: productPreroll, desc: "Ready to enjoy", href: "/product-category/prerolls/" },
  { name: "THCa Flower", image: productFlower, desc: "Indoor exotic strains", href: "/product-category/flower/" },
];

/** State-restricted product types (TX smokable ban, effective March 31 2026) */
export const TX_BANNED_CATEGORIES = ["Indoor Flower", "Pre Roll"];

export const HERO_IMAGE = heroEarthy;
export const INDOOR_GROW_IMAGE = indoorGrow;
export const INDOOR_MACRO_IMAGE = indoorMacro;
export const HAND_TRIMMED_IMAGE = handTrimmed;
