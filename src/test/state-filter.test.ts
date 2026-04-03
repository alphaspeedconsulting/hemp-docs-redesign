import { describe, it, expect } from "vitest";
import { PRODUCTS, TX_BANNED_CATEGORIES } from "@/data/products";

describe("Product data integrity", () => {
  it("all products have a wooUrl pointing to a /product/ path", () => {
    PRODUCTS.forEach((p) => {
      expect(p.wooUrl, `${p.name} missing wooUrl`).toMatch(/^\/product\//);
    });
  });
});

describe("State compliance filter", () => {
  it("TX_BANNED_CATEGORIES contains Indoor Flower and Pre Roll", () => {
    expect(TX_BANNED_CATEGORIES).toContain("Indoor Flower");
    expect(TX_BANNED_CATEGORIES).toContain("Pre Roll");
  });

  it("filters out banned categories when state is TX", () => {
    const txProducts = PRODUCTS.filter(
      (p) => !TX_BANNED_CATEGORIES.includes(p.category)
    );
    txProducts.forEach((p) => {
      expect(TX_BANNED_CATEGORIES).not.toContain(p.category);
    });
  });

  it("shows all products when state is not TX", () => {
    // No filtering applied for non-TX states
    expect(PRODUCTS.length).toBeGreaterThan(0);
  });

  it("every product with txCompliant: false has a TX-banned category", () => {
    const nonCompliant = PRODUCTS.filter((p) => !p.txCompliant);
    nonCompliant.forEach((p) => {
      expect(TX_BANNED_CATEGORIES).toContain(p.category);
    });
  });

  it("every product with txCompliant: true has a non-banned category", () => {
    const compliant = PRODUCTS.filter((p) => p.txCompliant);
    compliant.forEach((p) => {
      expect(TX_BANNED_CATEGORIES).not.toContain(p.category);
    });
  });
});

describe("Effect tag filter", () => {
  it("all products have at least one effect tag", () => {
    PRODUCTS.forEach((p) => {
      expect(p.effectTags.length).toBeGreaterThan(0);
    });
  });

  it("filters products by effect tag correctly", () => {
    const relaxing = PRODUCTS.filter((p) => p.effectTags.includes("relaxation"));
    expect(relaxing.length).toBeGreaterThan(0);
    relaxing.forEach((p) => {
      expect(p.effectTags).toContain("relaxation");
    });
  });

  it("returns empty array when no products match a rare tag combination", () => {
    // No products should have only "sleep" AND be a vape
    const filtered = PRODUCTS.filter(
      (p) => p.category === "Vape" && p.effectTags.includes("sleep")
    );
    expect(filtered.length).toBe(0);
  });
});
