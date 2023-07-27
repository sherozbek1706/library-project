const { compareSync } = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const Admins = require("./Admins");

const loginAdmin = async ({ body }) => {
  const { username, password } = body;

  const existed = await Admins.findOne({ username });

  if (!existed) {
    return "User Not Found.";
  }

  const isCorrect = compareSync(password, existed.password);

  if (!isCorrect) {
    return "Password incorrect.";
  }

  return { data: "You are logged" };
};

module.exports = loginAdmin;
