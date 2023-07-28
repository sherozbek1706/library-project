const Borrowers = require("./Borrowers");
const getBorrower = async () => {
  const borrower = await Borrowers.find();

  return borrower;
};

module.exports = getBorrower;
