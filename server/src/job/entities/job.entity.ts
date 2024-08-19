import { v4 } from 'uuid';
import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { JobRepository } from '../job.repository';
import { Company } from '../../company/entities/company.entity';

@Entity({ repository: () => JobRepository })
export class Job {
  @PrimaryKey({ type: 'uuid' })
  jobId: string = v4();

  @Property()
  jobName!: string;

  @Property()
  jobDescription!: string;

  @ManyToOne(() => Company, { fieldName: 'company_id', type: 'uuid' })
  companyId!: Company;

  @Property()
  deleted: boolean = false;
}
