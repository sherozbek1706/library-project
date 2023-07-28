const Admins = require("./Admins");

const deleteAdmins = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Admin Not Found" };
  }

  const exist = await Admins.find({ _id: params });

  if (!exist) {
    return { error: "Admin Not Found" };
  }

  const deletedAdmin = await Admins.findByIdAndUpdate(
    params,
    { is_deleted: true },
    { new: true }
  );

  return { data: deletedAdmin };
};

module.exports = deleteAdmins;
