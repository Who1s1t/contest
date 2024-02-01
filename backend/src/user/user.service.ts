import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import * as argon2 from "argon2"
@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
  }
  async create(createUserDto: CreateUserDto) {
    const existUser1 = await this.userRepository.findOne({
      where: {
        email:createUserDto.email,
        login: createUserDto.login
      }
    })
    const existUser2 = await this.userRepository.findOne({
      where: {
        login: createUserDto.login
      }
    })
    if (existUser2|| existUser1) throw new BadRequestException("Пользователь с таким email или логином уже существует!")
    const user = await this.userRepository.save({
      email: createUserDto.email,
      login: createUserDto.login,
      password: await argon2.hash(createUserDto.password)
    })



    return user;
  }



  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email: email
      }
    })
    return user


  }


async findOneByLogin(login: string) {
  const user = await this.userRepository.findOne({
    where: {
      login: login
    }
  })
  return user


}
}


