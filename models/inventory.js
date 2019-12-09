const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  itemname: {type: String },
  numberofunits: {type: Number },
  description: {type: String },  
  shelflife: {type: String },
  pickuptime: {type: String },
  date: { type: Date, default: Date.now }
});

const inventory = mongoose.model("inventory", inventorySchema);

module.exports = inventory;