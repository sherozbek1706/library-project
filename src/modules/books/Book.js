const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const BooksSchema = new mongoose.Schema({
  title: reqType,
  publisher: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "publisher",
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "authors",
  },
  copies: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  is_deleted: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
});

const Book = mongoose.model("books", BooksSchema);

module.exports = Book;
