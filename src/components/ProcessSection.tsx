import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { HAND_TRIMMED_IMAGE, INDOOR_MACRO_IMAGE } from "@/data/products";

const steps = [
  "Indoor climate-controlled grow rooms",
  "Hand-trimmed to preserve trichomes",
  "Slow cured for maximum terpenes",
  "3rd-party lab tested every batch",
  "Ships direct to your door",
];

const ProcessSection = () => (
  <>
    {/* Macro showcase strip */}
    <section className="relative h-[50vh] overflow-hidden">
      <img
        src={INDOOR_MACRO_IMAGE}
        alt="THCa trichome close-up"
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--brand-base) / 0.9) 0%, hsl(var(--brand-base) / 0.3) 50%, hsl(var(--brand-base) / 0.9) 100%)",
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent"
          >
            Craft Quality
          </motion.p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-light mb-4 font-display text-brand-text"
          >
            Hand-Trimmed.{" "}
            <span className="text-brand-accent">Never Machine Cut.</span>
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="text-brand-text/60 max-w-lg mx-auto"
          >
            Every bud carefully preserved to maximize trichomes and terpene
            profiles. This is flower the way it's meant to be.
          </motion.p>
        </div>
      </div>
    </section>

    {/* Seed to Sale narrative */}
    <section className="py-24 px-8 bg-brand-base">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <img
            src={HAND_TRIMMED_IMAGE}
            alt="Hand-trimmed premium flower"
            loading="lazy"
            width={1280}
            height={720}
            className="rounded-sm w-full border border-brand-accent/15"
          />
        </motion.div>

        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-sm tracking-[0.4em] uppercase mb-4 text-brand-accent"
          >
            Seed to Sale
          </motion.p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-4xl font-light mb-6 font-display text-brand-text"
          >
            We Control{" "}
            <span className="text-brand-accent">Every Step</span>
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="text-brand-text/60 leading-relaxed mb-8"
          >
            From genetics to packaging, everything happens in-house. We grow,
            harvest, cure, trim, extract, and ship — no middlemen. That's how we
            deliver dispensary-grade THCa at prices the competition can't touch.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="space-y-4"
          >
            {steps.map((step) => (
              <div key={step} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                <span className="text-sm text-brand-text/70">{step}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export default ProcessSection;
