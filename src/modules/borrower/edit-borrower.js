const { NotFoundError, BadRequestError } = require("../../shared/errors");
const Borrower = require("./Borrowers");

const editBorrower = async ({ body, params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Borrowers Not Found");
  }
  const exist = await Borrower.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Borrowers Not Found");
  }

  const update = await Borrower.findByIdAndUpdate(
    params,
    { ...body },
    {
      new: true,
    }
  );

  return update;
};

module.exports = editBorrower;
