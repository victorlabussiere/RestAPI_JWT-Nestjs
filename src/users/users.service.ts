import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/User.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";

@Injectable()
export class UsersServices {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    async create(user: CreateUserDto) {
        return await this.usersRepository.save(user)
    }

    async get(): Promise<User[]> {
        return await this.usersRepository.find()
    }

    async show({ id }) {
        return await this.usersRepository.findOne({ where: { id } })
    }

    async update(id, body) {
        return await this.usersRepository.update(id, body)
    }

    async remove(id: number) {
        return this.usersRepository.delete(id)
    }
}