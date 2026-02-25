import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Post } from "@/interfaces";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

export default function CardLetter({ post }: { post: Post }) {
  const { image, title, description, date, slug } = post;

  return (
    <Card className="relative flex flex-col w-full h-full pt-0 overflow-hidden border-white/5 bg-neutral-950/50">
      <div className="relative aspect-video w-full overflow-hidden group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <CardHeader className="flex-1">
        <CardTitle className="font-black text-2xl lg:text-3xl tracking-tighter text-white">
          {title}
        </CardTitle>

        <CardDescription className="text-neutral-400 line-clamp-3 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between pt-4 mt-auto border-t border-white/5">
        <span className="text-[10px] font-mono uppercase tracking-widest">
          {date}
        </span>
        <Button
          variant="ghost"
          size="lg"
          className="hover:text-primary transition-colors"
        >
          <Link
            className="flex items-center gap-1 underline underline-offset-3"
            href={`/letter/${slug}`}
          >
            Read Full
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
