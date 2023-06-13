const conn = require("./server/server");
const express = require('express');
const router = express.Router();

router.post("/rentalBike", (req, res) => {
    console.log(req.body);

    conn.query(
        "SELETE * FROM rental WHERE bicycleNum = bicycleNum",
        (error, results, fields) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            } else {
                res.send(results);
            }
        }
    );
});

router.post("/useageInqury", (req, res) => {
    console.log(req.body);

    conn.query(
        "SELECT user FROM useage",
        (error, results, fields) => {
            if (error) {
                console.error("Error retrieving user data: ", error);
                res.status(500).send("Error retrieving user data");
            } else {
                res.send(results);
            }
        }
    );
});

module.exports = router;