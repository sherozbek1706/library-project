const Borrower = require("./Borrowers");
const { NotFoundError } = require("../../shared/errors");
const deleteBorrowers = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Borrowers Not Found");
  }

  const exist = await Borrower.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Borrowers Not Found");
  }

  const deletedBorrower = await Borrower.findByIdAndUpdate(
    params,
    { is_deleted: true },
    { new: true }
  );

  return { data: deletedBorrower };
};

module.exports = deleteBorrowers;
