const express = require("express");
const postAuthor = require("./post-author");
const getAuthor = require("./get-author");
const showAuthor = require("./show-author");
const editAuthor = require("./edit-author");
const deleteAuthors = require("./delete-author");
const httpValidator = require("../../shared/http-validator");
const {
  deleteOneAuthorSchema,
  editAuthorSchema,
  postAuthorSchema,
  showOneAuthorSchema,
} = require("./_schemas");

const post_author = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAuthorSchema);
    const result = await postAuthor({ body: req.body });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const get_author = async (req, res, next) => {
  try {
    const result = await getAuthor({ query: req.query });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const show_author = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showOneAuthorSchema);
    const result = await showAuthor({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const edit_author = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, editAuthorSchema);
    const result = await editAuthor({
      body: req.body,
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const delete_author = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteOneAuthorSchema);
    const result = await deleteAuthors({
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post_author,
  get_author,
  show_author,
  edit_author,
  delete_author,
};
