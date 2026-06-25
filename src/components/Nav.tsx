"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/standings", label: "Standings" },
  { href: "/teams/east", label: "East Teams" },
  { href: "/teams/west", label: "West Teams" },
  { href: "/rankings", label: "Rankings" },
  { href: "/history", label: "History" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="glass glass-nav sticky top-0 z-40 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🏀</span>
          <span className="font-black text-white text-lg hidden sm:block">
            NBA Guide
          </span>
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "liquid liquid-sm whitespace-nowrap px-3 py-1.5 text-sm font-semibold text-white"
                    : "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold text-white/60 transition-colors hover:text-white hover:bg-white/8"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
