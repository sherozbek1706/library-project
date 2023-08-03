const Borrowers = require("./Borrowers");
const getBorrower = async ({ query }) => {
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

  const borrower = await Borrowers.find(filter).sort(sorted);

  return borrower;
};

module.exports = getBorrower;
