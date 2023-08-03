const { hashSync } = require("bcryptjs");
const Admins = require("./Admins");
const { BadRequestError } = require("../../shared/errors");

const postAdmin = async ({ body }) => {
  const { username, password, ...data } = body;
  const existed = await Admins.findOne({ username });

  if (existed) {
    throw new BadRequestError("This user already existed");
  }

  const admin = {
    ...data,
    username,
    password: hashSync(password, 10),
  };

  const newAdmin = await Admins.create({ ...admin });

  return { data: newAdmin };
};

module.exports = postAdmin;
