import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Usuario } from '../entity/Usuario';

const usuarioRepository = AppDataSource.getRepository(Usuario);
const router = Router();

router.get('/', async (req, res) => {
    const usuarios = await usuarioRepository.find();
    res.json(usuarios);
});

router.post('/', async (req, res) => {
    const { nome, email } = req.body;
    const usuario = usuarioRepository.create({ nome, email });
    await usuarioRepository.save(usuario);
    res.status(201).json(usuario);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await usuarioRepository.delete(id);
    res.status(204).send();
});

export default router;
