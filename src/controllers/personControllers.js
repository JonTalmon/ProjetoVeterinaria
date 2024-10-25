import express from "express"
import PersonRegister from "../models/personRegister.js"

async function readAllPersons(req, res) {
    try {
        const result = await PersonRegister.findAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ err: "Error retriving persons", details: err.message});
    };
};



export default readAllPersons