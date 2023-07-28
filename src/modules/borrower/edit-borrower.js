const Borrower = require("./Borrowers");

const editBorrower = async ({ body, params }) => {
  if (params.length !== 24) {
    return { error: "Borrower Not Found" };
  }
  const exist = await Borrower.find({ _id: params });

  if (!exist) {
    return { error: "Borrower Not Found" };
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
