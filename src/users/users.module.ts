import { Module } from '@nestjs/common'
import { UsersServices } from './users.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User.entity';

@Module({
    providers: [UsersServices],
    controllers: [UserController],
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule]
})
export class UsersModule { }