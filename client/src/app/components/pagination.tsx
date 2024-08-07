import { FC, useEffect, useState } from 'react';
import { JobData } from "@/types";
import Link from "next/link";

type PaginationProps = {
  totalPages: number;
  getPaginatedJobs: (page: number) => JobData[];
};

const Pagination: FC<PaginationProps> = ({
  totalPages,
  getPaginatedJobs,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedJobs, setPaginatedJobs] = useState<JobData[]>([]);

  useEffect(() => {
    setPaginatedJobs(getPaginatedJobs(currentPage));
  }, [currentPage, getPaginatedJobs]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <ul className="space-y-4">
        {paginatedJobs.map((job: JobData) => (
          <li
            key={job.jobId}
            className="bg-white shadow-xl rounded-lg py-4 px-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{job.jobName}</h2>
            <p className="text-lg mb-4">{job.jobDescription}</p>
            <p className="text-lg mb-4">
              <strong>Company:</strong> {job.companyName}
            </p>
            <div className="mt-4">
              <Link
                className="bg-cyan-600 text-white py-2 px-4 rounded"
                href={`/job/${job.jobId}`}
              >
                Go to job description
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {totalPages > 4 && (
        <nav className="flex justify-end my-4">
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

export default Pagination;
