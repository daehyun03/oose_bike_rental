const mysql = require("mysql");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bike_rental",
});

module.exports = connection;