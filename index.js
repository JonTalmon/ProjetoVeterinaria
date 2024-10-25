import express from 'express'
import sequelize from "./src/db/connection.js"
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

import PersonRegister from './src/models/personRegister.js';

app.use(express.json());


app.get("/person", async (req, res) => {
    try {
        const result = await PersonRegister.findAll(); // Busca todos os registros
        console.log('Query Result:', JSON.stringify(result, null, 2)); // Verifique o resultado da consulta
        res.status(200).json(result); // Retorna os registros encontrados
    } catch (error) {
        console.error('Error retrieving people:', error);
        res.status(500).json({ error: 'Error retrieving people', details: error.message }); // Retorna erro se ocorrer
    }
});



sequelize.sync().then(() => {
    console.log("Connected to the database and tables syncronized");
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});
