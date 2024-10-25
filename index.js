import express from 'express'
import sequelize from "./src/db/connection.js"
import dotenv from "dotenv";
import personRoutes from "./src/routes/personRoutes.js"

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/person", personRoutes);


sequelize.sync().then(() => {
    console.log("Connected to the database and tables syncronized");
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});
