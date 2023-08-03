const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Author Not Found");
  }

  const exist = await Author.find({ _id: params });

  if (!exist) {
    throw new NotFoundError("Author Not Found");
  }

  return { data: exist };
};

module.exports = showAuthor;
