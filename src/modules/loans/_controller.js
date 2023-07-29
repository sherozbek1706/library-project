const express = require("express");
const postLoans = require("./post-loans");
const getLoans = require("./get-loans");
const showLoans = require("./show-loans");

const post_loans = async (req, res) => {
  try {
    const result = await postLoans({ body: req.body, user: req.user });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const get_loans = async (req, res) => {
  try {
    const result = await getLoans();

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const show_loans = async (req, res) => {
  try {
    const result = await showLoans();

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  post_loans,
  get_loans,
  show_loans,
};
