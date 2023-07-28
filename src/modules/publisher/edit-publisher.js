const Publisher = require("./Publisher");

const editPublisher = async ({ body, params }) => {
  if (params.length !== 24) {
    return { error: "Publisher Not Found" };
  }
  const exist = await Publisher.find({ _id: params });

  if (!exist) {
    return { error: "Publisher Not Found" };
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
