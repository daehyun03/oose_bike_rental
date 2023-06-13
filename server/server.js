const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

const sub1Router = require('./sub1Control')
const sub2Router = require('./sub2Control')
const sub3Router = require('./sub3Control')
const sub4Router = require('./sub4Control')
const sub5Router = require('./sub5Control')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Annabelle@1105",
    database: "mydb",
});

app.use('/sub1Control', sub1Router);

app.get("/", (req, res) => {
   res.send("Run Server");
});

app.post("/insertBicycle", (req, res) => {
    console.log(req.body.Bicycle);
    const id = req.body.Bicycle.id;
    const defaultRenId = 1;
    const defaultStatus = "사용가능";
    connection.query(
        "INSERT INTO Bicycle (by_id, ren_id , status) VALUES (?, ?, ?)",
        [id, defaultRenId,defaultStatus],
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

app.post("/insertRentalOffice", (req, res) => {
    console.log(req.body.rentalOffice);
    const id = req.body.rentalOffice.id;
    const name = req.body.rentalOffice.name;
    const manager = req.body.rentalOffice.manager;
    const defaultBicycleNum = "0";

    connection.query(
        "INSERT INTO RentalOffice (ren_id, ren_name, manager, bicycle_num) VALUES (?, ?, ?, ?)",
        [id, name, manager, defaultBicycleNum],
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




app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});

module.exports = connection;