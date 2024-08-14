'use client'

import React, { useEffect } from 'react';
import useSWR from 'swr';
import { NavLink } from "@/app/components/navLink";
import { usePathname } from 'next/navigation';
import useStore from '@/store/store';
import { fetcher } from '@/utils/fetcher';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role, companies, jobs, setRole, setCompanies, setJobs } = useStore();
  const { data: companiesData } = useSWR('/api/company', fetcher);
  const { data: jobsData } = useSWR('/api/job', fetcher);

  useEffect(() => {
    if (companiesData && jobsData) {
      setJobs(jobsData);
      setCompanies(companiesData);
    }
  }, [companies, companiesData, jobs, jobsData]);

  const handleChangeRole = () => {
    setRole(role === 'user' ? 'admin' : 'user');
  }

  const pathname = usePathname();
  const activePage = pathname === "/job" || pathname === "/company";
  return (
    <html lang="en">
      <body className="flex justify-center bg-gray-100">
      <div className="flex flex-col flex-start justify-center w-1/2">
        <button className="absolute top-0 left-0 p-4" onClick={handleChangeRole}>{role === 'user' ? 'Switch to Admin' : 'Switch to User'}</button>
        {
          activePage && <header className="w-full py-4">
            <div className="flex justify-between">
              <NavLink href="/job" label="Jobs" />
              <NavLink href="/company" label="Companies" />
            </div>
          </header>
        }
        <main className="flex-grow flex items-center justify-center">
          <div className="rounded-lg w-full">{children}</div>
        </main>
      </div>
      </body>
    </html>
  );
}
