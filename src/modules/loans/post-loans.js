const Loans = require("./Loans");
const Book = require("../books/Book");
const Borrower = require("../borrower/Borrowers");

const postLoans = async ({ body, user }) => {
  const { book, borrower, day } = body;
  const { id } = user;

  // Borrower

  if (borrower.length !== 24) {
    return { error: "Borrower Not Found" };
  }

  const BorrowerExisted = await Borrower.findOne({ _id: borrower });

  if (!BorrowerExisted) {
    return { error: "Borrower Not Found" };
  }

  // Book

  if (book.length !== 24) {
    return { error: "Book Not Found" };
  }

  const BookExisted = await Book.findOne({ _id: book });

  if (!BookExisted) {
    return { error: "Book Not Found" };
  }

  // loans

  const loansList = await Loans.find().find({ borrower });

  if (loansList.length > 10) {
    return { error: "This borrower have 10 loan!" };
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
    return { error: "Sizda expired bo'lgan loads bor!" };
  }
  if (day > 60) {
    return { error: "Sorry, loan maximal day 60 day" };
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
