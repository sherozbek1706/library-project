const express = require("express");
const loginAdmin = require("./login-admin");
const postAdmin = require("./post-admin");

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

module.exports = {
  login_admins,
  post_admins,
};
