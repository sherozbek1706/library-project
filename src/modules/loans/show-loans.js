const Loans = require("./Loans");

const showLoans = async () => {
  const loansList = await Loans.find().populate([
    {
      path: "borrower",
    },
    {
      path: "admin",
      select: "-password"
    },
    {
      path: "book",
      populate: {
        path: "author",
      },
    },
  ]);

  return loansList;
};

module.exports = showLoans;
