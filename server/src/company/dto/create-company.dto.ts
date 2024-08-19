import {
  IsBoolean,
  IsEmail,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCompanyDto {
  @IsUUID()
  companyId: string;

  @IsEmail()
  companyEmail: string;

  @MinLength(2, {
    message: 'Company name is too short. Minimal length is 2 characters',
  })
  @MaxLength(20, {
    message: 'Company name is too long. Maximal length is 20 characters',
  })
  companyName: string;

  @IsBoolean()
  deleted: boolean = false;
}
