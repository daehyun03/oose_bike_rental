const connection = require("./dbConn");
const express = require('express');
const router = express.Router();
const winston = require('winston')
const logger = winston.createLogger()


router.get("/announceInqury", (req, res) => {
    connection.query(
        "SELECT * FROM announcement",
        (error, results) => {
            if(error) {
                console.log(error)
            } else {
                res.send({datas: results})
            }
        }
    )
})

router.post("/addAnnounce", (req, res) => {
    const title = req.body.title
    const contents = req.body.contents
    logger.info(contents)
    connection.query(
        "INSERT INTO announcement (title, contents) VALUES (?,?)", [title, contents],
        (err) => {
            if (err) {

            } else {
                res.send()
            }
        }
    )
})

module.exports = router