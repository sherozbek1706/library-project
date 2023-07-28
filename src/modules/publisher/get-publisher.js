const Publisher = require("./Publisher");
const getPublisher = async () => {
  const publisher = await Publisher.find();

  return publisher;
};

module.exports = getPublisher;
