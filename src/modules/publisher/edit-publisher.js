const Publisher = require("./Publisher");
const { NotFoundError } = require("../../shared/errors");

const editPublisher = async ({ body, params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Publisher Not Found");
  }
  const exist = await Publisher.find({ _id: params });

  if (!exist.length) {
    throw new NotFoundError("Publisher Not Found");
  }

  const update = await Publisher.findByIdAndUpdate(
    params,
    { ...body },
    {
      new: true,
    }
  );

  return update;
};

module.exports = editPublisher;
