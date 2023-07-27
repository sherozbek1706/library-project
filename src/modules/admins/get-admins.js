const Admins = require("./Admins");

const getAdmins = async () => {
  const admins = await Admins.find();

  return { data: admins };
};

module.exports = getAdmins;
