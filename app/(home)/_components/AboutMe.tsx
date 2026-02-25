import Image from "next/image";
import FrancisImage from "@/assets/francis-img.jpg";

export default function AboutMe() {
  return (
    <section className="py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start max-w-6xl mx-auto px-4">
        {/* Image Container */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />

            <div className="relative w-64 h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              <Image
                src={FrancisImage}
                alt="Francis"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h4 className="text-primary font-medium tracking-widest text-sm uppercase">
              The Creator
            </h4>
            <h2 className="font-black text-5xl lg:text-5xl tracking-tighter leading-none">
              Hi, I’m Francis.
            </h2>
          </div>

          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
            <p>
              I’m the solo founder behind{" "}
              <span className="text-foreground font-medium">RentHaven</span> and{" "}
              <span className="text-foreground font-medium">Local Po</span>, but
              more than that, I’m just someone trying to figure things out — in
              work, in life, and in who I’m becoming.
            </p>

            <p>
              This space is for reflection — a place where I share what I’m
              learning from building products, facing challenges, and chasing a
              meaningful path.
            </p>

            <p>
              I write about{" "}
              <span className="italic text-neutral-300">
                technology, philosophy, and personal growth
              </span>{" "}
              to understand things better — and to share what I learn along the
              way.
            </p>
          </div>

          {/* Status line */}
          <div className="pt-4 border-t border-border/40 w-fit">
            <p className="text-sm font-mono text-neutral-500">
              Currently building in public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
