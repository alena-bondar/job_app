export const getJobs = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}/job`);
  return res.json();
};
