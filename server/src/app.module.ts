import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { JobModule } from './job/job.module';
import { AppliancesModule } from './appliances/appliances.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    JobModule,
    AppliancesModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
