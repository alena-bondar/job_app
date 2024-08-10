"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "@/styles/globals.css";
import { CompanyData } from "@/types";
import Link from "next/link";

const CompanyPage = () => {
  const [companies, setCompanies] = useState<CompanyData[]>([]);

  useEffect(() => {
    const getCompany = async () => {
      const fetchedCompany = await axios.get(`/api/company`);
      setCompanies(fetchedCompany.data);
    };

    getCompany();
  }, []);

  return (
    <div className="min-h-screen">
      <Link
        className="flex justify-center py-4 text-cyan-600"
        href={"/company/create"}
      >
        Create a new company
      </Link>
      {companies.length ? (
        <ul className="space-y-4">
          {companies.map((company: CompanyData) => (
            <li
              key={company.companyId}
              className="bg-white shadow-xl rounded-lg py-4 px-6"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {company.companyName}
              </h2>
              <p className="text-lg mb-4">{company.companyEmail}</p>
              <div className="mt-4">
                <button className="bg-cyan-600 text-white py-2 px-4 rounded">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg">No companies available.</p>
      )}
    </div>
  );
};

export default CompanyPage;
