import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Usuario } from "./entity/Usuario"; // Exemplo de entidade

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true, // Cria as tabelas automaticamente (não usar em produção)
    logging: true,
    entities: [Usuario],
});
