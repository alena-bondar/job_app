import { create } from "zustand";
import { CompanyData, JobData } from "@/types";

type Role = "user" | "admin";

type StoreState = {
  role: Role | null;
  setRole: (role: Role) => void;
  jobs: JobData[];
  setJobs: (jobs: JobData[]) => void;
  companies: CompanyData[];
  setCompanies: (companies: CompanyData[]) => void;
};

const useStore = create<StoreState>((set) => ({
  role: (typeof window !== "undefined" && localStorage.getItem("role")) as Role,
  jobs: [],
  companies: [],

  setRole: (role) => {
    localStorage.setItem("role", role);
    set({ role });
  },
  setJobs: (jobs) => set({ jobs }),
  setCompanies: (companies) => set({ companies }),
}));

export default useStore;
