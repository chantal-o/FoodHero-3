const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  usertype: {type: String},
  firstname: { type: String },
  lastname: { type: String },
  username: {type: String },
  password: {type: String },
  mobile: {type: Number},
  organization: {type: String },
  streetnum: { type: Number },
  streetname: {type: String },
  cityname: {type: String },
  province: {type: String },
  postalcode: {type: String },
  accepttc: {type: Boolean },
  acceptem: {type: Boolean },
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("user", userSchema);

module.exports = user;