const Book = require("./Book");

const getBook = async ({ query }) => {
  let filter = {};
  let sorted = {};
  const { q, sort = { by: "", order: "asc" } } = query;

  // SEARCH WITH title
  if (q) {
    filter.title = { $regex: new RegExp(q, "i") };
  }

  // SORT WITH title

  const { by, order } = sort;

  if (by == "copies") {
    sorted = order == "asc" ? { copies: 1 } : { copies: -1 };
  }

  const books = await Book.find(filter).sort(sorted);

  return { data: books };
};

module.exports = getBook;
