import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/core';
import { CompanyRepository } from './company.repository';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: CompanyRepository,
    private readonly em: EntityManager,
  ) {}

  async create(companyData: Partial<Company>): Promise<Company> {
    const company = this.companyRepository.create(companyData);
    await this.em.persistAndFlush(company);

    return company;
  }

  async findAll() {
    return await this.companyRepository.findAll();
  }

  async findOne(id: string) {
    const company = await this.companyRepository.findOne({ companyId: id });
    if (!company) {
      throw new NotFoundException(`Company not found`);
    }
    return company;
  }

  async remove(id: string) {
    const company = await this.companyRepository.findOne({ companyId: id });
    if (!company) {
      throw new NotFoundException(`Company not found`);
    }
    await this.em.removeAndFlush(company);

    return `This action removes a #${id} company`;
  }
}
