"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_source_1 = require("../data-source");
const Usuario_1 = require("../entity/Usuario");
const usuarioRepository = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
const router = (0, express_1.Router)();
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
exports.default = router;
