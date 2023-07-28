const express = require("express");
const postBorrowers = require("./post-borrower");

const post_borrowers = async (req, res) => {
  try {
    const result = await postBorrowers({ body: req.body });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  post_borrowers,
};
