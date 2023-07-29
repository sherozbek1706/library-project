const Book = require("./Book");
const Publisher = require("../publisher/Publisher");
const Author = require("../authors/Author");
const postBook = async ({ body }) => {
  const { publisher, author } = body;
  if (publisher.length !== 24) {
    return { error: "Publisher Not Found" };
  }

  const PublisherExisted = await Publisher.findOne({ _id: publisher });
  console.log(PublisherExisted);
  if (!PublisherExisted) {
    return { error: "Publisher Not Found" };
  }

  if (author.length !== 24) {
    return { error: "Author Not Found" };
  }

  const AuthorExisted = await Author.findOne({ _id: author });

  if (!AuthorExisted) {
    return { error: "Author Not Found" };
  }

  const newBook = await Book.create(body);

  return { data: newBook };
};

module.exports = postBook;
