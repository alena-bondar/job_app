import { Job } from './entities/job.entity';
import { EntityRepository } from '@mikro-orm/core';

export class JobRepository extends EntityRepository<Job> {
  async findAllWithCompanyName(): Promise<Job[]> {
    return this.findAll({ populate: ['companyId'] });
  }

  async findOneWithCompanyName(jobId: string): Promise<Job | null> {
    return this.findOne({ jobId }, { populate: ['companyId'] });
  }
}
