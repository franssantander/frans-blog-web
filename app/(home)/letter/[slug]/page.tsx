import LetterDetails from "../_components/LetterDetails";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";

export default async function LetterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="space-y-6 container mx-auto px-4">
      <div>
        <Button variant="secondary" size="lg">
          <Link className="flex items-center gap-1" href="/">
            <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={18} />
            <span>Back to Archive</span>
          </Link>
        </Button>
      </div>
      <LetterDetails params={params} />
    </div>
  );
}
