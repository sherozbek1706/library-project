const express = require("express");
const postBook = require("./post-book");

const post_book = async (req, res) => {
  try {
    const result = await postBook({ body: req.body });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = post_book;
