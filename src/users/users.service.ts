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

    /**
     * Faz um insert no banco de dados com o modelo de UserSchema
     * @param {UserSchema} createUserDto 
     * @returns 
     */
    async create(createUserDto: CreateUserDto) {
        return await this.usersRepository.save(createUserDto)
    }

    /**
     * Retorna um array com todos as tabelas.
     * @returns {UserSchema[]} 
     */
    async index(): Promise<UserSchema[]> {
        return await this.usersRepository.find()
    }

    /**
     * Retorna do banco o user com o ID equivalente ou null
     * @param {Number} id 
     * @returns {Promise<UserSchema>} 
     */
    async show({ id }): Promise<UserSchema | null> {
        return await this.usersRepository.findOne({ where: { id } })
    }

    /**
     * Realiza um UPDATE em uma tabela tendo como referência o ID
     * @param {Number} id ID do usuário que será alterado
     * @param updateUserDto JSON com as mudança para as colunas
     * @returns 
     */
    async update(id, updateUserDto: UpdateUserDto) {
        return await this.usersRepository.update(id, updateUserDto)
    }

    /**
     * Realiza um DELETE de uma linha em uma tabela através do ID
     * @param id 
     * @returns {Void}
     */
    async remove(id: number) {
        return this.usersRepository.delete(id)
    }

    /**
     * Realiza um SELECT no banco tendo o 'email' como referência
     * @param {String} email 
     * @returns {UserSchema | Null} 
     */
    async findByEmail(email: string) {
        return this.usersRepository.findOne({ where: { email } })
    }
}