import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local'
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, senha: string): Promise<any> {
        const user = await this.authService.validateUser({ email, senha });

        if (!user) throw new UnauthorizedException();

        return user;
    }
}