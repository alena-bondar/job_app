import { EntityRepository } from '@mikro-orm/core';
import { Appliances } from './entities/appliances.entity';
import { Company } from '../company/entities/company.entity';

export class AppliancesRepository extends EntityRepository<Appliances> {
  async findEmailByCompanyId(companyId): Promise<Company | null> {
    return await this.getEntityManager()
      .getRepository(Company)
      .findOne({ companyId });
  }
}
