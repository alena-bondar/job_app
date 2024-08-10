"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 font-semibold rounded w-1/2 flex justify-center ${
        isActive
          ? "bg-cyan-600 text-white"
          : "border-2 border-cyan-600 text-cyan-600"
      }`}
    >
      {label}
    </Link>
  );
};
