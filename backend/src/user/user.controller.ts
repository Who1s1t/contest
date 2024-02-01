import {Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create")
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get(':email')
  async findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }


}