const express = require("express");
const postBorrowers = require("./post-borrower");
const getBorrower = require("./get-borrower");
const showBorrower = require("./show-borrower");
const editBorrower = require("./edit-borrower");
const deleteBorrowers = require("./delete-borrower");
const httpValidator = require("../../shared/http-validator");
const {
  deleteOneBorrowersSchema,
  editBorrowersSchema,
  postBorrowersSchema,
  showOneBorrowersSchema,
} = require("./_schemas");
const post_borrowers = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBorrowersSchema);
    const result = await postBorrowers({ body: req.body });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const get_borrowers = async (req, res, next) => {
  try {
    const result = await getBorrower({ query: req.query });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const show_borrowers = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showOneBorrowersSchema);
    const result = await showBorrower({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const edit_borrowers = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, editBorrowersSchema);
    const result = await editBorrower({
      body: req.body,
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const delete_borrowers = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteOneBorrowersSchema);
    const result = await deleteBorrowers({
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post_borrowers,
  get_borrowers,
  show_borrowers,
  edit_borrowers,
  delete_borrowers,
};
