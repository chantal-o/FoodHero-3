const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const pino = require('express-pino-logger')();
const mission = require("./routes/api/mission");
const users = require("./routes/api/users");
const inventory = require("./routes/api/inventory");
// const twilio = require("./routes/api/twilio");

var herokuStrategy = require('passport-heroku').Strategy;

var heroku_APP_ID = "your app idf0ffaf0-3d57-4291-9d7e-fcac348104d8";
var heroku_APP_SECRET = "9e12971d-fed6-406a-8a6a-6166a86ed2b2";


const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(pino);

//twillio

require('dotenv').config();
const client = require('twilio')(
    process.env.TWILIO_ACCOUT_SID,
    process.env.TWILIO_AUTH_TOKEN)
    //twillio
  
    app.get('/', function(req, res, next) {
      res.sendfile('./html/auth.html');
    });
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

app.use("/api/mission", mission);
app.use("/api/users", users);
app.use("/api/inventory", inventory);
// app.use("/api/messages", twilio);








const port = process.env.mongoURI || "5000"; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));