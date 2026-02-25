import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/5 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="text-xl font-black  text-white">
              FRANCIS LETTERS.
            </Link>
            <p className="text-neutral-500 max-w-sm leading-relaxed">
              Documenting the journey: creating, experimenting, and learning
              along the way.
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="">
            <div className="space-y-4 lg:space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
                Social
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400 lg:flex lg:gap-6 lg:space-y-0">
                <li>
                  <Link
                    href="https://github.com/franssantander"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/francebeam/"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/franss.dev/"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:santanderfrancisbeam@gmail.com"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="md:text-center text-xs text-neutral-500">
          <p>© {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
