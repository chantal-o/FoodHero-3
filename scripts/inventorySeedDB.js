const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inventory collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/inventory"
);

const inventorySeed = [
  {
    itemname: "Canned Sardines",
    quantity: 30,
    description: "These are cans with sardines in them.",  
    username: "test456",
    date: new Date(Date.now())
  }
];

db.inventory
  .remove({})
  .then(() => db.inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
