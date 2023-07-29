const Book = require("./Book");

const showBook = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Book Not Found" };
  }

  const existed = await Book.findOne({ _id: params })

  if (!existed) {
    return { error: "Book Not Found" };
  }

  return { data: existed };
};

module.exports = showBook;
