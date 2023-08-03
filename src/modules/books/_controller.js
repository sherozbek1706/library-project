const postBook = require("./post-book");
const getBook = require("./get-book");
const showBook = require("./show-book");
const editBook = require("./edit-book");
const deleteBook = require("./delete-book");
const httpValidator = require("../../shared/http-validator");
const {
  deleteOneBookSchema,
  editBookSchema,
  postBookSchema,
  showOneBookSchema,
} = require("./_schemas");

const post_book = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBookSchema);
    const result = await postBook({ body: req.body });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const get_book = async (req, res, next) => {
  try {
    const result = await getBook({ query: req.query });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const show_book = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showOneBookSchema);
    const result = await showBook({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const edit_book = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, editBookSchema);
    const result = await editBook({ params: req.params.id, body: req.body });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const delete_book = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteOneBookSchema);
    const result = await deleteBook({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post_book,
  get_book,
  show_book,
  edit_book,
  delete_book,
};
