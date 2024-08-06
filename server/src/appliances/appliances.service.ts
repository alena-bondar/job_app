import { Injectable } from '@nestjs/common';
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
    const appliance = this.appliancesRepository.create(appliancesData);
    await this.em.persistAndFlush(appliance);
    await sendConfirmApplication(appliancesData);

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
