import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req){
    return this.authService.login(req.user)
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async profile(@Request() req){
    return req.user
  }


}
