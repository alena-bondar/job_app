import { EntityRepository } from '@mikro-orm/core';
import { Company } from './entities/company.entity';

export class CompanyRepository extends EntityRepository<Company> {}
