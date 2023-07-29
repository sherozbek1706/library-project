const express = require("express");
const postAuthor = require("./post-author");
const getAuthor = require("./get-author");
const showAuthor = require("./show-author");
const editAuthor = require("./edit-author");
const deleteAuthors = require("./delete-author");

const post_author = async (req, res) => {
  try {
    const result = await postAuthor({ body: req.body });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const get_author = async (req, res) => {
  try {
    const result = await getAuthor();

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const show_author = async (req, res) => {
  try {
    const result = await showAuthor({ params: req.params.id });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const edit_author = async (req, res) => {
  try {
    const result = await editAuthor({
      body: req.body,
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const delete_author = async (req, res) => {
  try {
    const result = await deleteAuthors({
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  post_author,
  get_author,
  show_author,
  edit_author,
  delete_author,
};
