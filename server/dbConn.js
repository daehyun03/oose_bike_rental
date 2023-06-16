const mysql = require("mysql");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Aadmin972",
    database: "db2",
});

module.exports = connection;