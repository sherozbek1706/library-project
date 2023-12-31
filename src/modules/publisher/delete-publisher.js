const Publisher = require("./Publisher");
const { NotFoundError } = require("../../shared/errors");
const deletePublish = async ({ params }) => {
  if (params.length !== 24) {
    throw new NotFoundError("Publisher Not Found");
  }

  const exist = await Publisher.find({ _id: params });

  if (!exist.length) {
    throw new NotFoundError("Publisher Not Found");
  }

  const deletedPublisher = await Publisher.findByIdAndUpdate(
    params,
    { is_deleted: true },
    { new: true }
  );

  return { data: deletedPublisher };
};

module.exports = deletePublish;
