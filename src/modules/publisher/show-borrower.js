const Publisher = require("./Publisher");

const showPublisher = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Publisher Not Found" };
  }

  const exist = await Publisher.find({ _id: params });

  if (!exist) {
    return { error: "Publisher Not Found" };
  }

  return { data: exist };
};

module.exports = showPublisher;
