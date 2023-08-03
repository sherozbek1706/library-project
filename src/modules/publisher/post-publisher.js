const { BadRequestError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const postPublisher = async ({ body }) => {
  const existed = await Publisher.findOne({ phone: body.phone });

  if (existed) {
    throw new BadRequestError("Publisher existed!");
  }

  const newPublisher = await Publisher.create(body);

  return { data: newPublisher };
};

module.exports = postPublisher;
