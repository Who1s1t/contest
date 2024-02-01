import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as argon2 from "argon2"
import {JwtService} from "@nestjs/jwt";
import {IUser} from "../types/type";

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
              private jwtService: JwtService) {
  }

  async validateUser(login: string, password: string){
    const user = await this.userService.findOneByLogin(login)
    if (user && await argon2.verify(user.password,password)){

      return user
    }
    throw new  UnauthorizedException("Неверный логин или пароль!")
  }

  async login(user: IUser){
    const {id, email} = user
    return{
          id,
          email,
          token: this.jwtService.sign({id:user.id,email:user.email})
    }
  }
}

