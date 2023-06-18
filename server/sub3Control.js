const conn = require("./dbConn");
const express = require('express');
const router = express.Router();


router.post("/paymentInqury", (req, res) => {
    console.log(req.body);

    conn.query(
        "SELECT paymentHistory FROM history",
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

router.post("/statistics", (req, res) => {
    console.log(req.body);

    conn.query(
        "SELECT bikeStast FROM statistics",
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
