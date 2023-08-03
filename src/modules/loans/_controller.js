const express = require("express");
const postLoans = require("./post-loans");
const getLoans = require("./get-loans");
const showLoans = require("./show-loans");

const httpValidator = require("../../shared/http-validator");
const { postLoansSchema, showOneLoansSchema } = require("./_schemas");

const post_loans = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoansSchema);
    const result = await postLoans({ body: req.body, user: req.user });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const get_loans = async (req, res, next) => {
  try {
    const result = await getLoans({ query: req.query });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const show_loans = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showOneLoansSchema);
    const result = await showLoans({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post_loans,
  get_loans,
  show_loans,
};
