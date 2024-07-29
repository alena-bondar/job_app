import { Job } from './entities/job.entity';
import { EntityRepository } from '@mikro-orm/core';

export class JobRepository extends EntityRepository<Job> {}
