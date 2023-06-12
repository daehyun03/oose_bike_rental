const express = require("express");
const session = require("express-session");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const MemoryStore = require('memorystore')(session);

const sub1Router = require('./sub1Control')
const sub2Router = require('./sub2Control')
const sub3Router = require('./sub3Control')
const sub4Router = require('./sub4Control')
const sub5Router = require('./sub5Control')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Annabelle@1105",
    database: "mydb",
});

connection.connect();

const maxAge = 1000 * 60 * 100;

app.use(session({
    secret: "key",
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({ checkPeriod : maxAge }),
    cookie: {
        maxAge,
    },
}));


app.post("/insertUser", (req, res) => {
    console.log(req.body.user);
    const id = req.body.user.id;
    const pw = req.body.user.pw;
    const name = req.body.user.name;
    const phone = req.body.user.phone;
    const mail = req.body.user.mail;
    const isAdmin = req.body.user.isAdmin;

    connection.query(
        "INSERT INTO user (id, pw, name, phone, mail, isAdmin) VALUES (?, ?, ?, ?, ?, ?)",
        [id, pw, name, phone, mail, false],
        (error, results, fields) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            } else {
                res.send()
            }
        }
    );
});

app.post("/selectOneUser", (req, res) => {
    const sn = req.body.user.sn;

    connection.query(
        "SELECT * FROM user WHERE sn = ? ORDER BY sn",
        [sn],
        (error, results, fields) => {
            if (error) {
                console.error("Error retrieving user data: ", error);
                res.status(500).send("Error retrieving user data");
            } else {
                res.send(results[sn - 1]);
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
