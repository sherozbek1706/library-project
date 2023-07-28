const Admins = require("./Admins");

const showAdmins = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Admin Not Found" };
  }

  const exist = await Admins.find({ _id: params });

  if (!exist) {
    return { error: "Admin Not Found" };
  }

  return { data: exist };
};

module.exports = showAdmins;
