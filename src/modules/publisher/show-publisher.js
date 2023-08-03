const Publisher = require("./Publisher");
const { NotFoundError } = require("../../shared/errors");
const showPublisher = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Publisher Not Found");
  }

  const exist = await Publisher.find({ _id: params });

  console.log(exist);
  if (!exist.length) {
    console.log('nega');
    throw new NotFoundError("Publisher Not Found");
  }

  return { data: exist };
};

module.exports = showPublisher;
