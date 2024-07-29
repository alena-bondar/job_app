import { v4 } from 'uuid';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { JobRepository } from '../job.repository';

@Entity({ repository: () => JobRepository })
export class Job {
  @PrimaryKey({ type: 'uuid' })
  jobId: string = v4();

  @Property()
  jobName!: string;

  @Property()
  jobDescription!: string;

  @Property({ unique: true })
  companyName!: string;
}
