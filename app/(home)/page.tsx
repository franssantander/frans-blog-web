import Hero from "./_components/Hero";
import Blog from "./_components/Blog";
import AboutMe from "./_components/AboutMe";
import { getPostSummaries } from "@/lib/markdown";

export default function HomePage() {
  const posts = getPostSummaries();

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-7">
      <Hero />
      <Blog posts={posts} />
      <AboutMe />
    </div>
  );
}
