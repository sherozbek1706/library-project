const { hashSync } = require("bcryptjs");
const Admins = require("./Admins");

const editAdmin = async ({ body, params, user }) => {
  let exist;
  let id;
  if (params == "me") {
    id = user.id;
    console.log(id);
    exist = await Admins.find({ _id: user.id });
  } else {
    if (params.length !== 24) {
      return { error: "Admin Not Found" };
    }
    id = params;
    exist = await Admins.find({ _id: params });
  }

  if (!exist) {
    return { error: "Admin Not Found" };
  }

  const updatingAdmin = { ...body, password: hashSync(body.password, 10) };

  const update = await Admins.findByIdAndUpdate(id, updatingAdmin, {
    new: true,
  });

  return update;
};

module.exports = editAdmin;
