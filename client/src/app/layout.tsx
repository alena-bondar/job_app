import React from "react";
import { NavLink } from "@/app/components/navLink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center bg-gray-100">
        <div className="flex flex-col justify-center w-1/2">
          <header className="w-full">
            <div className="flex justify-between">
              <NavLink href="/job" label="Jobs" />
              <NavLink href="/company" label="Companies" />
            </div>
          </header>
          <main className="flex-grow flex items-center justify-center h-1/2">
            <div className="rounded-lg w-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
