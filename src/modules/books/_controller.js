const postBook = require("./post-book");
const getBook = require("./get-book");
const showBook = require("./show-book");
const editBook = require("./edit-book");

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

const show_book = async (req, res) => {
  try {
    const result = await showBook({ params: req.params.id });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const edit_book = async (req, res) => {
  try {
    const result = await editBook({ params: req.params.id, body: req.body });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  post_book,
  get_book,
  show_book,
  edit_book,
};
