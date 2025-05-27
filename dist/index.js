"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./data-source");
const Usuario_1 = require("./entity/Usuario");
data_source_1.AppDataSource.initialize().then(async () => {
    console.log("Banco conectado!");
    // Criando um novo usuário
    const usuario = new Usuario_1.Usuario();
    usuario.nome = "Maria";
    usuario.email = "maria@example.com";
    await data_source_1.AppDataSource.manager.save(usuario);
    console.log("Usuário salvo:", usuario);
    // Buscando usuários
    const usuarios = await data_source_1.AppDataSource.manager.find(Usuario_1.Usuario);
    console.log("Usuários cadastrados:", usuarios);
}).catch(error => console.log(error));
