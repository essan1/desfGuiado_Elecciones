import { response } from "express";
import db from "../config/db.js"

//crear candidatos
const crearCandidatos = async (datos) => {
    try {
        const query = {
            text:"insert into candidatos (nombre, foto, color) values ($1, $2, $3) returning *",
            values: datos
        }
        const response = await db.query(query);
        return response.rows[0]
    } catch (error) {
        console.log(error.message);
        
    }
}

export {
    crearCandidatos
}