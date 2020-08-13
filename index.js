var express = require("express");
var app = express();
var cors = require('cors')

app.use(cors())
app.listen(8080, () => {
 console.log("Server running on port 3000");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/", (req, res, next) => {
  res.json(["Hi","Bu","From","ViC"]);
});