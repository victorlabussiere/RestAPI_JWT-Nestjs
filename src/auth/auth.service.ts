import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/authLogin.dto';
import { UsersServices } from 'src/users/users.service';
import { UserSchema } from 'src/entity/UserSchema.entity';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userServices: UsersServices,
        private jwtService: JwtService
    ) { }

    async login(loginDto: LoginDto) {

        const user: UserSchema = await this.userServices.findByEmail(loginDto.email)
        if (user?.senha != loginDto.senha) throw new UnauthorizedException()

        const payload = { userId: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

} 
