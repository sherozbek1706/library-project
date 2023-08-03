const Book = require("./Book");
const Publisher = require("../publisher/Publisher");
const Author = require("../authors/Author");
const { NotFoundError } = require("../../shared/errors");
const postBook = async ({ body }) => {
  const { publisher, author } = body;
  if (publisher.length !== 24) {
    throw new NotFoundError("Publisher Not Found");
  }

  const PublisherExisted = await Publisher.findOne({ _id: publisher });

  if (!PublisherExisted) {
    throw new NotFoundError("Publisher Not Found");
  }

  if (author.length !== 24) {
    throw new NotFoundError("Author Not Found");
  }

  const AuthorExisted = await Author.findOne({ _id: author });

  if (!AuthorExisted) {
    throw new NotFoundError("Author Not Found");
  }

  const newBook = await Book.create(body);

  return { data: newBook };
};

module.exports = postBook;
