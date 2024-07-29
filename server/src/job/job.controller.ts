import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './entities/job.entity';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  async create(@Body() jobData: Partial<Job>): Promise<Job> {
    return this.jobService.create(jobData);
  }

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.jobService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.jobService.remove(id);
  }
}
