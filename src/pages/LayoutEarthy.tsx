import { useState } from "react";
import type { EffectTag } from "@/data/products";
import AgeGate from "@/components/AgeGate";
import { usePageMeta } from "@/lib/usePageMeta";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import FeatureGrid from "@/components/FeatureGrid";
import CategoryScroller from "@/components/CategoryScroller";
import ProductGrid from "@/components/ProductGrid";
import ProcessSection from "@/components/ProcessSection";
import BlogTeaser from "@/components/BlogTeaser";
import SubscriptionCTA from "@/components/SubscriptionCTA";
import CTABanner from "@/components/CTABanner";
import SiteFooter from "@/components/SiteFooter";

const LayoutEarthy = () => {
  const [selectedState, setSelectedState] = useState("TX");
  const [activeEffect, setActiveEffect] = useState<EffectTag | null>(null);

  usePageMeta({
    title: "Buy THCA Online — Vapes, Gummies & Concentrates | Doc's Hemp",
    description:
      "Shop premium indoor-grown THCA concentrates, live rosin, and vapes. Farm Bill compliant, 3rd-party lab tested, COA on every product. Ships to 41 states.",
    ogUrl: "https://docs-hemp.com/",
  });

  return (
    <AgeGate>
      <div className="min-h-screen bg-brand-base text-brand-text font-body">
        <AnnouncementBar />
        <NavBar selectedState={selectedState} onStateChange={setSelectedState} />
        <HeroSection />
        <SocialProof />
        <FeatureGrid />
        <CategoryScroller />
        <ProductGrid
          selectedState={selectedState}
          activeEffect={activeEffect}
          onEffectChange={setActiveEffect}
        />
        <ProcessSection />
        <BlogTeaser />
        <SubscriptionCTA />
        <CTABanner />
        <SiteFooter />
      </div>
    </AgeGate>
  );
};

export default LayoutEarthy;
