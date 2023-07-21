import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from 'src/database/entity/UserSchema.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([UserSchema])]
})
export class AuthModule { }
