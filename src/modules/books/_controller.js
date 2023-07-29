const postBook = require("./post-book");
const getBook = require("./get-book");

const post_book = async (req, res) => {
  try {
    const result = await postBook({ body: req.body });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const get_book = async (req, res) => {
  try {
    const result = await getBook();

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  post_book,
  get_book,
};
