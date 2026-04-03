import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AgeGate from "@/components/AgeGate";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { fadeUp } from "@/lib/animations";
import { WP_BASE, WP_TARGET } from "@/lib/links";

const ALL_POSTS = [
  {
    slug: "/blog/texas-thca-laws-2026/",
    tag: "Compliance",
    title: "Texas THCA Laws 2026: What's Still Legal (And What Changed)",
    excerpt:
      "Effective March 31, 2026, Texas DSHS banned smokable THCA. Here's what's still legal — and where to still buy it legally online.",
    date: "April 2, 2026",
  },
  {
    slug: "/blog/is-thca-legal/",
    tag: "Legal",
    title: "Is THCa Legal in 2026? State-by-State Guide & Farm Bill Update",
    excerpt:
      "THCa derived from hemp is federally legal under the 2018 Farm Bill. But state laws vary — here's the current map.",
    date: "April 2, 2026",
  },
  {
    slug: "/blog/what-is-thca/",
    tag: "Education",
    title: "What Is THCA? The Complete 2026 Guide",
    excerpt:
      "THCA is the non-psychoactive precursor to THC found in raw cannabis. Here's how it works and why it matters.",
    date: "April 1, 2026",
  },
  {
    slug: "/blog/thca-vs-thc/",
    tag: "Education",
    title: "THCA vs THC: What's the Difference?",
    excerpt:
      "THCA and THC are not the same compound. Understanding the difference determines what's legal, what works, and why it matters in 2026.",
    date: "March 28, 2026",
  },
  {
    slug: "/blog/thca-flower-review/",
    tag: "Review",
    title: "Best THCA Flower Online: What to Look For",
    excerpt:
      "Not all THCA flower is the same. Indoor-grown exotic strains, third-party COAs, and curing process matter more than most buyers realize.",
    date: "March 20, 2026",
  },
  {
    slug: "/blog/buy-thca-online/",
    tag: "Buying Guide",
    title: "How to Buy THCA Online Safely in 2026",
    excerpt:
      "A practical guide to finding reputable THCA vendors: what to check on lab reports, how to read COAs, and red flags to avoid.",
    date: "March 15, 2026",
  },
];

const BlogPage = () => {
  const [selectedState, setSelectedState] = useState("ALL");

  return (
    <AgeGate>
      <div className="min-h-screen bg-brand-base text-brand-text font-body">
        <AnnouncementBar />
        <NavBar selectedState={selectedState} onStateChange={setSelectedState} />

        <div className="py-16 px-8 text-center border-b border-brand-accent/10 bg-brand-base-light">
          <p className="text-sm tracking-[0.4em] uppercase mb-3 text-brand-accent">
            THCa Education & News
          </p>
          <h1 className="text-4xl md:text-5xl font-light font-display text-brand-text">
            The Doc's Hemp Blog
          </h1>
          <p className="mt-4 text-brand-text/50 max-w-lg mx-auto text-sm leading-relaxed">
            Expert guides on THCA potency, legality, and how to buy with confidence.
          </p>
        </div>

        <section className="py-24 px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_POSTS.map((post, i) => (
              <motion.a
                key={post.slug}
                href={WP_BASE + post.slug}
                target={WP_TARGET}
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group p-6 rounded-sm border border-brand-accent/15 bg-brand-base-light hover:border-brand-accent/30 transition-colors"
              >
                <span className="inline-block text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 mb-4 border border-brand-accent/30 text-brand-accent">
                  {post.tag}
                </span>
                <h2 className="text-base font-light font-display text-brand-text mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-brand-text/50 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-brand-text/30">{post.date}</span>
                  <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-brand-accent">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </AgeGate>
  );
};

export default BlogPage;
