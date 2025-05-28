"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const conta_routes_1 = __importDefault(require("./routes/conta.routes"));
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/usuarios', usuario_routes_1.default);
    app.use('/contas', conta_routes_1.default);
    app.listen(3000, () => {
        console.log('🚀 Servidor rodando em http://localhost:3000');
    });
}).catch(error => console.log(error));
