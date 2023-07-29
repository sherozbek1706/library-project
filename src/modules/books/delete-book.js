const Book = require("./Book");

const deleteBook = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Book Not Found" };
  }

  const existed = await Book.findOne({ _id: params });

  if (!existed) {
    return { error: "Book Not Found" };
  }

  const deleted = await Book.findByIdAndUpdate(
    { _id: params },
    { is_deleted: true },
    { new: true }
  );

  return { data: deleted };
};

module.exports = deleteBook;
