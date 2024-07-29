import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Job } from './entities/job.entity';
import { EntityManager } from '@mikro-orm/core';
import { JobRepository } from './job.repository';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: JobRepository,
    private readonly em: EntityManager,
  ) {}

  async create(jobData: Partial<Job>): Promise<Job> {
    const existingJob = await this.jobRepository.findOne({
      companyName: jobData.companyName,
    });
    if (existingJob) {
      throw new BadRequestException(
        `Company with name ${jobData.companyName} already exists`,
      );
    }

    const job = this.jobRepository.create(jobData);
    await this.em.persistAndFlush(job);
    return job;
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.findAll();
  }

  async findOne(id: string): Promise<Job> {
    const job = await this.jobRepository.findOne({ jobId: id });
    if (!job) {
      throw new NotFoundException(`Job not found`);
    }
    return job;
  }

  async remove(id: string): Promise<Job> {
    const job = await this.jobRepository.findOne({ jobId: id });
    if (!job) {
      throw new NotFoundException(`Job not found`);
    }
    await this.em.removeAndFlush(job);
    return job;
  }
}
