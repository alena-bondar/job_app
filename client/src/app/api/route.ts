import axios from "axios";

export const getJobById = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_API_URL}/job/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching job details:", error);
    throw error;
  }
};
