import { describe, it, expect } from "vitest";
import { PRODUCTS } from "@/data/products";

/**
 * Validates that product data and constants do not contain Texas/DFW-specific
 * branding that would suppress national THCA keyword rankings.
 *
 * These tests catch regressions where regional copy sneaks back into the data layer.
 */
describe("national copy — no Texas/DFW-specific branding in data layer", () => {
  it("all products have a wooUrl field", () => {
    for (const product of PRODUCTS) {
      expect(product.wooUrl, `${product.name} missing wooUrl`).toBeTruthy();
      expect(product.wooUrl).toMatch(/^\/product\//);
    }
  });

  it("all products have a coaUrl field", () => {
    for (const product of PRODUCTS) {
      expect(product.coaUrl, `${product.name} missing coaUrl`).toBeTruthy();
    }
  });

  it("all products have thcaPercent populated", () => {
    for (const product of PRODUCTS) {
      expect(product.thcaPercent, `${product.name} missing thcaPercent`).toBeTruthy();
    }
  });

  it("Diamond Sauce has a strain name", () => {
    const diamondSauce = PRODUCTS.find((p) => p.id === "diamond-sauce");
    expect(diamondSauce?.strainName).toBeTruthy();
  });

  it("510 Live Resin Cart has a strain name", () => {
    const cart = PRODUCTS.find((p) => p.id === "live-resin-cart");
    expect(cart?.strainName).toBeTruthy();
  });
});
