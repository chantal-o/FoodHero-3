const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Database configuration with mongoose

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database

mongoose.connect("mongodb://foodheros:foodheros1212@ds141228.mlab.com:41228/heroku_67bsl94b");


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodHeros";

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
