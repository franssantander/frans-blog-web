import Hero from "./_components/Hero";
import Blog from "./_components/Blog";
import AboutMe from "./_components/AboutMe";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-7">
      <Hero />
      <Blog />
      <AboutMe />
    </div>
  );
}
