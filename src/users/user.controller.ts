import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersServices } from "./users.service";
import { UserSchema } from "../database/entity/UserSchema.entity";
import { CreateUserDto } from "./dtos/create-user.dto";

import { ParseIntPipe } from "@nestjs/common";
import { UpdateUserDto } from "./dtos/update-user.dto";

import { AuthGuard } from "src/auth/auth.guard";

@Controller('users')
export class UserController {

    constructor(private readonly userServices: UsersServices) { }

    @Get()
    showUsers(): Promise<UserSchema[]> {
        return this.userServices.index()
    }

    @Get(':id')
    showUser(@Param('id', ParseIntPipe) id: number) {
        return this.userServices.show({ id })
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userServices.create(createUserDto)
    }

    @Patch(':id')
    patchUser(@Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number) {
        return this.userServices.update(id, updateUserDto)
    }

    @Delete('/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userServices.remove(id)
    }
}