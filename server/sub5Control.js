const conn = require("./dbConn");
const express = require('express');
const router = express.Router();

router.post("/insertBicycle", (req, res) => {
    console.log(req.body.Bicycle);
    const id = req.body.Bicycle.id;
    const defaultRenId = "초기값";
    conn.query(
        "INSERT INTO rental_bike (bicycleNum, location , date) VALUES (?, ?, ?)",
        [id, defaultRenId, new Date()],
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

router.post("/insertRentalOffice", (req, res) => {
    console.log(req.body.rentalOffice);
    const id = req.body.rentalOffice.id;
    const name = req.body.rentalOffice.name;
    const manager = req.body.rentalOffice.manager;
    const defaultBicycleNum = "0";

    conn.query(
        "INSERT INTO rental_office (ren_id, ren_name, manager, bicycle_num) VALUES (?, ?, ?, ?)",
        [id, name, manager, defaultBicycleNum],
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

//중복 체크용
router.get("/insertBicycle", (req, res) => {
    connection.query(
        "SELECT bicycleNum FROM rental_bike",
        (error, results) => {
            if(error) {
                console.log(error)
            } else {
                res.send({datas: results})
            }
        }
    )
})
//중복 체크용
router.get("/insertRentalOffice", (req, res) => {
    connection.query(
        "SELECT ren_id FROM rental_office",
        (error, results) => {
            if(error) {
                console.log(error)
            } else {
                res.send({datas: results})
            }
        }
    )
})
module.exports = router;