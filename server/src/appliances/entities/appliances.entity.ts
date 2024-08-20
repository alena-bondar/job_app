import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Job } from '../../job/entities/job.entity';
import { AppliancesRepository } from '../appliances.repository';
import { v4 } from 'uuid';

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

  @Property()
  companyId: string;
}
