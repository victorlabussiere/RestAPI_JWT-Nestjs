import { IsBoolean, IsNumber, IsString, IsEmail } from "class-validator";

export class CreateUserDto {

    // @IsNumber()
    // id: number;

    @IsString()
    nome: string;

    @IsString()
    cpf: string;

    @IsEmail()
    email: string;

    @IsString()
    senha: string;

    @IsString()
    setor: string;

    @IsString()
    matricula: string;

    @IsBoolean()
    estado_atividade: boolean;
}