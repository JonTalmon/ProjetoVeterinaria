import { Sequelize } from "sequelize";
import dotenv from "dotenv";

//dotenv.config();

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: "postgres",
//         dialectOptions:  {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             } 
//         }
// });

const sequelize = new Sequelize(
    'mascot_clinical_pp4h', // DB_NAME
    'mascot_clinical_pp4h_user', // DB_USER
    'x097KU27wDbDdYQB76D8ciTakP0SfGsc', // DB_PASSWORD
    {
        host: 'dpg-csbg1123esus73fpa7q0-a.oregon-postgres.render.com', // DB_HOST
        port: 5432, // DB_PORT
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);




export default sequelize