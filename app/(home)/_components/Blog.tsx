"use client";

import { Post } from "@/interfaces";
import CardLetter from "./CardLetter";
import useBlogHook from "../_hooks/useBlogHook";

export default function Blog({ posts }: { posts: Post[] }) {
  const { displayedPosts, hasMore, loadMore } = useBlogHook(posts);
  return (
    <section className="w-full py-32">
      <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-6xl lg:mx-auto items-stretch">
          {displayedPosts?.map((post) => (
            <div key={post.slug} className="flex">
              <CardLetter post={post} />
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="mt-24 text-center">
            <button
              onClick={loadMore}
              className="text-sm font-bold text-white/40 hover:text-white transition-colors tracking-widest uppercase flex items-center gap-2 mx-auto group"
            >
              Browse All Archive
              <span className="group-hover:translate-y-1 transition-transform">
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
