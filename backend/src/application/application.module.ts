import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Application} from "./entities/application.entity";
import {ApplicationGroup} from "./entities/application-group.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Application,ApplicationGroup])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
