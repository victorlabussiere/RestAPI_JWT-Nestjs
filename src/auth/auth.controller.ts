import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authServices: AuthService) { }

    @Post()
    authUser(@Body() authUserDto: { email: string, senha: string }) {
        return this.authServices.validateUser(authUserDto)
    }

}
