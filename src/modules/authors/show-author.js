const Author = require("./Author");

const showAuthor = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Author Not Found" };
  }

  const exist = await Author.find({ _id: params });

  if (!exist) {
    return { error: "Author Not Found" };
  }

  return { data: exist };
};

module.exports = showAuthor;
