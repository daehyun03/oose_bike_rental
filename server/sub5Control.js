const conn = require("./dbConn");
const express = require('express');
const router = express.Router();

router.post("/insertBicycle", (req, res) => {
    console.log(req.body.Bicycle);
    const id = req.body.Bicycle.id;
    const defaultRenId = 1;
    const defaultStatus = "사용가능";
    conn.query(
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

router.post("/insertRentalOffice", (req, res) => {
    console.log(req.body.rentalOffice);
    const id = req.body.rentalOffice.id;
    const name = req.body.rentalOffice.name;
    const manager = req.body.rentalOffice.manager;
    const defaultBicycleNum = "0";

    conn.query(
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

module.exports = router;