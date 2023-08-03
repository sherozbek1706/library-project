const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const showBook = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Book Not Found");
  }

  const existed = await Book.findOne({ _id: params });

  if (!existed) {
    throw new NotFoundError("Book Not Found");
  }

  return { data: existed };
};

module.exports = showBook;
