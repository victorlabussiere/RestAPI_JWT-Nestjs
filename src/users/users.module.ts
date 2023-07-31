import { Module } from '@nestjs/common'
import { UsersServices } from './users.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../entity/UserSchema.entity';

@Module({
    providers: [UsersServices],
    controllers: [UserController],
    exports: [UsersServices],
    imports: [TypeOrmModule.forFeature([UserSchema])],
})
export class UsersModule { }