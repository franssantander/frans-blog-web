import { Separator } from "@/components/ui";
import React from "react";

export default function LetterDetails() {
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl font-black">How to Disappear Completely</h1>
        <div className="flex items-center gap-3 text-neutral-200 text-lg">
          <span>January 8, 2026</span>
          <Separator orientation="vertical" />
          <span>Francis Beam</span>
        </div>
      </div>
      <div className="py-10 text-neutral-200 text-lg space-y-7">
        <p className="tracking-wide">
          Most people don’t need a new life. They need a season of
          disappearance. Not from the world - but from expectations, noise, and
          the identity that no longer serves you.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi
          soluta minima maiores illo, ipsum excepturi sequi quos quasi, dolorem
          laudantium quibusdam alias nulla voluptatibus dolore labore,
          temporibus rerum quo.
        </p>
        <h1>Every morning you wake up into the same pattern.</h1>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Hit the snooze alarm 3 times.</li>
          <li>test</li>
          <li>Hit the snooze alarm 3 times.</li>
          <li>Hit the snooze alarm 3 times.</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
