import { JobData } from "@/types";
import Link from "next/link";
import "@/styles/globals.css";
import { getJobs } from "@/app/api/route";

const JobPage = async () => {
  const jobs = await getJobs();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Jobs</h1>
      {jobs?.length ? (
        <ul className="space-y-6">
          {jobs.map((job: JobData) => (
            <li key={job.jobId} className="bg-white shadow-xl rounded-lg p-6">
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
      ) : (
        <p className="text-center text-lg">No jobs available.</p>
      )}
    </div>
  );
};

export default JobPage;
