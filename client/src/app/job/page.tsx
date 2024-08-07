"use client";

import axios from "axios";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { JobData } from "@/types";
import Pagination from "@/app/components/pagination";

const JobPage = () => {
  const [jobs, setJobs] = useState<JobData[]>([]);
  const itemsPerPage = 4;

  useEffect(() => {
    const getJobs = async () => {
      const fetchedJobs = await axios.get(`/api/job`);
      setJobs(fetchedJobs.data);
    };

    getJobs();
  }, []);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const getPaginatedJobs = (currentPage: number) => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return jobs.slice(startIdx, startIdx + itemsPerPage);
  };

  return (
    <div className="min-h-screen pt-4 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Jobs</h1>
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
