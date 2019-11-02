const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missionSchema = new Schema({
  itemname: {type: String },
  quantity: {type: Number },
  description: {type: String },  
  donorname: {type: String },
  volunteername: {type: String },
  recipientname: {type: String },
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("mission", missionSchema);

module.exports = mission;