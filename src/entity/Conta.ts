import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Conta {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    tipo!: string;

    @Column()
    saldo!: number;
}