import { Separator } from "@/components/ui/separator";
import { getPostBySlug } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";

export default async function LetterDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) return <div className="text-white">Invalid letter slug.</div>;
  const post = getPostBySlug(slug);

  if (!post)
    return (
      <div className="text-white">Letter not found in /content/letters.</div>
    );

  return (
    <div className="max-w-3xl mx-auto py-10">
      <header className="space-y-8 mb-16">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9]">
          {post.frontmatter.title}
        </h1>

        <div className="flex items-center gap-3 text-neutral-400 font-mono text-sm tracking-widest">
          <span>{post.frontmatter.date}</span>
          <Separator orientation="vertical" className="h-4 bg-white/10" />
          <span>{post.frontmatter.author || "Francis Beam"}</span>
        </div>
      </header>

      <div
        className="prose prose-invert prose-neutral max-w-none 
        prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
        prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:text-lg
        prose-li:text-neutral-400 prose-strong:text-white
        prose-hr:border-white/5"
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
