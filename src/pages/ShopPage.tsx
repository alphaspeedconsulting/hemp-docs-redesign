import { useState, useEffect } from "react";
import type { EffectTag } from "@/data/products";
import AgeGate from "@/components/AgeGate";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/NavBar";
import CategoryScroller from "@/components/CategoryScroller";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";

const ShopPage = () => {
  const [selectedState, setSelectedState] = useState("TX");
  const [activeEffect, setActiveEffect] = useState<EffectTag | null>(null);

  useEffect(() => {
    document.title = "Shop THCA Products — Vapes, Concentrates & Live Rosin | Doc's Hemp";
  }, []);

  return (
    <AgeGate>
      <div className="min-h-screen bg-brand-base text-brand-text font-body">
        <AnnouncementBar />
        <NavBar selectedState={selectedState} onStateChange={setSelectedState} />

        <div className="py-16 px-8 text-center border-b border-brand-accent/10 bg-brand-base-light">
          <p className="text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent">
            Doc's Hemp Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-light font-display text-brand-text">
            Shop THCa Products
          </h1>
        </div>

        <CategoryScroller />
        <ProductGrid
          selectedState={selectedState}
          activeEffect={activeEffect}
          onEffectChange={setActiveEffect}
        />
        <SiteFooter />
      </div>
    </AgeGate>
  );
};

export default ShopPage;
