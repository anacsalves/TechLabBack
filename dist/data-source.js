"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./entity/Usuario");
const Conta_1 = require("./entity/Conta");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true, // Cria as tabelas automaticamente (não usar em produção)
    logging: true,
    entities: [Usuario_1.Usuario, Conta_1.Conta],
});
