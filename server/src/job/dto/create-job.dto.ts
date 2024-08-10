import { IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateJobDto {
  @IsUUID()
  jobId: string;

  @MinLength(2, {
    message: 'Job name is too short. Minimal length is 2 characters',
  })
  @MaxLength(20, {
    message: 'Job name is too long. Maximal length is 20 characters',
  })
  jobName: string;

  @MinLength(2, {
    message: 'Job description is too short. Minimal length is 2 characters',
  })
  @MaxLength(100, {
    message: 'Job description is too long. Maximal length is 100 characters',
  })
  jobDescription: string;

  @IsUUID()
  companyId: string;
}
