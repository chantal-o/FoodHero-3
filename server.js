// Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
const routes = require("./routes");
const app = express();
// Scraping tools
var request = require("request");
var cheerio = require("cheerio");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Define port
var port = process.env.PORT || 3006

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Database configuration with mongoose

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database

mongoose.connect("mongodb://FoodHeros:b7bWN!UAeb@R@4H@ds141198.mlab.com:41198/heroku_pwpxv4pd");


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/FoodHeros";

mongoose.connect(MONGODB_URI,
    { useNewUrlParser: true }
);

var db = mongoose.connection;

db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function () {
    console.log("Mongoose connection successful.");
});
