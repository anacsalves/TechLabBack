import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Conta } from '../entity/Conta';

const contaRepository = AppDataSource.getRepository(Conta);
const router = Router();

router.get('/', async (req, res) => {
    const contas = await contaRepository.find();
    res.json(contas);
});

router.post('/', async (req, res) => {
    const { nome, tipo, saldo } = req.body;
    const conta = contaRepository.create({ nome, tipo, saldo });
    await contaRepository.save(conta);
    res.status(201).json(conta);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await contaRepository.delete(id);
    res.status(204).send();
});

export default router;
