const { NotFoundError } = require("../../shared/errors");
const Admins = require("./Admins");

const showAdmins = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Admin Not Found");
  }

  const exist = await Admins.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Admin Not Found");
  }

  return { data: exist };
};

module.exports = showAdmins;
