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

app.use('/sub1Control', sub1Router);
app.use('/sub3Control', sub3Router);
app.use('/sub4Control', sub4Router)
app.use('/sub5Control', sub5Router);



app.get("/", (req, res) => {
   res.send("Run Server");
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
