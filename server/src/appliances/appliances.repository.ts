import { EntityRepository } from '@mikro-orm/core';
import { Appliances } from './entities/appliances.entity';

export class AppliancesRepository extends EntityRepository<Appliances> {}
