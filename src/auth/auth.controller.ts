import { Body, Get, HttpCode, HttpStatus, Request, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/authLogin.dto';
import { AuthGuard } from './auth.guard';
import { Public } from './decorators/public.decorators';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
