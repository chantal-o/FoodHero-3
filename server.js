// Dependencies
var express = require("express");
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
const app = express();
var request = require("request");

const passport = require("passport");

const routes = require("./routes");
const users = require("./routes/api/users");



// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Define port
var port = process.env.PORT || 5000



// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// // Database configuration with mongoose

// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database




const app = express();


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  


mongoURI = process.env.mongoURI || "mongodb://localhost/FoodHeros";


db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function () {
    console.log("Mongoose connection successful.");
});


  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));