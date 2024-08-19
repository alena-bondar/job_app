import { Job } from './job/entities/job.entity';
import { Company } from './company/entities/company.entity';

export type JobWithCompanyName = Omit<Job, 'companyId'> & {
  company: Company;
};
