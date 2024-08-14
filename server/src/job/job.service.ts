import { Injectable, NotFoundException } from '@nestjs/common';
import { Job } from './entities/job.entity';
import { EntityManager } from '@mikro-orm/core';
import { JobRepository } from './job.repository';
import { InjectRepository } from '@mikro-orm/nestjs';
import { JobWithCompanyName } from '../types';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: JobRepository,
    private readonly em: EntityManager,
  ) {}

  async create(jobData: Partial<Job>): Promise<Job> {
    const job = this.jobRepository.create(jobData);
    await this.em.persistAndFlush(job);
    return job;
  }

  async findAll(): Promise<JobWithCompanyName[]> {
    const jobs = await this.jobRepository.findAllWithCompanyName();

    return jobs.map((job) => ({
      jobId: job.jobId,
      jobName: job.jobName,
      jobDescription: job.jobDescription,
      companyName: job.companyId.companyName,
      deleted: job.deleted,
    }));
  }

  async findOne(jobId: string): Promise<JobWithCompanyName> {
    const job = await this.jobRepository.findOneWithCompanyName(jobId);

    if (!job) {
      throw new NotFoundException(`Job with ID ${jobId} not found`);
    }

    return {
      jobId: job.jobId,
      jobName: job.jobName,
      jobDescription: job.jobDescription,
      companyName: job.companyId.companyName,
      deleted: job.deleted,
    };
  }

  async markAsDeleted(id: string) {
    const job = await this.jobRepository.findOne({ jobId: id });

    if (!job) {
      throw new NotFoundException(`Job not found`);
    }

    job.deleted = true;
    await this.em.persistAndFlush(job);

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
