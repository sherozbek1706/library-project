const express = require("express");
const loginAdmin = require("./login-admin");
const postAdmin = require("./post-admin");
const getAdmins = require("./get-admins");

const login_admins = async (req, res) => {
  try {
    const result = await loginAdmin({ body: req.body });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const post_admins = async (req, res) => {
  try {
    const result = await postAdmin({ body: req.body });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const get_admins = async (req, res) => {
  try {
    const result = await getAdmins();

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  login_admins,
  post_admins,
  get_admins,
};
