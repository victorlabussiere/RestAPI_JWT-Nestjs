import { UserSchema } from "../../database/entity/UserSchema.entity";

export class UpdateUserDto implements UserSchema {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    setor: string;
    matricula: string;
    estado_atividade: boolean;
}