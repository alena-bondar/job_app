import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Company } from './entities/company.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
