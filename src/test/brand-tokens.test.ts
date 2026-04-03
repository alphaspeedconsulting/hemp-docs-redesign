import { describe, it, expect } from "vitest";
import tailwindConfig from "../../tailwind.config";

const colors = tailwindConfig.theme.extend.colors as Record<string, unknown>;
const fonts = tailwindConfig.theme.extend.fontFamily as Record<string, string[]>;

describe("Earthy Premium brand token system", () => {
  describe("core brand colors are defined in Tailwind config", () => {
    const brandKeys = [
      "brand-base",
      "brand-base-light",
      "brand-accent",
      "brand-text",
    ] as const;

    brandKeys.forEach((key) => {
      it(`defines ${key} referencing a CSS variable`, () => {
        expect(colors).toHaveProperty(key);
        expect(colors[key]).toContain("var(--");
        expect(colors[key]).toContain("<alpha-value>");
      });
    });
  });

  describe("effect-mapped palette is defined in Tailwind config", () => {
    const effectKeys = [
      "effect-relaxation",
      "effect-sleep",
      "effect-focus",
      "effect-euphoria",
      "effect-creative",
      "effect-social",
    ] as const;

    effectKeys.forEach((key) => {
      it(`defines ${key} referencing a CSS variable`, () => {
        expect(colors).toHaveProperty(key);
        expect(colors[key]).toContain("var(--");
        expect(colors[key]).toContain("<alpha-value>");
      });
    });
  });

  describe("typography font families are defined in Tailwind config", () => {
    it("defines display font with Playfair Display as first entry", () => {
      expect(fonts).toHaveProperty("display");
      expect(fonts.display[0]).toBe("Playfair Display");
    });

    it("defines body font with Inter as first entry", () => {
      expect(fonts).toHaveProperty("body");
      expect(fonts.body[0]).toBe("Inter");
    });

    it("defines mono font with JetBrains Mono as first entry", () => {
      expect(fonts).toHaveProperty("mono");
      expect(fonts.mono[0]).toBe("JetBrains Mono");
    });

    it("display font includes serif fallback", () => {
      expect(fonts.display).toContain("serif");
    });

    it("body font includes system-ui fallback", () => {
      expect(fonts.body).toContain("system-ui");
    });
  });

  describe("shadcn semantic tokens are preserved", () => {
    const shadcnKeys = [
      "border",
      "input",
      "ring",
      "background",
      "foreground",
    ] as const;

    shadcnKeys.forEach((key) => {
      it(`preserves shadcn token: ${key}`, () => {
        expect(colors).toHaveProperty(key);
      });
    });
  });
});
