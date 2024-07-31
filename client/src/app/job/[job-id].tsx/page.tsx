import { useRouter } from 'next/router';

const JobIdPage = async () => {
  const router = useRouter();
  const { id } = router.query;

  async function getJobsById() {
    return fetch(`${process.env.NEXT_API_URL}/job/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch job');
        }
        return response.json();
      })
      .then(data => data)
      .catch(() => null);
  }

  const job = getJobsById();

  return (
    <div>
      <h1>Job Details</h1>
              <h2>{job}</h2>
              <p>{job}</p>
              <p><strong>Company:</strong>{job}</p>
    </div>
  );
}

export default JobIdPage;