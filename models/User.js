const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
 usertype: {type: String},
 username: {type: String },
 firstname: { type: String },
 lastname: { type: String },
 organization: {type: String },
//  streetnum: { type: Number },
 streetname: {type: String },
 cityname: {type: String },
 province: {type: String },
 postalcode: {type: String },
 mobile: {type: Number},
 email:{type: String },
 password: {type: String },
 password2: {type: String },
 accepttc: {type: String },
 acceptem: {type: String },
 date: { type: Date, default: Date.now }
});
mongoose.models = {}


module.exports = User = mongoose.model("users", UserSchema);