const conn = require("./dbConn");
const express = require('express');
const router = express.Router();

router.post("/rentalBike", (req, res) => {
    console.log(req.body.bike);
    const num = req.body.bike.id;

    conn.query(
        "INSERT INTO bike (num) VALUES (?)",
        [num],
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


router.get("/usesageInqury", (req, res) => {
    conn.query(
        "SELECT * FROM useage",

        (error, results, fields) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            } else {
                res.send(results)
            }
        }
    );
});

module.exports = router;