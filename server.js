// dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up Express
var app = express();
var PORT = process.env.PORT || 3000;

// set up app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// reservation array
var reservation = [{
  //routeName: "",
  name: "",
  phone_number: "",
  email: "",
  res_name: ""
}];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

// create new reservation
app.post("/reserve", function(req, res) {
  var newReservation = req.body;
  //newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);
  // stores this in memory - as long as instance remains running, it will stay there - not a good way to store things

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});