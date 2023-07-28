const express = require("express");
const postBorrowers = require("./post-borrower");
const getBorrower = require("./get-borrower");
const showBorrower = require("./show-borrower");
const editBorrower = require("./edit-borrower");

const post_borrowers = async (req, res) => {
  try {
    const result = await postBorrowers({ body: req.body });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const get_borrowers = async (req, res) => {
  try {
    const result = await getBorrower();

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const show_borrowers = async (req, res) => {
  try {
    const result = await showBorrower({ params: req.params.id });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const edit_borrowers = async (req, res) => {
  try {
    const result = await editBorrower({
      body: req.body,
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  post_borrowers,
  get_borrowers,
  show_borrowers,
  edit_borrowers,
};
