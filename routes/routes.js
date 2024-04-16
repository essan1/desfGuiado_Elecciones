import express from "express";
import path from 'path';
import { crearCandidatos } from "../queries/queries.js";
const router = express.Router();
const __dirname = import.meta.dirname;


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
})


router.post('/candidato', async (req, res) => {
    const {nombre, foto, color} = req.body;
    const datos = [nombre, foto, color]
    await crearCandidatos(datos)
    res.send('candidato agreagdo')
})  

export default router;