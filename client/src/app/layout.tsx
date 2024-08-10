import React from 'react';
import { NavLink } from '@/app/components/navLink';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <header className="flex-grow flex items-center justify-center">
          <div className="flex justify-between w-1/2">
            <NavLink href="/job" label="Jobs" />
            <NavLink href="/company" label="Companies" />
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-4xl rounded-lg px-6 h-1/2">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
