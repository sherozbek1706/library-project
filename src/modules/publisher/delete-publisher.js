const Publisher = require("./Publisher");

const deletePublish = async ({ params }) => {
  if (params.length !== 24) {
    return { error: "Publisher Not Found" };
  }

  const exist = await Publisher.find({ _id: params });

  if (!exist) {
    return { error: "Publisher Not Found" };
  }

  const deletedPublisher = await Publisher.findByIdAndUpdate(
    params,
    { is_deleted: true },
    { new: true }
  );

  return { data: deletedPublisher };
};

module.exports = deletePublish;
