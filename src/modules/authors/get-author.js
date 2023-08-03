const Author = require("./Author");
const getAuthor = async ({query}) => {
  let filter = {};
  let sorted = {};
  const { q, sort = { by: "", order: "asc" } } = query;

  // SEARCH WITH NAME
  if (q) {
    filter.name = { $regex: new RegExp(q, "i") };
  }

  // SORT WITH NAME

  const { by, order } = sort;

  if (by == "name") {
    sorted = order == "asc" ? { name: 1 } : { name: -1 };
  }

  const author = await Author.find(filter).sort(sorted);

  return author;
};

module.exports = getAuthor;
