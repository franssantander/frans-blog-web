import Hero from "./_components/Hero";
import Blog from "./_components/Blog";
import Sidebar from "./_components/Sidebar";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background flex flex-col md:flex-row">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute h-[20rem] w-[20rem] rounded-full bg-primary/5 blur-3xl lg:h-[30rem] lg:w-[30rem]"></div>
        <div className="absolute h-[35rem] w-[35rem] rounded-full border-[1px] border-primary/10 lg:h-[45rem] lg:w-[45rem]"></div>
        <div className="absolute h-[55rem] w-[55rem] rounded-full border-[1px] border-primary/10 lg:h-[70rem] lg:w-[70rem]"></div>
        <div className="absolute h-[75rem] w-[75rem] rounded-full border-[1px] border-primary/5 lg:h-[100rem] lg:w-[100rem]"></div>
      </div>

      <main className="relative z-10 flex-1 h-full overflow-y-auto overflow-x-hidden">
        <Sidebar />
        <div className="max-w-7xl mx-auto p-4 lg:p-7">
          <Hero />
          <Blog />
        </div>
      </main>
    </div>
  );
}
