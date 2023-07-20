import { User } from "../entity/User.entity";

export class CreateUserDto implements User {
    nome: string;

    email: string;

    senha: string;

    id: number;

    cpf: string;

    setor: string;

    matricula: string;

    estado_atividade: boolean;
}