const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const borrowersSchema = new mongoose.Schema({
  full_name: reqType,
  address: reqType,
  phone: {
    ...reqType,
    unique: true,
  },
  is_deleted: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
});

const Borrowers = mongoose.model("borrowers", borrowersSchema);

module.exports = Borrowers;
