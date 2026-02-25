import Image from "next/image";
import FrancisLogo from "@/assets/frans-dark-logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className="bg-background/80 backdrop-blur-md sticky top-0 z-50"
      autoFocus
    >
      <div className="px-4 py-6 max-w-7xl mx-auto lg:px-7 h-full flex items-center justify-between">
        <Link href="/">
          <Image src={FrancisLogo} alt="Frans Logo" width={40} height={40} />
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-primary transition-colors uppercase"
              scroll={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/letters"
              className="hover:text-primary transition-colors uppercase"
              scroll={true}
            >
              Letters
            </Link>
          </li>
          <li>
            <Link
              href="https://fransbeam-portfolio.vercel.app/"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              VISIT MY PORTFOLIO
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
