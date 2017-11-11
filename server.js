// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
  {
    Name: "Jhon Doe",
   	PhoneNumber: "973-572-6475",
    Email: "jhondoe@gmail.com",
    Id: 1
  },
  {
    Name: "Joe Smith",
   	PhoneNumber: "973-572-6476",
    Email: "joesmith@gmail.com",
    Id: 2
  },
  {
    Name: "Victor idk",
   	PhoneNumber: "973-572-6477",
    Email: "victoridk@gmail.com",
    Id: 3
  },
];

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
 });

app.get("/viewtables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
  //res.json(tables);
});

app.get("/style.css", function(req, res) {
  res.sendFile(path.join(__dirname, "style.css"));
  //res.json(tables);
});

app.get("/tables", function(req, res) {
  //res.sendFile(path.join(__dirname, "tables.html"));
  res.json(tables);
});

app.get("/waiting", function(req, res) {
  //res.sendFile(path.join(__dirname, "tables.html"));
  res.json(waitList);
});

app.post("/reserve", function(req, res) {

  var newRes = req.body;
console.log("request: "+req);
  if(tables.length < 5){
      tables.push(newRes);
  } else{
      waitList.push(newRes); 
  }
  res.json(newRes);
  //res.sendFile(path.join(__dirname, "tables.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

