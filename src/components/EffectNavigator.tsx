import type { EffectTag } from "@/data/products";

interface EffectOption {
  tag: EffectTag;
  label: string;
  /** CSS variable name suffix matching brand-tokens.css --effect-* */
  colorVar: string;
}

const EFFECTS: EffectOption[] = [
  { tag: "relaxation", label: "Relaxing", colorVar: "--effect-relaxation" },
  { tag: "sleep", label: "Sleepy", colorVar: "--effect-sleep" },
  { tag: "focus", label: "Focused", colorVar: "--effect-focus" },
  { tag: "euphoria", label: "Euphoric", colorVar: "--effect-euphoria" },
  { tag: "creative", label: "Creative", colorVar: "--effect-creative" },
  { tag: "social", label: "Social", colorVar: "--effect-social" },
];

interface Props {
  active: EffectTag | null;
  onChange: (tag: EffectTag | null) => void;
}

const EffectNavigator = ({ active, onChange }: Props) => (
  <div className="flex flex-wrap items-center gap-3 mb-10">
    <span className="text-xs tracking-[0.3em] uppercase text-brand-text/40 mr-1">
      Shop by Effect
    </span>

    {/* "All" pill */}
    <button
      onClick={() => onChange(null)}
      className={`px-4 py-1.5 rounded-sm text-xs tracking-[0.15em] uppercase transition-all border ${
        active === null
          ? "bg-brand-accent text-brand-base border-brand-accent"
          : "border-brand-accent/30 text-brand-text/60 hover:border-brand-accent/60 hover:text-brand-text/80"
      }`}
    >
      All
    </button>

    {EFFECTS.map(({ tag, label, colorVar }) => {
      const isActive = active === tag;
      return (
        <button
          key={tag}
          onClick={() => onChange(isActive ? null : tag)}
          className="px-4 py-1.5 rounded-sm text-xs tracking-[0.15em] uppercase transition-all border"
          style={
            isActive
              ? {
                  backgroundColor: `hsl(var(${colorVar}))`,
                  color: "hsl(var(--brand-base))",
                  borderColor: `hsl(var(${colorVar}))`,
                }
              : {
                  borderColor: `hsl(var(${colorVar}) / 0.35)`,
                  color: `hsl(var(${colorVar}))`,
                }
          }
        >
          {label}
        </button>
      );
    })}
  </div>
);

export default EffectNavigator;
