import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string

    @Column()
    cpf: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    setor: string

    @Column()
    matricula: string

    @Column()
    estado_atividade: boolean
}