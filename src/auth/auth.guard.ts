import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';

import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './decorators/public.decorators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if (isPublic) {
            return true
        }

        // capturando a requisição feita pelo usuário
        const request = context.switchToHttp().getRequest();

        // extraindo o token da requisição
        const token = this.extractTokenFromHeader(request);

        // exceção para ausência de token
        if (!token) {
            throw new UnauthorizedException();
        }

        // resolução do método
        try {
            const payload = await this.jwtService.verifyAsync(
                token, { secret: jwtConstants.secret }
            );

            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}