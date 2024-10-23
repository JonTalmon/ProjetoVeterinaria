import express from 'express'
import { sequelize } from "./src/db/connection.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;





app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to the database");
    } catch (err) {
        console.error("Error connecting to the database", err);
    }
    console.log(`Server is running on port: ${port}`);
});
