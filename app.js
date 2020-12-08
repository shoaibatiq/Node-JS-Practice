'use strict';
const express = require("express");
const bodyParser = require('body-parser');
const { urlencoded } = require("body-parser");
let app = express();
let urlencodedParser = bodyParser.urlencoded({extended : false})
app.use(express.static(__dirname));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/person/:id", (req, res) => {
  res.render("person", { ID: req.params.id, QSTR : req.query.qstr });
});

app.get("/sign_up", (req, res) => {
    res.render("form");
  });

app.post('/thank',urlencodedParser,(req, res) => {
    res.send("Thank You");
    console.log(req.body.firstname)
    console.log(req.body.lastname)
})

app.listen(3000);
