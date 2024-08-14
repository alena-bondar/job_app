import { create } from "zustand";
import { CompanyData, JobData } from '@/types';

type StoreState = {
  role: string,
  setRole: (role: string) => void,
  jobs: JobData[];
  setJobs: (jobs: JobData[]) => void;
  companies: CompanyData[];
  setCompanies: (companies: CompanyData[]) => void;
};

const useStore = create<StoreState>((set) => ({
  role: 'user',
  jobs: [],
  companies: [],

  setRole: (role) => set({role}),
  setJobs: (jobs) => set({ jobs }),
  setCompanies: (companies) => set({ companies }),

}));

export default useStore;
