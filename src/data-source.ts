import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Usuario } from "./entity/Usuario"; 
import { Conta } from './entity/Conta';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true, // Cria as tabelas automaticamente (não usar em produção)
    logging: true,
    entities: [Usuario, Conta],
});
