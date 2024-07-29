import {Module} from "@nestjs/common";
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {Appliances} from "./entities/appliances.entity";
import {AppliancesService} from "./appliances.service";
import {AppliancesController} from "./appliances.controller";


@Module({
    imports: [MikroOrmModule.forFeature([Appliances])],
    controllers: [AppliancesController],
    providers: [AppliancesService],
})
export class AppliancesModule {}
