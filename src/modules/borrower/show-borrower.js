const { NotFoundError } = require("../../shared/errors");
const Borrowers = require("./Borrowers");

const showBorrower = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Borrowers Not Found");
  }

  const exist = await Borrowers.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Borrowers Not Found");
  }

  return { data: exist };
};

module.exports = showBorrower;
