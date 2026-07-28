"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Timeline" },
  { href: "/reflection", label: "My Reflection" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-sm">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={
              "pb-1 border-b-2 transition-colors " +
              (active
                ? "border-oxblood text-ink"
                : "border-transparent text-ink-faint hover:text-ink hover:border-parchment-edge")
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
