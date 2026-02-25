"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full py-32 overflow-hidden text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(94, 94, 94, 0.15),transparent_60%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-7"
      >
        <div className="space-y-4">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium tracking-widest text-sm uppercase"
          >
            Francis Beam
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-black tracking-tighter leading-none text-4xl max-w-3xl mx-auto lg:text-6xl"
          >
            Stop Living on <span className="text-neutral-500">Autopilot.</span>
            <br />
            Build the Mind That Builds the Life You Want.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl mx-auto text-neutral-300 text-lg"
          >
            A space for builders, developers, and ambitious minds who want to
            think clearly, work deeply, and design a life most people only talk
            about — through systems, technology, and philosophy.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <Button size="lg" className="p-6 text-md">
            Explore The System
          </Button>

          <p className="text-sm text-neutral-500">
            Start with the mindset that changes everything.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
