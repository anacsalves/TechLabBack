"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_source_1 = require("../data-source");
const Conta_1 = require("../entity/Conta");
const contaRepository = data_source_1.AppDataSource.getRepository(Conta_1.Conta);
const router = (0, express_1.Router)();
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
exports.default = router;
