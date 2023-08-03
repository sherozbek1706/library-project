const express = require("express");
const postPublisher = require("./post-publisher");
const getPublisher = require("./get-publisher");
const showPublisher = require("./show-publisher");
const editPublisher = require("./edit-publisher");
const deletePublish = require("./delete-publisher");
const httpValidator = require("../../shared/http-validator");
const {
  deleteOnePublisherSchema,
  editPublisherSchema,
  postPublisherSchema,
  showOnePublisherSchema,
} = require("./_schemas");
const post_publisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postPublisherSchema);
    const result = await postPublisher({ body: req.body });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const get_publisher = async (req, res, next) => {
  try {
    const result = await getPublisher();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const show_publisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showOnePublisherSchema);
    const result = await showPublisher({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const edit_publisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, editPublisherSchema);
    const result = await editPublisher({
      body: req.body,
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const delete_publisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteOnePublisherSchema);
    const result = await deletePublish({
      params: req.params.id,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post_publisher,
  get_publisher,
  show_publisher,
  edit_publisher,
  delete_publisher,
};
