const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const adminsSchema = new mongoose.Schema({
  full_name: reqType,
  username: {
    ...reqType,
    unique: true,
  },
  password: reqType,
  is_super: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
  is_deleted: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
});

const Admins = mongoose.model("Users", adminsSchema);

module.exports = Admins;
