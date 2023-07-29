const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const LoansSchema = new mongoose.Schema({
  book: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "books",
  },
  out_date: {
    type: mongoose.SchemaTypes.Date,
  },
  due_date: {
    type: mongoose.SchemaTypes.Date,
  },
  borrower: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "borrowers",
  },
  admin: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "admins",
  },
});

const Loans = mongoose.model("loans", LoansSchema);

module.exports = Loans;
