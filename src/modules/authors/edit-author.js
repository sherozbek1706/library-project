const Author = require("./Author");
const { NotFoundError } = require("../../shared/errors");
const editAuthor = async ({ body, params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Author Not Found");
  }
  const exist = await Author.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Author Not Found");
  }

  const update = await Author.findByIdAndUpdate(
    params,
    { ...body },
    {
      new: true,
    }
  );

  return update;
};

module.exports = editAuthor;
