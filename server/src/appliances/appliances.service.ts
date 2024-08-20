import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/core';
import { AppliancesRepository } from './appliances.repository';
import { Appliances } from './entities/appliances.entity';
import { sendConfirmApplication } from '../mailer/confirm-application';

@Injectable()
export class AppliancesService {
  constructor(
    @InjectRepository(Appliances)
    private readonly appliancesRepository: AppliancesRepository,
    private readonly em: EntityManager,
  ) {}

  async create(appliancesData: Partial<Appliances>): Promise<Appliances> {
    const jobId = appliancesData.jobId;
    const job = await this.appliancesRepository.findJobByJobId(jobId);

    const isNotUniq = await this.appliancesRepository.findOne({
      jobId: jobId,
    });

    if (isNotUniq) {
      throw new HttpException(
        'You already applied for this job',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const { companyEmail } =
      await this.appliancesRepository.findEmailByCompanyId(
        job.companyId.companyId,
      );

    const appliance = this.appliancesRepository.create({
      ...appliancesData,
      companyId: job.companyId.companyId,
    });
    await this.em.persistAndFlush(appliance);
    await sendConfirmApplication(companyEmail);

    return appliance;
  }

  async findAll(): Promise<Appliances[]> {
    return await this.appliancesRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} appliance`;
  }

  remove(id: number) {
    return `This action removes a #${id} appliance`;
  }
}
