const Publisher = require("./Publisher");
const getPublisher = async ({ query }) => {
  let filter = {};
  let sorted = {};
  const { q, sort = { by: "", order: "asc" } } = query;

  // SEARCH WITH NAME
  if (q) {
    filter.full_name = { $regex: new RegExp(q, "i") };
  }

  // SORT WITH NAME

  const { by, order } = sort;

  if (by == "full_name") {
    sorted = order == "asc" ? { full_name: 1 } : { full_name: -1 };
  }

  const publisher = await Publisher.find(filter).sort(sorted);

  return publisher;
};

module.exports = getPublisher;
