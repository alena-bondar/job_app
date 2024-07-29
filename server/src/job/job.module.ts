import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Job } from './entities/job.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Job])],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
