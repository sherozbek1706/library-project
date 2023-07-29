const Author = require("./Author");

const postAuthor = async ({ body }) => {
  const newAuthor = await Author.create(body);

  return { data: newAuthor };
};

module.exports = postAuthor;
