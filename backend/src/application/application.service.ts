import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Application} from "./entities/application.entity";
import {Repository} from "typeorm";
import {ApplicationGroup} from "./entities/application-group.entity";
import {CreateApplicationGroupDto} from "./dto/create-application-group.dto";


@Injectable()
export class ApplicationService {
  constructor(
      @InjectRepository(Application) private readonly applicationRepository: Repository<Application>,
      @InjectRepository(ApplicationGroup) private readonly applicationRepositoryGroup: Repository<ApplicationGroup>,

  ) {
  }
  async createSingle(createApplicationDto: CreateApplicationDto, id) {
    createApplicationDto["accept"] = false
    createApplicationDto["user_id"] = id
    return await this.applicationRepository.save(createApplicationDto)



  }

  async createGroup(createApplicationGroupDto: CreateApplicationGroupDto, id) {
    createApplicationGroupDto["accept"] = false
    createApplicationGroupDto["user_id"] = id
    return await this.applicationRepositoryGroup.save(createApplicationGroupDto)



  }


  async findAll() {
    const applications = {
      single: await this.applicationRepository.find(),
      group: await this.applicationRepositoryGroup.find()
    }
    return applications;
  }

  async findOne(id,type) {
    let application;
   if (type == "single"){
     application = await this.applicationRepository.findOne({
       where:{
         id
       }
     })
   }else{
     application = await this.applicationRepositoryGroup.findOne({
       where:{
         id
       }
     })
   }
   return application
  }
  async findUser(id) {
    const applications = {
      single: await this.applicationRepository.find({
        where:{
          user: id
        }
      }),
      group: await this.applicationRepositoryGroup.find({
        where:{
          user: id
        }
      })
    }
    return applications;
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
