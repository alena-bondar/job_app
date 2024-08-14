"use client";

import "@/styles/globals.css";
import { CompanyData } from "@/types";
import Link from "next/link";
import useStore from "@/store/store";
import axios from 'axios';

const CompanyPage = () => {
  const { companies, role } = useStore();
  const isUserRole = role === "user";

  const handleRemoveCompany = async (id: string) => {
    try {
      const response = await axios.patch(`/api/company/${id}`);
      if (response.status === 200) {
        window.location.replace("/job");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
        <ul className="space-y-4">
          {companies.map((company: CompanyData) => (
            <li
              key={company.companyName}
              className="bg-white shadow-xl rounded-lg py-4 px-6"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {company.companyName}
              </h2>
              <p className="text-lg mb-4">{company.companyEmail}</p>
              <div className="mt-4">
                {!isUserRole && (
                  <button onClick={() => handleRemoveCompany(company.companyId)} className="bg-cyan-600 text-white py-2 px-4 rounded">
                    Remove
                  </button>
                )}
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
