'use client'

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`px-4 py-2 font-semibold rounded ${
      isActive ? 'bg-cyan-600 text-white' : 'border-2 border-cyan-600 text-cyan-600'
    } hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
        {label}
    </Link>
  );
};