const Borrowers = require("./Borrowers");

const showBorrower = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Borrower Not Found" };
  }

  const exist = await Borrowers.find({ _id: params });

  if (!exist) {
    return { error: "Borrower Not Found" };
  }

  return { data: exist };
};

module.exports = showBorrower;
