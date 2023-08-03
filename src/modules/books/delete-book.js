const Book = require("./Book");
const { NotFoundError } = require("../../shared/errors");
const deleteBook = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Book Not Found");
  }

  const existed = await Book.findOne({ _id: params });

  if (!existed) {
    throw new NotFoundError("Book Not Found");
  }

  const deleted = await Book.findByIdAndUpdate(
    { _id: params },
    { is_deleted: true },
    { new: true }
  );

  return { data: deleted };
};

module.exports = deleteBook;
