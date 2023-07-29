const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const AuthorsSchema = new mongoose.Schema({
  name: reqType,
  is_deleted: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
});

const Authors = mongoose.model("authors", AuthorsSchema);

module.exports = Authors;
