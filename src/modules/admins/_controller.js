const express = require("express");
const loginAdmin = require("./login-admin");

const login_admins = async (req, res) => {
  try {
    console.log(req.user);
    const result = await loginAdmin({ body: req.body });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  login_admins,
};
