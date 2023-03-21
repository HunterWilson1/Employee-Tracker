const mysql = require('mysql2')
require('dotenv').config();

const db = {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const connection = mysql.createConnection(db);

module.exports = {db, connection}