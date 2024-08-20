import { JobDetailTypes } from "@/types";
import { notFound } from "next/navigation";
import "@/styles/globals.css";
import Link from "next/link";
import { getJobById } from "@/app/api/route";

const JobDetailPage = async ({ params }: JobDetailTypes) => {
  const { id } = params;
  const job = await getJobById(id);

  if (!job) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center p-12 mt-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Job Details</h1>
      <h2 className="text-2xl font-semibold mb-2">{job.jobName}</h2>
      <p className="text-lg mb-4">{job.jobDescription}</p>
      <p className="text-lg mb-4">
        <strong>Company:</strong> {job.company.companyName}
      </p>
      <div className="mt-4">
        <Link
          className="bg-cyan-600 text-white py-2 px-4 rounded"
          href={`/job/${job.jobId}/application`}
        >
          Apply for a job
        </Link>
      </div>
    </div>
  );
};

export default JobDetailPage;
