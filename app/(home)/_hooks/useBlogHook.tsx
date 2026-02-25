import { Post } from "@/interfaces";
import { useState } from "react";

export default function useBlogHook(posts: Post[]) {
  const INITIAL_COUNT = 6;
  const LOAD_COUNT = 3;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const displayedPosts = sortedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPosts.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + LOAD_COUNT);
  };

  return { displayedPosts, hasMore, loadMore };
}
