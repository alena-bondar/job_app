"use client";

import "@/styles/globals.css";
import Pagination from "@/app/components/pagination";
import Link from "next/link";
import useStore from '@/store/store';

const JobPage = () => {
  const { jobs } = useStore();
  const itemsPerPage = 4;

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const getPaginatedJobs = (currentPage: number) => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return jobs.slice(startIdx, startIdx + itemsPerPage);
  };

  return (
    <div className="min-h-screen">
      <Link
        className="flex justify-center py-4 text-cyan-600"
        href={"/job/create"}
      >
        Create a new job
      </Link>
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
