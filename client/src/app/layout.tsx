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

  console.log('role', role);

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
      <body className="min-h-screen flex justify-center bg-gray-100">
        <div className="flex flex-col justify-center w-1/2">
          {
            activePage && <header className="w-full">
            <button onClick={handleChangeRole}>{role === 'user' ? 'User' : 'Admin'}</button>
              <div className="flex justify-between">
                <NavLink href="/job" label="Jobs" />
                <NavLink href="/company" label="Companies" />
              </div>
            </header>
          }
          <main className="flex-grow flex items-center justify-center h-1/2">
            <div className="rounded-lg w-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
