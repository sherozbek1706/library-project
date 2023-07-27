const { hashSync } = require("bcryptjs");
const Admins = require("./Admins");

const postAdmin = async ({ body }) => {
  const { username, password, ...data } = body;
  const existed = await Admins.findOne({ username });

  if (existed) {
    return { error: "This user already existed" };
  }

  const user = {
    ...data,
    username,
    password: hashSync(password, 10),
  };

  const newUser = await Admins.create({ ...user });

  return { data: newUser };
};

module.exports = postAdmin;
