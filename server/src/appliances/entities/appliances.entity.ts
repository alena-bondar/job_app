import {
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Job } from '../../job/entities/job.entity';
import { AppliancesRepository } from '../appliances.repository';
import { v4 } from 'uuid';
import { Company } from '../../company/entities/company.entity';

@Entity({ repository: () => AppliancesRepository })
export class Appliances {
  @PrimaryKey({ type: 'uuid' })
  id: string = v4();

  @OneToOne({
    entity: () => Job,
    fieldName: 'job_id',
    joinColumn: 'jobId',
    type: 'uuid',
  })
  jobId!: Job;

  @Property()
  userName!: string;

  @Property()
  userEmail!: string;

  @Property({ columnType: 'text' })
  applianceText!: string;

  @ManyToOne(() => Company, { fieldName: 'company_id', type: 'uuid' })
  companyId!: Company;
}
