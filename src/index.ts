import express from 'express';
import usuarioRoutes from './routes/usuario.routes';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use('/usuarios', usuarioRoutes);

    app.listen(3000, () => {
        console.log('🚀 Servidor rodando em http://localhost:3000');
    });
}).catch(error => console.log(error));
