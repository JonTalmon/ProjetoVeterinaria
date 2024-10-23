import express from "express"

async function ShowAllPersons(req, res) {
    const result = await pool.query()
    res.json(result.rows)
};