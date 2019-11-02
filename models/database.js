const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;