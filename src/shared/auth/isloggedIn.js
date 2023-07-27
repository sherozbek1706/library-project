const express = require("express");
const config = require("../config");
const jwt = require("jsonwebtoken");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return "Unauthorized.";
    }

    const decoded = jwt.verify(token, config.jwt.secret);

    

    req.user = decoded.id;

    next();
  } catch (error) {
    next(error.message);
  }
};

module.exports = isLoggedIn;
