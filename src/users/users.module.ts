import { Module } from '@nestjs/common'
import { UsersServices } from './users.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../database/entity/UserSchema.entity';

@Module({
    providers: [UsersServices],
    controllers: [UserController],
    imports: [TypeOrmModule.forFeature([UserSchema])],
})
export class UsersModule { }