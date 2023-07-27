import { Body, HttpCode, HttpStatus, Request, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { LoginDto } from './dtos/authLogin.dto';

@Controller('auth')
export class AuthController {

    constructor(private authServices: AuthService) { }

    // @UseGuards(LocalStrategy)
    // @Post('login')
    // async login(@Request() req) {
    //     return this.authServices.validateUser(req.body)
    // }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authServices.login(loginDto)
    }
}
