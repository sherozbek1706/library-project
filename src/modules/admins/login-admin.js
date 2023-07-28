const { compareSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admins = require("./Admins");
const config = require("../../shared/config");

const loginAdmin = async ({ body }) => {
  const { username, password } = body;

  const existed = await Admins.findOne({ username });

  if (!existed) {
    return "Admin Not Found.";
  }

  const isCorrect = compareSync(password, existed.password);

  if (!isCorrect) {
    return "Password incorrect.";
  }

  const token = jwt.sign(
    { id: existed._id, isSuper: existed.is_super },
    config.jwt.secret,
    {
      expiresIn: "1d",
    }
  );

  return { token };
};

module.exports = loginAdmin;
