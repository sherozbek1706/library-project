const Loans = require("./Loans");

const getLoans = async () => {
  const loansList = await Loans.find().populate([
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
  ]);

  return loansList;
};

module.exports = getLoans;
