import Sidebar from "@/app/(home)/_components/Sidebar";
import Hero from "./_components/Hero";
import Blog from "./_components/Blog";

export default function HomePage() {
  return (
    <div>
      <Sidebar />
      <Hero />
      <Blog />
    </div>
  );
}
