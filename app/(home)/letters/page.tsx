import React from "react";
import Blog from "../_components/Blog";
import { getPostSummaries } from "@/lib/markdown";

export default function LettersPage() {
  const posts = getPostSummaries();

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-7">
      <Blog posts={posts} />
    </div>
  );
}
