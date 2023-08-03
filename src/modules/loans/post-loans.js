const Loans = require("./Loans");
const Book = require("../books/Book");
const Borrower = require("../borrower/Borrowers");
const {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
} = require("../../shared/errors");
const postLoans = async ({ body, user }) => {
  const { book, borrower, day } = body;
  const { id } = user;

  // Borrower

  if (borrower.length !== 24) {
    throw new NotFoundError("Borrower Not Found");
  }

  const BorrowerExisted = await Borrower.findOne({ _id: borrower });

  if (!BorrowerExisted) {
    throw new NotFoundError("Borrower Not Found");
  }

  // Book

  if (book.length !== 24) {
    throw new NotFoundError("Book Not Found");
  }

  const BookExisted = await Book.findOne({ _id: book });

  if (!BookExisted) {
    throw new NotFoundError("Book Not Found");
  }

  // loans

  const loansList = await Loans.find().find({ borrower });

  if (loansList.length > 10) {
    throw new ForbiddenError(
      "Userning topshirmagan buyurtmalari 10 tadan o'tib ketgan"
    );
  }

  let expiredProduct = [];

  loansList.forEach((element) => {
    let currentTime = Date.now();
    let overTime = new Date(element.due_date).getTime();

    if (overTime - currentTime < 0) {
      expiredProduct.push(element);
    }
  });

  if (expiredProduct.length > 0) {
    throw new ForbiddenError("Sizda expired bo'lgan loads bor!");
  }
  if (day > 60) {
    throw new ForbiddenError("Sorry, loan maximal day 60 day");
  }

  let out_date = new Date(new Date() + 10).toJSON().slice(0, 10);
  let due_date = new Date(Date.now() + day * 24 * 60 * 60 * 1000)
    .toJSON()
    .slice(0, 10);

  const loans = {
    book,
    borrower,
    out_date,
    due_date,
    admin: id,
  };

  const newLoans = await Loans.create(loans);

  return { data: newLoans };
  return { data: loansList };
};

module.exports = postLoans;
