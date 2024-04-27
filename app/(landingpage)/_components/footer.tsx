import Link from "next/link";

import { SiLinktree } from "react-icons/si";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center justify-between gap-2 border-t px-4 py-4 sm:flex-row md:px-6">
      <p className="text-xs text-foreground">
        &copy; FixFinity 2024. All right reserved
      </p>
      <nav className="flex gap-x-3">
        <Link
          href={"/"}
          target="_blank"
        >
          <SiLinktree />
        </Link>
        <Link
          href={"/"}
          target="_blank"
        >
          <FaWhatsapp />
        </Link>
        <Link
          href={"/"}
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          href={"/"}
          target="_blank"
        >
          <FaTiktok />
        </Link>
      </nav>
    </footer>
  );
}
