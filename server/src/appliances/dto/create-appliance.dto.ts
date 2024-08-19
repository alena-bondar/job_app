import { IsEmail, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateApplianceDto {
  @IsUUID()
  id: number;

  @IsUUID()
  jobId: string;

  @IsUUID()
  companyId: string;

  @MinLength(2, {
    message: 'User name is too short. Minimal length is 2 characters',
  })
  @MaxLength(20, {
    message: 'user name is too long. Maximal length is 20 characters',
  })
  userName: string;

  @IsEmail()
  userEmail: string;

  @MinLength(2, {
    message: 'Appliance text is too short. Minimal length is 2 characters',
  })
  @MaxLength(20, {
    message: 'Appliance text is too long. Maximal length is 20 characters',
  })
  applianceText: string;
}
