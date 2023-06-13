const conn = require("./dbConn");
const express = require('express');
const router = express.Router();

router.post("/insertUser", (req, res) => {
    console.log(req.body.user);
    const id = req.body.user.id;
    const pw = req.body.user.pw;
    const name = req.body.user.name;
    const phone = req.body.user.phone;
    const mail = req.body.user.mail;
    const isAdmin = req.body.user.isAdmin;

    conn.query(
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

router.post("/selectOneUser", (req, res) => {
    const sn = req.body.user.sn;

    console.log(sn);

    conn.query(
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

module.exports = router;