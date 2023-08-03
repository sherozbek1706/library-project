const express = require("express");
const loginAdmin = require("./login-admin");
const postAdmin = require("./post-admin");
const getAdmins = require("./get-admins");
const showAdmins = require("./show-admin");
const editAdmin = require("./edit-admin");
const deleteAdmins = require("./delete-admin");
const httpValidator = require("../../shared/http-validator");
const {
  postLoginAdmins,
  postAdminsSchema,
  showOneAdminSchema,
  editAdminSchema,
  deleteOneAdminSchema,
} = require("./_schemas");

const login_admins = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginAdmins);
    const result = await loginAdmin({ body: req.body });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const post_admins = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAdminsSchema);
    const result = await postAdmin({ body: req.body });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const get_admins = async (req, res, next) => {
  try {
    const result = await getAdmins();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const show_admins = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showOneAdminSchema);
    const result = await showAdmins({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const edit_admins = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, editAdminSchema);
    const result = await editAdmin({
      body: req.body,
      params: req.params.id,
      user: req.user,
    });

    console.log(result);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const delete_admins = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteOneAdminSchema);
    const result = await deleteAdmins({ params: req.params.id });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login_admins,
  post_admins,
  get_admins,
  show_admins,
  edit_admins,
  delete_admins,
};
