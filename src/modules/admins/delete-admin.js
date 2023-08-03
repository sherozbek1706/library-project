const Admins = require("./Admins");
const { NotFoundError } = require("../../shared/errors");
const deleteAdmins = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Admin Not Found");
  }

  const exist = await Admins.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Admin Not Found");
  }

  const deletedAdmin = await Admins.findByIdAndUpdate(params, {
    is_deleted: true,
  });

  return { data: deletedAdmin };
};

module.exports = deleteAdmins;
