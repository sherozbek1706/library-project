const Admins = require("./Admins");

const getAdmins = async ({ query }) => {
  let filter = {};
  let sorted = {};
  const { q, sort = { by: "", order: "asc" } } = query;

  // SEARCH WITH FULL NAME

  if (q) {
    filter.full_name = { $regex: new RegExp(q, "i") };
  }

  // SORT WITH NAME

  const { by, order } = sort;

  if (by == "full_name") {
    sorted = order == "asc" ? { full_name: 1 } : { full_name: -1 };
  } else if (by == "username") {
    sorted = order == "asc" ? { username: 1 } : { username: -1 };
  }

  const admins = await Admins.find(filter).sort(sorted);

  return { data: admins };
};

module.exports = getAdmins;
