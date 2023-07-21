import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSchema } from 'src/database/entity/UserSchema.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserSchema)
        private usersRepository: Repository<UserSchema>
    ) { }

    async validateUser(authUserDto: { email: string, senha: string }) {
        const query: UserSchema = await this.usersRepository.findOne({ where: { email: authUserDto.email } })

        if (!query) { return 'Usuário não encontrado' }
        if (query.senha !== authUserDto.senha) return 'Dados inválidos'

        return {
            setor: query.setor,
            message: 'Autenticado com sucesso'
        }
    }
}
