"use client";

import "@/styles/globals.css";
import Pagination from "@/app/components/pagination";
import Link from "next/link";
import useStore from '@/store/store';

const JobPage = () => {
  const { jobs, role } = useStore();
  const isUserRole = role === "user";
  const itemsPerPage = 4;

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const getPaginatedJobs = (currentPage: number) => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return jobs.slice(startIdx, startIdx + itemsPerPage);
  };

  return (
    <div>
      {
        !isUserRole && <Link
          className="flex justify-center pb-4 text-cyan-600"
          href={"/job/create"}
        >
          Create a new job
        </Link>
      }
      {jobs.length ? (
        <Pagination
          getPaginatedJobs={getPaginatedJobs}
          totalPages={totalPages}
        />
      ) : (
        <p className="text-center text-lg">No jobs available.</p>
      )}
    </div>
  );
};

export default JobPage;
