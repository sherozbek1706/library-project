const Author = require("./Author");
const getAuthor = async () => {
  const author = await Author.find();

  return author;
};

module.exports = getAuthor;
