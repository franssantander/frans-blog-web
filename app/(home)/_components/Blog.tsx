"use client";

import { motion } from "framer-motion";
import CardLetter from "./CardLetter";

// This container variant handles the staggered animation of children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each card will appear 0.1s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Blog() {
  return (
    <section className="w-full py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/5 pb-10">
          <div className="space-y-4">
            <h4 className="text-primary font-medium tracking-[.3em] text-xs uppercase">
              The Archive
            </h4>
            <h1 className="font-black text-5xl lg:text-6xl tracking-tighter text-white">
              Latest Letters.
            </h1>
            <p className="text-neutral-500 max-w-md text-lg leading-relaxed">
              Synthesizing technology and philosophy into actionable systems for
              a better life.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <span className="text-xs text-neutral-500 uppercase tracking-widest">
              Updated weekly /{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* The Grid: Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* We wrap each CardLetter in a motion.div to apply the stagger */}
          <motion.div variants={itemVariants}>
            <CardLetter />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardLetter />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardLetter />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardLetter />
          </motion.div>
        </motion.div>

        {/* Bottom CTA for a sense of depth */}
        <div className="mt-24 text-center">
          <button className="text-sm font-bold text-white/40 hover:text-white transition-colors tracking-widest uppercase flex items-center gap-2 mx-auto group">
            Browse All Archive
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
