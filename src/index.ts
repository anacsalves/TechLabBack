import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuario.routes';
import contaRoutes from './routes/conta.routes';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(cors({
      origin: 'http://localhost:3000'  
    }));

    app.use(express.json());

    app.use('/usuarios', usuarioRoutes);
    app.use('/contas', contaRoutes);

    app.listen(3001, () => {
        console.log('🚀 Servidor rodando em http://localhost:3001');
    });
}).catch(error => console.log(error));
