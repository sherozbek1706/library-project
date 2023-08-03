const { NotFoundError } = require("../../shared/errors");
const Loans = require("./Loans");

const showLoans = async ({ params }) => {
  if (params.length != 24) {
    throw new NotFoundError("Loans Not Found");
  }

  const loansList = await Loans.find({ _id: params }).populate([
    {
      path: "borrower",
    },
    {
      path: "admin",
      select: "-password",
    },
    {
      path: "book",
      populate: {
        path: "author",
      },
    },
  ]);

  if (!loansList) {
    throw new NotFoundError("Loans Not Found");
  }

  return loansList;
};

module.exports = showLoans;
