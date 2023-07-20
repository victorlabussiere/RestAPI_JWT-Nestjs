import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersServices } from "./users.service";
import { User } from "./entity/User.entity";
import { CreateUserDto } from "./dtos/create-user.dto";

import { ParseIntPipe } from "@nestjs/common";

@Controller('users')
export class UserController {

    constructor(private readonly userServices: UsersServices) { }

    @Get()
    findUsers(): Promise<User[]> {
        return this.userServices.get()
    }

    @Get(':id')
    async findUser(@Param('id', ParseIntPipe) id: number) {
        return await this.userServices.show({ id })
    }

    @Post()
    store(@Body() user: CreateUserDto) {
        return this.userServices.create(user)
    }

    @Patch(':id')
    update(@Body() body: CreateUserDto, @Param('id', ParseIntPipe) id: number) {
        return this.userServices.update(id, body)
    }

    @Delete('/:id')
    destroy(@Param('id', ParseIntPipe) id: number) {
        return this.userServices.remove(id)
    }
}