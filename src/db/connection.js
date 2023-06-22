const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

con.connect((error) => {
    if (error) {
        console.error('Connection to DB Failed', error);
        process.exit(1);
    } else {
        console.log('DB Connection Made');
    }
});

module.exports = con;