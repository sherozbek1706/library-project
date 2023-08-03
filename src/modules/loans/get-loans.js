const Loans = require("./Loans");

const getLoans = async ({ query }) => {
  let sorted = {};
  const { sort = { by: "", order: "asc" } } = query;

  // SORT WITH NAME

  const { by, order } = sort;

  if (by == "out_date") {
    sorted = order == "asc" ? { out_date: 1 } : { out_date: -1 };
  } else if (by == "due_date") {
    sorted = order == "asc" ? { due_date: 1 } : { due_date: -1 };
  }

  const loansList = await Loans.find()
    .populate([
      {
        path: "borrower",
        select: "full_name",
      },
      {
        path: "admin",
        select: "full_name",
      },
      {
        path: "book",
        select: "title author",
        populate: {
          path: "author",
          select: "name",
        },
      },
    ])
    .sort(sorted);

  return loansList;
};

module.exports = getLoans;
