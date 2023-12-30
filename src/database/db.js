import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();


const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            // ssl: false //for local
            // ssl: false, //for digitalocean
            ssl: {
                require: true,
                rejectUnauthorized: false

            }
        }
    });

export default db;