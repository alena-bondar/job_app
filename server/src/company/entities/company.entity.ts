import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { CompanyRepository } from '../company.repository';

@Entity({ repository: () => CompanyRepository })
export class Company {
  @PrimaryKey({ type: 'uuid' })
  companyId: string = v4();

  @Property({ unique: true, type: 'text' })
  companyName!: string;

  @Property()
  companyEmail!: string;
}
