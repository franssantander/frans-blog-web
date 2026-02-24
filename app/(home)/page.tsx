import Hero from "./_components/Hero";
import Blog from "./_components/Blog";
import Sidebar from "./_components/Sidebar";

export default function HomePage() {
  return (
    <>
      <Sidebar />
      <div className="p-4 max-w-7xl mx-auto lg:p-7">
        <Hero />
        <Blog />
      </div>
    </>
  );
}
