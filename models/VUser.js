const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
 
  volunteer: {
    type: String,
    
  },
  fname: {
    type: String,
    required: true
  },

  lname: {
    type: String,
    required: true
  },

  cname: {
    type: String,
    required: true
  },
  otype: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true
  },
  
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {}

module.exports = User = mongoose.model("vusers", UserSchema);