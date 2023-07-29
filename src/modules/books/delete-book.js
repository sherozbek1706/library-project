const Book = require("./Book");

const deleteBook = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Book Not Found" };
  }

  const existed = await Book.findOne({ _id: params });

  if (!existed) {
    return { error: "Book Not Found" };
  }

  await Book.findByIdAndDelete({ _id: params });

  return { data: existed };
};

module.exports = deleteBook;
