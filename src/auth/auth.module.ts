import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule
  ],
  providers: [
    AuthService,
    LocalStrategy
  ],
})
export class AuthModule { }
