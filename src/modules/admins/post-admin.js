const { hashSync } = require("bcryptjs");
const Admins = require("./Admins");

const postAdmin = async ({ body }) => {
  const { username, password, ...data } = body;
  const existed = await Admins.findOne({ username });

  if (existed) {
    return { error: "This user already existed" };
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
