"use client";

import "@/styles/globals.css";
import Link from "next/link";
import useStore from "@/store/store";
import PaginationCompanies from '@/app/components/paginationCompanies';

const CompanyPage = () => {
  const { companies, role } = useStore();
  const isUserRole = role === "user";

  const itemsPerPage = 4;

  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const getPaginatedCompanies = (currentPage: number) => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return companies.slice(startIdx, startIdx + itemsPerPage);
  };

  return (
    <div>
      {!isUserRole && (
        <Link
          className="flex justify-center pb-4 text-cyan-600"
          href={"/company/create"}
        >
          Create a new company
        </Link>
      )}
      {companies.length ? (
        <PaginationCompanies
          getPaginatedCompanies={getPaginatedCompanies}
          totalPages={totalPages}
         />
      ) : (
        <p className="text-center text-lg">No companies available.</p>
      )}
    </div>
  );
};

export default CompanyPage;
