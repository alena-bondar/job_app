import { useRouter } from 'next/navigation'
import { JobData } from '@/types';
import Button from '../components/button'

const JobPage = async () => {
  const router = useRouter();

  async function getJobs() {
    const res = await fetch(`${process.env.NEXT_API_URL}/job`)
    return res.json()
  }
  const allJobs = getJobs();
  const [jobs] = await Promise.all([allJobs])

  const handleJobClick = (id: string) => {
    router.push(`/job/${id}`);
  };

  return (
    <div>
      <h1>All jobs</h1>
      {jobs?.length ? (
        <ul>
          {jobs.map((job: JobData) => (
            <li key={job.id}>
              <h2>{job.jobName}</h2>
              <p>{job.jobDescription}</p>
              <p><strong>Company:</strong> {job.companyName}</p>
              <Button
                type='button'
                name='Go to job description'
                onClick={async () => handleJobClick(job.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
}

export default JobPage;