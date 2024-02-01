import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {CreateApplicationGroupDto} from "./dto/create-application-group.dto";

@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post("create/single")
  @UseGuards(JwtAuthGuard)
  createSingle(@Body() createApplicationDto: CreateApplicationDto, @Request() req) {
    return this.applicationService.createSingle(createApplicationDto,+req.user.id);
  }

  @Post("create/group")
  @UseGuards(JwtAuthGuard)
  createGroup(@Body() createApplicationGroupDto: CreateApplicationGroupDto, @Request() req) {
    return this.applicationService.createGroup(createApplicationGroupDto,+req.user.id);
  }

  @Get("all")
  findAll() {
    return this.applicationService.findAll();
  }

  @Get('/:type/:id')
  findOne(@Param('id') id: string,@Param('type') type: string) {
    return this.applicationService.findOne(+id,type);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findUser(@Request() req) {
    return this.applicationService.findUser(+req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationDto: UpdateApplicationDto) {
    return this.applicationService.update(+id, updateApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationService.remove(+id);
  }
}
