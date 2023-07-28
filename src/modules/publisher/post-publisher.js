const Publisher = require("./Publisher");

const postPublisher = async ({ body }) => {
  const newPublisher = await Publisher.create(body);

  return { data: newPublisher };
};

module.exports = postPublisher;
