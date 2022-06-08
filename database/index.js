import dotenv from 'dotenv';
import { db } from "../config/environment";

dotenv.config();

const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

const { user, password, name } = db;
var sequelize = new Sequelize(name, user, password, { dialect: 'mysql' });

const init = async () => {

    // create db if it doesn't already exist
    const { host, port, user, password, name } = db;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${name}\`;`);

    // connect to db
    let sequelize = new Sequelize(name, user, password, { dialect: 'mysql' });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database.', error);
    }

    await sequelize.sync();

    return sequelize;
}

module.exports = {
  init,
  sequelize
}