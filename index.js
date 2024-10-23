import express from 'express'
import sequelize from "./src/db/connection.js"
const app = express();
const port = 3000;






app.listen(port, () =>{
    pool.connect().then(client => {
        console.log("Connected to the database");
        client.release();
    }).catch(err => {
        console.error("Error Connecting to the database", err);
    });
    console.log(`Server is running on port: ${port}`);
});