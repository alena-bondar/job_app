export type JobData = {
  jobId: string;
  jobName: string;
  jobDescription: string;
  companyName: string;
};

export type JobDetailTypes = {
  params: {
    id: string;
  };
};

export type ApplicationData = {
  jobId: string;
  userName: string;
  userEmail: string;
  applianceText: string;
};

export type CompanyData = {
  companyId: string;
  companyName: string;
  companyEmail: string;
  deleted: boolean;
};
