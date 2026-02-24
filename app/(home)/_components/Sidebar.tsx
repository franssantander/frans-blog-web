import Image from "next/image";
import FrancisLogo from "@/assets/frans-logo-dark.svg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="px-4 py-4 max-w-7xl mx-auto lg:px-7 h-full flex items-center justify-between">
        <Image src={FrancisLogo} alt="Frans Logo" width={40} height={40} />
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              HOME
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
