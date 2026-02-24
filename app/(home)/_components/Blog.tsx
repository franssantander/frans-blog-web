import CardLetter from "./CardLetter";

export default function Blog() {
  return (
    <div className="w-full py-20 px-4">
      <div className="text-center max-w-lg mx-auto space-y-2 mb-16">
        <h4 className="text-neutral-400 tracking-[.25em] text-sm uppercase">
          The Blog
        </h4>
        <h1 className="font-black text-4xl lg:text-5xl">Read. Learn. Grow.</h1>
        <p className="text-neutral-400 max-w-sm mx-auto">
          Ideas, reflections, and perspectives for mastering your craft, your
          habits, and your life.
        </p>
      </div>

      <div
      
        className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 max-w-[60rem] mx-auto w-full"
      >
        <CardLetter /> 
        <CardLetter />
        <CardLetter />
        <CardLetter />
      </div>
    </div>
  );
}
