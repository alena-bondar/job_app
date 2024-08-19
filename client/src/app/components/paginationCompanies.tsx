import { FC, useEffect, useState } from "react";
import { CompanyData, JobData } from "@/types";
import axios from "axios";
import useStore from "@/store/store";

type PaginationProps = {
  totalPages: number;
  getPaginatedCompanies: (page: number) => CompanyData[];
};

const PaginationCompanies: FC<PaginationProps> = ({
  totalPages,
  getPaginatedCompanies,
}) => {
  const { role } = useStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedCompanies, setPaginatedCompanies] = useState<CompanyData[]>(
    [],
  );
  const isUserRole = role === "user";

  useEffect(() => {
    setPaginatedCompanies(getPaginatedCompanies(currentPage));
  }, [currentPage, getPaginatedCompanies]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleRemoveCompany = async (id: string) => {
    try {
      const response = await axios.patch(`/api/company/${id}`);
      if (response.status === 200) {
        window.location.replace("/company");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <ul className="space-y-4">
        {paginatedCompanies.map((company: CompanyData) => (
          <li
            key={company.companyId}
            className="bg-white shadow-xl rounded-lg py-4 px-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {company.companyName}
            </h2>
            <p className="text-lg mb-4">{company.companyEmail}</p>
            <div className="mt-4 flex justify-between">
              {!isUserRole && (
                <button
                  onClick={() => handleRemoveCompany(company.companyId)}
                  className="bg-cyan-600 text-white py-2 px-4 rounded"
                >
                  Remove
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <nav className="absolute bottom-16 right-1/2 left-1/2 my-4">
          <ul className="flex items-center h-8 text-m">
            <li className="list-none">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex items-center justify-center px-3 h-8"
                disabled={currentPage === 1}
              >
                &lt;
              </button>
            </li>
            {pageNumbers.map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`flex items-center justify-center px-3 h-8 ${
                    currentPage === page
                      ? "z-10 text-cyan-600 font-semibold"
                      : "hover:text-cyan-600"
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
            <li className="list-none">
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex items-center justify-center px-3 h-8"
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default PaginationCompanies;
