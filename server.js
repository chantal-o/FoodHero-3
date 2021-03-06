const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const pino = require('express-pino-logger')();
const mission = require("./routes/API/mission");
const users = require("./routes/API/users");
const inventory = require("./routes/API/inventory");
// const twilio = require("./routes/api/twilio");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
  })
);
app.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}));
app.use(pino);

//twillio

require('dotenv').config();
const client = require('twilio')(
    process.env.TWILIO_ACCOUT_SID,
    process.env.TWILIO_AUTH_TOKEN)
    //twillio
  

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

// Route for posting new donations to MongoDB
app.post('/inventory', (req, res) => {
  console.log(req.body);
  db.collection('inventory').insertOne(req.body, (err, data) => {
      if(err) return console.log(err);
      res.send(('saved to db: ' + data));
  })
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));