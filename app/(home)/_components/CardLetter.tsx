import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

export default function CardLetter() {
  const imgUrl =
    "https://thedankoe.com/wp-content/uploads/2025/06/featured-2-768x430.png.webp";

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="relative aspect-video w-full">
        <Image src={imgUrl} alt="Event cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      <CardHeader>
        <CardTitle className="font-black text-3xl lg:text-2xl">
          How to Disappear Completely
        </CardTitle>
        <CardDescription className="text-base">
          Not from the world but from expectations, noise, and the identity that
          no longer serves you.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm">
          <span>February 27, 2026</span>
        </div>
        <Button className="max-w-full" size="lg">
          <Link href="/letter/1">Read Full</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
