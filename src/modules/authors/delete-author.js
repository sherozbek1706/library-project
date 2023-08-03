const Author = require("./Author");
const { NotFoundError } = require("../../shared/errors");

const deleteAuthors = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Author Not Found");
  }

  const exist = await Author.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Author Not Found");
  }

  const deletedAuthors = await Author.findByIdAndUpdate(
    params,
    { is_deleted: true },
    { new: true }
  );

  return { data: deletedAuthors };
};

module.exports = deleteAuthors;
