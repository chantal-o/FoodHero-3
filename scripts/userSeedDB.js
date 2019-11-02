const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/user"
);

const userSeed = [
  {
    usertype: "Volunteer",
    firstname: "Joey",
    lastname: "Kabigting",
    username: "test123",
    password: "test123",
    mobile: 6472941663,
    streetnum: 123,
    streetname: "Fake Street",
    cityname: "Markham",
    province: "ON",
    postalcode: "L6B0E5",
    accepttc: true,
    acceptem: true,
    date: new Date(Date.now())
  },
  {
    usertype: "Donor",
    firstname: "Mister",
    lastname: "Longo",
    username: "test456",
    password: "test456",
    mobile: 9051234567,
    organization: "Longos",
    streetnum: 456,
    streetname: "Longos Lane",
    cityname: "Markham",
    province: "ON",
    postalcode: "L6B0E5",
    accepttc: true,
    acceptem: true,
    date: new Date(Date.now())
  },
  {
    usertype: "Recipient",
    firstname: "Miss",
    lastname: "Shepherd",
    username: "test789",
    password: "test789",
    mobile: 4169876543,
    organization: "Good Shepherd Soup Kitchen",
    streetnum: 789,
    streetname: "Sheppard Ave East",
    cityname: "Toronto",
    province: "Ontario",
    postalcode: "M1V3N2",
    accepttc: true,
    acceptem: true,
    date: new Date(Date.now())
  }
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
