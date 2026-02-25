import LetterDetails from "../_components/LetterDetails";
import { Button } from "@/components/ui";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";

export default function BlogDetails() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/">
          <Button variant="secondary">
            <HugeiconsIcon icon={ArrowLeft01FreeIcons} />
            Back
          </Button>
        </Link>
      </div>
      <LetterDetails />
    </div>
  );
}
