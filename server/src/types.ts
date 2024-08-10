import { Job } from './job/entities/job.entity';

export type JobWithCompanyName = Omit<Job, 'companyId'> & {
  companyName: string;
};
