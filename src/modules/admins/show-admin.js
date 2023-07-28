const Admins = require("./Admins");

const showAdmins = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "User Not Found" };
  }
  console.log(params);

  const exist = await Admins.find({ _id: params });

  if (!exist) {
    return { error: "User Not Found" };
  }

  return { data: exist };
};

module.exports = showAdmins;
