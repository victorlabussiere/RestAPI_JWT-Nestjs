import { IsOptional, IsBoolean, IsString, IsEmail } from 'class-validator'

export class UpdateUserDto {

    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsString()
    cpf?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    senha?: string;

    @IsOptional()
    @IsString()
    setor?: string;

    @IsOptional()
    @IsString()
    matricula?: string;

    @IsOptional()
    @IsBoolean()
    estado_atividade?: boolean;
}