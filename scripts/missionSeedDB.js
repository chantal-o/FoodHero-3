const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Mission collection and inserts the mission below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/mission"
// );

const db = require("../config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const missionSeed = [
  {
    itemname: "Canned Sardines",
    quantity: 30,
    description: "These are cans with sardines in them.",  
    donorname: "Longos",
    volunteername: "Joey Kabigting",
    recipientname: "Good Shepherd Soup Kitchen",
  }
];

db.mission
  .remove({})
  .then(() => db.mission.collection.insertMany(missionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
