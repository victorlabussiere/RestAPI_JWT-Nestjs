import { Injectable } from "@nestjs/common";
import { UserSchema } from "../database/entity/UserSchema.entity";

import { CreateUserDto, UpdateUserDto } from "./dtos";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersServices {
    constructor(
        @InjectRepository(UserSchema)
        private usersRepository: Repository<UserSchema>
    ) { }

    async create(createUserDto: CreateUserDto) {
        return await this.usersRepository.save(createUserDto)
    }

    async index(): Promise<UserSchema[]> {
        return await this.usersRepository.find()
    }

    async show({ id }): Promise<UserSchema | null> {
        return await this.usersRepository.findOne({ where: { id } })
    }

    async update(id, updateUserDto: UpdateUserDto) {
        return await this.usersRepository.update(id, updateUserDto)
    }

    async remove(id: number) {
        return this.usersRepository.delete(id)
    }
}