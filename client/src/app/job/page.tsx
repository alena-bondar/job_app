import { GetServerSideProps } from 'next';
import { JobData } from '@/types';

export default async function JobIdPage() {
  async function getJobs() {
    const res = await fetch(`${process.env.NEXT_API_URL}/job`)
    return res.json()
  }

  const allJobs = getJobs();

  const [jobs] = await Promise.all([allJobs])

  console.log('jobs', jobs);
  return (
    <div>
      <h1>Job Details</h1>
      {jobs?.length ? (
        <ul>
          {jobs.map((job: JobData) => (
            <li key={job.id}>
              <h2>{job.jobName}</h2>
              <p>{job.jobDescription}</p>
              <p><strong>Company:</strong> {job.companyName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
}