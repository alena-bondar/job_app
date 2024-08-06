"use client";

import { JobData } from "@/types";
import "@/styles/globals.css";
import Pagination from "@/app/components/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const JobPage = () => {
  const [jobs, setJobs] = useState<JobData[]>([]);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = await axios.get(`/api/job`);
      setJobs(fetchedJobs.data);
    };

    fetchJobs();
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
