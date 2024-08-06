import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppliancesService } from './appliances.service';
import { Appliances } from './entities/appliances.entity';

@Controller('appliances')
export class AppliancesController {
  constructor(private readonly appliancesService: AppliancesService) {}

  @Post()
  async create(
    @Body() appliancesData: Partial<Appliances>,
  ): Promise<Appliances> {
    return await this.appliancesService.create(appliancesData);
  }

  @Get('all')
  async findAll(): Promise<Appliances[]> {
    return this.appliancesService.findAll();
  }
}
