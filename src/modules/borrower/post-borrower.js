const { BadRequestError } = require("../../shared/errors");
const Borrowers = require("./Borrowers");

const postBorrowers = async ({ body }) => {
  const existed = await Borrowers.findOne({ phone: body.phone });

  if (existed) {
    throw new BadRequestError("Borrowers existed!");
  }

  const newBorrower = await Borrowers.create(body);

  return { data: newBorrower };
};

module.exports = postBorrowers;
