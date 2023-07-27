import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/authLogin.dto';
import { UsersServices } from 'src/users/users.service';
import { UserSchema } from 'src/database/entity/UserSchema.entity';

@Injectable()
export class AuthService {
    constructor(private userServices: UsersServices) { }

    async validateUser(loginDto: LoginDto) {
        const { email, senha } = loginDto
        const user: UserSchema = await this.userServices.findByEmail(email)

        if (!user) return null
        if (user.senha !== senha) return null

        return user
    }

    async login(loginDto: LoginDto) {
        const user: UserSchema = await this.userServices.findByEmail(loginDto.email)

        if (user?.senha != loginDto.senha) throw new UnauthorizedException()

        const { email, ...result } = user
        /**
         * TODO jwt token generator
         */
        return result
    }
} 
