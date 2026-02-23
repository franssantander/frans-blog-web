import Image from "next/image";
import FrancisLogo from "@/assets/frans-logo-dark.svg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex items-center justify-between">
      <Image src={FrancisLogo} alt="Frans Logo" width={50} height={50} />
      <ul className="hidden md:flex items-center gap-6 text-sm ">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/">BEAM OFCOURSE (COMING SOON)</Link>
        </li>
        <li>
          <Link href="/">VISIT MY PORTFOLIO</Link>
        </li>
      </ul>
    </div>
  );
}
