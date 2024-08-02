import { getJobById } from '@/app/job/api/getJobById';
import { notFound } from 'next/navigation';
import '@/styles/globals.css';

type JobDetailPageProps = {
  params: {
    id: string;
  };
};

const JobDetailPage = async ({ params }: JobDetailPageProps) => {
  const { id } = params;
  const job = await getJobById(id);

  if (!job) {
    return notFound(); // Redirects to 404 page if job is not found
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6 max-w-2xl mx-auto bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Job Details</h1>
      <h2 className="text-2xl font-semibold mb-2">{job.jobName}</h2>
      <p className="text-lg mb-4">{job.jobDescription}</p>
      <p className="text-lg mb-4"><strong>Company:</strong> {job.companyName}</p>
      <button
        type="button"
        className="bg-cyan-600 text-white py-2 px-4 rounded w-1/2"
      >
        Apply for a job
      </button>
    </div>
  );
};

export default JobDetailPage;
