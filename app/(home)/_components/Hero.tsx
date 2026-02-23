import { Button } from "@/components/ui";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full py-32 mx-auto text-center space-y-7">
      <div className="space-y-3">
        <h4 className="text-neutral-400 tracking-[.25em] text-sm uppercase">
          Francis Beam
        </h4>
        <h1 className="font-black text-4xl max-w-2xl mx-auto lg:text-5xl">
          Build Your Mind. Deconstruct the Default Path. Design Your Life.
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto">
          Insights on technology, philosophy, and personal growth to help you
          think better, work smarter, and live intentionally in the digital age.
        </p>
      </div>
      <Button size="lg">The System</Button>
    </div>
  );
}
