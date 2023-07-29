const Book = require("./Book");

const getBook = async () => {
  const books = await Book.find();

  return { data: books };
};

module.exports = getBook;
