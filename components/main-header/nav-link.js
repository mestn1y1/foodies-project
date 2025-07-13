"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./nav-link.module.css";
export default function NavLink({ children, href }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${css.link} ${css.acive}` : css.link}
    >
      {children}
    </Link>
  );
}
