import { EntityRepository } from '@mikro-orm/core';
import { Appliances } from './entities/appliances.entity';
import { Company } from '../company/entities/company.entity';
import { Job } from '../job/entities/job.entity';

export class AppliancesRepository extends EntityRepository<Appliances> {
  async findJobByJobId(jobId): Promise<Job | null> {
    return await this.getEntityManager().getRepository(Job).findOne({ jobId });
  }

  async findEmailByCompanyId(companyId): Promise<Company | null> {
    return await this.getEntityManager()
      .getRepository(Company)
      .findOne({ companyId });
  }
}
