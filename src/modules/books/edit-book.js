const Book = require("./Book");
const Publisher = require("../publisher/Publisher");
const Author = require("../authors/Author");

const editBook = async ({ body, params }) => {
  const { publisher, author } = body;
  if (params.length !== 24) {
    return { error: "Book Not Found" };
  }

  // PUBLISHER

  if (publisher.length !== 24) {
    return { error: "Publisher Not Found" };
  }

  const PublisherExisted = await Publisher.findOne({ _id: publisher });

  if (!PublisherExisted) {
    return { error: "Publisher Not Found" };
  }

  // AUTHOR

  if (author.length !== 24) {
    return { error: "Author Not Found" };
  }

  const AuthorExisted = await Author.findOne({ _id: author });

  if (!AuthorExisted) {
    return { error: "Author Not Found" };
  }

  const udatedBook = await Book.findByIdAndUpdate(params, body, { new: true });

  return { data: udatedBook };
};

module.exports = editBook;
